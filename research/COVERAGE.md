# Coverage Map

This is the concise human view of what the project has examined, what remains provisional, and where important gaps remain. The detailed reasoning lives in `research/syntheses/field-landscape.md`; the audit trail lives in `research/cycles/field-landscape.md`.

## Current landscape coverage

Cycle 1 used three complementary, separately executed passes: academic/empirical research, an implementation recon report describing 22 systems, and production/cross-cutting documentation with selected code checks. The passes shared the same project framing and are not independent corroboration. Because search and source events were not instrumented, Cycle 1 coverage is `reconstructed` and its exact query, result, and screening breadth is incomplete.

The maintainer provisionally promoted the three-layer model under a reconstructed-provenance waiver and then approved Checkpoint 3's bounded responsibility refinements through D-013: source-native vocabulary for discovery/navigation, stable R1–R11 IDs as a multi-label analytical lens, and human-oriented Markdown from which static HTML is generated. Bounded reconstruction recovered 27 exact query bundles, 40 opened source identities, 16 referenced records, and 24 unadmitted implementation leads. The original landscape limitation remains visible until a complete cycle revalidates it.

## Source-native topic index

This is the human and search entry point. Query families are provisional because Cycle 1 search events are reconstructed; the provenance audit will replace impressions with observed coverage.

| Familiar topic | Example query/alias families | Related analytical responsibilities | Current coverage state |
| --- | --- | --- | --- |
| Agent loop and orchestration | agent loop, ReAct, run loop, workflow, graph, routing | 1, 4, 9 | General records plus reviewed Pi, OpenHands, OpenClaw, and Hermes loops are mapped; broader implementation breadth remains reconstructed |
| Tools and agent-computer interfaces | tool use, function calling, ACI, commands, environment, sandbox | 3, 5, 6, 9 | SWE-agent and MCP are mapped; four pinned cases now expose structured action/observation paths, while perception-grounded interfaces remain untested |
| Context engineering | prompt assembly, compaction, condensation, retrieval, progressive disclosure | 2, 3, 6 | Claude context evidence and all four pinned case mechanisms are mapped; outcome effects remain thin |
| Memory and persistent state | session, checkpoint, event log, long-term memory, artifacts, forgetting | 3, 7, 11 | LangGraph, ADK, MemoryAgentBench, and four pinned cases are mapped; memory quality and outcome-driven adaptation remain thin |
| Planning and workflows | plan-and-execute, replanning, tree search, deterministic workflow | 4, 8, 9 | Agentless and practitioner guidance are mapped; ReAct/ReWOO/LATS remain unadmitted leads |
| Skills and procedural knowledge | skills, recipes, prompt modules, learned procedures | 2, 3, 7, 11 | Hermes supplies pinned skill review, curation, `/learn`, and learning-graph mechanisms; outcome evidence remains absent |
| Subagents and multi-agent systems | handoff, agent-as-tool, worker, delegation, debate, voting | 3, 4, 8, 9 | Claude/OpenAI and BenchAgent records plus delegation in four pinned cases are mapped; causal comparisons remain thin |
| Verification and evaluation | tests, critic, judge, grader, trajectory, benchmark, self-correction | 6, 9, 10 | Empirical and production records plus four pinned case layers are mapped; independent outcome evidence remains sparse |
| Runtime, sessions, and lifecycle | resume, interrupt, cancel, scheduler, gateway, background agent | 1, 5, 7, 9 | ADK/LangGraph evidence, reviewed OpenClaw, and analyzed Hermes lifecycle evidence are mapped; Letta remains a lead |
| Model routing and instruction policy | model selection, fallback, effort, role model, system prompt | 2, 3 | Claude/ADK documentation and Hermes's pinned route/fallback path are mapped; controlled outcome comparisons remain scarce |
| Self-improvement | context optimization, workflow search, self-editing harness, regression gate | 7, 10, 11 | Weng frames the topic; OpenClaw and Hermes show outcome-agnostic adaptation, while the broader optimization bundle remains unadmitted |

## Analytical responsibility view

