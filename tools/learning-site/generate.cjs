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

const EXPECTED_CONTROL_DIAGRAM = `flowchart LR
  I[Ingress and admission] --> C[Call construction]
  C --> M{Model proposes}
  M --> A[Action mediation]
  A --> E[Environment]
  E --> O[Observation construction]
  O --> C
  M --> F[Candidate completion]
  F --> T{Completion and acceptance policy}
  T -->|Continue| C
  T -->|Accept| D[Delivered outcome]
  S[(Durable state and recovery)] -. persists and reconstructs .-> I
  S -. informs .-> C
  A -. records .-> S
  O -. records .-> S
  T -. records .-> S
  S -. trajectories and failures .-> X[External evaluation]
  D -. outcomes .-> X
  X -. optional signal .-> R[Across-run adaptation]
  R -. changes future policy or context .-> C`;

const SOURCE_PATHS = [
  "learning/README.md",
  "learning/chapters/where-harnesses-put-control.md",
  "research/syntheses/first-batch-harness-architecture.md",
  "research/claims/first-batch-harness-architecture.md",
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

function replaceCanonicalDiagram(markdown) {
  const matches = [...markdown.matchAll(/```mermaid\s*\n([\s\S]*?)\n```/g)];
  if (matches.length !== 1) {
    throw new Error(`Expected exactly one Mermaid control diagram; found ${matches.length}.`);
  }
  const actual = matches[0][1].replaceAll("\r\n", "\n").trim();
  if (actual !== EXPECTED_CONTROL_DIAGRAM) {
    throw new Error("The canonical control diagram changed; update the accessible renderer deliberately.");
  }
  return markdown.replace(matches[0][0], renderControlDiagram());
}

function renderControlDiagram() {
  const stages = [
    ["01", "Admission", "A request becomes owned work."],
    ["02", "Call construction", "Policy and state become a model-visible problem."],
    ["03", "Model proposal", "The model selects a local next action."],
    ["04", "Action authority", "Programmed policy decides what may execute."],
    ["05", "Environment effect", "The world changes—or rejects the request."],
    ["06", "Observation", "Consequences become evidence for the next call."],
  ];
  return `<figure class="control-map" aria-labelledby="control-map-caption">
  <figcaption id="control-map-caption">
    <strong>The active control loop</strong>
    <span>Observation normally feeds the next call; candidate completion branches through an acceptance policy.</span>
  </figcaption>
  <ol class="control-flow">
    ${stages
      .map(
        ([number, title, text]) => `<li>
      <span class="flow-number" aria-hidden="true">${number}</span>
      <span><strong>${title}</strong><small>${text}</small></span>
    </li>`,
      )
      .join("\n    ")}
  </ol>
  <div class="control-branch" aria-label="Completion branch">
    <span class="branch-line" aria-hidden="true"></span>
    <div><strong>Candidate completion</strong><small>The model proposes stopping.</small></div>
    <span class="branch-arrow" aria-hidden="true">→</span>
    <div><strong>Acceptance policy</strong><small>Continue, escalate, reject, or deliver.</small></div>
  </div>
  <div class="support-contracts">
    <article><span>Continuity</span><p>Durable state, replay, recovery, compaction.</p></article>
    <article><span>External evaluation</span><p>Trajectories and outcomes assessed outside the run.</p></article>
    <article><span>Across-run adaptation</span><p>Optional signals change future policy or context.</p></article>
  </div>
  <p class="diagram-loop-note">The loop is not linear in a real harness: lifecycle, state, extensions, and failure policy can intervene at every stage.</p>
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
    .replaceAll('href="chapters/where-harnesses-put-control.md"', 'href="chapters/where-harnesses-put-control.html"')
    .replaceAll('href="READER-FEEDBACK.md"', 'href="../learning/READER-FEEDBACK.md"');
}

function rewriteChapterLinks(html) {
  return html.replaceAll('href="../READER-FEEDBACK.md"', 'href="../../learning/READER-FEEDBACK.md"');
}

function renderToc(headings) {
  const selected = headings.filter((heading) => heading.level === 2 || heading.level === 3);
  return `<nav class="toc" aria-label="On this page">
  <p class="toc-title">On this page</p>
  <ol>
    ${selected
      .map(
        (heading) => `<li class="toc-level-${heading.level}"><a href="#${heading.id}">${escapeHtml(heading.text)}</a></li>`,
      )
      .join("\n    ")}
  </ol>
</nav>`;
}

function topNavigation(prefix, active) {
  return `<header class="site-header">
  <a class="brand" href="${prefix}index.html" aria-label="Harness Engineering home">
    <span class="brand-mark" aria-hidden="true">H</span>
    <span><strong>Harness Engineering</strong><small>Living field guide</small></span>
  </a>
  <nav class="primary-nav" aria-label="Primary">
    <a${active === "home" ? ' aria-current="page"' : ""} href="${prefix}index.html">Overview</a>
    <a${active === "chapter" ? ' aria-current="page"' : ""} href="${prefix}chapters/where-harnesses-put-control.html">Chapter 1</a>
    <a href="${prefix}../research/syntheses/first-batch-harness-architecture.md">Research</a>
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

function landingPage(learningHtml, attributes) {
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
      <h1 id="hero-title">See the system around the model.</h1>
      <p class="hero-lede">${escapeHtml(attributes.summary)}</p>
      <div class="hero-actions">
        <a class="button primary" href="chapters/where-harnesses-put-control.html">Start the chapter <span aria-hidden="true">→</span></a>
        <a class="button quiet" href="../research/syntheses/first-batch-harness-architecture.md">Inspect the synthesis</a>
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
      <h2 id="chapter-feature-title">Where Harnesses Put Control</h2>
      <p>${escapeHtml(attributes.summary)}</p>
    </div>
    <dl class="chapter-facts">
      <div><dt>Level</dt><dd>Technically capable newcomer</dd></div>
      <div><dt>Evidence</dt><dd>4 reviewed implementation pins</dd></div>
      <div><dt>Status</dt><dd>Provisional, lineage-aware</dd></div>
    </dl>
    <a class="text-link" href="chapters/where-harnesses-put-control.html">Read Chapter 1 <span aria-hidden="true">→</span></a>
  </section>

  <section class="landing-copy prose" aria-labelledby="guide-details-title">
    <h2 id="guide-details-title" class="visually-hidden">About this learning guide</h2>
    ${learningHtml}
  </section>
</main>`,
  });
}

function chapterPage(attributes, subtitle, chapterHtml, headings) {
  const cases = attributes.source_cases || [];
  const caseList = cases
    .map(
      (item) => `<li><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.version || "")}</span><code><span aria-hidden="true">${escapeHtml((item.commit || "").slice(0, 9))}</span><span class="visually-hidden">commit ${escapeHtml(item.commit || "")}</span></code></li>`,
    )
    .join("\n");
  return pageShell({
    title: attributes.title || "Where Harnesses Put Control",
    description: attributes.summary || "Trace control through a modern language-model harness.",
    prefix: "../",
    active: "chapter",
    bodyClass: "chapter-page",
    body: `<div class="chapter-layout">
  <aside class="chapter-rail" aria-label="Chapter context">
    <a class="back-link" href="../index.html"><span aria-hidden="true">←</span> Learning guide</a>
    <p class="rail-label">Chapter 1 of 1</p>
    <div class="rail-progress"><span></span></div>
    <p class="rail-status"><span class="status-dot" aria-hidden="true"></span> ${escapeHtml(attributes.status || "provisional")}</p>
    <p class="rail-updated">Updated ${escapeHtml(attributes.updated || "")}</p>
    <a class="rail-source" href="../../learning/chapters/where-harnesses-put-control.md">View canonical Markdown</a>
  </aside>

  <main id="main-content" tabindex="-1">
    <article class="chapter-article">
      <header class="chapter-header">
        <p class="eyebrow">Harness architecture · Control and evidence</p>
        <h1>${escapeHtml(attributes.title || "Where Harnesses Put Control")}</h1>
        <p class="chapter-subtitle">${escapeHtml(subtitle)}</p>
        <p class="chapter-summary">${escapeHtml(attributes.summary || "")}</p>
        <div class="chapter-actions">
          <button type="button" class="button quiet compact" data-expand-evidence aria-pressed="false">Expand evidence</button>
          <a class="button quiet compact" href="../../research/syntheses/first-batch-harness-architecture.md">Research synthesis</a>
        </div>
        <ul class="case-pins" aria-label="Reviewed implementation boundaries">${caseList}</ul>
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
      <div class="prose chapter-prose">${chapterHtml}</div>
      <footer class="chapter-end">
        <p class="eyebrow">Continue the loop</p>
        <h2>What did this chapter change in your mental model?</h2>
        <p>Record anything unclear, unsupported, missing, impractical, or worth deeper research. Your reading feedback directs the next cycle.</p>
        <a class="button primary" href="../../learning/READER-FEEDBACK.md">Open reader feedback <span aria-hidden="true">→</span></a>
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

  const chapterRendered = renderMarkdown(replaceCanonicalDiagram(opening.body));
  const chapterHtml = rewriteChapterLinks(chapterRendered.html);

  const outputContents = new Map([
    ["index.html", landingPage(landingHtml, attributes)],
    ["chapters/where-harnesses-put-control.html", chapterPage(attributes, opening.subtitle, chapterHtml, chapterRendered.headings)],
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
        derived_from: ["learning/README.md", "learning/chapters/where-harnesses-put-control.md"],
      },
      {
        output: "chapters/where-harnesses-put-control.html",
        derived_from: [
          "learning/chapters/where-harnesses-put-control.md",
          "research/syntheses/first-batch-harness-architecture.md",
          "research/claims/first-batch-harness-architecture.md",
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
  replaceCanonicalDiagram,
  renderMarkdown,
  slugify,
};
