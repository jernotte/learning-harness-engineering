# Harness Engineering V2 — Build-Up Skeleton (Alternative)

**Design input:** `V2-SK-E`
**Version:** `0.1`
**Origin:** Post-CP01 advisory input retained for `V2-SK-CP02`
**Status:** Advisory; never active or approved; preserved as an input to
`V2-SK-F`
**Original authority claim:** V2-D013 — incorrect; that decision authorized only
V2-SK-D
**Current authority:** V2-D014 permits retention solely as an advisory input to
V2-SK-F
**Maturity:** Unreviewed alternative containing adjudicated dependency,
coverage, and outcome overclaims
**Input boundary:** Existing captured V2 artifacts through proposed core-04; no new source access
**Relationship to V2-SK-D:** The original proposal claimed the same topic set
with different ordering and framing. Review found silent omissions and false
universal dependencies. The body is preserved as the design input that F
adjudicates; its self-assessment is not accepted as fact.

The active synthesis is
[`V2-SK-F`](conventional-buildup-skeleton.md). See its D/E disposition for the
accepted and rejected parts of this proposal.

## Organizing principle

Order the recognizable subjects by construction dependency: what must already
exist before the next subject has anything to act on. Start from the smallest
harness that runs (a single model call) and add one capability at a time until
the reader has assembled a full system, then compare real systems at the end.

Section names stay conventional, so this is not a substitute taxonomy. The
build-up is the reading mode, not a renaming. Each section still owns a
familiar subject; the sequence is justified by genuine conceptual dependency
rather than subject-family affinity or reference-lookup grouping.

Two rules keep this honest. First, the spine follows conceptual prerequisite,
not pedagogical convenience: a section appears where it does because the earlier
sections supply something it needs, not merely because it reads nicely there.
Second, a capability is introduced at the first point it becomes load-bearing,
not at the first point it can be mentioned.

## Intended reading mode

Two supported paths from one spine:

- **First reading:** front to back as a construction sequence. Each section ends
  with a named capability the running harness now has and a design decision the
  reader can now make and defend.
- **Reference use:** each section name is a conventional term, so a reader who
  already knows the field can jump to Tool Engineering or Evaluation directly.
  The dependency notes tell them what earlier material a section assumes.

## High-level conceptual tree

