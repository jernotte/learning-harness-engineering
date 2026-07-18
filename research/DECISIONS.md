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

**Status:** Approved; execution sequence later amended by D-007 and D-009
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

## D-007 — Pi pilot method and next-case authorization

**Status:** Approved
**Date:** Proposed 2026-07-12; approved 2026-07-16

### Proposed decision

Accept the Pi v0.80.6 pilot as analyzed evidence and approve its case method for the next implementation: trace source-native control flow first, compare consequential mechanisms with narrowly relevant outcome evidence, and apply R1–R11 afterward as a friction diagnostic rather than as eleven narrative headings.

Keep the taxonomy unchanged. Carry the Pi observations in `research/TAXONOMY-FRICTION.md` into the remaining batch: R1 may need explicit nested lifecycle scales, extension or policy-injection surfaces may be a cross-cutting dimension, and the R2/R3/R5 and R5/R6 boundaries need cross-case testing. Treat these couplings as multi-label friction, not a reason to force exclusive ownership after one case.

Authorize the pinned OpenHands Software Agent SDK case next, at D-006's exact boundary, then pause only if it exposes a material method, taxonomy, or provenance failure. Claude Code remains conditional and every other authorization remains subject to the maintainer's explicit scope decision.

### Why

The Pi case follows the production path across three packages, distinguishes retained state from active context and runtime recovery from task verification, preserves absence and unsupported-practice findings, and uses external research to qualify rather than decorate implementation observations. Fifteen canonical claims have nineteen verified mappings, and the complete audit passes. The narrative is more readable when organized by mechanisms and control flow than when organized by responsibility IDs.

The pilot also exposes genuine limitations without requiring a taxonomy rewrite. Pi is only one compact coding harness; its extension system and nested lifecycle may not recur in the same form. OpenHands is the best next contrast because its SDK/workspace and event/view architecture tests whether the method scales beyond a compact session orchestrator.

### Alternatives

- Require revisions before another case. Choose this if the maintainer finds the case too dense, insufficiently deep, or hard to audit.
- Authorize the whole remaining open batch immediately. This is faster but gives up the opportunity to test whether the method scales to a platform-sized second case.
- Replace OpenHands with LangGraph. This tests programmed control sooner but postpones the compact-versus-platform contrast selected for early method validation.

### Consequences if approved

Pi becomes a reviewed case only after the maintainer records the review basis and outcome; this proposal does not self-promote it. The implementation method remains stable for OpenHands, while taxonomy friction accumulates for Checkpoint 3. The reconstructed-provenance caveat continues to travel with claims that depend on the Cycle 1 landscape, but the Pi implementation evidence itself has complete provenance.

The Pi pass required 27 manually represented generic-web interaction events in one batch, with all URLs and query strings verified against the retained archive. This is recorded overhead, not a provenance redesign trigger for the completed pilot. The existing D-006 trigger still blocks new search-heavy instrumented recon until its adapter condition is satisfied or the maintainer makes a new decision.

### Approval record

The maintainer approved D-007 on 2026-07-16, accepted Pi as a reviewed case, and authorized the pinned OpenHands Software Agent SDK case next. The review basis was the maintainer's direct assessment of the case, claim ledger, audit, and taxonomy-friction record, informed by an external review that independently checked representative load-bearing claims against the pinned source, regenerated the audit, rechecked all manual result URLs against the retained archive, and reran the validation suite. The Pi friction findings remain provisional questions for cross-case comparison; no taxonomy revision was approved.

## D-008 — Recover unified-exec provenance for the OpenHands case

**Status:** Approved and completed
**Date:** 2026-07-16

### Observed consequential failure

After the Codex restart, the OpenHands case used the current unified `exec` tool envelope for ordinary shell, repository, web, and project operations. The first native-transcript ingestion captured 56 observations, but the frozen adapter derived only six repository events. Thirty-nine observations remained unreconciled because the adapter saw the outer `exec` call without unwrapping the nested tool invocation. The six derived repository events incorrectly used the research workspace path rather than `/Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0`, even though one happened to carry the OpenHands commit.

The promotion-profile audit therefore blocks with 41 errors: missing review scope, one error for each of the 39 unreconciled observations, and an incomplete semantic package. Recovering the case manually would require classifying and linking ordinary interactions approximately one-for-one, violating D-004's near-zero-overhead criterion and the OpenHands goal's explicit stop condition.

This is a consequential failure observed during real research, not speculative hardening. It prevents a deeply inspected implementation from producing a trustworthy source and claim audit and can misattribute external repository evidence to the local project.

### Proposed decision

