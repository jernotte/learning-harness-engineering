import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export const DISPOSITIONS = new Set(["read_only", "referenced", "excluded"]);
export const SURFACES = new Set([
  "documentation", "README", "code", "tests", "history", "releases", "issues",
  "benchmark_artifacts", "paper", "abstract", "transcript", "command_output", "other",
]);
export const EVENT_TYPES = new Set([
  "log_initialized", "coverage_plan", "search", "result_returned", "source_opened",
  "source_inspected", "disposition", "artifact_registered", "claim_declared",
  "claim_reference", "verification", "prose_ledger_attestation", "capture_boundary",
  "capture_observation", "repository_inspected", "capture_metrics", "warning_resolution",
  "manual_source_set", "provenance_waiver", "capture_archive", "observation_resolution", "review_scope", "search_update",
]);
const SOURCE_EVENT_TYPES = new Set([
  "result_returned",
  "source_opened",
  "source_inspected",
  "disposition",
  "claim_reference",
  "verification",
]);
const AUDIT_PROFILES = new Set(["diagnostic", "provisional-promotion"]);
const SEARCH_CAPTURE_STRENGTH = new Map([
  ["incomplete_truncated", 0],
  ["incomplete_unparseable", 0],
  ["unknown", 1],
  ["unknown_reconstructed", 1],
  ["complete", 2],
]);

export function readJsonl(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean).map((line, index) => {
    try {
      return { ...JSON.parse(line), __line: index + 1 };
    } catch (error) {
      throw new Error(`${file}:${index + 1}: ${error.message}`);
    }
  });
}

export function writeJsonl(file, rows) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const text = rows.map(({ __line, ...row }) => JSON.stringify(row)).join("\n");
  fs.writeFileSync(file, text ? `${text}\n` : "");
}

export function appendEvent(file, event) {
  const existing = readJsonl(file);
  const validation = validateEvents([...existing, event]);
  if (validation.errors.length) throw new Error(validation.errors.join("\n"));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.appendFileSync(file, `${JSON.stringify(event)}\n`);
}

export function applySemanticBatch(events, annotations) {
  const timestamp = annotations.timestamp || new Date().toISOString();
  const base = { timestamp, agent: annotations.agent || "primary", cycle: annotations.cycle, pass: annotations.pass || "semantic-annotation", capture_mode: "semantic_batch", semantic_batch_id: annotations.semantic_batch_id };
  const generated = [];
  if (annotations.planned_channels) generated.push({ ...base, event_id: `coverage-plan-${sha(annotations.semantic_batch_id).slice(0, 18)}`, event_type: "coverage_plan", planned_channels: annotations.planned_channels, planning_basis: annotations.planning_basis || "bounded scenario declared before execution" });
  for (const source of annotations.sources || []) {
    if (source.inspection_extent) generated.push({ ...base, event_id: `semantic-inspect-${sha(`${annotations.semantic_batch_id}:${source.source_id}`).slice(0, 18)}`, event_type: "source_inspected", source_id: source.source_id, inspection_extent: source.inspection_extent, surfaces: source.surfaces, locations_inspected: source.locations_inspected, inspection_basis: source.inspection_basis || "human/agent semantic judgment", agent_role: annotations.agent_role || "primary" });
    generated.push({ ...base, event_id: `semantic-disposition-${sha(`${annotations.semantic_batch_id}:${source.source_id}`).slice(0, 18)}`, event_type: "disposition", source_id: source.source_id, disposition: source.disposition, reason: source.reason, ...(source.record_path ? { record_path: source.record_path } : {}) });
  }
  for (const search of annotations.searches || []) {
    generated.push({
      ...base,
      event_id: `search-update-${sha(`${annotations.semantic_batch_id}:${search.search_event_id}`).slice(0, 18)}`,
      event_type: "search_update",
      ...search,
    });
  }
  if (annotations.artifact) {
    generated.push({
      ...base,
      event_id: `artifact-${sha(`${annotations.semantic_batch_id}:${annotations.artifact.artifact_id}`).slice(0, 18)}`,
      event_type: "artifact_registered",
      ...annotations.artifact,
    });
  }
  if (annotations.review_scope) {
    generated.push({
      ...base,
      event_id: `review-scope-${sha(`${annotations.semantic_batch_id}:${annotations.review_scope.scope_id}`).slice(0, 18)}`,
      event_type: "review_scope",
      ...annotations.review_scope,
    });
  }
  for (const claim of annotations.claims || []) {
    generated.push({
      ...base,
      event_id: `claim-declared-${sha(`${annotations.semantic_batch_id}:${claim.claim_id}`).slice(0, 18)}`,
      event_type: "claim_declared",
      artifact_id: annotations.artifact?.artifact_id || claim.artifact_id,
      claim_id: claim.claim_id,
      claim_text: claim.claim_text,
      epistemic_kind: claim.epistemic_kind,
      artifact_location: claim.artifact_location,
      ...(claim.confidence ? { confidence: claim.confidence } : {}),
    });
    for (const reference of claim.references || []) {
      generated.push({
        ...base,
        event_id: `claim-reference-${sha(`${annotations.semantic_batch_id}:${claim.claim_id}:${reference.source_id}:${reference.location}`).slice(0, 18)}`,
        event_type: "claim_reference",
        source_id: reference.source_id,
        artifact_id: annotations.artifact?.artifact_id || claim.artifact_id,
        claim_id: claim.claim_id,
        location: reference.location,
        epistemic_kind: claim.epistemic_kind,
        relationship: reference.relationship || "supports",
      });
      generated.push({
        ...base,
        event_id: `verification-${sha(`${annotations.semantic_batch_id}:${claim.claim_id}:${reference.source_id}:${reference.location}`).slice(0, 18)}`,
        event_type: "verification",
        source_id: reference.source_id,
        claim_id: claim.claim_id,
        location: reference.location,
        verifier: reference.verifier || annotations.agent || "primary",
        verifier_role: reference.verifier_role || annotations.agent_role || "primary",
        outcome: reference.outcome,
        inspected_version: reference.inspected_version,
        notes: reference.notes,
      });
    }
  }
  if (annotations.artifact && (annotations.claims || []).length) {
    const withClaims = [...events, ...generated];
    generated.push({
      ...base,
      event_id: `prose-attestation-${sha(`${annotations.semantic_batch_id}:${annotations.artifact.artifact_id}`).slice(0, 18)}`,
      event_type: "prose_ledger_attestation",
      artifact_id: annotations.artifact.artifact_id,
      attester: annotations.agent || "primary",
      ledger_digest: claimLedgerDigest(withClaims, annotations.artifact.artifact_id),
      prose_location: annotations.artifact.artifact_path,
    });
  }
  const observations = events.filter((event) => event.event_type === "capture_observation");
  const interactionTypes = new Set(["search", "result_returned", "source_opened", "repository_inspected"]);
  const manualCaptureActions = events.filter((event) => interactionTypes.has(event.event_type) && event.capture_mode !== "automatic").length;
  generated.push({ ...base, event_id: `capture-metrics-${sha(annotations.semantic_batch_id).slice(0, 18)}`, event_type: "capture_metrics", interaction_count: observations.filter((event) => event.research_capable).length, automatic_event_count: events.filter((event) => event.capture_mode === "automatic").length, manual_capture_actions: manualCaptureActions, semantic_batch_actions: 1, semantic_decision_count: (annotations.sources || []).length + (annotations.searches || []).length + (annotations.claims || []).length });
  return [...events, ...generated];
}

