#!/usr/bin/env node

import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import {
  chmod,
  copyFile,
  lstat,
  mkdir,
  readFile,
  readdir,
  readlink,
  stat,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { execFile as execFileCallback } from "node:child_process";

const execFile = promisify(execFileCallback);
const here = path.dirname(fileURLToPath(import.meta.url));

export const WRITER_VERSION = "0.1.0";
export const REQUESTED_MODEL = "claude-fable-5[1m]";
export const REQUESTED_EFFORT = "high";
const EXPECTED_MODEL = /^claude-fable-5(?:-\d{8})?$/;
const MAX_OUTPUT_FILES = 96;
const MAX_OUTPUT_BYTES = 5_000_000;
const ALLOWED_OUTPUT_EXTENSIONS = new Set([
  ".cjs",
  ".css",
  ".html",
  ".js",
  ".json",
  ".md",
  ".svg",
  ".txt",
]);

export const DEFAULT_INPUT_PATHS = [
  "README.md",
  "learning/README.md",
  "learning/chapters/context-management-in-agent-harnesses.md",
  "learning/READER-FEEDBACK.md",
  "research/syntheses/context-management-across-harnesses.md",
  "research/claims/context-management-across-harnesses.md",
  "research/sources/codex-cli-v0.144.6-context.md",
  "research/sources/letta-code-v0.28.11-context.md",
  "research/sources/arize-2026-context-management-harnesses.md",
  "research/case-studies/pi-v0.80.6.md",
  "research/case-studies/openhands-sdk-v1.35.0.md",
  "research/case-studies/openclaw-v2026.6.6.md",
  "research/case-studies/hermes-agent-v0.18.2.md",
  "research/cycles/checkpoint-3-taxonomy-and-method-review.md",
];

const RESULT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["status", "summary", "created_files", "content_checks", "limitations"],
  properties: {
    status: { enum: ["complete", "blocked"] },
    summary: { type: "string" },
    created_files: {
      type: "array",
      uniqueItems: true,
      items: { type: "string" },
    },
    content_checks: {
      type: "array",
      items: { type: "string" },
    },
    limitations: {
      type: "array",
      items: { type: "string" },
    },
  },
};

function fail(message) {
  const error = new Error(message);
  error.code = "HTML_WRITER_ERROR";
  throw error;
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

async function fileRecord(filePath, relativePath) {
  const bytes = await readFile(filePath);
  return {
    path: relativePath.replaceAll(path.sep, "/"),
    bytes: bytes.byteLength,
    sha256: sha256(bytes),
  };
}

async function walkTree(root, relative = "", options = {}) {
  const entries = await readdir(path.join(root, relative), { withFileTypes: true });
  const files = [];
  const directories = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (!relative && options.excludeRootNames?.has(entry.name)) continue;
    const childRelative = path.join(relative, entry.name);
    const childAbsolute = path.join(root, childRelative);
    const info = await lstat(childAbsolute);
    if (info.isSymbolicLink()) {
      if (options.rejectSpecial) fail(`Symbolic link is not allowed: ${childAbsolute}`);
      files.push({
        path: childRelative.replaceAll(path.sep, "/"),
        kind: "symlink",
        target: await readlink(childAbsolute),
      });
      continue;
    }
    if (info.isDirectory()) {
      directories.push(childRelative);
      const nested = await walkTree(root, childRelative, options);
      directories.push(...nested.directories);
      files.push(...nested.files);
      continue;
    }
    if (!info.isFile()) {
      if (options.rejectSpecial) fail(`Special output is not allowed: ${childAbsolute}`);
      files.push({ path: childRelative.replaceAll(path.sep, "/"), kind: "special" });
      continue;
    }
    const record = await fileRecord(childAbsolute, childRelative);
    files.push({ ...record, kind: "file", mode: info.mode & 0o777 });
  }
  return { files, directories };
}

async function snapshotRepository(repoRoot) {
  const tree = await walkTree(repoRoot, "", { excludeRootNames: new Set([".git"]) });
  return tree.files;
}

function compareSnapshots(before, after) {
  return stableJson(before) === stableJson(after);
}

function assertDisposableWorkspace(workspaceRoot) {
  const resolved = path.resolve(workspaceRoot);
  const allowedRoots = [...new Set([path.resolve(os.tmpdir()), path.resolve("/private/tmp")])];
  const allowed = allowedRoots.some(
    (root) => resolved !== root && resolved.startsWith(`${root}${path.sep}`),
  );
  if (!allowed) {
    fail(`Writer workspace must be a new directory beneath one of: ${allowedRoots.join(", ")}`);
  }
  return resolved;
}

