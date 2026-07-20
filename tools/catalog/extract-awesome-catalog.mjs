#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const EXTRACTOR_VERSION = "1.0.0";
const RESERVED_GITHUB_ROOTS = new Set([
  "about", "apps", "collections", "contact", "customer-stories", "enterprise",
  "events", "explore", "features", "issues", "marketplace", "new", "notifications",
  "orgs", "pricing", "pulls", "search", "security", "settings", "site", "sponsors",
  "topics", "trending",
]);

function sha(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function parseArgs(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    if (!argv[index].startsWith("--")) continue;
    const key = argv[index].slice(2);
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) throw new Error(`Missing value for --${key}`);
    result[key] = value;
    index += 1;
  }
  return result;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function stripHeadingMarkup(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .trim();
}

function codeSpans(line) {
  const spans = [];
  for (let index = 0; index < line.length;) {
    if (line[index] !== "`") {
      index += 1;
      continue;
    }
    let ticks = 1;
    while (line[index + ticks] === "`") ticks += 1;
    const marker = "`".repeat(ticks);
    const end = line.indexOf(marker, index + ticks);
    if (end === -1) break;
    spans.push([index, end + ticks]);
    index = end + ticks;
  }
  return spans;
}

function inAnySpan(index, spans) {
  return spans.some(([start, end]) => index >= start && index < end);
}

