# Synthesis: A Provisional Architecture of Language-Model Harnesses

**Maturity:** Analyzed evidence — provisional promotion blocked pending provenance and claim audit
**Cycle:** `research/cycles/field-landscape.md`
**Reconstructed inputs:** Academic/empirical recon report, implementation recon report describing 22 systems, primary production-documentation pass, and sixteen legacy narrative source records; not all inputs are admitted evidence
**Last substantive check:** Partial legacy primary-agent source check, 2026-07-10; not a completed claim-evidence audit
**Reviewed by:** [blank until Checkpoint 1]
**Review date:** [blank until Checkpoint 1]
**Review basis:** Pending remediated Checkpoint 1 review
**Provenance status:** Initial narrative reconstruction completed; formal event and claim reconstruction awaits capture validation. Best attainable class is `reconstructed`

## The question this map should answer

What responsibilities and decisions belong to the software around an unmodified language model?

An inventory such as “prompts, tools, memory, planning, subagents, and evals” is a useful orientation, but it is not yet an architecture. Its categories overlap. A skill is simultaneously a stored artifact, a capability package, and a context-admission policy. A subagent is simultaneously a decomposition choice, a separate context, an execution boundary, and a communication contract. “Memory” may mean current transcript, runtime checkpoint, searchable facts, learned procedures, or the policy that moves information among them.

The first recon therefore points to a more durable organizing idea:

> A harness allocates control, state, capability, and evidence among the model, deterministic code, external environments, other agents, and humans over time.

The architecture is the set of responsibilities that performs that allocation. Named product features are strategies inside those responsibilities.

This is a provisional analytical lens. Complementary academic, implementation, and production-documentation passes produced compatible responsibility-oriented maps, but they shared project framing and are not independent corroboration. The synthesis has not completed its source/claim audit or been tested through an approved case-study batch.

## How to use this map

The responsibility map is one of three organizational layers.

- Source-native vocabulary such as tools, context, memory, planning, skills, workflows, subagents, evaluation, runtime, routing, and self-improvement drives recon and human navigation.
- The responsibilities below provide a multi-label engineering lens. A mechanism may span several; they are not exclusive folders or required search terms.
- A later field guide and curriculum will recombine reviewed knowledge into fewer, approachable narrative modules.

This distinction protects search breadth and readability while preserving the deeper boundaries needed for architectural diagnosis.

## A provisional responsibility map

### 1. Run lifecycle and ingress

This responsibility turns an external event into a bounded or persistent run. It defines what starts work, how identity and tenancy are scoped, whether work is interactive or background, how sessions resume, what can cancel or wake them, and what constitutes completion at the application boundary.

Interactive coding agents make this layer easy to overlook because the terminal prompt supplies it. Google ADK exposes API, CLI, ambient/background, resume, and cancellation paths ([source record](../sources/google-adk-docs.md)). OpenClaw, Hermes, Letta, and other messaging or scheduled-agent systems are candidate lifecycle cases from the implementation recon, but their specific mechanisms remain unadmitted leads.

Lifecycle is provisionally separate from the inner agent loop. A system can have the same think/act loop while behaving very differently because one run is ephemeral and another survives interruption, receives scheduled events, or maintains a durable identity.

### 2. Model and instruction policy

This responsibility selects and configures the model calls that perform cognitive work. It owns provider adaptation, model routing and fallback, inference budget and effort, system instructions, behavioral policies, structured-output contracts, and the use of auxiliary models for summarization, grounding, planning, judging, or extraction.

The model is assumed fixed, but choosing which fixed model sees which task remains a harness decision. Claude Code's current subagent documentation exposes per-subagent model and effort choices ([source record](../sources/anthropic-claude-subagents-docs.md)); Google ADK exposes model routing as a framework concern ([source record](../sources/google-adk-docs.md)). Browser Use and provider-neutral normalization remain recon leads until their source lifecycle is reconstructed and admitted.

This area was underrepresented in `outline.md`. It should not be reduced to “the prompt,” because routing, role-specific calls, API normalization, output contracts, and fallbacks are executable policies.

### 3. Active-context and capability construction

This responsibility determines the model's current view: which instructions, conversation items, files, retrieved memories, tool schemas, skills, examples, artifacts, summaries, and environment observations enter a call; in what order and representation; and what is omitted, deferred, cached, or compressed.

