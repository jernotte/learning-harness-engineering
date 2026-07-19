# Taxonomy Friction Register

**Last updated:** 2026-07-18
**Taxonomy status:** Stable R1–R11 IDs with D-013's approved R9/R11 labels and cross-cutting annotations; still revisable as coverage expands
**Current evidence:** Maintainer-reviewed Pi v0.80.6, OpenHands SDK v1.35.0, OpenClaw v2026.6.6, and Hermes Agent v0.18.2; selection-level framework/application friction from the deferred LangGraph case

This register accumulates evidence about where the R1–R11 responsibility lens clarifies real harnesses and where it blurs, splits, or omits their mechanisms. It preserves both the evidence behind D-013 and unresolved questions for later cases, rather than treating an approved checkpoint as taxonomy finality.

D-013 retains stable R1–R11 identifiers, approves the refined R9 and R11 labels, requires separate R10 sublayer reporting, and adopts lifecycle/ingress, control-owner/study-object, injection, effective-configuration, and mechanism-lineage annotations. Individual case observations remain evidence rather than universal conclusions, and later counterexamples may reopen these decisions.

## How to use this register

Each implementation case should add evidence in two places:

1. Update the cross-case matrix for every existing friction question the case can test.
2. Add a new issue only when the implementation exposes a materially different boundary problem or missing concept.

Use `observed` only when the implementation contains a concrete mechanism that creates the stated tension. Use `absent` when the implementation provides a meaningful counterexample. Use `uncertain` when the available evidence cannot distinguish the alternatives. A blank cell means the case has not yet been analyzed.

Future changes should still require friction recurring across meaningfully different architectures, evidence that the existing division causes inconsistent or misleading analysis, and an alternative that improves comparison without harming source-native discovery or readable explanation.

## Cross-case comparison matrix

