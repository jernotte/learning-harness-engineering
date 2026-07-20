import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  appendEvent,
  applyObservationResolutionBatch,
  applySemanticBatch,
  archiveCaptureBoundary,
  buildAudit,
  claimLedgerDigest,
  ingestCodexRollout,
  readJsonl,
  validateEvents,
} from "./lib.mjs";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const fixture = (name) => path.join(root, "tools/provenance/fixtures", name);

const failed = buildAudit(readJsonl(fixture("bounded-fail.jsonl")), { root, cycle: "bounded-validation", completeness: "complete" });
assert.equal(failed.gate_passed, false);
for (const code of ["planned_channel_missing", "host_concentration", "repository_shallow"]) {
  assert(failed.warnings.some((item) => item.code === code), `missing warning ${code}`);
}
for (const code of ["missing_source_record", "missing_verification", "unpinned_implementation_claim", "unreconciled_native_interaction"]) {
  assert(failed.errors.some((item) => item.code === code), `missing error ${code}`);
}
assert.deepEqual(
  { returned: failed.counts.returned, opened: failed.counts.opened, read_only: failed.counts.read_only, referenced: failed.counts.referenced, excluded: failed.counts.excluded },
  { returned: 5, opened: 4, read_only: 1, referenced: 2, excluded: 1 },
);

const passed = buildAudit(readJsonl(fixture("bounded-pass.jsonl")), { root, cycle: "bounded-validation", completeness: "complete" });
assert.equal(passed.gate_passed, true, JSON.stringify({ errors: passed.errors, warnings: passed.warnings }));
assert(passed.warnings.some((item) => item.code === "host_concentration"));
assert(passed.warnings.find((item) => item.code === "host_concentration").resolved);
assert.equal(passed.searches.length, 2);
assert.equal(passed.sources.length, 5);
assert.equal(passed.sources.find((source) => source.source_id === "fxp-source-e").opened, false);
assert.equal(passed.sources.find((source) => source.source_id === "fxp-source-b").disposition, "read_only");

const multiWindowAudit = buildAudit([
  { event_id: "multi-open-a-1", timestamp: "2026-07-11T00:00:00Z", agent: "fixture", cycle: "multi-window", pass: "wave-1", event_type: "source_opened", source_id: "multi-source-a", canonical_url: "https://example.com/a", host: "example.com", organization: "Example", source_type: "web source", direct_discovery_reason: "fixture" },
  { event_id: "multi-open-a-2", timestamp: "2026-07-11T00:01:00Z", agent: "fixture", cycle: "multi-window", pass: "wave-2", event_type: "source_opened", source_id: "multi-source-a", canonical_url: "https://example.com/a", host: "example.com", organization: "Example", source_type: "web source", direct_discovery_reason: "fixture reinspection" },
  { event_id: "multi-open-b", timestamp: "2026-07-11T00:01:01Z", agent: "fixture", cycle: "multi-window", pass: "wave-2", event_type: "source_opened", source_id: "multi-source-b", canonical_url: "https://example.org/b", host: "example.org", organization: "Example B", source_type: "web source", direct_discovery_reason: "fixture" },
  { event_id: "multi-metrics-1", timestamp: "2026-07-11T00:02:00Z", agent: "fixture", cycle: "multi-window", pass: "wave-1", event_type: "capture_metrics", interaction_count: 2, automatic_event_count: 2, manual_capture_actions: 1, semantic_batch_actions: 1, semantic_decision_count: 1 },
  { event_id: "multi-metrics-2", timestamp: "2026-07-11T00:02:01Z", agent: "fixture", cycle: "multi-window", pass: "wave-2", event_type: "capture_metrics", interaction_count: 3, automatic_event_count: 3, manual_capture_actions: 0, semantic_batch_actions: 1, semantic_decision_count: 2 },
], { root, cycle: "multi-window", completeness: "unknown" });
assert.equal(multiWindowAudit.counts.opened, 2, "reopening a source in a later window must not increase the unique-source count");
assert.deepEqual(multiWindowAudit.host_distribution, { "example.com": 1, "example.org": 1 }, "host distribution must count unique opened sources");
assert.equal(multiWindowAudit.counts.manual_capture_actions, 1, "combined audit must sum capture actions across metric batches");
assert.equal(multiWindowAudit.counts.semantic_batch_actions, 2, "combined audit must sum semantic batches across metric batches");

