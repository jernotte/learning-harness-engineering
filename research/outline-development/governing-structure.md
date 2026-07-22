# Harness Engineering V2 — Governing High-Level Structure

**Structure:** `V2-SK-G`
**Version:** `1.0`
**Checkpoint:** `V2-SK-CP03`
**Status:** Maintainer approved and fidelity reviewed; governing basis for
detailed-outline refinement
**Authority:** V2-D015
**Authority scope:** The ten top-level subjects, their grouping, primary
ownership, high-level order, and declared cross-sectional treatment; detailed-
outline development is not authorized
**Research effect:** None; no subject evidence, finding, or claim of field
consensus is admitted
**Maturity:** Approved high-level organization, not an approved detailed outline
or subject-evidence taxonomy
**Input boundary:** Reviewed V2-SK-F plus the maintainer's structural
adjudication; no new source access, evidence admission, or legacy readmission

**Review:**
[`governing-structure-review.md`](governing-structure-review.md)

## What this file governs

This is the stable reference structure for the next outline-development stage.
It fixes the high-level subjects, their order, their primary ownership, and the
rule for material that applies in more than one section.

The displayed children preserve the minimum distinctions already agreed during
the consolidation. They are high-level scope anchors, not a final subsection
inventory; later authorized refinement may clarify, split, or reorganize them
while preserving G1–G10's approved ownership.

It does not yet contain the detailed outline's objectives, research questions,
evidence requirements, fine-grained dependencies, cases, recommendations, or
learning sequence. Those are later refinements and require a separately
authorized task. Substantive subject research remains closed until the final
detailed outline receives explicit maintainer approval.

## Audience, outcomes, and inclusion boundary

G retains the approved brief's program-level audience, outcomes, technical
boundary, and exclusions. It is for technically fluent builders who know basic
model calls, prompts, tools, and evaluation but need no allegiance to a
particular framework, product, implementation family, or V2 vocabulary.

The structure supports two uses: targeted reference through recognizable field
terms and a high-level reading sequence for understanding how harness decisions
compose. It reserves an explicit owner for defining and bounding a harness,
analyzing an unfamiliar system, identifying consequential choices and
tradeoffs, tracing behavior, judging evidence, and selecting uncertainty-
reducing tests. It does not yet fulfill those outcomes with evidence.

The inclusion and exclusion rules remain those in the
[`approved brief`](brief.md): include a subject when it owns a harness mechanism
or when an adjacent concern changes a concrete harness decision; exclude general
model, product, tutorial, or adjacent-field coverage detached from such a
decision. Implementations, papers, products, domains, and sources may later
serve as evidence, examples, traversals, or comparative cases, not as the public
spine merely because they share a label.

## Organizing rule

Use recognizable harness-engineering terminology as the public coordinate
system. Combine closely related subjects at the top level when their important
distinctions can remain clear as named children.

For a mechanism that matters in several places:

> Explain the general mechanism once in its primary home, then discuss its
> section-specific consequences wherever they change a different harness
> decision.

This is controlled cross-sectional treatment, not duplicated ownership. The
primary home defines the mechanism; other sections explain its local use,
constraint, evidence, or operating consequence and cross-reference the primary
home.

## Approved high-level tree

