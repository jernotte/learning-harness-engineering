# Decision Log

This log records decisions that change project scope, methodology, taxonomy, canonical schemas, governance, or the status of a consequential conclusion. Routine research judgments belong in their cycle artifacts.

## D-001 — Initial research operating model

**Status:** Approved
**Date:** 2026-07-10

### Decision

Adopt the research charter, iterative methodology, initial plan, evidence distinctions, artifact maturity model, and early checkpoint policy created from the project interview. Begin with field reconnaissance not constrained by `outline.md` before approving a durable taxonomy.

### Why

The project aims to expose unknown gaps rather than merely fill a prewritten course outline. A broad first recon reduces anchoring risk. Separating source capture, analysis, synthesis, and review keeps interesting claims from quietly becoming accepted facts. Tighter early checkpoints allow the maintainer to correct drift before the method is repeated at scale.

### Alternatives considered

- Organize research immediately around the eight modules in `outline.md`. This is efficient but risks preserving the assumptions the research is supposed to test.
- Begin implementation deep dives without a landscape pass. This produces concrete knowledge quickly but may overrepresent familiar or easily accessible systems.
- Build an HTML dashboard before research begins. This may improve visibility but would encode an untested information model and create avoidable maintenance.

### Consequences

The first cycle will spend meaningful effort on mapping and alignment. Templates and directory structure remain provisional. Curriculum and dashboard work are deferred until reviewed research shows what they need to represent.

### Approval record

Approved by the maintainer on 2026-07-10 with the instruction to continue into the first cycle.

**Later clarification:** “Not constrained by `outline.md`” describes independence from the seed taxonomy, not independent evidentiary corroboration. D-002 records that the executed passes shared project framing. D-003 supersedes the deferral of provenance-related infrastructure; capture and audit are now prerequisites.

## D-002 — Provisional harness-architecture taxonomy

**Status:** Provisionally approved at Checkpoint 1 — validation required at Checkpoint 3
**Date:** 2026-07-10; revised 2026-07-11; provisionally promoted 2026-07-12

### Decision

Use three complementary layers for different jobs.

1. Source-native vocabulary drives recon and human navigation. Preserve familiar terms and aliases used by sources rather than assuming authors will use the project's analytical language.
2. Eleven provisional harness responsibilities form a multi-label analytical lens: run lifecycle and ingress; model and instruction policy; active-context and capability construction; control flow and execution semantics; action and environment mediation; observation and feedback construction; durable state and persistence; decomposition, coordination, and aggregation; verification, recovery, and control boundaries; observability and external evaluation; and adaptation and optimization across runs.
3. A later narrative and curriculum structure will recombine reviewed knowledge into an approachable human-facing sequence.

Compare implementations across the additional dimensions of control owner, time horizon, state ownership/isolation, authority and budget, failure semantics, model/version dependence, and position of evidence inside or outside the optimized loop.

Treat the responsibility map as a revisable design-review lens, not an exclusive folder hierarchy or required search vocabulary. A source or mechanism can map to several responsibilities.

For initial case consistency, Responsibility 2 primarily owns instruction/model policy; Responsibility 3 owns per-call prompt materialization and model-visible capability admission; and Responsibility 5 owns action representation, authorization, dispatch, and execution. Cross-boundary coupling remains explicit taxonomy-friction evidence.

### Why

Separately executed academic, implementation, and production-documentation passes produced complementary maps centered on allocations of control, state, capability, and evidence. They shared the same project framing and are not independent corroboration. The seed component list nevertheless obscures important distinctions: tools span capability admission, action, environment, and observation; memory spans active context, runtime state, artifacts, cross-session knowledge, and procedural adaptation; planning is a control strategy; and subagents combine decomposition, isolation, control transfer, and aggregation.

Familiar human categories remain valuable for communication, discovery, and teaching. The responsibility lens supplies a deeper engineering model without forcing abstract terminology into every source search or explanation.

### Alternatives considered

- Preserve the modules in `outline.md` as the canonical taxonomy. This is approachable but collapses mechanisms that need different evidence and comparison axes.
- Use the eight-part academic map. This is compact but underrepresents lifecycle/ingress, model mediation, environment boundaries, and observation construction visible in production code.
- Use the twelve-part implementation map. This captures code well but separates some concerns more finely than the current research evidence justifies.
- Use product or framework families. These are useful for sampling but poor at extracting transferable design knowledge.
- Replace familiar vocabulary entirely with the responsibility map. This would make source discovery and human navigation unnecessarily abstract and could hide source-native terminology.