```text
Harness Engineering (built up one capability at a time)
│
├── 1. Foundations and the Bare Model Call
│   ├── Definitions and Boundaries
│   │   ├── prompt, context, harness, and loop engineering
│   │   └── model calls, workflows, agents, harnesses, and adjacent systems
│   ├── System Anatomy You Will Grow
│   │   └── model, context, memory, tools, control, and environment
│   ├── Model Selection, Routing, and Invocation
│   │   ├── capabilities, versions, provider routing, and fallback
│   │   └── invocation parameters and response modes
│   └── Success Criteria for a Single Call
│       └── what "it worked" means before any judgment machinery exists
│   Runs after this: a one-shot text-in, text-out program.
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
│   Runs after this: a call that reliably performs one useful task.
│
├── 3. Tool Engineering
│   ├── Tool Design and Function Calling
│   │   ├── schemas, descriptions, affordances, and structured I/O
│   │   └── capability discovery and model-facing interfaces
│   ├── Tool Execution
│   │   ├── invocation, results, validation, and error contracts
│   │   └── side effects and environment feedback
│   └── Environment Interfaces
│       └── digital and physical side-effect and feedback boundaries
│   Runs after this: a call that can take one action in the world.
│   Safety checkpoint: an acting call needs its first permission boundary (see 9).
│
├── 4. Agent Loops, Planning, and Workflows
│   ├── Agent Loops
│   │   ├── decisions, actions, observations, and feedback
│   │   └── semantic retry, replanning, stopping, and loop detection
│   ├── Planning and Task Decomposition
│   └── Workflow Patterns
│       ├── chaining, control-path routing, branching, and parallelization
│       └── evaluator–optimizer, maker–checker, graph, and event patterns
│   Runs after this: an agent that pursues a goal across many steps.
│   Safety checkpoint: a multi-step loop needs stopping and containment (see 9).
│
├── 5. Memory and State
│   ├── Working and Session State
│   ├── Persistent Memory
│   │   ├── storage, indexing, retrieval, and update
│   │   └── consolidation, retention, and removal
│   └── Continuity and Handoff State
│       ├── initialization, checkpoint, pause, restart, and resumption
│       └── consistency, provenance, and versioning
│   Runs after this: an agent that carries state across turns and sessions.
│
├── 6. Skills
│   ├── Skill Concepts and Boundaries
│   │   ├── reusable procedures, instructions, scripts, and resources
│   │   └── relationships to prompts, tools, plugins, and workflows
│   ├── Skill Structure and Packaging
│   ├── Discovery, Loading, and Context Delivery
│   └── Reuse, Portability, Versioning, and Maintenance
│   Runs after this: reusable procedures the agent loads on demand.
│
├── 7. Protocols and Integration
│   ├── Tool and Resource Protocols
│   │   └── MCP and related capability-exposure interfaces
│   ├── Service APIs and Connectors
│   ├── Agent-to-Agent Interfaces
│   └── Identity, Transport, Interoperability, and Compatibility
│   Runs after this: an agent that plugs into external systems and capabilities.
│   Safety checkpoint: external content becomes untrusted input (see 9).
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
│   Runs after this: a system that coordinates work across agents and time.
│
├── 9. Security, Permissions, and Human Control (cross-cutting, now consolidated)
│   ├── Trust Boundaries and Untrusted Inputs
│   │   └── prompt injection where external content can steer a harness choice
│   ├── Identity, Permissions, and Authorization
│   │   └── least privilege, action policy, approval, and revocation
│   ├── Guardrails and Policy Enforcement
│   ├── Sandboxing, Isolation, and Containment
│   ├── Human-in-the-Loop
│   │   ├── review, clarification, approval, and human handoff
│   │   └── intervention, escalation, override, and emergency authority
│   └── Auditability and Accountability
│   Runs after this: a system that can act only within what it is allowed to do.
│   Note: the checkpoints flagged in 3, 4, and 7 are collected and completed here.
│
├── 10. Observability, Tracing, and Debugging
│   ├── Logs, Events, Traces, and Metrics
│   ├── Runtime and Workflow Tracing
│   │   └── causal paths, state changes, task handoffs, and timing
│   ├── Debugging and Replay
│   └── Operational Monitoring and Alerts
│   Runs after this: a harness whose behavior you can reconstruct and watch.
│
├── 11. Evaluation and Verification
│   ├── Success Criteria and Evaluation Design
│   ├── Offline Evaluations and Benchmarks
│   ├── Runtime Verification
│   │   └── self-checking, independent checking, and completion gates
│   ├── Testing and CI Integration
│   └── Evidence Quality and Transfer
│       └── uncertainty, negative results, ablation, and applicability
│   Runs after this: a harness whose behavior you can judge against criteria.
│
├── 12. Production Infrastructure and Operations
│   ├── Runtime Infrastructure
│   ├── Performance and Economics
│   ├── Reliability and Resilience
│   │   ├── infrastructure retry, idempotency, fallback, and degradation
│   │   └── partial, dependency, and service failure
│   ├── Configuration and Lifecycle Management
│   └── Operations and Maintenance
│   Runs after this: a harness that survives contact with production.
│
└── 13. Integrated Harness Architectures (capstone comparison)
    ├── Architecture Forms
    │   └── single-call, workflow, single-agent, multi-agent, and long-running systems
    ├── End-to-End Composition
    │   └── information, capability, control, evidence, and authority flows
    ├── Cross-Topic Tradeoffs
    ├── Domain Adaptation and Transfer
    └── Simplification and Architectural Change
    Reads after this: having built one harness, the reader can now analyze and
    compare unfamiliar ones without leaning on product labels.
```

## What each section owns, assumes, and supports

Each row states the question the section owns, what it assumes from earlier
sections (its conceptual prerequisite), and the design decision it lets the
reader make. The last column is what the brief asks every section to declare.

