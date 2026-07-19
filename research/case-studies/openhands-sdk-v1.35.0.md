# OpenHands Software Agent SDK v1.35.0

**Status:** Maintainer-reviewed case

**Artifact ID:** `field-landscape-case-openhands-sdk-v1-35-0`

**Implementation boundary:** `OpenHands/software-agent-sdk`, tag `v1.35.0`, commit `9028562e2d5eda76de662ec9b7584125760eb83f`

**Scope:** [Pre-analysis boundary](openhands-sdk-v1.35.0-scope.md)

**Claim ledger:** [OpenHands SDK claims](../claims/openhands-sdk-v1.35.0.md)

**Primary evidence records:** [CP2-S002](../sources/cp2-openhands-sdk-v1.35.0.md), [OH-S001](../sources/wang-2026-openhands-sdk.md), [CP2-S001](../sources/cp2-pi-v0.80.6.md), [FL-S016](../sources/yang-2024-swe-agent.md), [FL-S009](../sources/kamoi-2024-self-correction-survey.md), [FL-S002](../sources/anthropic-2026-agent-evals.md), [PI-S002](../sources/semenov-2026-beyond-compaction.md), and [PI-S003](../sources/cim-2026-parallel-compaction.md)

**Provenance:** Complete for the bounded case under the approved D-008 compatibility exception; [generated source and claim-evidence audit](../provenance/openhands-sdk-case-audit.md) passes

## Executive finding

