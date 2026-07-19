#!/usr/bin/env node

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const {
  extractFrontmatter,
  extractOpeningHeadings,
  generate,
  replaceCanonicalDiagram,
} = require("./generate.cjs");

const repoRoot = path.resolve(__dirname, "../..");
const chapterPath = path.join(repoRoot, "learning/chapters/where-harnesses-put-control.md");
const chapter = fs.readFileSync(chapterPath, "utf8");

let assertions = 0;
function check(condition, message) {
  assertions += 1;
  assert.ok(condition, message);
}

function expectThrow(fn, pattern) {
  assertions += 1;
  assert.throws(fn, pattern);
}

function filesUnder(root) {
  const output = [];
  function walk(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) walk(absolute);
      else output.push(path.relative(root, absolute));
    }
  }
  walk(root);
  return output.sort();
}

const parsed = extractFrontmatter(chapter);
check(parsed.attributes.id === "where-harnesses-put-control", "chapter id is parsed");
check(parsed.attributes.source_cases.length === 4, "all four source cases are parsed");
check(parsed.attributes.source_cases.every((item) => /^[0-9a-f]{40}$/.test(item.commit)), "all source-case pins are full commits");

const opening = extractOpeningHeadings(parsed.body, parsed.attributes.title);
check(opening.title === parsed.attributes.title, "frontmatter and H1 agree");
check(opening.subtitle === "Model-directed loops inside programmed execution and recovery envelopes", "subtitle derives from Markdown");
check(!opening.body.trimStart().startsWith("# "), "opening headings are removed from the render body");

const diagrammed = replaceCanonicalDiagram(opening.body);
check(diagrammed.includes('<figure class="control-map"'), "canonical Mermaid becomes the accessible diagram");
expectThrow(
  () => replaceCanonicalDiagram(opening.body.replace("I[Ingress and admission]", "I[Changed ingress]")),
  /canonical control diagram changed/i,
);

const invalidPin = chapter.replace(
  "2b3fda9921b5590f285165287bd442a25817f17b",
  "not-a-commit",
);
expectThrow(() => extractFrontmatter(invalidPin), /invalid source-case boundary/i);

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "learning-site-test-"));
const first = path.join(tempRoot, "first");
const second = path.join(tempRoot, "second");
generate({ repoRoot, outputRoot: first });
generate({ repoRoot, outputRoot: second });

const firstFiles = filesUnder(first);
const secondFiles = filesUnder(second);
check(JSON.stringify(firstFiles) === JSON.stringify(secondFiles), "clean regenerations have the same file set");
check(firstFiles.length === 5, "site contains two pages, two assets, and one manifest");
for (const relative of firstFiles) {
  check(
    fs.readFileSync(path.join(first, relative)).equals(fs.readFileSync(path.join(second, relative))),
    `${relative} regenerates byte-identically`,
  );
}

const html = fs.readFileSync(path.join(first, "chapters/where-harnesses-put-control.html"), "utf8");
check((html.match(/<h1(?:\s|>)/g) || []).length === 1, "chapter contains exactly one H1");
check((html.match(/data-evidence-kind="inference"/g) || []).length === 4, "all four explicit inference trails remain inferences");
check(!html.includes('evidence-detail kind-fact'), "an inference over facts is never strengthened to fact");
check(html.includes("commit 2b3fda9921b5590f285165287bd442a25817f17b"), "full commits remain screen-reader accessible");
check(html.includes("How to read evidence"), "the epistemic legend is present");

const manifest = JSON.parse(fs.readFileSync(path.join(first, "generated-source-manifest.json"), "utf8"));
check(manifest.renderer.name === "marked" && manifest.renderer.version === "17.0.5", "renderer identity is pinned");
check(manifest.pages.length === 2, "manifest maps both pages");
check(manifest.pages.every((page) => page.derived_from.length > 0), "every page names its canonical inputs");

const occupied = path.join(tempRoot, "occupied");
fs.mkdirSync(occupied);
fs.writeFileSync(path.join(occupied, "keep.txt"), "keep\n");
expectThrow(() => generate({ repoRoot, outputRoot: occupied }), /must be empty/i);
check(fs.readFileSync(path.join(occupied, "keep.txt"), "utf8") === "keep\n", "generator preserves a nonempty destination");

fs.rmSync(tempRoot, { recursive: true, force: true });
process.stdout.write(`PASS learning-site generator (${assertions} assertions)\n`);
