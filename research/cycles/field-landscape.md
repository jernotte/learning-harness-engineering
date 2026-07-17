# Research Cycle: The Architectural Landscape of Modern Harnesses

**Status:** Checkpoint 1 provisionally promoted under reconstructed-provenance waiver
**Current phase:** Pi and OpenHands SDK reviewed; OpenClaw authorized next after goal-prompt approval
**Governance:** Early alignment
**Provenance status:** Landscape recon remains `reconstructed`; the Pi and OpenHands case logs are `complete`. Exact Cycle 1 query bundles were recovered from three rollout files, while complete provider result windows, result ranks, all screening decisions, and exact inspection depth for report-only leads remain unrecoverable

## Decision-oriented question

What architectural responsibilities and design decisions make up a modern language-model harness when model weights and tokenization are treated as fixed?

The answer should give a harness builder a durable map for locating mechanisms, comparing implementations, diagnosing capability differences, and deciding where an intervention belongs. It should not merely enumerate features shipped by familiar products.

## Scope and selection dimensions

The cycle covers developer-controlled orchestration between a model and its task environment: control loops, context and prompts, tools and feedback, state, planning, delegation, workflows, routing, verification, evaluation, and improvement mechanisms. Adjacent infrastructure belongs only when it changes those responsibilities.

Recon will sample several agent domains; open and closed systems; production harnesses and research prototypes; recent and foundational sources; implementations, documentation, papers, benchmarks, and credible practitioner accounts; model-driven and code-driven control flow; and positive, negative, and contested findings. These are diversity dimensions, not quotas.

The landscape was derived through complementary academic, implementation, and production-documentation passes and compared with `outline.md` after candidate axes emerged. The passes were separately executed but shared the same project framing; they are not independent corroboration.

## Recon map

The recon produced the provisional synthesis in `research/syntheses/field-landscape.md`. Its central proposal is to study harnesses as allocations of control, state, capability, and evidence rather than as flat feature lists or collections of anthropomorphic faculties. Maintainer review established that this responsibility map should be an analytical lens rather than the sole research taxonomy.

### Three-layer organization

1. Source-native terms and aliases drive searches and human navigation.
2. The responsibilities below form a multi-label comparison and diagnosis lens.
3. A later field guide and curriculum will derive a smaller human-facing narrative from reviewed findings.

### Candidate responsibilities

1. Run lifecycle and ingress
2. Model and instruction policy
3. Active-context and capability construction
4. Control flow and execution semantics
5. Action and environment mediation
6. Observation and feedback construction
7. Durable state and persistence
8. Decomposition, coordination, and aggregation
9. Verification, recovery, and control boundaries
10. Observability and external evaluation
11. Adaptation and optimization across runs

Every later comparison should also ask who owns control, over what time horizon, with what state isolation, authority and budget, failure semantics, model/version dependency, and position relative to the optimized loop.

### Terminology and aliases

| Architectural question | Terms encountered |
| --- | --- |
| Repeated model/environment interaction | agent loop, run loop, turn loop, inference loop, ReAct loop, trajectory |
| Model-facing action interface | tool, function, command, action, ACI, extension, computer interface |
| Programmed control | workflow, graph, flow, recipe, pipeline, executor network, state machine |
| Durable progress | session, thread, checkpoint, event stream, run state, conversation state, rollout |
| Context reduction | compaction, condensation, compression, summarization, masking, history processing |
| Delegation | subagent, handoff, agent-as-tool, worker, managed agent, summon |
| Procedural packaging | skill, recipe, extension, plugin, prompt module, agent definition |
| Persistent knowledge | memory, memory block, archival memory, MemFS, context repository, user model |
| Authority boundary | permission, approval, policy, guardrail, hook, sandbox policy, interrupt |
| Quality signal | observation, feedback, test, verifier, critic, judge, evaluator, grader |

The same word often hides different semantics. In particular, a handoff that transfers control and history is not equivalent to a stateless agent-as-tool call, and a runtime checkpoint is not equivalent to cross-session semantic memory.

### Evidence landscape

The academic pass mapped control loops, tool/action interfaces, context and memory, planning/search, multi-agent organization, feedback and verification, evaluation, and compound-system optimization. It preserved contrary findings rather than selecting one narrative. The implementation recon report described 22 current or historically important systems across eight architectural families. The primary pass checked selected production documentation and implementation material. Because source-event capture did not exist, these activity counts are reconstructed from tool history, agent reports, and artifacts rather than a complete provenance ledger.

Sixteen narrative records cited or used in the synthesis now have referenced dispositions, canonical claim mappings, and primary verification. Browser Use, smolagents, Pi, OpenHands, OpenClaw, Hermes, Letta, and other Cycle 1 implementation details remain read-only leads without the durable source lifecycle required to support claims. Checkpoint 2 independently pinned its selected repositories, but no reported mechanism was inherited as evidence.

The cycle also retains a larger lead inventory for later deep dives, including ReAct, ReWOO, LATS, LLM+P, ToolBench/StableToolBench, tau-bench/tau2-bench, LoCoMo, LongMemEval, PlanBench, AgentBoard, DSPy, ADAS, SICA, and the open implementations listed in the synthesis. Leads are not evidence.