| Provisional responsibility | Referenced evidence, including later pinned cases | Remaining gap before durable conclusions |
| --- | --- | --- |
| Run lifecycle and ingress | Google ADK plus reviewed OpenClaw and analyzed Hermes nested-lifecycle evidence | Letta remains a lead; comparative outcome research is thin |
| Model and instruction policy | Claude and ADK records plus policy evidence across Pi, OpenHands, OpenClaw, and Hermes | Few controlled routing or policy comparisons |
| Active-context and capability construction | Claude/MCP records plus four pinned case projections | Compaction loss and admission effects need direct evaluation |
| Control flow and execution semantics | Anthropic patterns, ADK, Agentless, and four pinned implementation cases | ReAct/ReWOO/LATS remain leads; matched model/code/hybrid comparisons are needed |
| Action and environment mediation | SWE-agent/MCP plus structured mediation in all four pinned cases | Browser/desktop perception and action grounding remain the major gap |
| Observation and feedback construction | SWE-agent/Anthropic guidance plus explicit result-to-observation layers in all four pinned cases | Browser/GUI grounding and environment-drift recovery remain untested |
| Durable state and persistence | LangGraph, ADK, MemoryAgentBench, and all four pinned cases | Memory quality, forgetting, and cross-run outcome effects remain thin |
| Decomposition, coordination, and aggregation | Anthropic/Claude/OpenAI guidance, BenchAgent, and delegation evidence across the four cases | Normalized cost/quality and independence evidence is still needed |
| Runtime integrity, recovery, and task acceptance | Kamoi/evaluation guidance plus layered integrity, recovery, coding-evidence, critic, and goal-judge mechanisms in the four cases | Task-acceptance validity and rollback evidence remain thin |
| Observability and external evaluation | Anthropic evals, OpenAI tracing, General AgentBench, BenchAgent, and case-level trace/evaluation surfaces | Long-horizon trials, evaluator bias, and normalized ablations remain thin |
| Across-run adaptation | Weng framing plus reviewed OpenClaw and Hermes adaptation mechanisms | No inspected case establishes outcome-driven optimization; DSPy/TextGrad/ADAS/SICA/Self-Harness remain leads |

## Reported implementation-family coverage

The table below comes from the implementation recon report. It is a candidate coverage map, not a complete verified inventory. Several examples have not completed the durable source lifecycle.

| Family | Examples encountered | Current status |
| --- | --- | --- |
| Model-driven coding loops | Codex CLI, Pi, Gemini CLI, OpenCode, Goose, Aider, SWE-agent | Pi is a reviewed pinned case; the wider family remains reconstructed or deferred |
| Event-sourced workspace agents | OpenHands Software Agent SDK | Maintainer-reviewed case at v1.35.0 |
| Explicit state graphs and durable workflows | LangGraph, Microsoft Agent Framework, OpenAI Agents SDK, PydanticAI | LangGraph/OpenAI documentation is mapped; the other repository families remain unadmitted |
| Conversational/message-passing multi-agent systems | AutoGen and successors | Reported lineage lead; not yet verified for selection |
| Code-as-action agents | smolagents | Reported lead; not yet admitted |
| Browser and computer-use agents | Browser Use, Agent S | Browser Use is pinned but deferred until after the first learning synthesis; perception/grounding remains untested |
| Research pipelines | STORM, GPT Researcher, DeerFlow | Reported leads; version lineage not yet admitted |
| Long-lived personal agents | OpenClaw, Letta Code, Hermes Agent | OpenClaw and Hermes are reviewed at their pins; Letta remains an unadmitted lead |

## Empirical question coverage

The recon deliberately captured evidence on interface effects, context/memory limits, planning validity, deterministic versus adaptive flows, multi-agent scaling, self-correction, benchmark reliability, and automated harness optimization. It did not attempt a full literature review of any one area.

The most important contradictions to carry forward are:

- interleaved action/observation versus plan-execute separation;
- autonomous/model-directed versus deterministic/hybrid control;
- parallel or multi-agent scaling versus matched single-agent cost and quality;
- intrinsic reflection versus independent/executable feedback;
- more context, turns, or samples versus context and verification ceilings;
- general substrates versus specialized interfaces;
- flexible language planning versus formal validity;
- end-state success versus trajectory quality;
- leaderboard progress versus benchmark integrity and version drift.