Invoke the narrow D-005 freeze exception only to teach the Codex rollout adapter to unwrap the current unified `exec` envelope and pass nested calls through the already approved derivation and reconciliation rules. The minimum correction should:

- recognize nested `exec_command` and generic web-search/open calls;
- derive the actual nested working directory, repository path, commit, and inspected surfaces;
- preserve fail-closed treatment for unknown nested shapes;
- re-ingest the retained OpenHands transcript window rather than rerun or expand the research;
- add fixtures for this exact post-restart envelope and path-attribution failure;
- make no schema, audit-policy, UI, or general provenance redesign.

After the adapter passes focused and existing tests, resume only the OpenHands provenance closeout: semantic batch, archive, generated audit, case validation, and maintainer checkpoint.

### Alternatives

1. **Manual reconstruction of all 39 observations.** This could close the current audit but makes bookkeeping scale with ordinary interactions and would normalize the failure D-004 was built to prevent. Not recommended.
2. **Mark the case partial and request a provenance waiver.** The draft claims can remain readable, but source-coverage and interaction-completeness assertions would be unavailable. This is disproportionate when the full native transcript survives and the adapter mismatch is identifiable. Not recommended.
3. **Discard and repeat the case through a compatible runtime path.** This wastes completed analysis, may not be possible in the current desktop runtime, and adds no research value. Not recommended.
4. **Narrow adapter recovery from the retained transcript.** This preserves ordinary workflow, reuses existing architecture, and confines the exception to a demonstrated runtime shape. Recommended.

### Consequences if approved

The provenance freeze remains in force outside this exact runtime compatibility fix. No subject research, new source discovery, case expansion, or new harness begins during remediation. D-007 and the reviewed Pi boundary remain unchanged. Under this decision the OpenHands draft would remain unpromoted until re-ingestion and all existing promotion gates passed.

### Approval and implementation record

The maintainer approved D-008 on 2026-07-16 after the agent explained that the failure was confined to post-restart unified-`exec` compatibility. The implementation recognizes the exact nested `exec_command` and generic `web__run` search/open forms used by the retained case, resolves literal and shared-variable working directories, attributes repository events to the external checkout, binds internal web markers bidirectionally, derives returned URLs mechanically, and leaves unknown nested shapes unreconciled. Focused fixtures cover JSON-style calls, batched `wd` calls, `git -C` path attribution, generic search/open, internal marker reconciliation, and an unknown nested call.

Re-ingestion used the retained subject window ending before the first provenance-capture command, so the adapter correction did not rerun or expand research. The final window contains 55 native observations: all 55 resolve automatically, including 49 linked research-capable observations and six automatic non-research classifications. It yields 43 repository inspections at the correct paths, one complete two-query search with nine mechanically captured results, and two paper opens. The complete OpenHands audit passes with 17 claims, 28 mappings, 28 primary verifications, one resolved concentration warning, and an exact-prefix archive. The provenance freeze is reinstated; this approval does not authorize further adapter work.

## D-009 — Accept OpenHands, defer LangGraph, and authorize OpenClaw

**Status:** Approved
**Date:** Proposed and approved 2026-07-16

### Decision

Accept the OpenHands SDK v1.35.0 package as a maintainer-reviewed case. Preserve the eleven-responsibility taxonomy unchanged. Carry the recurring lifecycle-scale, R2/R3/R5, R5/R6, and cross-cutting-extension questions forward, and add the R9 runtime-integrity-versus-task-success-verification question to the Checkpoint 3 evidence set.

Do not analyze LangGraph as a harness under the current case question. Its framework supplies mechanisms whose policy is chosen by an application, so the existing template would produce a primitive inventory rather than a comparable account of one concrete harness. Defer LangGraph to a future framework/substrate comparison with a framework-appropriate question. Record framework-versus-application control ownership as taxonomy friction, but do not revise the canonical lens. Do not replace the LangGraph slot now.

Preserve D-006's contrast-oriented sampling rationale pending more evidence; do not adopt a popularity-first or convergence-cohort resequencing. Authorize only OpenClaw `v2026.6.6` at dereferenced commit `8c802aa683510c7f7503597b54c3021733245e59` next. Require a written scope boundary before deep analysis. After OpenClaw, pause for an interim maintainer sampling-strategy review that considers the existing sequence, an adoption-weighted cohort, a lineage comparison such as Hermes, and Browser Use as the next contrast. This review does not constitute Checkpoint 3 and does not silently redefine the batch.

### Why

OpenHands kept the case method readable and evidence-disciplined at platform scale. Its strongest contribution is the consistent distinction between default execution behavior and optional platform capability. Its complete audit, pinned implementation boundary, 17-claim ledger, 28 verified mappings, and source records support promotion, while its outcome limits remain explicit.