const noBoundary = buildAudit(readJsonl(fixture("bounded-pass.jsonl")).filter((event) => !["capture_boundary", "capture_observation"].includes(event.event_type)), { root, cycle: "bounded-validation", completeness: "complete" });
assert(noBoundary.errors.some((item) => item.code === "missing_capture_boundary"));
const reconstructed = buildAudit(readJsonl(fixture("bounded-pass.jsonl")), { root, cycle: "bounded-validation", completeness: "reconstructed" });
assert(reconstructed.errors.some((item) => item.code === "incomplete_provenance_promotion"));
const selfVerifiedEvents = readJsonl(fixture("bounded-pass.jsonl")).map((event) => event.event_id === "fxp-verify-a" ? { ...event, verifier: "fixture", verifier_role: "subagent" } : event);
const selfVerified = buildAudit(selfVerifiedEvents, { root, cycle: "bounded-validation", completeness: "complete" });
assert(selfVerified.errors.some((item) => item.code === "subagent_self_verification"));

const observations = ingestCodexRollout(fixture("rollout.jsonl"), { cycle: "bounded-validation", pass: "native-test" });
assert.equal(observations.length, 3);
assert.equal(observations[0].event_type, "capture_boundary");
assert.equal(observations[1].research_capable, true);
assert.equal(observations[2].research_capable, false);
assert(observations[1].native_ref.output_sha256);
assert(observations[1].native_ref.web_query_sha256);
assert(!JSON.stringify(observations).includes("await tools.web__run"), "raw tool input leaked into observation inventory");

const temp = fs.mkdtempSync(path.join(os.tmpdir(), "provenance-test-"));
const eventsFile = path.join(temp, "events.jsonl");
const event = { event_id: "append-test", timestamp: "2026-07-11T00:00:00Z", agent: "fixture", cycle: "bounded-validation", pass: "append", event_type: "coverage_plan", planned_channels: [] };
appendEvent(eventsFile, event);
assert.equal(readJsonl(eventsFile).length, 1);
assert.throws(() => appendEvent(eventsFile, event), /duplicate event_id/);

assert(validateEvents([{ ...event, event_id: "unknown-event", event_type: "invented" }]).errors.some((message) => message.includes("unknown event_type")));
assert(validateEvents([{ ...event, event_id: "surface-event", event_type: "source_inspected", source_id: "source", inspection_extent: "screening", surfaces: ["official documentation"], locations_inspected: ["section"] }]).errors.some((message) => message.includes("unknown surface")));

