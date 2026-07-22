# Harness Engineering V2 — Conventional Architecture with Build-Up Traversal

**Skeleton:** `V2-SK-F`
**Version:** `0.1`
**Checkpoint:** `V2-SK-CP02`
**Status:** Reviewed checkpoint-02 predecessor; superseded by approved V2-SK-G
and not rejected
**Authority:** V2-D014
**Maturity:** Structural hypothesis only; not an approved outline or taxonomy
**Input boundary:** Reviewed V2-SK-D, advisory V2-SK-E, their adjudicated
comparison, and already captured V2 artifacts through proposed core-04; no new
source access

**Review:**
[`conventional-buildup-skeleton-review.md`](conventional-buildup-skeleton-review.md)

V2-D015 makes
[`V2-SK-G`](governing-structure.md) the sole governing high-level structure.
This document preserves the reviewed thirteen-section predecessor and its
branching traversal; it has no current governing authority beyond the elements
G explicitly adopts.

## Relationship to D and E

F is one synthesis, not a third competing taxonomy.

- [`V2-SK-D`](conventional-skeleton.md) supplies the complete conventional-topic
  architecture, vocabulary ownership, and reference utility.
- [`V2-SK-E`](buildup-skeleton.md) supplies the useful idea of a motivated
  build-up path, point-of-risk security reminders, and explicit decisions per
  section. Its universal dependency ladder and outcome guarantees are not
  adopted.
- F keeps one canonical content tree and adds one ID-based traversal through
  that tree. The traversal never owns or duplicates topic content.

The research and knowledge architecture remains the primary artifact. The
build-up traversal is its recommended first reading, not a curriculum, maturity
model, implementation recipe, or claim that a complete harness contains every
topic.

## Organizing principle and reading modes

The public architecture uses recognizable harness-engineering subjects. Each
subject has one stable address and one primary explanatory home. The section
IDs below support cross-references; their numeric order is not asserted to be a
universal construction sequence.

Two uses share that one architecture:

1. **Recommended first reading:** follow the partial-order build-up traversal.
   Begin with the problem and model interaction, add only mechanisms justified
   by the operating conditions, and stop when the selected composition is
   sufficient.
2. **Targeted reference:** enter the canonical tree directly through Context
   Engineering, Skills, Memory and State, Orchestration Systems, or another
   conventional subject.

The tree owns coverage. The traversal owns motivation and sequence. Neither
creates a second vocabulary.

## Fit to the approved audience and outcomes

F is for technically fluent builders who understand basic model calls,
prompts, tools, and evaluation but need not know a particular framework,
product, implementation family, or V2 vocabulary. Conventional headings make
the architecture usable as a reference; the build-up traversal shows how those
subjects can be composed without mistaking one composition for a universal
implementation sequence.

The skeleton reserves an explicit home for each approved outcome; it does not
yet satisfy any of them with evidence.

| Approved outcome | Structural support in F |
| --- | --- |
| State and defend a useful harness-engineering boundary. | F1 owns definitions, boundaries, operating conditions, and success criteria. |
| Analyze an unfamiliar harness without product labels. | F2–F12 supply conventional inspection coordinates; F13 reconstructs the selected composition. |
| Identify consequential choices, alternatives, constraints, costs, failures, and transfer limits. | Each F2–F12 section owns a mechanism family and an explicit decision; F13 compares their composition. |
| Trace actual behavior and causal paths. | F11 owns reconstruction and diagnosis; F13 connects information, capability, control, evidence, and authority flows. |
| Judge evidence posture and uncertainty. | F10 owns evidence quality, uncertainty, negative results, ablation, and applicability; F11 distinguishes captured signals from judgment. |
| Make and defend decisions under stated conditions. | The section-accountability table ties every subject to a decision, while F1 and the three rails keep its conditions explicit. |
| Select the next uncertainty-reducing inspection or test. | F10 owns evaluation and test design; the later cross-cutting research questions will turn unresolved uncertainty into specific inspections or tests. |