### Consequences

Recon records source-native vocabulary and searches through query families rather than responsibility names alone. Case studies apply the responsibility lens without assigning a system to one exclusive category. Each case records boundaries that blurred, mechanisms that spanned categories, missing concepts, and forced classifications. Checkpoint 3 consolidates that friction and proposes evidence-driven revisions.

Checkpoint 2 must present a bounded batch with a responsibility-coverage matrix. Every open case must specify repository, tag/release, exact commit, date, documentation alignment, and lineage risk. One closed production case will be included deliberately; the maintainer will provide Claude Code material, and its evidence mode and unknowable internals will remain explicit.

### Approval record

The maintainer approved the revised three-layer direction and Checkpoint 2/3 conditions on 2026-07-11. On 2026-07-12, after reconstruction produced 24 declared claims, 50 verified claim/source/location mappings, and a passing fixed promotion audit under the explicit waiver, the maintainer provisionally promoted Checkpoint 1 and authorized bounded Checkpoint 2 selection.

This is approval of the research direction, not validation of the eleven-responsibility lens. The reconstruction limitation must remain in later summaries until a complete cycle revalidates the landscape. Checkpoint 3 taxonomy-friction reports remain the acceptance test for revising, retaining, merging, or splitting responsibilities.

## D-003 — Instrumented research provenance before further subject research

**Status:** Approved
**Date:** 2026-07-11

### Decision

Pause new subject-matter recon and deep dives until the project has a validated minimum provenance capture path. Capture the full research funnel: searches executed, results returned when available, sources opened, locations and reading depth, disposition as read-only/referenced/excluded, and claim use.

Maintain lightweight catalog/event entries for every opened source. Require full narrative source records only for sources referenced by analysis or synthesis. Map every material claim through a stable claim ID to supporting and, when applicable, opposing source records.

Use globally unique artifact/claim IDs. Require a primary verification event for every referenced claim/source/location mapping before provisional promotion; subagents cannot verify their own evidence. Incomplete provenance may support individually verified claims but cannot establish breadth, balance, absence of evidence, marginal information, or saturation.

Generate a human-readable cycle source audit and a global coverage view from canonical append-only events. Report source-channel and query coverage, host/type/organization/lineage distributions, repository inspection depth, concentration warnings, dispositions, missing records, claim coverage, and provenance completeness.

First investigate native Codex tool-event or transcript ingestion. If unavailable, build a logged research gateway or adapters. Manual logging is allowed only for bootstrap, emergency, and declared manual sources; it cannot justify a claim of complete provenance.

### Why

Cycle 1 exposed a structural failure rather than merely seven missing records. The workflow allowed prose to be synthesized before the durable evidence ledger was complete, counted source records rather than claim coverage, treated direct live links as an escape from the source lifecycle, and lacked an artifact proving primary verification of subagent evidence. Manual discipline alone cannot establish accurate coverage because it cannot detect unlogged reading.

Tool-level capture is required to answer what was searched, returned, opened, inspected, used, or systematically neglected. It also lets the maintainer distinguish search bias, selection bias, shallow repository screening, and legitimate source concentration.

### Required completeness labels

Every cycle declares `complete`, `complete_with_declared_manual_sources`, `partial`, `reconstructed`, or `unknown`. Cycle 1 is `reconstructed`; exact query bundles were recovered, but complete result windows and all screening decisions cannot be recovered.

### Validation requirement

The minimum system must be tested with returned-but-unopened, read-only, excluded, and referenced sources. Its audit must expose source concentration, planned-versus-actual channels, repository inspection depth, missing claim evidence, and unpinned implementation claims.

### Consequences

The provenance system becomes immediate research infrastructure rather than a deferred dashboard feature. Canonical data may be machine-oriented; human Markdown and later HTML views are generated from it and cannot become separate sources of truth. Cycle 1 will be reconstructed honestly and re-presented before Checkpoint 2.

### Approval record

Approved by the maintainer on 2026-07-11 with the instruction to update all governing artifacts consistently before building and testing the capture path.

## D-004 — Native transcript reconciliation plus semantic research events

**Status:** Approved — bounded Cycle 1 reconstruction authorized and completed
**Date:** 2026-07-11

### Decision