| ID | Friction question | Pi | OpenHands SDK | LangGraph | Browser Use | OpenClaw | Hermes | Claude Code | Current interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TF-001 | Does R1 need explicit lifecycle scales? | Observed: product/session and inner-turn lifecycles differ | Observed: server, conversation, run, step, and tool-call lifecycles differ | Pending | Pending | Observed: gateway, account, worker, durable update, lane, reply operation, session, attempt, schedule, tool, and delivery differ | Observed: process, session, turn, iteration, tool, child, goal, schedule, batch, and background boundaries differ | Pending | Present in all four analyzed architectures; scale and ingress-origin annotations look stronger than a top-level split so far |
| TF-002 | Can R2, R3, and R5 be applied consistently when one runtime path refreshes policy, visible capabilities, and executable tools? | Observed | Observed with partial counter-shape: separate agent policy, view, and tool types reunite during runtime materialization | Pending | Pending | Observed: model/provider, hooks, skills, context engine, prompt, and effective tools converge at each call | Observed: cached policy, request projection, schemas, plugins, routes, and approvals join at runtime | Pending | Keep distinct and multi-label their coupling; component separation varies but dependency recurs |
| TF-003 | Where should tool-output shaping live when it is both part of tool mediation and the construction of model-visible evidence? | Observed across R5/R6 | Observed: distinct action/observation types, but tool executors shape model-visible results | Pending | Pending | Observed: canonical transcript, provider projection, overflow rewrite, and channel payload are distinct layers | Observed: request authority, execution, transformation, persistence, and tool-role observation are distinct stages | Pending | Boundary is useful across all four analyzed cases; implementation and persistence ownership legitimately cross it |
| TF-004 | Is extension or policy injection a cross-cutting analytical dimension rather than another responsibility? | Observed: extensions span most responsibilities | Observed: plugins, hooks, skills, MCP, rules, profiles, and agent definitions alter several responsibilities | Pending | Pending | Observed strongly: hook vocabulary spans model, prompt, message, tool, persistence, session, scheduling, gateway, and delivery | Observed: plugins, middleware, skills, rules, hooks, providers, verification, and background review inject policy across responsibilities | Pending | Approved as a cross-cutting injection-authority dimension, not a new responsibility |
| TF-005 | Does R9 need an explicit distinction between runtime integrity/recovery and task-success verification? | Observed as recovery stronger than task verification | Observed: extensive protocol recovery plus optional, separate critic and goal judge | Pending | Pending | Observed: transport/replay/liveness/delivery integrity is extensive; semantic acceptance is optional or external | Observed with counter-shape: extensive recovery plus surface-conditioned coding-evidence checks and optional goal judge | Pending | R9 now requires separate protocol/runtime integrity, operational recovery, evidence acquisition, and task verification/acceptance facets; no new top-level split |
| TF-006 | Does each responsibility need an explicit framework-versus-application-versus-model control-owner dimension? | Harness chooses concrete policy | SDK supplies defaults and extension mechanisms while callers choose optional policy | Selection-level mismatch: framework mechanisms do not establish application policy | Pending | Observed: core, operator, channel, agent, model, provider, and plugin own different decisions | Observed: runtime, operator, project instructions, model, provider, adapter, extension, evaluator, and user divide control | Pending | Cross-cutting owner annotation works across concrete products and explains the LangGraph case-type mismatch; owner vocabulary needs more than three values |
| TF-007 | Does R11 need to distinguish adaptive memory/context from outcome-driven optimization? | Absent in bounded path | Absent in bounded path | Pending | Pending | Observed: disabled-by-default dreaming changes future memory using recall/diversity/recency, not task outcomes | Observed: active memory/skill mutation and curation use content, correction, usage, and recency without an outcome objective | Pending | R11 is now Across-run adaptation; outcome-driven optimization is reserved for measured outcome-selected change |
| TF-008 | Does a material default claim need an effective-configuration-population annotation? | Uncertain: entry surfaces and extensions vary, but no migration population was analyzed | Observed in a limited counter-shape: direct `Agent` and preset construction activate different policies | Pending | Pending | Uncertain: deployment and plugin configuration vary, but no comparable migration path was traced | Observed strongly: missing, versionless, migrated, explicit, and runtime-effective values can differ | Pending | Effective configuration population is now required when origin or entry surface changes a material claim; generality remains revisable |
| TF-009 | Should lineage and evidentiary independence be recorded per mechanism rather than per repository pair? | Not applicable to the bounded comparison | Not applicable to the bounded comparison | Pending | Pending | Observed as one side of a later migration/influence relationship | Observed: migration translation, documented inspiration, and a direct port coexist with unresolved similarities | Pending | Mechanism-level lineage is now an explicit annotation; recurrence does not become independent corroboration |
| TF-010 | Does R10 need separate reporting of operational observability and external evaluation? | Observed: traces and regression tests exist without task-level evaluation | Observed: telemetry and tests differ from optional critics, goal judging, and external benchmarks | Pending | Pending | Observed: operational records and scenario QA answer different questions | Observed: traces, usage, tests, and reports do not establish task outcomes | Pending | R10 now requires separate observability and external-evaluation reporting under one stable ID |

## Pi v0.80.6

**Case boundary:** `earendil-works/pi`, tag `v0.80.6`, commit `2b3fda9921b5590f285165287bd442a25817f17b`  
**Case study:** [Pi v0.80.6](case-studies/pi-v0.80.6.md)  
**Claim ledger:** [Pi claims](claims/pi-v0.80.6.md)  
**Evidence status:** Maintainer-reviewed case; friction remains provisional pending cross-case evidence

### TF-001 — R1 combines different lifecycle scales

Pi has at least two lifecycle layers that answer different engineering questions:

- The product/session lifecycle covers new, resumed, forked, imported, persistent, and in-memory sessions, plus session-scoped service binding and teardown.
- The inner-turn lifecycle covers provider requests, tool batches, steering insertion, retries, cancellation, settlement, and the decision to request another model turn.

Both fit “what starts, resumes, cancels, and completes a run,” but treating them as one undifferentiated R1 mechanism hides ownership and time horizon. The outer lifecycle belongs largely to `AgentSession` and the CLI/runtime; the inner lifecycle belongs largely to `Agent` and `agent-loop`.