function findBalanced(line, start, open, close) {
  let depth = 0;
  let quote = null;
  for (let index = start; index < line.length; index += 1) {
    const char = line[index];
    if (char === "\\") {
      index += 1;
      continue;
    }
    if (quote) {
      if (char === quote) quote = null;
      continue;
    }
    if ((char === "\"" || char === "'") && open === "(") {
      quote = char;
      continue;
    }
    if (char === open) depth += 1;
    if (char === close) {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  return -1;
}

function markdownDestination(content) {
  const trimmed = content.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("<")) {
    const end = trimmed.indexOf(">");
    return end > 1 ? trimmed.slice(1, end) : null;
  }
  let depth = 0;
  for (let index = 0; index < trimmed.length; index += 1) {
    const char = trimmed[index];
    if (char === "\\") {
      index += 1;
      continue;
    }
    if (char === "(") depth += 1;
    if (char === ")" && depth > 0) depth -= 1;
    if (/\s/.test(char) && depth === 0) return trimmed.slice(0, index);
  }
  return trimmed;
}

function extractInlineMarkdown(line, ignoredSpans) {
  const found = [];
  for (let index = 0; index < line.length; index += 1) {
    const image = line[index] === "!" && line[index + 1] === "[";
    if (!image && line[index] === "[" && line[index - 1] === "!") continue;
    const bracketStart = image ? index + 1 : index;
    if (line[bracketStart] !== "[" || inAnySpan(index, ignoredSpans)) continue;
    const bracketEnd = findBalanced(line, bracketStart, "[", "]");
    if (bracketEnd === -1 || line[bracketEnd + 1] !== "(") continue;
    const parenEnd = findBalanced(line, bracketEnd + 1, "(", ")");
    if (parenEnd === -1) throw new Error(`Unclosed Markdown destination: ${line}`);
    const target = markdownDestination(line.slice(bracketEnd + 2, parenEnd));
    if (!target) throw new Error(`Empty or unparseable Markdown destination: ${line}`);
    found.push({
      construct: image ? "markdown_inline_image" : "markdown_inline_link",
      start: index,
      end: parenEnd + 1,
      label: line.slice(bracketStart + 1, bracketEnd),
      raw_target: target,
      raw: line.slice(index, parenEnd + 1),
    });
  }
  return found;
}

function extractHtml(line, ignoredSpans) {
  const found = [];
  const specs = [
    { tag: "a", attribute: "href", construct: "html_anchor" },
    { tag: "img", attribute: "src", construct: "html_image" },
  ];
  for (const spec of specs) {
    const regex = new RegExp(`<${spec.tag}\\b[^>]*\\b${spec.attribute}\\s*=\\s*(["'])(.*?)\\1[^>]*>`, "gi");
    for (const match of line.matchAll(regex)) {
      if (inAnySpan(match.index, ignoredSpans)) continue;
      const tagEnd = match.index + match[0].length;
      let end = tagEnd;
      let label = "";
      if (spec.tag === "a") {
        const close = line.slice(tagEnd).match(/<\/a\s*>/i);
        if (close) {
          end = tagEnd + close.index + close[0].length;
          label = line.slice(tagEnd, tagEnd + close.index).replace(/<[^>]+>/g, "").trim();
        }
      } else {
        label = (match[0].match(/\balt\s*=\s*(["'])(.*?)\1/i) || [null, null, ""])[2];
      }
      found.push({
        construct: spec.construct,
        start: match.index,
        end,
        label,
        raw_target: match[2],
        raw: line.slice(match.index, end),
      });
    }
  }
  return found;
}

function trimBareTarget(value) {
  let result = value;
  while (/[.,;:!?]$/.test(result)) result = result.slice(0, -1);
  while (result.endsWith(")") && (result.match(/\(/g) || []).length < (result.match(/\)/g) || []).length) result = result.slice(0, -1);
  return result;
}

function extractAutoAndBare(line, occupied, ignoredSpans) {
  const found = [];
  for (const match of line.matchAll(/<(https?:\/\/[^\s<>]+)>/gi)) {
    if (inAnySpan(match.index, ignoredSpans) || occupied.some(([start, end]) => match.index >= start && match.index < end)) continue;
    found.push({ construct: "markdown_autolink", start: match.index, end: match.index + match[0].length, label: match[1], raw_target: match[1], raw: match[0] });
  }
  const allOccupied = [...occupied, ...found.map((item) => [item.start, item.end])];
  for (const match of line.matchAll(/https?:\/\/[^\s<>"']+/gi)) {
    if (inAnySpan(match.index, ignoredSpans) || allOccupied.some(([start, end]) => match.index >= start && match.index < end)) continue;
    const target = trimBareTarget(match[0]);
    found.push({ construct: "bare_http_url", start: match.index, end: match.index + target.length, label: target, raw_target: target, raw: target });
  }
  return found;
}

function referenceDefinitions(lines) {
  const definitions = new Map();
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^\s{0,3}\[([^\]]+)\]:\s*(?:<([^>]+)>|(\S+))/);
    if (!match) continue;
    const key = match[1].trim().toLowerCase();
    if (definitions.has(key)) throw new Error(`Duplicate reference definition ${key}`);
    definitions.set(key, { target: match[2] || match[3], line: index + 1 });
  }
  return definitions;
}

function extractReferenceLinks(line, definitions, occupied, ignoredSpans) {
  const found = [];
  const regex = /(!?)\[([^\]]+)\](?:\[([^\]]*)\])?/g;
  for (const match of line.matchAll(regex)) {
    if (inAnySpan(match.index, ignoredSpans) || occupied.some(([start, end]) => match.index >= start && match.index < end)) continue;
    const image = match[1] === "!";
    const id = (match[3] === undefined ? match[2] : (match[3] || match[2])).trim().toLowerCase();
    const definition = definitions.get(id);
    if (!definition) continue;
    found.push({
      construct: image ? "markdown_reference_image" : "markdown_reference_link",
      start: match.index,
      end: match.index + match[0].length,
      label: match[2],
      raw_target: definition.target,
      raw: match[0],
      reference_definition_line: definition.line,
    });
  }
  return found;
}

function targetKind(target) {
  if (target.startsWith("#")) return "anchor";
  if (/^https?:\/\//i.test(target)) return "http";
  if (/^[a-z][a-z0-9+.-]*:/i.test(target)) return "other_scheme";
  return "relative";
}

function normalizeHttp(target) {
  const url = new URL(target);
  url.protocol = url.protocol.toLowerCase();
  url.hostname = url.hostname.toLowerCase();
  if ((url.protocol === "https:" && url.port === "443") || (url.protocol === "http:" && url.port === "80")) url.port = "";
  url.hash = "";
  if (url.pathname.length > 1) url.pathname = url.pathname.replace(/\/+$/, "");
  return url.toString().replace(/\/$/, "");
}

function familyIdentity(target, kind, rules) {
  if (kind !== "http") return { normalized_url: target, family_key: null, canonical_url: null, unresolved: true, identity_basis: "unresolved_syntax" };
  let normalized;
  try {
    normalized = normalizeHttp(target);
  } catch {
    return { normalized_url: null, family_key: null, canonical_url: null, unresolved: true, identity_basis: "unresolved_syntax" };
  }
  const url = new URL(normalized);
  const host = url.hostname.toLowerCase();
  const parts = url.pathname.split("/").filter(Boolean);
  let canonical = normalized;
  let identityBasis = "provisional_normalized_url_key";
  if (host === "github.com" && parts.length >= 2 && !RESERVED_GITHUB_ROOTS.has(parts[0].toLowerCase())) {
    canonical = `https://github.com/${parts[0].toLowerCase()}/${parts[1].replace(/\.git$/i, "").toLowerCase()}`;
    identityBasis = "structural_github_repository_key";
  } else if ((host === "arxiv.org" || host === "www.arxiv.org") && parts.length >= 2 && ["abs", "pdf"].includes(parts[0].toLowerCase())) {
    canonical = `https://arxiv.org/abs/${parts[1].replace(/\.pdf$/i, "").toLowerCase()}`;
    identityBasis = "structural_arxiv_work_key";
  }
  const known = rules.known_opened_families.find((item) => item.canonical_url === canonical) || null;
  if (known) identityBasis = "previously_opened_identity";
  return { normalized_url: normalized, family_key: canonical, canonical_url: canonical, unresolved: false, known, identity_basis: identityBasis };
}

function currentSection(headingByLevel, level) {
  return headingByLevel[level] || null;
}

function classification(item, context, rules) {
  if (["markdown_inline_image", "markdown_reference_image", "html_image"].includes(item.construct)) return { qualifying: false, exclusion_class: "presentation_image" };
  const kind = targetKind(item.raw_target);
  if (kind === "anchor") return { qualifying: false, exclusion_class: "in_page_navigation" };
  if (kind !== "http") return { qualifying: false, exclusion_class: "repository_local_or_relative" };
  let host = null;
  try {
    host = new URL(item.raw_target).hostname.toLowerCase();
  } catch {
    // A syntactically invalid outbound URL still belongs in the curated census.
    // familyIdentity records it as unresolved instead of allowing classification
    // to fail before the unresolved path can be reached.
  }
  if (host === "zdoc.app") return { qualifying: false, exclusion_class: "translation_link" };
  const h2 = context.h2;
  if (!h2 || h2 === "Contents") return { qualifying: false, exclusion_class: "header_badge_or_repository_chrome" };
  if (h2 === "Contributing") return { qualifying: false, exclusion_class: "contribution_governance" };
  if (h2 === "License") return { qualifying: false, exclusion_class: "license" };
  if (h2 === "Acknowledgments") return { qualifying: false, exclusion_class: "acknowledgment_or_profile" };
  if (rules.curated_top_level_sections.includes(h2) && context.is_list_item) return { qualifying: true, exclusion_class: null };
  return { qualifying: false, exclusion_class: "outside_curated_resource_list" };
}

function apparentForm(family) {
  const text = `${family.canonical_url || ""} ${family.labels.join(" ")}`.toLowerCase();
  if (/arxiv\.org|biorxiv\.org|medrxiv\.org|openreview\.net|aclanthology\.org|dl\.acm\.org|ieeexplore\.ieee\.org|doi\.org|\.pdf(?:$|\?)/.test(text)) return "paper_or_preprint";
  if (/benchmark|evals?|leaderboard|terminal-bench|swe-bench/.test(text)) return "benchmark_or_evaluation";
  if (/youtube\.com|youtu\.be|\btalk\b|\bvideo\b|podcast/.test(text)) return "talk_video_or_audio";
  if (/awesome|course|tutorial|educational|playbook|guide/.test(text)) return "course_collection_or_guide";
  if ((family.canonical_url || "").startsWith("https://github.com/")) return "repository";
  if (/docs|documentation|specification|protocol|standard|reference/.test(text)) return "documentation_or_specification";
  return "article_or_web_resource";
}

function evidenceMode(form) {
  return {
    paper_or_preprint: "research_publication",
    benchmark_or_evaluation: "benchmark_or_evaluation",
    talk_video_or_audio: "talk_or_recorded_account",
    course_collection_or_guide: "educational_or_curated_synthesis",
    repository: "implementation_or_collection_repository",
    documentation_or_specification: "documentation_or_specification",
    article_or_web_resource: "practitioner_or_web_account_unknown",
  }[form];
}

function apparentDomainForPath(categoryPath) {
  const [topLevel, subcategory] = (categoryPath || "Unclassified").split(" / ");
  if (topLevel === "Design Primitives") return `design primitive: ${(subcategory || "unspecified").toLowerCase()}`;
  if (topLevel === "Reference Implementations") return `reference implementation: ${(subcategory || "unspecified").toLowerCase()}`;
  return {
    Foundations: "field foundations and definitions",
    "Security, Sandbox & Permissions": "permissions, security, and isolation",
    "Evals & Verification": "evaluation and verification",
    Templates: "reusable harness templates",
    "Production Infrastructure & Operations": "production infrastructure and operations",
    "Related Awesome Lists": "adjacent resource collections",
  }[topLevel] || "structural domain not identifiable from catalog context";
}

function apparentDomains(categoryPaths) {
  return [...new Set(categoryPaths.map(apparentDomainForPath))].sort();
}

function outlineImpactForPath(categoryPath) {
  const text = categoryPath.toLowerCase();
  const mappings = [
    [/foundation/, "boundary, objectives, and field framing"],
    [/agent loop/, "execution loop and control topology"],
    [/planning|task decomposition/, "planning and task decomposition"],
    [/context|compaction/, "context construction and compaction"],
    [/tool design|skills|mcp/, "capability interfaces and tool design"],
    [/permission|security|sandbox/, "permissions, trust boundaries, and isolation"],
    [/memory|state/, "persistent state and memory"],
    [/runner|orchestration|generator|meta-harness/, "workflow, delegation, and orchestration"],
    [/verification|eval/, "verification and evaluation"],
    [/observability|tracing|debugging/, "observability and runtime diagnosis"],
    [/human-in-the-loop/, "human authority and intervention"],
    [/production infrastructure|operations/, "production operation and infrastructure"],
    [/template|tutorial|educational/, "applied learning or reusable artifacts"],
  ];
  return (mappings.find(([pattern]) => pattern.test(text)) || [null, "structural relevance requires direct screening"])[1];
}

function outlineImpacts(categoryPaths) {
  return [...new Set(categoryPaths.map(outlineImpactForPath))].sort();
}

function triageStatus(family, rules) {
  if (family.unresolved_identity) return ["unresolved_identity", "Offline normalization could not establish a source family; no query or source open was authorized."];
  if (family.known_opened) return ["already_screened", `Previously screened as ${family.known_opened.source_id}; catalog recurrence grants no added maturity.`];
  const statuses = family.category_paths.map((pathValue) => {
    const components = pathValue.split(" / ");
    const matched = Object.entries(rules.triage.category_defaults).find(([category]) => components.includes(category));
    return matched ? matched[1] : rules.triage.default;
  });
  const precedence = rules.triage.multi_category_precedence;
  const status = precedence.find((candidate) => statuses.includes(candidate));
  assert(status, `No declared triage precedence for ${JSON.stringify(statuses)}`);
  return [status, `Catalog-only status selected deterministically across all category contexts using declared precedence ${precedence.join(" > ")}; direct relevance and reliability remain unassessed.`];
}

export function extractCatalog(markdown, rules, inputPath = "README.md") {
  assert(rules.schema_version === "v2-awesome-catalog-rules-v1", "Unsupported catalog rule schema");
  assert(rules.extractor.version === EXTRACTOR_VERSION, "Rule manifest extractor version mismatch");
  const inputSha = sha(markdown);
  assert(inputSha === rules.catalog.readme_sha256, `README SHA-256 mismatch: ${inputSha}`);
  const lines = markdown.split(/\r?\n/);
  const definitions = referenceDefinitions(lines);
  const headingByLevel = {};
  const occurrences = [];
  const unrecognized = [];
  let fence = null;

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);
    if (fenceMatch) {
      if (!fence) fence = fenceMatch[1][0];
      else if (fence === fenceMatch[1][0]) fence = null;
      continue;
    }
    if (fence) continue;
    const heading = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (heading) {
      const level = heading[1].length;
      headingByLevel[level] = stripHeadingMarkup(heading[2]);
      for (let deeper = level + 1; deeper <= 6; deeper += 1) delete headingByLevel[deeper];
    }
    if (/^\s{0,3}\[([^\]]+)\]:\s*(?:<([^>]+)>|(\S+))/.test(line)) continue;
    const ignoredSpans = codeSpans(line);
    const direct = [...extractInlineMarkdown(line, ignoredSpans), ...extractHtml(line, ignoredSpans)];
    const occupied = direct.map((item) => [item.start, item.end]);
    const refs = extractReferenceLinks(line, definitions, occupied, ignoredSpans);
    const allOccupied = [...occupied, ...refs.map((item) => [item.start, item.end])];
    const autoAndBare = extractAutoAndBare(line, allOccupied, ignoredSpans);
    const items = [...direct, ...refs, ...autoAndBare].sort((a, b) => a.start - b.start || a.end - b.end || a.construct.localeCompare(b.construct));
    const context = {
      h2: currentSection(headingByLevel, 2),
      h3: currentSection(headingByLevel, 3),
      is_list_item: /^\s*[-*+]\s+/.test(line),
    };
    const headingPath = Object.keys(headingByLevel).map(Number).sort((a, b) => a - b).map((level) => headingByLevel[level]);
    for (const item of items) {
      const classResult = classification(item, context, rules);
      const kind = targetKind(item.raw_target);
      const identity = familyIdentity(item.raw_target, kind, rules);
      const occurrenceId = `awesome-occ-${sha(`${lineIndex + 1}:${item.start + 1}:${item.construct}:${item.raw_target}`).slice(0, 16)}`;
      occurrences.push({
        schema_version: "v2-awesome-link-occurrence-v1",
        occurrence_id: occurrenceId,
        catalog_source_id: rules.catalog.source_id,
        catalog_commit: rules.catalog.commit,
        catalog_readme_sha256: inputSha,
        source_line: lineIndex + 1,
        source_column_start: item.start + 1,
        source_column_end: item.end,
        heading_path: headingPath,
        category_path: [context.h2, context.h3].filter(Boolean).join(" / ") || null,
        construct: item.construct,
        label: item.label,
        raw_target: item.raw_target,
        target_kind: kind,
        normalized_url: identity.normalized_url,
        identity_basis: identity.identity_basis,
        canonical_family_url: classResult.qualifying ? identity.canonical_url : null,
        family_id: classResult.qualifying && identity.family_key ? `awesome-family-${sha(identity.family_key).slice(0, 16)}` : null,
        unresolved_identity: classResult.qualifying && identity.unresolved,
        qualifying_resource: classResult.qualifying,
        exclusion_class: classResult.exclusion_class,
        is_list_item: context.is_list_item,
        curator_annotation: context.is_list_item ? line.slice(item.end).trim() || null : null,
        raw_line: line,
        ...(item.reference_definition_line ? { reference_definition_line: item.reference_definition_line } : {}),
      });
    }
    const markers = [...line.matchAll(/\]\(|\b(?:href|src)\s*=/gi)].map((match) => match.index);
    for (const marker of markers) {
      if (inAnySpan(marker, ignoredSpans)) continue;
      if (!items.some((item) => marker >= item.start && marker < item.end)) unrecognized.push({ line: lineIndex + 1, column: marker + 1, marker: line.slice(marker, marker + 12) });
    }
  }

  assert(unrecognized.length === 0, `Unrecognized link-like constructs: ${JSON.stringify(unrecognized)}`);
  const qualifying = occurrences.filter((item) => item.qualifying_resource);
  const excluded = occurrences.filter((item) => !item.qualifying_resource);
  assert(occurrences.length === qualifying.length + excluded.length, "Occurrence accounting invariant failed");
  assert(qualifying.every((item) => Boolean(item.family_id) !== Boolean(item.unresolved_identity)), "Family mapping invariant failed");

  const grouped = new Map();
  for (const occurrence of qualifying) {
    const key = occurrence.family_id || `unresolved:${occurrence.occurrence_id}`;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(occurrence);
  }
  const families = [...grouped.entries()].map(([key, items]) => {
    const first = items[0];
    const known = first.canonical_family_url ? rules.known_opened_families.find((item) => item.canonical_url === first.canonical_family_url) || null : null;
    const family = {
      schema_version: "v2-awesome-source-family-v1",
      family_id: first.family_id || key,
      canonical_url: first.canonical_family_url,
      unresolved_identity: first.unresolved_identity,
      normalized_urls: [...new Set(items.map((item) => item.normalized_url).filter(Boolean))].sort(),
      occurrence_ids: items.map((item) => item.occurrence_id),
      occurrence_count: items.length,
      category_paths: [...new Set(items.map((item) => item.category_path).filter(Boolean))].sort(),
      labels: [...new Set(items.map((item) => item.label).filter(Boolean))].sort(),
      curator_annotations: [...new Set(items.map((item) => item.curator_annotation).filter(Boolean))],
      source_lines: items.map((item) => item.source_line),
      accessibility_state: known ? "observed_accessible" : "not_assessed",
      known_opened: known,
      identity_basis: first.identity_basis,
      cross_url_alias_state: "not_assessed",
    };
    family.apparent_source_form = apparentForm(family);
    family.apparent_evidence_mode = evidenceMode(family.apparent_source_form);
    family.catalog_apparent_domains = apparentDomains(family.category_paths);
    family.catalog_apparent_domain = family.catalog_apparent_domains.join("; ");
    family.likely_outline_impacts = outlineImpacts(family.category_paths);
    family.likely_outline_impact = family.likely_outline_impacts.join("; ");
    [family.catalog_triage_status, family.catalog_triage_reason] = triageStatus(family, rules);
    family.catalog_lineage_state = "not_assessed";
    family.catalog_lineage_risk = `Catalog membership is a shared curator discovery path, not independent corroboration. Destination authorship, derivation, forks, mirrors, shared datasets, and possible aliases across different normalized URLs remain unassessed; ${family.occurrence_count} catalog occurrence${family.occurrence_count === 1 ? "" : "s"} count as one offline family key.`;
    family.catalog_anchoring_risk = `The catalog's ${family.category_paths.join("; ")} placement and curator wording may anchor later organization. Direct screening must test that framing rather than inherit it.`;
    family.catalog_metadata_limit = "All classification is based on the pinned catalog label, URL, category, and curator annotation; the destination was not opened by this extraction.";
    return family;
  }).sort((a, b) => (a.canonical_url || a.family_id).localeCompare(b.canonical_url || b.family_id));

  const mappedOccurrences = new Set(families.flatMap((family) => family.occurrence_ids));
  assert(mappedOccurrences.size === qualifying.length && qualifying.every((item) => mappedOccurrences.has(item.occurrence_id)), "Family occurrence coverage invariant failed");

  return {
    input: { path: inputPath, sha256: inputSha, bytes: Buffer.byteLength(markdown), lines: lines.length },
    definitions: [...definitions.entries()].map(([id, value]) => ({ id, ...value })),
    occurrences,
    families,
    totals: {
      all_occurrences: occurrences.length,
      qualifying_occurrences: qualifying.length,
      mechanically_excluded_occurrences: excluded.length,
      unique_normalized_urls: new Set(qualifying.map((item) => item.normalized_url).filter(Boolean)).size,
      canonical_families: families.filter((item) => !item.unresolved_identity).length,
      unresolved_identities: families.filter((item) => item.unresolved_identity).length,
      provisional_normalized_url_keys: families.filter((item) => item.identity_basis === "provisional_normalized_url_key").length,
      structurally_canonicalized_keys: families.filter((item) => ["structural_github_repository_key", "structural_arxiv_work_key"].includes(item.identity_basis)).length,
      previously_opened_identities: families.filter((item) => item.identity_basis === "previously_opened_identity").length,
      reference_definitions: definitions.size,
    },
  };
}