Use persisted Codex rollout JSONL for desktop work and `codex exec --json` streams for deliberately launched non-interactive workers as the technical completeness backstop. Keep append-only canonical research events for semantics the native transcript cannot determine reliably: query intent and family, observed result identity, inspection extent and surfaces, disposition, claim use, exact evidence location, version state, and primary verification.

Require every complete cycle to declare a native capture boundary. Every research-capable native interaction inside it must be linked to canonical events or explicitly classified as non-research with a reason. Native observations contain transcript offsets and hashes, not raw prompts or outputs. Unrecognized and generic shell interactions fail closed into reconciliation review.

Generate JSON and Markdown audits from canonical events. Promotion remains blocked by schema failures, missing dispositions or source records, unsupported claim mappings, absent primary verification, unpinned implementation claims, unreconciled native interactions, capture-count mismatches, or unexplained concentration and coverage warnings.

### Acceptance conditions and tripwire

The capture path is not minimum viable unless searches, observed results, opened sources, native links, and repository-inspection facts are derived automatically from ordinary research-tool use. The researching agent may make semantic judgments—inspection depth, disposition, claim use, and verification—in one batch, but must not hand-author per-search, per-result, or per-open bookkeeping. The bounded validation reports manual capture actions separately from semantic decisions.

Canonical research events remain runtime-agnostic. Runtime-specific parsing lives behind adapters, and a runtime switch without a verified adapter forces `partial` provenance rather than silently claiming completeness.

This authorization permits one remediation iteration. If an end-to-end bounded web search plus repository inspection cannot meet the near-zero-overhead criterion, stop and present native-adapter and gateway/MCP alternatives to the maintainer instead of extending Stage 0.5.

### Why

The installed Codex runtime already persists structured per-thread rollouts containing tool calls and outputs, and the CLI exposes a JSONL stdout mode. These native records can detect research interactions that explicit agent-authored events omit. Explicit events remain necessary because a transcript does not know whether a source was screened or read deeply, why it was excluded, or which exact claim it supports.

This hybrid closes the structural gap without forcing all research through a new gateway or depending on the experimental app-server protocol. It preserves the Codex desktop workflow and can later accept richer gateway, hook, or app-server adapters.

### Alternatives considered

- A logged gateway as the sole research interface. It produces clean records but cannot detect external sources reached through other Codex tools, connectors, shell commands, or local files.
- App-server interception. It is rich and live, but experimental and operationally heavier than post-turn rollout ingestion.
- Hooks alone. Their full coverage was not established during bootstrap, and hook events still would not supply semantic source disposition or claim use.
- Manual event discipline without native reconciliation. This repeats the Cycle 1 failure mode because omitted interactions are invisible.

### Validation result

The bounded failing fixture is blocked and exposes returned-but-unopened sources, all three opened-source dispositions, missing planned-channel coverage, host concentration, shallow repository inspection, missing full source records, missing verification, an unpinned implementation claim, and an unreconciled native interaction. The corrected fixture passes only after records, pins, verification, native links, and warning explanations are present.

The authorized real-thread test then used one ordinary official-documentation search, one ordinary fetch, and one ordinary local repository inspection. The Codex adapter derived the search, three observed results, source open and conservative inspection, repository path/surfaces/commit, native links, and capture boundary automatically. One semantic batch supplied inspection depth and disposition. The audit re-read and hashed the immutable transcript prefix, verified every native input/output fingerprint, found zero unreconciled research interactions, and passed with `manual_capture_actions = 0` and `semantic_batch_actions = 1`.

The approval closeout separated the factual hook-coverage claim from the project’s engineering recommendation, assigned canonical claim IDs, mapped both to the exact section, recorded primary verification, and attested the prose against the canonical ledger. A mandatory review-scope manifest now prevents a scoped material artifact from bypassing claim gates merely because its registration was omitted; maintainer review must still check that the scope itself is complete. Surface values are schema-enforced, authority is separate, and repository reporting distinguishes GitHub source-funnel totals from local repository observations.

The mandatory Cycle 1 preflight exercised 38 real observations from the Stage 0.5 implementation session. Thirty-six were resolved automatically. Two generic runtime-tool-inventory interactions required review and were resolved in one append-only batch, leaving 11 linked, 27 `not_research`, and zero unresolved observations. Human judgment touched 5.3% of observations in one action, rather than scaling one-for-one with the interaction stream.