Claude Code documents an active context containing history, files, tool output, persistent instructions, auto memory, skills, system instructions, and tool metadata, with compaction and deferred tool loading as lifecycle policies ([context and memory source record](../sources/anthropic-claude-context-memory-docs.md)). Pi compaction and OpenHands condenser architecture are promising contrast leads, but their direct live links did not complete the durable source-record lifecycle and cannot yet support this synthesis.

Responsibility 3 decides which capabilities are visible in a particular model call: the harness may expose every schema eagerly, reveal tools through search, load a skill only when selected, or omit a disallowed capability from context. Responsibility 5 defines the action representation, authorization, dispatch, and execution produced through those admitted capabilities. Their coupling is an interface to inspect, not shared primary ownership. MCP's prompt/resource/tool primitives illustrate that capability transport and control ownership are related but not identical ([MCP source record](../sources/mcp-architecture-spec.md)).

### 4. Control flow and execution semantics

This responsibility decides what happens next and when the run should stop. Control may reside in a model-directed loop, deterministic code, a graph, an event runtime, a planner/executor split, a search procedure, or a hybrid. It covers scheduling, branches, loops, retries, turn budgets, concurrency, termination, and the boundary between probabilistic judgment and ordinary software.

Anthropic distinguishes predefined workflows from systems where the model directs its own process, then describes chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer, and open-ended loops ([source record](../sources/anthropic-2024-building-effective-agents.md)). Google ADK 2.0 argues for hybrid workflows that reserve deterministic routing for known business logic and use models where dynamic reasoning is needed ([ADK source record](../sources/google-adk-docs.md)). Agentless provides historical empirical counterevidence to the assumption that a freer tool loop is always better: its fixed localization/repair/validation stages were competitive with more autonomous 2024 software agents ([source record](../sources/xia-2024-agentless.md)).

“Planning” is one possible control strategy, not necessarily a standalone organ. It can be an explicit model phase, a symbolic planner, a state graph, a mutable task list, tree search, or simply the model's next-action choice.

### 5. Action and environment mediation

This responsibility defines the model-to-world interface. It determines the action language—structured tool calls, shell commands, edit protocols, generated Python, browser operations, GUI coordinates, workflow commands, or agent handoffs—and the runtime that executes it: host process, container, sandbox, remote workspace, browser, desktop, or distributed worker.

The interface is not cosmetic. SWE-agent explicitly studies the agent-computer interface and reports large historical gains from changing repository navigation, editing, and test interaction ([source record](../sources/yang-2024-swe-agent.md)). Smolagents and differing production edit primitives remain useful recon leads, but they are not admitted evidence until captured in source records at stable versions.

Permissions and containment enter scope here when they change which actions are available, what approval is required, or what result the model sees. They remain outside scope as a general security discipline.

### 6. Observation and feedback construction

Executing an action does not automatically create useful feedback. This responsibility converts environment changes, command output, errors, browser/GUI state, tests, human messages, and tool results into observations the model can interpret. It governs normalization, truncation, pairing of calls and results, grounding, error language, loop/stall detection, and the visibility of state changes.

Browser and desktop agents make perception explicit: screenshots, DOM/accessibility trees, coordinates, and grounding models determine what the model can see. Coding agents make it equally consequential through test output, diffs, file reads, and shell errors. User reports across open agents repeatedly point to malformed or unpaired tool events, runaway retries, and reconstructed sessions with different environment state; these remain leads until analyzed, but they identify observation integrity as a likely failure class.

This responsibility is distinct from verification. An observation reports what happened; a verifier decides whether that evidence satisfies a criterion.

### 7. Durable state and persistence

This responsibility preserves information outside the immediate model call. It includes transcripts, append-only event logs, graph checkpoints, session state, workspace artifacts, task records, cross-session memories, learned procedures, provenance, and lineage. It also governs write authority, retention, indexing, conflict handling, forgetting, and resumption.

LangGraph's checkpoints support durable execution, interruption, inspection, and branching; subgraphs can have per-invocation, per-thread, or no persistence ([source record](../sources/langgraph-runtime-docs.md)). Google ADK separates session history/events, mutable session state, and searchable cross-session memory ([source record](../sources/google-adk-docs.md)). OpenHands' separation of event history from model view remains an unadmitted recon lead.