## Relationship with `outline.md`

The seed outline successfully anticipated most subject matter and retains value as source-native, human-readable navigation. The responsibility lens adds distinctions: tools span capability admission, action representation, environment execution, and observation construction; memory spans active context, runtime state, artifacts, cross-session knowledge, and procedural adaptation; planning is a control strategy; skills are a packaging and admission strategy; subagents require analysis of decomposition, state isolation, control transfer, budgets, and aggregation; and evaluation remains distinct from verification inside the run.

Two material areas proposed by recon are run lifecycle/ingress and model mediation/routing. Source-native corpus organization and later teaching may recombine responsibilities, while case analysis preserves the architectural distinctions through multi-labeling.

## Known gaps at Checkpoint 1

- Hermes is maintainer-reviewed; Browser Use is pinned but deferred, Claude Code is blocked, and no programmed-control replacement is selected.
- The responsibility map has been tested through four reviewed cases. D-013 retains stable IDs while approving the R9/R11 refinements and cross-cutting annotations; the map remains revisable rather than field-complete.
- Closed production systems provide controls and declared behavior but little causal visibility.
- Few studies isolate a single harness mechanism while keeping model, tools, context, budget, and evaluator fixed.
- Cost, latency, variance, and long-horizon reliability are inconsistently reported.
- Lifecycle, observation construction, failure recovery, and model mediation are visible in code but thinly studied as independent topics.
- The field lacks stable vocabulary for runtime, workflow engine, environment service, gateway, session, memory, and agent.
- Historical and current architectures are easily mixed in fast-moving or rewritten projects.
- Exact query bundles were recovered from the primary and two subagent rollouts, but complete provider result windows, result ranks, and all screening decisions are not recoverable.
- Browser Use, smolagents, Hermes, Letta, and other details appeared as reconstructed leads. Pi, OpenHands, OpenClaw, and Hermes are reviewed through separately admitted pinned cases. Nothing is inherited as evidence merely because it appeared in Cycle 1.
- All 16 referenced sources now have full records; the canonical ledger contains 24 material claims, 50 claim/source/location mappings, and 50 primary verification events.
- The generated audit shows 24 GitHub repository leads, none admitted or pinned for claim support; this is visible breadth, not verified implementation depth.
- The audit's GitHub host concentration warning is explained, not erased: the implementation pass intentionally sampled repositories, while referenced evidence remains distributed across papers, documentation, a specification, and a synthesis.
- Because provenance is reconstructed, the current evidence cannot establish breadth, balance, absence of evidence, marginal information, or saturation.

## Checkpoint 2 selection coverage

Checkpoint 2 originally selected Pi, OpenHands Software Agent SDK, LangGraph, Browser Use, OpenClaw, and a conditional maintainer-supplied Claude Code case. D-009 accepts Pi and OpenHands as reviewed cases and defers LangGraph from the concrete-harness sequence without replacement. D-010 accepts OpenClaw and records rolling-selection precedence. D-011 selects pinned Hermes Agent as the final pre-Checkpoint-3 case, defers Browser Use until after the first learning synthesis, and blocks Claude Code, every cohort member, alternate, and programmed-control replacement before the checkpoint.

D-010 orders rolling selection by marginal information gain on uncovered or high-friction responsibilities, falsification and anchoring protection, evidence readiness, evidence-mode and domain diversity, analysis and governance cost, lineage and independence risk, and only then operationalized adoption. D-011 consciously accepts less architectural breadth and independence for Hermes's comparative-teaching value and the maintainer's requested learning transition. Checkpoint 3 now follows reviewed Hermes immediately; no Claude Code branch or replacement precedes it.

The original responsibility matrix remains a sampling hypothesis rather than proof. Pi, OpenHands, OpenClaw, and Hermes have now tested their expected rows; OpenClaw and Hermes both expose across-run adaptation without establishing outcome-driven optimization. Browser Use and Claude Code remain untested, and the perception-grounded R5/R6 gap remains explicit.

