# Hermes Agent v0.18.2

**Status:** Maintainer-reviewed implementation evidence under D-012

**Artifact ID:** `field-landscape-case-hermes-agent-v0-18-2`

**Implementation boundary:** `NousResearch/hermes-agent`, annotated tag `v2026.7.7.2`, tag object `b7751df34688835a108e0d630f3495fc11f3df79`, dereferenced commit `9de9c25f620ff7f1ce0fd5457d596052d5159596`, package version `0.18.2`

**Scope:** [Pre-analysis boundary](hermes-agent-v0.18.2-scope.md)

**Claim ledger:** [Hermes claims](../claims/hermes-agent-v0.18.2.md)

**Primary evidence records:** [CP2-S009](../sources/cp2-hermes-agent-v0.18.2.md), [CP2-S005](../sources/cp2-openclaw-v2026.6.6.md), [CP2-S001](../sources/cp2-pi-v0.80.6.md), [CP2-S002](../sources/cp2-openhands-sdk-v1.35.0.md), [PI-S002](../sources/semenov-2026-beyond-compaction.md), [PI-S003](../sources/cim-2026-parallel-compaction.md), [FL-S006](../sources/fu-2026-benchagent.md), [FL-S008](../sources/hou-2026-memoryagentbench.md), [FL-S009](../sources/kamoi-2024-self-correction-survey.md), and [FL-S002](../sources/anthropic-2026-agent-evals.md)

**Provenance and review:** [Complete source and claim-evidence audit](../provenance/hermes-agent-case-audit.md) passes the fixed `provisional-promotion` profile; the [independent-review dispositions and focused verification](hermes-agent-v0.18.2-review.md) are complete; the maintainer approved D-012 and accepted the case as a reviewed finding on 2026-07-18

## Executive finding

