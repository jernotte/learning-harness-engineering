# Coverage Map

This is the concise human view of what the project has examined, what remains provisional, and where important gaps remain. The detailed reasoning lives in `research/syntheses/field-landscape.md`; the audit trail lives in `research/cycles/field-landscape.md`.

## Current landscape coverage

Cycle 1 used three complementary, separately executed passes: academic/empirical research, an implementation recon report describing 22 systems, and production/cross-cutting documentation with selected code checks. The passes shared the same project framing and are not independent corroboration. Because search and source events were not instrumented, Cycle 1 coverage is `reconstructed` and its exact query, result, and screening breadth is incomplete.

The maintainer provisionally promoted the three-layer model under a reconstructed-provenance waiver: source-native vocabulary for discovery/navigation, the responsibilities below as a multi-label analytical lens, and a later human-facing narrative. Bounded reconstruction recovered 27 exact query bundles, 40 opened source identities, 16 referenced records, and 24 unadmitted implementation leads. The limitation must remain visible until a complete cycle revalidates the landscape, and Checkpoint 3 must test the responsibility lens through recorded taxonomy friction.

## Source-native topic index

This is the human and search entry point. Query families are provisional because Cycle 1 search events are reconstructed; the provenance audit will replace impressions with observed coverage.

| Familiar topic | Example query/alias families | Related analytical responsibilities | Current coverage state |
| --- | --- | --- | --- |
| Agent loop and orchestration | agent loop, ReAct, run loop, workflow, graph, routing | 1, 4, 9 | Referenced general records are mapped; implementation breadth remains reconstructed |
| Tools and agent-computer interfaces | tool use, function calling, ACI, commands, environment, sandbox | 3, 5, 6, 9 | SWE-agent and MCP are mapped; current production interfaces still need pinned cases |
| Context engineering | prompt assembly, compaction, condensation, retrieval, progressive disclosure | 2, 3, 6 | Claude context evidence is mapped; Pi and OpenHands are reviewed at exact pins |
| Memory and persistent state | session, checkpoint, event log, long-term memory, artifacts, forgetting | 3, 7, 11 | LangGraph, ADK, and MemoryAgentBench evidence is mapped; procedural memory remains thin |
| Planning and workflows | plan-and-execute, replanning, tree search, deterministic workflow | 4, 8, 9 | Agentless and practitioner guidance are mapped; ReAct/ReWOO/LATS remain unadmitted leads |
| Skills and procedural knowledge | skills, recipes, prompt modules, learned procedures | 2, 3, 7, 11 | Mostly framing and product documentation; empirical depth pending |
| Subagents and multi-agent systems | handoff, agent-as-tool, worker, delegation, debate, voting | 3, 4, 8, 9 | Claude/OpenAI and BenchAgent records are mapped; implementation comparisons remain pending |
| Verification and evaluation | tests, critic, judge, grader, trajectory, benchmark, self-correction | 6, 9, 10 | Empirical and production records are mapped; judge/evaluator gaps remain |
| Runtime, sessions, and lifecycle | resume, interrupt, cancel, scheduler, gateway, background agent | 1, 5, 7, 9 | ADK/LangGraph evidence is mapped; OpenClaw/Hermes/Letta remain unadmitted leads |
| Model routing and instruction policy | model selection, fallback, effort, role model, system prompt | 2, 3 | Claude/ADK documentation is mapped; controlled comparisons remain scarce |
| Self-improvement | context optimization, workflow search, self-editing harness, regression gate | 7, 10, 11 | Weng is mapped as framing; the primary research bundle remains unadmitted |

## Analytical responsibility view