async function chmodInputTree(inputRoot) {
  const tree = await walkTree(inputRoot);
  for (const file of tree.files) {
    if (file.kind === "file") await chmod(path.join(inputRoot, file.path), 0o400);
  }
  for (const directory of tree.directories.sort((a, b) => b.length - a.length)) {
    await chmod(path.join(inputRoot, directory), 0o500);
  }
  await chmod(inputRoot, 0o500);
}

export async function prepareWorkspace({
  repoRoot,
  workspaceRoot,
  inputPaths = DEFAULT_INPUT_PATHS,
}) {
  const repo = path.resolve(repoRoot);
  const workspace = assertDisposableWorkspace(workspaceRoot);
  await mkdir(workspace, { mode: 0o700 });
  const inputRoot = path.join(workspace, "input");
  const outputRoot = path.join(workspace, "output");
  const logsRoot = path.join(workspace, "logs");
  await Promise.all([
    mkdir(inputRoot, { mode: 0o700 }),
    mkdir(outputRoot, { mode: 0o700 }),
    mkdir(logsRoot, { mode: 0o700 }),
  ]);

  const sources = [];
  for (const relativePath of [...inputPaths].sort()) {
    if (path.isAbsolute(relativePath) || relativePath.split(/[\\/]/).includes("..")) {
      fail(`Input path must be repository-relative: ${relativePath}`);
    }
    const source = path.join(repo, relativePath);
    const info = await lstat(source).catch(() => null);
    if (!info?.isFile() || info.isSymbolicLink()) {
      fail(`Approved input is missing or is not a regular file: ${relativePath}`);
    }
    const destination = path.join(inputRoot, relativePath);
    await mkdir(path.dirname(destination), { recursive: true, mode: 0o700 });
    await copyFile(source, destination);
    sources.push(await fileRecord(destination, relativePath));
  }

  const inputManifest = {
    schema_version: "claude-html-writer-input-v1",
    writer_version: WRITER_VERSION,
    canonical_repository: repo,
    sources,
  };
  await writeFile(
    path.join(inputRoot, "input-manifest.json"),
    stableJson(inputManifest),
    { mode: 0o400 },
  );

  const settings = {
    permissions: {
      allow: [
        `Read(${inputRoot}/**)`,
        `Read(${outputRoot}/**)`,
        `Write(${outputRoot}/**)`,
        `Glob(${inputRoot}/**)`,
        `Glob(${outputRoot}/**)`,
        `Grep(${inputRoot}/**)`,
        `Grep(${outputRoot}/**)`,
      ],
      deny: [
        `Write(${inputRoot}/**)`,
        `Edit(${inputRoot}/**)`,
        `Read(${repo}/**)`,
        `Write(${repo}/**)`,
        `Edit(${repo}/**)`,
        "Read(/Users/jernotte/**)",
        "Write(/Users/jernotte/**)",
        "Edit(/Users/jernotte/**)",
        "Read(**/.env)",
        "Read(**/.env.*)",
        "Read(**/credentials/**)",
        "Read(**/secrets/**)",
      ],
    },
  };
  const settingsPath = path.join(workspace, "writer-settings.json");
  await writeFile(settingsPath, stableJson(settings), { mode: 0o400 });
  await chmodInputTree(inputRoot);
  return { repo, workspace, inputRoot, outputRoot, logsRoot, settingsPath, inputManifest };
}

function allowedEnvironment() {
  const exact = new Set(["HOME", "PATH", "TMPDIR", "LANG", "LC_ALL", "SHELL", "USER"]);
  const prefix = /^(ANTHROPIC|CLAUDE|AWS|GOOGLE|AZURE|HTTP_PROXY|HTTPS_PROXY|NO_PROXY)/;
  return Object.fromEntries(
    Object.entries(process.env).filter(([key, value]) => value !== undefined && (exact.has(key) || prefix.test(key))),
  );
}

function writerPrompt(inputRoot) {
  return [
    "Create the first bounded harness-engineering learning site from the approved copied inputs.",
    `Approved read-only input directory: ${inputRoot}`,
    "The current working directory is the only writable output directory.",
    "Inspect input/input-manifest.json and every listed learning, synthesis, claim, case, checkpoint, and audit file before authoring.",
    "Write only beneath site/ and tooling/.",
    "The generator must rebuild the static site from the Markdown; do not make generated HTML the knowledge source.",
    "Use source-native language and preserve all uncertainty, default/optional, evidence, lineage, and outcome limits.",
    "Create a complete two-page static pilot plus the bounded deterministic generator and its README.",
    "Do not claim to have executed or browser-tested anything.",
  ].join("\n");
}