**Post-approval bounded correction:** Independent review of the retained transcript showed that one automatically linked preflight search had a runtime-truncated, unparseable output. The historical event incorrectly asserted zero results and no truncation. That event remains preserved; an append-only search update now records unknown counts and `incomplete_truncated`, so the effective preflight audit blocks rather than presenting complete result capture. The 36/38 automatic-resolution overhead measurement is independent of returned-result completeness and remains valid. The adapter now distinguishes parsed zero, parsed results, explicit truncation, and other unparseable output, and no longer invents purpose or coverage intent. D-004 remains approved because the architecture and original parsed acceptance window are unchanged.

The retention implementation and fixtures prove exact-prefix archiving, owner-only permissions, archive-only regeneration after runtime deletion, and fail-closed tamper handling. After the maintainer explicitly approved writes under `/Users/jernotte/dev/reference-materials/research`, the real 1,641-line acceptance prefix was archived with mode `0600`. Its 5,434,209 bytes match boundary SHA-256 `fd4a1895c9a1600a819ee7cca0b1f95df6c22e15cb46d49096870c1152147414`, and the archive-enforced audit passes with no errors or warnings.

The one-iteration tripwire was not triggered. This establishes the minimum path for the tested Codex MCP-plus-shell window, not universal runtime coverage. Other runtimes require their own adapter validation or incomplete provenance.

The implementation and detailed limitations are documented in `docs/provenance-architecture.md`. The completed validation establishes D-004 as the approved minimum for the tested Codex runtime. No subject-matter research or Cycle 1 reconstruction began during closeout.

### Approval record

Approved on 2026-07-11 under the maintainer’s instruction to record Stage 0.5 approval if all closeout criteria passed. The maintainer subsequently authorized persistent writes under `/Users/jernotte/dev/reference-materials/research`; the archive-enforced acceptance gate then passed. This approval accepts D-004 as the minimum provenance architecture. It does not by itself waive the requested pause before Cycle 1 reconstruction.

### Transition record

On 2026-07-12, the maintainer explicitly authorized bounded Cycle 1 reconstruction from existing evidence only. The authorization excluded new recon, source collection, deep dives, case studies, Checkpoint 2 selection, provenance waivers, and implementation of deferred hardening. Reconstruction completed under those boundaries; the later Checkpoint 1 decision granted the waiver and promotion recorded in D-002 and D-005.

The historical truncated-search preflight remains honestly blocked, while its 36/38 automatic-resolution overhead finding stands. The final closeout implemented monotonic `search_update` transitions and the fixed promotion profile before authorizing Checkpoint 2 selection; D-005 records the policy and infrastructure freeze.

## D-005 — Final provenance safeguards and infrastructure freeze

**Status:** Approved
**Date:** 2026-07-12

### Decision

Make `search_update` result-capture transitions monotonic: updates may preserve or weaken effective capture status, but cannot strengthen it or rewrite evidence already classified complete. Surface every update and whether it was applied or rejected in the generated audit.

Use the named `provisional-promotion` audit profile for maturity promotion. The profile automatically requires review scope and, for complete provenance, durable transcript retention. Diagnostic audits remain available without promotion-only gates.

Freeze provenance infrastructure after these safeguards pass. Future changes require a consequential failure observed during real research. Minor cataloging or reporting imperfections that cannot materially change a research conclusion are accepted; speculative hardening, dashboards, additional adapters, heuristics, and architectural refactors are deferred.

### Why

The safeguards close the two remaining paths to a false PASS without expanding the architecture. A monotonic update rule is safer and smaller than a general evidence-correction framework. A named profile prevents callers from weakening promotion by forgetting flags. Freezing the system redirects effort to the harness research it exists to support.

### Consequences

An incomplete search can become complete only through a newly captured, mechanically verified interaction—not through `search_update`. The reconstructed Checkpoint 1 audit uses `provisional-promotion`; Stage 0.5 acceptance and historical preflight audits retain their purpose-specific diagnostic invocations. Checkpoint 2 selection may begin, but deep dives remain subject to its maintainer checkpoint.

### Approval record

Approved by the maintainer on 2026-07-12 as part of the Checkpoint 1 waiver, provisional promotion, and provenance-freeze closeout.

## D-006 — First deep-dive set and single-case pilot

**Status:** Approved — Pi pilot only
**Date:** 2026-07-12

### Decision

