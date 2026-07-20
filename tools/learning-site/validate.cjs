#!/usr/bin/env node

const crypto = require("node:crypto");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");

const { extractFrontmatter, extractOpeningHeadings, generate, slugify } = require("./generate.cjs");

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

function walk(root) {
  const records = [];
  function visit(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) visit(absolute);
      else records.push(path.relative(root, absolute));
    }
  }
  visit(root);
  return records.sort();
}

function stripTags(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"')
    .trim();
}

function validateHeadingOrder(html, file, errors) {
  const headings = [...html.matchAll(/<h([1-6])(?:\s[^>]*)?>([\s\S]*?)<\/h\1>/g)].map((match) => ({
    level: Number(match[1]),
    text: stripTags(match[2]),
  }));
  if (headings.filter((heading) => heading.level === 1).length !== 1) {
    errors.push(`${file}: expected exactly one H1`);
  }
  for (let index = 1; index < headings.length; index += 1) {
    if (headings[index].level > headings[index - 1].level + 1) {
      errors.push(`${file}: heading level jumps from H${headings[index - 1].level} to H${headings[index].level}`);
    }
  }
}

function validateStatic(repoRoot, siteRoot) {
  const errors = [];
  const warnings = [];
  const manifestPath = path.join(siteRoot, "generated-source-manifest.json");
  if (!fs.existsSync(manifestPath)) throw new Error("Missing generated-source-manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

  for (const record of [...manifest.sources, ...manifest.tooling]) {
    const absolute = path.join(repoRoot, record.path);
    if (!fs.existsSync(absolute)) errors.push(`manifest input missing: ${record.path}`);
    else {
      const buffer = fs.readFileSync(absolute);
      if (buffer.byteLength !== record.bytes || sha256(buffer) !== record.sha256) {
        errors.push(`manifest input drift: ${record.path}`);
      }
    }
  }
  for (const record of manifest.outputs) {
    const absolute = path.join(siteRoot, record.path);
    if (!fs.existsSync(absolute)) errors.push(`manifest output missing: ${record.path}`);
    else {
      const buffer = fs.readFileSync(absolute);
      if (buffer.byteLength !== record.bytes || sha256(buffer) !== record.sha256) {
        errors.push(`manifest output drift: ${record.path}`);
      }
    }
  }

  const htmlFiles = walk(siteRoot).filter((file) => file.endsWith(".html"));
  const idsByFile = new Map();
  for (const relative of htmlFiles) {
    const absolute = path.join(siteRoot, relative);
    const html = fs.readFileSync(absolute, "utf8");
    if (!/^<!doctype html>/i.test(html)) errors.push(`${relative}: missing HTML doctype`);
    if (!/<html\s+lang="en"/.test(html)) errors.push(`${relative}: missing language`);
    for (const landmark of ["<header", "<main", "<footer"]) {
      if (!html.includes(landmark)) errors.push(`${relative}: missing ${landmark.slice(1)} landmark`);
    }
    if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${relative}: missing title`);
    validateHeadingOrder(html, relative, errors);

    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicates.length) errors.push(`${relative}: duplicate ids ${[...new Set(duplicates)].join(", ")}`);
    idsByFile.set(relative, new Set(ids));

    for (const match of html.matchAll(/<(?:a|link|script|img)\b[^>]*?\b(?:href|src)="([^"]+)"/g)) {
      const target = match[1];
      if (/^(?:https?:|mailto:|data:)/.test(target)) continue;
      if (target.startsWith("#")) {
        if (!idsByFile.get(relative).has(decodeURIComponent(target.slice(1)))) {
          errors.push(`${relative}: missing fragment ${target}`);
        }
        continue;
      }
      const [pathname, fragment] = target.split("#", 2);
      const resolved = path.resolve(path.dirname(absolute), decodeURIComponent(pathname));
      if (!resolved.startsWith(`${repoRoot}${path.sep}`) && resolved !== repoRoot) {
        errors.push(`${relative}: local link escapes repository: ${target}`);
        continue;
      }
      if (!fs.existsSync(resolved)) {
        errors.push(`${relative}: missing local target ${target}`);
        continue;
      }
      if (fragment && resolved.endsWith(".html")) {
        const targetRelative = path.relative(siteRoot, resolved);
        const targetIds = idsByFile.get(targetRelative) || new Set(
          [...fs.readFileSync(resolved, "utf8").matchAll(/\sid="([^"]+)"/g)].map((item) => item[1]),
        );
        if (!targetIds.has(decodeURIComponent(fragment))) errors.push(`${relative}: missing target fragment ${target}`);
      }
    }
  }

  const chapterMarkdown = fs.readFileSync(path.join(repoRoot, "learning/chapters/context-management-in-agent-harnesses.md"), "utf8");
  const chapterHtml = fs.readFileSync(path.join(siteRoot, "chapters/context-management-in-agent-harnesses.html"), "utf8");
  const parsedChapter = extractFrontmatter(chapterMarkdown);
  const opening = extractOpeningHeadings(parsedChapter.body, parsedChapter.attributes.title);
  if (!chapterHtml.includes(`<p class="chapter-subtitle">${opening.subtitle}</p>`)) {
    errors.push("chapter output omitted the canonical subtitle");
  }
  for (const match of opening.body.matchAll(/^##\s+(.+)$/gm)) {
    const id = slugify(match[1]);
    if (!chapterHtml.includes(`id="${id}"`)) errors.push(`chapter output omitted canonical H2: ${match[1]}`);
  }
  for (const kind of ["fact", "reported", "inference"]) {
    if (!chapterHtml.includes(`data-evidence-kind="${kind}"`)) {
      errors.push(`chapter lacks ${kind} epistemic detail markup`);
    }
  }
  if (!chapterHtml.includes("commit 9de9c25f620ff7f1ce0fd5457d596052d5159596")) errors.push("chapter omits accessible full commit pins");

  const css = fs.readFileSync(path.join(siteRoot, "assets/styles.css"), "utf8");
  const js = fs.readFileSync(path.join(siteRoot, "assets/site.js"), "utf8");
  if (/url\(\s*['"]?https?:/i.test(css) || /\b(?:fetch|XMLHttpRequest|WebSocket)\s*\(/.test(js)) {
    errors.push("site contains a required remote runtime dependency");
  }
  if (!css.includes("@media print")) errors.push("print styles are missing");
  if (!css.includes(":focus-visible")) errors.push("visible focus styles are missing");
  if (!css.includes("prefers-reduced-motion")) warnings.push("reduced-motion support is missing");

  return { errors, warnings, manifest, htmlFiles };
}

function mimeType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".css")) return "text/css; charset=utf-8";
  if (file.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (file.endsWith(".json")) return "application/json; charset=utf-8";
  if (file.endsWith(".md")) return "text/markdown; charset=utf-8";
  return "application/octet-stream";
}

async function withServer(repoRoot, callback) {
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, "http://127.0.0.1");
    const requested = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const absolute = path.resolve(repoRoot, requested || "site/index.html");
    if (!absolute.startsWith(`${repoRoot}${path.sep}`) || !fs.existsSync(absolute) || fs.statSync(absolute).isDirectory()) {
      response.writeHead(404).end("not found");
      return;
    }
    response.setHeader("Content-Type", mimeType(absolute));
    response.end(fs.readFileSync(absolute));
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  try {
    return await callback(`http://127.0.0.1:${address.port}`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

async function validateBrowser(repoRoot, artifactRoot) {
  const { chromium } = require("playwright");
  const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  if (!fs.existsSync(chrome)) throw new Error(`Chrome executable not found: ${chrome}`);
  fs.mkdirSync(artifactRoot, { recursive: true });
  const errors = [];
  const screenshots = [];
  await withServer(repoRoot, async (baseUrl) => {
    const browser = await chromium.launch({ executablePath: chrome, headless: true, args: ["--no-sandbox"] });
    try {
      const cases = [
        { name: "desktop", width: 1440, height: 1000 },
        { name: "tablet", width: 820, height: 1180 },
        { name: "mobile", width: 390, height: 844 },
      ];
      for (const viewport of cases) {
        const context = await browser.newContext({ viewport, colorScheme: "light" });
        const page = await context.newPage();
        const runtimeErrors = [];
        page.on("console", (message) => { if (message.type() === "error") runtimeErrors.push(`console: ${message.text()}`); });
        page.on("pageerror", (error) => runtimeErrors.push(`page: ${error.message}`));
        page.on("request", (request) => {
          const target = new URL(request.url());
          if (target.hostname !== "127.0.0.1" && target.protocol !== "data:") runtimeErrors.push(`remote request: ${request.url()}`);
        });
        await page.goto(`${baseUrl}/site/chapters/context-management-in-agent-harnesses.html`, { waitUntil: "networkidle" });
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        if (overflow > 1) errors.push(`${viewport.name}: horizontal overflow ${overflow}px`);
        const contrastFailures = await page.evaluate(() => {
          const parse = (value) => {
            const parts = value.match(/[\d.]+/g)?.map(Number) || [];
            if (parts.length < 3) return null;
            if (value.startsWith("color(srgb")) {
              return [parts[0] * 255, parts[1] * 255, parts[2] * 255, parts[3] ?? 1];
            }
            return [parts[0], parts[1], parts[2], parts[3] ?? 1];
          };
          const composite = (foreground, background) => {
            const alpha = foreground[3] + background[3] * (1 - foreground[3]);
            return [0, 1, 2].map((index) => (
              (foreground[index] * foreground[3] + background[index] * background[3] * (1 - foreground[3])) / alpha
            )).concat(alpha);
          };
          const backgroundFor = (element) => {
            let result = [255, 255, 255, 1];
            const layers = [];
            for (let current = element; current; current = current.parentElement) {
              const color = parse(getComputedStyle(current).backgroundColor);
              if (color && color[3] > 0) layers.push(color);
            }
            for (const layer of layers.reverse()) result = composite(layer, result);
            return result;
          };
          const luminance = (color) => {
            const channel = color.slice(0, 3).map((item) => {
              const value = item / 255;
              return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
            });
            return channel[0] * 0.2126 + channel[1] * 0.7152 + channel[2] * 0.0722;
          };
          const candidates = [...document.querySelectorAll("p,li,a,button,summary,dt,dd,h1,h2,h3,h4,code,small,strong,span")];
          return candidates.flatMap((element) => {
            const text = element.textContent.trim();
            const rect = element.getBoundingClientRect();
            const style = getComputedStyle(element);
            if (!text || element.closest(".visually-hidden") || rect.width < 2 || rect.height < 2 || style.visibility === "hidden" || Number(style.opacity) < 0.99) return [];
            const foreground = parse(style.color);
            if (!foreground) return [];
            const background = backgroundFor(element);
            const light = luminance(foreground);
            const dark = luminance(background);
            const ratio = (Math.max(light, dark) + 0.05) / (Math.min(light, dark) + 0.05);
            const size = Number.parseFloat(style.fontSize);
            const weight = Number.parseInt(style.fontWeight, 10) || 400;
            const large = size >= 24 || (size >= 18.66 && weight >= 700);
            const required = large ? 3 : 4.5;
            return ratio + 0.05 < required
              ? [{ tag: element.tagName.toLowerCase(), text: text.slice(0, 54), ratio: Number(ratio.toFixed(2)), required }]
              : [];
          }).slice(0, 20);
        });
        if (contrastFailures.length) errors.push(`${viewport.name}: text contrast failures ${JSON.stringify(contrastFailures)}`);
        const unlabeledButtons = await page.locator("button").evaluateAll((buttons) => buttons.filter((button) => !(button.getAttribute("aria-label") || button.textContent.trim())).length);
        if (unlabeledButtons) errors.push(`${viewport.name}: ${unlabeledButtons} unlabeled button(s)`);
        await page.keyboard.press("Tab");
        const firstFocus = await page.evaluate(() => document.activeElement?.textContent?.trim());
        if (firstFocus !== "Skip to content") errors.push(`${viewport.name}: skip link is not first focus target`);
        const screenshot = path.join(artifactRoot, `chapter-${viewport.name}.png`);
        await page.screenshot({ path: screenshot, fullPage: true });
        screenshots.push(screenshot);
        const viewportScreenshot = path.join(artifactRoot, `chapter-${viewport.name}-viewport.png`);
        await page.screenshot({ path: viewportScreenshot });
        screenshots.push(viewportScreenshot);
        const beforeTheme = await page.locator("html").getAttribute("data-theme");
        await page.locator("[data-theme-toggle]").focus();
        await page.keyboard.press("Enter");
        const afterTheme = await page.locator("html").getAttribute("data-theme");
        if (beforeTheme === afterTheme) errors.push(`${viewport.name}: theme control failed`);
        const expand = page.locator("[data-expand-evidence]");
        await expand.click();
        if ((await page.locator("details.evidence-detail:not([open])").count()) !== 0) errors.push(`${viewport.name}: evidence expansion failed`);
        errors.push(...runtimeErrors.map((item) => `${viewport.name}: ${item}`));
        await context.close();
      }

      const landingContext = await browser.newContext({ viewport: { width: 1440, height: 1000 }, colorScheme: "light" });
      const landing = await landingContext.newPage();
      await landing.goto(`${baseUrl}/site/index.html`, { waitUntil: "networkidle" });
      const landingShot = path.join(artifactRoot, "landing-desktop.png");
      await landing.screenshot({ path: landingShot, fullPage: true });
      screenshots.push(landingShot);
      const landingViewportShot = path.join(artifactRoot, "landing-desktop-viewport.png");
      await landing.screenshot({ path: landingViewportShot });
      screenshots.push(landingViewportShot);

      const darkContext = await browser.newContext({ viewport: { width: 1440, height: 1000 }, colorScheme: "dark" });
      const dark = await darkContext.newPage();
      await dark.goto(`${baseUrl}/site/chapters/context-management-in-agent-harnesses.html`, { waitUntil: "networkidle" });
      await dark.evaluate(() => localStorage.setItem("harness-learning-theme", "dark"));
      await dark.reload({ waitUntil: "networkidle" });
      const darkShot = path.join(artifactRoot, "chapter-dark.png");
      await dark.screenshot({ path: darkShot, fullPage: true });
      screenshots.push(darkShot);
      const darkViewportShot = path.join(artifactRoot, "chapter-dark-viewport.png");
      await dark.screenshot({ path: darkViewportShot });
      screenshots.push(darkViewportShot);

      await dark.emulateMedia({ media: "print" });
      const pdf = path.join(artifactRoot, "chapter-print.pdf");
      await dark.pdf({ path: pdf, format: "Letter", printBackground: true });
      if (fs.statSync(pdf).size < 10_000) errors.push("print PDF is unexpectedly small");
      await landingContext.close();
      await darkContext.close();
    } finally {
      await browser.close();
    }
  });
  return { errors, screenshots };
}

function compareTrees(left, right) {
  const errors = [];
  const leftFiles = walk(left);
  const rightFiles = walk(right);
  if (JSON.stringify(leftFiles) !== JSON.stringify(rightFiles)) return ["clean regeneration file set differs"];
  for (const relative of leftFiles) {
    if (!fs.readFileSync(path.join(left, relative)).equals(fs.readFileSync(path.join(right, relative)))) {
      errors.push(`clean regeneration differs: ${relative}`);
    }
  }
  return errors;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = path.resolve(args.repo || process.cwd());
  const siteRoot = path.resolve(args.site || path.join(repoRoot, "site"));
  const artifactRoot = path.resolve(args.artifacts || path.join(os.tmpdir(), "harness-learning-site-validation"));

  const staticResult = validateStatic(repoRoot, siteRoot);
  const regenerationRoot = fs.mkdtempSync(path.join(os.tmpdir(), "learning-site-regeneration-"));
  const regenerated = path.join(regenerationRoot, "site");
  generate({ repoRoot, outputRoot: regenerated });
  const regenerationErrors = compareTrees(siteRoot, regenerated);
  fs.rmSync(regenerationRoot, { recursive: true, force: true });

  const browserResult = await validateBrowser(repoRoot, artifactRoot);
  const errors = [...staticResult.errors, ...regenerationErrors, ...browserResult.errors];
  const result = {
    status: errors.length ? "FAIL" : "PASS",
    pages: staticResult.htmlFiles,
    source_records: staticResult.manifest.sources.length,
    output_records: staticResult.manifest.outputs.length,
    warnings: staticResult.warnings,
    errors,
    screenshots: browserResult.screenshots,
    print_pdf: path.join(artifactRoot, "chapter-print.pdf"),
  };
  fs.mkdirSync(artifactRoot, { recursive: true });
  fs.writeFileSync(path.join(artifactRoot, "validation-report.json"), `${JSON.stringify(result, null, 2)}\n`);
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  if (errors.length) process.exitCode = 1;
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