OpenHands SDK is not one loop wrapped in a large API. It is a layered execution substrate. A frozen, serializable `Agent` describes model, prompt, tool, context, condenser, and optional critic policy. `LocalConversation` owns mutable run state and repeatedly asks the agent to step. An append-only event tree is the durable interaction record; a separate `View` projects only model-convertible, active-branch, condensation-adjusted events into the next call. Concrete tools turn validated actions into observations. The agent server then surrounds the same local conversation with REST/WebSocket ingress, background-run ownership, leases, concurrency limits, event publication, and crash recovery. ([C001](../claims/openhands-sdk-v1.35.0.md#c001), [C002](../claims/openhands-sdk-v1.35.0.md#c002), [C003](../claims/openhands-sdk-v1.35.0.md#c003))

This design makes several boundaries unusually visible: durable history versus model context, action versus observation, local execution versus deployment isolation, and runtime recovery versus task verification. Its strongest engineering investment is recoverable execution, not proof that a task is correct. The ordinary loop can finish on assistant text or a `FinishAction`; independent critics and the outer `/goal` judge are optional. The repository's tests and the technical report's benchmark and production evidence sit outside that default stopping decision. ([C005](../claims/openhands-sdk-v1.35.0.md#c005), [C011](../claims/openhands-sdk-v1.35.0.md#c011), [C012](../claims/openhands-sdk-v1.35.0.md#c012), [C014](../claims/openhands-sdk-v1.35.0.md#c014))

That combination is the case's central lesson: event sourcing and typed mediation make a harness more inspectable and recoverable, but they do not automatically supply grounded task acceptance. OpenHands provides several places to add such policy; whether a deployment uses them, and whether they improve outcomes, remains configuration- and protocol-dependent.

## Boundary and architecture

The exact tag resolves to the approved commit and a clean detached checkout. The repository contains four version-aligned packages: the SDK abstractions, concrete tools, workspace implementations, and agent server. The legacy `OpenHands/OpenHands` application was not inspected or used to describe this version. Live documentation was not projected backward. The pinned README, code, tests, reachable history, and a separately dated v2 technical report form the evidence boundary. ([C001](../claims/openhands-sdk-v1.35.0.md#c001))

The public `Conversation` constructor is a factory. A local path or `LocalWorkspace` creates `LocalConversation`; a remote workspace creates a `RemoteConversation` and prohibits local persistence arguments. The remote client serializes configuration to an agent server, but the server reconstructs an agent and executes it through another `LocalConversation`. Tool execution therefore ultimately occurs in a local conversation context even when the caller uses the remote facade. ([C001](../claims/openhands-sdk-v1.35.0.md#c001))

The deep trace followed the standalone production path from `Conversation` through `send_message()`, `run()`/`arun()`, `Agent.step()`/`astep()`, model-view preparation, response dispatch, action execution, observation emission, and state persistence. Agent-server creation, execution, cancellation, leases, and crash handling received targeted inspection. Other routers, provider catalogs, tools, workspaces, examples, hosted products, and the legacy application remained outside the case.

## Lifecycle and control ownership

`send_message()` accepts only a user message, resets terminal states such as `FINISHED` or `STUCK` to `IDLE`, activates per-turn skills or extended context, and appends a `MessageEvent`. `run()` moves eligible states to `RUNNING` and repeatedly calls the agent under the conversation-state lock. It stops for pause, cancellation, confirmation, iteration or budget limits, stuck detection, a denied stop hook, or a terminal agent response. The async path deliberately releases the state lock during network-bound LLM I/O, then reacquires it before state mutation. ([C003](../claims/openhands-sdk-v1.35.0.md#c003))

Pause and interrupt have different meanings. Pause waits for a step boundary. Interrupt sets a cancellation token and cancels the active async task; the conversation then backfills error observations for orphaned actions so provider histories retain tool-call/result pairing, emits an interrupt event, and lands in `PAUSED`. The agent server adds another lifecycle scale: it claims a per-conversation lease, starts a background run under an atomic run lock and shared concurrency limiter, publishes pending events before final state, and can re-arm a run when user input arrived during the previous run's cleanup tail. A restored conversation left `RUNNING` by a crash becomes `ERROR`, and the server emits a model-visible error for the first unmatched action rather than executing it again. ([C003](../claims/openhands-sdk-v1.35.0.md#c003), [C011](../claims/openhands-sdk-v1.35.0.md#c011))

This is stronger evidence for the lifecycle-scale friction first observed in Pi. Application/server ownership, conversation lifetime, one invocation of `run()`, agent step, and tool call each have different locks, statuses, and recovery semantics. Calling them all “run lifecycle” is workable only if the analysis also names the scale. ([C016](../claims/openhands-sdk-v1.35.0.md#c016))

## Model policy, active context, and capabilities

`AgentBase` is a frozen Pydantic configuration containing the LLM, tool specifications, MCP configuration, context, prompt policy, optional condenser, optional critic, and concurrency limit. Initialization resolves tool specifications into runtime definitions, filters them, adds built-ins, and rejects duplicate names. It renders a static system prompt plus dynamic agent context and stores both that prompt and the materialized tool schemas in a `SystemPromptEvent`. Subsequent calls combine the current active `View`, the optional condenser, the current LLM, and the runtime tool map. ([C004](../claims/openhands-sdk-v1.35.0.md#c004))

The split is real but not absolute. Explicit plugins can add skills, MCP servers, hooks, and agent definitions; project skills can override names; MCP credentials are late-bound; tools are materialized with workspace state; path-triggered rules can append context to later observations. Explicit plugin references are resolved to commits, while ambient plugins are rediscovered on resume and are not pinned. Consequently, a serialized agent is a strong policy boundary, but it is not a complete snapshot of every capability or instruction that a resumed run may receive. ([C004](../claims/openhands-sdk-v1.35.0.md#c004), [C013](../claims/openhands-sdk-v1.35.0.md#c013))

This architecture partly separates Pi's coupled R2/R3/R5 path: model and prompt policy live in `AgentBase`, active context lives in `View`, and execution authority lives in materialized `ToolDefinition` instances plus conversation policy. Plugins and runtime tool resolution join them again at initialization, so the distinctions remain useful only as multi-label questions rather than exclusive ownership bins. ([C016](../claims/openhands-sdk-v1.35.0.md#c016))

## The step loop and stopping semantics

An agent step first executes any previously emitted action still awaiting confirmation or observation. Otherwise it projects the active state into LLM messages, applies condensation if configured, calls the model with the current tool schemas, classifies the response, and dispatches it. Tool calls become action events. Assistant content becomes a message and sets the conversation to `FINISHED`. Reasoning-only or empty output becomes an event plus a corrective user message. A `FinishAction` is another explicit terminal path. Deterministic code therefore owns sampling boundaries, pending-action completion, confirmation, budgets, retries, and status; the model normally chooses the next action and whether to finish. ([C005](../claims/openhands-sdk-v1.35.0.md#c005))

The loop contains targeted recovery for malformed tool calls, provider content-policy errors, malformed history, context overflow, cancellation, and tool exceptions. Those paths preserve protocol validity or keep the run moving. They do not establish task correctness. A run that reaches assistant text or `FinishAction` has satisfied the harness's default stopping contract, not an external specification. ([C005](../claims/openhands-sdk-v1.35.0.md#c005), [C011](../claims/openhands-sdk-v1.35.0.md#c011))

## Actions, authorization, execution, and observations

The tool path is explicit. A model tool call is parsed and normalized, matched to a runtime tool, and validated into a typed Pydantic `Action`. A security analyzer may attach risk. A confirmation policy may pause the conversation. Synchronous `PreToolUse` hooks may block the action. The executor then performs the environment operation and must return an `Observation`, which is wrapped in an `ObservationEvent` and converted into a model `tool` message. Parse and execution failures become model-visible agent errors rather than unpaired exceptions. ([C006](../claims/openhands-sdk-v1.35.0.md#c006))

The boundary has important qualifications. Async `PreToolUse` hooks cannot block. `PostToolUse` hooks observe but do not prevent completed effects. The public `LocalConversation.execute_tool()` helper intentionally bypasses the agent loop, confirmation policy, and security analyzer, making its caller responsible for safeguards. Optional parallel tool execution shares conversation and workspace state; the default limit is one, and correctness above one depends on tools accurately declaring resource keys. Undeclared resources fall back to a tool-wide mutex, while a declared empty set opts out of locking. ([C006](../claims/openhands-sdk-v1.35.0.md#c006), [C007](../claims/openhands-sdk-v1.35.0.md#c007))

OpenHands makes the R5/R6 division clearer than Pi. `Action`, `ToolExecutor`, `Observation`, `ActionEvent`, and `ObservationEvent` are separate types. Yet concrete tools still shape the model evidence: the terminal observation adds cwd, interpreter, exit status, truncates large output, and may save the full output to disk before `ObservationEvent.to_llm_message()` exposes it. The conceptual split is useful; exclusive ownership remains misleading. ([C006](../claims/openhands-sdk-v1.35.0.md#c006), [C016](../claims/openhands-sdk-v1.35.0.md#c016))

Outcome evidence for this design is indirect. SWE-agent's 2024 experiments reported that agent-computer interface choices and associated ablations materially changed coding results under its models and benchmarks. That supports treating action and observation design as consequential, but it does not validate OpenHands's typed layering, authorization sequence, or current-model outcomes. ([C017](../claims/openhands-sdk-v1.35.0.md#c017))

## Environment and containment

`LocalWorkspace` forwards commands and file operations directly to the host. It is not a sandbox. Isolation is a deployment choice: a remote workspace and agent server can place the same SDK stack in a container or managed runtime, but those backends were surveyed rather than fully traced. The technical report explicitly frames this as optional isolation—local by default, remote/containerized when required. This is evidence about architectural allocation, not a security-effectiveness result. ([C008](../claims/openhands-sdk-v1.35.0.md#c008))

The same abstraction therefore supports two materially different trust boundaries without changing the agent loop. A case description that simply says “OpenHands is sandboxed” would be false for the pinned quick-start path; saying it has no containment would also be false for supported remote deployments.

## Durable state, active view, branching, and condensation

`ConversationState` owns mutable metadata and an append-only `EventLog`. File-backed persistence writes base state separately and one JSON file per event. Each event carries a parent; `leaf_event_id` identifies the active head. The `active_branch()` follows that tree, while `View` admits only LLM-convertible events, applies condensation events, excludes internal state/control events, and enforces tool-call pairing and atomicity properties. The state caches the view by watermark and rebuilds it when branch navigation invalidates the linear tail. Resume reloads base state and events, rebuilds the projection, verifies agent compatibility, and applies current runtime values. ([C002](../claims/openhands-sdk-v1.35.0.md#c002))

This separation earns the R7/R3 distinction: storage can retain an event that the current model context excludes, and the active branch can change without deleting history. It also makes recovery analyzable because the durable record, active head, and model projection are not the same object.

Condensation is configurable rather than intrinsic to `Agent`. `AgentBase` defaults to no condenser, and the README's direct `Agent(...)` quick start therefore has none. The `get_default_agent()` preset installs an `LLMSummarizingCondenser`. That condenser preserves an initial prefix and recent suffix, replaces selected model-visible events with an LLM summary, and records the forgotten IDs and summary in a durable `Condensation` event. Token pressure and explicit requests are hard requirements; event-count pressure is soft, and a failed soft condensation can leave the current view unchanged. ([C009](../claims/openhands-sdk-v1.35.0.md#c009))

The OpenHands technical report reports low event-sourcing overhead and external benchmark results, but its broad performance evidence does not isolate condensation quality. Recent compaction preprints identify plausible loss, latency, and variability risks in synchronous LLM summarization under other tasks and models. They qualify the preset without directly testing OpenHands. ([C014](../claims/openhands-sdk-v1.35.0.md#c014), [C015](../claims/openhands-sdk-v1.35.0.md#c015))

## Delegation and aggregation

Delegation is an optional tool, not a primitive scheduler in the core loop. The inspected `DelegateExecutor` spawns separate `LocalConversation` instances from registered agent definitions, copies and resets the parent LLM metrics, can persist children under the parent directory, and shares the parent's workspace path. It then runs delegated tasks in threads, waits for all children, extracts each final response, aggregates plain-text results, and rolls child usage into parent statistics. Confirmation policy is inherited unless the child definition overrides it. ([C010](../claims/openhands-sdk-v1.35.0.md#c010))

This provides parallelism and separate conversation state, but not environment isolation or an independent acceptance layer. The parent receives summarized final responses rather than a typed proof that child tasks succeeded. The implementation is a useful example of R8 being built through R5: coordination is expressed as a tool whose effects happen to be more harness execution.

## Verification, recovery, observability, and evaluation

OpenHands contains three distinct feedback layers that should not be collapsed:

1. Runtime integrity and recovery preserve valid execution: schema validation, view properties, action/observation pairing, retries, cancellation handling, crash recovery, leases, and stuck-pattern detection.
2. Optional in-loop or outer-loop task checks can change continuation: a configured critic may score actions or finish events and trigger bounded refinement; the separate `/goal` controller asks another LLM to judge the transcript after each run and re-prompts until success or a cap.
3. External evaluation lives outside the task loop: unit/regression tests, LLM integration tests, benchmark harnesses, production telemetry, and reported rollout analysis assess the system rather than govern one ordinary `Conversation.run()`. ([C011](../claims/openhands-sdk-v1.35.0.md#c011), [C012](../claims/openhands-sdk-v1.35.0.md#c012), [C014](../claims/openhands-sdk-v1.35.0.md#c014))

The defaults matter. `critic` is `None`. Critic exceptions are logged and return no verdict, so that path fails open. The `/goal` judge is not used by an ordinary run; when configured, an unparseable verdict conservatively returns incomplete, but the judge still evaluates a rendered transcript rather than executable end state. Kamoi et al.'s survey supports treating reliable external feedback as stronger evidence than intrinsic prompted correction, and Anthropic's evaluation guidance separately recommends trajectory and outcome graders. Neither source directly evaluates OpenHands's critic or `/goal` prompt. ([C012](../claims/openhands-sdk-v1.35.0.md#c012), [C015](../claims/openhands-sdk-v1.35.0.md#c015))

Operational observability is extensive: LLM telemetry captures requests, responses, errors, cost and token metrics; server callbacks stream completion logs and stats; events preserve actions, observations, errors, state changes, and condensation; optional Laminar spans cover sync and async paths. The technical report reports a 15-day V0/V1 rollout and replay measurements. No mechanism in the bounded path changes prompts, tools, policy, or routing across runs based on measured outcomes. Persistent conversations and mutable profiles are state/configuration, not demonstrated adaptation. R11 is therefore absent within this boundary, not globally disproven. ([C013](../claims/openhands-sdk-v1.35.0.md#c013))

## What history reveals

Targeted history shows that lifecycle and event integrity are active failure surfaces. Before v1.35.0, fixes released the state lock during async LLM calls, recovered input stranded during a background run's cleanup tail, preserved legacy history when a stored tail did not match the new tree model, bounded native async server runs, and sanitized malformed tool-call recovery. The associated changes include focused regression tests. These commits establish real defects and compatibility work; they do not measure incidence or prove the current implementation free of related failures. ([C011](../claims/openhands-sdk-v1.35.0.md#c011))

The technical report supplies broader but differently scoped evidence: its authors report a 61% reduction in system-attributable errors during a 15-day parallel V0/V1 rollout and sub-millisecond median per-event persistence in replay of 39,870 events. This supports the plausibility of the co-located execution and event-log choices under that deployment. The comparison is not a causal ablation of individual mechanisms, comes from the system's authors, and includes a version family broader than this single tag. ([C014](../claims/openhands-sdk-v1.35.0.md#c014))

## Responsibility-lens map

| Responsibility | OpenHands mechanism | Diagnostic result |
| --- | --- | --- |
| R1 lifecycle/ingress | factory, conversation statuses, run/arun, pause/interrupt, server leases/background tasks | Strong coverage; needs lifecycle-scale labels |
| R2 model/instruction policy | frozen agent/LLM, prompt registry, routing, security prompt, critic/condenser policy | Clear policy home, but plugins and runtime model context cross boundaries |
| R3 active context/capabilities | active `View`, system prompt event, skills/rules, materialized tool schemas, condensation | Cleanly distinct from durable log; joined to R5 during tool initialization |
| R4 control flow | conversation run loop, agent step, response dispatch, goal driver | Multiple nested controllers rather than one loop |
| R5 action/environment mediation | typed actions, analyzer/confirmation/hooks, tool dispatch, workspaces | Strong separation; direct `execute_tool()` is an explicit bypass |
| R6 observations/feedback | typed observations, agent errors, output shaping, extended rule content | Separate event layer, but concrete tools own much shaping |
| R7 durable state | base state, file-backed event tree, leaf navigation, replay | Strong coverage and useful separation from R3 |
| R8 coordination | optional delegate/task tools and outer goal loop | Delegation is a tool-level extension, not core scheduling |
| R9 verification/recovery | schema and view integrity, confirmation, retries, stuck detection, critic, goal judge | Too broad unless runtime integrity and task acceptance are named separately |
| R10 observability/evaluation | event stream, telemetry, metrics, traces, tests, external benchmarks | Strong external layer; no default task acceptance implication |
| R11 across-run adaptation | no observed feedback-to-policy optimization in bounded path | Absent in this case boundary |

## Taxonomy friction after two cases

All four Pi questions recur, but OpenHands supplies counter-shape as well as confirmation. R1's lifecycle-scale issue is stronger. R2/R3/R5 are more explicitly separated, then coupled again by plugin and tool materialization. R5/R6 have distinct types but meet inside concrete observation formatting. Plugins, hooks, rules, profiles, MCP, and registered agents form a cross-cutting injection surface.

OpenHands also exposes a new question: R9 currently groups protocol integrity, operational recovery, authorization, stuck detection, task-success criticism, and acceptance policy. These mechanisms answer different questions and can fail in opposite directions. The case does not justify changing the taxonomy yet; it just makes “verification/recovery” too easy to praise as one capability when task acceptance may still be absent by default. ([C016](../claims/openhands-sdk-v1.35.0.md#c016))

The detailed cross-case classifications are recorded in [the taxonomy-friction register](../TAXONOMY-FRICTION.md).

## Negative findings and limits

- A local workspace is direct host execution, not containment.
- An ordinary run has no independent task-success gate by default.
- Critic and goal-judge presence does not establish judge reliability; the critic fails open on evaluator exceptions.
- Stuck detection recognizes several local repetition patterns but leaves context-window-loop detection as an explicit TODO.
- Parallel tool safety depends on correct resource declarations, and direct tool execution bypasses loop safeguards.
- Default-preset condensation is lossy model summarization; repository mechanics and broad benchmark results do not measure retained task information.
- Ambient plugins can be rediscovered unpinned on resume, limiting deterministic reconstruction of a deployment from serialized core state alone.
- Delegated children share a workspace and aggregate text, not independently verified artifacts.
- The technical report's production and benchmark evidence is valuable but does not isolate the causal contribution of most individual mechanisms.
- Private deployments, hosted configuration, live documentation drift, external evaluators, and downstream applications remain unknowable.
- No across-run policy optimization was found in the bounded path; this is not a claim that no downstream system can implement it.

## Open questions and proposed tests

- Does the event-tree/view design measurably improve recovery and debugging beyond the reported V0/V1 deployment, after controlling for co-location and other redesign changes?
- How much task-relevant information survives repeated `LLMSummarizingCondenser` events across models and long software tasks?
- How accurately does the `/goal` transcript judge predict executable task completion, and when does it over-trust agent assertions?
- How often do critic failures silently permit completion, and should different critic modes fail open or closed?
- Does `tool_concurrency_limit > 1` improve cost or latency without increasing shared-workspace races under realistic tool resource declarations?
- How reproducible is a resumed conversation when ambient plugins or external MCP endpoints change?
- Should task verification and runtime integrity become explicit subdimensions of R9, or is clear narrative labeling sufficient?

## Pilot-method retrospective

The prewritten scope successfully prevented a platform repository from becoming an unbounded second landscape study. Deep inspection stayed on the standalone local path; the agent server, delegation, hooks, workspaces, critic, goal loop, and observability received targeted treatment only where they changed that path. The legacy application and hosted products remained excluded.

Control-flow-first writing scaled better than a package-by-package inventory. The responsibility table again worked best as a closing diagnostic. OpenHands required more analysis than Pi because valid behavior is configuration-dependent and split across SDK, tools, and server, but the scope artifact made those depth decisions explicit rather than accidental.

The lens remained useful. R3/R7 and R5/R6 exposed concrete separations, while R1 and R9 revealed aggregation problems. The main methodological caution is to state defaults and optional policies explicitly: platform repositories contain many mechanisms that are available but not active in the quick-start or ordinary run.

The retained research window spans 10 minutes 51 seconds of transcript time and contains 55 native observations. The window records 43 repository-inspection events, one two-query web-search bundle with nine mechanically captured returned identities, and two web opens of the technical report. This is wall-clock runtime evidence, not a human-equivalent estimate of research effort. The main analytical cost was configuration-sensitive control flow spread across the SDK, tools, workspace, and server packages; the prewritten boundary kept that cost finite.

Provenance overhead remained exception-scaled after the approved D-008 compatibility correction. All 55 observations resolved automatically; no observation-resolution batch and no manually authored `result_returned` event was required. Eight stable source identities were admitted in one semantic pass, and the generated audit records those as eight manual capture actions plus one semantic batch. The transcript prefix is retained with mode `0600` and verified during regeneration. D-008 changed only the adapter's current unified-`exec` compatibility path and focused fixtures; the infrastructure is frozen again.

## Research trail and source coverage

The case began with pin verification and a written scope, then followed the production `Conversation` → `LocalConversation` → `Agent` → tool/observation path. Targeted history and tests were opened only when a traced mechanism raised a lifecycle, recovery, integrity, or default-policy question. One bounded web-search bundle asked for the SDK technical report and research relevant to independent task verification. It returned nine identities. Only the OpenHands report was opened and admitted; the other eight result identities remain visible, unopened leads and support no claim.

Six previously admitted records were reused locally: the reviewed Pi implementation record for taxonomy friction, SWE-agent for interface context, Kamoi et al. and Anthropic for verification/evaluation distinctions, and two compaction preprints for qualification. Their retained limits travel into this case. No source was excluded after substantive inspection, no broad landscape search was attempted, and the second web query produced no additional source worth opening within the bounded question.

The combined [audit](../provenance/openhands-sdk-case-audit.md) is both the complete source audit and claim-evidence coverage audit. It exposes the query, returned and opened identities, repository depth, all eight referenced records, one read-only mechanical alias, 17 declarations, 28 mappings, 28 primary verifications, the archive boundary, and the resolved concentration warning.

## Review scope and attestation

The review scope covers every material implementation, comparison, negative, outcome-evidence, and taxonomy-friction claim in this case and the linked ledger. It excludes the legacy application, hosted deployments, exhaustive provider/tool/workspace behavior, live-doc applicability, benchmark reproduction, model-behavior experiments, and security assurance.

Every material prose claim is linked to a canonical claim ID or explicitly framed as a boundary, question, or limitation. The canonical event log declares all 17 claims, maps them through 28 exact source/location relationships, records 28 primary verification events, and carries a digest-backed prose-to-ledger attestation plus explicit review scope. The maintainer accepted the package as a reviewed finding under D-009.