The original LangGraph selection already identified framework fit as its principal risk. Subsequent maintainer review made that risk decisive: Responsibilities 2, 3, 5, 6, and 9 would mostly be answered by “the application decides,” which is a different research object from Pi and OpenHands. OpenClaw remains inside the approved D-006 portfolio and is justified without changing sampling strategy: it provides the long-lived lifecycle, ingress, channel, scheduling, and persistent-operation contrast the first two cases do not.

The maintainer considered but did not approve a wholesale move toward popularity-first sampling. Adoption may later become an explicit selection dimension, but it requires operationalized evidence and lineage analysis; implementation repetition is not independent corroboration. Because OpenClaw is the next case under both the existing contrast rationale and an adoption-aware rationale, it can proceed without resolving that larger strategy question prematurely.

### Alternatives considered

- Analyze LangGraph next as originally proposed. Rejected for the current batch because it is a framework/substrate rather than one opinionated harness; retain it for a dedicated comparison.
- Replace LangGraph with a LangGraph-built harness. Deferred: no replacement is needed to authorize OpenClaw, and choosing one now would reopen selection without sufficient benefit.
- Resequence immediately around OpenClaw, Hermes, and popular coding harnesses. Deferred: this reverses D-006's concentration and contrast protections before adoption criteria, lineage confounds, and counterexample timing are resolved.
- Analyze Browser Use next. Still a valid contrast and a leading candidate after OpenClaw, but OpenClaw is already pinned and uniquely strengthens lifecycle and persistent-operation coverage.

### Consequences

OpenHands is a reviewed case based on the maintainer's direct review and the external verification described below. LangGraph remains selected historically in D-006 but is removed from the active concrete-harness sequence and gains no replacement. Only OpenClaw is authorized; Browser Use, Claude Code, Hermes, every alternate, and all other cases remain blocked. Claude Code remains conditional on a bounded, dated, maintainer-supplied evidence set. No cross-harness synthesis, taxonomy revision, or Checkpoint 3 promotion begins.

D-008 remains approved as the first consequential D-005 freeze exception. Its correction was narrowly limited to the observed unified-`exec` runtime envelope, the infrastructure is frozen again, and the remaining generic-web/search-heavy-recon requirement stays open until tested at the appropriate scale.

### Approval record

The maintainer approved D-009 on 2026-07-16 after directly reviewing the OpenHands deliverables and considering an external review that verified representative load-bearing claims against the pinned source, regenerated the audit, and reran validation. The maintainer also considered an adversarial review of the proposed sampling-strategy change and explicitly declined both a LangGraph-built replacement and a popularity-first resequencing. The accepted decision authorizes OpenClaw only and requires an interim sampling review after that case.

## D-010 — Accept OpenClaw and choose the next sampling direction

**Status:** Approved
**Date:** Proposed 2026-07-16; approved 2026-07-17

### Decision

Accept OpenClaw v2026.6.6 as the third maintainer-reviewed implementation case after explicitly reconciling C003 with Telegram's configured `after_agent_dispatch` acknowledgement policy. The clarification preserves C003 as a moderate-confidence inference: the tracker maps successful middleware-chain completion to that stage, buffered handlers can return before timer-driven dispatch, and polling then deletes the claimed spool record, but no crash reproduction or incidence measurement was performed. Preserve the canonical eleven-responsibility taxonomy unchanged and carry TF-001 through TF-007 into Checkpoint 3.

Authorize only Browser Use `0.13.4` at commit `68afe46456a23009a7d5eec2017ec7ab51b7c027` next. Require a written scope boundary before deep analysis. Browser Use tests perception-grounded action and observation, environmental drift, and the still-open R5/R6 boundary under a less symbolic environment. This authorization does not begin the case, authorize any other implementation, validate the taxonomy, or permit cross-harness synthesis.

### Rolling-selection precedence

D-006's portfolio criteria remain in force. When ordering or replacing later cases, use the following precedence as structured judgment rather than a numeric score:

1. Expected marginal information gain on uncovered or high-friction responsibilities.
2. Falsification value and protection against conclusions anchored in the earliest cases.
3. Evidence quality, versionability, and readiness for a defensible case.
4. Evidence-mode, domain, environment, and control-allocation diversity.
5. Analysis cost and governance cost relative to expected learning.
6. Lineage and independence risks that could make apparent recurrence non-independent.
7. Operationalized adoption evidence, not raw popularity, repository attention, or presumed team size.

A later sampling pivot must state which criterion changed, which evidence supports the change, or which higher-priority criterion now outweighs the previous decision. Maintainer feedback remains authoritative, but it does not erase the burden to explain a reversal against the recorded criteria.