```text
Harness Engineering
│
├── G1. Foundations and Field Vocabulary
│   ├── Definitions and Boundaries
│   ├── System Anatomy
│   ├── Design Goals and Success Criteria
│   └── Model Selection, Routing, and Invocation
│
├── G2. Context Engineering
│   ├── Prompts and Instructions
│   ├── Context Sources and Retrieval
│   ├── Context Assembly and Delivery
│   └── Context Windows, Compaction, Compression, and Caching
│
├── G3. Memory and State
│   ├── Working and Session State
│   ├── Task and Workflow State
│   ├── Persistent Memory
│   └── Continuity, Handoffs, and State Lifecycle
│
├── G4. Tools, Protocols, and Integration
│   ├── Tool Design and Function Calling
│   ├── Tool Execution and Environmental Effects
│   ├── Capability Discovery and Exposure
│   ├── Tool and Resource Protocols
│   │   └── MCP and related interfaces
│   ├── Service APIs and Connectors
│   ├── Agent-to-Agent Protocols and Interfaces
│   └── Transport, Interoperability, and Compatibility
│
├── G5. Skills
│   ├── Skill Concepts and Boundaries
│   ├── Structure and Packaging
│   ├── Discovery, Loading, and Context Delivery
│   └── Reuse, Composition, Portability, Versioning, and Maintenance
│
├── G6. Agent Loops, Workflows, and Orchestration
│   ├── Agent Loops
│   ├── Planning and Task Decomposition
│   ├── Workflow Patterns
│   ├── Autonomy and Control
│   ├── Task Runners, Schedulers, and Workflow Engines
│   ├── Delegation, Task Handoffs, and Agent-to-Agent Coordination
│   ├── Multi-Agent Architectures
│   ├── Concurrency and Workspace Coordination
│   └── Long-Running and Repeating Work
│
├── G7. Security, Permissions, and Human Control
│   ├── Trust Boundaries and Untrusted Inputs
│   ├── Identity, Permissions, and Authorization
│   ├── Guardrails and Policy Enforcement
│   ├── Sandboxing, Isolation, and Containment
│   ├── Human-in-the-Loop
│   └── Auditability and Accountability
│
├── G8. Evaluation, Verification, and Observability
│   ├── Success Criteria and Evaluation Design
│   ├── Offline Evaluations and Benchmarks
│   ├── Runtime Verification
│   ├── Testing and CI Integration
│   ├── Logs, Events, Traces, and Metrics
│   ├── Debugging and Replay
│   ├── Developer Experience
│   ├── Monitoring and Alert Signals
│   └── Evidence Quality and Transfer
│
├── G9. Production Infrastructure and Operations
│   ├── Runtime Infrastructure
│   ├── Performance and Economics
│   ├── Reliability and Resilience
│   ├── Configuration and Lifecycle Management
│   └── Operations, Maintenance, and Incident Response
│
└── G10. Integrated Harness Architectures
    ├── Architecture Forms
    ├── End-to-End Composition
    ├── Cross-Topic Tradeoffs
    ├── Domain Adaptation and Transfer
    └── Simplification and Architectural Change
```

G10 is the final synthesis layer. It composes the preceding subjects and owns
no new mechanism family.

## Primary ownership

| ID | Primary question | Decision territory |
| --- | --- | --- |
| G1 | What problem and system boundary are in scope, which field terms are being used, and what would count as success? | Boundary, operating conditions, model/provider choice, invocation policy, and success criteria. |
| G2 | What information is selected, transformed, and delivered to a model call? | Prompt and context sources, retrieval, assembly, ordering, attribution, and finite-window management. |
| G3 | What information exists outside the immediate call, how does it change, and what persists? | Working, session, task, workflow, persistent, and continuity-state lifecycles. |
| G4 | What capabilities and external interfaces exist, how are they invoked, and how do they interoperate across boundaries? | Tool semantics and execution; protocol, connector, transport, discovery, exposure, and compatibility choices. |
| G5 | How are reusable procedures packaged, found, loaded, composed, and maintained? | Skill versus prompt, tool, or workflow; activation, portability, versioning, and maintenance. |
| G6 | How is multi-step work controlled and coordinated across actions, tasks, time, resources, humans, or agents? | Loop, plan, workflow, orchestration, delegation, topology, concurrency, handoff, and stopping choices. |
| G7 | Who or what may act, under which trust and containment boundaries, and when may a human intervene? | Authority, permissions, policy, isolation, approval, override, revocation, and accountability. |
| G8 | How is behavior observed, reconstructed, tested, and judged against explicit criteria? | Instrumentation, traces, debugging, evaluation, verification, evidence strength, and uncertainty. |
| G9 | How is a harness deployed, scaled, kept reliable, changed, operated, and retired? | Runtime topology, budgets, capacity, resilience, rollout, maintenance, incident response, and retirement. |
| G10 | How do the selected mechanisms compose into a coherent architecture under stated tradeoffs? | Whole-system comparison, transfer, simplification, and architectural change. |