Select a six-case first batch: Pi, OpenHands Software Agent SDK, LangGraph, Browser Use, OpenClaw, and Claude Code. Treat Claude Code as conditional until the maintainer supplies an independently enumerable evidence set. Authorize only the Pi case as a pilot and pause for an alignment review before any other batch member begins.

Use these immutable open-case boundaries:

- Pi `v0.80.6` at `2b3fda9921b5590f285165287bd442a25817f17b`;
- OpenHands Software Agent SDK `v1.35.0` at `9028562e2d5eda76de662ec9b7584125760eb83f`;
- LangGraph `1.2.5` at `7ab79f9f3e94fb4357334d902f5fd69ec0088eb4`;
- Browser Use `0.13.4` at `68afe46456a23009a7d5eec2017ec7ab51b7c027`;
- OpenClaw `v2026.6.6` at dereferenced commit `8c802aa683510c7f7503597b54c3021733245e59`.

### Why

The portfolio preserves five contrasts with six cases: compact versus platform-scale coding harnesses; model-directed versus explicitly programmed control; coding versus perception-grounded browser work; short interactive runs versus long-lived operational lifecycle; and open implementation evidence versus a closed production case. Six is the smallest proposed set that preserves all five contrasts. Pi is the pilot because its tagged repository presents the agent runtime, provider layer, coding CLI, state management, and containment boundary together within a comparatively bounded project.

The responsibility matrix is explicitly a hypothesis for Checkpoint 3, not evidence that these systems implement the expected mechanisms. Responsibility 11 remains weak rather than being padded with an unadmitted adaptation lead.

### Alternatives considered

- Replace Pi with smolagents `v1.26.0` to emphasize code-as-action. This gives up the compact coding-harness pilot chosen to test the full case method.
- Replace LangGraph with STORM `v1.1.0` to emphasize a research pipeline. This improves domain diversity but removes the cleanest general programmed-control counterpoint.
- Replace Pi or OpenHands with SWE-agent `v1.1.0` to align code with published ACI evidence. This increases coding-agent concentration.
- Use five cases by dropping OpenClaw or Browser Use. That leaves lifecycle or observation/environment contrast materially weaker.
- Begin the entire batch after approval. This magnifies early schema or taxonomy drift before the maintainer can inspect one real case.

### Consequences

Only Pi begins. It produces one case study, claim ledger, source audit, and responsibility-friction report, then pauses for maintainer alignment. The other cases remain selected but unauthorized. Repository-contained documentation is aligned to the exact tag; live documentation must be separately dated. Claude Code may support declared or observed behavior only and cannot be used to invent internal architecture.

The case program begins from concrete implementations to ground the research in mechanisms that are actually used, but it does not treat adoption as proof of quality. Each case compares consequential practices with relevant academic research, controlled evaluations, benchmarks, and credible operational evidence. Alignment may strengthen a conditional pattern; disagreement must be preserved and investigated for differences in models, tasks, versions, metrics, budgets, production constraints, or unsupported convention. Recon may reopen whenever a case exposes a gap or contradiction.

The provenance infrastructure remains frozen. The selection pass required explicit canonical authoring for generic web results despite complete native reconciliation; this overhead is recorded as a limitation, not used to reopen D-005 because it did not materially affect a research conclusion.

The generated audit proves interaction reconciliation but does not bind the contents of manual `result_returned` events to native output. Before approval, the primary agent compared all 35 manually recorded canonical URLs and both batched query strings against the three retained transcript archives; every value was present. Until a consequential real-research failure justifies a D-005 freeze exception, any later checkpoint relying on manual result events must repeat and record that archive comparison. If search-heavy work makes the check materially expensive or unreliable, the work pauses for a maintainer decision. This decision does not preauthorize a generic-web adapter or a new audit rule.

### Approval record

The maintainer approved D-006 on 2026-07-12 after directly reviewing the selection logic, implementation-grounded progression, responsibility lens, and planned relationship between case evidence and academic or empirical research. The maintainer required the R1–R11 reference to be made self-contained and emphasized that cases must preserve and investigate agreement and disagreement between deployed practice and research evidence. An external review separately verified all eight pins, the selection audit, archive integrity, and the 35 manual result URLs. Only the pinned Pi pilot is authorized. Claude Code remains conditional, and OpenHands SDK, LangGraph, Browser Use, OpenClaw, and every alternate remain blocked until the post-Pi alignment review or a later explicit decision.