| Section | Owns | Assumes from earlier | Decision it supports |
| --- | --- | --- | --- |
| 1. Foundations and the Bare Model Call | What the harness problem is, where its boundary sits, and what one call succeeding means. | Nothing. | Where to draw the harness boundary for a concrete system. |
| 2. Context Engineering | What information is selected, transformed, and delivered into a call. | The bare call and its success criteria. | What to feed a call, and how to budget a finite context window. |
| 3. Tool Engineering | How a call is given callable capabilities and how their effects are represented. | A call worth acting on. | Which actions to expose, and how to shape a model-facing interface. |
| 4. Agent Loops, Planning, and Workflows | How local work is selected, sequenced, revised, and stopped. | A call that can act. | When to loop, how to stop, and which workflow pattern fits a task. |
| 5. Memory and State | What persists outside a single call and how continuity is preserved. | A loop that runs more than once, giving persistence a purpose. | What to remember, for how long, and how to resume after a break. |
| 6. Skills | How reusable procedures are packaged, found, loaded, and maintained. | Context, tools, and a loop to reuse them within. | When to package a procedure as a skill versus a prompt or tool. |
| 7. Protocols and Integration | How tools, resources, services, and agents interoperate across interfaces. | Tools and skills worth exposing or importing. | Whether to integrate a capability by protocol, connector, or direct call. |
| 8. Orchestration Systems and Multi-Agent Systems | How work is coordinated across tasks, agents, time, and execution units. | A single working agent to multiply and coordinate. | When one agent is not enough, and how to coordinate several. |
| 9. Security, Permissions, and Human Control | Who or what may act, under which trust and containment boundaries, and when a human intervenes. | Every acting mechanism from 3 through 8. | How much authority to grant each component, and where a human must stay in the loop. |
| 10. Observability, Tracing, and Debugging | How behavior is reconstructed, monitored, and diagnosed. | A system whose behavior is worth watching. | What to instrument so failures can be traced to a cause. |
| 11. Evaluation and Verification | How behavior is judged against criteria and how strong the evidence is. | Observable executions from section 10. | Whether a change helped, and whether the evidence is strong enough to act on. |
| 12. Production Infrastructure and Operations | How a harness is deployed, scaled, kept reliable, changed, and retired. | A mechanism and control set worth operating. | What operating conditions a design must survive, and when to revise it. |
| 13. Integrated Harness Architectures | How the built-up subjects compose into whole architectures under stated tradeoffs. | Sections 1 through 12. | Which architecture form fits a problem, and what transfers across implementations. |

## Sequence rationale and rejected orders

The spine follows one rule: a subject appears at the first point its inputs
exist. Concretely:

- **Context before Tools before Loops.** A tool result is only useful as context
  for the next call, so context precedes tools; a loop is what makes a second
  call happen, so tools precede loops. This is conceptual dependency, not
  convenience.
- **Memory after Loops, not before.** Persistence has no purpose until something
  runs more than once. Placing Memory before the loop that consumes it would
  introduce a mechanism before the reader can see what it is for. This is the
  main ordering change from `V2-SK-D`, which places Memory third.
- **Observability before Evaluation.** You cannot judge behavior you cannot
  observe, so signal capture precedes judgment. `V2-SK-D` places Evaluation
  before Observability to keep the two assurance subjects adjacent, and its own
  text notes this is backward for dependency. This spine follows the dependency.
- **Security as a growing thread, consolidated once.** The need for permissions,
  containment, and human control appears the moment a call can act (section 3),
  grows at each added capability, and is flagged as a checkpoint where it arises.
  Section 9 collects and completes those checkpoints rather than pretending the
  concern only starts there. This exposes a cross-cutting concern instead of
  hiding it in one residual section.
- **Integration last.** Comparing whole architectures requires having built the
  parts. Comparison is the capstone, never the entry point.

Rejected alternate orders:

- **Reference-affinity order** (group all assurance topics, all control topics):
  optimizes lookup for readers who already hold the whole picture, but inverts
  Observability and Evaluation and detaches Security from the capabilities it
  constrains. Kept only as the reference path, not the spine.
- **Seed or catalog order:** follows vendor or curator grouping, which the brief
  excludes as a spine.
- **Pure decision or lifecycle labels** (Decide / Build / Operate): would rename
  familiar subjects away, which the brief prohibits.

## Fit to the approved audience and outcomes

The audience is technically fluent builders who know model calls, prompts,
tools, and evaluation in isolation but want to design, analyze, and defend whole
systems. Building the system up one dependency at a time is how those isolated
pieces become design judgment: each section adds a capability and immediately
names the decision it opens. That directly serves the leading outcomes, which
are design judgment and evidence-based evaluation, while the conventional
section names preserve reference use as the secondary outcome.

The build-up also serves the "analyze an unfamiliar harness" outcome: a reader
who has assembled the parts in dependency order can decompose someone else's
system into the same parts, in the capstone, without relying on its product
labels.

