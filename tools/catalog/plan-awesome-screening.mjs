#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const PLANNER_VERSION = "1.0.0";
const DEFAULT_BATCH_SIZE = 20;

function sha(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
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

function markdown(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function primaryOccurrence(family, occurrenceById) {
  const items = family.occurrence_ids.map((id) => occurrenceById.get(id));
  assert(items.every(Boolean), `Missing occurrence for ${family.family_id}`);
  return items.sort((a, b) => a.source_line - b.source_line || a.source_column_start - b.source_column_start)[0];
}

function plannedSurface(form) {
  return {
    paper_or_preprint: "Primary abstract/metadata and only enough of the paper landing or PDF front matter to identify question, method, and scope.",
    benchmark_or_evaluation: "Primary benchmark overview plus the directly linked README or documentation surface; no result reproduction.",
    talk_video_or_audio: "Primary title, description, speaker/publisher identity, date, and transcript only when directly available on the linked surface.",
    course_collection_or_guide: "Direct landing page or top-level README only; do not traverse its bibliography or resource links.",
    repository: "Top-level repository landing/README and observed commit or release identity; no implementation deep dive.",
    documentation_or_specification: "Direct overview or specification landing page sufficient to establish scope and ownership.",
    article_or_web_resource: "Direct article or landing page sufficient to identify authorship, date, thesis, scope, and evidence posture.",
  }[form] || "Direct landing surface sufficient for identity and scope only.";
}

function roundRobinByCategory(entries) {
  const order = [];
  const groups = new Map();
  for (const entry of entries) {
    const category = entry.primary_category;
    if (!groups.has(category)) {
      groups.set(category, []);
      order.push(category);
    }
    groups.get(category).push(entry);
  }
  const result = [];
  while (result.length < entries.length) {
    for (const category of order) {
      const next = groups.get(category).shift();
      if (next) result.push(next);
    }
  }
  return result;
}

function trackFor(status) {
  return {
    candidate_for_direct_screening: "core_direct_screening",
    defer: "deferred_direct_screening",
    out_of_current_scope: "collection_boundary_screening",
    unresolved_identity: "identity_resolution_only",
    already_screened: "prior_screening_reuse",
  }[status];
}

function trackRationale(track) {
  return {
    core_direct_screening: "Catalog context suggests possible direct relevance. Screen every family before proposing any evidence-bearing reading.",
    deferred_direct_screening: "Applied, tutorial, demo, or template placement lowers immediate outline priority but does not remove the family from the maintainer-requested complete evaluation.",
    collection_boundary_screening: "Open only the directly cataloged collection landing page to verify identity and boundary; its outbound resources remain prohibited second hop.",
    identity_resolution_only: "Resolve only the already cataloged identity using an explicitly approved exact-identity query; do not broaden discovery.",
    prior_screening_reuse: "Reuse the existing read-only structural screen without reopening or granting added maturity from catalog recurrence.",
  }[track];
}

function batchPrefix(track) {
  return {
    core_direct_screening: "core",
    deferred_direct_screening: "deferred",
    collection_boundary_screening: "collection-boundary",
    identity_resolution_only: "identity-resolution",
  }[track];
}

export function buildScreeningPlan(familySet, occurrences, batchSize = DEFAULT_BATCH_SIZE) {
  assert(familySet.schema_version === "v2-awesome-source-family-set-v1", "Unsupported family-set schema");
  assert(Number.isInteger(batchSize) && batchSize > 0, "Batch size must be a positive integer");
  const occurrenceById = new Map(occurrences.map((item) => [item.occurrence_id, item]));
  assert(occurrenceById.size === occurrences.length, "Duplicate occurrence ID");

  const entries = familySet.families.map((family) => {
    const first = primaryOccurrence(family, occurrenceById);
    const track = trackFor(family.catalog_triage_status);
    assert(track, `Unsupported triage status ${family.catalog_triage_status}`);
    return {
      family_id: family.family_id,
      canonical_url: family.canonical_url,
      primary_label: first.label || family.labels[0] || family.canonical_url || family.family_id,
      primary_catalog_line: first.source_line,
      primary_category: first.category_path,
      all_category_paths: family.category_paths,
      occurrence_ids: family.occurrence_ids,
      occurrence_count: family.occurrence_count,
      catalog_triage_status: family.catalog_triage_status,
      catalog_triage_reason: family.catalog_triage_reason,
      screening_track: track,
      apparent_source_form: family.apparent_source_form,
      apparent_evidence_mode: family.apparent_evidence_mode,
      catalog_apparent_domain: family.catalog_apparent_domain,
      catalog_apparent_domains: family.catalog_apparent_domains,
      likely_outline_impact: family.likely_outline_impact,
      likely_outline_impacts: family.likely_outline_impacts,
      accessibility_state: family.accessibility_state,
      identity_basis: family.identity_basis,
      cross_url_alias_state: family.cross_url_alias_state,
      catalog_lineage_state: family.catalog_lineage_state,
      catalog_lineage_risk: family.catalog_lineage_risk,
      catalog_anchoring_risk: family.catalog_anchoring_risk,
      planned_inspection_extent: track === "prior_screening_reuse" ? "reuse_existing_read_only_screen" : "screening",
      planned_primary_surface: track === "prior_screening_reuse" ? "No new open proposed." : plannedSurface(family.apparent_source_form),
      unresolved_outline_decision: `Whether and how ${family.likely_outline_impact} should shape the future outline, if at all.`,
      expected_structural_effect: `May support retaining, merging, relocating, cross-cutting, or rejecting the catalog-implied topic; no outline change is presumed.`,
      identity_resolution_query: family.unresolved_identity ? "Exact canonical identity only; query text requires separate maintainer approval." : null,
      second_hop_policy: "prohibited",
    };
  }).sort((a, b) => a.primary_catalog_line - b.primary_catalog_line || a.family_id.localeCompare(b.family_id));

  const entryIds = new Set(entries.map((item) => item.family_id));
  assert(entryIds.size === familySet.families.length, "Family coverage contains duplicate IDs");
  const newOpenTracks = ["core_direct_screening", "deferred_direct_screening", "collection_boundary_screening", "identity_resolution_only"];
  const batches = [];
  for (const track of newOpenTracks) {
    const trackEntries = roundRobinByCategory(entries.filter((entry) => entry.screening_track === track));
    for (let index = 0; index < trackEntries.length; index += batchSize) {
      const members = trackEntries.slice(index, index + batchSize);
      batches.push({
        batch_id: `awesome-screen-${batchPrefix(track)}-${String(Math.floor(index / batchSize) + 1).padStart(2, "0")}`,
        approval_state: "proposed_not_authorized",
        screening_track: track,
        rationale: trackRationale(track),
        intended_inspection_extent: track === "identity_resolution_only" ? "identity_resolution_only" : "screening",
        second_hop_policy: "prohibited",
        family_count: members.length,
        families: members,
      });
    }
  }

  const proposedIds = batches.flatMap((batch) => batch.families.map((item) => item.family_id));
  const reused = entries.filter((entry) => entry.screening_track === "prior_screening_reuse");
  assert(new Set(proposedIds).size === proposedIds.length, "A proposed family occurs in multiple batches");
  assert(new Set([...proposedIds, ...reused.map((item) => item.family_id)]).size === entries.length, "Plan does not cover every family exactly once");
  assert(batches.every((batch) => batch.family_count > 0 && batch.family_count <= batchSize), "Batch size invariant failed");

  const count = (status) => entries.filter((item) => item.catalog_triage_status === status).length;
  return {
    schema_version: "v2-awesome-screening-plan-v1",
    planner: { path: "tools/catalog/plan-awesome-screening.mjs", version: PLANNER_VERSION },
    catalog: familySet.catalog,
    policy: {
      current_authority: "Catalog-context planning only. Every new batch remains blocked until maintainer approval.",
      batch_size_maximum: batchSize,
      ordering: "Within each track, deterministic round-robin across source-native catalog categories reduces category concentration. Order is operational, not a quality ranking.",
      deep_reading: "No deep-reading set is proposed from unopened catalog metadata. Direct screens must precede any evidence-bearing selection.",
      second_hop: "Anything linked from a destination remains prohibited unless separately proposed and approved.",
    },
    totals: {
      catalog_families: entries.length,
      proposed_new_direct_screens: proposedIds.length,
      prior_read_only_screens_reused: reused.length,
      proposed_batches: batches.length,
      candidate_for_direct_screening: count("candidate_for_direct_screening"),
      defer: count("defer"),
      out_of_current_scope: count("out_of_current_scope"),
      unresolved_identity: count("unresolved_identity"),
      already_screened: count("already_screened"),
    },
    prior_screening_reuse: reused,
    batches,
    deep_reading_proposal: [],
  };
}

function triageMarkdown(plan) {
  const entries = [...plan.prior_screening_reuse, ...plan.batches.flatMap((batch) => batch.families)]
    .sort((a, b) => a.primary_catalog_line - b.primary_catalog_line || a.family_id.localeCompare(b.family_id));
  const lines = [
    "# Awesome Harness Engineering Catalog Triage",
    "",
    "**Status:** Complete catalog-context triage; no previously unopened destination was opened by this phase",
    "",
    "This is a 401-family lead-management view derived only from the pinned AI Boost README. A row is not direct source evaluation, a provenance disposition, evidence, or outline authority. `not_assessed` means exactly that: no accessibility inference was made from catalog wording.",
    "",
    "| README line | Family | Catalog label | Catalog-only status | Apparent domain | Apparent form | Occurrences | Accessibility | Category contexts | Offline family URL key |",
    "| ---: | --- | --- | --- | --- | --- | ---: | --- | --- | --- |",
    ...entries.map((entry) => `| ${entry.primary_catalog_line} | \`${entry.family_id}\` | ${markdown(entry.primary_label)} | \`${entry.catalog_triage_status}\` | ${markdown(entry.catalog_apparent_domain)} | \`${entry.apparent_source_form}\` | ${entry.occurrence_count} | \`${entry.accessibility_state}\` | ${markdown(entry.all_category_paths.join("; "))} | ${markdown(entry.canonical_url || "unresolved")} |`),
    "",
    `Coverage invariant: **PASS** — all ${plan.totals.catalog_families} offline family keys appear exactly once in this view and exactly once in either prior-screening reuse or a proposed batch.`,
    "",
  ];
  return lines.join("\n");
}

function batchesMarkdown(plan, metadata) {
  const lines = [
    "# Proposed Awesome Catalog Direct-Screening Batches",
    "",
    "**Status:** Proposed; no new batch is authorized and no previously unopened destination has been opened by this phase",
    "",
    `**Planner:** \`${plan.planner.path}\` v${plan.planner.version} (\`${metadata.planner_sha256}\`)`,
    `**Family-set SHA-256:** \`${metadata.family_set_sha256}\``,
    `**Occurrence-ledger SHA-256:** \`${metadata.occurrences_sha256}\``,
    "",
    "The proposal covers every catalog family. It reuses six existing read-only Wave 1 screens and proposes direct screening—not deep reading—for all 395 previously unopened families. This complete proposal matches the maintainer's request to evaluate the aggregator rather than sample it. Execution stays divided into explicit batches, and each batch remains blocked until maintainer approval.",
    "",
    "No deep-reading set is proposed here. Catalog metadata cannot support one responsibly; direct screens must first establish identity, relevance, scope, lineage, accessibility, and evidence posture.",
    "",
    "## Accounting",
    "",
    "| Measure | Count |",
    "| --- | ---: |",
    `| Offline family keys | ${plan.totals.catalog_families} |`,
    `| Reused prior read-only screens | ${plan.totals.prior_read_only_screens_reused} |`,
    `| Proposed new direct screens | ${plan.totals.proposed_new_direct_screens} |`,
    `| Proposed batches | ${plan.totals.proposed_batches} |`,
    `| Maximum families per batch | ${plan.policy.batch_size_maximum} |`,
    "",
    "Coverage invariant: **PASS** — each family appears exactly once in prior-screening reuse or one proposed batch. Batch-order invariant: **PASS** — category round-robin order is deterministic and operational, not a quality ranking.",
    "",
    "## Batch index",
    "",
    "| Batch | Track | Families | Approval |",
    "| --- | --- | ---: | --- |",
    ...plan.batches.map((batch) => `| \`${batch.batch_id}\` | \`${batch.screening_track}\` | ${batch.family_count} | \`${batch.approval_state}\` |`),
    "",
    "## Prior screens reused without reopening",
    "",
    "| Family | Label | Existing state | Canonical URL |",
    "| --- | --- | --- | --- |",
    ...plan.prior_screening_reuse.map((entry) => `| \`${entry.family_id}\` | ${markdown(entry.primary_label)} | \`read_only\` structural screen | ${markdown(entry.canonical_url)} |`),
    "",
  ];
  for (const batch of plan.batches) {
    lines.push(
      `## ${batch.batch_id}`,
      "",
      `**Approval:** \`${batch.approval_state}\`<br>`,
      `**Track:** \`${batch.screening_track}\`<br>`,
      `**Extent:** \`${batch.intended_inspection_extent}\`<br>`,
      `**Second hop:** \`${batch.second_hop_policy}\``,
      "",
      batch.rationale,
      "",
      "| Family | Label | Primary category | Form | Planned direct surface | Unresolved outline decision | Identity query |",
      "| --- | --- | --- | --- | --- | --- | --- |",
      ...batch.families.map((entry) => `| \`${entry.family_id}\` | ${markdown(entry.primary_label)} | ${markdown(entry.primary_category)} | \`${entry.apparent_source_form}\` | ${markdown(entry.planned_primary_surface)} | ${markdown(entry.unresolved_outline_decision)} | ${entry.identity_resolution_query ? markdown(entry.identity_resolution_query) : "None"} |`),
      "",
    );
  }
  return lines.join("\n");
}

function writePlan(plan, paths) {
  const familyText = fs.readFileSync(paths.families, "utf8");
  const occurrenceText = fs.readFileSync(paths.occurrences, "utf8");
  const plannerText = fs.readFileSync(new URL(import.meta.url), "utf8");
  const metadata = { family_set_sha256: sha(familyText), occurrences_sha256: sha(occurrenceText), planner_sha256: sha(plannerText) };
  const serialized = { ...plan, planner: { ...plan.planner, sha256: metadata.planner_sha256 }, inputs: { family_set_sha256: metadata.family_set_sha256, occurrences_sha256: metadata.occurrences_sha256 } };
  fs.mkdirSync(path.dirname(paths.plan), { recursive: true });
  fs.writeFileSync(paths.plan, `${JSON.stringify(serialized, null, 2)}\n`);
  fs.writeFileSync(paths.triage, triageMarkdown(plan));
  fs.writeFileSync(paths.batches, batchesMarkdown(plan, metadata));
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const options = parseArgs(process.argv.slice(2));
    for (const key of ["families", "occurrences", "plan", "triage", "batches"]) assert(options[key], `Missing --${key}`);
    const familySet = JSON.parse(fs.readFileSync(options.families, "utf8"));
    const occurrences = fs.readFileSync(options.occurrences, "utf8").trim().split("\n").filter(Boolean).map((line) => JSON.parse(line));
    const plan = buildScreeningPlan(familySet, occurrences);
    writePlan(plan, options);
    console.log(`Screening plan PASS: ${plan.totals.catalog_families} families, ${plan.totals.proposed_new_direct_screens} proposed opens, ${plan.totals.proposed_batches} batches, ${plan.totals.prior_read_only_screens_reused} prior screens reused`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
