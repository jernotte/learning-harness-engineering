# Taxonomy Friction Register

**Last updated:** 2026-07-16  
**Taxonomy status:** Unchanged and provisional  
**Current evidence:** Maintainer-reviewed Pi v0.80.6 and OpenHands SDK v1.35.0; selection-level framework/application friction from the deferred LangGraph case

This register accumulates evidence about where the provisional R1–R11 responsibility lens clarifies real harnesses and where it blurs, splits, or omits their mechanisms. It exists so that taxonomy changes at Checkpoint 3 are based on comparisons across implementations rather than reactions to whichever case was analyzed most recently.

The current taxonomy remains unchanged. Every entry below is a case observation or a hypothesis to test, not an approved revision.

## How to use this register

Each implementation case should add evidence in two places:

1. Update the cross-case matrix for every existing friction question the case can test.
2. Add a new issue only when the implementation exposes a materially different boundary problem or missing concept.

Use `observed` only when the implementation contains a concrete mechanism that creates the stated tension. Use `absent` when the implementation provides a meaningful counterexample. Use `uncertain` when the available evidence cannot distinguish the alternatives. A blank cell means the case has not yet been analyzed.

Checkpoint 3 should consider a taxonomy change only when friction recurs across meaningfully different architectures, the existing division causes inconsistent or misleading analysis, and a proposed alternative makes the cases easier to compare without harming source-native discovery or readable explanation.

## Cross-case comparison matrix

| ID | Friction question | Pi | OpenHands SDK | LangGraph | Browser Use | OpenClaw | Claude Code | Current interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TF-001 | Does R1 need explicit lifecycle scales? | Observed: product/session and inner-turn lifecycles differ | Observed: server, conversation, run, step, and tool-call lifecycles differ | Pending | Pending | Pending | Pending | Recurs across two coding architectures; test whether scale annotations suffice |
| TF-002 | Can R2, R3, and R5 be applied consistently when one runtime path refreshes policy, visible capabilities, and executable tools? | Observed | Observed with partial counter-shape: separate agent policy, view, and tool types reunite during runtime materialization | Pending | Pending | Pending | Pending | Keep distinct and multi-label coupling; OpenHands shows separation is possible but not total |
| TF-003 | Where should tool-output shaping live when it is both part of tool mediation and the construction of model-visible evidence? | Observed across R5/R6 | Observed: distinct action/observation types, but tool executors shape model-visible results | Pending | Pending | Pending | Pending | Boundary is useful; implementation ownership can still cross it |
| TF-004 | Is extension or policy injection a cross-cutting analytical dimension rather than another responsibility? | Observed: extensions span most responsibilities | Observed: plugins, hooks, skills, MCP, rules, profiles, and agent definitions alter several responsibilities | Pending | Pending | Pending | Pending | Recurring cross-cutting dimension; wait for non-coding counterexamples |
| TF-005 | Does R9 need an explicit distinction between runtime integrity/recovery and task-success verification? | Observed as recovery stronger than task verification | Observed: extensive protocol recovery plus optional, separate critic and goal judge | Pending | Pending | Pending | Pending | New two-case asymmetry; test whether a subdimension is clearer than a taxonomy split |
| TF-006 | Does each responsibility need an explicit framework-versus-application-versus-model control-owner dimension? | Harness chooses concrete policy | SDK supplies defaults and extension mechanisms while callers choose optional policy | Selection-level mismatch: framework mechanisms do not establish application policy | Pending | Pending | Pending | Cross-cutting ownership question; LangGraph is deferred until a framework-specific study can test it properly |

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

**Evidence status:** Maintainer-reviewed case; classifications remain provisional taxonomy evidence

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

## Selection-level friction: framework versus application ownership

D-009 deferred LangGraph from the concrete-harness sequence because the current case question asks what choices one operational harness made. A framework instead exposes mechanisms while downstream applications choose consequential policy: models and instructions, prompt materialization, tools and authorization, observation shaping, stopping rules, and verification defaults. Applying the same case template would therefore mix framework capability with application behavior or repeatedly answer that the application decides.

This is selection evidence, not a LangGraph implementation finding and not an approved taxonomy revision. It suggests that the existing control-owner comparison should explicitly test whether a mechanism or policy is owned by the framework, application, model, operator, or an extension. A future framework/substrate comparison should determine whether that owner axis is sufficient or whether framework cases need a separate analytical schema.

## Questions for the next cases

The next implementation should not merely repeat Pi's labels. It should ask:

- Which lifecycle scales exist, and are they represented by separate components or one abstraction?
- Where do model policy, prompt construction, capability visibility, and action authority meet or separate?
- Is there a raw-result layer distinct from model-facing observation construction?
- Which mechanisms act as cross-cutting injection surfaces—extensions, middleware, plugins, event handlers, graph nodes, or policy hooks?
- Which R1–R11 distinctions reveal an important asymmetry rather than creating classification overhead?
- Does the implementation expose a new mechanism the current lens cannot describe without distortion?

The Pi and OpenHands cells are reviewed case evidence. The LangGraph TF-006 cell records a reviewed selection mismatch, not a mechanism discovered through a case study. No expected matrix cell from Checkpoint 2 counts as observed implementation evidence, and no friction entry changes the canonical taxonomy before Checkpoint 3.
