#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

let marked;
let markedVersion;
try {
  ({ marked } = require("marked"));
  ({ version: markedVersion } = require("marked/package.json"));
} catch (error) {
  throw new Error(
    "The learning-site generator requires `marked`. Run it with the bundled workspace NODE_PATH described in tools/learning-site/README.md.",
    { cause: error },
  );
}

const EXPECTED_MARKED_VERSION = "17.0.5";

const CHAPTER_SLUG = "context-management-in-agent-harnesses";
const CHAPTER_MARKDOWN = `learning/chapters/${CHAPTER_SLUG}.md`;
const CHAPTER_HTML = `chapters/${CHAPTER_SLUG}.html`;
const SYNTHESIS_PATH = "research/syntheses/context-management-across-harnesses.md";
const CLAIMS_PATH = "research/claims/context-management-across-harnesses.md";

const EXPECTED_CONTEXT_PIPELINE = `flowchart LR
  D[(Durable task state)] --> S[Select]
  P[Instructions and policy] --> S
  W[Workspace and environment] --> R[Read or retrieve]
  M[(Long-term memory)] --> R
  R --> S
  S --> T[Transform and budget]
  T --> C[Active model context]
  C --> A[Model action]
  A --> E[Environment effect]
  E --> O[Shape observation]
  O --> D
  O --> T
  S -. omitted material .-> X[Not visible this turn]`;

const EXPECTED_COMPACTION_PIPELINE = `flowchart LR
  H[Protected head] --> N[Next active context]
  O[Older middle] --> U[Summarize or evict]
  U --> N
  R[Recent tail] --> N
  O -. raw history may remain .-> D[(Durable store)]
  U -. omission or hallucination risk .-> Q[Retention uncertainty]`;

const SOURCE_PATHS = [
  "learning/README.md",
  CHAPTER_MARKDOWN,
  SYNTHESIS_PATH,
  CLAIMS_PATH,
  "research/sources/cp2-pi-v0.80.6.md",
  "research/sources/cp2-openhands-sdk-v1.35.0.md",
  "research/sources/cp2-openclaw-v2026.6.6.md",
  "research/sources/cp2-hermes-agent-v0.18.2.md",
  "research/sources/codex-cli-v0.144.6-context.md",
  "research/sources/letta-code-v0.28.11-context.md",
  "research/sources/arize-2026-context-management-harnesses.md",
  "research/sources/semenov-2026-beyond-compaction.md",
  "research/sources/cim-2026-parallel-compaction.md",
  "research/sources/hou-2026-memoryagentbench.md",
];

const TOOL_PATHS = [
  "tools/learning-site/generate.cjs",
  "tools/learning-site/assets/styles.css",
  "tools/learning-site/assets/site.js",
];

function parseArgs(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key.startsWith("--")) throw new Error(`Unexpected argument: ${key}`);
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) throw new Error(`Missing value for ${key}`);
    result[key.slice(2)] = value;
    index += 1;
  }
  return result;
}

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function stripTags(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .trim();
}