## Canonical high-level topic tree

```text
Harness Engineering
│
├── F1. Foundations and Field Vocabulary
│   ├── Definitions and Boundaries
│   │   ├── prompt, context, harness, and loop engineering
│   │   └── model calls, workflows, agents, harnesses, and adjacent systems
│   ├── System Anatomy
│   │   ├── model, context, memory, tools, control, and environment
│   │   └── feedback, services, other agents, and humans
│   ├── Design Goals and Success Criteria
│   │   ├── task, environment, operating conditions, and constraints
│   │   └── quality, reliability, cost, latency, autonomy, and trust
│   └── Model Selection, Routing, and Invocation
│       ├── capabilities, versions, provider routing, and fallback
│       └── invocation parameters and response modes
│
├── F2. Context Engineering
│   ├── Prompts and Instructions
│   ├── Context Sources and Retrieval
│   │   ├── user, session, workspace, and knowledge sources
│   │   └── retrieval, RAG, tool results, and environment feedback
│   ├── Context Assembly and Delivery
│   └── Context Windows, Compaction, Compression, and Caching
│       ├── budgeting, pruning, summarization, and compaction
│       └── compression and caching as distinct mechanisms
│
├── F3. Memory and State
│   ├── F3a. Working and Session State
│   ├── F3b. Task and Workflow State
│   ├── F3c. Persistent Memory
│   │   ├── storage, indexing, retrieval, and update
│   │   └── consolidation, retention, and removal
│   └── F3d. Continuity and Handoff State
│       ├── initialization, checkpoint, pause, restart, and resumption
│       └── consistency, provenance, and versioning
│
├── F4. Tool Engineering
│   ├── Tool Design and Function Calling
│   │   ├── schemas, descriptions, affordances, and structured I/O
│   │   └── capability discovery and model-facing interfaces
│   ├── Tool Execution
│   │   ├── invocation, results, validation, and error contracts
│   │   └── side effects and environment feedback
│   └── Environment Interfaces
│       ├── digital and physical environments
│       └── side-effect and feedback boundaries
│
├── F5. Skills
│   ├── Skill Concepts and Boundaries
│   │   ├── reusable procedures, instructions, scripts, and resources
│   │   └── relationships to prompts, tools, plugins, and workflows
│   ├── Skill Structure and Packaging
│   ├── Discovery, Loading, and Context Delivery
│   └── Reuse, Portability, Versioning, and Maintenance
│
├── F6. Protocols and Integration
│   ├── Tool and Resource Protocols
│   │   └── MCP and related capability-exposure interfaces
│   ├── Service APIs and Connectors
│   ├── Agent-to-Agent Interfaces
│   └── Identity, Transport, Interoperability, and Compatibility
│
├── F7. Agent Loops, Planning, and Workflows
│   ├── Agent Loops
│   │   ├── decisions, actions, observations, and feedback
│   │   └── semantic retry, replanning, stopping, and loop detection
│   ├── Planning and Task Decomposition
│   ├── Workflow Patterns
│   │   ├── chaining, control-path routing, branching, and parallelization
│   │   └── evaluator–optimizer, maker–checker, graph, and event patterns
│   └── Autonomy and Control
│       └── fixed, model-directed, human-directed, and hybrid control
│
├── F8. Orchestration Systems and Multi-Agent Systems
│   ├── Task Runners, Schedulers, and Workflow Engines
│   │   └── work readiness, dispatch, prioritization, and scheduling
│   ├── Delegation, Subagents, and Task Handoffs
│   ├── Multi-Agent Architectures
│   │   ├── roles, communication, coordination, and shared-state use
│   │   └── conflict, review, integration, and partial failure
│   ├── Concurrency and Workspace Coordination
│   └── Long-Running and Repeating Work
│       └── persistence, resumption, task recovery, and termination
│
├── F9. Security, Permissions, and Human Control
│   ├── Trust Boundaries and Untrusted Inputs
│   │   └── prompt injection only where it affects a harness choice
│   ├── Identity, Permissions, and Authorization
│   │   └── least privilege, action policy, approval, and revocation
│   ├── Guardrails and Policy Enforcement
│   ├── Sandboxing, Isolation, and Containment
│   ├── Human-in-the-Loop
│   │   ├── review, clarification, approval, and human handoff
│   │   └── intervention, escalation, override, and emergency authority
│   └── Auditability and Accountability
│
├── F10. Evaluation and Verification
│   ├── Success Criteria and Evaluation Design
│   ├── Offline Evaluations and Benchmarks
│   ├── Runtime Verification
│   │   └── self-checking, independent checking, and completion gates
│   ├── Testing and CI Integration
│   └── Evidence Quality and Transfer
│       └── uncertainty, negative results, ablation, and applicability
│
├── F11. Observability, Tracing, and Debugging
│   ├── Logs, Events, Traces, and Metrics
│   ├── Runtime and Workflow Tracing
│   │   └── causal paths, state changes, task handoffs, and timing
│   ├── Debugging and Replay
│   ├── Developer Experience
│   └── Operational Monitoring and Alerts
│
├── F12. Production Infrastructure and Operations
│   ├── Runtime Infrastructure
│   ├── Performance and Economics
│   ├── Reliability and Resilience
│   │   ├── infrastructure retry, idempotency, fallback, and degradation
│   │   └── partial, dependency, and service failure
│   ├── Configuration and Lifecycle Management
│   └── Operations and Maintenance
│
└── F13. Integrated Harness Architectures
    ├── Architecture Forms
    │   └── single-call, workflow, single-agent, multi-agent, and long-running systems
    ├── End-to-End Composition
    │   └── information, capability, control, evidence, and authority flows
    ├── Cross-Topic Tradeoffs
    ├── Domain Adaptation and Transfer
    └── Simplification and Architectural Change
```