function parseClaudeEnvelope(stdout) {
  let envelope;
  try {
    envelope = JSON.parse(stdout);
  } catch {
    fail("Claude writer output was not a JSON envelope.");
  }
  if (envelope?.is_error === true || envelope?.subtype === "error") {
    fail(`Claude writer returned an error: ${envelope?.result || "unknown error"}`);
  }
  let candidate = envelope?.structured_output ?? envelope?.structuredOutput;
  if (candidate === undefined && typeof envelope?.result === "object") candidate = envelope.result;
  if (candidate === undefined && typeof envelope?.result === "string") {
    try {
      candidate = JSON.parse(envelope.result);
    } catch {
      // The missing structured output error below is clearer.
    }
  }
  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
    fail("Claude writer envelope did not contain the structured completion object.");
  }
  if (candidate.status !== "complete") fail(`Claude writer did not complete: ${candidate.summary || "blocked"}`);
  for (const key of ["created_files", "content_checks", "limitations"]) {
    if (!Array.isArray(candidate[key])) fail(`Claude writer result is missing ${key}.`);
  }

  const modelUsage = envelope?.modelUsage || envelope?.model_usage || {};
  const usageModels = Object.keys(modelUsage);
  const explicitModel = envelope?.model || envelope?.model_name || envelope?.modelName;
  const topUsage = envelope?.usage || {};
  const exactUsageMatches = usageModels.filter((model) => {
    const usage = modelUsage[model] || {};
    return usage.inputTokens === topUsage.input_tokens && usage.outputTokens === topUsage.output_tokens;
  });
  const primaryModels = explicitModel
    ? [explicitModel]
    : exactUsageMatches.length === 1
      ? exactUsageMatches
      : usageModels.length === 1
        ? usageModels
        : [];
  if (primaryModels.length !== 1 || !EXPECTED_MODEL.test(primaryModels[0])) {
    fail(`Unexpected resolved writer model: ${primaryModels.join(", ") || "unknown"}`);
  }
  return { envelope, candidate, primaryModel: primaryModels[0] };
}