The selection source audit is `complete` for its two bounded search batches and direct pin checks: 35 returned identities, ten opened sources, eight referenced repository records, two excluded operational sources, and 14 verified claim mappings. GitHub concentration and shallow repository inspection are intentional and resolved for a repository-selection decision, not evidence of landscape breadth or implementation depth. The 35 manually authored result URLs and both batched query strings were separately confirmed in the retained native archives before approval because the generated audit cannot establish that content binding itself. Cycle 1's reconstructed limitation still governs the landscape from which the candidates originated.

## Pi pilot coverage

The first case now directly verifies Pi at `v0.80.6` / `2b3fda9921b5590f285165287bd442a25817f17b`. It traces the model-directed inner loop; per-turn prompt, tool, and capability construction; action and observation mediation; append-only tree sessions; compaction; extension-based delegation; containment allocation; retry and overflow recovery; and operational observability. It finds no default independent task-success verifier, task-level evaluation harness, or across-run optimization mechanism within the inspected boundary.

The case exercises R1–R10 and identifies R11 as absent by default. Its strongest taxonomy friction is not a proposed rewrite: R1 currently hides distinct session and inner-turn lifecycle scales; R2/R3/R5 deliberately couple through runtime refresh and tool admission; R5/R6 meet at output-truncation policy; and extensions span nearly every responsibility. These remain single-case hypotheses in `research/TAXONOMY-FRICTION.md`, which the remaining cases will confirm, qualify, or contradict before Checkpoint 3.

Targeted comparison evidence supports the general importance of action/observation interface design, qualifies assumptions about prompted self-verification, and identifies plausible loss, latency, and variability risks in summarization compaction. None of that evidence directly evaluates Pi's current interface, compaction prompt, or task outcomes. The most important empirical gaps are compaction retention, voluntary verification, exact tool-interface effects, and optional-subagent cost/quality.

## OpenHands SDK case coverage

The bounded OpenHands case directly inspects `v1.35.0` / `9028562e2d5eda76de662ec9b7584125760eb83f`. The written scope kept the analysis on the standalone `LocalConversation` path with targeted agent-server treatment and excluded the legacy application. The case covers nested lifecycle and ingress, frozen agent policy and runtime capability materialization, active event views versus durable event-tree state, typed action/execution/observation mediation, optional containment, condensation, delegation, recovery, optional critic and goal-judge layers, telemetry/external evaluation, and the bounded absence of across-run optimization.

The reviewed implementation comparison strengthens all four Pi friction questions and adds one new R9 question: protocol integrity and operational recovery can be extensive while independent task-success verification remains optional. D-009 also records a framework-versus-application ownership question after LangGraph proved mismatched to the current concrete-harness case question. These are reviewed friction observations and selection evidence, not an approved taxonomy change.

The approved D-008 compatibility correction reprocessed the retained subject window without rerunning research. All 55 native observations now resolve automatically; 43 repository events carry corrected paths, the one two-query web search carries nine mechanically derived result identities, and both paper opens reconcile with their internal markers. The complete audit passes with eight referenced sources, 17 claims, 28 exact mappings, 28 primary verifications, and one resolved concentration warning. The exact transcript prefix is retained and cryptographically verified.

## OpenClaw case coverage

The bounded OpenClaw case inspects `v2026.6.6` / `8c802aa683510c7f7503597b54c3021733245e59` through one Telegram polling/direct-message path. The written scope preceded deep analysis and kept the case on durable ingress, authorization, routing and shared-session policy, nested execution ownership, embedded model/context/tool construction, action and result mediation, federated persistence, compaction, final delivery, and targeted adjacent mechanisms. Other channels, hosted services, ACP, alternate harnesses, and third-party plugins remain outside the deep boundary.

The case exercises R1–R11 and adds three substantive contrasts. First, one user-visible turn crosses multiple durable and process-local transaction boundaries rather than one run loop. Second, runtime integrity, replay, liveness, and delivery are extensive while independent semantic acceptance remains optional or external. Third, disabled-by-default memory dreaming is genuine across-run adaptation driven by recall, diversity, recency, and deduplication—not task-outcome optimization. The taxonomy register records TF-001 through TF-006 as observed and adds TF-007 to preserve that R11 distinction without revising the lens.