function slugify(value) {
  return stripTags(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "section";
}

function unquote(value) {
  const trimmed = String(value || "").trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function extractFrontmatter(markdown) {
  if (!markdown.startsWith("---\n")) return { attributes: {}, body: markdown };
  const end = markdown.indexOf("\n---\n", 4);
  if (end < 0) throw new Error("Unterminated learning-chapter frontmatter.");
  const raw = markdown.slice(4, end);
  const body = markdown.slice(end + 5);
  const attributes = {};
  for (const key of ["id", "title", "summary", "status", "updated"]) {
    const match = raw.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
    if (match) attributes[key] = unquote(match[1]);
  }
  const learningObjectives = [];
  const objectiveLines = raw.split("\n");
  const objectiveStart = objectiveLines.findIndex((line) => line === "learning_objectives:");
  if (objectiveStart >= 0) {
    for (const line of objectiveLines.slice(objectiveStart + 1)) {
      if (/^[a-z_]+:/.test(line)) break;
      const item = line.match(/^\s*-\s+(.+)$/);
      if (item) learningObjectives.push(unquote(item[1]));
    }
  }
  attributes.learning_objectives = learningObjectives;

  const sourceCases = [];
  const rawLines = raw.split("\n");
  const sourceStart = rawLines.findIndex((line) => line === "source_cases:");
  const sourceLines = [];
  if (sourceStart >= 0) {
    for (const line of rawLines.slice(sourceStart + 1)) {
      if (/^[a-z_]+:/.test(line)) break;
      sourceLines.push(line);
    }
  }
  const sourceBlock = sourceLines.join("\n");
  let current = null;
  for (const line of sourceBlock.split("\n")) {
    const name = line.match(/^\s*-\s+name:\s*(.+)$/);
    if (name) {
      current = { name: unquote(name[1]) };
      sourceCases.push(current);
      continue;
    }
    const field = line.match(/^\s+(version|commit):\s*(.+)$/);
    if (field && current) current[field[1]] = unquote(field[2]);
  }
  attributes.source_cases = sourceCases;
  for (const key of ["id", "title", "summary", "status", "updated"]) {
    if (!attributes[key]) throw new Error(`Missing required frontmatter field: ${key}`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(attributes.id)) {
    throw new Error(`Invalid chapter id: ${attributes.id}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(attributes.updated)) {
    throw new Error(`Invalid chapter updated date: ${attributes.updated}`);
  }
  if (!sourceCases.length) throw new Error("The chapter must name at least one source case.");
  for (const sourceCase of sourceCases) {
    if (!sourceCase.name || !sourceCase.version || !/^[0-9a-f]{40}$/.test(sourceCase.commit || "")) {
      throw new Error(`Invalid source-case boundary: ${JSON.stringify(sourceCase)}`);
    }
  }
  return { attributes, body };
}

function extractOpeningHeadings(markdown, expectedTitle) {
  const match = markdown.match(/^\s*#\s+([^\n]+)\n\n##\s+([^\n]+)\n\n/);
  if (!match) throw new Error("The chapter must begin with an H1 and subtitle H2 after frontmatter.");
  if (match[1].trim() !== expectedTitle) {
    throw new Error(`Frontmatter title and chapter H1 disagree: ${expectedTitle} != ${match[1].trim()}`);
  }
  return {
    title: match[1].trim(),
    subtitle: match[2].trim(),
    body: markdown.slice(match[0].length),
  };
}

function replaceCanonicalDiagrams(markdown) {
  const matches = [...markdown.matchAll(/```mermaid\s*\n([\s\S]*?)\n```/g)];
  if (matches.length !== 2) {
    throw new Error(`Expected exactly two canonical context diagrams; found ${matches.length}.`);
  }
  const replacements = new Map([
    [EXPECTED_CONTEXT_PIPELINE, renderContextPipeline()],
    [EXPECTED_COMPACTION_PIPELINE, renderCompactionPipeline()],
  ]);
  const seen = new Set();
  let output = markdown;
  for (const match of matches) {
    const actual = match[1].replaceAll("\r\n", "\n").trim();
    const replacement = replacements.get(actual);
    if (!replacement || seen.has(actual)) {
      throw new Error("A canonical context diagram changed or was duplicated; update the accessible renderer deliberately.");
    }
    seen.add(actual);
    output = output.replace(match[0], replacement);
  }
  return output;
}

function renderContextPipeline() {
  return `<figure class="context-map" aria-labelledby="context-map-caption">
  <figcaption id="context-map-caption">
    <strong>The context pipeline</strong>
    <span>Durable information becomes model evidence only after selection, retrieval, transformation, and budgeting.</span>
  </figcaption>
  <div class="context-sources" aria-label="Candidate information sources">
    <article><span>Durable state</span><small>events, transcript, branches</small></article>
    <article><span>Instructions</span><small>policy, tools, skills</small></article>
    <article><span>Workspace</span><small>files, environment, results</small></article>
    <article><span>Long-term memory</span><small>retrieved or injected state</small></article>
  </div>
  <ol class="context-flow" aria-label="Context construction stages">
    <li><b>1</b><span><strong>Select or retrieve</strong><small>Choose candidates for this call.</small></span></li>
    <li><b>2</b><span><strong>Transform and budget</strong><small>Truncate, summarize, normalize, order.</small></span></li>
    <li class="active-context"><b>3</b><span><strong>Active model context</strong><small>The only representation the model can use now.</small></span></li>
    <li><b>4</b><span><strong>Action and observation</strong><small>Effects create new candidate evidence.</small></span></li>
  </ol>
  <p class="omission-note"><strong>Omitted material</strong> can remain durable while being completely invisible to the model on this turn.</p>
</figure>`;
}

function renderCompactionPipeline() {
  return `<figure class="compaction-map" aria-labelledby="compaction-map-caption">
  <figcaption id="compaction-map-caption">
    <strong>The common compaction shape</strong>
    <span>A protected head and recent tail surround a transformed middle; storage retention and model visibility remain separate.</span>
  </figcaption>
  <div class="history-before" aria-label="History before compaction">
    <span class="segment head">Protected head</span>
    <span class="segment middle">Older middle</span>
    <span class="segment tail">Recent tail</span>
  </div>
  <div class="compaction-arrow" aria-hidden="true"><span>summarize or evict</span>↓</div>
  <div class="history-after" aria-label="Active context after compaction">
    <span class="segment head">Protected head</span>
    <span class="segment summary">Summary or retained structure</span>
    <span class="segment tail">Recent tail</span>
  </div>
  <div class="compaction-notes">
    <p><strong>Durable store</strong><span>The raw middle may still exist.</span></p>
    <p><strong>Active uncertainty</strong><span>Omission and hallucination can survive as fluent context.</span></p>
  </div>
</figure>`;
}

function addHeadingIds(html) {
  const counts = new Map();
  const headings = [];
  const output = html.replace(/<h([1-6])>([\s\S]*?)<\/h\1>/g, (_match, level, inner) => {
    const base = slugify(inner);
    const count = (counts.get(base) || 0) + 1;
    counts.set(base, count);
    const id = count === 1 ? base : `${base}-${count}`;
    headings.push({ level: Number(level), id, text: stripTags(inner) });
    return `<h${level} id="${id}">${inner}<a class="heading-anchor" href="#${id}" aria-label="Link to ${escapeHtml(stripTags(inner))}">#</a></h${level}>`;
  });
  return { html: output, headings };
}

function enhanceRenderedHtml(html) {
  let output = html;
  if (output.includes('class="language-mermaid"')) {
    throw new Error("An unhandled Mermaid block reached rendered HTML.");
  }
  output = output.replace(/<table>/g, '<div class="table-scroll" role="region" aria-label="Scrollable comparison table" tabindex="0"><table>');
  output = output.replace(/<\/table>/g, "</table></div>");
  output = output.replace(/<blockquote>/g, '<blockquote class="callout">');
  output = output.replace(
    /<blockquote class="callout">\s*<p><strong>Common confusion/g,
    '<blockquote class="callout confusion"><p><strong>Common confusion',
  );
  output = output.replace(/<details>([\s\S]*?)<\/details>/g, (_match, inner) => {
    const status = stripTags(inner).match(/Status:\s*([^\n]+)/i)?.[1]?.trim().toLowerCase();
    if (!status) throw new Error("Every evidence detail must carry an explicit Status line.");
    let kind;
    if (status.includes("inference")) kind = "inference";
    else if (status.includes("verified implementation fact")) kind = "fact";
    else if (status.includes("source-reported")) kind = "reported";
    else if (status.includes("engineering recommendation")) kind = "recommendation";
    else if (status.includes("contradict") || status.includes("contested")) kind = "contested";
    else if (status.includes("open question")) kind = "open";
    else throw new Error(`Unsupported evidence status: ${status}`);
    return `<details class="evidence-detail kind-${kind}" data-evidence-kind="${kind}">${inner}</details>`;
  });
  output = output.replace(/<a href="(https?:\/\/[^\"]+)"/g, '<a href="$1" rel="noreferrer"');
  return addHeadingIds(output);
}

function renderMarkdown(markdown) {
  marked.setOptions({ gfm: true, breaks: false });
  return enhanceRenderedHtml(marked.parse(markdown));
}

function rewriteLandingLinks(html) {
  return html
    .replaceAll(`href="chapters/${CHAPTER_SLUG}.md"`, `href="${CHAPTER_HTML}"`)
    .replaceAll('href="READER-FEEDBACK.md"', 'href="../learning/READER-FEEDBACK.md"');
}

function rewriteChapterLinks(html) {
  return html.replaceAll('href="../READER-FEEDBACK.md"', 'href="../../learning/READER-FEEDBACK.md"');
}

function tocEntries(headings) {
  return headings
    .filter((heading) => heading.level === 2 || heading.level === 3)
    .map(
      (heading) => `<li class="toc-level-${heading.level}"><a href="#${heading.id}">${escapeHtml(heading.text)}</a></li>`,
    )
    .join("\n    ");
}

function renderToc(headings) {
  return `<nav class="toc" aria-label="On this page">
  <p class="toc-title">On this page</p>
  <ol>
    ${tocEntries(headings)}
  </ol>
</nav>`;
}

function renderInlineToc(headings) {
  return `<details class="toc-inline">
  <summary>On this page</summary>
  <nav aria-label="On this page">
    <ol>
    ${tocEntries(headings)}
    </ol>
  </nav>
</details>`;
}

function estimateReadingMinutes(markdown) {
  const words = stripTags(markdown.replace(/```[\s\S]*?```/g, " ")).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

function topNavigation(prefix, active) {
  return `<header class="site-header">
  <a class="brand" href="${prefix}index.html" aria-label="Harness Engineering home">
    <span class="brand-mark" aria-hidden="true">H</span>
    <span><strong>Harness Engineering</strong><small>Living field guide</small></span>
  </a>
  <nav class="primary-nav" aria-label="Primary">
    <a${active === "home" ? ' aria-current="page"' : ""} href="${prefix}index.html">Overview</a>
    <a${active === "chapter" ? ' aria-current="page"' : ""} href="${prefix}${CHAPTER_HTML}">Chapter 1</a>
    <a href="${prefix}../${SYNTHESIS_PATH}">Research</a>
  </nav>
  <button class="theme-toggle" type="button" data-theme-toggle aria-label="Use dark theme" title="Change color theme">
    <span class="theme-icon" aria-hidden="true">◐</span><span class="theme-label">Theme</span>
  </button>
</header>`;
}

function pageShell({ title, description, prefix, active, body, bodyClass = "" }) {
  return `<!doctype html>
<html lang="en" data-theme="system">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="description" content="${escapeHtml(description)}">
  <title>${escapeHtml(title)} · Harness Engineering</title>
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='18' fill='%23006b5a'/%3E%3Cpath d='M18 14h8v14h12V14h8v36h-8V36H26v14h-8z' fill='white'/%3E%3C/svg%3E">
  <link rel="stylesheet" href="${prefix}assets/styles.css">
  <script defer src="${prefix}assets/site.js"></script>
</head>
<body class="${escapeHtml(bodyClass)}">
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div class="reading-progress" aria-hidden="true"><span data-reading-progress></span></div>
  ${topNavigation(prefix, active)}
  ${body}
  <footer class="site-footer">
    <p><strong>Harness Engineering</strong> · Evidence first, learning delivered.</p>
    <nav aria-label="Footer">
      <a href="${prefix}../learning/README.md">Canonical learning Markdown</a>
      <a href="${prefix}../learning/READER-FEEDBACK.md">Reader feedback</a>
      <a href="${prefix}../research/STATUS.md">Research status</a>
    </nav>
  </footer>
</body>
</html>\n`;
}

function landingPage(learningHtml, attributes, readingMinutes) {
  return pageShell({
    title: "Learning guide",
    description: "A research-backed learning guide to the architecture around language models.",
    prefix: "",
    active: "home",
    bodyClass: "landing-page",
    body: `<main id="main-content" tabindex="-1">
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow">Harness engineering · Chapter 1</p>
      <h1 id="hero-title">Design what the model can know.</h1>
      <p class="hero-lede">${escapeHtml(attributes.summary)}</p>
      <div class="hero-actions">
        <a class="button primary" href="${CHAPTER_HTML}">Start the chapter <span aria-hidden="true">→</span></a>
        <a class="button quiet" href="../${SYNTHESIS_PATH}">Inspect the synthesis</a>
      </div>
      <p class="hero-note"><span class="status-dot" aria-hidden="true"></span> Provisional learning material · four pinned, maintainer-reviewed cases</p>
    </div>
    <div class="hero-model" aria-label="Three-layer knowledge architecture">
      <p class="model-kicker">One source of truth, three views</p>
      <ol>
        <li><span>01</span><div><strong>Evidence</strong><small>Pinned code, claims, sources, limits</small></div></li>
        <li><span>02</span><div><strong>Learning Markdown</strong><small>Canonical human explanation</small></div></li>
        <li><span>03</span><div><strong>This site</strong><small>Generated reading experience</small></div></li>
      </ol>
    </div>
  </section>

  <section class="chapter-feature" aria-labelledby="chapter-feature-title">
    <div>
      <p class="eyebrow">Current lesson</p>
      <h2 id="chapter-feature-title">${escapeHtml(attributes.title)}</h2>
      <p>${escapeHtml(attributes.summary)}</p>
    </div>
    <dl class="chapter-facts">
      <div><dt>Level</dt><dd>Technically capable newcomer</dd></div>
      <div><dt>Evidence</dt><dd>4 reviewed implementation pins</dd></div>
      <div><dt>Status</dt><dd>Provisional, lineage-aware</dd></div>
      <div><dt>Length</dt><dd>About ${readingMinutes} min</dd></div>
    </dl>
    <a class="text-link" href="${CHAPTER_HTML}">Read Chapter 1 <span aria-hidden="true">→</span></a>
  </section>

  <section class="landing-copy prose" aria-labelledby="guide-details-title">
    <h2 id="guide-details-title" class="visually-hidden">About this learning guide</h2>
    ${learningHtml}
  </section>
</main>`,
  });
}

function chapterPage(attributes, subtitle, chapterHtml, headings, readingMinutes) {
  const objectives = attributes.learning_objectives || [];
  const objectivesBlock = objectives.length
    ? `<div class="chapter-objectives">
          <p id="chapter-objectives-title">After this chapter you should be able to</p>
          <ul aria-labelledby="chapter-objectives-title">
            ${objectives.map((item) => `<li>${escapeHtml(item.replace(/\.$/, ""))}</li>`).join("\n            ")}
          </ul>
        </div>`
    : "";
  const cases = attributes.source_cases || [];
  const caseList = cases
    .map(
      (item) => `<li><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.version || "")}</span><code><span aria-hidden="true">${escapeHtml((item.commit || "").slice(0, 9))}</span><span class="visually-hidden">commit ${escapeHtml(item.commit || "")}</span></code></li>`,
    )
    .join("\n");
  return pageShell({
    title: attributes.title || "Context Management in Agent Harnesses",
    description: attributes.summary || "Understand how agent harnesses construct and transform model context.",
    prefix: "../",
    active: "chapter",
    bodyClass: "chapter-page",
    body: `<div class="chapter-layout">
  <aside class="chapter-rail" aria-label="Chapter context">
    <a class="back-link" href="../index.html"><span aria-hidden="true">←</span> Learning guide</a>
    <p class="rail-label">Chapter 1 of 1</p>
    <div class="rail-progress" aria-hidden="true"><span data-reading-progress></span></div>
    <p class="rail-status"><span class="status-dot" aria-hidden="true"></span> ${escapeHtml(attributes.status || "provisional")}</p>
    <p class="rail-updated">Updated ${escapeHtml(attributes.updated || "")}</p>
    <p class="rail-updated">About ${readingMinutes} min read</p>
    <a class="rail-source" href="../../${CHAPTER_MARKDOWN}">View canonical Markdown</a>
  </aside>

  <main id="main-content" tabindex="-1">
    <article class="chapter-article">
      <header class="chapter-header">
        <p class="eyebrow">Harness architecture · Context and memory</p>
        <h1>${escapeHtml(attributes.title || "Context Management in Agent Harnesses")}</h1>
        <p class="chapter-subtitle">${escapeHtml(subtitle)}</p>
        <p class="chapter-summary">${escapeHtml(attributes.summary || "")}</p>
        <div class="chapter-actions">
          <button type="button" class="button quiet compact" data-expand-evidence aria-pressed="false">Expand evidence</button>
          <a class="button quiet compact" href="../../${SYNTHESIS_PATH}">Research synthesis</a>
        </div>
        <ul class="case-pins" aria-label="Reviewed implementation boundaries">${caseList}</ul>
        ${objectivesBlock}
        <div class="evidence-legend" aria-labelledby="evidence-legend-title">
          <p id="evidence-legend-title">How to read evidence</p>
          <ul class="epistemic-key">
            <li class="kind-fact">Verified fact</li>
            <li class="kind-reported">Source-reported</li>
            <li class="kind-inference">Inference</li>
            <li class="kind-recommendation">Recommendation</li>
            <li class="kind-contested">Contested</li>
            <li class="kind-open">Open question</li>
          </ul>
        </div>
      </header>
      ${renderInlineToc(headings)}
      <div class="prose chapter-prose">${chapterHtml}</div>
      <footer class="chapter-end">
        <p class="eyebrow">Continue the loop</p>
        <h2>What did this chapter change in your mental model?</h2>
        <p>Record anything unclear, unsupported, missing, impractical, or worth deeper research. Your reading feedback directs the next cycle.</p>
        <div class="chapter-end-actions">
          <a class="button primary" href="../../learning/READER-FEEDBACK.md">Open reader feedback <span aria-hidden="true">→</span></a>
          <a class="button quiet" href="#main-content">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </article>
  </main>
  ${renderToc(headings)}
</div>`,
  });
}

function readRecord(root, relativePath, role) {
  const absolute = path.join(root, relativePath);
  const buffer = fs.readFileSync(absolute);
  return { path: relativePath, role, bytes: buffer.byteLength, sha256: sha256(buffer) };
}

function ensureEmptyOutput(outputRoot) {
  if (fs.existsSync(outputRoot)) {
    const entries = fs.readdirSync(outputRoot);
    if (entries.length) throw new Error(`Output directory must be empty: ${outputRoot}`);
  } else {
    fs.mkdirSync(outputRoot, { recursive: true, mode: 0o755 });
  }
}

function writeOutput(outputRoot, relativePath, content) {
  const absolute = path.join(outputRoot, relativePath);
  fs.mkdirSync(path.dirname(absolute), { recursive: true, mode: 0o755 });
  fs.writeFileSync(absolute, content, { mode: 0o644 });
  const buffer = fs.readFileSync(absolute);
  return { path: relativePath, bytes: buffer.byteLength, sha256: sha256(buffer) };
}

function generate({ repoRoot, outputRoot }) {
  const root = path.resolve(repoRoot);
  const output = path.resolve(outputRoot);
  if (markedVersion !== EXPECTED_MARKED_VERSION) {
    throw new Error(`Expected marked ${EXPECTED_MARKED_VERSION}; found ${markedVersion}.`);
  }

  const inputRecords = SOURCE_PATHS.map((item) => readRecord(root, item, item.startsWith("learning/") ? "rendered" : "evidence boundary"));
  const toolingRecords = TOOL_PATHS.map((item) => readRecord(root, item, "generator"));

  const learningReadme = fs.readFileSync(path.join(root, SOURCE_PATHS[0]), "utf8");
  const chapterMarkdown = fs.readFileSync(path.join(root, SOURCE_PATHS[1]), "utf8");
  const { attributes, body } = extractFrontmatter(chapterMarkdown);
  const opening = extractOpeningHeadings(body, attributes.title);

  const landingBody = learningReadme.replace(/^# .+\n\n/, "");
  const landingRendered = renderMarkdown(landingBody);
  const landingHtml = rewriteLandingLinks(landingRendered.html);

  const chapterRendered = renderMarkdown(replaceCanonicalDiagrams(opening.body));
  const chapterHtml = rewriteChapterLinks(chapterRendered.html);

  const readingMinutes = estimateReadingMinutes(opening.body);

  const outputContents = new Map([
    ["index.html", landingPage(landingHtml, attributes, readingMinutes)],
    [CHAPTER_HTML, chapterPage(attributes, opening.subtitle, chapterHtml, chapterRendered.headings, readingMinutes)],
    ["assets/styles.css", fs.readFileSync(path.join(root, "tools/learning-site/assets/styles.css"))],
    ["assets/site.js", fs.readFileSync(path.join(root, "tools/learning-site/assets/site.js"))],
  ]);
  const outputs = [...outputContents]
    .map(([relativePath, content]) => {
      const buffer = Buffer.isBuffer(content) ? content : Buffer.from(content);
      return { path: relativePath, bytes: buffer.byteLength, sha256: sha256(buffer) };
    })
    .sort((a, b) => a.path.localeCompare(b.path));

  const manifest = {
    schema_version: "harness-learning-site-v1",
    canonical_layer: "learning Markdown",
    chapter_id: attributes.id,
    chapter_status: attributes.status,
    chapter_updated: attributes.updated,
    renderer: { name: "marked", version: markedVersion },
    sources: inputRecords,
    tooling: toolingRecords,
    pages: [
      {
        output: "index.html",
        derived_from: ["learning/README.md", CHAPTER_MARKDOWN],
      },
      {
        output: CHAPTER_HTML,
        derived_from: [
          CHAPTER_MARKDOWN,
          SYNTHESIS_PATH,
          CLAIMS_PATH,
        ],
      },
    ],
    outputs,
  };

  ensureEmptyOutput(output);
  const parent = path.dirname(output);
  fs.mkdirSync(parent, { recursive: true, mode: 0o755 });
  const staging = fs.mkdtempSync(path.join(parent, ".learning-site-build-"));
  try {
    for (const [relativePath, content] of outputContents) writeOutput(staging, relativePath, content);
    writeOutput(staging, "generated-source-manifest.json", stableJson(manifest));
    if (fs.existsSync(output)) fs.rmdirSync(output);
    fs.renameSync(staging, output);
  } catch (error) {
    fs.rmSync(staging, { recursive: true, force: true });
    throw error;
  }
  return manifest;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = args.repo || process.cwd();
  const outputRoot = args.output;
  if (!outputRoot) throw new Error("Usage: generate.cjs --repo <repository> --output <empty-directory>");
  const manifest = generate({ repoRoot, outputRoot });
  process.stdout.write(
    `Generated ${manifest.pages.length} pages and ${manifest.outputs.length - manifest.pages.length} assets; wrote one source manifest from ${manifest.sources.length} inputs.\n`,
  );
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    process.stderr.write(`${error.stack || error.message}\n`);
    process.exitCode = 1;
  }
}

module.exports = {
  extractFrontmatter,
  extractOpeningHeadings,
  generate,
  replaceCanonicalDiagrams,
  renderMarkdown,
  slugify,
};