### Batch completion and Checkpoint 3 trigger

Browser Use is the final unconditional case before Checkpoint 3. At the Browser Use maintainer review:

- if the Claude Code evidence set has already been enumerated, dated, bounded, and admitted, the maintainer may explicitly authorize Claude Code as the final pre-Checkpoint-3 case; after its review, convene Checkpoint 3;
- otherwise, formally defer Claude Code and convene Checkpoint 3 immediately after Browser Use.

Do not add a replacement case before Checkpoint 3. This trigger resolves the ambiguity created when LangGraph was removed from the concrete-harness sequence; it does not claim that four cases establish saturation or prevent later analysis.

Checkpoint 3 must compare TF-001 through TF-007 and deliberately decide the target-test execution policy that the first three cases left implicit. The candidate baseline is to inspect pinned tests by default, authorize focused execution only when it resolves a load-bearing ambiguity, avoid making full upstream suites a promotion requirement, and record what was and was not executed. Until that review, the existing rule requiring explicit authorization for behavioral checks remains controlling.

### Why

The OpenClaw scope held despite the repository's breadth. The case traces one message through durable channel ingress, routing and session policy, the embedded model/tool loop, transcript and session persistence, and final delivery, then uses targeted inspection for memory, scheduling, subagents, hooks, recovery, and QA. Its central findings are architectural rather than a feature inventory: one turn crosses several transaction boundaries; default-account DMs can share a durable main-agent session; model-directed action is bounded by programmed replay, liveness, timeout, and compaction policy; and optional memory adaptation is not the same as outcome optimization.

An adversarial review found that C003's original prose omitted an apparent safeguard visible in its own evidence. Primary reinspection showed that the safeguard's name did not overturn the claim: `finishUpdate(completed: true)` advances the tracker's `agent_dispatch` acknowledgement stage when the middleware chain returns, including buffered branches that dispatch later from process-local timers. The case, source record, canonical declaration, exact mapping, verification notes, and prose attestation were corrected before promotion. The claim remains an inference because the crash consequence was not behaviorally reproduced.

The resulting complete package contains 20 declared claims, 31 claim/source/location mappings, 31 primary verifications, ten referenced source records, three archive-verified transcript boundaries, no unresolved observation, and no blocking error. Its one warning is resolved by keeping Browser Use at selection depth. Implementation presence establishes architecture, never effectiveness.

Browser Use is the strongest next discriminating case under the approved precedence because Pi, OpenHands, and OpenClaw primarily expose structured tools or events despite their different lifecycle and state designs. A browser harness supplies a direct falsification opportunity through perception, page-state projection, action grounding, observation loss, and recovery from environmental drift. Adoption-weighted replication, Hermes lineage, a programmed-control replacement, and Claude Code remain legitimate later choices, but none currently provides greater information gain without an unresolved admission, lineage, or selection decision.

### Alternatives retained

- **Adoption-weighted cohort.** Potentially useful for common-practice and replication questions, but it requires operationalized adoption evidence and explicit treatment of shared lineage, provider constraints, and ecosystem compatibility.
- **Hermes lineage.** Potentially useful for descent and deliberate divergence, but it must be framed as lineage rather than independent convergence and needs a separately verified pin and relationship boundary.
- **Concrete programmed-control harness.** Still relevant after LangGraph's reclassification, but selection is deferred until Checkpoint 3 rather than silently replacing the vacated slot.
- **Claude Code.** The intended closed-production contrast, still blocked on the maintainer-supplied bounded evidence set and the explicit branch at the Browser Use review.
- **Stop before Browser Use.** Rejected because the current method is working and Browser Use addresses a material environment/observation gap without broadening the batch.

### Consequences

OpenClaw is a reviewed finding. Browser Use alone is authorized, scope-first, at the existing immutable pin. LangGraph remains deferred, Claude Code remains conditional, Hermes remains a lineage candidate, and no adoption cohort or replacement case is added. The provenance infrastructure remains frozen. The reconstructed Cycle 1 limitation continues to travel into any artifact that relies on the original landscape.

### Approval record

On 2026-07-17, the maintainer accepted the adversarial review and the primary agent's independently justified response. The review basis included external verification of the pinned checkout and representative claims, regeneration of the complete audit and validation suite, direct identification of C003's omitted `after_agent_dispatch` countermechanism, and primary reinspection of the tracker, buffered-handler, dispatch, and spool-deletion paths. The maintainer approved the C003 reconciliation, the rolling-selection precedence, Browser Use as the only next case, the hard Checkpoint 3 trigger, the target-test policy question for that checkpoint, and the Claude Code evidence deadline at the Browser Use review.