### Architectural families reported by implementation recon

- interactive model-driven coding loops;
- event-sourced workspace agents;
- explicit state graphs and durable workflow runtimes;
- conversational/message-passing multi-agent systems;
- code-as-action agents;
- perception-grounded browser and desktop agents;
- research-specific pipelines;
- long-lived personal-agent runtimes.

### Contradictions retained

- adaptive interleaved loops versus decoupled plan/execute/solve workflows;
- model-directed autonomy versus deterministic or hybrid control;
- more agents and voting versus matched single-agent quality and cost;
- prompted intrinsic reflection versus reliable external or executable feedback;
- more context/turns/samples versus context ceilings and candidate-selection gaps;
- general tool substrates versus specialized action interfaces;
- flexible language plans versus formal validity and translation failure;
- end-state score versus trajectory/process quality;
- rapid benchmark progress versus contamination, broken tasks, and version drift.

### Unadmitted lineage leads

The implementation recon reported that AutoGPT Classic and both major BabyAGI lines are archived or unsupported; AutoGen is in maintenance mode in favor of Microsoft Agent Framework; DeerFlow 2.0 is a ground-up rewrite; and OpenHands shifted toward a separate Software Agent SDK. These remain read-only, unadmitted leads until later work verifies and promotes them through the full source lifecycle. If admitted, they may establish version lineage; they cannot by themselves prove why systems changed or which architecture is better.

### Recon-pass log

| Pass and date | Purpose | Channels and query families | Coverage dimension | New mechanisms, contradictions, or sources | Marginal information gained |
| --- | --- | --- | --- | --- | --- |
| Academic and empirical landscape — 2026-07-10 | Identify research framings, evaluated mechanisms, benchmarks, and open problems | Exact query bundles recovered from rollout; complete result windows and screening remain unknown | Foundational/current research and empirical evidence | Eight candidate responsibilities, contradiction clusters, and paper leads | Reported high; not an instrumented marginal-information measure |
| Open implementation landscape — 2026-07-10 | Identify responsibilities expressed in code and materially different control-flow designs | Exact query bundles and report recovered; complete result windows and primary inspection depth remain unknown | Open systems across domains and architectures | Twelve implementation-visible responsibilities, eight families, and version-sensitive leads | Reported high; 24 repository families remain read-only and unadmitted |
| Production and cross-cutting landscape — 2026-07-10 | Map disclosures, terminology, and responsibilities across source families | Partly reconstructable from primary tool history and current source records | Open/closed production systems and cross-cutting taxonomy | Eleven-responsibility analytical lens and seven comparison dimensions | Substantive, but not complete provenance or independent corroboration |

### Source-audit status

The approved D-004 path passes fixtures and its archive-enforced real acceptance with real claims. Its 38-observation preflight supports exception-scaled overhead, while one preserved truncated search correctly leaves result capture incomplete and the effective preflight audit blocked. Under the maintainer's bounded authorization, reconstruction produced:

- `research/provenance/field-landscape-events.jsonl`, containing 27 recovered query bundles, 40 opened identities, 16 referenced records, 24 read-only implementation leads, and explicit reconstruction limits;
- `research/provenance/field-landscape-audit.md` and JSON, generated from those events;
- 24 canonical material claims with 50 exact source/location mappings and 50 primary verification events;
- full metadata and provenance links for all 16 referenced narrative source records;
- a readable claim-ledger projection at `research/claims/field-landscape.md`;
- tightened synthesis prose that demotes unsupported comparisons and keeps report-only systems unadmitted.

The maintainer granted the reconstructed-provenance waiver with a persistent limitation, and the audit now passes the fixed `provisional-promotion` profile. Its GitHub concentration warning remains visible and explicitly resolved by noting that all 24 GitHub families are read-only and support no material claim.

## Analysis plan and case-study status

The proposed set is documented in `research/selections/checkpoint-2-deep-dive-set.md`: Pi, OpenHands Software Agent SDK, LangGraph, Browser Use, OpenClaw, and a conditional maintainer-supplied Claude Code case. D-009 later deferred LangGraph from the concrete-harness sequence to a future framework/substrate comparison and left its slot unreplaced. The remaining open cases and three alternates retain their exact tags and commits. The responsibility matrix is an expected-coverage hypothesis, not a mechanism claim.

The Pi pilot is a maintainer-reviewed case at `v0.80.6` / `2b3fda9921b5590f285165287bd442a25817f17b`. It produced 15 canonical claims with 19 verified mappings across the pinned implementation and four narrowly relevant research records. The complete audit passes with one explicitly resolved concentration warning. Its four boundary questions and the distinctions that worked are seeded in `research/TAXONOMY-FRICTION.md` for cross-case testing.

The maintainer approved D-007 and authorized OpenHands SDK at `v1.35.0` / `9028562e2d5eda76de662ec9b7584125760eb83f`. The written scope preceded analysis, the final case stayed within it, and D-008's approved compatibility fix recovered complete provenance from the retained transcript. D-009 accepts the case as reviewed with 17 canonical claims, 28 verified mappings, eight referenced records, and a passing complete audit. Only OpenClaw is authorized next, contingent on separate approval of its goal prompt and a written scope boundary before deep analysis. Claude Code remains blocked until its evidence set is supplied, enumerated, dated, and admitted.

