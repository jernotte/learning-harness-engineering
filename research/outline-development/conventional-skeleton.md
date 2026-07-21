# Harness Engineering V2 — Conventional-Topic Skeleton

**Skeleton:** `V2-SK-D`
**Version:** `0.1`
**Checkpoint:** `V2-SK-CP01`
**Status:** Adversarially reviewed checkpoint-01 baseline; preserved as an
input to V2-SK-F and not rejected
**Authority:** V2-D013
**Maturity:** Structural hypothesis only; not an approved outline or taxonomy
**Input boundary:** Existing captured V2 artifacts through proposed core-04; no new source access

V2-D014 makes
[`V2-SK-F`](conventional-buildup-skeleton.md) the sole active checkpoint-02
candidate. This document remains the reviewed conventional-topic baseline from
which F inherits its complete topic architecture.

## Organizing principle

Use recognizable harness-engineering subjects as the public coordinate system.
A reader should be able to find context engineering, skills, memory,
orchestration systems, and other familiar topics without first translating an
analyst-created taxonomy.

The tree goes beyond two levels only where another level preserves a useful
distinction. It remains a skeleton: it names the knowledge structure but does
not yet add research questions, evidence requirements, recommendations,
selected cases, or implementation detail.

## High-level conceptual tree

```text
Harness Engineering
│
├── 1. Foundations and Field Vocabulary
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
├── 2. Context Engineering
│   ├── Prompts and Instructions
│   ├── Context Sources and Retrieval
│   │   ├── user, session, workspace, and knowledge sources
│   │   └── retrieval, RAG, tool results, and environment feedback
│   ├── Context Assembly and Delivery
│   └── Context Windows, Compaction, Compression, and Caching
│       ├── budgeting, pruning, summarization, and compaction
│       └── compression and caching as distinct mechanisms
│
├── 3. Memory and State
│   ├── Working and Session State
│   ├── Task and Workflow State
│   ├── Persistent Memory
│   │   ├── storage, indexing, retrieval, and update
│   │   └── consolidation, retention, and removal
│   └── Continuity and Handoff State
│       ├── initialization, checkpoint, pause, restart, and resumption
│       └── consistency, provenance, and versioning
│
├── 4. Tool Engineering
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
├── 5. Skills
│   ├── Skill Concepts and Boundaries
│   │   ├── reusable procedures, instructions, scripts, and resources
│   │   └── relationships to prompts, tools, plugins, and workflows
│   ├── Skill Structure and Packaging
│   ├── Discovery, Loading, and Context Delivery
│   └── Reuse, Portability, Versioning, and Maintenance
│
├── 6. Protocols and Integration
│   ├── Tool and Resource Protocols
│   │   └── MCP and related capability-exposure interfaces
│   ├── Service APIs and Connectors
│   ├── Agent-to-Agent Interfaces
│   └── Identity, Transport, Interoperability, and Compatibility
│
├── 7. Agent Loops, Planning, and Workflows
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
├── 8. Orchestration Systems and Multi-Agent Systems
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
├── 9. Security, Permissions, and Human Control
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
├── 10. Evaluation and Verification
│   ├── Success Criteria and Evaluation Design
│   ├── Offline Evaluations and Benchmarks
│   ├── Runtime Verification
│   │   └── self-checking, independent checking, and completion gates
│   ├── Testing and CI Integration
│   └── Evidence Quality and Transfer
│       └── uncertainty, negative results, ablation, and applicability
│
├── 11. Observability, Tracing, and Debugging
│   ├── Logs, Events, Traces, and Metrics
│   ├── Runtime and Workflow Tracing
│   │   └── causal paths, state changes, task handoffs, and timing
│   ├── Debugging and Replay
│   ├── Developer Experience
│   └── Operational Monitoring and Alerts
│
├── 12. Production Infrastructure and Operations
│   ├── Runtime Infrastructure
│   ├── Performance and Economics
│   ├── Reliability and Resilience
│   │   ├── infrastructure retry, idempotency, fallback, and degradation
│   │   └── partial, dependency, and service failure
│   ├── Configuration and Lifecycle Management
│   └── Operations and Maintenance
│
└── 13. Integrated Harness Architectures
    ├── Architecture Forms
    │   └── single-call, workflow, single-agent, multi-agent, and long-running systems
    ├── End-to-End Composition
    │   └── information, capability, control, evidence, and authority flows
    ├── Cross-Topic Tradeoffs
    ├── Domain Adaptation and Transfer
    └── Simplification and Architectural Change
```

