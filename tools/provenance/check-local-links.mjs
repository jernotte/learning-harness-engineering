#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const markdown = [];

function walk(directory) {
  for (const name of fs.readdirSync(directory)) {
    if (name === ".git") continue;
    const file = path.join(directory, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) walk(file);
    else if (file.endsWith(".md")) markdown.push(file);
  }
}

walk(root);
const missing = [];
const markdownLink = /\[[^\]]*\]\(([^)]+)\)/g;
for (const file of markdown) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(markdownLink)) {
    const raw = match[1].split("#")[0].replace(/^<|>$/g, "");
    if (!raw || /^[a-z][a-z0-9+.-]*:/i.test(raw)) continue;
    const target = path.resolve(path.dirname(file), decodeURIComponent(raw));
    if (!fs.existsSync(target)) missing.push(`${path.relative(root, file)} -> ${raw}`);
  }
}

if (missing.length) {
  console.error(`Local Markdown links: BLOCKED\n${missing.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log("Local Markdown links: PASS");
}