function countBy(values) {
  const counts = new Map();
  for (const value of values) counts.set(value || "unspecified", (counts.get(value || "unspecified") || 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function summaryMarkdown(result, metadata) {
  const exclusionCounts = countBy(result.occurrences.filter((item) => !item.qualifying_resource).map((item) => item.exclusion_class));
  const categoryCounts = countBy(result.occurrences.filter((item) => item.qualifying_resource).map((item) => item.category_path));
  const triageCounts = countBy(result.families.map((item) => item.catalog_triage_status));
  const formCounts = countBy(result.families.map((item) => item.apparent_source_form));
  const identityCounts = countBy(result.families.map((item) => item.identity_basis));
  const lines = [
    "# Awesome Harness Engineering Catalog Audit",
    "",
    "**Status:** Complete against the pinned README and rule manifest; no previously unopened destination was opened during extraction or enumeration",
    "",
    `**Catalog commit:** \`${metadata.rules.catalog.commit}\``,
    `**README SHA-256:** \`${result.input.sha256}\``,
    `**Rule-manifest SHA-256:** \`${metadata.rule_sha256}\``,
    `**Extractor:** \`${metadata.rules.extractor.path}\` v${EXTRACTOR_VERSION} (\`${metadata.extractor_sha256}\`)`,
    "",
    "## Accounting",
    "",
    "| Measure | Count |",
    "| --- | ---: |",
    `| All rendered/link-like occurrences | ${result.totals.all_occurrences} |`,
    `| Qualifying outbound resource occurrences | ${result.totals.qualifying_occurrences} |`,
    `| Mechanically excluded occurrences | ${result.totals.mechanically_excluded_occurrences} |`,
    `| Unique normalized qualifying URLs | ${result.totals.unique_normalized_urls} |`,
    `| Offline family keys | ${result.totals.canonical_families} |`,
    `| Syntactically unresolved family keys | ${result.totals.unresolved_identities} |`,
    `| Reference definitions | ${result.totals.reference_definitions} |`,
    "",
    `Invariant 1: **PASS** — ${result.totals.all_occurrences} = ${result.totals.qualifying_occurrences} + ${result.totals.mechanically_excluded_occurrences}.`,
    "",
    `Invariant 2: **PASS** — all ${result.totals.qualifying_occurrences} qualifying occurrences map to exactly one offline family key or syntactically unresolved identity.`,
    "",
    "No URL was requested, resolved through redirects, or opened during extraction. An offline family key is not a verified source identity: possible aliases across different URLs remain `not_assessed`. Accessibility is `not_assessed` unless an earlier authorized source lifecycle is explicitly merged.",
    "",
    "## Mechanical exclusions",
    "",
    "| Class | Count |",
    "| --- | ---: |",
    ...exclusionCounts.map(([value, count]) => `| \`${value}\` | ${count} |`),
    "",
    "## Qualifying occurrences by catalog category",
    "",
    "| Category | Occurrences |",
    "| --- | ---: |",
    ...categoryCounts.map(([value, count]) => `| ${value.replace(/\|/g, "\\|")} | ${count} |`),
    "",
    "## Catalog-only triage",
    "",
    "| Status | Families |",
    "| --- | ---: |",
    ...triageCounts.map(([value, count]) => `| \`${value}\` | ${count} |`),
    "",
    "| Apparent form | Families |",
    "| --- | ---: |",
    ...formCounts.map(([value, count]) => `| \`${value}\` | ${count} |`),
    "",
    "| Offline identity basis | Families |",
    "| --- | ---: |",
    ...identityCounts.map(([value, count]) => `| \`${value}\` | ${count} |`),
    "",
    "These statuses and forms are curator-context metadata, not source evaluation, provenance dispositions, evidence, or outline authority.",
    "",
  ];
  return `${lines.join("\n")}\n`;
}

export function writeCatalog(result, rules, paths) {
  const ruleText = fs.readFileSync(paths.rules, "utf8");
  const extractorPath = fileURLToPath(import.meta.url);
  const metadata = { rules, rule_sha256: sha(ruleText), extractor_sha256: sha(fs.readFileSync(extractorPath)) };
  fs.mkdirSync(path.dirname(paths.occurrences), { recursive: true });
  fs.writeFileSync(paths.occurrences, `${result.occurrences.map((item) => JSON.stringify(item)).join("\n")}\n`);
  fs.writeFileSync(paths.families, `${JSON.stringify({
    schema_version: "v2-awesome-source-family-set-v1",
    catalog: rules.catalog,
    extractor: { ...rules.extractor, sha256: metadata.extractor_sha256 },
    rule_manifest_sha256: metadata.rule_sha256,
    totals: result.totals,
    families: result.families,
  }, null, 2)}\n`);
  fs.writeFileSync(paths.summary, summaryMarkdown(result, metadata));
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const options = parseArgs(process.argv.slice(2));
    for (const key of ["readme", "rules", "occurrences", "families", "summary"]) assert(options[key], `Missing --${key}`);
    const markdown = fs.readFileSync(options.readme, "utf8");
    const rules = JSON.parse(fs.readFileSync(options.rules, "utf8"));
    const result = extractCatalog(markdown, rules, options.readme);
    writeCatalog(result, rules, options);
    console.log(`Catalog extraction PASS: ${result.totals.all_occurrences} occurrences, ${result.totals.qualifying_occurrences} qualifying, ${result.totals.canonical_families} families, ${result.totals.unresolved_identities} unresolved`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