## Fit to the approved audience and outcomes

The structure is intended for technically fluent builders who already know the
basic vocabulary and need a reliable map of the area. Familiar topic names
support reference use and unfamiliar-system analysis; Foundations makes the
technical boundary and success criteria explicit; the mechanism sections expose
design choices and alternatives; Evaluation and Observability support evidence
judgment and causal inspection; and Integration reconnects the subjects into
defensible system-level decisions.

The outline does not yet satisfy the seven outcomes with evidence. It provides
a recognizable place for the later research questions and evidence needed to
satisfy them.

## Section ownership and dependency test

| Section | Primary question it owns | Prerequisite and principal cross-link |
| --- | --- | --- |
| 1. Foundations and Field Vocabulary | What counts as the harness problem, what terms and system boundary are in use, and what would success mean? | No subject prerequisite; supplies boundary and success criteria to every later section. |
| 2. Context Engineering | What information is selected, transformed, and delivered to a model call? | Uses section 1's boundary; links to memory sources, skills loaded into context, and tool/environment results. |
| 3. Memory and State | What information persists outside the immediate call, how does it change, and how is continuity preserved? | Uses section 1; supplies state to context, workflows, orchestration, and operations. |
| 4. Tool Engineering | How are callable capabilities designed and executed, and how are their effects represented? | Uses context and runtime boundaries; links to protocols for transport and security for authority. |
| 5. Skills | How are reusable procedures packaged, found, loaded, maintained, and related to prompts and tools? | Depends on context and tools; later evaluation judges quality rather than this section duplicating evaluation. |
| 6. Protocols and Integration | How do tools, resources, services, and agents interoperate across interface boundaries? | Depends on tool/skill concepts; links to orchestration for agent coordination and security for identity and trust. |
| 7. Agent Loops, Planning, and Workflows | How is local work selected, sequenced, revised, and stopped? | Composes context, state, and capabilities; supplies control patterns to orchestration and runtime verification. |
| 8. Orchestration Systems and Multi-Agent Systems | How is work coordinated across tasks, agents, time, and execution units? | Depends on loops/workflows and state; links to security for authority and production for capacity. |
| 9. Security, Permissions, and Human Control | Who or what may act, under which trust and containment boundaries, and when may a human intervene? | Constrains tools, protocols, loops, and orchestration; observability supplies the audit trail. |
| 10. Evaluation and Verification | How is behavior judged against explicit criteria and how strong is the resulting evidence? | Success criteria begin in section 1; uses observable executions and feeds architecture and lifecycle decisions. |
| 11. Observability, Tracing, and Debugging | How is behavior reconstructed, monitored, and diagnosed without confusing signals with judgment? | Instruments the preceding mechanisms; supplies evidence to evaluation and operational response. |
| 12. Production Infrastructure and Operations | How is a harness deployed, scaled, kept reliable, changed, and retired? | Depends on the mechanism and control sections; feeds operating constraints back into all of them. |
| 13. Integrated Harness Architectures | How do the established subjects compose into coherent architectures under stated tradeoffs? | Synthesizes sections 1–12 and introduces no new mechanism family or product taxonomy. |

## Inclusion, exclusion, and source roles

A topic belongs when it names a recognizable harness-engineering subject and
contains a modifiable surrounding-system mechanism or evidence needed to judge
one. Adjacent security, infrastructure, interface, or evaluation material
enters only through a concrete harness choice. Examples and products do not
earn a tree node merely because a catalog lists them.

Later research sources serve these roles:

- papers, documentation, repositories, benchmarks, and practitioner accounts
  supply differently limited evidence inside a topic;
- implementations and frameworks are comparative examples or inspection
  targets, never the outline spine;