This skeleton does not yet satisfy the seven outcomes with evidence. It provides
a dependency-ordered place for the later research questions and evidence.

## Inclusion, exclusion, and source roles

Identical to `V2-SK-D`, restated so this document stands alone. A topic belongs
when it names a recognizable harness-engineering subject and contains a
modifiable surrounding-system mechanism, or evidence needed to judge one.
Adjacent security, infrastructure, interface, or evaluation material enters only
through a concrete harness choice. Examples and products do not earn a node
because a catalog lists them.

Later sources serve the same roles: papers, docs, repositories, benchmarks, and
practitioner accounts supply differently limited evidence inside a topic;
implementations and frameworks are comparative examples or inspection targets,
never the spine; domains test transfer; and case studies integrate several
topics after their selection is separately authorized.

## Vocabulary, aliases, and cross-boundary mechanisms

This skeleton reuses the ownership and overlap rules in
[`conventional-vocabulary-map.md`](conventional-vocabulary-map.md) unchanged.
Reordering the sections does not move any primary home: routing still splits
across model invocation, workflows, and orchestration; retry and recovery still
split across loops, orchestration, and production; isolation still belongs to
Security. Each mechanism keeps one explanatory home and explicit
cross-references, so the changed order does not duplicate any claim.

The three cross-cutting research questions from checkpoint 00 (decision, causal,
responsibility) remain research prompts applied within each section, not section
names and not a second hidden taxonomy.

## Benefits, risks, and anchoring hazards

Benefits:

- the reading order matches how a harness is actually constructed, so each
  subject arrives when the reader can see why it matters;
- every section names the capability it adds and the decision it opens, which is
  what the brief asks each section to declare;
- the security thread is visible from the first acting call rather than deferred
  to a late block; and
- the capstone reconnects the built parts into whole-system comparison.

Risks and blind spots:

- a construction order can read as an implementation waterfall; it is not, since
  Security, Observability, Evaluation, and Production all reopen earlier choices;
- distributing security checkpoints risks fragmenting the concern if section 9
  does not clearly consolidate them;
- readers using the outline purely as reference may find a dependency order
  slightly less convenient than a subject-affinity grouping; and
- thirteen sections may still be more than the eventual reading sequence wants.

What this makes easy to see: how the pieces depend on and compose with each
other, and which decision each piece governs. What it tends to hide: the pure
alphabetical or subject-family lookup that a reference reader might expect, which
the conventional section names and the reference path are meant to recover.

## Deliberate limits

- The order asserts conceptual dependency, not universal agreement on terms.
- It copies no catalog or seed ordering, and adds no product catalog,
  recommendation, or selected case.
- Prompt injection appears under untrusted inputs, not as a standalone pillar.
- Research questions, evidence plans, detailed inclusions and exclusions, and the
  final learning sequence remain later work after the maintainer picks a spine.

## How this differs from V2-SK-D, in one place

| Dimension | V2-SK-D (conventional skeleton) | V2-SK-E (this build-up alternative) |
| --- | --- | --- |
| Organizing principle | Subject coordinate system for lookup | Construction dependency for assembly |
| Section vocabulary | Conventional terms | Same conventional terms |
| Memory placement | Section 3, before the loop | Section 5, after the loop that uses it |
| Observability vs Evaluation | Evaluation first, noted as backward | Observability first, following dependency |
| Security placement | Section 9, mostly self-contained | Cross-cutting thread from section 3, consolidated at 9 |
| Per-section framing | Question owned | Question owned, plus capability added and decision opened |
| Capstone | Section 13 synthesis | Section 13 synthesis (unchanged) |
| Reference use | Primary reading mode | Secondary path via section names |

## Maintainer review questions

1. Is a construction-dependency spine preferable to a subject-affinity spine, or
   should both coexist as spine plus cross-links?
2. Is moving Memory after Agent Loops correct, or does Memory need to precede the
   loop for some reader?
3. Is the security-as-thread-plus-consolidation treatment better than a single
   self-contained security section?
4. Does putting Observability before Evaluation read correctly, or does the
   assurance pair need to stay adjacent in the older order?
5. Do the per-section "capability added" and "decision opened" annotations help,
   or do they push the outline toward tutorial framing the brief defers?
6. Should the two skeletons be merged (one spine, the other as an alternate
   traversal), or should one be rejected outright?
