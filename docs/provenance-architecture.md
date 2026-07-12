# Minimum Provenance Capture Architecture

**Status:** D-004 approved and frozen; Checkpoint 1 provisionally promoted
**Decision:** D-004
**Runtime evaluated:** Codex CLI 0.143.0 and the current Codex desktop rollout format on 2026-07-11

## Decision

Use two complementary records:

1. Native Codex JSONL is the completeness backstop. For desktop work, ingest the persisted thread rollout. For deliberately launched non-interactive workers, preserve `codex exec --json` output. Store fingerprints, offsets, tool names, timestamps, and reconciliation state rather than copying sensitive transcript content into the repository.
2. Canonical research events carry the semantics a transcript cannot reliably infer: query family, observed results, source identity, inspection extent and surfaces, disposition, claim use, exact evidence location, version state, and primary verification.

A cycle can claim complete provenance only when its native capture boundary is recorded and every research-capable native interaction is either linked to canonical research events or explicitly classified as non-research with a reason. Explicit events without native reconciliation remain manual and cannot establish completeness.

`complete_with_declared_manual_sources` additionally requires an independently enumerable `manual_source_set` whose members all have source events and dispositions. `partial`, `reconstructed`, and `unknown` audits remain promotion-blocked unless a scoped maintainer `provenance_waiver` is recorded; the waiver does not erase the completeness limitation.

## Why this is the minimum viable architecture

The installed Codex runtime supplies three possible native surfaces:

- Desktop sessions persist append-only rollout JSONL containing timestamps, turns, tool calls, tool outputs, web-search markers, and session metadata.
- `codex exec --json` emits a structured JSONL event stream for bounded non-interactive runs.
- The experimental app-server protocol exposes richer live item and hook notifications.

The first two surfaces are sufficient for a minimum system. App-server interception would add lifecycle complexity, bind the project to an experimental protocol, and still would not determine whether a page was merely screened, substantively read, or used for a claim. Hooks may help enforce policy later, but the current minimum does not depend on undocumented hook coverage.

The alternative logged-gateway design was rejected as the primary architecture. A gateway can produce excellent records for calls routed through it, but it cannot detect use of the desktop web tool, GitHub connectors, shell retrieval, local repository reads, or user-provided files outside the gateway. It remains a possible adapter beneath the canonical event model.

## Components

`tools/provenance/cli.mjs` provides seven operations:

- `append` validates and appends one canonical event;
- `ingest-codex` inventories native rollout calls without copying their raw content;
- `annotate` applies source, claim, verification, and review-scope semantics in one batch;
- `resolve-observations` appends a batch of review decisions for adapter-ambiguous observations;
- `archive-boundary` writes an exact verified transcript prefix outside the repository and appends its retention record;
- `audit` validates the event log, reconciles native observations, applies maturity gates, and emits JSON plus a readable Markdown audit;
- `validate` performs schema and transition checks without generating an audit.

`tools/provenance/test.mjs` exercises the bounded scenario. The fixtures deliberately include:

- returned-but-unopened, read-only, excluded, and referenced sources;
- host concentration and a planned channel with no actual search;
- a GitHub repository inspected only at README depth;
- an unpinned implementation claim;
- a referenced source without a full record;
- a claim/source mapping without primary verification;
- an unreconciled native research interaction.

The test then applies corrected fixtures and requires the promotion gate to pass. Concentration remains visible in the passing audit and requires a subject-specific explanation; a blanket resolution by warning code is insufficient.

## Canonical versus derived data

Canonical inputs are append-only research-event JSONL and immutable native transcript boundaries. Native observation inventories, JSON audits, and Markdown audits are derived and reproducible. Generated views never become a second source of truth.

The importer records SHA-256 fingerprints of native inputs, not their raw prompts or outputs. This reduces accidental disclosure while preserving the ability to prove which native event was classified. A source event can link to a native observation with `native_refs`.

Claim semantics use the same batch path. A review package declares its material-artifact scope, registers each artifact, declares canonical claims, maps exact source locations, records primary verification, and computes its prose-to-ledger digest. A promotion audit blocks a scoped artifact with no registration or claims. Human review remains necessary because no reliable mechanism can infer every material claim from prose.

## Completeness boundary

The current implementation can establish technical completeness only for a declared Codex rollout or `codex exec --json` stream that is available in full. It cannot prove activity outside that boundary—for example, a human browser, another application, or an unrecorded terminal. Such inputs must be declared as independently enumerable manual sources or the cycle is `partial`.