- domains test applicability and transfer rather than define universal topic
  boundaries; and
- case studies integrate several topics after their selection is separately
  authorized.

## Reading and dependency logic

The first reading establishes ordinary terms and success criteria, then covers
the mechanisms that shape a model call, the systems that compose those
mechanisms over time, the controls used to constrain and judge behavior,
sustained operation, and integrated architectures.

This is not an implementation waterfall. Security, evaluation, and
observability constrain every earlier design even though their full treatments
follow the mechanisms they govern. Production conditions can also reopen any
earlier choice. Observability follows Evaluation in the numbered presentation
only to keep the familiar assurance subjects together; the ownership table
makes clear that observable evidence is a prerequisite for actual evaluation.

## Cross-cutting questions retained from checkpoint 00

Every conventional topic must eventually answer three questions, but these are
research prompts rather than section names:

1. **Decision:** What problem does this solve, when is it appropriate, what
   alternatives exist, and what tradeoffs follow?
2. **Causal:** What happens at runtime, what state changes, how can failure
   propagate, and what evidence exposes the behavior?
3. **Responsibility:** Which component or person controls the mechanism, data,
   action, permission, judgment, and override?

Operating conditions, evidence quality, version, and transfer also apply to
every topic. These questions do not form a second hidden taxonomy.

## Placement rules for recurring overlaps

The detailed ownership map is in
[`conventional-vocabulary-map.md`](conventional-vocabulary-map.md). Repeated
words in the tree are narrowed by function:

- provider routing belongs to model invocation; control-path routing to
  workflows; work dispatch to orchestration;
- continuity state belongs to Memory and State; task handoffs to Orchestration;
  human handoffs to Human-in-the-Loop;
- semantic retry and replanning belong to Agent Loops; task recovery to
  Orchestration; infrastructure retry to Production Operations;
- Sandboxing owns isolation policy; workspace coordination owns concurrent
  work placement; Production owns enforcement capacity;
- Observability owns signals and diagnosis; Evaluation owns judgment; and
- Operations owns deployed infrastructure and lifecycle rather than per-task
  control semantics.

Use one primary explanatory home and explicit cross-references. Do not repeat a
mechanism explanation under every familiar term it touches.

## Benefits, risks, and anchoring hazards

Benefits:

- readers can locate familiar subjects without learning V2-specific labels;
- contested terms remain visible and can be compared rather than renamed away;
- functional depth preserves distinctions hidden by the checkpoint-00 cap; and
- the final integration section reconnects a topic-oriented reference into
  system-level judgment.

Risks and blind spots:

- familiar language can falsely imply universal definitions or settled scope;
- topic modules can hide causal sequence, responsibility, and interaction;
- catalog vocabulary can still bias coverage toward current coding-agent tools;
- cross-cutting mechanisms can be duplicated despite the ownership rules; and
- thirteen major sections may be too broad or too numerous for the eventual
  reading sequence.

The structure makes the field's named subjects and lookup paths easy to see. It
tends to hide end-to-end behavior, decision order, and authority allocation;
the cross-cutting questions and integration section compensate without
replacing the public vocabulary.

## Deliberate limits

- The structure does not assert universal agreement on these terms or
  boundaries.
- It does not copy the pinned catalog's category bundles or ordering.
- It includes no product catalog, implementation recommendation, or selected
  case.
- Prompt injection appears only under untrusted inputs because it matters when
  external content can influence harness behavior; it is not a standalone
  harness-engineering pillar.
- Research questions, evidence plans, detailed inclusions/exclusions, and
  learning sequence remain later work after the maintainer accepts the
  structural direction.

## Maintainer review questions

1. Are the thirteen major subjects recognizable and at the right level?
2. Should Tools, Skills, and Protocols remain three separate major subjects?
3. Should Agent Loops/Workflows and Orchestration Systems remain separate?
4. Is Human-in-the-Loop best housed with authority and permissions, with an
   orchestration cross-reference?
5. Should Reliability become its own major subject rather than being divided
   among loops, orchestration, evaluation, and production operations?
6. Should Integrated Harness Architectures remain a final synthesis section or
   become a separate post-outline derivative?
