# Taxonomy Friction Register

**Last updated:** 2026-07-16  
**Taxonomy status:** Unchanged and provisional  
**Current evidence:** Maintainer-reviewed Pi v0.80.6; OpenHands SDK pending

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
| TF-001 | Does R1 need explicit lifecycle scales? | Observed: product/session and inner-turn lifecycles differ | Pending | Pending | Pending | Pending | Pending | Single-case hypothesis |
| TF-002 | Can R2, R3, and R5 be applied consistently when one runtime path refreshes policy, visible capabilities, and executable tools? | Observed | Pending | Pending | Pending | Pending | Pending | Keep distinct but multi-label the coupled mechanism |
| TF-003 | Where should tool-output shaping live when it is both part of tool mediation and the construction of model-visible evidence? | Observed across R5/R6 | Pending | Pending | Pending | Pending | Pending | Boundary is useful, but exclusive ownership is misleading |
| TF-004 | Is extension or policy injection a cross-cutting analytical dimension rather than another responsibility? | Observed: extensions span most responsibilities | Pending | Pending | Pending | Pending | Pending | Single-case hypothesis |

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

## Questions for the next cases

The next implementation should not merely repeat Pi's labels. It should ask:

- Which lifecycle scales exist, and are they represented by separate components or one abstraction?
- Where do model policy, prompt construction, capability visibility, and action authority meet or separate?
- Is there a raw-result layer distinct from model-facing observation construction?
- Which mechanisms act as cross-cutting injection surfaces—extensions, middleware, plugins, event handlers, graph nodes, or policy hooks?
- Which R1–R11 distinctions reveal an important asymmetry rather than creating classification overhead?
- Does the implementation expose a new mechanism the current lens cannot describe without distortion?

The OpenHands SDK row remains pending until its pinned case is explicitly authorized and completed. No expected matrix cell from Checkpoint 2 counts as observed evidence.