F preserves every structural subject in D. It reverses no ownership rule and
adds no product, framework, case, or source category to the public spine.

## Recommended first-reading traversal

The traversal below references the canonical IDs rather than repeating their
content.

```text
F1: establish the problem, boundary, operating conditions, goals, and evidence needs
│
├── Stop: no additional surrounding-system mechanism is justified
│          (a direct model call remains an edge case, not a settled definition of harness)
│
└── F2: design the information visible to the model
    │
    ├── Stop: a context-shaped call is sufficient for the stated conditions
    │
    └── From the selected composition, choose independent optional capability branches:
        │
        ├── F4, when environmental action or feedback is required
        │
        ├── F5, when a procedure deserves reusable packaging
        │   ├── instruction-only skills may attach to F2
        │   └── executable skills may also reference F4 and F6
        │
        ├── F6, when cross-boundary capability exposure or interoperability is required
        │   └── cross-edges to F2 retrieval, F4 tools, or F8 coordination as needed
        │
        ├── F7 + F3a/F3b, when fixed or adaptive multi-step control is required
        │   ├── fixed workflow branch
        │   └── adaptive loop and planning branch
        │
        ├── F3c, only when information must persist beyond the current execution
        │   └── cross-edges to one F2 call, F7 workflows, or F8 coordination as needed
        │
        ├── F3d, only for pause, resume, handoff, recovery, migration, or expiry
        │   └── continuity edge to stateful, orchestrated, or operated compositions as needed
        │
        └── F8, when work must be coordinated across tasks, time, resources, or agents
            ├── calls, fixed workflows, humans, or one long-running agent
            └── delegated or multi-agent work

Any selected composition ──> F13: analyze composition, tradeoffs, transfer, and simplification
                           (common construction order — synthesis, not completion badge)
```

The universal stop rule is:

> Stop adding mechanisms when the selected composition satisfies F1's stated
> goals under the security, assurance, and operating rails below.

