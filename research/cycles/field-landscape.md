# Research Cycle: The Architectural Landscape of Modern Harnesses

**Status:** Checkpoint 1 conditionally reviewed; remediation in progress
**Current phase:** Provenance capture feasibility, implementation, and validation; reconstruction/remediation follows
**Governance:** Early alignment
**Provenance status:** Initial narrative reconstruction completed; formal event and claim reconstruction awaits capture validation. The best attainable class is `reconstructed` because exact subagent queries, returned-result sets, and all screened sources are not recoverable

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

Sixteen legacy narrative records exist for sources cited or used in the draft synthesis. Formal referenced disposition remains pending reconstruction; the count is not a claim-coverage audit. Browser Use, smolagents, Pi, OpenHands, OpenClaw, Hermes, Letta, and other implementation details entered recon or draft prose without completing the required durable source lifecycle. Until reconstruction admits them as referenced evidence, the synthesis must label them as unadmitted leads or remove the claims they support.

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

The implementation recon reported that AutoGPT Classic and both major BabyAGI lines are archived or unsupported; AutoGen is in maintenance mode in favor of Microsoft Agent Framework; DeerFlow 2.0 is a ground-up rewrite; and OpenHands shifted toward a separate Software Agent SDK. These remain unadmitted leads until their source events and records are reconstructed. If admitted, they may establish version lineage; they cannot by themselves prove why systems changed or which architecture is better.

### Recon-pass log

| Pass and date | Purpose | Channels and query families | Coverage dimension | New mechanisms, contradictions, or sources | Marginal information gained |
| --- | --- | --- | --- | --- | --- |
| Academic and empirical landscape — 2026-07-10 | Identify research framings, evaluated mechanisms, benchmarks, and open problems | Reconstructed from agent report; exact queries and returned results incomplete | Foundational/current research and empirical evidence | Eight candidate responsibilities, contradiction clusters, and paper leads | Reported high; not an instrumented marginal-information measure |
| Open implementation landscape — 2026-07-10 | Identify responsibilities expressed in code and materially different control-flow designs | Reconstructed from agent report describing 22 repositories/docs/releases; exact searches and inspection depth incomplete | Open systems across domains and architectures | Twelve implementation-visible responsibilities, eight families, and version-sensitive leads | Reported high; several claims await durable admission |
| Production and cross-cutting landscape — 2026-07-10 | Map disclosures, terminology, and responsibilities across source families | Partly reconstructable from primary tool history and current source records | Open/closed production systems and cross-cutting taxonomy | Eleven-responsibility analytical lens and seven comparison dimensions | Substantive, but not complete provenance or independent corroboration |

### Source-audit status

The approved provenance capture path does not yet exist. Before Checkpoint 1 can complete, this cycle requires:

- a reconstructed source catalog and per-agent/source event history with explicit gaps;
- a generated human source audit showing search channels, host/type/organization distribution, repository depth, dispositions, and concentration warnings;
- a claim-evidence ledger for the synthesis;
- full records for every referenced source;
- removal or explicit lead labeling for unsupported material claims;
- a documented primary verification event for every referenced claim/source/location mapping, with subagent non-self-verification enforced as an additional constraint.

## Analysis plan and case-study status

Deep-dive selection is paused until the provenance system is validated and Checkpoint 1 is re-presented. At Checkpoint 2, the proposal will state batch size and include a responsibility-coverage matrix, exact tags/commits/dates, documentation alignment, evidence mode, and lineage risk. The batch will deliberately include one closed production reference case using Claude Code material supplied by the maintainer; its externally supported behavior will not be presented as inspected internal architecture.

## Consolidation state

The provisional consolidation is `research/syntheses/field-landscape.md`. Complementary academic and implementation passes separately produced responsibility-oriented maps, and the primary consolidation merged them into eleven analytical responsibilities and seven cross-cutting dimensions. Shared framing limits the confidence attributable to convergence. Maintainer review added source-native discovery/navigation and a later narrative layer.

## Refinement and saturation review

Checkpoint 1 evaluates landscape coverage, sourcing coverage, and the three-layer taxonomy, not full topic saturation. The original recon cannot support an accurate saturation or marginal-information claim because query/result provenance was not instrumented. Additional subject-matter recon remains paused; the next useful work is capture infrastructure and honest reconstruction.

## Process retrospective

The parallel split produced complementary maps, but the cycle lacked per-agent provenance logs and a durable proof of primary verification. The primary did not fully limit synthesis to admitted evidence: several implementation details entered prose through direct links or agent reports. This was a structural process failure, not merely a missing-record cleanup. D-003 replaces source-count assurance with instrumented research events, claim-evidence coverage, and a pre-checkpoint source audit.

## Checkpoint record

| Checkpoint | Artifact or version reviewed | Date | Status | Maintainer decision | Conditions or requested changes | Next phase authorized |
| --- | --- | --- | --- | --- | --- | --- |
| Foundation / Stage 0 | D-001 and initial repository foundation | 2026-07-10 | Approved | Continue with first cycle | None recorded | Cycle 1 recon |
| Checkpoint 1 | Landscape, sourcing coverage, and three-layer taxonomy | 2026-07-11 | Conditional remediation | Direction approved; final promotion deferred | Build/test provenance capture; reconstruct Cycle 1; complete source and claim audits; correct independence wording and unsupported claims | Methodology and provenance infrastructure only; no Checkpoint 2 selection |
| Checkpoint 2 | First deep-dive set |  | Not reached |  |  |  |
| Checkpoint 3 | First case-study batch |  | Not reached |  |  |  |
| Checkpoint 4 | First cross-harness synthesis |  | Not reached |  |  |  |
| Checkpoint 5 | First refine and saturation review |  | Not reached |  |  |  |
