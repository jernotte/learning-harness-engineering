# Initial Research Plan

## Start by mapping, not by filling the outline

The first program should discover the field's structure before committing to a curriculum or permanent directory taxonomy. `outline.md` offers strong candidate areas, but using it as the recon checklist would anchor the project to what was already known when it was written. The first cycle uses complementary academic, implementation, and production-documentation passes to map the controllable architectural surface, then compares that map with the outline. The maintainer makes the final taxonomy decision.

This initial plan is designed to test both the subject matter and the research method. Each early checkpoint asks two questions: are we learning the right things, and is the artifact making that learning easy to verify?

## Stage 0: approve the foundation

Review the charter, methodology, initial plan, trackers, and templates created from the project interview. Revise any assumptions before broad research begins. Create the first decision entry documenting approval or requested changes.

**Exit condition:** the maintainer approves the initial operating model and the question for Cycle 1.

## Stage 0.5: instrument source provenance

The first recon exposed a structural gap: source records were counted, but no enforced claim-coverage gate or complete record of search and reading activity existed. The maintainer approved pausing new subject-matter research until a minimum provenance capture path is built and validated.

First investigate whether native Codex tool events or transcripts can be ingested. If not, build a logged research gateway or adapters that capture search queries, returned results, opened sources, repository locations inspected, reading depth, disposition, and claim use. Store append-only canonical events and generate a concise human audit.

Validate the system with a bounded exercise containing returned-but-unopened, read-only, excluded, and referenced sources. The audit must reveal source concentration, planned-versus-actual channels, repository inspection depth, missing claim evidence, and unpinned implementation claims. Manual bootstrap activity is declared; it cannot be used to claim complete provenance.

Then reconstruct Cycle 1 from available tool history, subagent reports, source records, and citations. Label it `reconstructed` and preserve the exact information that cannot be recovered.

**Exit condition:** provenance capture and validation pass; Cycle 1 has a generated source audit and claim-evidence audit; the maintainer can review the remediated Checkpoint 1 package.

## Cycle 1: field reconnaissance and taxonomy proposal

Begin with a broad question:

> What architectural responsibilities and design decisions make up a modern language-model harness when model weights and tokenization are treated as fixed?

Run several reconnaissance passes across recent papers, production documentation, open implementations, system disclosures, benchmarks, and credible practitioner accounts. Include established and frontier systems from several domains. Map synonymous and competing terminology. Look specifically for architectural areas absent from `outline.md` and for outline areas that may be consequences of a deeper shared mechanism.

The recon should propose—not silently impose—a field taxonomy. It should also identify a diverse first set of implementation and technique deep dives. Selection should balance influence, recency, architectural distinctiveness, openness, domain, and the availability of meaningful evidence.

**Checkpoint 1:** review the landscape, sourcing coverage, gaps, and the three-layer taxonomy: source-native discovery vocabulary, multi-label responsibility lens, and deferred human-facing narrative.

**Checkpoint 2:** approve or revise the first deep-dive set. The proposal must state batch size and include a responsibility-coverage matrix, repository/tag/commit/date for every open implementation, documentation/version alignment, evidence mode, lineage risk, and a deliberate closed-production-harness choice. The maintainer will provide the Claude Code material for the initial closed case.

## Cycle 1 analysis: test the map against real systems

Analyze the approved implementations and techniques at stable versions. Open-source work should follow actual code paths and use tests and history where valuable. Closed systems should be described at the level external evidence supports. Each case should make its claims, inferences, contradictions, and unanswered questions easy to audit.

The goal is not merely to learn each product. It is to test whether the responsibility lens exposes meaningful similarities, differences, costs, and hidden assumptions while source-native organization remains readable and discoverable.

**Checkpoint 3:** review the first completed batch before scaling the same template across further cases. Each case must report responsibility boundaries that blurred, mechanisms that spanned categories, missing concepts, and forced classifications. The checkpoint compares this friction across cases and proposes evidence-driven taxonomy changes. Modify the schema if it encourages shallow or misleading analysis.

D-011 amended D-010's immediate order and trigger. Hermes Agent `v2026.7.7.2` at `9de9c25f620ff7f1ce0fd5457d596052d5159596` was the final pre-Checkpoint-3 case and began with a written scope boundary. D-013 then approved Checkpoint 3's stable-ID responsibility refinements, cross-cutting annotations, and static-first, question-triggered focused-test policy. No Claude Code case, Browser Use case, replacement, or cohort member is inserted before the first learning experience. Browser Use remains deferred until afterward so its perception-grounded R5/R6 value stays explicit.

## Cycle 1 consolidation and refinement

Build the first cross-harness comparison around architectural decisions rather than product profiles. Reconcile vocabulary, trace apparent agreement back to independent evidence, and investigate important contradictions. Turn recurring observations into provisional patterns without promoting frequency into effectiveness. After the reviewed Hermes case and approved Checkpoint 3, derive a first learning-oriented Markdown view from that synthesis; only after the complete learning experience may Browser Use or another case reopen against explicit gaps.

Refine the strongest findings through claim checks and counterexample searches. Classify patterns according to their evidence. Record which questions remain unanswered and which proposed experiments could answer them, without turning experimental reproduction into the main program prematurely.

**Checkpoint 4:** review the first synthesis, its usefulness, and its evidence trail.

**Checkpoint 5:** review the saturation case, research-process lessons, proposed taxonomy revisions, and next highest-value topic.

## Later topic cycles

After the landscape is approved, subsequent cycles can deepen source-native areas such as tools and feedback loops, context construction, memory, procedural knowledge, planning, delegation, workflows, verification, evaluation, and self-improvement. These familiar terms drive discovery and navigation; the responsibility lens provides multi-label analysis.

Each topic cycle should deliberately compare several implementations and evidence types. It should start from a decision-oriented question, not a desire to accumulate everything mentioning the topic. Previously saturated topics remain open to meaningful new evidence.

When several areas have reviewed findings, the project can derive a maintained field guide and teaching sequence. Curriculum work should reorganize mature knowledge for learning; it should not become the only place where claims are explained or sourced.

## Deferred capabilities

The following may become useful, but are intentionally deferred until actual research reveals their value:

- an HTML dashboard generated from canonical artifacts;
- local indexing or search over third-party repositories;
- empirical comparison suites for important unresolved claims;
- a formal freshness-review queue;
- course modules and exercises.

Deferral is not rejection. It prevents infrastructure from fixing assumptions that the first cycles are meant to test.

Source-provenance capture, claim-evidence validation, and source-audit generation are no longer deferred. They are Stage 0.5 prerequisites.