| Provisional responsibility | Referenced evidence mapped during reconstruction | Unadmitted leads and gap before durable conclusions |
| --- | --- | --- |
| Run lifecycle and ingress | Google ADK runtime/session record | OpenClaw, Hermes, and Letta lifecycle leads; comparative research thin |
| Model and instruction policy | Claude subagent and Google ADK records | Browser Use/provider normalization leads; few controlled routing comparisons |
| Active-context and capability construction | Claude context/memory and MCP records | Pi/OpenHands leads; compaction loss and admission effects need analysis |
| Control flow and execution semantics | Anthropic patterns, Google ADK, and Agentless records | ReAct/ReWOO/LATS leads; matched model/code/hybrid comparisons needed |
| Action and environment mediation | SWE-agent and MCP records | smolagents, browser/desktop, and current coding-interface leads need pinning |
| Observation and feedback construction | SWE-agent and Anthropic agent-loop/tool guidance | Browser/GUI grounding and event-integrity leads need verification |
| Durable state and persistence | LangGraph, Google ADK, MemoryAgentBench, reviewed Pi, and reviewed OpenHands records | Procedural memory and cross-run adaptation remain thin |
| Decomposition, coordination, and aggregation | Anthropic patterns, Claude/OpenAI orchestration docs, and BenchAgent | Current implementation comparisons and compute-control evidence needed |
| Verification, recovery, and control boundaries | Kamoi self-correction survey and production evaluation guidance | Programmatic-verifier and rollback bundles remain leads |
| Observability and external evaluation | Anthropic evals, OpenAI tracing, General AgentBench, and BenchAgent | Long-horizon trials, evaluator bias, and normalized ablations remain thin |
| Adaptation and optimization across runs | Weng synthesis as framing | DSPy, TextGrad, ADAS, SICA, Self-Harness, and regression evidence remain leads |

## Reported implementation-family coverage

The table below comes from the implementation recon report. It is a candidate coverage map, not a complete verified inventory. Several examples have not completed the durable source lifecycle.

| Family | Examples encountered | Current status |
| --- | --- | --- |
| Model-driven coding loops | Codex CLI, Pi, Gemini CLI, OpenCode, Goose, Aider, SWE-agent | Reported by reconstructed recon; no batch selected |
| Event-sourced workspace agents | OpenHands Software Agent SDK | Maintainer-reviewed case at v1.35.0 |
| Explicit state graphs and durable workflows | LangGraph, Microsoft Agent Framework, OpenAI Agents SDK, PydanticAI | LangGraph/OpenAI documentation is mapped; the other repository families remain unadmitted |
| Conversational/message-passing multi-agent systems | AutoGen and successors | Reported lineage lead; not yet verified for selection |
| Code-as-action agents | smolagents | Reported lead; not yet admitted |
| Browser and computer-use agents | Browser Use, Agent S | Reported leads; one may later represent perception/grounding |
| Research pipelines | STORM, GPT Researcher, DeerFlow | Reported leads; version lineage not yet admitted |
| Long-lived personal agents | OpenClaw, Letta Code, Hermes Agent | Reported leads; code and lifecycle claims not yet admitted |

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

- Three remaining open cases have not yet been cloned for analysis; their selection pins do not establish mechanisms.
- The responsibility map has been tested through Pi and OpenHands but remains provisional until the first batch supplies broader friction and counterexamples.
- Closed production systems provide controls and declared behavior but little causal visibility.
- Few studies isolate a single harness mechanism while keeping model, tools, context, budget, and evaluator fixed.
- Cost, latency, variance, and long-horizon reliability are inconsistently reported.
- Lifecycle, observation construction, failure recovery, and model mediation are visible in code but thinly studied as independent topics.
- The field lacks stable vocabulary for runtime, workflow engine, environment service, gateway, session, memory, and agent.
- Historical and current architectures are easily mixed in fast-moving or rewritten projects.
- Exact query bundles were recovered from the primary and two subagent rollouts, but complete provider result windows, result ranks, and all screening decisions are not recoverable.
- Browser Use, smolagents, Pi, OpenHands, OpenClaw, Hermes, Letta, and other details appeared as recon leads without completing the source-record lifecycle.
- All 16 referenced sources now have full records; the canonical ledger contains 24 material claims, 50 claim/source/location mappings, and 50 primary verification events.
- The generated audit shows 24 GitHub repository leads, none admitted or pinned for claim support; this is visible breadth, not verified implementation depth.
- The audit's GitHub host concentration warning is explained, not erased: the implementation pass intentionally sampled repositories, while referenced evidence remains distributed across papers, documentation, a specification, and a synthesis.
- Because provenance is reconstructed, the current evidence cannot establish breadth, balance, absence of evidence, marginal information, or saturation.

## Checkpoint 2 selection coverage

Checkpoint 2 originally selected Pi, OpenHands Software Agent SDK, LangGraph, Browser Use, OpenClaw, and a conditional maintainer-supplied Claude Code case. D-009 accepts Pi and OpenHands as reviewed cases, defers LangGraph from the concrete-harness sequence to a future framework/substrate comparison, leaves its slot unreplaced, and authorizes only OpenClaw next. Browser Use and Claude Code remain selected but blocked; smolagents, STORM, and SWE-agent remain pinned alternates. No popularity-first or convergence-cohort resequencing has been approved.

