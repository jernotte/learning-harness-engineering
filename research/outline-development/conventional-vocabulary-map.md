# Harness Engineering V2 — Conventional Vocabulary Map

**Checkpoint:** `V2-SK-CP01`
**Status:** Adversarially reviewed checkpoint-01 basis; historical input to G
**Authority:** V2-D013
**Research effect:** None; this is local structural reconciliation, not subject evidence

## Purpose and epistemic layers

This map keeps the reader-facing outline in vocabulary people already use for
harness engineering. It does not claim that the terms are universally
standardized or that any one source defines them correctly.

Each row separates three layers:

1. **Captured wording** records where the retained V2 artifacts use or group a
   term. Catalog wording is curator metadata; a screen records what its direct
   surface said under that screen's limits.
2. **Status** distinguishes maintainer-directed public labels, captured
   vocabulary, and primary synthesis.
3. **Proposed boundary/home** is the checkpoint-01 primary's structural
   reconciliation. G now governs current grouping and ownership through its
   explicit mapping; neither placement is a source-native fact.

No active row depends solely on proposed core-04. The unratified
[core-04 calibration](awesome-screen-core-04.md#cross-source-calibration-results)
is used only as a stated stress test; rejecting it would not remove a public
term or placement below.

## Reader-facing vocabulary

| Public term | Captured wording and exact local basis | Status | Proposed boundary and primary home |
| --- | --- | --- | --- |
| Harness engineering | The [seed identities](seed-map.md#seed-identity-and-disposition) use harness, loop, runtime, workflow, and surrounding-system language with conflicting containment; the [boundary conflict](seed-map.md#boundary-conflict-to-preserve) preserves that disagreement. | Captured root term; boundary remains a primary proposal. | Root subject. Foundations defines the useful V2 boundary without claiming universal consensus. |
| Context engineering | The [common-topic map](seed-map.md#common-topic-candidates-not-an-adopted-taxonomy) names context; the catalog records “Context Delivery & Compaction”; approved core-01 family `awesome-family-126e07cf0d684e03` spans selection, retrieval, compaction, tool descriptions, and subagents in its [screening register](awesome-screen-core-01.md#screening-register). | Maintainer-directed public label with captured related wording. | Own section for information selected, transformed, and delivered to a model call. |
| Prompt and instruction engineering | The asixiv [seed extraction](seed-map.md#v2-seed-asixiv-2606-00001) distinguishes prompting/context/harness layers; Walking Labs records two instruction-centered models in [conceptual friction](walkinglabs-curriculum.md#conceptual-friction-inside-the-course). | Captured vocabulary; nesting is a primary proposal. | Child of Context Engineering because prompts and instructions are part of, not substitutes for, the whole context system. |
| Memory and state | The [common-topic map](seed-map.md#common-topic-candidates-not-an-adopted-taxonomy) names state and memory; Walking Labs treats state and session continuity in its [curriculum sequence](walkinglabs-curriculum.md#curriculum-architecture-and-sequence); core-03 families `awesome-family-cddc9a2d075a5103` and `awesome-family-53e1f0b762c2e77b` are recorded in its [screening register](awesome-screen-core-03.md#screening-register). | Maintainer-directed public label; internal split is primary reconciliation. | Own section for information that persists or changes outside the immediate model-call context. |
| Tool engineering | The [common-topic map](seed-map.md#common-topic-candidates-not-an-adopted-taxonomy) names tools and capability interfaces; the catalog's [category table](awesome-catalog-summary.md#qualifying-occurrences-by-catalog-category) contains Tool Design; approved core-01 family `awesome-family-82747c62f33e4f20` supplies a bounded direct example in the [screening register](awesome-screen-core-01.md#screening-register). | Captured vocabulary; public wording and placement are primary proposals. | Own section for callable capability interfaces, execution contracts, results, errors, and side effects. |
| Skills | The catalog's [category table](awesome-catalog-summary.md#qualifying-occurrences-by-catalog-category) contains “Skills & MCP”; Walking Labs introduces skills in its [curriculum sequence](walkinglabs-curriculum.md#curriculum-architecture-and-sequence); approved core-03 family `awesome-family-22b0273a7c1efebd` treats skill testing in the [screening register](awesome-screen-core-03.md#screening-register). | Maintainer-directed public label; separation from tools/MCP is primary reconciliation. | Own section for reusable procedures, instructions, scripts, resources, packaging, discovery, and maintenance. |
| Protocols and integration | The [common-topic map](seed-map.md#common-topic-candidates-not-an-adopted-taxonomy) names protocols and external interfaces; approved core-01 family `awesome-family-0668b361cac37fb4` and core-02 family `awesome-family-fc75dde1b88ed17e` appear in their [core-01](awesome-screen-core-01.md#screening-register) and [core-02](awesome-screen-core-02.md#screening-register) registers. | Captured protocol/interface vocabulary; standalone section is a primary proposal. | Own section for MCP, service connectors, agent-to-agent interfaces, transport, identity, and interoperability; not a subtype of Skills or Tool Engineering. |
| Agent loops | The asixiv [seed extraction](seed-map.md#v2-seed-asixiv-2606-00001), [common-topic map](seed-map.md#common-topic-candidates-not-an-adopted-taxonomy), and approved core-01 families `awesome-family-ae10eb4597fe2dea` and `awesome-family-7647307fe49844a0` in the [screening register](awesome-screen-core-01.md#screening-register) use loop/control language. | Captured vocabulary; scope relative to harness and orchestration remains disputed. | Child of Agent Loops, Planning, and Workflows for local decision/action/observation control. |
| Planning and task decomposition | The catalog's [category table](awesome-catalog-summary.md#qualifying-occurrences-by-catalog-category) uses the exact label; the seed map's [architecture-decision extraction](seed-map.md#wave1-architecture-decisions) and approved core-01 family `awesome-family-3cdc3bbb8a55263b` in the [screening register](awesome-screen-core-01.md#screening-register) preserve planner/executor framing. | Captured vocabulary; relation to orchestration is primary reconciliation. | Child of Agent Loops, Planning, and Workflows for selecting or revising a course of action. |
| Workflows | The [Building Effective Agents extraction](seed-map.md#wave1-building-effective-agents) distinguishes workflows and agents; Walking Labs uses workflow/control sequencing in its [curriculum sequence](walkinglabs-curriculum.md#curriculum-architecture-and-sequence). | Captured vocabulary with inconsistent boundaries across sources. | Child of Agent Loops, Planning, and Workflows for local control patterns; execution across tasks/agents/time belongs to Orchestration. |
| Orchestration systems | The [common-topic map](seed-map.md#common-topic-candidates-not-an-adopted-taxonomy) names orchestration, delegation, and scheduling; the catalog's [category table](awesome-catalog-summary.md#qualifying-occurrences-by-catalog-category) contains Task Runners & Orchestration; approved core-03 family `awesome-family-642743ad9061795a` appears in its [screening register](awesome-screen-core-03.md#screening-register). | Maintainer-directed public label; section boundary is primary reconciliation. | Own section for coordinating execution across tasks, agents, time, dependencies, and work units. |
| Multi-agent systems | The [Building Effective Agents extraction](seed-map.md#wave1-building-effective-agents) and Walking Labs [curriculum sequence](walkinglabs-curriculum.md#curriculum-architecture-and-sequence) use subagent/multi-agent language; the catalog groups many related leads under orchestration in its [category table](awesome-catalog-summary.md#qualifying-occurrences-by-catalog-category). | Captured vocabulary; nesting is a primary proposal. | Child of Orchestration because multi-agent is one orchestration topology, not its synonym. |
| Human-in-the-loop | The [common-topic map](seed-map.md#common-topic-candidates-not-an-adopted-taxonomy) names human intervention; the catalog has Human-in-the-Loop in its [category table](awesome-catalog-summary.md#qualifying-occurrences-by-catalog-category); approved core-03 family `awesome-family-cf18e9c6fc10a052` appears in the [screening register](awesome-screen-core-03.md#screening-register). | Captured vocabulary; primary home is a proposal. | Child of Security, Permissions, and Human Control for authority; Orchestration cross-references where review, pause, or handoff occurs. |
| Evaluation and verification | The [common-topic map](seed-map.md#common-topic-candidates-not-an-adopted-taxonomy), Walking Labs [curriculum sequence](walkinglabs-curriculum.md#curriculum-architecture-and-sequence), and catalog [category table](awesome-catalog-summary.md#qualifying-occurrences-by-catalog-category) separately name evaluation, verification, testing, and CI. | Captured vocabulary; distinctions and grouping are primary reconciliation. | Own section for judgment against criteria, checking conditions, testing behavior, and evidence quality. |
| Observability, tracing, and debugging | The [common-topic map](seed-map.md#common-topic-candidates-not-an-adopted-taxonomy) names observability/debugging; the catalog [category table](awesome-catalog-summary.md#qualifying-occurrences-by-catalog-category) separates Observability & Tracing from Debugging & Developer Experience; approved core-01 families `awesome-family-dab460140f5c7122` and `awesome-family-22e1d1b5ef859fb4` appear in the [screening register](awesome-screen-core-01.md#screening-register). | Captured vocabulary; combined public section is a primary proposal. | Own section for signals, reconstruction, monitoring, diagnosis, and replay; Evaluation owns judgment rather than signal capture. |
| Security, permissions, sandboxing, and guardrails | The [common-topic map](seed-map.md#common-topic-candidates-not-an-adopted-taxonomy) names permissions/sandboxing; the catalog [category table](awesome-catalog-summary.md#qualifying-occurrences-by-catalog-category) separates Security, Sandbox & Permissions from Permissions & Authorization; approved core-03 families `awesome-family-d5f9dbd62b3ecc11` and `awesome-family-a841a2284747ba07` appear in the [screening register](awesome-screen-core-03.md#screening-register). | Captured vocabulary; internal layering and HITL placement are primary proposals. | Own section for trust, identity, allowed actions, policy enforcement, containment, human authority, and accountability. |
| Production infrastructure and operations | The catalog uses the exact label in its [category table](awesome-catalog-summary.md#qualifying-occurrences-by-catalog-category); Walking Labs identifies production economics and lifecycle as gaps in [analyst-inferred gaps](walkinglabs-curriculum.md#analyst-inferred-gaps-relative-to-the-provisional-v2-brief); approved core-03 family `awesome-family-4f11e26be57ffed1` appears in the [screening register](awesome-screen-core-03.md#screening-register). | Captured vocabulary; scope is a primary proposal. | Own section for deployed runtime infrastructure, performance, resilience, configuration, lifecycle, incidents, and maintenance. |
| Integrated harness architectures | The approved outcomes require system analysis and defended design decisions in the [brief](brief.md#intended-outcomes); the seed map records integration/sequence pressure in [Sequence pressures exposed by Wave 1](seed-map.md#sequence-pressures-exposed-by-wave-1). | Primary synthesis label, not claimed as a standardized field category. | Tentative final section that composes prior topics and introduces no new mechanism family, framework catalog, or selected case. |

## Proposed distinctions and cross-references

Every row below is a checkpoint-01 primary placement proposal, not a claim that
the field has settled the boundary.

| Overlap | Proposed primary owner | Required cross-reference |
| --- | --- | --- |
| Retrieval and RAG | Context Engineering owns selection and delivery into a model call. | Memory and State owns retained stores, update, retention, and removal. |
| Compaction | Context Engineering owns fitting current context. | Memory and State owns what persists across compaction and restart. |
| Skills using tools | Skills owns the reusable procedure and package. | Tool Engineering owns callable interfaces; Context Engineering owns loaded content. |
| MCP-backed capabilities | Protocols and Integration owns transport and capability exposure. | Tool Engineering owns callable semantics; Skills owns procedural reuse; Security owns trust. |
| Provider, control-path, and work routing | Foundations owns model/provider routing. | Workflows owns control-path routing; Orchestration owns work dispatch. |
| Handoffs | Memory and State owns continuity information. | Orchestration owns task handoffs; Human Control owns human handoffs. |
| Retry and recovery | Agent Loops owns semantic retry and replanning. | Orchestration owns task recovery; Production owns infrastructure retry and service recovery. |
| Evaluator–optimizer workflows | Agent Loops and Workflows owns the control pattern. | Evaluation and Verification owns evaluator design and judgment quality. |
| Human approval in a workflow | Security and Human Control owns authority and policy. | Orchestration owns placement, pause, resume, and handoff behavior. |
| Isolation | Security owns sandbox and containment policy. | Orchestration owns workspace coordination; Production owns enforcement capacity. |
| Traces and metrics | Observability owns capture, reconstruction, and diagnosis. | Evaluation owns scoring; Operations owns alerting and response. |
| Shared state | Memory and State owns meaning and lifecycle. | Orchestration owns coordination; Production owns storage infrastructure. |

## Terms not promoted into the public spine

The following remain examples, disputed frames, or source-specific labels:

- Natural-Language Agent Harness, Internalized Harness Representation, Graph
  Harness, and product-specific maturity levels;
- either Walking Labs five-subsystem list, because the repository presents two
  incompatible versions;
- “Generators & Meta-Harnesses” as a source-form bundle rather than a settled
  subject boundary;
- worktrees, particular repository files, ambient agents, and one-feature-per-
  session as general categories; and
- framework, SDK, runtime, and product names as substitutes for mechanisms.

Catalog occurrence counts show the curator's vocabulary surface, not topic
importance, effectiveness, completeness, or teaching priority.