**Evidence:** [C001](claims/pi-v0.80.6.md#c001) and [C002](claims/pi-v0.80.6.md#c002).  
**Hypothesis to test:** R1 may need an explicit scale annotation—such as application, session, task, turn, and tool-call lifecycle—rather than subdivision into more top-level responsibilities.  
**Counterevidence needed:** A materially different harness in which one lifecycle abstraction cleanly governs all relevant scales, or where scale annotations do not improve explanation.

### TF-002 — R2, R3, and R5 meet in one runtime update path

Pi keeps three analytically distinct questions synchronized:

- R2: which model, thinking level, and behavioral instructions govern the next turn;
- R3: which prompt material and tool schemas become visible to the model;
- R5: which tool implementations are actually registered and executable.

`AgentSession` refreshes these together between turns. The conceptual separation remains valuable—the policy author, prompt materializer, and action dispatcher are not the same role—but a case that assigns the update path to only one responsibility would misdescribe the implementation.

**Evidence:** [C003](claims/pi-v0.80.6.md#c003) and [C004](claims/pi-v0.80.6.md#c004).  
**Current treatment:** Multi-label the mechanism and describe the distinct decisions within it. Do not merge the responsibilities after one case.  
**Question for later cases:** Do other harnesses separate policy selection, capability admission, and execution authority into different components, or is Pi's coupling common?

### TF-003 — Tool-output policy spans R5 and R6

Pi's file-read windows, shell-output truncation, error formatting, and full-output pointers are configured as part of tool execution, but their architectural effect is to decide what evidence reaches the next model call. R5 explains how the action runs; R6 explains how its consequences become usable feedback. The same code frequently implements both.

**Evidence:** [C004](claims/pi-v0.80.6.md#c004).  
**Current treatment:** Preserve the distinction because it exposes an important design choice, but permit one mechanism to carry both labels.  
**Question for later cases:** Do event-sourced, browser, or graph-based harnesses separate raw environment results from observation construction more explicitly than Pi?

### TF-004 — Extensions are a cross-cutting policy surface

Pi extensions can register or replace prompts, tools, providers, observations, lifecycle handlers, persistent entries, renderers, commands, containment behavior, and delegation mechanisms. Assigning “extensions” to one responsibility would hide what they alter. Adding an “extensions” responsibility would also be misleading because extension is an implementation technique, not one architectural outcome.

**Evidence:** [C003](claims/pi-v0.80.6.md#c003), [C004](claims/pi-v0.80.6.md#c004), [C007](claims/pi-v0.80.6.md#c007), and [C015](claims/pi-v0.80.6.md#c015).  
**Hypothesis to test:** Extension, middleware, hook, and policy-injection surfaces may belong in the cross-cutting comparison dimensions alongside ownership, authority, time horizon, state isolation, and budget.  
**Counterevidence needed:** Cases where extensions are narrow enough to classify cleanly, or where existing ownership and authority dimensions already capture the useful distinction.

## Distinctions that worked in Pi

Friction is not evidence that the entire lens failed. Pi also showed several divisions that made the architecture easier to understand:

| Distinction | What it revealed |
| --- | --- |
| R3 active context vs. R7 durable state | The append-only session tree retains information that the compaction-aware model projection no longer exposes. |
| R5 action mediation vs. R6 observation construction | Executing a command and deciding what result the model sees are separable design questions even when one tool implementation handles both. |
| R9 verification/recovery vs. R10 external evaluation | Pi has substantial runtime recovery and regression testing without a default task-success verifier or task-level evaluation harness. |
| R8 coordination vs. extension capability | Pi can implement subagents through an optional extension without delegation becoming a primitive of the default loop. |

Future cases should record both recurring friction and successful distinctions. Checkpoint 3 needs evidence about what to preserve as much as evidence about what to change.

## OpenHands Software Agent SDK v1.35.0

**Case boundary:** `OpenHands/software-agent-sdk`, tag `v1.35.0`, commit `9028562e2d5eda76de662ec9b7584125760eb83f`

**Case study:** [OpenHands SDK v1.35.0](case-studies/openhands-sdk-v1.35.0.md)

**Claim ledger:** [OpenHands SDK claims](claims/openhands-sdk-v1.35.0.md)

**Evidence status:** Maintainer-reviewed case; classifications informed D-013 and remain bounded case evidence

### TF-001 — Lifecycle scale recurs more strongly

OpenHands has at least five relevant scales: agent-server/service ownership, persistent conversation, one `run()` invocation, agent step, and tool call. They use different locks, status transitions, cancellation paths, limits, and recovery rules. The agent server can restore a crashed conversation and manage stranded ingress; `LocalConversation` owns pause and interrupt; the agent step owns sampling and pending actions; executors own in-flight tool interruption.

**Classification:** `observed`.

**Evidence:** [C003](claims/openhands-sdk-v1.35.0.md#c003) and [C011](claims/openhands-sdk-v1.35.0.md#c011).

**Effect on Pi hypothesis:** Strengthens the need to name lifecycle scale. It does not yet show that R1 should split into multiple top-level responsibilities; a scale annotation may be enough.

### TF-002 — Separation exists, but runtime materialization reconnects it

OpenHands provides clearer component boundaries than Pi. Frozen agent configuration owns model and prompt policy; `View` owns active model-visible history; typed tool definitions and executors own action authority. Yet lazy plugin loading, skills, MCP discovery, prompt rendering, tool resolution, and `SystemPromptEvent` creation join those decisions when a conversation becomes ready.

**Classification:** `observed`, with a partial counterexample to the idea that coupling must live in one component.

**Evidence:** [C004](claims/openhands-sdk-v1.35.0.md#c004).

**Effect on Pi hypothesis:** Supports keeping R2, R3, and R5 distinct while multi-labeling materialization paths. Component separation does not eliminate the architectural dependency.

### TF-003 — Type separation clarifies R5/R6 without removing overlap

The SDK represents `Action`, `ToolExecutor`, `Observation`, `ActionEvent`, and `ObservationEvent` separately. This makes the raw action/result boundary easier to trace than in Pi. Concrete executors nevertheless format the evidence: terminal results add execution metadata, truncate large output, and retain a full-output pointer before the observation becomes a model message.

**Classification:** `observed`.

**Evidence:** [C006](claims/openhands-sdk-v1.35.0.md#c006).

**Effect on Pi hypothesis:** Confirms the distinction is analytically valuable and confirms that one implementation unit may legitimately carry both labels.

### TF-004 — Injection is cross-cutting even in a typed platform

Plugins can contribute skills, MCP servers, hooks, and agent definitions. Hooks can block actions or extend messages; path rules append content to observations; profiles and registered agents change configuration; ambient plugins can be rediscovered on resume. These are not one architectural outcome, and assigning all of them to a new “extensions responsibility” would obscure what they change.

**Classification:** `observed`.

**Evidence:** [C004](claims/openhands-sdk-v1.35.0.md#c004), [C006](claims/openhands-sdk-v1.35.0.md#c006), and [C013](claims/openhands-sdk-v1.35.0.md#c013).

**Effect on Pi hypothesis:** Cross-cutting policy injection now recurs in two architectures with different extension systems. It remains a proposed comparison dimension rather than a taxonomy revision.

### TF-005 — R9 hides a consequential default/optional distinction

OpenHands has extensive runtime integrity and recovery: typed actions, view-property enforcement, paired action/observation repair, cancellation cleanup, leases, stuck detection, and crash restoration. Task-success verification is separate and optional: the critic defaults to absent and the `/goal` transcript judge is an outer mode rather than ordinary run behavior. Saying “OpenHands has strong R9” without naming the subproblem would make the default task-acceptance gap nearly invisible.

**Classification:** `observed`.

**Evidence:** [C011](claims/openhands-sdk-v1.35.0.md#c011) and [C012](claims/openhands-sdk-v1.35.0.md#c012).

**Hypothesis to test:** R9 may need explicit subdimensions for protocol/runtime integrity, operational recovery, authorization/control, and task-success acceptance. A narrative label may be sufficient; no split is approved.

## Distinctions that worked in OpenHands

| Distinction | What it revealed |
| --- | --- |
| R3 active context vs. R7 durable state | The event tree, active head, and model `View` are different structures with different recovery and visibility semantics. |
| R5 action mediation vs. R6 observation construction | Separate types expose the handoff even though concrete tools implement output shaping. |
| R9 in-loop control vs. R10 external evaluation | Critics and `/goal` can affect continuation; regression tests, telemetry, production analysis, and benchmarks evaluate from outside. |
| R8 coordination vs. R5 tool execution | Delegation is implemented as an optional tool over child conversations rather than as a core scheduler primitive. |

## OpenClaw v2026.6.6

**Case boundary:** `openclaw/openclaw`, annotated tag `v2026.6.6`, dereferenced commit `8c802aa683510c7f7503597b54c3021733245e59`

**Case study:** [OpenClaw v2026.6.6](case-studies/openclaw-v2026.6.6.md)

**Claim ledger:** [OpenClaw claims](claims/openclaw-v2026.6.6.md)

**Evidence status:** Maintainer-reviewed case evidence; classifications informed D-013 and remain bounded case evidence

### TF-001 — Lifecycle scale expands beyond the model run

One admitted Telegram message crosses a gateway account task, polling worker, durable ingress record, chat/topic lane, reply fence, per-session reply operation, follow-up queue, embedded run, model attempt, tool execution, transcript update, stream draft, and final delivery. Cron and heartbeat introduce scheduled-job and wake lifecycles with different session and delivery rules.

**Classification:** `observed`.

**Evidence:** [C002](claims/openclaw-v2026.6.6.md#c002), [C005](claims/openclaw-v2026.6.6.md#c005), and [C013](claims/openclaw-v2026.6.6.md#c013).

**Effect on the existing hypothesis:** A scale annotation now recurs across three concrete systems. OpenClaw additionally suggests naming ingress origin—human channel, schedule, heartbeat, or background completion—inside R1. The evidence still favors annotation over several new top-level responsibilities.

### TF-002 — Call materialization joins R2, R3, and R5

Model/provider/auth selection, hook and provider instruction contributions, bootstrap files, skills, context-engine projection, tool schemas, and executable tool policy converge during the embedded attempt. The effective tool inventory simultaneously determines runtime registration, prompt-visible names, context-engine availability, and transcript replay acceptance.

**Classification:** `observed`.

**Evidence:** [C006](claims/openclaw-v2026.6.6.md#c006) and [C008](claims/openclaw-v2026.6.6.md#c008).

**Effect on earlier cases:** OpenClaw resembles Pi's runtime coupling but distributes ownership across more components. OpenHands remains the stronger partial counter-shape because it separates agent policy, active view, and typed tools more explicitly. The responsibilities should remain distinct and multi-label.

### TF-003 — One result has canonical, provider, recovery, and delivery forms

OpenClaw can retain a canonical append-only tool result, present a bounded clone to the provider, persist a rewritten result only during overflow recovery, and separately turn agent output into channel delivery payloads. The same environment event therefore crosses action mediation, observation construction, active context, persistence, and outbound presentation.

**Classification:** `observed`.

**Evidence:** [C009](claims/openclaw-v2026.6.6.md#c009) and [C010](claims/openclaw-v2026.6.6.md#c010).

**Effect on earlier cases:** This strengthens the R5/R6 distinction while making exclusive ownership even less plausible. Browser evidence remains the strongest planned test of whether perception-grounded systems need additional observation subdimensions.

### TF-004 — Injection is broader than an extension subsystem

The pinned hook vocabulary spans model resolution, prompt construction, messages, tools, transcript persistence, sessions, subagents, gateway lifecycle, heartbeat, cron, dispatch, and execution environment. Memory slots, context engines, channel plugins, skills, and alternate harness plugins add other injection forms.

**Classification:** `observed`.

**Evidence:** [C015](claims/openclaw-v2026.6.6.md#c015).

**Effect on earlier cases:** Cross-cutting injection now recurs in three systems. The evidence supports carrying it as a comparison dimension; adding a twelfth “extensions” responsibility would still confuse a technique with an architectural outcome.

### TF-005 — Runtime integrity remains different from task acceptance

OpenClaw checks and repairs transport, authorization, deduplication, lane ownership, session locks, transcript pairing, schema/policy, replay safety, liveness, context overflow, and delivery. The ordinary path can still accept a model completion without an independent semantic judge. Finalization hooks and repository QA are optional or external layers.

**Classification:** `observed`.

**Evidence:** [C007](claims/openclaw-v2026.6.6.md#c007), [C016](claims/openclaw-v2026.6.6.md#c016), and [C017](claims/openclaw-v2026.6.6.md#c017).

**Effect on earlier cases:** The three-case recurrence makes an explicit R9 internal vocabulary increasingly useful: protocol/runtime integrity, operational recovery, authorization/containment, and task-success acceptance. Whether those become formal subdimensions or disciplined narrative labels remains a Checkpoint 3 decision.

### TF-006 — Control owner is multi-party even in a concrete product

Core routing and runtime code establishes defaults, but operator configuration selects session scope, models, sandboxing, tools, schedules, and plugins; channels own admission and delivery constraints; agent definitions and skills contribute policy; the model selects actions; providers constrain schemas and execution; plugins can modify or short-circuit several stages.

**Classification:** `observed`.

**Evidence:** [C004](claims/openclaw-v2026.6.6.md#c004), [C006](claims/openclaw-v2026.6.6.md#c006), [C008](claims/openclaw-v2026.6.6.md#c008), and [C015](claims/openclaw-v2026.6.6.md#c015).

**Effect on framework/application friction:** The owner axis is useful inside concrete products as well as framework studies. It explains why a mechanism being available does not establish the effective deployment policy and why LangGraph needs a framework-appropriate case question.

### TF-007 — Adaptation is not necessarily outcome optimization

OpenClaw's disabled-by-default memory dreaming can change future context by promoting snippets that meet score, recall/signal, query-diversity, recency, contamination, and deduplication rules. The inspected selection path contains no task-success signal. It is an across-run adaptive policy, but not demonstrated optimization of task outcomes.

**Classification:** `observed`.

**Evidence:** [C012](claims/openclaw-v2026.6.6.md#c012).

**Hypothesis to test:** R11 may need to distinguish adaptive state/context, operator-directed improvement, and outcome-driven optimization. Pi and OpenHands were bounded-negative cases for automatic cross-run policy optimization; OpenClaw supplies one positive counter-shape without validating the mechanism's benefit.

## Distinctions that worked in OpenClaw

| Distinction | What it revealed |
| --- | --- |
| R1 lifecycle vs. R4 scheduling | A durable update, lane, reply operation, follow-up queue, and model attempt have different completion and retry semantics. |
| R3 active context vs. R7 durable state | JSONL history, workspace memory, session metadata, and the provider-visible projection are not interchangeable. |
| R5 action mediation vs. R6 observation construction | Canonical tool results, provider projections, overflow rewrites, and channel payloads expose distinct decisions. |
| R9 runtime control vs. R10 external evaluation | Replay/liveness and delivery integrity govern live execution; scenario packs and judged QA assess from outside. |
| R11 adaptation vs. R10 evaluation | Memory promotion changes future context without measuring task outcomes, so adaptation and evaluation must not be collapsed. |

## Hermes Agent v0.18.2

**Case boundary:** `NousResearch/hermes-agent`, annotated tag `v2026.7.7.2`, tag object `b7751df34688835a108e0d630f3495fc11f3df79`, dereferenced commit `9de9c25f620ff7f1ce0fd5457d596052d5159596`, package version `0.18.2`

**Case study:** [Hermes Agent v0.18.2](case-studies/hermes-agent-v0.18.2.md)

**Claim ledger:** [Hermes claims](claims/hermes-agent-v0.18.2.md)

**Evidence status:** Maintainer-reviewed case under D-012; classifications informed approved D-013 and remain bounded case evidence

### TF-001 — Lifecycle scale and ingress origin both change semantics

The scoped CLI path contains process, session, user-turn, model-iteration, tool-call, compaction, delegated-child, persistent-goal, and background-review boundaries. Targeted gateway, ACP, cron, and batch inspection adds platform session, scheduled job/run, and dataset/sample boundaries with different memory, persistence, cancellation, and completion rules. The plugin hook named `on_session_end` fires after each `run_conversation` user turn even though actual memory-provider session shutdown occurs later.

**Classification:** `observed`.

**Evidence:** [C002](claims/hermes-agent-v0.18.2.md#c002).

**Effect on the existing hypothesis:** Lifecycle-scale annotation now recurs in all four cases. Hermes strengthens the case for a separate ingress-origin annotation because CLI, messaging, scheduled, editor, and batch origins deliberately change the envelope without requiring several new top-level responsibilities.

### TF-002 — R2, R3, and R5 remain distinct but share a runtime join

Hermes separates model/provider and instruction policy, session-cached prompt construction, request-local context and capability projection, and action dispatch. Route replacement, skill and project instructions, tool schemas, plugins, approvals, and middleware nevertheless make the effective call a joined construction whose pieces can change together.

**Classification:** `observed`.

**Evidence:** [C003](claims/hermes-agent-v0.18.2.md#c003), [C004](claims/hermes-agent-v0.18.2.md#c004), and [C006](claims/hermes-agent-v0.18.2.md#c006).

**Effect on earlier cases:** Hermes resembles Pi's runtime coupling while exposing more control owners. OpenHands remains a useful counter-shape with more explicit typed separation. Evidence continues to favor three multi-label questions rather than a merge.

### TF-003 — Execution result and model-visible observation are separate stages

Tool requests cross authority and execution middleware; raw results can then receive guardrail guidance, plugin transformation, large-result spill stubs, retrieval hints, and multimodal normalization before becoming tool-role messages in active context.

**Classification:** `observed`.

**Evidence:** [C006](claims/hermes-agent-v0.18.2.md#c006).

**Effect on earlier cases:** The R5/R6 boundary now recurs across all four cases. Hermes also shows that one code path may implement both stages without making the engineering questions identical. The deferred browser/perception case remains necessary because every reviewed case still begins primarily with symbolic tool results.

### TF-004 — Policy injection is a cross-cutting dimension

Project instructions, skills, plugins, behavior middleware, shell hooks, gateway hooks, memory providers, verification hooks, goal judges, and background review can affect model policy, context, actions, observations, lifecycle, persistence, or evaluation behavior.

**Classification:** `observed`.

**Evidence:** [C013](claims/hermes-agent-v0.18.2.md#c013) and [C014](claims/hermes-agent-v0.18.2.md#c014).

**Effect on earlier cases:** Four cases now support describing injection by affected responsibility, lifecycle boundary, control owner, persistence effect, and failure posture. A twelfth “extensions” responsibility would still confuse a technique with the outcome it changes.

### TF-005 — Verification is conditioned, not simply present or absent

Hermes has extensive runtime recovery, a bounded same-agent verification-on-stop policy for code-changing work, and an optional cross-turn `/goal` judge. The fresh verification default varies by surface, while migrated installations may be explicitly off. No layer is a universal independent evaluator for arbitrary tasks.

**Classification:** `observed`, with a counterexample to the earlier shorthand that task verification is merely absent or optional everywhere.

**Evidence:** [C005](claims/hermes-agent-v0.18.2.md#c005), [C011](claims/hermes-agent-v0.18.2.md#c011), and [C012](claims/hermes-agent-v0.18.2.md#c012).

**Effect on earlier cases:** R9 needs vocabulary for protocol/runtime integrity, operational recovery, authorization, evidence acquisition, and task acceptance. Hermes adds task class, ingress surface, configuration generation, feedback source, and judge independence as conditions. Whether these become subdimensions or disciplined narrative labels remains a Checkpoint 3 decision.

### TF-006 — Control ownership extends beyond framework/application/model

Runtime code controls budgets, routing, repair, persistence, and default scheduling; the model selects ordinary actions and text completion; operators configure providers, tools, verification, memory, and approvals; project instructions and skills contribute policy; plugins and adapters can transform several boundaries; auxiliary judges can continue or stop optional modes; users can approve or reject writes.

**Classification:** `observed`.

**Evidence:** [C003](claims/hermes-agent-v0.18.2.md#c003), [C006](claims/hermes-agent-v0.18.2.md#c006), [C010](claims/hermes-agent-v0.18.2.md#c010), [C012](claims/hermes-agent-v0.18.2.md#c012), and [C013](claims/hermes-agent-v0.18.2.md#c013).

**Effect on framework/application friction:** The owner annotation is useful inside concrete harnesses and should at least include runtime, operator, project/agent instruction, model, provider, platform adapter, extension, evaluator, and user. A future framework study can test whether those values are sufficient.

### TF-007 — Across-run adaptation can be active without outcome optimization

Background review can directly update durable memory or skills from conversation content and user correction; the curator changes the skill collection using usage and recency; `/learn` creates prompted skills; the learning graph visualizes stored relations. The inspected paths contain no task-outcome objective that selects changes because measured performance improved.

**Classification:** `observed`.

**Evidence:** [C014](claims/hermes-agent-v0.18.2.md#c014), [C015](claims/hermes-agent-v0.18.2.md#c015), and [C016](claims/hermes-agent-v0.18.2.md#c016).

**Effect on OpenClaw friction:** OpenClaw supplies disabled-by-default usage-driven memory promotion; Hermes supplies active artifact mutation and deterministic curation. Both are adaptation without established outcome optimization, but their signals and default postures differ. R11 should not collapse adaptive state, operator/prompt-directed improvement, and outcome-driven optimization.

### New candidate — configuration generation changes “the default”

A missing configuration file inherits the current surface-aware `auto` verification value. An existing file without `_config_version` is treated as legacy version zero, while older versioned files follow explicit migrations; affected unset, `auto`, and historical baked-in values can become `false`. Fresh built-in compaction uses in-place archival even though adjacent comments retain earlier rollout language. A commit and tag alone therefore do not determine effective defaults; no-file fresh, versionless existing, versioned migrated, explicitly configured, and runtime-resolved values may differ.

**Classification:** `observed` in Hermes; cross-case status `uncertain`.

**Evidence:** [C007](claims/hermes-agent-v0.18.2.md#c007), [C011](claims/hermes-agent-v0.18.2.md#c011), and [C020](claims/hermes-agent-v0.18.2.md#c020).

**Checkpoint 3 question:** Should configuration generation become a cross-cutting version/default annotation rather than another responsibility?

### New candidate — lineage varies by mechanism

Hermes and OpenClaw have different recorded roots, while Hermes later adds migration compatibility, a modeled subagent prompt, an inspired permission change, and a ported streaming fix. A whole-system label such as “related” or “independent” would hide that some mechanisms have direct lineage and others remain unresolved.

**Classification:** `observed` for named mechanisms; broader ancestry `uncertain`.

**Evidence:** [C017](claims/hermes-agent-v0.18.2.md#c017) and [C020](claims/hermes-agent-v0.18.2.md#c020).

**Checkpoint 3 question:** Should lineage be recorded per finding or mechanism with values such as direct port, translated compatibility, documented inspiration, shared dependency, unresolved similarity, and no known link?

## Distinctions that worked in Hermes

| Distinction | What it revealed |
| --- | --- |
| R1 lifecycle vs. R4 control | One session contains ordinary turns, goal continuations, delegated children, and background review with different completion rules. |
| R2 policy vs. R3 call construction | Durable memory may change while the session-cached prompt remains a snapshot. |
| R5 action vs. R6 observation | Raw execution can be transformed, spilled, hinted, or normalized before the model sees it. |
| R7 durable state vs. R3 active context | Soft-archived history remains recoverable while the model receives a lossy compacted projection. |
| R9 integrity vs. evidence vs. acceptance | Tool validation, verification-on-stop, and `/goal` judging are three different mechanisms with different defaults. |
| R10 observability vs. R11 adaptation | Traces and usage exist; memory/skills change; no outcome-to-change optimization bridge was found. |

## Selection-level friction: framework versus application ownership

D-009 deferred LangGraph from the concrete-harness sequence because the current case question asks what choices one operational harness made. A framework instead exposes mechanisms while downstream applications choose consequential policy: models and instructions, prompt materialization, tools and authorization, observation shaping, stopping rules, and verification defaults. Applying the same case template would therefore mix framework capability with application behavior or repeatedly answer that the application decides.

This is selection evidence, not a LangGraph implementation finding and not an approved taxonomy revision. It suggests that the existing control-owner comparison should explicitly test whether a mechanism or policy is owned by the framework, application, model, operator, or an extension. A future framework/substrate comparison should determine whether that owner axis is sufficient or whether framework cases need a separate analytical schema.

## Checkpoint 3 proposed dispositions

The four-case consolidation is now proposed in [Checkpoint 3: What Four Harnesses Changed About the Map](cycles/checkpoint-3-taxonomy-and-method-review.md). The current evidence supports a restrained revision rather than a new top-level taxonomy:

- Retain stable R1–R11 identifiers and the R2/R3/R5 and R5/R6 boundaries.
- Add lifecycle scale and ingress origin, control owner and study-object type, injection authority, effective configuration population, and mechanism lineage as cross-cutting annotations.
- Keep R9 stable but name runtime integrity, operational recovery, evidence acquisition, and task acceptance separately.
- Rename R11 around across-run adaptation and reserve optimization for a measured outcome-to-change loop.
- Keep R10 stable while reporting operational observability and external evaluation separately.
- Preserve Browser Use as the deferred falsification case for perception-grounded R5/R6 behavior.

These are Gate B proposals, not canonical changes. The Pi, OpenHands, OpenClaw, and Hermes cells are reviewed case evidence. The LangGraph TF-006 cell records a reviewed selection mismatch, not a mechanism discovered through a case study. No expected matrix cell from Checkpoint 2 counts as observed implementation evidence, and no friction entry changes the canonical taxonomy before the maintainer dispositions Checkpoint 3 at Gate B.