The bounded selection pass captured two GitHub search batches with 35 returned identities, screened eight exact-tag repository pages, resolved eight public Git refs, and retained three exact native transcript prefixes. All eight referenced repositories have full screening records and all 14 claim mappings have primary verification. Eleven audit warnings are resolved as expected selection limits: GitHub concentration, README/release-only inspection, and missing user-provided Claude Code material.

## Consolidation state

The provisional consolidation is `research/syntheses/field-landscape.md`. Complementary academic and implementation passes separately produced responsibility-oriented maps, and the primary consolidation merged them into eleven analytical responsibilities and seven cross-cutting dimensions. Shared framing limits the confidence attributable to convergence. Maintainer review added source-native discovery/navigation and a later narrative layer.

## Refinement and saturation review

Checkpoint 1 evaluated landscape coverage, sourcing coverage, and the three-layer taxonomy, not full topic saturation. Reconstruction recovered exact query bundles but not complete result windows or screening activity, so it cannot support an accurate breadth, balance, absence-of-evidence, saturation, or marginal-information claim. The waiver preserves that limitation until a complete cycle revalidates the landscape. The next action is a bounded OpenClaw goal prompt for maintainer approval, not further landscape recon, a LangGraph case, or batch resequencing.

## Process retrospective

The parallel split produced complementary maps, but the cycle lacked per-agent provenance logs and a durable proof of primary verification. The primary did not fully limit synthesis to admitted evidence: several implementation details entered prose through direct links or agent reports. This was a structural process failure, not merely a missing-record cleanup. D-003 replaces source-count assurance with instrumented research events, claim-evidence coverage, and a pre-checkpoint source audit.

## Checkpoint record

| Checkpoint | Artifact or version reviewed | Date | Status | Maintainer decision | Conditions or requested changes | Next phase authorized |
| --- | --- | --- | --- | --- | --- | --- |
| Foundation / Stage 0 | D-001 and initial repository foundation | 2026-07-10 | Approved | Continue with first cycle | None recorded | Cycle 1 recon |
| Infrastructure / Stage 0.5 | D-004, real acceptance, and realistic preflight | 2026-07-11 | Approved and frozen | D-004 accepted; later correction honestly blocked one truncated preflight result without changing overhead evidence | Final monotonic-update and fixed-profile safeguards completed 2026-07-12 | Bounded Cycle 1 reconstruction, then Checkpoint 2 selection |
| Checkpoint 1 | Reconstructed landscape, sourcing coverage, claim ledger, and three-layer taxonomy | 2026-07-12 | Provisionally promoted | Maintainer granted the reconstructed-provenance waiver and accepted the three-layer direction as provisional | Preserve caveat until complete revalidation; test responsibility boundaries at Checkpoint 3 | Bounded Checkpoint 2 selection |
| Checkpoint 2 | `research/selections/checkpoint-2-deep-dive-set.md`, complete selection source/claim audit, and D-006 | 2026-07-12 | Approved | Maintainer selected the six-case portfolio with Claude Code conditional and authorized only the pinned Pi pilot | Preserve reconstructed caveat; archive-check manual result URLs; pause after Pi; no other case authorized | Pi pilot only |
| Pi pilot alignment | `research/case-studies/pi-v0.80.6.md`, claim ledger, source records, complete audit, taxonomy-friction register, and D-007 | 2026-07-16 | Approved | Maintainer accepted Pi as a reviewed case and approved the control-flow-first method | Keep taxonomy unchanged; test Pi friction across later cases; scope OpenHands before deep analysis | OpenHands SDK only |
| OpenHands provenance compatibility | D-008, exact unified-exec fixtures, retained-window re-ingestion, and complete audit | 2026-07-16 | Approved and completed | Maintainer approved the narrow D-005 freeze exception | All 55 observations now resolve automatically; paths and generic-web events derive correctly; infrastructure frozen again | OpenHands package closeout only |
| OpenHands case alignment | Scope, case, 17-claim ledger, eight source records, complete audit, friction comparison, and D-009 | 2026-07-16 | Approved | Maintainer accepted OpenHands as a reviewed case based on direct review and external verification | Preserve taxonomy; defer LangGraph as a framework; preserve contrast strategy pending three-case evidence | OpenClaw only, after separate goal-prompt approval and scope-first start |
| Post-OpenClaw sampling review | Pi, OpenHands, and OpenClaw case evidence plus D-006/D-009 rationale |  | Required after OpenClaw | Not reached | Compare existing sequence, adoption-weighted cohort, Hermes lineage case, and Browser Use contrast without treating repetition as independent corroboration | No later case until maintainer decision; not Checkpoint 3 |
| Checkpoint 3 | First case-study batch |  | Not reached |  |  |  |
| Checkpoint 4 | First cross-harness synthesis |  | Not reached |  |  |  |
| Checkpoint 5 | First refine and saturation review |  | Not reached |  |  |  |