async function validateWriterOutput(outputRoot, candidate) {
  const tree = await walkTree(outputRoot, "", { rejectSpecial: true });
  const files = tree.files.filter((entry) => entry.kind === "file");
  if (!files.length) fail("Claude writer created no files.");
  if (files.length > MAX_OUTPUT_FILES) fail(`Claude writer exceeded ${MAX_OUTPUT_FILES} files.`);
  const bytes = files.reduce((sum, entry) => sum + entry.bytes, 0);
  if (bytes > MAX_OUTPUT_BYTES) fail(`Claude writer exceeded ${MAX_OUTPUT_BYTES} output bytes.`);
  for (const file of files) {
    const top = file.path.split("/")[0];
    if (top !== "site" && top !== "tooling") fail(`Output escaped site/ and tooling/: ${file.path}`);
    if (!ALLOWED_OUTPUT_EXTENSIONS.has(path.extname(file.path).toLowerCase())) {
      fail(`Unsupported output extension: ${file.path}`);
    }
  }
  const actual = files.map((entry) => entry.path).sort();
  const claimed = [...new Set(candidate.created_files.map((item) => item.replace(/^\.\//, "")))].sort();
  if (stableJson(actual) !== stableJson(claimed)) {
    fail(`Claude writer file manifest does not match output. Actual=${actual.join(", ")} Claimed=${claimed.join(", ")}`);
  }
  return { files, total_bytes: bytes };
}

export async function runWriter({
  repoRoot,
  workspaceRoot,
  claudeBin = process.env.CLAUDE_BIN || "/Users/jernotte/.local/bin/claude",
  inputPaths = DEFAULT_INPUT_PATHS,
  timeoutMs = Number(process.env.CLAUDE_HTML_WRITER_TIMEOUT_MS || 1_200_000),
}) {
  const prepared = await prepareWorkspace({ repoRoot, workspaceRoot, inputPaths });
  const repositoryBefore = await snapshotRepository(prepared.repo);
  const inputBefore = await walkTree(prepared.inputRoot);
  const contract = await readFile(path.join(here, "writer-contract.md"), "utf8");
  const cliVersion = (await execFile(claudeBin, ["--version"], { encoding: "utf8", timeout: 30_000 })).stdout.trim();
  const availableTools = "Read,Glob,Grep,Write";
  const allowedTools = [
    `Read(${prepared.inputRoot}/**)`,
    `Read(${prepared.outputRoot}/**)`,
    `Write(${prepared.outputRoot}/**)`,
    `Glob(${prepared.inputRoot}/**)`,
    `Glob(${prepared.outputRoot}/**)`,
    `Grep(${prepared.inputRoot}/**)`,
    `Grep(${prepared.outputRoot}/**)`,
  ].join(",");
  const args = [
    "--safe-mode",
    "--print",
    "--no-session-persistence",
    "--permission-mode",
    "acceptEdits",
    "--tools",
    availableTools,
    "--allowed-tools",
    allowedTools,
    "--disallowed-tools",
    "Bash,Edit,NotebookEdit,WebSearch,WebFetch,Task,Agent,Skill",
    "--settings",
    prepared.settingsPath,
    "--strict-mcp-config",
    "--mcp-config",
    '{"mcpServers":{}}',
    "--no-chrome",
    "--disable-slash-commands",
    "--add-dir",
    prepared.inputRoot,
    "--system-prompt",
    contract,
    "--output-format",
    "json",
    "--json-schema",
    JSON.stringify(RESULT_SCHEMA),
    "--model",
    REQUESTED_MODEL,
    "--effort",
    REQUESTED_EFFORT,
  ];

  const { stdout, stderr } = await new Promise((resolve, reject) => {
    const child = spawn(claudeBin, args, {
      cwd: prepared.outputRoot,
      env: allowedEnvironment(),
      stdio: ["pipe", "pipe", "pipe"],
      shell: false,
    });
    let stdout = "";
    let stderr = "";
    let settled = false;
    const finish = (fn, value) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      fn(value);
    };
    const timer = setTimeout(() => {
      child.kill("SIGTERM");
      finish(reject, new Error(`Claude HTML writer exceeded ${timeoutMs}ms.`));
    }, timeoutMs);
    child.on("error", (error) => finish(reject, error));
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
      if (stdout.length > 8_000_000) child.kill("SIGTERM");
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
      if (stderr.length > 2_000_000) child.kill("SIGTERM");
    });
    child.on("close", (code, signal) => {
      if (code !== 0) {
        finish(reject, new Error(`Claude HTML writer exited ${code}${signal ? ` (${signal})` : ""}: ${stderr.slice(-8_000)}`));
      } else {
        finish(resolve, { stdout, stderr });
      }
    });
    child.stdin.end(writerPrompt(prepared.inputRoot));
  });

  const parsed = parseClaudeEnvelope(stdout);
  const inputAfter = await walkTree(prepared.inputRoot);
  if (!compareSnapshots(inputBefore.files, inputAfter.files)) fail("Claude writer mutated an approved input copy.");
  const repositoryAfter = await snapshotRepository(prepared.repo);
  if (!compareSnapshots(repositoryBefore, repositoryAfter)) fail("Claude writer mutated the canonical repository.");
  const output = await validateWriterOutput(prepared.outputRoot, parsed.candidate);
  const result = {
    schema_version: "claude-html-writer-run-v1",
    writer_version: WRITER_VERSION,
    requested_model: REQUESTED_MODEL,
    resolved_model: parsed.primaryModel,
    effort: REQUESTED_EFFORT,
    claude_cli_version: cliVersion,
    workspace: prepared.workspace,
    input_manifest_sha256: sha256(Buffer.from(stableJson(prepared.inputManifest))),
    output,
    writer_report: parsed.candidate,
    usage: parsed.envelope?.usage || null,
  };
  await writeFile(path.join(prepared.logsRoot, "writer-result.json"), stableJson(result), { mode: 0o600 });
  if (stderr.trim()) await writeFile(path.join(prepared.logsRoot, "writer-stderr.txt"), stderr, { mode: 0o600 });
  return result;
}

function parseArgs(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key.startsWith("--")) fail(`Unexpected argument: ${key}`);
    const value = argv[index + 1];
    if (value === undefined || value.startsWith("--")) fail(`Missing value for ${key}`);
    result[key.slice(2)] = value;
    index += 1;
  }
  return result;
}

async function main() {
  const [command, ...rest] = process.argv.slice(2);
  if (command !== "run") fail("Usage: node tools/html-writer/cli.mjs run --repo <path> --workspace <new /tmp path> [--claude-bin <path>]");
  const args = parseArgs(rest);
  if (!args.repo || !args.workspace) fail("--repo and --workspace are required.");
  const result = await runWriter({
    repoRoot: args.repo,
    workspaceRoot: args.workspace,
    claudeBin: args["claude-bin"],
  });
  process.stdout.write(stableJson(result));
}

if (path.resolve(process.argv[1] || "") === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    process.stderr.write(`${error.stack || error.message}\n`);
    process.exitCode = 1;
  });
}