export function validateEvents(events) {
  const errors = [];
  const warnings = [];
  const ids = new Set();
  const searches = new Set();
  const opened = new Set();
  const inspected = new Set();

  for (const event of events) {
    const at = event.__line ? `line ${event.__line}` : event.event_id || "new event";
    for (const field of ["event_id", "timestamp", "agent", "cycle", "pass", "event_type"]) {
      if (event[field] === undefined || event[field] === "") errors.push(`${at}: missing ${field}`);
    }
    if (event.event_id && ids.has(event.event_id)) errors.push(`${at}: duplicate event_id ${event.event_id}`);
    ids.add(event.event_id);
    if (event.event_type && !EVENT_TYPES.has(event.event_type)) errors.push(`${at}: unknown event_type ${event.event_type}`);
    if (event.timestamp && Number.isNaN(Date.parse(event.timestamp))) errors.push(`${at}: invalid timestamp ${event.timestamp}`);
    if (SOURCE_EVENT_TYPES.has(event.event_type) && !event.source_id) errors.push(`${at}: ${event.event_type} requires source_id`);
    if (event.event_type === "search") {
      for (const field of ["query_id", "query", "channel", "tool_provider"]) {
        if (!event[field]) errors.push(`${at}: search requires ${field}`);
      }
      for (const field of ["query_family", "purpose", "coverage_dimension"]) {
        if (!event[field] && !(event.capture_mode === "automatic" && event.semantic_status === "pending")) errors.push(`${at}: search requires ${field}, or automatic pending semantics`);
      }
      for (const field of ["filters", "requested_limit", "observed_returned_count", "cursor_pagination", "truncation", "pages_examined"]) {
        if (!(field in event)) errors.push(`${at}: search requires ${field}, which may be null`);
      }
      searches.add(event.query_id);
    }
    if (event.event_type === "search_update") {
      if (!event.search_event_id || !event.reason) errors.push(`${at}: search_update requires search_event_id and reason`);
      const updateFields = ["query_family", "purpose", "coverage_dimension", "observed_returned_count", "total_hits_reported", "truncation", "result_capture_status"];
      if (!updateFields.some((field) => field in event)) errors.push(`${at}: search_update requires at least one corrected or semantic field`);
    }
    if (event.event_type === "result_returned") {
      if (!event.query_id || !event.canonical_url || !Number.isInteger(event.result_rank)) errors.push(`${at}: result_returned requires query_id, canonical_url, and integer result_rank`);
    }
    if (event.event_type === "result_returned" && event.query_id && !searches.has(event.query_id)) {
      warnings.push(`${at}: result references unseen query ${event.query_id}`);
    }
    if (event.event_type === "source_opened") {
      opened.add(event.source_id);
      if (!event.canonical_url && !event.canonical_identity) errors.push(`${at}: source_opened requires canonical_url or canonical_identity`);
      for (const field of ["host", "organization", "source_type"]) if (!event[field]) errors.push(`${at}: source_opened requires ${field}`);
      if (!event.query_id && !event.direct_discovery_reason) errors.push(`${at}: source_opened requires query_id or direct_discovery_reason`);
    }
    if (event.event_type === "source_inspected") {
      inspected.add(event.source_id);
      if (!event.inspection_extent) errors.push(`${at}: source_inspected requires inspection_extent`);
      if (!Array.isArray(event.surfaces) || (event.inspection_extent !== "none" && event.surfaces.length === 0)) errors.push(`${at}: source_inspected requires surfaces, non-empty unless inspection_extent is none`);
      if (!Array.isArray(event.locations_inspected) || (event.inspection_extent !== "none" && event.locations_inspected.length === 0)) errors.push(`${at}: source_inspected requires locations_inspected, non-empty unless inspection_extent is none`);
      for (const surface of event.surfaces || []) if (!SURFACES.has(surface)) errors.push(`${at}: unknown surface ${surface}`);
    }
    if (event.event_type === "disposition") {
      if (!DISPOSITIONS.has(event.disposition)) errors.push(`${at}: invalid disposition ${event.disposition}`);
      if (!event.reason) errors.push(`${at}: disposition requires reason`);
      if (!opened.has(event.source_id)) warnings.push(`${at}: disposition precedes source_opened for ${event.source_id}`);
    }
    if (event.event_type === "claim_reference") {
      if (!event.claim_id || !event.artifact_id || !event.location) {
        errors.push(`${at}: claim_reference requires claim_id, artifact_id, and exact location`);
      }
    }
    if (event.event_type === "verification") {
      if (!event.claim_id || !event.location || !event.verifier || !event.verifier_role || !event.outcome || !event.inspected_version || !event.notes) {
        errors.push(`${at}: verification requires claim_id, location, verifier, verifier_role, outcome, inspected_version, and notes`);
      }
    }
    if (event.event_type === "capture_boundary") {
      for (const field of ["native_source", "native_source_sha256", "capture_mode"]) if (!event[field]) errors.push(`${at}: capture_boundary requires ${field}`);
      for (const field of ["line_start", "line_end", "observed_tool_call_count"]) if (!Number.isInteger(event[field])) errors.push(`${at}: capture_boundary requires integer ${field}`);
      if (!["full_rollout", "declared_window"].includes(event.capture_mode)) errors.push(`${at}: invalid capture_mode ${event.capture_mode}`);
    }
    if (event.event_type === "capture_archive") {
      for (const field of ["boundary_id", "archive_path", "archive_sha256", "source_runtime_path", "captured_at", "archive_mode"]) if (!event[field]) errors.push(`${at}: capture_archive requires ${field}`);
      for (const field of ["archive_bytes", "line_start", "line_end"]) if (!Number.isInteger(event[field])) errors.push(`${at}: capture_archive requires integer ${field}`);
      if (event.line_start !== 1) errors.push(`${at}: capture_archive must begin at line 1`);
    }
    if (event.event_type === "capture_observation") {
      if (!event.boundary_id || !event.native_ref?.call_id || !event.native_ref?.input_sha256 || typeof event.research_capable !== "boolean" || !event.classification || !event.resolution) {
        errors.push(`${at}: capture_observation requires boundary_id, native call/hash, research_capable, classification, and resolution`);
      }
    }
    if (event.event_type === "observation_resolution") {
      if (!event.observation_id || !event.previous_resolution_event_id || !event.resolution_batch_id || !["linked", "not_research"].includes(event.resolution)) errors.push(`${at}: observation_resolution requires observation_id, previous_resolution_event_id, resolution_batch_id, and linked/not_research resolution`);
      if (!event.reason) errors.push(`${at}: observation_resolution requires reason`);
      if (event.resolution === "linked" && (!Array.isArray(event.linked_event_ids) || event.linked_event_ids.length === 0)) errors.push(`${at}: linked observation_resolution requires linked_event_ids`);
      if (event.resolution === "not_research" && event.linked_event_ids) errors.push(`${at}: not_research observation_resolution cannot include linked_event_ids`);
    }
    if (event.event_type === "warning_resolution" && (!event.code || !event.subject || !event.reason)) {
      errors.push(`${at}: warning_resolution requires code, subject, and reason`);
    }
    if (event.event_type === "provenance_waiver" && (!event.reviewer || !event.reason || !event.scope)) {
      errors.push(`${at}: provenance_waiver requires reviewer, reason, and scope`);
    }
    if (event.event_type === "claim_declared" && (!event.claim_id || !event.artifact_id || !event.claim_text || !event.epistemic_kind)) {
      errors.push(`${at}: claim_declared requires claim_id, artifact_id, claim_text, and epistemic_kind`);
    }
    if (event.event_type === "artifact_registered" && (!event.artifact_id || !event.artifact_type || !event.artifact_path)) errors.push(`${at}: artifact_registered requires artifact_id, artifact_type, and artifact_path`);
    if (event.event_type === "review_scope" && (!event.scope_id || !event.scope_basis || !Array.isArray(event.artifact_ids) || event.artifact_ids.length === 0)) errors.push(`${at}: review_scope requires scope_id, scope_basis, and non-empty artifact_ids`);
    if (event.event_type === "prose_ledger_attestation" && (!event.artifact_id || !event.attester || !event.ledger_digest || !event.prose_location)) {
      errors.push(`${at}: prose_ledger_attestation requires artifact_id, attester, ledger_digest, and prose_location`);
    }
    if (event.event_type === "repository_inspected" && (!event.repository_path || !event.command_sha256 || !Array.isArray(event.surfaces))) {
      errors.push(`${at}: repository_inspected requires repository_path, command_sha256, and surfaces`);
    }
    if (event.event_type === "repository_inspected") for (const surface of event.surfaces || []) if (!SURFACES.has(surface)) errors.push(`${at}: unknown surface ${surface}`);
    if (event.event_type === "capture_metrics") {
      for (const field of ["interaction_count", "automatic_event_count", "manual_capture_actions", "semantic_batch_actions", "semantic_decision_count"]) if (!Number.isInteger(event[field])) errors.push(`${at}: capture_metrics requires integer ${field}`);
    }
  }
  return { errors, warnings };
}

function sha(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function rawOutput(value) {
  return typeof value === "string" ? value : JSON.stringify(value);
}

function outputText(value) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map((item) => item?.text || "").join("\n");
  return JSON.stringify(value);
}

function stringProp(source, key) {
  return stringProps(source, key)[0] || null;
}

function numberProp(source, key) {
  const match = source.match(new RegExp(`(?:["']?${key}["']?)\\s*:\\s*(\\d+)`));
  return match ? Number(match[1]) : null;
}

function readStringLiteral(source, start) {
  const quote = source[start];
  if (quote !== "\"" && quote !== "'") return null;
  let escaped = false;
  for (let index = start + 1; index < source.length; index += 1) {
    const character = source[index];
    if (escaped) { escaped = false; continue; }
    if (character === "\\") { escaped = true; continue; }
    if (character !== quote) continue;
    const raw = source.slice(start, index + 1);
    if (quote === "\"") {
      try { return { value: JSON.parse(raw), end: index + 1 }; } catch {}
    }
    return {
      value: raw.slice(1, -1)
        .replaceAll("\\'", "'")
        .replaceAll('\\"', '"')
        .replaceAll("\\n", "\n")
        .replaceAll("\\r", "\r")
        .replaceAll("\\t", "\t")
        .replaceAll("\\\\", "\\"),
      end: index + 1,
    };
  }
  return null;
}

function stringBindings(source) {
  const bindings = new Map();
  const pattern = /\b(?:const|let)\s+([A-Za-z_$][\w$]*)\s*=\s*/g;
  for (const match of source.matchAll(pattern)) {
    const literal = readStringLiteral(source, match.index + match[0].length);
    if (literal) bindings.set(match[1], literal.value);
  }
  return bindings;
}

function stringProps(source, key) {
  const values = [];
  const bindings = stringBindings(source);
  const pattern = new RegExp(`(?:["']?${key}["']?)\\s*:\\s*`, "g");
  for (const match of source.matchAll(pattern)) {
    const start = match.index + match[0].length;
    const literal = readStringLiteral(source, start);
    if (literal) { values.push(literal.value); continue; }
    const identifier = source.slice(start).match(/^([A-Za-z_$][\w$]*)/i)?.[1];
    if (identifier && bindings.has(identifier)) values.push(bindings.get(identifier));
  }
  return values;
}