Format drift is fail-closed: unknown native tool-call shapes are inventoried as review-required observations. The system does not silently treat an unfamiliar runtime event as non-research. During audit it reopens the transcript, verifies the declared immutable prefix hash, and recomputes native input/output fingerprints.

Generic shell calls that remain ambiguous after adapter classification are settled through append-only resolution batches, never edits to adapter output. Each transition names the current effective-resolution event. Stale branches are rejected. A `not_research` transition requires a reason and is limited to generic shell observations; external and unknown shapes cannot be hidden this way. A linked resolution must point to an existing event that reciprocally names the native observation.

Completed research boundaries also require a retained raw prefix outside the repository. The archive is the exact line-1-through-boundary prefix authenticated by the boundary hash, not merely the selected interaction window. It is written with `0600` permissions and described by an append-only `capture_archive` event containing path, hash, bytes, lines, source runtime path, and date. Audit verifies both runtime and archive copies when present and can re-verify from the archive after runtime rotation. Missing or inconsistent declared material fails closed.

## Acceptance boundary

Interaction facts must be adapter-derived from ordinary tool use. One batch of semantic judgments is acceptable; hand-authored search, result, open, or native-link events are not. Audits must reopen the declared transcript, verify its immutable prefix and observation fingerprints, and block unknown tool-call shapes. One real web-search/fetch sequence and one ordinary repository inspection form the bounded acceptance test.

The one authorized iteration passed. The real window automatically derived one official-documentation search, three observed results, one source open/inspection, and one repository inspection at an exact commit. One semantic batch supplied the inherently judgmental inspection/disposition fields. The final audit recorded zero manual capture actions and one semantic-batch action.

The approval closeout additionally put two real material claims through the canonical ledger: the documented hook-coverage limitation and the project’s separately labeled engineering recommendation. Both have exact source mappings and primary verification, and the architecture artifact is present in an explicit review-scope manifest.

The Cycle 1 preflight used a 38-observation slice of the actual Stage 0.5 implementation session. Adapter rules resolved 36 observations automatically. Two runtime-tool-inventory calls remained ambiguous and were classified `not_research` in one append-only batch; no per-interaction capture bookkeeping was needed. The final distribution was 11 linked observations, 27 `not_research`, and zero unresolved. Human review touched 2/38 observations (5.3%) in one action, so the overhead finding remains valid.

Post-approval review found that one of those linked searches had a runtime-truncated, unparseable output that the original adapter recorded as zero results. The immutable automatic event is preserved, and a search-specific update now makes its effective counts unknown, its capture status `incomplete_truncated`, and the preflight audit visibly blocked on that source-result gap. The corrected adapter detects truncation and parse failure, distinguishes genuine parsed zeroes, and leaves purpose, query family, and coverage intent pending for semantic annotation. This corrects one adapter path without reopening D-004.

Final closeout makes result-capture updates monotonic. A `search_update` may preserve or weaken effective status, but cannot strengthen an incomplete or unknown capture or alter result evidence already classified complete. The audit shows every update and whether it was applied or rejected. Maturity promotion uses the fixed `provisional-promotion` profile, which requires review scope and requires durable archive verification whenever the promoted cycle claims complete provenance. These are the final planned safeguards; the infrastructure is otherwise frozen.

[Official Codex Hooks documentation](https://learn.chatgpt.com/docs/hooks#posttooluse) reports that `PostToolUse` can observe supported Bash, `apply_patch`, and MCP calls, but not WebSearch or all unified shell calls (`stage-0-5-real-capture-analysis-provenance-architecture-C001`). Because those omissions include research-capable interactions that this system must reconcile, the project recommends treating hooks as optional enrichment rather than the sole completeness boundary (`stage-0-5-real-capture-analysis-provenance-architecture-C002`). The first statement is source-reported behavior; the second is an engineering inference from that behavior and the project’s completeness requirement.

## Deferred work

- app-server streaming instead of post-turn rollout ingestion;
- hook-based enforcement that blocks uninstrumented research tools;
- adapters that enrich web, GitHub, academic, and repository events automatically;
- an HTML interface generated from the same events;
- automatic discovery of material prose claims.

These are improvements, not requirements for the bounded Stage 0.5 validation. Transcript retention and observation resolution were promoted from deferred risks into the approval closeout and Cycle 1 preflight, respectively.