const adapterRollout = path.join(temp, "adapter-rollout.jsonl");
const adapterRows = [
  { timestamp: "2026-07-11T01:00:00Z", type: "session_meta", payload: { id: "adapter-fixture" } },
  { timestamp: "2026-07-11T01:00:01Z", type: "response_item", payload: { type: "custom_tool_call", call_id: "search", name: "exec", input: 'const r=await tools.mcp__openaiDeveloperDocs__search_openai_docs({query:"fixture hooks",limit:2}); text(r);' } },
  { timestamp: "2026-07-11T01:00:02Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: "search", output: [{ type: "input_text", text: "Output:" }, { type: "input_text", text: JSON.stringify({ nbHits: 2, page: 0, hits: [{ url: "https://learn.chatgpt.com/docs/hooks#one" }, { url: "https://learn.chatgpt.com/docs/config-file/config-reference" }] }) }] } },
  { timestamp: "2026-07-11T01:00:03Z", type: "response_item", payload: { type: "custom_tool_call", call_id: "fetch", name: "exec", input: 'const r=await tools.mcp__openaiDeveloperDocs__fetch_openai_doc({url:"https://learn.chatgpt.com/docs/hooks"}); text(r);' } },
  { timestamp: "2026-07-11T01:00:04Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: "fetch", output: [{ type: "input_text", text: "# Hooks\nFixture." }] } },
  { timestamp: "2026-07-11T01:00:05Z", type: "response_item", payload: { type: "custom_tool_call", call_id: "repo", name: "exec", input: 'const r=await tools.exec_command({cmd:"git rev-parse HEAD; rg -n fixture tools/provenance/lib.mjs",workdir:"/fixture/repo"}); text(r.output);' } },
  { timestamp: "2026-07-11T01:00:06Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: "repo", output: [{ type: "input_text", text: "0123456789abcdef0123456789abcdef01234567\nsource" }] } },
];
fs.writeFileSync(adapterRollout, `${adapterRows.map(JSON.stringify).join("\n")}\n`);
const auto = ingestCodexRollout(adapterRollout, { cycle: "adapter-validation", pass: "capture", agent: "primary", derive: true });
assert.equal(auto.filter((item) => item.event_type === "search").length, 1);
assert.equal(auto.filter((item) => item.event_type === "result_returned").length, 2);
assert.equal(auto.filter((item) => item.event_type === "source_opened").length, 1);
assert.equal(auto.filter((item) => item.event_type === "repository_inspected").length, 1);
assert(auto.filter((item) => item.event_type === "capture_observation" && item.research_capable).every((item) => item.resolution === "linked"));
const parsedSearch = auto.find((item) => item.event_type === "search");
assert.equal(parsedSearch.result_capture_status, "complete");
assert.equal(parsedSearch.observed_returned_count, 2);
assert.equal(parsedSearch.purpose, null);
assert.equal(parsedSearch.coverage_dimension, null);
assert.equal(parsedSearch.semantic_status, "pending");

const unifiedRollout = path.join(temp, "unified-exec-rollout.jsonl");
const unifiedRows = [
  { timestamp: "2026-07-16T01:00:00Z", type: "response_item", payload: { type: "custom_tool_call", call_id: "json-repo", name: "exec", input: 'const r = await tools.exec_command({"cmd":"git rev-parse HEAD\\nrg -n fixture src","workdir":"/fixture/external-json","yield_time_ms":10000}); text(r.output);' } },
  { timestamp: "2026-07-16T01:00:01Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: "json-repo", output: [{ type: "input_text", text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\\nsource" }] } },
  { timestamp: "2026-07-16T01:00:02Z", type: "response_item", payload: { type: "custom_tool_call", call_id: "batch-repo", name: "exec", input: 'const wd="/fixture/external-batch"; const cmds=["sed -n \'1,20p\' src/a.py","rg -n test tests"]; const out=await Promise.all(cmds.map(cmd=>tools.exec_command({cmd,workdir:wd}))); text(out.length);' } },
  { timestamp: "2026-07-16T01:00:03Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: "batch-repo", output: [{ type: "input_text", text: "2" }] } },
  { timestamp: "2026-07-16T01:00:04Z", type: "response_item", payload: { type: "custom_tool_call", call_id: "git-c-repo", name: "exec", input: 'const r=await tools.exec_command({"cmd":"git -C /Users/fixture/dev/reference-materials/research/target rev-parse HEAD","workdir":"/fixture/project"}); text(r.output);' } },
  { timestamp: "2026-07-16T01:00:05Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: "git-c-repo", output: [{ type: "input_text", text: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" }] } },
  { timestamp: "2026-07-16T01:00:06Z", type: "response_item", payload: { type: "custom_tool_call", call_id: "generic-search", name: "exec", input: 'const r = await tools.web__run({search_query:[{q:"first query"},{q:"second query"}],response_length:"long"}); text(JSON.stringify(r,null,2));' } },
  { timestamp: "2026-07-16T01:00:06.500Z", type: "event_msg", payload: { type: "web_search_end", call_id: "inner-search", query: "first query ...", action: { type: "search", queries: ["first query", "second query"] } } },
  { timestamp: "2026-07-16T01:00:07Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: "generic-search", output: [{ type: "input_text", text: "First (https://arxiv.org/abs/1234.56789)\\nSecond (https://github.com/example/repo)" }] } },
  { timestamp: "2026-07-16T01:00:08Z", type: "response_item", payload: { type: "custom_tool_call", call_id: "generic-open", name: "exec", input: 'const r = await tools.web__run({open:[{ref_id:"https://arxiv.org/html/1234.56789","lineno":10}],response_length:"long"}); text(JSON.stringify(r,null,2));' } },
  { timestamp: "2026-07-16T01:00:08.500Z", type: "event_msg", payload: { type: "web_search_end", call_id: "inner-open", query: "https://arxiv.org/html/1234.56789", action: { type: "open_page", url: "https://arxiv.org/html/1234.56789" } } },
  { timestamp: "2026-07-16T01:00:09Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: "generic-open", output: [{ type: "input_text", text: "Paper content" }] } },
  { timestamp: "2026-07-16T01:00:10Z", type: "response_item", payload: { type: "custom_tool_call", call_id: "unknown-nested", name: "exec", input: 'const r = await tools.unknown_nested({value:"fixture"}); text(r);' } },
  { timestamp: "2026-07-16T01:00:11Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: "unknown-nested", output: [{ type: "input_text", text: "unknown" }] } },
];
fs.writeFileSync(unifiedRollout, `${unifiedRows.map(JSON.stringify).join("\n")}\n`);
const unified = ingestCodexRollout(unifiedRollout, { cycle: "unified-validation", pass: "capture", agent: "primary", projectRoot: "/fixture/project", derive: true });
const unifiedRepositories = unified.filter((item) => item.event_type === "repository_inspected");
assert.equal(unifiedRepositories.length, 3);
assert(unifiedRepositories.some((item) => item.repository_path === "/fixture/external-json"));
assert(unifiedRepositories.some((item) => item.repository_path === "/fixture/external-batch"));
assert(unifiedRepositories.some((item) => item.repository_path === "/Users/fixture/dev/reference-materials/research/target"));
assert(!unifiedRepositories.some((item) => item.repository_path === "/fixture/project"));
assert.equal(unifiedRepositories.find((item) => item.repository_path === "/fixture/external-batch").commit, null);
const genericSearch = unified.find((item) => item.event_type === "search");
assert.equal(genericSearch.query, "first query || second query");
assert.equal(genericSearch.observed_returned_count, 2);
assert.equal(genericSearch.result_capture_status, "complete");
assert.equal(unified.filter((item) => item.event_type === "result_returned").length, 2);
assert.equal(unified.filter((item) => item.event_type === "source_opened").length, 1);
assert.equal(unified.filter((item) => item.event_type === "source_inspected").length, 1);
assert(unified.filter((item) => item.event_type === "capture_observation" && ["inner-search", "inner-open"].includes(item.native_ref.call_id)).every((item) => item.resolution === "linked"));
const unknownNested = unified.find((item) => item.event_type === "capture_observation" && item.native_ref.call_id === "unknown-nested");
assert.equal(unknownNested.research_capable, true);
assert.equal(unknownNested.resolution, "unreconciled");
assert(unified.filter((item) => item.event_type === "capture_observation" && ["json-repo", "batch-repo", "git-c-repo", "generic-search", "generic-open"].includes(item.native_ref.call_id)).every((item) => item.resolution === "linked"));

function ingestSearchCase(name, output) {
  const rollout = path.join(temp, `${name}-search-rollout.jsonl`);
  const rows = [
    { timestamp: "2026-07-11T01:05:00Z", type: "response_item", payload: { type: "custom_tool_call", call_id: name, name: "exec", input: `const r=await tools.mcp__openaiDeveloperDocs__search_openai_docs({query:"${name}",limit:2}); text(r);` } },
    { timestamp: "2026-07-11T01:05:01Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: name, output } },
  ];
  fs.writeFileSync(rollout, `${rows.map(JSON.stringify).join("\n")}\n`);
  return ingestCodexRollout(rollout, { cycle: `${name}-validation`, pass: "capture", agent: "primary", derive: true });
}

const zeroSearchEvents = ingestSearchCase("zero", JSON.stringify({ nbHits: 0, page: 0, hits: [] }));
const zeroSearch = zeroSearchEvents.find((item) => item.event_type === "search");
assert.equal(zeroSearch.result_capture_status, "complete");
assert.equal(zeroSearch.observed_returned_count, 0);
assert.equal(zeroSearch.total_hits_reported, 0);

const truncatedSearchEvents = ingestSearchCase("truncated", 'Warning: truncated output (original token count: 34950)\n{"hits":[{"url":"https://learn.chatgpt.com/docs/hooks"}');
const truncatedSearch = truncatedSearchEvents.find((item) => item.event_type === "search");
assert.equal(truncatedSearch.result_capture_status, "incomplete_truncated");
assert.equal(truncatedSearch.observed_returned_count, null);
assert.equal(truncatedSearch.total_hits_reported, null);
assert.equal(truncatedSearchEvents.filter((item) => item.event_type === "result_returned").length, 0);
assert(buildAudit(truncatedSearchEvents, { root, cycle: "truncated-validation", completeness: "complete" }).errors.some((item) => item.code === "incomplete_search_result_capture"));

const malformedSearchEvents = ingestSearchCase("malformed", "known search output that is not JSON");
const malformedSearch = malformedSearchEvents.find((item) => item.event_type === "search");
assert.equal(malformedSearch.result_capture_status, "incomplete_unparseable");
assert.equal(malformedSearch.observed_returned_count, null);
assert.equal(malformedSearch.total_hits_reported, null);
assert(buildAudit(malformedSearchEvents, { root, cycle: "malformed-validation", completeness: "complete" }).errors.some((item) => item.code === "incomplete_search_result_capture"));

const historicalFalseZero = truncatedSearchEvents.map((item) => item.event_type === "search" ? { ...item, observed_returned_count: 0, total_hits_reported: 0, truncation: "none observed", result_capture_status: undefined } : item);
const correctedFalseZero = applyObservationResolutionBatch(historicalFalseZero, {
  timestamp: "2026-07-11T01:06:00Z", agent: "primary", cycle: "truncated-validation", pass: "correction", resolution_batch_id: "truncated-correction-batch", resolutions: [],
  search_updates: [{ search_event_id: truncatedSearch.event_id, reason: "Archived output contains an explicit runtime truncation marker and unparseable partial JSON.", observed_returned_count: null, total_hits_reported: null, truncation: "runtime output truncation detected; returned-result window is incomplete", result_capture_status: "incomplete_truncated" }],
});
assert.equal(correctedFalseZero.find((item) => item.event_type === "search").observed_returned_count, 0, "historical event must remain unchanged");
const correctedAudit = buildAudit(correctedFalseZero, { root, cycle: "truncated-validation", completeness: "complete" });
assert.equal(correctedAudit.searches[0].observed_returned_count, null);
assert.equal(correctedAudit.searches[0].result_capture_status, "incomplete_truncated");
assert(correctedAudit.errors.some((item) => item.code === "incomplete_search_result_capture"));
const dishonestUpgrade = applyObservationResolutionBatch(correctedFalseZero, {
  timestamp: "2026-07-11T01:06:30Z", agent: "primary", cycle: "truncated-validation", pass: "correction", resolution_batch_id: "dishonest-upgrade-batch", resolutions: [],
  search_updates: [{ search_event_id: truncatedSearch.event_id, reason: "Evidence-free attempt to restore a clean result window.", observed_returned_count: 10, total_hits_reported: 10, truncation: "none", result_capture_status: "complete" }],
});
const dishonestAudit = buildAudit(dishonestUpgrade, { root, cycle: "truncated-validation", completeness: "complete" });
assert(dishonestAudit.errors.some((item) => item.code === "search_update_strengthening_unverified"));
assert(dishonestAudit.errors.some((item) => item.code === "incomplete_search_result_capture"), "rejected strengthening must not conceal the effective incomplete status");
assert.equal(dishonestAudit.searches[0].result_capture_status, "incomplete_truncated");
assert.equal(dishonestAudit.search_updates.at(-1).applied, false);
const completeEvidenceRewrite = applyObservationResolutionBatch(zeroSearchEvents, {
  timestamp: "2026-07-11T01:06:31Z", agent: "primary", cycle: "zero-validation", pass: "correction", resolution_batch_id: "complete-rewrite-batch", resolutions: [],
  search_updates: [{ search_event_id: zeroSearch.event_id, reason: "Evidence-free count rewrite.", observed_returned_count: 10, total_hits_reported: 10, result_capture_status: "complete" }],
});
assert(buildAudit(completeEvidenceRewrite, { root, cycle: "zero-validation", completeness: "complete" }).errors.some((item) => item.code === "search_update_complete_evidence_change"));
const openedSource = auto.find((item) => item.event_type === "source_opened").source_id;
const annotated = applySemanticBatch(auto, { timestamp: "2026-07-11T01:01:00Z", agent: "primary", agent_role: "primary", cycle: "adapter-validation", pass: "annotation", semantic_batch_id: "adapter-batch-1", searches: [{ search_event_id: parsedSearch.event_id, reason: "Fixture semantic annotation", query_family: "fixture lookup", purpose: "Validate parsed search capture", coverage_dimension: "search adapter behavior" }], sources: [{ source_id: openedSource, disposition: "read_only", reason: "Bounded capture fixture only", inspection_extent: "partial_substantive", surfaces: ["documentation"], locations_inspected: ["complete fixture page"] }] });
const adapterAudit = buildAudit(annotated, { root, cycle: "adapter-validation", completeness: "complete", acceptance: "near-zero" });
assert.equal(adapterAudit.gate_passed, true, JSON.stringify(adapterAudit.errors));
assert.equal(adapterAudit.searches[0].purpose, "Validate parsed search capture");
assert(buildAudit(annotated, { root, cycle: "adapter-validation", completeness: "complete", requireArchive: true }).errors.some((item) => item.code === "missing_capture_archive"));

const claimAnnotated = applySemanticBatch(auto, {
  timestamp: "2026-07-11T01:02:00Z", agent: "primary", agent_role: "primary", cycle: "adapter-validation", pass: "claims", semantic_batch_id: "claim-batch-1",
  artifact: { artifact_id: "adapter-validation-analysis-hooks", artifact_type: "analysis", artifact_path: "docs/provenance-architecture.md" },
  review_scope: { scope_id: "adapter-review", scope_basis: "Fixture review package", artifact_ids: ["adapter-validation-analysis-hooks"] },
  sources: [{ source_id: openedSource, disposition: "referenced", reason: "Claim fixture", inspection_extent: "partial_substantive", surfaces: ["documentation"], locations_inspected: ["fixture page"], record_path: "research/provenance/validation/sources/openai-hooks.md" }],
  claims: [{
    claim_id: "adapter-validation-analysis-hooks-C001", claim_text: "The fixture supports a claim.", epistemic_kind: "source-reported claim", artifact_location: "fixture",
    references: [{ source_id: openedSource, location: "fixture page", verifier: "primary", verifier_role: "primary", outcome: "supports_scope", inspected_version: "fixture-v1", notes: "Exact fixture checked." }],
  }],
});
assert.equal(claimAnnotated.filter((item) => item.event_type === "claim_declared").length, 1);
assert.equal(claimAnnotated.filter((item) => item.event_type === "claim_reference").length, 1);
assert.equal(claimAnnotated.filter((item) => item.event_type === "verification").length, 1);
assert.equal(claimAnnotated.find((item) => item.event_type === "prose_ledger_attestation").ledger_digest, claimLedgerDigest(claimAnnotated, "adapter-validation-analysis-hooks"));
assert.equal(buildAudit(claimAnnotated, { root, cycle: "adapter-validation", completeness: "complete", requireReviewScope: true }).gate_passed, true);
assert(buildAudit(annotated, { root, cycle: "adapter-validation", completeness: "complete", requireReviewScope: true }).errors.some((item) => item.code === "missing_review_scope"));
const promotionWithoutArchive = buildAudit(claimAnnotated, { root, cycle: "adapter-validation", completeness: "complete", profile: "provisional-promotion" });
assert(promotionWithoutArchive.errors.some((item) => item.code === "missing_capture_archive"), "promotion profile must require durable retention without caller flags");
const promotionArchivePath = path.join(temp, "promotion-profile", "prefix.jsonl");
const promotionReady = archiveCaptureBoundary(claimAnnotated, claimAnnotated[0].event_id, promotionArchivePath, { timestamp: "2026-07-11T01:03:00Z" });
assert.equal(buildAudit(promotionReady, { root, cycle: "adapter-validation", completeness: "complete", profile: "provisional-promotion" }).gate_passed, true);
const reconstructedWaiver = {
  event_id: "reconstructed-waiver", timestamp: "2026-07-11T01:03:30Z", agent: "maintainer", cycle: "adapter-validation", pass: "approval", event_type: "provenance_waiver",
  reviewer: "maintainer", reason: "Fixture reconstructed limitation accepted for provisional promotion.", scope: "adapter-validation fixture only", persistent_limitation: "Fixture limitation must remain visible until complete revalidation.",
};
assert.equal(buildAudit([...claimAnnotated, reconstructedWaiver], { root, cycle: "adapter-validation", completeness: "reconstructed", profile: "provisional-promotion" }).gate_passed, true);
assert.throws(() => buildAudit(claimAnnotated, { root, completeness: "complete", profile: "invented" }), /unknown audit profile/);

const resolutionRollout = path.join(temp, "resolution-rollout.jsonl");
const resolutionRows = [
  { timestamp: "2026-07-11T01:10:00Z", type: "response_item", payload: { type: "custom_tool_call", call_id: "generic", name: "exec", input: "await arbitraryLocalShell()" } },
  { timestamp: "2026-07-11T01:10:01Z", type: "response_item", payload: { type: "custom_tool_call_output", call_id: "generic", output: "/fixture/repo" } },
];
fs.writeFileSync(resolutionRollout, `${resolutionRows.map(JSON.stringify).join("\n")}\n`);
const unresolved = ingestCodexRollout(resolutionRollout, { cycle: "resolution-validation", pass: "capture", agent: "primary", projectRoot: "/fixture/repo", derive: true });
const genericObservation = unresolved.find((item) => item.event_type === "capture_observation");
assert.equal(genericObservation.classification, "generic_shell_requires_review");
assert.equal(genericObservation.resolution, "unreconciled");
const resolved = applyObservationResolutionBatch(unresolved, {
  timestamp: "2026-07-11T01:11:00Z", agent: "primary", cycle: "resolution-validation", pass: "resolution", resolution_batch_id: "resolution-batch-1",
  resolutions: [{ observation_id: genericObservation.event_id, previous_resolution_event_id: genericObservation.event_id, resolution: "not_research", reason: "The command only printed the working directory and accessed no research material." }],
});
const resolutionAudit = buildAudit(resolved, { root, cycle: "resolution-validation", completeness: "complete" });
assert.equal(resolutionAudit.gate_passed, true, JSON.stringify(resolutionAudit.errors));
assert.equal(resolutionAudit.counts.human_resolved_observations, 1);
assert.equal(resolutionAudit.counts.not_research_observations, 1);
assert.equal(resolutionAudit.counts.observation_resolution_batches, 1);
assert.throws(() => applyObservationResolutionBatch(unresolved, { cycle: "resolution-validation", resolution_batch_id: "bad-unknown", resolutions: [{ observation_id: "missing", previous_resolution_event_id: "missing", resolution: "not_research", reason: "invalid" }] }), /unknown observation_id/);
const externalObservation = auto.find((item) => item.event_type === "capture_observation" && item.classification === "external_or_research_capable");
assert.throws(() => applyObservationResolutionBatch(auto, { cycle: "adapter-validation", resolution_batch_id: "bad-conceal", resolutions: [{ observation_id: externalObservation.event_id, previous_resolution_event_id: externalObservation.event_id, resolution: "not_research", reason: "invalid concealment" }] }), /only generic_shell_requires_review/);
assert.throws(() => applyObservationResolutionBatch(resolved, { cycle: "resolution-validation", resolution_batch_id: "bad-stale", resolutions: [{ observation_id: genericObservation.event_id, previous_resolution_event_id: genericObservation.event_id, resolution: "not_research", reason: "stale transition" }] }), /stale or contradictory/);
const contradictory = [...resolved, { event_id: "contradictory-resolution", timestamp: "2026-07-11T01:11:30Z", agent: "primary", cycle: "resolution-validation", pass: "resolution", event_type: "observation_resolution", resolution_batch_id: "contradictory-batch", observation_id: genericObservation.event_id, previous_resolution_event_id: genericObservation.event_id, resolution: "not_research", reason: "Deliberately stale branch." }];
assert(buildAudit(contradictory, { root, cycle: "resolution-validation", completeness: "complete" }).errors.some((item) => item.code === "contradictory_observation_resolution"));

const linkedTarget = { event_id: "manual-repository-evidence", timestamp: "2026-07-11T01:12:00Z", agent: "primary", cycle: "resolution-validation", pass: "resolution", event_type: "repository_inspected", repository_path: "/fixture/repo", command_sha256: "fixture", surfaces: ["code"], commit: null, native_refs: [genericObservation.event_id] };
const linked = applyObservationResolutionBatch([...unresolved, linkedTarget], { cycle: "resolution-validation", resolution_batch_id: "linked-batch", resolutions: [{ observation_id: genericObservation.event_id, previous_resolution_event_id: genericObservation.event_id, resolution: "linked", linked_event_ids: [linkedTarget.event_id], reason: "The generic command was manually identified as a repository inspection." }] });
assert.equal(buildAudit(linked, { root, cycle: "resolution-validation", completeness: "complete" }).gate_passed, true);
const unreciprocatedTarget = { ...linkedTarget, event_id: "unreciprocated-evidence", native_refs: [] };
const unreciprocated = applyObservationResolutionBatch([...unresolved, unreciprocatedTarget], { cycle: "resolution-validation", resolution_batch_id: "unreciprocated-batch", resolutions: [{ observation_id: genericObservation.event_id, previous_resolution_event_id: genericObservation.event_id, resolution: "linked", linked_event_ids: [unreciprocatedTarget.event_id], reason: "Deliberately deficient link." }] });
assert(buildAudit(unreciprocated, { root, cycle: "resolution-validation", completeness: "complete" }).errors.some((item) => item.code === "unproven_native_link"));

const archiveRollout = path.join(temp, "archive-rollout.jsonl");
fs.copyFileSync(adapterRollout, archiveRollout);
const archiveAuto = ingestCodexRollout(archiveRollout, { cycle: "archive-validation", pass: "capture", agent: "primary", derive: true });
const archiveSource = archiveAuto.find((item) => item.event_type === "source_opened").source_id;
const archiveBase = applySemanticBatch(archiveAuto, { timestamp: "2026-07-11T01:19:00Z", agent: "primary", cycle: "archive-validation", semantic_batch_id: "archive-semantic-batch", sources: [{ source_id: archiveSource, disposition: "read_only", reason: "Archive validation fixture", inspection_extent: "partial_substantive", surfaces: ["documentation"], locations_inspected: ["fixture page"] }] });
const archivePath = path.join(temp, "retained", "prefix.jsonl");
const archived = archiveCaptureBoundary(archiveBase, archiveBase[0].event_id, archivePath, { timestamp: "2026-07-11T01:20:00Z" });
assert.equal(fs.statSync(archivePath).mode & 0o777, 0o600);
assert.equal(buildAudit(archived, { root, cycle: "archive-validation", completeness: "complete", requireArchive: true }).gate_passed, true);
fs.unlinkSync(archiveRollout);
assert.equal(buildAudit(archived, { root, cycle: "archive-validation", completeness: "complete", requireArchive: true }).gate_passed, true, "archive must preserve re-verification after runtime transcript disappears");
fs.appendFileSync(archivePath, "tamper\n");
assert(buildAudit(archived, { root, cycle: "archive-validation", completeness: "complete", requireArchive: true }).errors.some((item) => ["capture_archive_size_mismatch", "archive_prefix_hash_mismatch"].includes(item.code)));

const tamperedRollout = path.join(temp, "tampered-rollout.jsonl");
fs.copyFileSync(adapterRollout, tamperedRollout);
const tamperedEvents = ingestCodexRollout(tamperedRollout, { cycle: "tamper", pass: "capture", agent: "primary" });
const tamperedText = fs.readFileSync(tamperedRollout, "utf8").replace("adapter-fixture", "changed-fixture");
fs.writeFileSync(tamperedRollout, tamperedText);
const tamperedAudit = buildAudit(tamperedEvents, { root, cycle: "tamper", completeness: "complete" });
assert(tamperedAudit.errors.some((item) => item.code === "native_prefix_hash_mismatch"));

const unknownRollout = path.join(temp, "unknown-rollout.jsonl");
fs.writeFileSync(unknownRollout, `${JSON.stringify({ timestamp: "2026-07-11T02:00:00Z", type: "response_item", payload: { type: "mcp_tool_call_v2", call_id: "future-call", input: {} } })}\n`);
const unknownEvents = ingestCodexRollout(unknownRollout, { cycle: "unknown", pass: "capture", agent: "primary" });
assert(unknownEvents.some((item) => item.classification === "unknown_native_tool_shape" && item.resolution === "unreconciled"));

console.log("provenance bounded validation: PASS");