The traversal therefore does not imply that tools precede every loop, that a
loop is required before memory or skills, that skills precede protocols, that
orchestration requires multiple agents, or that more components mean a better
or more mature harness.

## Dependency classification

| Relationship | Classification | Consequence for the traversal |
| --- | --- | --- |
| F1 → every selected topic | Hard prerequisite — interpretive | Boundary, conditions, and success criteria are needed to judge whether a mechanism belongs. |
| F1 → F2 | Common construction order, not prerequisite | The recommended first reading starts with model-visible information, but a boundary investigation may enter another topic directly. |
| Current selected composition → F4/F5/F6/F7/F3c/F3d/F8 | Optional capability edge | The diagram's sibling branches are selected independently when their operating condition arises; no sibling is a prerequisite to another. |
| F2 ↔ F4 | Cross-cutting/back-edge — context/tool feedback | Context enables tool choice; tool results and environment feedback become later context. |
| F2 → F5 | Optional capability edge — reusable procedure | A procedure may be packaged for reuse after its context role is understood. |
| F2 ↔ F6 | Optional capability edge — integration | A protocol may supply retrieved resources or context, but context engineering does not require a protocol. |
| F2 → F7 + F3a/F3b | Optional capability edge — multi-step control | Add local workflow or loop control and its working state only when more than one step is justified. |
| F3a/F3b ↔ F7 | Cross-cutting/back-edge — co-design cycle | Working, task, session, and workflow state support multi-step control and are changed by it. |
| F3c ↔ F2/F7/F8 | Optional capability edge — persistence | Persistent memory may inform one call, a workflow, or coordinated work; it does not require a loop. |
| F3d ↔ F3/F7/F8/F12 | Optional capability edge — continuity | Continuity joins only compositions that must pause, resume, hand off, recover, migrate, or expire. |
| F4 ↔ F6 | Optional capability edge — integration | Protocols may expose capabilities; tool semantics do not depend on one protocol. |
| F5 → F2/F4/F7 | Optional capability edge — reuse | A skill may supply context, invoke tools, or guide a workflow without requiring all three. |
| F6 ↔ F8 | Optional capability edge — coordination interface | Orchestrated components may interoperate through a protocol, connector, or direct interface. |
| F7 → F8 | Common construction order, not prerequisite | Orchestration may coordinate loops, but also calls, fixed workflows, humans, schedules, and resources. |
| F9 → F1–F13 | Cross-cutting/back-edge — security and authority rail | Authority, trust, containment, and human control apply from their first relevant boundary. |
| F10 ↔ F11 | Cross-cutting/back-edge — assurance cycle | Evaluation design informs instrumentation; observations support judgment; judgment drives revision. |
| F12 → F1–F13 | Cross-cutting/back-edge — operating rail | Cost, capacity, reliability, deployment, and lifecycle conditions can reopen every earlier choice. |
| Selected F1–F12 → F13 | Common construction order — synthesis | Integrated analysis compares the composition actually selected, not an accumulation of every mechanism. |

## Cross-cutting rails

### Security and human-control rail

F9 remains the sole explanatory home. The traversal exposes where its concerns
first become load-bearing:

```text
F1 provider, data, cost, and authority assumptions
 → F2 input trust, provenance, privacy, and disclosure
 → F3 retention, removal, integrity, and access
 → F4 permission before side effects
 → F5 package provenance and loading trust
 → F6 identity and external-interface trust
 → F7/F8 autonomy, budgets, stopping, delegation, approval, and override
 → F10/F11 evaluator integrity, sensitive traces, and audit evidence
 → F12 enforcement, secrets, incidents, and recovery
```

These are point-of-risk cross-references, not repeated security chapters.

### Assurance feedback loop

```text
F1 goals and operating conditions
 → F10 evaluation design and evidence requirements
 → F11 instrumentation and capture
 → execute or inspect the selected F2–F9 composition
 → F10 verification and judgment
 → revise F1–F9 and F12, or stop
```

