# Initial Research Plan

## Start by mapping, not by filling the outline

The first program should discover the field's structure before committing to a curriculum or permanent directory taxonomy. `outline.md` offers strong candidate areas, but using it as the recon checklist would anchor the project to what was already known when it was written. The first cycle will independently map the controllable architectural surface of modern harnesses, then compare that map with the outline. The maintainer makes the final taxonomy decision.

This initial plan is designed to test both the subject matter and the research method. Each early checkpoint asks two questions: are we learning the right things, and is the artifact making that learning easy to verify?

## Stage 0: approve the foundation

Review the charter, methodology, initial plan, trackers, and templates created from the project interview. Revise any assumptions before broad research begins. Create the first decision entry documenting approval or requested changes.

**Exit condition:** the maintainer approves the initial operating model and the question for Cycle 1.

## Cycle 1: field reconnaissance and taxonomy proposal

Begin with a broad question:

> What architectural responsibilities and design decisions make up a modern language-model harness when model weights and tokenization are treated as fixed?

Run several reconnaissance passes across recent papers, production documentation, open implementations, system disclosures, benchmarks, and credible practitioner accounts. Include established and frontier systems from several domains. Map synonymous and competing terminology. Look specifically for architectural areas absent from `outline.md` and for outline areas that may be consequences of a deeper shared mechanism.

The recon should propose—not silently impose—a field taxonomy. It should also identify a diverse first set of implementation and technique deep dives. Selection should balance influence, recency, architectural distinctiveness, openness, domain, and the availability of meaningful evidence.

**Checkpoint 1:** review the landscape, coverage gaps, and provisional taxonomy.

**Checkpoint 2:** approve or revise the first deep-dive set.

## Cycle 1 analysis: test the map against real systems

Analyze the approved implementations and techniques at stable versions. Open-source work should follow actual code paths and use tests and history where valuable. Closed systems should be described at the level external evidence supports. Each case should make its claims, inferences, contradictions, and unanswered questions easy to audit.

The goal is not merely to learn each product. It is to test whether the proposed architectural axes expose meaningful similarities, differences, costs, and hidden assumptions.

**Checkpoint 3:** review the first completed batch before scaling the same template across further cases. Modify the schema if it encourages shallow or misleading analysis.

## Cycle 1 consolidation and refinement

Build the first cross-harness comparison around architectural decisions rather than product profiles. Reconcile vocabulary, trace apparent agreement back to independent evidence, and investigate important contradictions. Turn recurring observations into provisional patterns without promoting frequency into effectiveness.

Refine the strongest findings through claim checks and counterexample searches. Classify patterns according to their evidence. Record which questions remain unanswered and which proposed experiments could answer them, without turning experimental reproduction into the main program prematurely.

**Checkpoint 4:** review the first synthesis, its usefulness, and its evidence trail.

**Checkpoint 5:** review the saturation case, research-process lessons, proposed taxonomy revisions, and next highest-value topic.

## Later topic cycles

After the landscape is approved, subsequent cycles can deepen architectural areas such as tools and feedback loops, context construction, memory, procedural knowledge, planning, delegation, workflows, verification, evaluation, and self-improvement. Those names remain examples until recon establishes the taxonomy.

Each topic cycle should deliberately compare several implementations and evidence types. It should start from a decision-oriented question, not a desire to accumulate everything mentioning the topic. Previously saturated topics remain open to meaningful new evidence.

When several areas have reviewed findings, the project can derive a maintained field guide and teaching sequence. Curriculum work should reorganize mature knowledge for learning; it should not become the only place where claims are explained or sourced.

## Deferred capabilities

The following may become useful, but are intentionally deferred until actual research reveals their value:

- an HTML dashboard generated from canonical artifacts;
- automated link, citation, and metadata validation;
- local indexing or search over third-party repositories;
- empirical comparison suites for important unresolved claims;
- a formal freshness-review queue;
- course modules and exercises.

Deferral is not rejection. It prevents infrastructure from fixing assumptions that the first cycles are meant to test.