## Internal merger boundaries

The three combined owners preserve these internal responsibilities:

| Owner | Distinctions that remain controlling |
| --- | --- |
| G4 | Tools own capability semantics, invocation, results, and environmental effects. Protocols and integration own capability exposure, discovery, interface contracts, transport, interoperability, and compatibility. |
| G6 | Local loops and workflows own step selection, planning, control paths, semantic retry, and stopping. Orchestration owns coordination across work units, time, resources, humans, or agents. Multi-agent operation is one orchestration topology, not the definition of orchestration. |
| G8 | Observability owns signal capture, reconstruction, diagnosis, and monitoring. Evaluation and verification own criteria, tests, evidence judgment, and decisions based on those signals. |

## Cross-sectional ownership rules

| Recurring concern | Primary mechanism home | Section-specific treatment |
| --- | --- | --- |
| Goals and evaluation criteria | G1 owns desired outcomes, operating conditions, and what success means for the bounded problem. | G8 operationalizes those goals into evaluation criteria, instrumentation, tests, evidence, and judgment. |
| Protocols and integration | G4 defines discovery, exposure, transport, connectors, interoperability, and compatibility. | G2 covers protocol-supplied context and provenance; G6 covers coordination and agent-to-agent use; G7 covers identity, authorization, and trust; G9 covers runtime reliability and version compatibility. |
| Context and retained information | G2 owns what reaches the current model call; G3 owns information and state outside it. | G5 covers how skill content is loaded; G6 covers state used by control and coordination; G9 covers storage and runtime mechanics. |
| Skills using tools or workflows | G5 owns the reusable procedural package. | G2 owns context delivery, G4 owns callable and interface semantics, and G6 owns execution flow. |
| Routing and fallback | G1 owns model/provider selection and routing policy. | G6 owns control-path routing and work dispatch; G9 owns runtime failover, degradation, and capacity response. |
| Continuity and resumption | G3 owns state continuity, checkpoint contents, and information lifecycle. | G6 owns resuming and coordinating work; G9 owns durable execution and recovery mechanics. |
| Security and human control | G7 defines authority, trust, containment, approval, and intervention. | Every section states its local trust boundary, permission consequence, or human checkpoint without recreating G7. |
| Evaluation and observability | G8 owns instrumentation, captured signals, criteria, verification, judgment, and evidence quality as one assurance system. | G1 establishes success conditions; G6 may apply evaluator-driven control; G7 covers audit integrity; G9 covers operational monitoring and response. |
| Monitoring and alerts | G8 owns signal generation, detection, and diagnosis. | G9 owns alert response, incident handling, and operational change. |
| Developer experience | No independent catch-all. | G8 owns debugging and inspection experience; G4, G5, G6, and G9 address local authoring or operating ergonomics only where they affect that section's decisions. |

## Sequence and traversal

The numbered order is the approved high-level reading sequence, not a universal
implementation waterfall:

1. G1 establishes the boundary, terms, conditions, and success criteria.
2. G2 through G5 explain information, retained state, external capabilities,
   interfaces, and reusable procedures. A concrete harness uses only the
   mechanisms its operating conditions justify.
3. G6 explains how selected mechanisms are controlled and coordinated over
   multiple steps, tasks, resources, humans, or agents.
4. G7 and G8 receive full treatment after the mechanisms they constrain and
   judge, but their authority and assurance requirements apply from the first
   relevant boundary.
5. G9 treats deployment and sustained operation, with cost, capacity,
   reliability, and lifecycle conditions feeding back into every earlier
   choice.
6. G10 synthesizes only the selected mechanisms into whole architectures.

The stop rule inherited from F remains controlling: do not add a mechanism
merely because it appears later in the structure. Stop when the selected
composition satisfies the stated goals under its security, assurance, and
operating conditions.

## Structural benefits and risks