Hermes is best understood as a model-directed tool loop surrounded by several programmed policy layers that should not be collapsed into one idea of “the agent.” The ordinary loop owns budgets, persistence, request repair, tool validation, retries, context compression, and finalization. A surface-sensitive verification policy may refuse a first completion after code changes and ask the same agent to produce fresh execution evidence. Optional persistent `/goal` mode adds a separate judge between turns. These layers govern different contracts: protocol integrity, operational recovery, coding-work evidence, and goal acceptance. None is a universal proof that an arbitrary task is correct. ([C005](../claims/hermes-agent-v0.18.2.md#c005), [C011](../claims/hermes-agent-v0.18.2.md#c011), [C012](../claims/hermes-agent-v0.18.2.md#c012))

Hermes implements an active across-run adaptation mechanism. Its background review can change durable memory and skills from conversation content, user corrections, preferences, and observed techniques; a curator later maintains the skill collection using activity and recency, with optional model consolidation. Those changes can alter future behavior, and fresh defaults allow them without human approval. The observed loop does not measure whether a change improved task outcomes, attribute improvement to that change, or select changes against a success objective. “Self-improving” is therefore too strong as an effectiveness claim: the implementation establishes persistent adaptation, not demonstrated optimization. ([C014](../claims/hermes-agent-v0.18.2.md#c014), [C015](../claims/hermes-agent-v0.18.2.md#c015), [C019](../claims/hermes-agent-v0.18.2.md#c019))

The case exposes a less obvious default problem. A missing configuration file inherits current built-in defaults, while an existing file without `_config_version` is treated as legacy and older versioned files traverse explicit migrations. Those paths can produce different effective settings at the same release. Describing a default without saying no-file fresh, versionless existing, migrated, explicitly configured, or runtime-effective can therefore be factually misleading even at one immutable commit. ([C007](../claims/hermes-agent-v0.18.2.md#c007), [C011](../claims/hermes-agent-v0.18.2.md#c011), [C020](../claims/hermes-agent-v0.18.2.md#c020))

Finally, the retained evidence supports neither treating recurrence between Hermes and OpenClaw as independent convergence nor describing Hermes as a whole-repository OpenClaw fork. It establishes distinct recorded roots, later migration compatibility, and specific named influence or ports. The useful unit of lineage analysis is the mechanism: migration mapping, subagent prompting, permission policy, and streaming behavior have direct links; other similarities remain unresolved until evidence establishes their origin. ([C017](../claims/hermes-agent-v0.18.2.md#c017))

## Boundary and representative configuration

The retained checkout is detached at the approved commit and clean. The tag, tag object, dereferenced commit, package version, remote, repository structure, documentation, test tree, and primary entry points were verified before deep tracing. The written scope selected one source-native path:

`hermes chat` → `hermes_cli.main.cmd_chat` → `cli.main` → `HermesCLI.chat` → `AIAgent.run_conversation` → `agent.conversation_loop.run_conversation` → model/tool loop → turn finalization → SQLite persistence → CLI output.

The case follows that path deeply. Gateway, ACP, cron, batch, delegation, goals, plugins, memory providers, curation, and selected history received targeted inspection when they answered an explicit lifecycle, verification, adaptation, or relationship question. Hosted services, third-party plugins, exhaustive gateways and providers, live default-branch documentation, model-behavior experiments, upstream test execution, and private evaluations stayed outside the boundary. ([C001](../claims/hermes-agent-v0.18.2.md#c001))

Tests at the pinned commit were inspected as executable design evidence but not run, as required by the current case policy. A partial/promisor checkout made some historical objects unavailable without a network fetch into read-only Git metadata. Reachable code, tests, comments, and already verified selection-history records were used; missing history was not silently reacquired.

## One turn, end to end

The classic CLI path has a relatively direct center even though the surrounding repository is broad:

1. `cmd_chat` resolves classic CLI versus TUI, resume/continue, safe-mode and rule/config switches, then calls `cli.main`.
2. `HermesCLI.chat` re-resolves credentials and the effective route for the turn, rebuilds the agent if provider/model policy changed, expands image and `@` references, and records the clean user input in CLI history.
3. `AIAgent.run_conversation` delegates to the extracted conversation-loop implementation.
4. Turn construction copies the current history, restores the primary route after any prior fallback, refreshes MCP capability snapshots where applicable, hydrates task and nudge state, appends and persists the user turn, and builds or reuses the session prompt.
5. The loop materializes a request-local context, calls the model, validates and persists any tool-call block, executes admissible tools, constructs tool observations, and repeats until a programmed boundary accepts or interrupts completion.
6. Finalization records the assistant result and usage, synchronizes optional memory providers, may spawn a best-effort background review, and returns output to the CLI.

This is a model-directed loop, but the model does not own its whole lifecycle or authority. Code controls admission, route changes, budgets, persistence, repair, capability projection, approvals, concurrency, recovery, and when a candidate final answer must be reconsidered. ([C002](../claims/hermes-agent-v0.18.2.md#c002), [C005](../claims/hermes-agent-v0.18.2.md#c005))

Provider policy is resolved rather than hard-wired into that loop. The classic CLI lazily resolves the configured model, provider, API mode, credentials, and eligible provider-scoped credential pool, then rebuilds the agent when the effective route signature changes. Error recovery may rotate credentials within the provider; an exhausted primary route can activate an ordered provider/model fallback. At the next turn, Hermes normally attempts to restore the primary runtime, except while its cooldown remains active. Each attempt rebuilds transport-specific request fields from the active route, including messages, tools, output and reasoning controls, timeouts, request overrides, and provider-routing preferences. This account is bounded to the classic CLI and shared `AIAgent` path, not every adapter. ([C024](../claims/hermes-agent-v0.18.2.md#c024))

## The system prompt is a session snapshot; the request is a turn projection

Hermes builds its system prompt from several sources: identity and SOUL fallback, task-completion and tool-use guidance, project context files, a filtered skill index, built-in memory and user profile, environment and coding context, session/model/provider identity, and date. Project instruction selection uses explicit priority rules rather than concatenating every recognized file family, and skill bodies are retrieved later instead of embedding the entire library. Context-file material is bounded against the model window. ([C003](../claims/hermes-agent-v0.18.2.md#c003))

The full system prompt is normally cached for the session. Each model call then operates on a copy of history and adds ephemeral material: current external-memory recall, `pre_llm_call` plugin context, optional MoA guidance, prefill, tool schemas, provider-required fields, and protocol repairs. The durable message list is not rewritten merely to satisfy one provider. As an analytical inference, these observable stages support retaining R2 and R3 as distinct questions even though they join at request construction. ([C003](../claims/hermes-agent-v0.18.2.md#c003), [C020](../claims/hermes-agent-v0.18.2.md#c020))

The cache creates a subtle consequence. Memory, profile, date, and similar values are assembled as if volatile, but once they enter the cached system prompt they are ordinarily snapshots. A background memory write can persist immediately while remaining invisible in the system prompt until the next rebuild or session. Compression explicitly invalidates and rebuilds the prompt; CLI model or profile changes also invalidate it. This is a code-path inference, not a declared guarantee that every plugin or alternate engine follows it. ([C004](../claims/hermes-agent-v0.18.2.md#c004))

## A model-directed loop inside a recovery envelope

The model normally decides whether to call tools or return text. Around that decision, the program maintains a bounded iteration budget, processes interruption and steering, selects API and fallback behavior, retries transient failures, recognizes context pressure, repairs provider-specific message defects, and decides whether an output is structurally safe to continue from. A fallback route is turn-scoped: the next user turn tries to restore the primary runtime rather than silently making degradation permanent. ([C005](../claims/hermes-agent-v0.18.2.md#c005))

Tool-call handling is deliberately asymmetric. Unknown names and malformed argument JSON can be surfaced back to the model for bounded recovery. When a provider signals that tool-call arguments were truncated, Hermes fails closed and does not execute any affected call because the missing suffix can change the action materially. Assistant tool calls are flushed before side effects, and each result is flushed promptly afterward. These choices protect protocol and recovery invariants; they do not determine whether the chosen action advances the user's real goal. ([C005](../claims/hermes-agent-v0.18.2.md#c005), [C007](../claims/hermes-agent-v0.18.2.md#c007))

Budget exhaustion can produce one final toolless summarizing call. Empty, reasoning-only, partially streamed, malformed-tool, and intent-only responses receive different bounded treatments. Eventually, an admissible plain text completion can end ordinary chat. The finalizer's `completed` state means the runtime produced an accepted completion, not that an independent evaluator proved the task correct. ([C005](../claims/hermes-agent-v0.18.2.md#c005), [C011](../claims/hermes-agent-v0.18.2.md#c011))

## Action authority and model-visible evidence are different stages

The visible tool set is built from configured toolsets, runtime availability, Tool Search deferral, and plugin registration rules. Before execution, request middleware and `pre_tool_call` hooks can rewrite, approve, or block a call; guardrails and optional checkpoints add other boundaries. Registry-level overrides are explicit exceptions to ordinary no-shadowing behavior. The effective authority therefore depends on code, configuration, operator policy, plugin policy, tool origin, and the current runtime—not merely on a schema the model saw. ([C006](../claims/hermes-agent-v0.18.2.md#c006), [C013](../claims/hermes-agent-v0.18.2.md#c013))

Execution output is not automatically the observation shown to the model. Post-execution logic can append guardrail guidance, replace large content with a retrieval stub while retaining it on disk, add subdirectory hints, normalize multimodal values, or let a plugin transform the result. Only then is a tool-role message appended to active context. That distinction is a real R5/R6 boundary: environment action and observation construction are coupled in one path but answer different engineering questions. ([C006](../claims/hermes-agent-v0.18.2.md#c006))

Fresh configuration selects the `local` terminal backend. Foreground commands pass through the configured environment, whose local implementation spawns a shell process directly on the host; local background commands likewise use the host process registry. Docker, Singularity, Modal, Daytona, and SSH are configurable alternatives. Approvals, guardrails, safe mode, working-directory checks, and selective credential filtering can restrict admission or exposure, but they do not turn ordinary local execution into process isolation. Containment is therefore backend- and operator-dependent rather than an invariant of the default CLI path. ([C022](../claims/hermes-agent-v0.18.2.md#c022))

One focused uncertainty remains. Static call tracing suggests a concurrent registry-tool path may traverse execution middleware at both an agent wrapper and the registry dispatcher, while the sequential path appears to use only the inner wrapper. Existing tests do not settle the exact registry-concurrent case, and behavioral execution was not authorized. It is recorded as a test candidate, not a defect. ([C021](../claims/hermes-agent-v0.18.2.md#c021))

## Durable history is not active context

SQLite is the canonical session substrate for the traced path. It stores sessions, messages, usage, parent/compaction state, tool metadata, and lifecycle fields. Message markers make append persistence idempotent, and synthetic scaffolding is excluded. The ordering is intentionally useful for recovery: user input precedes the first model call; an assistant tool-call block precedes side effects; the result follows execution. Optional JSON transcripts do not replace this canonical store. ([C007](../claims/hermes-agent-v0.18.2.md#c007))

Fresh built-in configuration enables in-place compression at fifty percent of the effective context window, with protected head and recent tail. The compressor prunes old tool output and asks an auxiliary model for a structured summary of the middle. The database soft-archives the old active rows and inserts the compacted projection atomically under the same session ID, leaving originals searchable and recoverable. Legacy session rotation remains implemented for configurations where in-place mode is false. ([C007](../claims/hermes-agent-v0.18.2.md#c007), [C008](../claims/hermes-agent-v0.18.2.md#c008))

This is non-destructive at the storage layer and lossy at the model-visible layer. If summary generation fails, some failure classes preserve the current context, while ordinary summary failure can fall back to a static placeholder and drop the middle unless `abort_on_summary_failure` is enabled. Repeated compression triggers an explicit quality warning. Recent compaction studies report task-dependent loss, latency, and run-to-run variation under other agents and models. They identify credible risks; they do not test Hermes's prompt, compressor, protected regions, or release. The honest classification is contested implementation practice, not verified harm or benefit. ([C008](../claims/hermes-agent-v0.18.2.md#c008), [C019](../claims/hermes-agent-v0.18.2.md#c019))

## Memory is bounded state, retrieval, and later adaptation—not one feature

Built-in durable memory uses bounded `MEMORY.md` and `USER.md` files. Fresh defaults enable both and permit writes without approval. File locking, reloading, deduplication, and character limits constrain mutation. One optional external provider can add recall and asynchronous completed-turn synchronization; provider failures are designed not to take down the main loop. Only successful committed built-in writes are mirrored, so staged or failed writes do not become external facts. ([C009](../claims/hermes-agent-v0.18.2.md#c009))

MemoryAgentBench is useful precisely because it does not let “memory” mean file persistence or retrieval alone. It separates accurate retrieval, test-time learning, long-range understanding, and conflict resolution/selective forgetting and reports that no evaluated method masters every dimension. That does not score Hermes. It exposes what remains unmeasured: whether the right facts are written, whether incorrect memories are corrected, whether conflicts are handled, and whether later work improves. ([C019](../claims/hermes-agent-v0.18.2.md#c019))

## Hermes has three different verification layers

The first layer is runtime integrity: request repair, argument truncation handling, retries, persistence, context recovery, cancellation, and protocol closure. It is always part of the ordinary loop.

The second layer is verification-on-stop. After code-like file changes, Hermes can inspect its own execution ledger for fresh passing evidence. If evidence is missing, the candidate final answer and a synthetic nudge stay outside durable history while the same agent is asked to run canonical or focused checks. The policy is bounded and does not execute tests itself. It skips prose-only work and is surface-sensitive: current fresh configuration uses `auto`, enabling interactive and programmatic surfaces while disabling messaging surfaces. ([C011](../claims/hermes-agent-v0.18.2.md#c011))

There is an important population split. “Fresh” here means that no configuration file exists: version checking treats that state as current, so the merged built-in `auto` value applies. An existing file without `_config_version` is instead treated as legacy version zero; when migration runs, an unset or `auto` verification value is written as `false`. Older versioned installations follow the same one-time migration, and an earlier baked-in `true` population is also flipped because maintainers judged the behavior noisy. Explicit and effective runtime values add further variants. The current repository even retains comments from multiple rollout stages around related defaults. This is not an error in immutable pinning; it is evidence that configuration origin and lineage belong in version descriptions. ([C011](../claims/hermes-agent-v0.18.2.md#c011), [C020](../claims/hermes-agent-v0.18.2.md#c020))

The third layer is optional persistent `/goal`. It stores a goal and optional completion contract across turns, invokes an auxiliary judge on each completed turn, and can continue, finish, or wait on background work. A structured contract gives the judge explicit verification and constraint criteria. API failures fail open to continued work, repeated unparseable replies auto-pause, and a fresh default twenty-turn budget prevents unbounded continuation. This is a genuine task-acceptance mechanism, but only when the user enters goal mode, and its judge accuracy has not been evaluated here. ([C012](../claims/hermes-agent-v0.18.2.md#c012))

Kamoi et al.'s self-correction review supports asking where feedback comes from and whether it is reliable; Anthropic's evaluation guidance separates the execution harness from outcome and trajectory graders. Neither validates Hermes's nudge or judge. Together they explain why runtime integrity, model-generated verification evidence, optional judge acceptance, and external evaluation must remain separate claims. ([C019](../claims/hermes-agent-v0.18.2.md#c019))

## Delegation changes scheduling and context, not epistemic independence

`delegate_task` creates child agents with fresh sessions, task IDs, budgets, and focused prompts. Children inherit no broader tool capability than the parent, may use trusted provider/model overrides, skip parent context files and durable memory, and return summaries rather than their full internal trajectories. Long summaries are bounded against parent headroom, while the full content can spill to a cache file for later retrieval. ([C010](../claims/hermes-agent-v0.18.2.md#c010))

Top-level model calls are forced into background delegation; the model's own `background` preference is ignored. An orchestrator child delegates synchronously so it can aggregate worker results inside its turn. Fresh defaults cap concurrent children at three, depth at one, and per-child iterations at fifty; dangerous commands are denied noninteractively unless an operator changes policy. This is programmed coordination around model-selected decomposition. ([C010](../claims/hermes-agent-v0.18.2.md#c010))

BenchAgent provides essential counterpressure. Its controlled internal comparison reports that five of six multi-agent workflows trail a matched single-agent anchor under its protocol, while a separately evaluated runtime performs well without isolating subagents as the cause. Hermes's delegation should therefore be treated as an available architecture with costs, isolation choices, and unmeasured benefit—not as quality improvement by construction. ([C019](../claims/hermes-agent-v0.18.2.md#c019))

## Extensions cross every responsibility

The plugin vocabulary spans model calls, prompts and ephemeral context, tool requests, approvals, execution, result transformation, verification, sessions, subagents, and gateway events. Behavior middleware can rewrite requests and wrap execution. Shell hooks add a consent/allowlist path, while gateway filesystem hooks use another registry. Some approval paths fail closed; many observational or transformational errors are isolated so they do not wedge the main loop. ([C013](../claims/hermes-agent-v0.18.2.md#c013))

This makes “extensions” a poor exclusive responsibility. An extension is a way control enters many responsibilities. For a concrete analysis, the useful questions are what the extension can change, at which lifecycle boundary, under whose authority, with what failure posture, and whether its effects enter durable history. ([C013](../claims/hermes-agent-v0.18.2.md#c013), [C020](../claims/hermes-agent-v0.18.2.md#c020))

## The self-improvement loop adapts artifacts without an outcome objective

Every ten eligible user turns, memory review can become due; every ten eligible model/tool iterations, skill review can become due when `skill_manage` is available. After the user's response is delivered, a best-effort daemon fork reviews the conversation. On the default route it reuses the main model and the current active message snapshot; an explicitly routed alternate model receives a digest. It can write memory or modify skills, while runtime whitelisting denies unrelated tools. ([C014](../claims/hermes-agent-v0.18.2.md#c014))

The isolation work is substantial. The fork does not write its review prompt and answer into the user's canonical session, does not initialize external memory providers, cannot compress the parent's session, cannot finalize the parent's DB row, and uses a noninteractive deny callback. Reachable comments and tests describe prior failures where a review fork polluted the live session and effectively made the next agent “become the curator.” These are concrete failure surfaces and repaired invariants, not measurements of how often users encountered them. ([C014](../claims/hermes-agent-v0.18.2.md#c014), [C018](../claims/hermes-agent-v0.18.2.md#c018))

The skill-review prompt actively favors changes: corrections, frustration, preferences, useful techniques, and consulted skills are signals to create or update reusable instructions. Fresh defaults allow both memory and skill writes without approval. The mechanism can therefore alter future prompts and capabilities from experience. It does not compare a changed artifact against a task-success baseline or retain it because a measured outcome improved. ([C014](../claims/hermes-agent-v0.18.2.md#c014))

The curator operates on a longer horizon. It is enabled by default and deterministically marks or archives skills based on usage and age after configured interval and inactivity conditions. Archival is recoverable and preceded by backup. Model-based consolidation is off by default. `/learn`, meanwhile, is a user-triggered ordinary agent turn that asks for one reusable skill; the learning graph is a view over files, usage metadata, declared relations, and lexical overlap. These mechanisms support adaptation, maintenance, and introspection. They do not establish an optimization objective or outcome improvement. ([C015](../claims/hermes-agent-v0.18.2.md#c015))

## Observability can support evaluation without being evaluation

Hermes records message and tool trajectories, provider/model state, token usage, cache accounting, cost estimates, activity, and lifecycle metadata. Optional Langfuse integration can observe model and tool spans, and batch mode can isolate samples and retain trajectories for later analysis. This gives an evaluator evidence to inspect. The traced default path does not turn those traces into task scores or automatically select policies from measured outcomes. ([C016](../claims/hermes-agent-v0.18.2.md#c016))

This is the R10/R11 boundary in practice. Observability can make improvement possible, and adaptation can change future behavior, while no bridge between them has been established. An operator or external system may close that loop; the pinned repository cannot establish private practice. ([C015](../claims/hermes-agent-v0.18.2.md#c015), [C016](../claims/hermes-agent-v0.18.2.md#c016))

## OpenClaw relationship: translation and selective borrowing

The repositories have different recorded roots, and Hermes's root predates the reviewed OpenClaw root. Later Hermes history adds an explicit OpenClaw migration command. The migration translates selected persona, memory, instructions, skills, providers, behavior, session, MCP, messaging, approvals, browser, and secret state while archiving unsupported concepts. That proves operator-facing compatibility, not runtime equivalence. ([C017](../claims/hermes-agent-v0.18.2.md#c017))

Mechanism-level evidence is more precise. Hermes names an OpenClaw-inspired permissions change, models part of its child-orchestrator prompt on an OpenClaw helper, and ports a specific streaming finalization fix. These establish selective influence for those mechanisms. They do not tell us whether Hermes's main loop, persistence, compression, background review, or goal system derive from OpenClaw. Apparent recurrence outside the named links is neither independent corroboration nor inherited behavior until evidence resolves it. ([C017](../claims/hermes-agent-v0.18.2.md#c017))

**Engineering inference:** explicit migration can reduce operator conversion work, but it cannot guarantee semantic equivalence where mapped concepts have different lifecycle, context, authorization, or persistence contracts. Unsupported concepts are archived for manual handling. No migration-success or outcome evidence was inspected. A future learning comparison should show those boundary changes instead of counting feature names. ([C023](../claims/hermes-agent-v0.18.2.md#c023))

## Responsibility-lens diagnostic

The narrative above uses Hermes's own terms. Applied afterward, the provisional lens yields this bounded map:

| Responsibility | Hermes mechanisms | Case result |
| --- | --- | --- |
| R1 lifecycle and ingress | CLI process/session, user turn, goal continuation, gateway/ACP session, cron run, batch sample, background review | Strong coverage; requires scale and ingress-origin labels |
| R2 model and instruction policy | route/provider selection, system guidance, project instructions, skills, goal/background auxiliary models | Distinct but configuration- and plugin-owned |
| R3 active context and capabilities | cached prompt, call-local history projection, memory/plugin context, tool schemas, prefill | Strong coverage; session snapshot is not durable state |
| R4 control and execution semantics | bounded model/tool loop, retry/fallback, persistent goal wrapper, background delegation | Model-directed core inside programmed envelopes |
| R5 action and environment mediation | tool definitions, middleware, approvals, guardrails, checkpoints, backend selection, host/container/remote dispatch | Strong coverage; several control owners and backend-dependent containment |
| R6 observation and feedback | result transformations, spill stubs, hints, multimodal normalization, verification ledger | Distinct layer after execution |
| R7 durable state and persistence | SQLite sessions/messages, archived compaction rows, bounded memory/profile files, optional providers | Federation of durable stores and projections |
| R8 coordination and aggregation | background children, synchronous orchestrator children, summary reinjection, MoA optional | Available; effectiveness unestablished |
| R9 verification, recovery, controls | malformed-call recovery, persistence ordering, verification-on-stop, `/goal` judge, approvals | Must name runtime integrity, coding evidence, and task acceptance separately |
| R10 observability and evaluation | usage/cost, traces, tests, batch trajectories, optional Langfuse | Evidence collection stronger than default outcome evaluation |
| R11 across-run adaptation | memory/skill review, curator, `/learn`, learning graph | Adaptation present; outcome optimization not established |

## Taxonomy friction

Hermes supplies evidence for every standing friction question:

- **TF-001 — `observed`:** process, CLI/gateway/ACP session, user turn, model iteration, tool call, compression boundary, goal continuation, cron run, batch sample, delegated child, and background review are materially different lifecycles. `on_session_end` is even fired after each `run_conversation` turn while actual memory-provider session shutdown occurs later, making lifecycle naming friction concrete. ([C002](../claims/hermes-agent-v0.18.2.md#c002))
- **TF-002 — `observed`:** R2, R3, and R5 remain useful questions, while prompt caching, tool schemas, plugins, skills, route changes, and approvals make their effective boundary a joined runtime construction. ([C003](../claims/hermes-agent-v0.18.2.md#c003), [C006](../claims/hermes-agent-v0.18.2.md#c006))
- **TF-003 — `observed`:** request authorization, raw execution, result transformation, persistence, and model-facing observation are separate stages. ([C006](../claims/hermes-agent-v0.18.2.md#c006))
- **TF-004 — `observed`:** plugins, middleware, skills, project rules, shell hooks, memory providers, verification hooks, and background review inject policy across responsibilities. ([C013](../claims/hermes-agent-v0.18.2.md#c013))
- **TF-005 — `observed`, with a counterexample to “verification absent”:** Hermes has extensive runtime integrity plus a narrow default-on-for-fresh-interactive coding evidence policy and an optional goal judge. The distinction is still needed, but task verification cannot be represented as simply present or absent. ([C005](../claims/hermes-agent-v0.18.2.md#c005), [C011](../claims/hermes-agent-v0.18.2.md#c011), [C012](../claims/hermes-agent-v0.18.2.md#c012))
- **TF-006 — `observed`:** runtime code, operator configuration, model, provider, project instructions, plugins, platform adapters, auxiliary judges, and users all own consequential control. “Framework/application/model” is too narrow as a final owner vocabulary. ([C003](../claims/hermes-agent-v0.18.2.md#c003), [C013](../claims/hermes-agent-v0.18.2.md#c013))
- **TF-007 — `observed`:** durable memory and skill changes adapt future behavior; curation uses activity/recency; no inspected loop selects changes by measured outcome improvement. ([C014](../claims/hermes-agent-v0.18.2.md#c014), [C015](../claims/hermes-agent-v0.18.2.md#c015))

Hermes adds two candidate questions for Checkpoint 3. First, **configuration generation** may be a cross-cutting version dimension: no-file fresh, versionless existing, versioned migrated, explicit, and effective runtime values can differ. Second, **lineage is mechanism-level**: one pair of systems can contain direct ports, compatibility translation, unresolved similarity, and separately developed mechanisms simultaneously. Neither is an approved taxonomy change. ([C017](../claims/hermes-agent-v0.18.2.md#c017), [C020](../claims/hermes-agent-v0.18.2.md#c020))

## Negative findings and what remains unknowable

- A cached system prompt means a successful mid-session memory write is not necessarily immediately model-visible.
- Runtime `completed` does not mean an arbitrary task passed independent acceptance.
- Verification-on-stop does not run tests by itself, covers a bounded task class, and varies by surface and configuration history.
- `/goal` is optional, judge failures continue fail-open, and judge quality is unmeasured.
- Delegation availability and isolation do not establish quality improvement or independent verification.
- Background review can write future policy without outcome measurement or, under fresh defaults, human approval.
- Curator activity/recency maintenance is not outcome optimization; model consolidation is off by default.
- Memory files, retrieval, and external-provider synchronization do not establish memory accuracy or downstream benefit.
- Fresh local terminal execution is direct host execution; policy checks are not a sandbox, and isolated backends are optional.
- Traces and batch trajectories support evaluation but are not themselves outcome evaluation.
- Migration compatibility and selected ports do not establish whole-system descent or independent convergence.
- Private deployments, user configurations, hosted services, third-party plugins, external memory internals, unpublished evaluations, task-success rates, and real-world failure incidence remain unknowable.

## Research evidence: qualification rather than validation

The targeted external evidence is useful because it prevents implementation sophistication from becoming an outcome claim:

| Hermes practice | Relevant evidence | Honest conclusion |
| --- | --- | --- |
| LLM summarization and active-context compression | PI-S002 and PI-S003 report loss, latency, and variance under other protocols | Credible risk and contested practice; Hermes itself untested |
| Delegated children and orchestration | FL-S006 reports matched multi-agent underperformance in most tested workflows | Availability is not benefit; Hermes causal effect untested |
| Durable memory, review, and curation | FL-S008 separates memory competencies and reports broad limitations | Persistence/adaptation do not establish accurate or useful memory |
| Verification nudges and goal judge | FL-S009 emphasizes reliable feedback; FL-S002 separates trajectory and outcome evaluation | Feedback source and evaluation protocol matter; Hermes judge/nudge unvalidated |

No broad search was performed. These already admitted sources answered explicit questions raised by the implementation. None directly evaluates Hermes v0.18.2. ([C019](../claims/hermes-agent-v0.18.2.md#c019))

## Pilot-method retrospective

The scope artifact held. The classic CLI path stayed the narrative spine, while alternate ingresses and large optional subsystems were inspected only to test lifecycle, default/optional, verification, adaptation, and lineage questions. That avoided turning a repository with gateway, ACP, cron, batch, plugins, memory providers, tools, and UI surfaces into a feature catalog.

The main cost drivers were not line count alone. They were distinguishing fresh defaults from migrated configuration, separating session-cached prompt content from durable memory, tracing persistence relative to side effects, and preventing “self-improvement” terminology from smuggling in an outcome claim. The retained subject-research windows span approximately 55 minutes of wall time, from 21:51 to 22:46 UTC, with primary and two bounded research subagents working in parallel; that interval is not a sum of human-equivalent labor. Targeted tests and history were most useful as invariant and failure-surface evidence. No upstream tests were executed.

The responsibility lens continued to work best as a closing diagnostic, not an outline. It exposed real asymmetries—especially R7/R3, R5/R6, R9's layered verification, and R10/R11—without forcing the narrative into eleven repetitive sections. The method remains practical, but the final batch review should explicitly adopt configuration-generation and mechanism-lineage annotations if the four cases support them.

## Research trail and provenance overhead

The case used the retained pinned repository and already admitted evidence only. There was no new web search, no replacement source discovery, no moving-branch projection, and no manually authored search-result batch. Two bounded subagent traces inspected non-overlapping core and supporting surfaces; the primary agent re-opened and verified the load-bearing entry, prompt, loop, tool, persistence, compression, verification, goal, memory, delegation, adaptation, test, and relationship locations before writing claims.

The complete audit records 352 native observations: 349 classified automatically and three linked through one human-authored resolution batch. It records ten admitted source opens plus three reciprocal repository events, reported as 13 manual capture actions; these are event rows, not 13 separate bookkeeping sessions. All 24 declared claims have 34 source/location mappings and 34 primary verifications across ten referenced records. Six exact-prefix archives verify cryptographically. There were no searches, result windows, manually authored `result_returned` events, unresolved observations, errors, or warnings. Research capture remained secondary to implementation analysis, and no provenance implementation change was required.

## Recommendation for Gate A

The complete audit and focused independent verification pass without a material defect. Subject to maintainer disposition, accept Hermes v0.18.2 as a reviewed case and begin Checkpoint 3. The case adds three pieces the earlier batch lacked: a surface-sensitive verification counterexample, an active across-run artifact-mutation loop, and a mechanism-level lineage problem. It does not close the deferred browser/perception gap and should not be used to claim batch saturation, independent OpenClaw recurrence, or demonstrated self-improvement.