The complete promotion-profile audit passes with ten referenced records, 20 declared claims, 31 exact mappings, 31 primary verifications, and no blocking error. Across three retained boundaries, 262 of 272 observations resolve automatically; ten exceptions were handled in one batch and none remains unresolved. The sole warning is resolved because Browser Use was used only at selection depth for the sampling decision. No live search or manually authored result event was needed.

OpenClaw is a maintainer-reviewed finding. During review, C003 was explicitly reconciled with the configured `after_agent_dispatch` policy: the tracker applies that acknowledgement stage on successful middleware-chain completion even when a buffered handler returns before timer-driven dispatch, and polling then deletes the claimed spool record. The sequence is directly observed, but the crash consequence remains an inference because it was not behaviorally reproduced or frequency-measured. D-011 now authorizes Hermes as a qualified migration/selective-influence comparison while preserving Browser Use as the later highest-value perception contrast.

## Hermes case coverage

Hermes Agent is analyzed at annotated tag `v2026.7.7.2`, dereferenced commit `9de9c25f620ff7f1ce0fd5457d596052d5159596`, package version `0.18.2`. The written scope kept the narrative on the classic `hermes chat` path while targeted inspection covered alternate ingress, provider routing, persistent goals, delegation, plugins, memory providers, curation, observability, tests, and selected history. Hosted services, moving branches, third-party plugins, behavioral test execution, private evaluations, and causal effectiveness claims remain outside the boundary.

The case exercises R1–R11 and supplies evidence for TF-001 through TF-007. Its principal contrasts are: a cached session prompt versus request-local projection; structured action authority versus transformed model observations; fresh versus migrated defaults; runtime integrity, verification-on-stop, and optional goal acceptance as separate contracts; and durable memory/skill adaptation without an inspected outcome objective. It adds provisional configuration-generation and mechanism-level-lineage questions, not a taxonomy change.

Hermes and OpenClaw have different recorded Git roots. Hermes later added a detailed OpenClaw migration and named mechanism-level inspiration or ports. The supported relationship is separately rooted repositories with later migration compatibility and selective documented influence. Recurrence is not independent evidence where lineage is unresolved or explicit.

The complete audit passes with ten referenced records, 24 declared claims, 34 exact mappings, 34 primary verifications, and six verified archives. Of 352 native observations, 349 were classified automatically and three repository-inspection exceptions were linked in one batch; none remains unresolved. No web search, manual result batch, upstream target-test execution, blocking error, or warning occurred. The maintainer accepted Hermes as a reviewed finding under D-012. Browser Use's deferred perception-grounded R5/R6 contrast remains a material coverage loss to carry through Checkpoint 3 and into the first synthesis.

## Next coverage decision

D-007 approved the control-flow-first method, D-008 restored dependable capture for the observed runtime shape, D-009 accepted OpenHands and deferred LangGraph, D-010 accepted OpenClaw and recorded the rolling criteria, D-011 selected Hermes as the final pre-Checkpoint-3 case, and D-012 accepted Hermes and authorized Checkpoint 3.

The approved Checkpoint 3 package compares the four reviewed cases and retains stable R1–R11 identifiers with sharper R9 integrity/recovery/acceptance facets, an R11 adaptation boundary, separate R10 observability/evaluation reporting, and cross-cutting lifecycle, owner, injection, configuration-population, and mechanism-lineage annotations. These changes do not increase coverage: the sample remains concentrated in open coding and personal-agent systems, outcome evidence is thin, the OpenClaw/Hermes pair is lineage-confounded where links are explicit or unresolved, and the browser/perception, closed-production, and framework/substrate gaps remain open.

The four-case synthesis, canonical learning Markdown, and generated static learning site now exist. This delivery layer adds no subject coverage and closes none of the browser/perception, closed-production, framework/substrate, outcome-evidence, or lineage-independence gaps above. Browser Use remains the leading next falsification case, but it may reopen only after the maintainer reads the first learning experience and provides direction. No other case is added first.