function execEnvelope(input, projectRoot) {
  const workdirs = stringProps(input, "workdir");
  const repositoryPaths = [...input.matchAll(/\/(?:Users|private|tmp)\/[^\s"'`;,)]+\/reference-materials\/research\/[^\s"'`;,)]+/g)].map((match) => match[0]);
  const externalWorkdir = workdirs.find((candidate) => {
    const resolved = path.resolve(candidate);
    return resolved !== projectRoot && !resolved.startsWith(`${projectRoot}${path.sep}`);
  });
  const repositoryPath = externalWorkdir || repositoryPaths[0] || workdirs[0] || projectRoot;
  const commands = stringProps(input, "cmd");
  return { repositoryPath, commandText: commands.length ? commands.join("\n") : input };
}

function httpUrls(text) {
  const urls = [];
  const seen = new Set();
  for (const match of text.matchAll(/https?:\/\/[^\s"'<>\\)\]]+/g)) {
    const candidate = match[0].replace(/[.,;:]+$/, "");
    try {
      const canonical = canonicalUrl(candidate);
      if (!seen.has(canonical)) { seen.add(canonical); urls.push(candidate); }
    } catch {}
  }
  return urls;
}

function genericWebSearchOutput(text) {
  if (/Warning:\s*truncated output/i.test(text)) return { status: "incomplete_truncated", urls: [], truncation: "runtime output truncation detected; returned-result window is incomplete" };
  const urls = httpUrls(text);
  if (urls.length) return { status: "complete", urls, truncation: "none observed" };
  if (/\b(?:no results|0 results|nothing found)\b/i.test(text)) return { status: "complete", urls: [], truncation: "none observed" };
  return { status: "incomplete_unparseable", urls: [], truncation: "generic web output did not expose a mechanically parseable result window" };
}

function webSourceType(url) {
  const host = new URL(url).host;
  if (host === "arxiv.org") return "preprint";
  if (host === "doi.org") return "paper identifier";
  if (host === "github.com") return "repository";
  return "web source";
}

function webMarkerMatches(input, marker) {
  const action = marker.action || {};
  if (action.type === "search" && Array.isArray(action.queries)) {
    const queries = stringProps(input, "q");
    return action.queries.length > 0 && action.queries.every((query) => queries.includes(query));
  }
  if (action.type === "open_page" && action.url) return stringProps(input, "ref_id").includes(action.url);
  return false;
}

function parseJsonText(text) {
  const starts = [];
  for (let index = 0; index < text.length; index += 1) if (text[index] === "{") starts.push(index);
  for (const index of starts) {
    try {
      const parsed = JSON.parse(text.slice(index).trim());
      if (parsed?.content?.[0]?.text) {
        try { return JSON.parse(parsed.content[0].text); } catch { return parsed; }
      }
      return parsed;
    } catch {}
  }
  return null;
}

function parseSearchOutput(text) {
  const runtimeTruncated = /Warning:\s*truncated output/i.test(text);
  const parsed = parseJsonText(text);
  const hasHitArray = Array.isArray(parsed?.hits);
  if (runtimeTruncated) {
    return {
      status: "incomplete_truncated",
      hits: hasHitArray ? parsed.hits : [],
      observedCount: null,
      totalHits: null,
      page: Number.isInteger(parsed?.page) ? parsed.page : null,
      truncation: "runtime output truncation detected; returned-result window is incomplete",
    };
  }
  if (!hasHitArray) {
    return {
      status: "incomplete_unparseable",
      hits: [],
      observedCount: null,
      totalHits: null,
      page: null,
      truncation: "known search output could not be parsed; returned-result window is unknown",
    };
  }
  const totalHits = Number.isInteger(parsed.nbHits) ? parsed.nbHits : parsed.hits.length;
  return {
    status: "complete",
    hits: parsed.hits,
    observedCount: parsed.hits.length,
    totalHits,
    page: Number.isInteger(parsed.page) ? parsed.page : 0,
    truncation: parsed.hits.length < totalHits ? "observed window smaller than total hits" : "none observed",
  };
}

function canonicalUrl(url) {
  const parsed = new URL(url);
  parsed.hash = "";
  return parsed.toString();
}

function sourceId(url) {
  return `auto-source-${sha(canonicalUrl(url)).slice(0, 16)}`;
}

function derivedId(kind, nativeId, suffix = "") {
  return `auto-${kind}-${sha(`${nativeId}:${suffix}`).slice(0, 18)}`;
}

export function claimLedgerDigest(events, artifactId) {
  const claims = events.filter((event) => event.event_type === "claim_declared" && event.artifact_id === artifactId)
    .map((event) => ({ claim_id: event.claim_id, artifact_id: event.artifact_id, claim_text: event.claim_text, epistemic_kind: event.epistemic_kind }))
    .sort((a, b) => a.claim_id.localeCompare(b.claim_id));
  return sha(JSON.stringify(claims));
}

export function applyObservationResolutionBatch(events, batch) {
  if (!batch.resolution_batch_id) throw new Error("resolution batch requires resolution_batch_id");
  const observations = new Map(events.filter((event) => event.event_type === "capture_observation").map((event) => [event.event_id, event]));
  const prior = events.filter((event) => event.event_type === "observation_resolution");
  const effectiveIds = new Map([...observations].map(([id]) => [id, id]));
  for (const event of prior) effectiveIds.set(event.observation_id, event.event_id);
  const seen = new Set();
  const base = {
    timestamp: batch.timestamp || new Date().toISOString(),
    agent: batch.agent || "primary",
    cycle: batch.cycle,
    pass: batch.pass || "observation-resolution",
    capture_mode: "semantic_batch",
    resolution_batch_id: batch.resolution_batch_id,
  };
  const generated = [];
  for (const item of batch.resolutions || []) {
    if (seen.has(item.observation_id)) throw new Error(`resolution batch repeats observation ${item.observation_id}`);
    seen.add(item.observation_id);
    const observation = observations.get(item.observation_id);
    if (!observation) throw new Error(`unknown observation_id ${item.observation_id}`);
    const expectedPrevious = effectiveIds.get(item.observation_id);
    if (item.previous_resolution_event_id !== expectedPrevious) throw new Error(`stale or contradictory resolution for ${item.observation_id}; expected previous_resolution_event_id ${expectedPrevious}`);
    if (item.resolution === "not_research" && observation.classification !== "generic_shell_requires_review") throw new Error(`only generic_shell_requires_review may resolve not_research: ${item.observation_id}`);
    const event = {
      ...base,
      event_id: `observation-resolution-${sha(`${batch.resolution_batch_id}:${item.observation_id}`).slice(0, 18)}`,
      event_type: "observation_resolution",
      observation_id: item.observation_id,
      previous_resolution_event_id: item.previous_resolution_event_id,
      resolution: item.resolution,
      reason: item.reason,
      ...(item.resolution === "linked" ? { linked_event_ids: item.linked_event_ids } : {}),
    };
    generated.push(event);
    effectiveIds.set(item.observation_id, event.event_id);
  }
  for (const search of batch.search_updates || []) {
    generated.push({
      ...base,
      event_id: `search-update-${sha(`${batch.resolution_batch_id}:${search.search_event_id}`).slice(0, 18)}`,
      event_type: "search_update",
      ...search,
    });
  }
  const combined = [...events, ...generated];
  const validation = validateEvents(combined);
  if (validation.errors.length) throw new Error(validation.errors.join("\n"));
  return combined;
}

export function archiveCaptureBoundary(events, boundaryId, archivePath, options = {}) {
  const boundary = events.find((event) => event.event_type === "capture_boundary" && event.event_id === boundaryId);
  if (!boundary) throw new Error(`unknown capture boundary ${boundaryId}`);
  if (!fs.existsSync(boundary.native_source)) throw new Error(`native source does not exist: ${boundary.native_source}`);
  const rawLines = fs.readFileSync(boundary.native_source, "utf8").split(/\n/);
  const prefix = rawLines.slice(0, boundary.line_end).join("\n") + "\n";
  const digest = sha(prefix);
  if (digest !== boundary.native_source_sha256) throw new Error(`native prefix hash does not match boundary ${boundaryId}`);
  fs.mkdirSync(path.dirname(archivePath), { recursive: true, mode: 0o700 });
  fs.writeFileSync(archivePath, prefix, { mode: 0o600, flag: "wx" });
  fs.chmodSync(archivePath, 0o600);
  const event = {
    event_id: `capture-archive-${sha(`${boundaryId}:${path.resolve(archivePath)}:${digest}`).slice(0, 18)}`,
    timestamp: options.timestamp || new Date().toISOString(),
    agent: options.agent || "primary",
    cycle: options.cycle || boundary.cycle,
    pass: options.pass || "retention",
    event_type: "capture_archive",
    boundary_id: boundaryId,
    archive_path: path.resolve(archivePath),
    archive_sha256: digest,
    archive_bytes: Buffer.byteLength(prefix),
    line_start: 1,
    line_end: boundary.line_end,
    source_runtime_path: boundary.native_source,
    captured_at: options.timestamp || new Date().toISOString(),
    archive_mode: "0600",
  };
  return [...events, event];
}

function nativeCall(row) {
  const payload = row.payload || {};
  if (row.type !== "response_item") return null;
  if (payload.type === "function_call") {
    return { callId: payload.call_id || payload.id, toolName: payload.name, rawInput: payload.arguments || "", namespace: payload.namespace };
  }
  if (payload.type === "custom_tool_call") {
    return { callId: payload.call_id || payload.id, toolName: payload.name, rawInput: payload.input || "", namespace: "custom" };
  }
  return null;
}

function classifyNativeCall(call, options = {}) {
  const input = String(call.rawInput || "");
  const projectRoot = path.resolve(options.projectRoot || options["project-root"] || process.cwd());
  const insideProject = (candidate) => {
    const resolved = path.resolve(candidate || projectRoot);
    return resolved === projectRoot || resolved.startsWith(`${projectRoot}${path.sep}`);
  };
  const externalPatterns = [
    /web__run|web_search|image_query/i,
    /github_/i,
    /https?:\/\//i,
    /\bcurl\b|\bwget\b|\bgh\s/i,
    /git\s+(?:clone|fetch|pull|remote)/i,
    /\/\.codex\/|\/reference-materials\//i,
  ];
  if (/tools\.apply_patch/.test(input)) {
    const targets = [...input.matchAll(/\*\*\* (?:Add|Update|Delete) File:\s*([^\\\n\n]+)/g)].map((match) => match[1].replaceAll("\\n", "").trim());
    if (targets.length && targets.every(insideProject)) return { research_capable: false, classification: "local_project_edit", automatic_reason: "Patch targets are confined to the research project." };
    return { research_capable: true, classification: "generic_shell_requires_review" };
  }
  if (/tools\.(?:update_plan|get_goal|create_goal)/.test(input)) return { research_capable: false, classification: "local_control_operation", automatic_reason: "Task-control operation does not access research material." };
  if (/tools\.(?:mcp__[A-Za-z0-9_]+|web__run)\s*\(/i.test(input) || /^(?:mcp__[A-Za-z0-9_]+|web__run)$/i.test(call.toolName || "")) return { research_capable: true, classification: "external_or_research_capable" };
  if (/tools\.exec_command/.test(input)) {
    const envelope = execEnvelope(input, projectRoot);
    const cmd = envelope.commandText;
    const workdir = envelope.repositoryPath;
    const text = `${cmd} ${workdir}`;
    if (externalPatterns.some((pattern) => pattern.test(text)) || !insideProject(workdir)) return { research_capable: true, classification: "external_or_research_capable" };
    if (/(?:^|[;&|]\s*|\s)(?:git|rg|sed|find)\s/.test(cmd)) return { research_capable: true, classification: "generic_shell_requires_review" };
    return { research_capable: false, classification: "local_project_operation", automatic_reason: "Command runs inside the research project without an external-access signature." };
  }
  const text = `${call.namespace || ""} ${call.toolName || ""} ${input}`;
  if (externalPatterns.some((pattern) => pattern.test(text))) {
    return { research_capable: true, classification: "external_or_research_capable" };
  }
  if (call.toolName === "exec" || call.toolName === "exec_command") {
    return { research_capable: true, classification: "generic_shell_requires_review" };
  }
  return { research_capable: false, classification: "non_research_tool_by_name", automatic_reason: "Tool name is outside the adapter's research-capable set." };
}

export function ingestCodexRollout(file, options = {}) {
  const rows = readJsonl(file);
  const observations = [];
  const derived = [];
  const after = options.after ? Date.parse(options.after) : null;
  const before = options.before ? Date.parse(options.before) : null;
  const inWindow = (row) => (!after || Date.parse(row.timestamp) >= after) && (!before || Date.parse(row.timestamp) <= before);
  const outputs = new Map();
  const webMarkers = new Map();
  for (const row of rows) {
    if (!inWindow(row)) continue;
    const payload = row.payload || {};
    if (row.type === "response_item" && ["function_call_output", "custom_tool_call_output"].includes(payload.type)) {
      outputs.set(payload.call_id, { line: row.__line, output_sha256: sha(rawOutput(payload.output ?? "")), value: payload.output });
    }
    if (row.type === "event_msg" && payload.type === "web_search_end") {
      webMarkers.set(payload.call_id, { line: row.__line, timestamp: row.timestamp, query_sha256: sha(String(payload.query ?? "")), action: payload.action || null });
    }
  }
  const capturedCallIds = new Set();
  const wrappedWebCalls = [];
  for (const row of rows) {
    if (!inWindow(row)) continue;
    const call = nativeCall(row);
    if (!call) continue;
    capturedCallIds.add(call.callId);
    const fingerprint = sha(`${row.timestamp}\n${call.callId}\n${call.toolName}\n${call.rawInput}`);
    const output = outputs.get(call.callId);
    const webMarker = webMarkers.get(call.callId);
    const classification = classifyNativeCall(call, options);
    const observation = {
      event_id: `native-${fingerprint.slice(0, 20)}`,
      timestamp: row.timestamp,
      agent: options.agent || "primary",
      cycle: options.cycle || "unknown",
      pass: options.pass || "native-ingest",
      event_type: "capture_observation",
      native_ref: {
        rollout_path: path.resolve(file),
        line: row.__line,
        call_id: call.callId,
        tool_name: call.toolName,
        input_sha256: fingerprint,
        ...(output ? { output_line: output.line, output_sha256: output.output_sha256 } : {}),
        ...(webMarker ? { web_search_line: webMarker.line, web_query_sha256: webMarker.query_sha256 } : {}),
      },
      ...classification,
      resolution: classification.research_capable ? "unreconciled" : "not_research",
      ...(!classification.research_capable ? { resolution_reason: classification.automatic_reason } : {}),
    };
    const automatic = options.derive ? deriveResearchEvents({ row, call, output: output?.value, nativeEventId: observation.event_id, options }) : [];
    if (automatic.length) {
      observation.resolution = "linked";
      observation.linked_event_ids = automatic.map((event) => event.event_id);
    }
    observations.push(observation);
    derived.push(...automatic);
    if (/tools\.web__run\s*\(/.test(String(call.rawInput || "")) && automatic.length) wrappedWebCalls.push({ timestamp: row.timestamp, input: String(call.rawInput || ""), eventIds: automatic.map((event) => event.event_id), used: false });
  }
  for (const [callId, marker] of webMarkers) {
    if (capturedCallIds.has(callId) || !inWindow(marker)) continue;
    const fingerprint = sha(`${marker.timestamp}\n${callId}\nnative_web_search\n${marker.query_sha256}`);
    const markerEventId = `native-${fingerprint.slice(0, 20)}`;
    const match = wrappedWebCalls
      .filter((candidate) => !candidate.used && Date.parse(candidate.timestamp) <= Date.parse(marker.timestamp) && webMarkerMatches(candidate.input, marker))
      .sort((left, right) => Date.parse(right.timestamp) - Date.parse(left.timestamp))[0];
    if (match) {
      match.used = true;
      for (const event of derived.filter((candidate) => match.eventIds.includes(candidate.event_id))) event.native_refs = [...new Set([...(event.native_refs || []), markerEventId])];
    }
    observations.push({
      event_id: markerEventId,
      timestamp: marker.timestamp,
      agent: options.agent || "primary",
      cycle: options.cycle || "unknown",
      pass: options.pass || "native-ingest",
      event_type: "capture_observation",
      native_ref: { rollout_path: path.resolve(file), line: marker.line, call_id: callId, tool_name: "native_web_search", input_sha256: fingerprint, web_query_sha256: marker.query_sha256 },
      research_capable: true,
      classification: "external_or_research_capable",
      resolution: match ? "linked" : "unreconciled",
      ...(match ? { linked_event_ids: match.eventIds } : {}),
    });
  }
  const knownResponseTypes = new Set(["message", "reasoning", "agent_message", "function_call", "function_call_output", "custom_tool_call", "custom_tool_call_output"]);
  for (const row of rows) {
    if (!inWindow(row) || row.type !== "response_item") continue;
    const type = row.payload?.type || "";
    if (knownResponseTypes.has(type) || !/(tool|function|command|search)/i.test(type)) continue;
    const fingerprint = sha(`${row.timestamp}\n${type}\n${rawOutput(row.payload)}`);
    observations.push({
      event_id: `native-${fingerprint.slice(0, 20)}`, timestamp: row.timestamp,
      agent: options.agent || "primary", cycle: options.cycle || "unknown", pass: options.pass || "native-ingest",
      event_type: "capture_observation",
      native_ref: { rollout_path: path.resolve(file), line: row.__line, call_id: row.payload?.call_id || `unknown-line-${row.__line}`, tool_name: type, input_sha256: fingerprint },
      research_capable: true, classification: "unknown_native_tool_shape", resolution: "unreconciled",
    });
  }
  const eligibleRows = rows.filter(inWindow);
  const lineEnd = eligibleRows.at(-1)?.__line || rows.length;
  const rawLines = fs.readFileSync(file, "utf8").split(/\n/);
  const prefix = rawLines.slice(0, lineEnd).join("\n") + "\n";
  const fileHash = sha(prefix);
  const boundaryId = `native-boundary-${fileHash.slice(0, 20)}`;
  for (const observation of observations) observation.boundary_id = boundaryId;
  return [{
    event_id: boundaryId,
    timestamp: eligibleRows.at(-1)?.timestamp || new Date().toISOString(),
    agent: options.agent || "primary",
    cycle: options.cycle || "unknown",
    pass: options.pass || "native-ingest",
    event_type: "capture_boundary",
    native_source: path.resolve(file),
    native_source_sha256: fileHash,
    line_start: options.after ? Math.min(...observations.map((event) => event.native_ref.line), lineEnd) : 1,
    line_end: lineEnd,
    after: options.after || null,
    before: options.before || null,
    capture_mode: options.after || options.before ? "declared_window" : "full_rollout",
    observed_tool_call_count: observations.length,
    adapter: "codex-rollout-v1",
  }, ...observations, ...dedupeDerived(derived)];
}

function dedupeDerived(events) {
  const seen = new Set();
  return events.filter((event) => !seen.has(event.event_id) && seen.add(event.event_id));
}

function deriveResearchEvents({ row, call, output, nativeEventId, options }) {
  const input = String(call.rawInput || "");
  const text = outputText(output);
  const common = { timestamp: row.timestamp, agent: options.agent || "primary", cycle: options.cycle || "unknown", pass: options.pass || "native-ingest", derived_from_native_event: nativeEventId, adapter: "codex-rollout-v1" };
  const events = [];
  if (/tools\.mcp__openaiDeveloperDocs__search_openai_docs\s*\(/.test(input) || call.toolName === "mcp__openaiDeveloperDocs__search_openai_docs") {
    const query = stringProp(input, "query");
    const limit = numberProp(input, "limit");
    const parsed = parseSearchOutput(text);
    const queryId = `auto-Q-${sha(`${nativeEventId}:${query}`).slice(0, 14)}`;
    events.push({ ...common, event_id: derivedId("search", nativeEventId), event_type: "search", query_id: queryId, query, query_family: null, channel: "official documentation search", tool_provider: "OpenAI Developer Docs MCP", filters: "official OpenAI documentation", purpose: null, requested_limit: limit, observed_returned_count: parsed.observedCount, total_hits_reported: parsed.totalHits, cursor_pagination: parsed.page === null ? "unknown" : `page ${parsed.page}`, truncation: parsed.truncation, pages_examined: parsed.status === "complete" ? 1 : null, coverage_dimension: null, semantic_status: "pending", result_capture_status: parsed.status, capture_mode: "automatic" });
    parsed.hits.forEach((hit, rank) => {
      if (!hit.url) return;
      const exactUrl = hit.url;
      const url = canonicalUrl(exactUrl);
      events.push({ ...common, event_id: derivedId("result", nativeEventId, exactUrl), event_type: "result_returned", query_id: queryId, result_rank: rank + 1, source_id: sourceId(exactUrl), canonical_url: url, exact_result_url: exactUrl, host: new URL(url).host, organization: "OpenAI", source_type: "official documentation", primary_secondary: "primary", evidence_lineage: "OpenAI documentation", publication_year: null, result_set_partial: parsed.status !== "complete", capture_mode: "automatic" });
    });
  }
  if (/tools\.mcp__openaiDeveloperDocs__fetch_openai_doc\s*\(/.test(input) || call.toolName === "mcp__openaiDeveloperDocs__fetch_openai_doc") {
    const url = stringProp(input, "url");
    if (url) {
      const canonical = canonicalUrl(url);
      const id = sourceId(url);
      events.push({ ...common, event_id: derivedId("open", nativeEventId), event_type: "source_opened", source_id: id, canonical_url: canonical, host: new URL(canonical).host, organization: "OpenAI", source_type: "official documentation", direct_discovery_reason: "Fetched through official documentation tool", primary_secondary: "primary", evidence_lineage: "OpenAI documentation", publication_year: null, version_freshness_state: "live_unpinned", capture_mode: "automatic" });
      events.push({ ...common, event_id: derivedId("inspect", nativeEventId), event_type: "source_inspected", source_id: id, inspection_extent: "partial_substantive", surfaces: ["documentation"], locations_inspected: ["complete fetched page delivered to model context"], inspection_basis: "automatic conservative default; semantic batch may revise", capture_mode: "automatic" });
    }
  }
  if (/tools\.web__run\s*\(/.test(input) || call.toolName === "web__run") {
    const queries = stringProps(input, "q");
    if (queries.length) {
      const parsed = genericWebSearchOutput(text);
      const query = queries.join(" || ");
      const queryId = `auto-Q-${sha(`${nativeEventId}:${query}`).slice(0, 14)}`;
      events.push({
        ...common,
        event_id: derivedId("search", nativeEventId),
        event_type: "search",
        query_id: queryId,
        query,
        query_family: null,
        channel: "generic web search",
        tool_provider: "web.run",
        filters: "as submitted to generic web search",
        purpose: null,
        requested_limit: null,
        observed_returned_count: parsed.status === "complete" ? parsed.urls.length : null,
        total_hits_reported: null,
        cursor_pagination: "single captured response",
        truncation: parsed.truncation,
        pages_examined: parsed.status === "complete" ? 1 : null,
        coverage_dimension: null,
        semantic_status: "pending",
        result_capture_status: parsed.status,
        capture_mode: "automatic",
      });
      parsed.urls.forEach((exactUrl, rank) => {
        const url = canonicalUrl(exactUrl);
        const host = new URL(url).host;
        events.push({
          ...common,
          event_id: derivedId("result", nativeEventId, exactUrl),
          event_type: "result_returned",
          query_id: queryId,
          result_rank: rank + 1,
          source_id: sourceId(exactUrl),
          canonical_url: url,
          exact_result_url: exactUrl,
          host,
          organization: host,
          source_type: webSourceType(url),
          primary_secondary: "unknown until inspected",
          evidence_lineage: "generic web search result",
          publication_year: null,
          result_set_partial: false,
          capture_mode: "automatic",
        });
      });
    }
    for (const exactUrl of [...new Set(stringProps(input, "ref_id").filter((value) => /^https?:\/\//.test(value)))]) {
      const url = canonicalUrl(exactUrl);
      const id = sourceId(exactUrl);
      const host = new URL(url).host;
      events.push({ ...common, event_id: derivedId("open", nativeEventId, exactUrl), event_type: "source_opened", source_id: id, canonical_url: url, host, organization: host, source_type: webSourceType(url), direct_discovery_reason: "Opened through generic web tool", primary_secondary: "unknown until inspected", evidence_lineage: "generic web open", publication_year: null, version_freshness_state: "live_unpinned", capture_mode: "automatic" });
      events.push({ ...common, event_id: derivedId("inspect", nativeEventId, exactUrl), event_type: "source_inspected", source_id: id, inspection_extent: "partial_substantive", surfaces: ["other"], locations_inspected: ["captured web response"], inspection_basis: "automatic conservative default; semantic batch may revise", capture_mode: "automatic" });
    }
  }
  if (/tools\.exec_command/.test(input)) {
    const projectRoot = path.resolve(options.projectRoot || options["project-root"] || process.cwd());
    const envelope = execEnvelope(input, projectRoot);
    const cmd = envelope.commandText;
    const workdir = envelope.repositoryPath;
    if (cmd && /(git\s|rg\s|sed\s|find\s)/.test(cmd)) {
      const surfaces = [];
      if (/git\s+(?:rev-parse|log|show|status)/.test(cmd)) surfaces.push("history");
      if (/rg\s|sed\s|nl\s/.test(cmd)) surfaces.push("code");
      if (/(?:test|spec)/i.test(cmd)) surfaces.push("tests");
      if (/(?:README|AGENTS\.md|docs\/|pyproject\.toml)/i.test(cmd)) surfaces.push("documentation");
      const commit = /git(?:\s+-C\s+\S+)?\s+rev-parse\s+HEAD/.test(cmd) ? text.match(/\b[0-9a-f]{40}\b/)?.[0] || null : null;
      events.push({ ...common, event_id: derivedId("repository", nativeEventId), event_type: "repository_inspected", repository_path: workdir, command_sha256: sha(cmd), surfaces: [...new Set(surfaces)], commit, capture_mode: "automatic" });
    }
  }
  return events;
}

function latestDisposition(events) {
  const map = new Map();
  for (const event of events) if (event.event_type === "disposition") map.set(event.source_id, event);
  return map;
}

function unique(events, key) {
  return new Set(events.map((event) => event[key]).filter(Boolean));
}

function warning(code, message, details = {}) {
  return { code, message, ...details };
}

function distribution(rows, key) {
  const counts = {};
  for (const row of rows) {
    const value = row[key] ?? "unspecified";
    counts[value] = (counts[value] || 0) + 1;
  }
  return counts;
}

function verifyNativeMaterial(file, boundary, observations, kind, expectedHash) {
  const failures = [];
  const raw = fs.readFileSync(file, "utf8");
  const rawLines = raw.split(/\n/);
  const prefix = rawLines.slice(0, boundary.line_end).join("\n") + "\n";
  if (sha(prefix) !== expectedHash) failures.push(warning(`${kind}_prefix_hash_mismatch`, `${kind} prefix hash does not match boundary ${boundary.event_id}`, { boundary_id: boundary.event_id }));
  if (kind === "archive" && raw !== prefix) failures.push(warning("capture_archive_not_exact_prefix", `Archive contains content outside the required prefix for ${boundary.event_id}`, { boundary_id: boundary.event_id }));
  for (const observation of observations.filter((event) => event.boundary_id === boundary.event_id)) {
    const line = rawLines[observation.native_ref.line - 1];
    if (!line) { failures.push(warning("native_observation_line_missing", `Native line is missing for ${observation.event_id}`, { native_event_id: observation.event_id })); continue; }
    let row;
    try { row = JSON.parse(line); } catch { failures.push(warning("native_observation_line_invalid", `Native line is invalid JSON for ${observation.event_id}`, { native_event_id: observation.event_id })); continue; }
    const call = nativeCall(row);
    let expected;
    if (call) expected = sha(`${row.timestamp}\n${call.callId}\n${call.toolName}\n${call.rawInput}`);
    else if (row.type === "event_msg" && row.payload?.type === "web_search_end") expected = sha(`${row.timestamp}\n${row.payload.call_id}\nnative_web_search\n${sha(String(row.payload.query ?? ""))}`);
    else expected = sha(`${row.timestamp}\n${row.payload?.type || ""}\n${rawOutput(row.payload)}`);
    if (expected !== observation.native_ref.input_sha256) failures.push(warning("native_observation_hash_mismatch", `Native observation fingerprint does not match ${observation.event_id}`, { native_event_id: observation.event_id }));
    if (observation.native_ref.output_line) {
      const outputLine = rawLines[observation.native_ref.output_line - 1];
      try {
        const outputRow = JSON.parse(outputLine);
        if (sha(rawOutput(outputRow.payload?.output ?? "")) !== observation.native_ref.output_sha256) failures.push(warning("native_output_hash_mismatch", `Native output fingerprint does not match ${observation.event_id}`, { native_event_id: observation.event_id }));
      } catch { failures.push(warning("native_output_line_invalid", `Native output line is invalid for ${observation.event_id}`, { native_event_id: observation.event_id })); }
    }
  }
  return failures;
}

function verifyNativeBoundary(boundary, observations, archive, requireArchive) {
  const failures = [];
  const nativeExists = fs.existsSync(boundary.native_source);
  const archiveExists = archive && fs.existsSync(archive.archive_path);
  if (nativeExists) failures.push(...verifyNativeMaterial(boundary.native_source, boundary, observations, "native", boundary.native_source_sha256));
  if (archive) {
    if (archive.boundary_id !== boundary.event_id || archive.line_start !== 1 || archive.line_end !== boundary.line_end || archive.source_runtime_path !== boundary.native_source || archive.archive_sha256 !== boundary.native_source_sha256) {
      failures.push(warning("capture_archive_metadata_mismatch", `Archive metadata does not match boundary ${boundary.event_id}`, { boundary_id: boundary.event_id }));
    }
    if (!archiveExists) {
      failures.push(warning("capture_archive_missing", `Declared capture archive does not exist: ${archive.archive_path}`, { boundary_id: boundary.event_id }));
    } else {
      const stat = fs.statSync(archive.archive_path);
      if ((stat.mode & 0o077) !== 0) failures.push(warning("capture_archive_permissions", `Capture archive is not restricted to its owner: ${archive.archive_path}`, { boundary_id: boundary.event_id }));
      if (stat.size !== archive.archive_bytes) failures.push(warning("capture_archive_size_mismatch", `Capture archive byte count does not match metadata for ${boundary.event_id}`, { boundary_id: boundary.event_id }));
      failures.push(...verifyNativeMaterial(archive.archive_path, boundary, observations, "archive", archive.archive_sha256));
    }
  } else if (requireArchive) {
    failures.push(warning("missing_capture_archive", `Boundary ${boundary.event_id} requires a durable transcript archive`, { boundary_id: boundary.event_id }));
  }
  if (!nativeExists && !archiveExists) failures.push(warning("native_source_missing", `Neither runtime transcript nor durable archive is available for ${boundary.event_id}`, { boundary_id: boundary.event_id }));
  return failures;
}

export function buildAudit(events, options = {}) {
  const completeness = options.completeness || "unknown";
  const profile = options.profile || "diagnostic";
  if (!AUDIT_PROFILES.has(profile)) throw new Error(`unknown audit profile ${profile}`);
  const promotionProfile = profile === "provisional-promotion";
  const requireReviewScope = promotionProfile || [true, "true"].includes(options.requireReviewScope);
  const requireArchive = (promotionProfile && ["complete", "complete_with_declared_manual_sources"].includes(completeness)) || [true, "true"].includes(options.requireArchive);
  const validation = validateEvents(events);
  const errors = validation.errors.map((message) => warning("schema_or_transition", message));
  const warnings = validation.warnings.map((message) => warning("transition_warning", message));
  const searches = events.filter((event) => event.event_type === "search");
  const searchUpdates = events.filter((event) => event.event_type === "search_update");
  const effectiveSearches = searches.map((event) => ({
    ...event,
    result_capture_status: event.result_capture_status || (Number.isInteger(event.observed_returned_count) ? "complete" : "unknown"),
  }));
  const searchOverrides = [];
  for (const update of searchUpdates) {
    const index = effectiveSearches.findIndex((event) => event.event_id === update.search_event_id);
    if (index < 0) {
      errors.push(warning("unknown_search_update", `Search update references unknown event ${update.search_event_id}`, { event_id: update.event_id }));
      searchOverrides.push({ event_id: update.event_id, search_event_id: update.search_event_id, applied: false, reason: "unknown search event" });
      continue;
    }
    const current = effectiveSearches[index];
    const currentStatus = current.result_capture_status || "unknown";
    const nextStatus = update.result_capture_status || currentStatus;
    const currentStrength = SEARCH_CAPTURE_STRENGTH.get(currentStatus) ?? 1;
    const nextStrength = SEARCH_CAPTURE_STRENGTH.get(nextStatus) ?? 1;
    if (nextStrength > currentStrength) {
      errors.push(warning("search_update_strengthening_unverified", `Search update cannot strengthen result capture from ${currentStatus} to ${nextStatus}: ${update.event_id}`, { event_id: update.event_id, search_event_id: update.search_event_id }));
      searchOverrides.push({ event_id: update.event_id, search_event_id: update.search_event_id, applied: false, from_status: currentStatus, to_status: nextStatus, reason: "result-capture strengthening is not an accepted update operation" });
      continue;
    }
    const resultEvidenceFields = ["observed_returned_count", "total_hits_reported", "truncation"];
    const changesCompleteEvidence = currentStatus === "complete" && nextStatus === "complete" && resultEvidenceFields.some((field) => field in update && update[field] !== current[field]);
    if (changesCompleteEvidence) {
      errors.push(warning("search_update_complete_evidence_change", `Search update cannot alter complete result evidence without weakening capture status: ${update.event_id}`, { event_id: update.event_id, search_event_id: update.search_event_id }));
      searchOverrides.push({ event_id: update.event_id, search_event_id: update.search_event_id, applied: false, from_status: currentStatus, to_status: nextStatus, reason: "complete result evidence is immutable through search_update" });
      continue;
    }
    const { event_id, event_type, timestamp, agent, cycle, pass, capture_mode, semantic_batch_id, resolution_batch_id, search_event_id, reason, ...fields } = update;
    effectiveSearches[index] = { ...effectiveSearches[index], ...fields, effective_update_event_id: event_id, update_reason: reason };
    searchOverrides.push({ event_id, search_event_id, applied: true, from_status: currentStatus, to_status: nextStatus, reason });
  }
  for (const search of effectiveSearches) {
    if (["incomplete_truncated", "incomplete_unparseable"].includes(search.result_capture_status)) {
      errors.push(warning("incomplete_search_result_capture", `Search result capture is ${search.result_capture_status}: ${search.query_id}`, { event_id: search.event_id, query_id: search.query_id }));
    }
  }
  const results = events.filter((event) => event.event_type === "result_returned");
  const opened = events.filter((event) => event.event_type === "source_opened");
  const inspected = events.filter((event) => event.event_type === "source_inspected");
  const dispositions = latestDisposition(events);
  const claims = events.filter((event) => event.event_type === "claim_reference");
  const declaredClaims = events.filter((event) => event.event_type === "claim_declared");
  const registeredArtifacts = events.filter((event) => event.event_type === "artifact_registered");
  const reviewScopes = events.filter((event) => event.event_type === "review_scope");
  const attestations = events.filter((event) => event.event_type === "prose_ledger_attestation");
  const verifications = events.filter((event) => event.event_type === "verification" && event.outcome === "supports_scope");
  const observations = events.filter((event) => event.event_type === "capture_observation");
  const boundaries = events.filter((event) => event.event_type === "capture_boundary");
  const archives = events.filter((event) => event.event_type === "capture_archive");
  const observationResolutions = events.filter((event) => event.event_type === "observation_resolution");
  const waivers = events.filter((event) => event.event_type === "provenance_waiver");
  const repositoryObservations = events.filter((event) => event.event_type === "repository_inspected");
  const eventIds = new Set(events.map((event) => event.event_id));
  const captureMetricEvents = events.filter((event) => event.event_type === "capture_metrics");
  const captureMetrics = captureMetricEvents.length ? {
    interaction_count: captureMetricEvents.reduce((sum, event) => sum + event.interaction_count, 0),
    automatic_event_count: captureMetricEvents.reduce((sum, event) => sum + event.automatic_event_count, 0),
    manual_capture_actions: captureMetricEvents.reduce((sum, event) => sum + event.manual_capture_actions, 0),
    semantic_batch_actions: captureMetricEvents.reduce((sum, event) => sum + event.semantic_batch_actions, 0),
    semantic_decision_count: captureMetricEvents.reduce((sum, event) => sum + event.semantic_decision_count, 0),
  } : null;
  const plannedChannels = new Set(events.filter((event) => event.event_type === "coverage_plan").flatMap((event) => event.planned_channels || []));
  const actualChannels = unique(effectiveSearches, "channel");
  if (repositoryObservations.length) actualChannels.add("local repository inspection");

  const effectiveObservations = new Map(observations.map((event) => [event.event_id, { ...event, effective_resolution_event_id: event.event_id, human_resolved: false }]));
  for (const resolution of observationResolutions) {
    const current = effectiveObservations.get(resolution.observation_id);
    if (!current) {
      errors.push(warning("unknown_observation_resolution", `Resolution references unknown observation ${resolution.observation_id}`, { event_id: resolution.event_id }));
      continue;
    }
    if (resolution.previous_resolution_event_id !== current.effective_resolution_event_id) {
      errors.push(warning("contradictory_observation_resolution", `Resolution ${resolution.event_id} does not extend the current state of ${resolution.observation_id}`, { event_id: resolution.event_id, native_event_id: resolution.observation_id }));
      continue;
    }
    if (resolution.resolution === "not_research" && current.classification !== "generic_shell_requires_review") {
      errors.push(warning("invalid_not_research_resolution", `Only generic shell observations may be classified not_research: ${resolution.observation_id}`, { event_id: resolution.event_id }));
      continue;
    }
    effectiveObservations.set(resolution.observation_id, {
      ...current,
      resolution: resolution.resolution,
      resolution_reason: resolution.reason,
      linked_event_ids: resolution.linked_event_ids,
      effective_resolution_event_id: resolution.event_id,
      human_resolved: true,
      resolution_batch_id: resolution.resolution_batch_id,
    });
  }

  for (const channel of plannedChannels) {
    if (!actualChannels.has(channel)) warnings.push(warning("planned_channel_missing", `Planned channel had no search: ${channel}`, { channel }));
  }

  const hostCounts = {};
  const uniqueOpenedSources = new Map(opened.map((event) => [event.source_id, event]));
  for (const event of uniqueOpenedSources.values()) if (event.host) hostCounts[event.host] = (hostCounts[event.host] || 0) + 1;
  const totalHosts = Object.values(hostCounts).reduce((sum, count) => sum + count, 0);
  for (const [host, count] of Object.entries(hostCounts)) {
    if (totalHosts >= 3 && count / totalHosts >= (options.concentrationThreshold || 0.6)) {
      warnings.push(warning("host_concentration", `${count}/${totalHosts} opened sources came from ${host}`, { host, count, total: totalHosts }));
    }
  }

  const sourceById = new Map();
  for (const event of events) if (event.source_id) sourceById.set(event.source_id, { ...(sourceById.get(event.source_id) || {}), ...event });
  const repoDepth = [];
  for (const [sourceId, source] of sourceById) {
    if (source.host !== "github.com" && source.source_type !== "repository") continue;
    const sourceInspections = inspected.filter((event) => event.source_id === sourceId);
    const surfaces = new Set(sourceInspections.flatMap((event) => event.surfaces || []));
    const pinned = source.version_freshness_state === "pinned" || Boolean(source.commit || source.tag);
    const entry = { source_id: sourceId, surfaces: [...surfaces], pinned };
    repoDepth.push(entry);
    if (surfaces.size && ![...surfaces].some((surface) => ["code", "tests", "history"].includes(surface))) {
      warnings.push(warning("repository_shallow", `${sourceId} was inspected without code, tests, or history`, entry));
    }
  }

  for (const [sourceId, disposition] of dispositions) {
    if (disposition.disposition !== "referenced") continue;
    if (!disposition.record_path || !fs.existsSync(path.resolve(options.root || process.cwd(), disposition.record_path))) {
      errors.push(warning("missing_source_record", `Referenced source lacks an existing full record: ${sourceId}`, { source_id: sourceId }));
    }
  }

  for (const sourceId of unique(opened, "source_id")) {
    if (!dispositions.has(sourceId)) errors.push(warning("missing_disposition", `Opened source lacks a final disposition: ${sourceId}`, { source_id: sourceId }));
  }

  for (const claim of claims) {
    const source = sourceById.get(claim.source_id) || {};
    const declaration = declaredClaims.find((event) => event.claim_id === claim.claim_id);
    if (!declaration) errors.push(warning("missing_claim_declaration", `Claim reference has no canonical declaration: ${claim.claim_id}`, { claim_id: claim.claim_id }));
    else if (declaration.artifact_id !== claim.artifact_id || declaration.epistemic_kind !== claim.epistemic_kind) errors.push(warning("claim_declaration_mismatch", `Claim reference disagrees with canonical declaration: ${claim.claim_id}`, { claim_id: claim.claim_id }));
    if (dispositions.get(claim.source_id)?.disposition !== "referenced") {
      errors.push(warning("claim_uses_unreferenced_source", `Claim uses a source whose latest disposition is not referenced: ${claim.source_id}`, { claim_id: claim.claim_id, source_id: claim.source_id }));
    }
    const verified = verifications.some((event) => event.claim_id === claim.claim_id && event.source_id === claim.source_id && event.location === claim.location);
    if (!verified) errors.push(warning("missing_verification", `Claim mapping lacks primary verification: ${claim.claim_id} -> ${claim.source_id} @ ${claim.location}`, { claim_id: claim.claim_id, source_id: claim.source_id }));
    if ((source.source_type === "repository" || source.host === "github.com") && !(source.commit || source.tag || source.version_freshness_state === "pinned")) {
      errors.push(warning("unpinned_implementation_claim", `Implementation claim uses an unpinned source: ${claim.source_id}`, { claim_id: claim.claim_id, source_id: claim.source_id }));
    }
    const origin = inspected.filter((event) => event.source_id === claim.source_id).at(-1);
    const verification = verifications.find((event) => event.claim_id === claim.claim_id && event.source_id === claim.source_id && event.location === claim.location);
    if (origin?.agent_role === "subagent" && verification?.verifier === origin.agent) errors.push(warning("subagent_self_verification", `Subagent ${origin.agent} verified its own evidence for ${claim.claim_id}`, { claim_id: claim.claim_id, source_id: claim.source_id }));
  }

  for (const artifactId of unique(declaredClaims, "artifact_id")) {
    const attestation = attestations.find((event) => event.artifact_id === artifactId);
    if (!attestation) errors.push(warning("missing_prose_ledger_attestation", `Artifact lacks prose-to-ledger attestation: ${artifactId}`, { artifact_id: artifactId }));
    else if (attestation.ledger_digest !== claimLedgerDigest(events, artifactId)) errors.push(warning("ledger_digest_mismatch", `Attestation digest does not match canonical claims: ${artifactId}`, { artifact_id: artifactId }));
  }
  if (requireReviewScope && reviewScopes.length === 0) errors.push(warning("missing_review_scope", "Promotion audit requires a manifest of material artifacts in the review package"));
  for (const scope of reviewScopes) {
    for (const artifactId of scope.artifact_ids || []) {
      if (!registeredArtifacts.some((event) => event.artifact_id === artifactId)) errors.push(warning("unregistered_scoped_artifact", `Review scope lists an unregistered artifact: ${artifactId}`, { artifact_id: artifactId }));
      if (!declaredClaims.some((event) => event.artifact_id === artifactId)) errors.push(warning("scoped_artifact_without_claims", `Review-scoped artifact has no declared material claims: ${artifactId}`, { artifact_id: artifactId }));
    }
  }

  for (const observation of effectiveObservations.values()) {
    if (observation.research_capable && observation.resolution === "unreconciled") {
      errors.push(warning("unreconciled_native_interaction", `Native research-capable interaction is unreconciled: ${observation.event_id}`, { native_event_id: observation.event_id }));
    }
    if (observation.resolution === "not_research" && !observation.resolution_reason) {
      errors.push(warning("unreasoned_native_exclusion", `Native interaction classified not_research without a reason: ${observation.event_id}`, { native_event_id: observation.event_id }));
    }
    if (observation.resolution === "linked") {
      if (!Array.isArray(observation.linked_event_ids) || observation.linked_event_ids.length === 0) {
        errors.push(warning("missing_native_links", `Linked native interaction has no linked_event_ids: ${observation.event_id}`, { native_event_id: observation.event_id }));
      } else {
        for (const id of observation.linked_event_ids) {
          if (!eventIds.has(id)) {
            errors.push(warning("broken_native_link", `Native interaction links to missing event ${id}`, { native_event_id: observation.event_id }));
            continue;
          }
          const linked = events.find((event) => event.event_id === id);
          if (linked?.derived_from_native_event !== observation.event_id && !(linked?.native_refs || []).includes(observation.event_id)) {
            errors.push(warning("unproven_native_link", `Linked event does not reciprocate observation ${observation.event_id}: ${id}`, { native_event_id: observation.event_id, event_id: id }));
          }
        }
      }
    }
  }

  if (["complete", "complete_with_declared_manual_sources"].includes(completeness)) {
    if (boundaries.length === 0) errors.push(warning("missing_capture_boundary", `${completeness} provenance has no native capture boundary`));
    for (const boundary of boundaries) {
      const count = observations.filter((event) => event.boundary_id === boundary.event_id).length;
      if (count !== boundary.observed_tool_call_count) {
        errors.push(warning("capture_count_mismatch", `Boundary ${boundary.event_id} declares ${boundary.observed_tool_call_count} tool calls but ${count} observations are present`, { boundary_id: boundary.event_id }));
      }
      const archive = archives.filter((event) => event.boundary_id === boundary.event_id).at(-1);
      errors.push(...verifyNativeBoundary(boundary, observations, archive, requireArchive));
    }
  }

  if (completeness === "complete_with_declared_manual_sources") {
    const manualSets = events.filter((event) => event.event_type === "manual_source_set");
    if (manualSets.length === 0) errors.push(warning("missing_manual_source_set", "Declared manual-source completeness requires an independently enumerable manual_source_set event"));
    for (const set of manualSets) {
      if (!set.enumeration_basis || !Array.isArray(set.members)) errors.push(warning("invalid_manual_source_set", `Manual source set ${set.event_id} requires enumeration_basis and members`));
      for (const sourceId of set.members || []) {
        if (!sourceById.has(sourceId) || !dispositions.has(sourceId)) errors.push(warning("unlogged_manual_source", `Declared manual source lacks source events and disposition: ${sourceId}`, { source_id: sourceId }));
      }
    }
  }

  if (["partial", "reconstructed", "unknown"].includes(completeness)) {
    const waiver = waivers.find((event) => event.reviewer && event.reason && event.scope);
    if (!waiver) errors.push(warning("incomplete_provenance_promotion", `${completeness} provenance requires a documented maintainer waiver before promotion`));
    else if (promotionProfile && !waiver.persistent_limitation) errors.push(warning("waiver_missing_persistent_limitation", "Provisional promotion of incomplete provenance requires a persistent limitation statement", { event_id: waiver.event_id }));
  }

  if (options.acceptance === "near-zero") {
    if (!captureMetrics) errors.push(warning("missing_capture_metrics", "Near-zero acceptance requires capture_metrics"));
    else {
      const interactionTypes = new Set(["search", "result_returned", "source_opened", "repository_inspected"]);
      const manualEvents = events.filter((event) => interactionTypes.has(event.event_type) && (event.capture_mode !== "automatic" || !event.derived_from_native_event));
      const semanticBatches = new Set(events.map((event) => event.semantic_batch_id).filter(Boolean));
      if (captureMetrics.manual_capture_actions !== manualEvents.length) errors.push(warning("capture_metrics_mismatch", `Metrics report ${captureMetrics.manual_capture_actions} manual capture actions but audit found ${manualEvents.length}`));
      if (captureMetrics.semantic_batch_actions !== semanticBatches.size) errors.push(warning("semantic_metrics_mismatch", `Metrics report ${captureMetrics.semantic_batch_actions} semantic batches but audit found ${semanticBatches.size}`));
      if (captureMetrics.manual_capture_actions !== 0) errors.push(warning("manual_capture_overhead", `Manual interaction-capture actions were ${captureMetrics.manual_capture_actions}; expected 0`));
      if (captureMetrics.semantic_batch_actions > 1) errors.push(warning("semantic_batch_overhead", `Semantic batch actions were ${captureMetrics.semantic_batch_actions}; expected at most 1`));
      for (const event of events.filter((item) => interactionTypes.has(item.event_type) && item.capture_mode === "automatic")) {
        const observation = observations.find((item) => item.event_id === event.derived_from_native_event);
        if (!observation || !observation.linked_event_ids?.includes(event.event_id)) errors.push(warning("unproven_automatic_event", `Automatic event is not bidirectionally linked to a native observation: ${event.event_id}`, { event_id: event.event_id }));
      }
    }
  }
  if (options.requireRepository && repositoryObservations.length === 0) errors.push(warning("missing_repository_inspection", "Bounded acceptance required an automatically captured repository inspection"));

  const resolutions = events.filter((event) => event.event_type === "warning_resolution");
  const resolvedWarnings = warnings.map((item) => {
    const subject = item.source_id || item.host || item.channel || null;
    const resolution = resolutions.find((event) => event.code === item.code && (subject ? event.subject === subject : true));
    return resolution ? { ...item, resolved: true, resolution: resolution.reason } : { ...item, resolved: false };
  });
  const unresolvedWarnings = resolvedWarnings.filter((item) => !item.resolved);

  const counts = {
    searches: searches.length,
    search_updates: searchOverrides.length,
    applied_search_updates: searchOverrides.filter((item) => item.applied).length,
    rejected_search_updates: searchOverrides.filter((item) => !item.applied).length,
    searches_with_incomplete_result_capture: effectiveSearches.filter((event) => event.result_capture_status !== "complete").length,
    returned: unique(results, "source_id").size,
    returned_source_identities_recovered: unique(results, "source_id").size,
    opened: unique(opened, "source_id").size,
    read_only: [...dispositions.values()].filter((event) => event.disposition === "read_only").length,
    referenced: [...dispositions.values()].filter((event) => event.disposition === "referenced").length,
    excluded: [...dispositions.values()].filter((event) => event.disposition === "excluded").length,
    declared_claims: unique(declaredClaims, "claim_id").size,
    claims: claims.length,
    claim_evidence_mappings: claims.length,
    verifications: verifications.length,
    unverified_claim_evidence_mappings: claims.filter((claim) => !verifications.some((event) => event.claim_id === claim.claim_id && event.source_id === claim.source_id && event.location === claim.location)).length,
    native_boundaries: boundaries.length,
    native_observations: observations.length,
    automatically_resolved_observations: [...effectiveObservations.values()].filter((event) => !event.human_resolved && event.resolution !== "unreconciled").length,
    human_resolved_observations: [...effectiveObservations.values()].filter((event) => event.human_resolved).length,
    unresolved_observations: [...effectiveObservations.values()].filter((event) => event.resolution === "unreconciled").length,
    linked_observations: [...effectiveObservations.values()].filter((event) => event.resolution === "linked").length,
    not_research_observations: [...effectiveObservations.values()].filter((event) => event.resolution === "not_research").length,
    observation_resolution_batches: new Set(observationResolutions.map((event) => event.resolution_batch_id)).size,
    manual_capture_actions: captureMetrics?.manual_capture_actions ?? "not measured",
    semantic_batch_actions: captureMetrics?.semantic_batch_actions ?? "not measured",
  };
  const searchTable = effectiveSearches.map((event) => ({
    event_id: event.event_id,
    query_id: event.query_id,
    query: event.query,
    query_family: event.query_family,
    channel: event.channel,
    tool_provider: event.tool_provider,
    filters: event.filters,
    requested_limit: event.requested_limit,
    observed_returned_count: event.observed_returned_count,
    total_hits_reported: event.total_hits_reported,
    result_capture_status: event.result_capture_status,
    truncation: event.truncation,
    semantic_status: event.semantic_status,
    purpose: event.purpose,
    coverage_dimension: event.coverage_dimension,
  }));
  const sourceTable = [...sourceById].map(([sourceId, source]) => {
    const sourceInspections = inspected.filter((event) => event.source_id === sourceId);
    const sourceDisposition = dispositions.get(sourceId);
    return {
      source_id: sourceId,
      canonical_url: source.canonical_url || source.canonical_identity || "",
      host: source.host || "",
      organization: source.organization || "",
      source_type: source.source_type || "",
      publication_year: source.publication_year ?? "unspecified",
      primary_secondary: source.primary_secondary || "unspecified",
      evidence_lineage: source.evidence_lineage || "unspecified",
      query_ids: [...new Set(results.filter((event) => event.source_id === sourceId).map((event) => event.query_id))],
      returned: results.some((event) => event.source_id === sourceId),
      opened: opened.some((event) => event.source_id === sourceId),
      inspection_extent: sourceInspections.at(-1)?.inspection_extent || "not_inspected",
      surfaces: [...new Set(sourceInspections.flatMap((event) => event.surfaces || []))],
      disposition: sourceDisposition?.disposition || "none",
      disposition_reason: sourceDisposition?.reason || "",
      version_freshness_state: source.version_freshness_state || "unspecified",
      record_path: sourceDisposition?.record_path || "",
    };
  }).sort((a, b) => a.source_id.localeCompare(b.source_id));
  const github = repoDepth.filter((entry) => sourceById.get(entry.source_id)?.host === "github.com");
  const repositorySummary = {
    returned: sourceTable.filter((source) => source.host === "github.com" && source.returned).length,
    opened: sourceTable.filter((source) => source.host === "github.com" && source.opened).length,
    readme_only: github.filter((entry) => entry.surfaces.includes("README") && !entry.surfaces.some((surface) => ["code", "tests", "history"].includes(surface))).length,
    code_inspected: github.filter((entry) => entry.surfaces.includes("code")).length,
    test_inspected: github.filter((entry) => entry.surfaces.includes("tests")).length,
    history_inspected: github.filter((entry) => entry.surfaces.includes("history")).length,
    pinned: github.filter((entry) => entry.pinned).length,
    referenced: sourceTable.filter((source) => source.host === "github.com" && source.disposition === "referenced").length,
  };
  const localRepositorySummary = {
    observations: repositoryObservations.length,
    code_inspected: repositoryObservations.filter((event) => event.surfaces.includes("code")).length,
    test_inspected: repositoryObservations.filter((event) => event.surfaces.includes("tests")).length,
    history_inspected: repositoryObservations.filter((event) => event.surfaces.includes("history")).length,
    commit_captured: repositoryObservations.filter((event) => Boolean(event.commit)).length,
  };
  const claimEvidence = declaredClaims.map((declaration) => {
    const mappings = claims.filter((claim) => claim.claim_id === declaration.claim_id);
    const verifiedMappings = mappings.filter((claim) => verifications.some((event) => event.claim_id === claim.claim_id && event.source_id === claim.source_id && event.location === claim.location));
    return {
      claim_id: declaration.claim_id,
      epistemic_kind: declaration.epistemic_kind,
      claim_text: declaration.claim_text,
      artifact_location: declaration.artifact_location || "unspecified",
      confidence: declaration.confidence || "unspecified",
      mapping_count: mappings.length,
      verified_mapping_count: verifiedMappings.length,
      supporting_sources: [...new Set(mappings.filter((claim) => (claim.relationship || "supports") === "supports").map((claim) => claim.source_id))],
      opposing_sources: [...new Set(mappings.filter((claim) => claim.relationship === "opposes").map((claim) => claim.source_id))],
      contextual_sources: [...new Set(mappings.filter((claim) => claim.relationship === "contextualizes").map((claim) => claim.source_id))],
      missing_verification_count: mappings.length - verifiedMappings.length,
    };
  }).sort((a, b) => a.claim_id.localeCompare(b.claim_id));

  return {
    generated_at: new Date().toISOString(),
    cycle: options.cycle || events.find((event) => event.cycle)?.cycle || "unknown",
    completeness,
    profile,
    gate_passed: errors.length === 0 && unresolvedWarnings.length === 0,
    counts,
    planned_channels: [...plannedChannels],
    actual_channels: [...actualChannels],
    host_distribution: hostCounts,
    repository_depth: repoDepth,
    repository_observations: repositoryObservations,
    repository_summary: repositorySummary,
    local_repository_summary: localRepositorySummary,
    claim_evidence: claimEvidence,
    capture_archives: archives,
    provenance_waivers: waivers.map(({ __line, ...event }) => event),
    distributions: {
      host: distribution(sourceTable.filter((source) => source.opened), "host"),
      organization: distribution(sourceTable.filter((source) => source.opened), "organization"),
      source_type: distribution(sourceTable.filter((source) => source.opened), "source_type"),
      publication_year: distribution(sourceTable.filter((source) => source.opened), "publication_year"),
      primary_secondary: distribution(sourceTable.filter((source) => source.opened), "primary_secondary"),
      evidence_lineage: distribution(sourceTable.filter((source) => source.opened), "evidence_lineage"),
    },
    searches: searchTable,
    search_updates: searchOverrides,
    sources: sourceTable,
    errors,
    warnings: resolvedWarnings,
  };
}

export function auditMarkdown(audit) {
  const rows = Object.entries(audit.counts).map(([key, value]) => `| ${key} | ${value} |`).join("\n");
  const findings = (items) => items.length ? items.map((item) => `- \`${item.code}\`${item.resolved ? " (resolved)" : ""}: ${item.message}${item.resolution ? ` — ${item.resolution}` : ""}`).join("\n") : "- None";
  const searches = audit.searches.map((item) => `| ${item.query_id} | ${item.channel} | ${item.query.replaceAll("|", "\\|")} | ${item.query_family || "pending"} | ${item.tool_provider} | ${item.requested_limit ?? "not limited"} | ${item.observed_returned_count ?? "unknown"} | ${item.result_capture_status} | ${(item.truncation || "unspecified").replaceAll("|", "\\|")} |`).join("\n") || "| — | — | — | — | — | — | — | — | — |";
  const sources = audit.sources.map((item) => `| ${item.source_id} | ${item.host || "—"} | ${item.source_type || "—"} | ${item.returned ? "yes" : "no"} | ${item.opened ? "yes" : "no"} | ${item.inspection_extent} | ${item.surfaces.join(", ") || "—"} | ${item.disposition} | ${item.version_freshness_state} | ${item.record_path || "—"} |`).join("\n") || "| — | — | — | — | — | — | — | — | — | — |";
  const distributions = Object.entries(audit.distributions).map(([axis, values]) => `- ${axis}: ${Object.entries(values).map(([value, count]) => `${value}=${count}`).join(", ") || "None"}`).join("\n");
  const archives = audit.capture_archives.length ? audit.capture_archives.map((item) => `- ${item.boundary_id}: ${item.archive_path}; sha256=${item.archive_sha256}; bytes=${item.archive_bytes}; lines=${item.line_start}-${item.line_end}; mode=${item.archive_mode}`).join("\n") : "- None recorded";
  const waivers = audit.provenance_waivers.length ? audit.provenance_waivers.map((item) => `- ${item.event_id}: reviewer=${item.reviewer}; scope=${item.scope}; persistent limitation=${item.persistent_limitation || "not recorded"}`).join("\n") : "- None recorded";
  const claimEvidence = audit.claim_evidence.map((item) => `| ${item.claim_id} | ${item.epistemic_kind} | ${item.supporting_sources.join(", ") || "—"} | ${item.opposing_sources.join(", ") || "—"} | ${item.mapping_count} | ${item.verified_mapping_count} | ${item.missing_verification_count} | ${item.confidence.replaceAll("|", "\\|")} |`).join("\n") || "| — | — | — | — | — | — | — | — |";
  const searchUpdates = audit.search_updates.map((item) => `| ${item.event_id} | ${item.search_event_id} | ${item.from_status || "—"} | ${item.to_status || "—"} | ${item.applied ? "applied" : "rejected"} | ${(item.reason || "").replaceAll("|", "\\|")} |`).join("\n") || "| — | — | — | — | — | — |";
  return `# Provenance Audit: ${audit.cycle}\n\n` +
    `**Generated:** ${audit.generated_at}\n` +
    `**Completeness:** \`${audit.completeness}\`\n` +
    `**Audit profile:** \`${audit.profile}\`\n` +
    `**Promotion gate:** ${audit.gate_passed ? "PASS" : "BLOCKED"}\n\n` +
    `## Funnel\n\n${audit.completeness === "reconstructed" ? "For reconstructed provenance, `returned` and `returned_source_identities_recovered` count only result identities recoverable with a defensible query/rank mapping; zero does not mean the historical searches returned nothing. Unknown result windows are shown in the search table. `manual_capture_actions` and `semantic_batch_actions` describe reconstruction-log authoring, not the overhead of the original research session.\n\n" : ""}| Stage | Count |\n| --- | ---: |\n${rows}\n\n` +
    `## Channel coverage\n\n- Planned: ${audit.planned_channels.join(", ") || "None declared"}\n- Actual: ${audit.actual_channels.join(", ") || "None observed"}\n\n` +
    `## Searches\n\n| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |\n| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |\n${searches}\n\n` +
    `## Search-update history\n\n| Update event | Search event | From | To | Effective state | Reason |\n| --- | --- | --- | --- | --- | --- |\n${searchUpdates}\n\n` +
    `## Host distribution\n\n${Object.entries(audit.host_distribution).map(([host, count]) => `- ${host}: ${count}`).join("\n") || "- None"}\n\n` +
    `## Source distributions\n\n${distributions || "- None"}\n\n` +
    `## Repository depth\n\n${audit.repository_depth.map((repo) => `- ${repo.source_id}: ${repo.surfaces.join(", ") || "no inspection surfaces"}; ${repo.pinned ? "pinned" : "unpinned"}`).join("\n") || "- No referenced repository sources"}\n${audit.repository_observations.map((repo) => `- captured local inspection: ${repo.repository_path}; surfaces=${repo.surfaces.join(", ") || "unspecified"}; commit=${repo.commit || "unresolved"}`).join("\n")}\n\n` +
    `GitHub source-funnel totals: ${Object.entries(audit.repository_summary).map(([key, value]) => `${key}=${value}`).join(", ")}\n\n` +
    `Captured local-repository observation totals: ${Object.entries(audit.local_repository_summary).map(([key, value]) => `${key}=${value}`).join(", ")}\n\n` +
    `## Claim-evidence coverage\n\n| Claim ID | Kind | Supporting sources | Opposing sources | Mappings | Verified | Missing verification | Confidence |\n| --- | --- | --- | --- | ---: | ---: | ---: | --- |\n${claimEvidence}\n\n` +
    `## Transcript retention\n\n${archives}\n\n` +
    `## Provenance waivers\n\n${waivers}\n\n` +
    `## Complete source table\n\n| Source ID | Host | Type | Returned | Opened | Inspection | Surfaces | Disposition | Version | Record |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n${sources}\n\n` +
    `## Blocking errors\n\n${findings(audit.errors)}\n\n` +
    `## Warnings requiring response\n\n${findings(audit.warnings)}\n`;
}
