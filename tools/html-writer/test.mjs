#!/usr/bin/env node

import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, symlink, writeFile, chmod } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { runWriter } from "./cli.mjs";

const INPUTS = ["learning/README.md", "learning/chapters/chapter.md"];

async function fixtureRepo() {
  const root = await mkdtemp(path.join(os.tmpdir(), "html-writer-repo-"));
  await mkdir(path.join(root, "learning", "chapters"), { recursive: true });
  await writeFile(path.join(root, "learning", "README.md"), "# Learning\n");
  await writeFile(path.join(root, "learning", "chapters", "chapter.md"), "# Chapter\n");
  return root;
}

async function fakeClaude({ model = "claude-fable-5", mutateInput = false, makeSymlink = false } = {}) {
  const root = await mkdtemp(path.join(os.tmpdir(), "html-writer-fake-"));
  const script = path.join(root, "claude-fake.mjs");
  await writeFile(script, `#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
const args = process.argv.slice(2);
if (args[0] === "--version") { console.log("Claude Code fake"); process.exit(0); }
if (args[args.indexOf("--permission-mode") + 1] !== "acceptEdits") {
  console.error("writer must use explicit write-enabled acceptEdits mode");
  process.exit(3);
}
if (!args[args.indexOf("--tools") + 1].split(",").includes("Write")) {
  console.error("writer tool envelope is missing Write");
  process.exit(4);
}
const addDir = args[args.indexOf("--add-dir") + 1];
if (${JSON.stringify(mutateInput)}) {
  const target = path.join(addDir, "learning", "README.md");
  fs.chmodSync(target, 0o600);
  fs.writeFileSync(target, "mutated\\n");
}
fs.mkdirSync("site", { recursive: true });
fs.mkdirSync("tooling", { recursive: true });
fs.writeFileSync("site/index.html", "<!doctype html><html lang=\\"en\\"><title>Test</title></html>\\n");
fs.writeFileSync("tooling/generate.cjs", "// deterministic test generator\\n");
if (${JSON.stringify(makeSymlink)}) fs.symlinkSync("index.html", "site/link.html");
const created = ["site/index.html", "tooling/generate.cjs"${makeSymlink ? ', "site/link.html"' : ""}].sort();
const report = { status: "complete", summary: "fixture", created_files: created, content_checks: [], limitations: [] };
console.log(JSON.stringify({ structured_output: report, usage: { input_tokens: 1, output_tokens: 1 }, modelUsage: { ${JSON.stringify(model)}: { inputTokens: 1, outputTokens: 1 } } }));
`);
  await chmod(script, 0o700);
  return script;
}

test("fresh Fable-high writer is path-bounded and produces a computed result", async () => {
  const repo = await fixtureRepo();
  const workspace = path.join(os.tmpdir(), `html-writer-run-${Date.now()}-${Math.random().toString(16).slice(2)}`);
  const result = await runWriter({
    repoRoot: repo,
    workspaceRoot: workspace,
    claudeBin: await fakeClaude(),
    inputPaths: INPUTS,
  });
  assert.equal(result.resolved_model, "claude-fable-5");
  assert.equal(result.effort, "high");
  assert.deepEqual(result.output.files.map((entry) => entry.path), ["site/index.html", "tooling/generate.cjs"]);
  assert.match(await readFile(path.join(workspace, "logs", "writer-result.json"), "utf8"), /claude-html-writer-run-v1/);
});

test("input-copy mutation is rejected", async () => {
  const repo = await fixtureRepo();
  const workspace = path.join(os.tmpdir(), `html-writer-mutate-${Date.now()}-${Math.random().toString(16).slice(2)}`);
  await assert.rejects(
    runWriter({ repoRoot: repo, workspaceRoot: workspace, claudeBin: await fakeClaude({ mutateInput: true }), inputPaths: INPUTS }),
    /mutated an approved input copy/,
  );
});

test("symbolic output is rejected", async () => {
  const repo = await fixtureRepo();
  const workspace = path.join(os.tmpdir(), `html-writer-link-${Date.now()}-${Math.random().toString(16).slice(2)}`);
  await assert.rejects(
    runWriter({ repoRoot: repo, workspaceRoot: workspace, claudeBin: await fakeClaude({ makeSymlink: true }), inputPaths: INPUTS }),
    /Symbolic link is not allowed/,
  );
});

test("unexpected resolved model is rejected", async () => {
  const repo = await fixtureRepo();
  const workspace = path.join(os.tmpdir(), `html-writer-model-${Date.now()}-${Math.random().toString(16).slice(2)}`);
  await assert.rejects(
    runWriter({ repoRoot: repo, workspaceRoot: workspace, claudeBin: await fakeClaude({ model: "claude-haiku-4-5" }), inputPaths: INPUTS }),
    /Unexpected resolved writer model/,
  );
});
