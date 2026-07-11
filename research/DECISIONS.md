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

**Status:** Conditionally approved — remediation required before Checkpoint 2
**Date:** 2026-07-10; revised and conditionally approved 2026-07-11

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

The maintainer approved the revised three-layer direction and Checkpoint 2/3 conditions on 2026-07-11. Final Checkpoint 1 promotion remains blocked until the minimum provenance capture path is built and validated, Cycle 1 sourcing is reconstructed and audited, unsupported claims are corrected or admitted as evidence, and the remediated package is reviewed. Work authorized before then is methodology maintenance and provenance infrastructure, not deep-dive selection.

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

Every cycle declares `complete`, `complete_with_declared_manual_sources`, `partial`, `reconstructed`, or `unknown`. Cycle 1 is `reconstructed`; its exact subagent queries and all screened results cannot be recovered.

### Validation requirement

The minimum system must be tested with returned-but-unopened, read-only, excluded, and referenced sources. Its audit must expose source concentration, planned-versus-actual channels, repository inspection depth, missing claim evidence, and unpinned implementation claims.

### Consequences

The provenance system becomes immediate research infrastructure rather than a deferred dashboard feature. Canonical data may be machine-oriented; human Markdown and later HTML views are generated from it and cannot become separate sources of truth. Cycle 1 will be reconstructed honestly and re-presented before Checkpoint 2.

### Approval record

Approved by the maintainer on 2026-07-11 with the instruction to update all governing artifacts consistently before building and testing the capture path.