The recon strongly rejects a single “memory” bucket. At minimum, later studies should distinguish:

- active context, which is transient model input;
- execution state, which allows a run to continue or recover;
- artifacts, which are durable products and intermediate work;
- cross-session knowledge, which can be recalled into other runs;
- procedural knowledge, which changes how future work is performed.

Recent MemoryAgentBench work further separates retrieval, test-time learning, long-range understanding, conflict resolution, and selective forgetting ([source record](../sources/hou-2026-memoryagentbench.md)).

### 8. Decomposition, coordination, and aggregation

This responsibility divides work, gives each part context and authority, coordinates dependencies and concurrency, and recombines results. Strategies include prompt stages, agents-as-tools, handoffs, orchestrator-workers, parallel samples, specialist subagents, debate, event-based actors, and deterministic workflow nodes.

The architectural questions are more important than the agent count: who decomposes; whether workers share or isolate state; what each worker receives; how budgets and cancellation propagate; whether control transfers or returns; how conflicts are handled; and who synthesizes and verifies.

Current evidence is deliberately contested. BenchAgent reports that five of six tested multi-agent workflows trail a matched single-agent baseline under its normalized protocol, while a separately evaluated Claude-Code-style runtime with task-specific subagents, persistent evidence artifacts, and verification performs strongly ([source record](../sources/fu-2026-benchagent.md)). This does not prove that subagents help or hurt universally. It shows why role labels and agent count are poor causal explanations.

### 9. Verification, recovery, and control boundaries

This responsibility decides whether work is acceptable, whether another step is warranted, and how failure changes the run. It includes executable tests, validators, schema checks, critics, approval gates, human interrupts, retry and backoff, rollback, failure escalation, budget enforcement, and stop conditions.

The feedback source matters. A critical TACL survey found little convincing evidence for prompted intrinsic self-correction outside unusually favorable tasks, while reliable external feedback was effective ([source record](../sources/kamoi-2024-self-correction-survey.md)). “Reflection” should therefore be decomposed into error observability, feedback source, critic independence and capability, correction policy, and acceptance/rollback.

Verification inside a task is not the same as evaluation of the harness. A test may tell an agent whether to keep editing; an evaluation suite tells a developer whether that harness policy improves performance across trials.

### 10. Observability and external evaluation

This responsibility records and judges the system from outside the optimized run. It includes traces, event and usage accounting, trajectory views, end-state graders, repeated trials, benchmark adapters, regression suites, cost/latency measures, and failure attribution.

Anthropic explicitly separates the agent harness from the evaluation harness and distinguishes a trajectory from the resulting environment state ([source record](../sources/anthropic-2026-agent-evals.md)). OpenAI's Agents SDK traces model, tool, guardrail, and handoff spans ([source record](../sources/openai-agents-sdk-docs.md)). Research benchmarks increasingly add progress and trajectory diagnosis because final success alone cannot localize failure.

Evaluation is not just a final course module. It is a parallel architecture that determines whether any claimed harness improvement is knowable. Benchmark version, model, tool substrate, context policy, budget, retry policy, sampling protocol, and grader must travel with a result.

### 11. Adaptation and optimization across runs

This responsibility uses evidence from completed runs to change future behavior. The editable object may be stored context, memory, skills, prompts, demonstrations, workflow graphs, tool descriptions, harness code, or the optimizer itself. It includes proposal, evaluation, selection, regression protection, rollback, archives of failures, and human review.

Weng's 2026 synthesis describes a progression from instructions through context, workflows, harness code, and optimizer code ([source record](../sources/weng-2026-harness-engineering.md)). Current research reports promising prompt/program compilation, workflow search, and self-editing agents, but general transfer and regression containment remain weakly established.

Self-improvement is therefore not merely an advanced agent loop. It is an outer lifecycle that depends on trustworthy evaluation, preserved trajectories, bounded edit surfaces, and acceptance policy. The evaluator and authority boundary must not be freely rewritten by the same process they govern.

## Cross-cutting dimensions

The responsibilities describe what must be decided. Several dimensions should accompany every later comparison because they determine how a responsibility is implemented:

1. **Control owner:** model, deterministic code, human, another agent, or external service.
2. **Time horizon:** within one model call, within a run, across resumed runs, across users/projects, or offline between runs.
3. **State ownership and isolation:** shared, copied, summarized, filtered, event-sourced, or independently persisted.
4. **Authority and budget:** permitted tools, approval policy, compute/tokens, turns, wall time, concurrency, and cancellation.
5. **Failure semantics:** retry, replan, compensate, roll back, escalate, abort, or continue with partial results.
6. **Model and version dependence:** which model, harness release, prompt/tool interface, and environment produced the observation.
7. **Evidence position:** observation inside the loop, verifier at a workflow boundary, or evaluator outside the run.

These dimensions are often more discriminating than product feature checklists. Two systems may both “support subagents” while differing on every dimension above.

## Architectural families found during recon

The implementation recon report described 22 systems. Because complete source-event and query provenance was not captured, the examples below are candidate families and leads, not a verified inventory or evidence supporting findings:

| Family | Representative systems | What it makes especially visible |
| --- | --- | --- |
| Model-driven coding loops | Codex CLI, Pi, Gemini CLI, OpenCode, Goose, Aider, SWE-agent | Action interfaces, context policy, approvals, test feedback, tool loops |
| Event-sourced workspace agents | OpenHands and its Software Agent SDK | Event history versus model view, workspace/runtime separation, condensation |
| Explicit graph and durable workflow runtimes | LangGraph, Microsoft Agent Framework, OpenAI Agents SDK, PydanticAI | Code/model control allocation, checkpoints, interrupts, handoffs, tracing |
| Conversational/message-passing multi-agent systems | AutoGen and successors | Event runtimes, communication topology, termination, lineage toward workflows |
| Code-as-action agents | smolagents | Generated programs versus atomic structured calls |
| Browser and computer-use loops | Browser Use, Agent S | Observation encoding, grounding, stall detection, recovery |
| Research pipelines | STORM, GPT Researcher, DeerFlow | Evidence gathering, staged synthesis, source contracts, pipeline-to-general-agent evolution |
| Long-lived personal-agent runtimes | OpenClaw, Letta Code, Hermes Agent | Gateways, scheduling, durable identity, memory, proactive/background lifecycle |

Historical systems such as AutoGPT Classic, BabyAGI, AutoGen, DeerFlow, and older OpenHands architectures were reported as lineage leads. Their status, versions, and architectural transitions require durable source admission before they support any conclusion about production pressure or design evolution.

## Contradictions the research must preserve

Recon found no basis for resolving the following into slogans:

### Model-directed loops versus programmed workflows

ReAct-style interleaving adapts to observations. ReWOO-style planning/execution separation reports efficiency and tool-failure benefits. Deterministic workflows improve predictability and can outperform more autonomous historical systems; they can also become brittle under unanticipated state. The research question is which decisions require model judgment, when, and with what recovery—not whether agents or workflows win universally.

### More turns or context versus usable state

Longer interaction can reveal more evidence, but context position, accumulated noise, lossy compaction, and runaway single turns can erase the benefit. General AgentBench reports a sequential “context ceiling” and a parallel “verification gap” ([source record](../sources/li-2026-general-agentbench.md)). More inference is useful only if state management and candidate selection scale with it.

### More agents versus better organization

Independent sampling and voting sometimes improve pass@K. Controlled comparisons often find role-based multi-agent systems add cost and communication loss without matched quality gains. The variables to isolate are diversity, decomposability, context partitioning, communication, aggregation, verifier quality, and compute—not count.

### Reflection versus grounded correction

Positive self-refinement systems report gains, while critical work finds intrinsic self-feedback unreliable and vulnerable to self-bias. Executable or independent feedback is a different mechanism from asking the same model to reconsider. Later analysis must compare feedback provenance and acceptance rules.

### Rich general substrates versus specialized interfaces

General tool ecosystems improve reach, yet specialized ACIs and domain workflows can produce better reliability and lower context cost. General AgentBench reports degradation when agents move from specialized environments to one broad substrate. The relevant trade is generality versus interface fit, discovery burden, and evaluation complexity.

### Benchmark progress versus valid measurement