G makes conventional subjects, primary ownership, the three merger boundaries,
cross-sectional consequences, and whole-system synthesis easy to locate. Its
stable IDs support later detail and cross-reference without inventing a second
public vocabulary.

Its risks are also explicit:

- readers may mistake the numbered reading order for a required implementation
  sequence;
- merged owners may hide meaningful internal distinctions if the merger table
  is ignored;
- conventional terms can carry contested or product-shaped assumptions;
- cross-references can become difficult to navigate as later detail grows; and
- high-level scope anchors can be mistaken for a final or exhaustive subsection
  inventory.

The sequence disclaimer, internal merger boundaries, primary-ownership rules,
and detailed-outline handoff contract mitigate those risks. G deliberately
makes a single linear teaching story and implementation-specific topology less
visible because it is a research and knowledge architecture first.

## Lineage from F

G preserves F's recognizable subject matter while changing its top-level
grouping:

| F input | G disposition |
| --- | --- |
| F1 Foundations and Field Vocabulary | Retained as G1. |
| F2 Context Engineering | Retained as G2. |
| F3 Memory and State | Retained as G3. |
| F4 Tool Engineering + F6 Protocols and Integration | Combined as G4; tools and protocols remain distinct named children. F6's Agent-to-Agent Interfaces become G4's protocol/interface mechanics, G6 owns their coordination and use, and G7 owns identity, authorization, and trust consequences. |
| F5 Skills | Retained as G5. |
| F7 Agent Loops, Planning, and Workflows + F8 Orchestration Systems and Multi-Agent Systems | Combined as G6; local control, orchestration, and multi-agent coordination remain distinct named children. |
| F9 Security, Permissions, and Human Control | Retained as G7 and continues as a cross-cutting rail. |
| F10 Evaluation and Verification + F11 Observability, Tracing, and Debugging | Combined as G8; captured signals and evaluative judgment remain distinct named children within one assurance system. F11's Runtime and Workflow Tracing is retained under Logs, Events, Traces, and Metrics. Developer Experience remains named for debugging and inspection, while the cross-sectional rule distributes local authoring and operating ergonomics to their mechanism owners. |
| F12 Production Infrastructure and Operations | Retained as G9 and continues as an operating back-edge. |
| F13 Integrated Harness Architectures | Retained as G10 and explicitly classified as final synthesis. |

F remains the reviewed checkpoint-02 predecessor. D remains its reviewed
checkpoint-01 baseline, and E remains advisory design input. None of those
artifacts is rewritten or given current governing authority by G.

## Contract for later detailed-outline refinement

The next authorized stage may assign subordinate IDs under its separately
approved scheme. For every major subsection, that stage should define:

- its objective and why it belongs;
- its primary G owner and typed cross-references to other owners;
- inclusions, exclusions, and ambiguous edge cases;
- the design or evaluation questions it must answer;
- prerequisites, feedback loops, and cross-references;
- the evidence needed to answer its questions;
- unresolved choices, assumptions, and transfer limits; and
- its role in the recommended reading sequence.

G1–G10 are stable top-level addresses. Detailed refinement may reorganize
children only when it preserves the approved subject set, grouping, IDs, order,
primary ownership, the tools/protocols boundary, the local-control/orchestration
boundary, the signal-and-diagnosis/judgment boundary, and G10's no-new-mechanism
constraint. A top-level addition, removal, rename, merge, split, reorder, ID
change, or ownership change returns to the maintainer for decision.

## Deliberate limits

- Approval of G is approval of this high-level organization only.
- It does not approve a detailed outline, research-question set, evidence plan,
  case set, source recommendation, curriculum, or learning deliverable.
- It does not establish that a named mechanism works, is universally defined,
  or belongs in every harness.
- It does not ratify core-04, open core-05, authorize a source query or deep
  read, promote evidence, or readmit legacy material.
- The configured Claude discussion review was advisory and resolved to Fable 5,
  not Opus 4.8; neither that review nor its reconciliation supplied maintainer
  authority or subject evidence.