This resolves the apparent Evaluation-versus-Observability ordering conflict.
Evaluation design must guide instrumentation; observability must supply
evidence; judgment must feed revision. Neither topic is a universal one-way
prerequisite for the other.

### Production and lifecycle rail

```text
F1 operating conditions
 → constrain every selected mechanism
 → F12 full treatment when deployment or sustained operation is in scope
 → observed cost, reliability, capacity, and lifecycle pressure
 → reopen F1–F13 as relevant
```

Production is not a final badge added to an otherwise finished design.

## Section accountability

“Enables” below names an analytical capability for the reader. It does not
promise that reading a section makes a system reliable, safe, or production-
ready.

| ID | Primary question owned | Enables analysis or design of | Decision supported |
| --- | --- | --- | --- |
| F1 | What problem is in scope, where is its boundary, and what would count as success? | A bounded problem with explicit conditions and evidence needs. | Where to draw the boundary and whether another harness mechanism is justified. |
| F2 | What information is selected, transformed, and delivered to a model call? | Deliberate model-visible information. | What context to select, assemble, remove, and fit within a finite window. |
| F3 | What information exists outside the immediate call, how does it change, and what persists? | Distinct working, workflow, continuity, and persistent-information lifecycles. | What state is needed now, what should persist, and who updates or expires it. |
| F4 | How are callable capabilities designed and how are their effects represented? | Callable capabilities and represented environmental effects. | Whether to expose an action and under what interface, validation, and error contract. |
| F5 | How are reusable procedures packaged, found, loaded, composed, and maintained? | Reusable procedural packages. | Skill versus prompt, tool, or workflow, including activation and maintenance policy. |
| F6 | How do tools, resources, services, and agents interoperate across boundaries? | Cross-boundary interoperability. | Direct interface versus protocol or connector, with compatibility and trust consequences. |
| F7 | How is fixed or adaptive multi-step work selected, sequenced, revised, and stopped? | Multi-step control and its state transitions. | Single call versus workflow versus loop, including planning, semantic retry or replanning, and stopping. |
| F8 | How is work coordinated across tasks, time, resources, humans, or agents? | Coordination without presuming a multi-agent topology. | Whether orchestration is needed and which dispatch, topology, and handoff model fits. |
| F9 | Who or what may act, under which trust and containment boundaries, and when may a human intervene? | Bounded authority, containment, and human control. | Who may act, within what limits, and where approval, override, or revocation belongs. |
| F10 | How is behavior judged against criteria and how strong is the resulting evidence? | Operationalized criteria, tests, verification, and evidence judgment. | What counts as success and what evidence is sufficient to act. |
| F11 | How is behavior reconstructed, monitored, and diagnosed? | Reconstructable and diagnosable behavior. | What to instrument and how to localize, replay, or monitor failure. |
| F12 | How is a harness deployed, scaled, kept reliable, changed, and retired? | Sustained operation under real constraints. | Runtime topology, budgets, reliability, rollout, maintenance, and retirement. |
| F13 | How do selected subjects compose into coherent architectures under stated tradeoffs? | Whole-system composition and comparison. | Which selected architecture fits the problem and what should be simplified or changed. |

## Vocabulary, inclusion, ownership, and source roles

A topic belongs when it uses recognizable harness-engineering terminology and
owns a modifiable mechanism or decision in the system surrounding one or more
language-model calls, or evidence needed to judge that mechanism or decision.
Adjacent security, infrastructure, interface, or evaluation material enters
only through a concrete harness choice. Model weights, tokenizer design, and
training procedure remain fixed; product prominence or appearance in a seed
catalog is not an inclusion reason.

F reuses the reviewed
[`conventional-vocabulary-map.md`](conventional-vocabulary-map.md) without
changing any primary explanatory home. In particular:

- Context is not collapsed into Memory;
- Skills are not collapsed into Tools or MCP;
- planning and workflows are not collapsed into orchestration;
- Observability supplies signals while Evaluation supplies judgment;
- permissions, guardrails, sandboxing, and human control retain distinct roles;
  and
- multi-agent systems remain one orchestration topology rather than its
  definition.

Implementations and frameworks may later serve as examples or inspection
targets; papers, documentation, repositories, benchmarks, and practitioner
accounts may supply differently limited evidence; domains may test transfer;
and case studies may integrate topics only after separate authorization. None
forms the public spine merely because a source or catalog uses the term.

Decision, causal, and responsibility analysis remain cross-cutting research
questions within every conventional topic. They do not become section names or
a second hidden taxonomy.

## D and E disposition

| Input | Retained in F | Not adopted in F |
| --- | --- | --- |
| V2-SK-D | All thirteen conventional subjects; all structural children; vocabulary and ownership rules; scope and source roles; integrated synthesis. | A numbered presentation that did not expose the full assurance cycle in the tree; prose-only treatment of cross-cutting security; section questions without explicit decisions. |
| V2-SK-E | Motivated build-up reading; stop points; point-of-risk security reminders; explicit decisions; Integrated Architectures last. | A universal component ladder; “bare call” as a settled harness boundary; whole Memory after Loops; Skills after Loops as a prerequisite; Protocols after Skills as a prerequisite; orchestration as multi-agent escalation; guaranteed “runs after this” outcomes. |

No D structural node is silently lost. Design goals and operating conditions,
Task and Workflow State, Autonomy and Control, and Developer Experience—all
omitted or narrowed in E—are restored explicitly.

## Benefits, risks, and anchoring hazards

Benefits:

- one conventional tree supports both lookup and a coherent first reading;
- optional branches and stop points prevent complexity from becoming a
  maturity signal;
- cycles and back-edges remain visible instead of being forced into a false
  total order;
- every section exposes its analytical value and decision target; and
- security, assurance, and production constraints appear where they first
  matter without duplicating their explanations.

Risks and blind spots:

- readers may mistake the ID order for the traversal despite the distinction;
- the partial-order path is less narratively simple than E's linear ladder;
- many cross-links can become difficult to navigate in a later detailed
  outline;
- the conventional vocabulary can still carry unsettled or product-shaped
  field assumptions; and
- thirteen subjects may still be too broad or numerous for a later learning
  derivative.

F makes topic ownership, optionality, cross-cutting constraints, and
whole-system composition easier to see. It makes a single linear teaching story
less obvious; that is deliberate because the active project is a research and
knowledge architecture first.

## Deliberate limits

- A direct model call is a useful starting artifact and boundary test, not a
  settled definition of the smallest harness.
- The traversal is a reasoned partial order, not a universal implementation
  sequence or maturity model.
- “Enables” describes what a reader can analyze or decide, not a guaranteed
  system outcome.
- The skeleton contains no detailed research-question set, evidence plan,
  selected case, recommendation, curriculum, or learning deliverable.
- Core-04 remains unratified; core-05 remains closed; no new source or legacy
  material entered F.

## Maintainer review questions

1. Should F be accepted as the governing skeleton while preserving D as its
   reviewed checkpoint-01 baseline?
2. Does one canonical topic tree plus one partial-order build-up traversal
   resolve the reference-versus-construction concern?
3. Are the branch and stop points honest, especially the separation of working
   state from optional persistent memory?
4. Do the security, assurance, and production rails expose cross-cutting
   constraints without duplicating their subject sections?
5. Do the “Enables” and “Decision supported” fields improve accountability
   without turning the skeleton into a tutorial?
6. Should Evaluation and Observability keep their current canonical IDs while
   the assurance loop, rather than the numbering, expresses their dependency?
7. Are all thirteen conventional subjects still at the right level for the
   knowledge architecture?