Rapid leaderboard gains can coincide with contamination, broken tests, changing datasets, and inconsistent budgets. A harness result without a pinned evaluation substrate is not durable evidence.

## How this complements the seed outline

The outline identified most important subject matter but mixed responsibilities with strategies and maturity stages. Its familiar terms remain useful for discovery, navigation, and teaching. The provisional responsibility lens suggests these analytical distinctions:

- Keep the agentic loop, but study it under control flow and execution semantics rather than treating it as the whole architecture.
- Split “tools” into active capability admission, action representation/environment mediation, and observation construction.
- Split “context” and “memory” by temporal role: active context, runtime state, artifacts, cross-session knowledge, and procedural adaptation.
- Treat skills as one strategy for packaging and admitting procedural capability, not automatically a peer architectural layer.
- Treat planning as a family of control strategies that may be model-driven, symbolic, graph-based, search-based, or absent.
- Study subagents through decomposition, context/state isolation, control transfer, concurrency, aggregation, and verification.
- Separate in-loop verification and recovery from outside-loop observability and evaluation.
- Add run lifecycle/ingress and model mediation/routing, both visible in current implementations but thin in the outline.
- Keep self-improvement as an outer lifecycle that can edit several inner responsibilities.

The source-facing corpus should retain familiar modules and aliases, while cases are multi-labeled with the deeper responsibilities. A later teaching sequence may use tools, context, memory, and subagents without pretending those are exclusive architectural boundaries.

## Candidate deep-dive pool for Checkpoint 2

Checkpoint 1 remediation and provenance validation must finish before the first batch is selected. The recon report currently offers this unapproved candidate pool for later architectural contrast:

- **Codex CLI** — large, current model-driven coding runtime with tool registry, policy/sandboxing, context management, sessions, hooks, and delegation.
- **Pi** — deliberately small/extensible coding core with unusually explicit branch and compaction semantics and externalized containment.
- **OpenHands Software Agent SDK** — event-backed conversation state, workspace/runtime separation, and pluggable model views/condensers.
- **LangGraph** — explicit state graphs, checkpoint durability, interrupts, dynamic fan-out, and subgraph persistence choices.
- **SWE-agent ACI** — implementation plus published interface-design evidence.
- **smolagents** — code-as-action versus structured tool calls.
- **Browser Use or Agent S** — observation, grounding, loop detection, and recovery in browser/desktop environments.
- **STORM** — evaluated staged research pipeline with perspective-guided evidence collection.
- **Hermes, Letta Code, or OpenClaw** — long-lived lifecycle, gateways/scheduling, and persistent agent identity.
- **General AgentBench and BenchAgent** — evaluation substrates for generality, test-time scaling, and multi-agent claims rather than product case studies.
- **Self-correction evidence bundle** — positive and negative studies analyzed together.
- **Memory benchmark lineage** — how the target evolves from recall to experience reuse, conflict resolution, and forgetting.

The batch should not contain eight similar coding agents simply because their code is accessible. It should cover distinct control, state, action, observation, lifecycle, and evaluation architectures.

## Known gaps after this pass

- The recon has breadth but has not cloned and pinned the candidate repositories; moving-branch observations remain provisional.
- Few studies isolate one harness mechanism while holding model, tools, prompt, context policy, budget, and evaluator constant.
- Closed production harnesses expose behavior and controls but rarely causal implementation detail.
- Cost, latency, variance across trials, and long-horizon reliability are inconsistently reported.
- Memory evidence still emphasizes recall more than procedural learning, provenance, correction, and safe forgetting.
- Multi-agent studies confound compute, diversity, roles, communication, and evaluator quality.
- Research-agent citation presence is easier to measure than source selection and claim/source alignment.
- Browser and computer-use studies confound model perception/grounding improvements with harness changes.
- There is no stable shared vocabulary for agent runtime, workflow engine, environment service, gateway, and application.
- Permissions, lifecycle triggers, model routing, and failure recovery are visible in code but underrepresented in comparative research.

## Checkpoint 1 recommendation

Directionally accept a three-layer model: source-native discovery/navigation, the responsibility map as a provisional analytical lens, and a later narrative/curriculum layer. Final promotion is deferred until provenance reconstruction and claim/source audits are complete. Checkpoint 3 will test whether the lens produces clearer comparisons and record boundaries that blur or fail.