The responsibility matrix is a sampling hypothesis. Responsibilities 1–10 have at least two expected open-case contrasts, while Responsibility 11 remains weak and uncertain. Claude Code remains unknown across the matrix until its bounded evidence set is supplied. Pi tested only its own expected row; the remaining expectations are still unverified.

The selection source audit is `complete` for its two bounded search batches and direct pin checks: 35 returned identities, ten opened sources, eight referenced repository records, two excluded operational sources, and 14 verified claim mappings. GitHub concentration and shallow repository inspection are intentional and resolved for a repository-selection decision, not evidence of landscape breadth or implementation depth. The 35 manually authored result URLs and both batched query strings were separately confirmed in the retained native archives before approval because the generated audit cannot establish that content binding itself. Cycle 1's reconstructed limitation still governs the landscape from which the candidates originated.

## Pi pilot coverage

The first case now directly verifies Pi at `v0.80.6` / `2b3fda9921b5590f285165287bd442a25817f17b`. It traces the model-directed inner loop; per-turn prompt, tool, and capability construction; action and observation mediation; append-only tree sessions; compaction; extension-based delegation; containment allocation; retry and overflow recovery; and operational observability. It finds no default independent task-success verifier, task-level evaluation harness, or across-run optimization mechanism within the inspected boundary.

The case exercises R1–R10 and identifies R11 as absent by default. Its strongest taxonomy friction is not a proposed rewrite: R1 currently hides distinct session and inner-turn lifecycle scales; R2/R3/R5 deliberately couple through runtime refresh and tool admission; R5/R6 meet at output-truncation policy; and extensions span nearly every responsibility. These remain single-case hypotheses in `research/TAXONOMY-FRICTION.md`, which the remaining cases will confirm, qualify, or contradict before Checkpoint 3.

Targeted comparison evidence supports the general importance of action/observation interface design, qualifies assumptions about prompted self-verification, and identifies plausible loss, latency, and variability risks in summarization compaction. None of that evidence directly evaluates Pi's current interface, compaction prompt, or task outcomes. The most important empirical gaps are compaction retention, voluntary verification, exact tool-interface effects, and optional-subagent cost/quality.

## OpenHands SDK case coverage

The bounded OpenHands case directly inspects `v1.35.0` / `9028562e2d5eda76de662ec9b7584125760eb83f`. The written scope kept the analysis on the standalone `LocalConversation` path with targeted agent-server treatment and excluded the legacy application. The case covers nested lifecycle and ingress, frozen agent policy and runtime capability materialization, active event views versus durable event-tree state, typed action/execution/observation mediation, optional containment, condensation, delegation, recovery, optional critic and goal-judge layers, telemetry/external evaluation, and the bounded absence of across-run optimization.

The reviewed implementation comparison strengthens all four Pi friction questions and adds one new R9 question: protocol integrity and operational recovery can be extensive while independent task-success verification remains optional. D-009 also records a framework-versus-application ownership question after LangGraph proved mismatched to the current concrete-harness case question. These are reviewed friction observations and selection evidence, not an approved taxonomy change.

The approved D-008 compatibility correction reprocessed the retained subject window without rerunning research. All 55 native observations now resolve automatically; 43 repository events carry corrected paths, the one two-query web search carries nine mechanically derived result identities, and both paper opens reconcile with their internal markers. The complete audit passes with eight referenced sources, 17 claims, 28 exact mappings, 28 primary verifications, and one resolved concentration warning. The exact transcript prefix is retained and cryptographically verified.

## Next coverage decision

D-007 approved the control-flow-first method and the OpenHands contrast; D-008 restored dependable capture for the current runtime shape and is frozen again. D-009 accepted OpenHands, deferred LangGraph to a future framework/substrate comparison, preserved the contrast-oriented sampling rationale, and authorized only OpenClaw next. OpenClaw's scope must be written before deep analysis. After that case, an interim maintainer review—not Checkpoint 3—will reconsider sampling order using actual three-case evidence. Every other deep dive remains blocked, and Claude Code cannot begin until the maintainer-supplied material is enumerated and admitted.
