# Harness Engineering V2 — Outline-Development Brief

- **Status:** Approved on 2026-07-20; amended by V2-D007 on 2026-07-20 and
  V2-D012 through V2-D013 on 2026-07-21
- **Stage:** 3 — outline-development brief
- **Decision authority:** Maintainer
- **Subject evidence admitted:** None

**Approval effect:** V2-D005, the linked review-limit decision V2-D006, the
catalog-landscape correction V2-D007, checkpointed skeleton amendment V2-D012,
and conventional-vocabulary correction V2-D013 are approved. This contract
authorizes structural seed, curriculum, and catalog mapping plus the
provisional conventional-topic skeleton. Each later checkpoint separately
unlocks the next work; approval does not approve an outline, authorize
substantive research, or grant blanket conversation-export permission.

## Approval record

The maintainer explicitly approved V2-D005 and V2-D006 on 2026-07-20, adopting
the audience, outcomes, scope, decision targets, organizational criteria,
sequence criteria, initial seed boundary, provenance treatment, checkpoints,
non-goals, outline approval test, and selective design-history policy below.
After Wave 1, the maintainer approved V2-D007: the unopened Wave 2 was
withdrawn, Walking Labs became a mandatory curriculum candidate, and the
Awesome repository became a comprehensive lead catalog with a new inventory
gate before further outbound-source opens.

After four catalog calibrations, the maintainer approved V2-D012: create three
active provisional high-level skeletons from already captured artifacts,
permit at most one temporary challenger, preserve version lineage, review the
portfolio adversarially, and stop for immediate maintainer review before any
core-05 opening. Later screening, if separately authorized, is reviewed after
at most five batches or an earlier structural stop. The 21-batch plan remains a
candidate upper bound rather than an automatic completion mandate.

At the resulting checkpoint, the maintainer rejected all three abstraction-
first spines and the two-level cap. V2-D013 instead authorizes one deeper
replacement candidate whose public structure uses familiar harness-engineering
terms. The rejected portfolio remains design history; its analytical lenses
may survive only as cross-cutting questions.

The earlier configured external review covered the pre-hybrid version of this
brief. The reviewer could not inspect the selective-history revision because a
hard tenant rule rejected the declared repository transfer even after explicit
maintainer authorization. Approved V2-D006 records the exact limit and accepts
deterministic validation plus bounded local read-only audits as a one-time
fallback for this documentation-only revision. It does not waive review for
Stage 4 source work.

This brief deliberately contains no proposed harness-engineering taxonomy or
subject outline. It defines how those proposals will be developed and judged.

## Purpose

Develop a V2 outline whose objectives, boundary, organization, granularity,
and sequence can be inspected before substantive research compounds an
unwanted framing. The outline must determine what later research should ask
and how its results should fit together without importing the pre-pivot
program or silently adopting the seed sources' organization.

The final outline will be a research and knowledge architecture first. It may
later support learning material, design guidance, or reference material, but a
course structure will not control it unless the maintainer deliberately changes
that priority.

## Approved audience

### Primary audience

The maintainer as an experienced harness builder, generalized to technically
fluent practitioners who design, evaluate, debug, or improve systems around
language models.

Assume strong software-engineering fluency and basic familiarity with model
calls, prompts, tools, and evaluation. Do not assume familiarity with a
particular framework, product, implementation family, or V2 vocabulary.

### Secondary uses

The resulting body of knowledge may also help technical leads, reviewers, and
researchers compare architectures or plan investigations. Beginner teaching,
product tutorials, and presentation material are possible later derivatives,
not primary organizing requirements.

## Intended outcomes

The eventual evidence-backed body of knowledge should enable its primary
reader to:

1. state and defend a useful technical boundary for harness engineering;
2. analyze an unfamiliar harness without relying on product labels or
   marketing categories;
3. identify consequential design choices, alternatives, constraints,
   assumptions, costs, failure modes, and transfer limits;
4. trace actual system behavior and causal paths instead of inferring
   architecture from surface terminology;
5. judge whether a claim rests on implementation evidence, reported outcomes,
   inference, recommendation, or unresolved uncertainty;
6. make and defend design or evaluation decisions under stated operating
   conditions; and
7. identify the next source inspection or empirical test most likely to reduce
   a material uncertainty.

The approved outline must state what understanding or decision each major
section is intended to support. It need not answer the research questions yet.

## Approved interim technical boundary

Use this provisional membership test during outline development:

> Candidate material belongs when it concerns a modifiable mechanism or
> decision in the system surrounding one or more language-model calls, or
> supplies evidence needed to judge that mechanism or decision.

Treat model weights, tokenizer design, and training procedure as fixed. Model
selection, routing, invocation parameters, and system-level adaptation remain
eligible when they are decisions made by the surrounding system rather than
changes to the underlying model.

Include an adjacent subject only when it materially constrains, explains, or
evaluates a harness decision. An adjacent field does not become an independent
track merely because it is important.

### Explicit exclusions

- pretraining, fine-tuning, reinforcement learning, tokenizer design, or model
  architecture as primary mechanisms;
- general model-capability discussion without a concrete harness decision;
- standalone prompt tips detached from a repeatable system mechanism;
- general user-interface, security, safety, distributed-systems, or evaluation
  coverage unrelated to a harness choice;
- product catalogs or popularity rankings without a decision-oriented role;
- implementation tutorials, procurement advice, or a design for one universal
  harness; and
- any topic included only because a seed or legacy artifact names it.

Permissions, trust boundaries, human intervention, runtime infrastructure, and
evaluation remain eligible where they shape the model–environment loop or the
evidence used to improve it. Model–harness co-training remains an explicit
boundary question rather than an included track unless the maintainer broadens
the scope.

Every later scope proposal must show important inclusions, exclusions, and
ambiguous edge cases.

## Decisions later research must support

The following is a non-exclusive decision inventory for testing coverage. It
is not a taxonomy and must not dictate the outline's headings.

Later research should help a reader decide:

- where the harness boundary should be drawn for a concrete system or
  investigation;
- how to inspect and compare systems that use different terminology and
  abstractions;
- which system-level choices are consequential and who or what should own each
  choice;
- how candidate choices interact, compose, constrain, or invalidate one
  another;
- which alternatives and tradeoffs matter for a stated problem;
- how a proposed choice should be observed, tested, and revised;
- when an approach is appropriate under particular models, tasks, domains,
  budgets, trust boundaries, and operating conditions;
- what evidence is sufficient before adopting or recommending an approach;
- which conclusions transfer across implementations and versions; and
- which open question or experiment would most reduce decision uncertainty.

Recommended priority: design judgment and evidence-based evaluation first,
explanation and reference utility second, and teaching or implementation
guidance only as later derivatives.

## Organization and granularity criteria

Use one active replacement skeleton at the current checkpoint. Its public
spine must use recognizable harness-engineering terms rather than substitute
decision, lifecycle, or authority labels. Familiar terms may remain contested;
state their boundary and relationship instead of renaming them away.

Preserve stable IDs and every version. The rejected A/B/C portfolio remains
visible as checkpoint-00 history. Only the maintainer may accept, replace,
reorder, or reject the active candidate.

The skeleton must state:

- its organizing principle and intended reading mode;
- how it serves the approved audience, outcomes, and decision targets;
- what question or decision each top-level section owns;
- its inclusion and exclusion logic;
- how it preserves common vocabulary while handling aliases and disputed
  boundaries;
- how it treats mechanisms that cross section boundaries without duplicating
  claims;
- its dependency and sequence rationale;
- its benefits, risks, blind spots, and anchoring hazards; and
- what it makes easy to see and what it tends to hide.

Implementations, papers, products, domains, and sources do not form the public
spine merely because they use a common term. The skeleton must state whether
they later serve as evidence, examples, traversal paths, or comparative cases.

### Granularity rules

- The skeleton may descend beyond two levels when a child preserves a real
  semantic or ownership distinction.
- The detailed outline has no fixed depth cap; use only the depth needed to
  expose distinct objectives, questions, dependencies, or evidence burdens.
- No top-level section count is predetermined.
- Split a section only when a child has a distinct objective, decision,
  research question, dependency, or evidence burden.
- Combine material when separating it would hide a load-bearing interaction or
  produce repeated claims.
- Reject miscellaneous catch-alls and seed-table-of-contents granularity.
- Every major section must explain why it belongs and why it appears where it
  does.

## Sequence and dependency criteria

The final sequence must:

- follow genuine conceptual or decision dependencies rather than chronology,
  popularity, vendor order, or seed order;
- state what each major section assumes from earlier sections;
- distinguish conceptual prerequisite from pedagogical convenience;
- introduce complexity only when required by an approved outcome;
- place mechanism explanation before comparative recommendation and evidence
  standards before effectiveness claims;
- expose circular dependencies and cross-cutting concerns rather than hiding
  them in one residual section;
- explain why plausible alternate orders were rejected; and
- support both a coherent first reading and targeted reference use.

The approved public reading mode now follows conventional topics. Alternative
decision, causal, responsibility, or pedagogical traversals may be supplied as
cross-links, but they do not replace familiar section names.

## Comprehensive seed, curriculum, and catalog investigation

Brief approval authorizes only the structural landscape work below. It is not a
general literature review and does not establish findings.

### Mandatory structural inputs

1. `https://asixiv.org/pdf/curated/2606.00001`
2. `https://github.com/ai-boost/awesome-harness-engineering`
3. `/Users/jernotte/Downloads/2606.24937v1_copy.pdf`
4. `https://github.com/walkinglabs/learn-harness-engineering`

The first three inputs and six-source Wave 1 were completed under the original
V2-D005 boundary. V2-D007 adds the Walking Labs repository and changes the
treatment of the Awesome repository. Repositories are pinned to observed
commits. The local PDF remains identified by path, SHA-256, byte count, and
modification time.

For each PDF, inspect the complete outline-bearing surface: metadata, abstract,
introduction, headings, section summaries or prose needed to understand the
structure, conclusion or limitations, and references. Extract, without
adopting, source-native vocabulary, topics, audience and outcomes, organization,
prerequisites, assumptions, reference shape, omissions, tensions,
counterframes, anchoring hazards, and materially different organizational
possibilities.

### Walking Labs curriculum candidate

Inspect the repository's complete English curriculum-bearing surface needed to
understand its objectives, scope, definition, organizing model, lecture and
project sequence, prerequisites, exercises, resource library, evidence claims,
references, omissions, and intended outcomes. Translations, screenshots, build
artifacts, generated coursebooks, and implementation templates need only be
enumerated unless they materially change that structure.

Treat the course as an existing curriculum proposal, not as V2 authority or
evidence that its five-subsystem framing, coding focus, sequence, projects, or
claims are correct. Because its README names
`walkinglabs/awesome-harness-engineering`, establish that repository's lineage
with `ai-boost/awesome-harness-engineering` before treating their recurrence as
independent.

### Awesome catalog inventory

At the pinned `ai-boost/awesome-harness-engineering` commit:

- declare a versioned catalog-rule manifest and extractor identity before
  classification; the manifest defines recognized Markdown link constructs,
  relative-target resolution, URL normalization, family-deduplication rules,
  exclusion classes, and fail-closed handling of an unrecognized construct;
- mechanically extract every Markdown link occurrence;
- classify and record non-resource exclusions such as badges, navigation,
  translations, assets, anchors, licenses, and community links;
- retain every substantive outbound resource occurrence with its exact label,
  URL, nearest category path, curator annotation, and source line;
- canonicalize URLs and deduplicate them into source families while preserving
  every occurrence and cross-category placement;
- identify obvious repository, paper, documentation, standard, article,
  benchmark, talk, course, collection, and tool forms without inferring quality;
  and
- merge known Wave 1 dispositions into the inventory without granting them
  priority over the rest of the catalog.

The deterministic catalog audit must prove that every extracted occurrence is
exactly one of qualifying or mechanically excluded, and that every qualifying
occurrence maps to exactly one canonical family or one unresolved identity.
Neither URL normalization nor family grouping may perform a network request or
silently resolve an uncertain alias.

Inventorying a URL is not opening or evaluating its source. Titles, categories,
and annotations supplied by the aggregator remain curator-reported metadata.
They may support catalog triage but cannot establish relevance, reliability,
independence, implementation behavior, effectiveness, or an outline choice.

### Catalog triage and source-opening boundary

Every unique catalog family receives a `catalog_triage_status` based only on the
pinned catalog context: `candidate_for_direct_screening`, `defer`,
`out_of_current_scope`, `unresolved_identity`, or `already_screened`. Each
triage record states its reason, source-native category contexts, apparent
evidence form, domain, likely outline-decision relevance, and known lineage or
anchoring risk. These values are lead-management metadata, not provenance
dispositions. Unopened leads emit no `disposition` event; `excluded` remains
reserved for a source that was actually opened and inspected.

Accessibility for a previously unopened destination is `not_assessed` at this
gate. Only an authorized prior open or access attempt may establish an
accessible or inaccessible state; catalog wording alone may not.

The completed Wave 1 remains six `read_only` structural screens. The unopened
Wave 2 is withdrawn and confers no priority. No previously unopened outbound
catalog resource may be queried or opened before the catalog gate. At that
gate, present:

1. extraction completeness and exclusion classes;
2. the deduplicated catalog and occurrence counts;
3. Walking Labs curriculum analysis and Awesome-repository lineage;
4. triage rules, statuses, uncertainty, accessibility state, and concentration
   risks; and
5. an exact proposed direct-screening or deep-reading set, divided into
   reviewable batches when necessary.

After approval, each direct-screening batch requires an exact register of source
families, intended inspection depth, unresolved outline decision, expected
structural effect, and any identity-resolution query. No global catalog-count
ceiling applies, but the maintainer approves every source-opening batch.
Anything discovered inside an opened catalog source is second hop and remains
prohibited unless separately proposed and approved.

V2-D012's still-controlling screening cadence permits a future authorization to
name a tranche of at most five already frozen batches, but neither V2-D012 nor
V2-D013 authorizes one. Every batch in a tranche retains its own exact
membership, provenance boundary, validation, and closeout. The conventional
structure updates only at the ensuing maintainer checkpoint or an earlier
mandatory stop; its structural ledger may receive per-family entries after
each completed batch.

No topical or ecosystem search, implementation deep dive, evidence promotion,
legacy access, or detailed-outline drafting beyond the V2-D013 conventional
skeleton is authorized. Exact-title or identifier resolution may be proposed
only for an already cataloged family whose identity cannot be determined from
its URL; every query must be approved and logged before use.

## Provenance and evidence treatment

Use task ID `v2-outline-seed-map` and declare the coverage plan before the
first external interaction.

- Use the retained `diagnostic` audit profile. This stage performs no evidence
  promotion and must not use the `provisional-promotion` profile.
- Retain the completed seed and Wave 1 boundaries, and declare a separate native
  boundary for each authorized curriculum, catalog, or later screening pass.
- Reconcile the adapter immediately after the first authorized external
  interaction. Stop before widening activity if the runtime shape does not
  reconcile.
- Declare the local PDF in an independently enumerable `manual_source_set`.
  Record its path, SHA-256, byte count, and modification time and independently
  recheck those values; the audit engine does not verify the fingerprint
  fields itself.
- Target `complete_with_declared_manual_sources` provenance.
  This diagnostic capture label does not assert durable raw-transcript
  retention. Selective design-history packets cannot satisfy a full-boundary
  archive or promotion requirement.
- Give every opened source an identity, discovery path, inspected locations,
  depth, lineage, version or freshness state, and final disposition.
- Preserve unopened direct references as leads, not evidence.
- Compare any necessary manual result events with the retained native boundary
  and record the check.
- Keep all Stage 4 external interactions in the primary-agent boundary.
  Subagents may review already captured local artifacts but may not open,
  search, or inspect external sources during this bounded task.
- Record and resolve the expected `repository_shallow` warning with the
  approved structure-only repository scope rather than inspecting prohibited
  implementation code or history.

A source becomes `referenced` only when it is mapped to a consequential
outline-choice claim in
`research/outline-development/claim-ledger.md`, with exact source location and
primary verification. Every referenced source receives a full V2 source
record. Use `read_only` for source-native extraction or useful context that is
not relied upon to justify a material choice. Use `excluded` only after
inspection and record the reason.

Referenced outline input is not a promoted finding. Create claim IDs only for
consequential factual or inferential statements that materially justify an
inclusion, exclusion, ordering, skeleton, or other outline choice. Source-native
labels, inventories, topic extraction, and structural proposals that do not
justify such a choice need no artificial claims and remain `read_only`.

### Selective design-history retention

Outline development follows `docs/design-history.md`.
`research/DECISIONS.md` remains the canonical, concise record of consequential
decisions and maintainer rationale; it must not become a transcript.

A minimal owner-only raw packet may be proposed for an architecture or scope
pivot, major methodology or governance debate, essential maintainer rationale,
or consequential reviewer disagreement and reconciliation. Routine edits,
formatting, wording, typos, status exchanges, repeated agreement, routine
review fixes, and ordinary iteration are excluded.

Before any packet is exported, present its packet ID, source task, smallest
coherent message set or ranges, inclusion reason, content mode, declared
omissions or redactions, and external destination. Export requires explicit
maintainer approval of that exact manifest. Brief approval grants no blanket
export permission.

Stage 4 requests no full-prefix archive. The retained `archive-boundary`
command cannot produce a selective packet because it always stores the entire
prefix from line 1. A reviewed selective extractor and verifier are required
before the first packet export, but their implementation is not a prerequisite
for seed inspection.

Selective design-history packets are governance context, not research-source
provenance, subject evidence, or proof of a complete native boundary. Their
existence cannot support breadth, balance, absence, saturation, or evidence
promotion.

## Outputs and checkpoints

### Stage 4 outputs

- `research/outline-development/seed-map.md`
- `research/outline-development/first-hop-register.md` as the historical Wave 1
  and withdrawn-Wave-2 record
- `research/outline-development/awesome-catalog-rules.json`
- `research/outline-development/awesome-link-occurrences.jsonl`
- `research/outline-development/awesome-source-families.json`
- `research/outline-development/awesome-catalog-summary.md`
- `research/outline-development/awesome-catalog-triage.md`
- `research/outline-development/awesome-screening-plan.json`
- `research/outline-development/awesome-screening-batches.md`
- `research/outline-development/catalog-gate.md`
- `research/outline-development/walkinglabs-curriculum.md`
- `research/outline-development/claim-ledger.md` when the first material claim
  is declared
- V2 source records for referenced material under `research/sources/`
- `research/provenance/v2-outline-seed-map-auto.jsonl`
- `research/provenance/v2-outline-seed-map-seed-annotations.json`
- `research/provenance/v2-outline-seed-map-wave-1-annotations.json`
- `research/provenance/v2-outline-seed-map-catalog-annotations.json`
- separately named screening-batch annotations only after the catalog gate
- `research/provenance/v2-outline-seed-map-seed-events.jsonl`
- `research/provenance/v2-outline-seed-map-wave-1-events.jsonl`
- `research/provenance/v2-outline-seed-map-catalog-events.jsonl`
- separately named screening-batch event packages only after the catalog gate
- `research/provenance/v2-outline-seed-map-events.jsonl`
- `research/provenance/v2-outline-seed-map-resolutions.json` and
  `research/provenance/v2-outline-seed-map-resolved.jsonl` only if resolution
  is needed
- `research/provenance/v2-outline-seed-map-audit.json`
- `research/provenance/v2-outline-seed-map-audit.md`

The historical checkpoint-00 baseline wrote
`research/outline-development/skeletons.md`,
`research/outline-development/skeleton-pressure-ledger.md`, and
`research/outline-development/skeleton-review.md`. Checkpoint 01 writes
`research/outline-development/conventional-skeleton.md`,
`research/outline-development/conventional-vocabulary-map.md`, and
`research/outline-development/conventional-skeleton-review.md`. Later approved
checkpoints preserve earlier versions rather than overwriting history. Stage 6 iterates and
ultimately approves `research/outline-development/outline.md`; approval changes
that artifact's authority, not its path.

The seed map must separate per-source extraction from cross-source structural
judgment. It will not claim field coverage or saturation.

`awesome-catalog-summary.md` is a separate deterministic catalog audit derived
from the rule manifest, occurrence stream, and family artifact. The retained
provenance audit continues to validate runtime interactions, source lifecycle,
claims, and completeness; it does not ingest unopened catalog leads or generate
catalog counts.

### Maintainer checkpoints

1. **Brief gate — satisfied.** V2-D005 and V2-D006 were approved before any
   seed was opened.
2. **Seed-only and Wave 1 gates — satisfied historically.** The original three
   seeds and six approved first-hop sources were structurally screened. The
   later Wave 2 proposal was never approved or opened.
3. **Catalog-correction gate — satisfied.** The maintainer approved V2-D007,
   adding Walking Labs and comprehensive treatment of the Awesome catalog.
4. **Catalog gate — satisfied.** The maintainer approved the complete occurrence inventory,
   mechanical exclusions, deduplicated families, Walking Labs curriculum
   analysis, repository lineage, catalog-context triage, unresolved identities,
   concentration risks, and 21-batch intended program; ratified the bounded
   lineage interpretation; and authorized only `awesome-screen-core-01`.
5. **Completed source-screening gates.** The maintainer approved the
   completed `awesome-screen-core-01` calibration method and dispositions and
   authorized only exact `awesome-screen-core-02`. Core-02 is complete. The
   maintainer then approved continued use of its method and authorized only
   exact `awesome-screen-core-03`. Core-03 is complete. The maintainer approved
   core-02's outstanding results and core-03's method and results, then
   authorized only exact `awesome-screen-core-04`. Core-04 is complete and its
   opening authority is exhausted. Review its actual source identities, access
   limits, evidence postures, catalog corrections, schema friction, and any
   resulting change to later batch order. No second-hop source or additional
   batch is opened implicitly.
6. **Abstract skeleton gate — completed and rejected.** V2-D012 produced three
   reviewed abstraction-first candidates. The maintainer rejected all three
   and the two-level depth limit through V2-D013.
7. **Conventional-topic skeleton gate — current.** Review the deeper
   replacement candidate, its vocabulary map, overlap ownership, local
   adversarial findings, and unresolved placements. Core-04 remains unratified
   input; core-05 remains closed.
8. **Later structural checkpoints.** If exact future batches are separately
   authorized, review their effect on the conventional-topic structure after
   at most five completed batches or an earlier structural stop. The maintainer
   may revise, replace, reorder, or stop the work.
9. **Seed-map completion gate.** When the maintainer decides that further
   screening is unlikely to add a materially different organizational option,
   review the audited landscape, remaining gaps, and final provisional
   conventional structure before accepting or revising its direction.
10. **Detailed-outline iteration.** Expand only the maintainer-directed
   structure and visibly disposition requested changes.
11. **Final outline gate.** Explicitly approve objectives, scope, organization,
   and sequence.
12. **Post-outline stop.** A separate goal must define and authorize
   substantive research.

## Stop conditions

Stop immediately and ask for direction if:

- an unknown or unreconciled research-capable runtime interaction appears;
- search or result capture is truncated, unparseable, or otherwise unknown;
- the local PDF identity changes or cannot be verified;
- a mandatory source cannot be accessed or a repository cannot be pinned;
- the catalog extractor cannot account for every README link occurrence under
  the declared versioned rules, or either accounting invariant fails;
- progress would require opening an outbound resource before the catalog gate,
  topical search, second-hop traversal, credentials, paid access, or deep
  implementation inspection;
- a proposed factual claim requires evidence outside the approved boundary;
- the active skeleton must replace familiar field terminology, collapse
  materially distinct terms, or grow detail without a distinct structural
  purpose; or
- evidence suggests changing the brief's objectives, scope, or method.

Normal structural-landscape completion occurs when the original seeds and Wave
1 retain final dispositions; Walking Labs is structurally inspected; every
qualifying Awesome occurrence is accounted for; canonical families,
duplicates, exclusions, unresolved identities, and lineage are explicit; the
then-current maintainer-approved direct-screening set is complete or explicitly
closed at a structural checkpoint; the
diagnostic audit gate passes with zero errors and zero unresolved warnings; and
further authorized screening is unlikely to add a materially different
organizational option. This is completion against the pinned catalog and
approved structural inputs, not field coverage or saturation.

For the evolving structure, a full authorized tranche with no new conventional
topic, boundary, section owner, dependency, sequence, or cross-cutting
treatment is evidence of catalog-bounded diminishing return. It is not an
automatic stopping formula and never establishes field saturation; the
maintainer decides whether remaining batches answer a named structural gap.

## Non-goals

This program stage will not:

- establish findings, patterns, best practices, or field completeness;
- adopt one seed or catalog's terminology wholesale, or replace recognizable
  field terms with bespoke analyst vocabulary;
- select implementation cases or a representative cohort;
- conduct implementation deep dives or effectiveness evaluation;
- consult or re-admit legacy evidence;
- finalize the post-outline research method;
- produce or adopt curriculum, a site, or presentation tooling;
- promote source or claim maturity; or
- authorize substantive research after outline approval.

## Detailed-outline approval test

The detailed outline is not approved until the maintainer explicitly accepts:

1. its primary audience and intended outcomes;
2. its technical boundary, inclusions, exclusions, and material edge cases;
3. its organizing principle and top-level coverage;
4. its granularity and treatment of cross-cutting material;
5. its sequence and dependency logic;
6. the decision or understanding owned by every major section;
7. its research questions and required evidence types;
8. its deliberate omissions, uncertainty, and unresolved choices; and
9. the complete disposition of maintainer-requested revisions.

Every top-level section must state its objective, boundary, research questions,
decision target, prerequisites, downstream dependencies, evidence needs,
ordering rationale, cross-cutting relationships, uncertainty, and deliberate
omissions.

Outline approval does not admit seed claims or authorize substantive research.

## Approved brief checklist

The maintainer approved each of these decisions with V2-D005 on 2026-07-20;
V2-D007 later superseded items 7, 8, 9, and the Stage 4 portion of item 11 as
described below:

1. builder-first primary audience and assumed baseline knowledge;
2. design judgment and evidence-based evaluation as the leading outcomes;
3. fixed-model, surrounding-system technical boundary and adjacent-field rule;
4. later research decision targets;
5. originally, three competing skeletons and shallow final detail — superseded
   by V2-D013's conventional-topic skeleton and functional-depth rule;
6. original deferral of the reading mode and sequence — superseded by
   V2-D013's conventional-topic first reading and cross-cutting traversal rule;
7. original three-seed boundary and complete outline-bearing inspection
   surface — superseded for Stage 4 inputs by V2-D007;
8. first-hop eligibility, two waves of six, and one optional four-source
   extension — superseded by V2-D007;
9. diagnostic, primary-only provenance; disposition, claim, output, and
   stop-condition rules — retained, with catalog-specific outputs and stops
   amended by V2-D007;
10. original deferral of whether implementations, products, domains, cases, or
    sources organize the outline — superseded by V2-D013's public-topic spine
    and supporting evidence, example, traversal, and comparative-case roles;
11. the original nine-step maintainer-control sequence — its Stage 4 wave and
    extension gates are superseded by the V2-D007 catalog and screening gates;
12. non-goals and post-outline stop; and
13. the nine-part detailed-outline approval test; and
14. selective design-history retention: concise canonical decision records,
    consequential-only owner packets, explicit per-packet approval, and no
    Stage 4 full-prefix archive.

This approval adopts the selective design-history policy but authorizes no raw
packet export. Each proposed packet requires explicit approval of its exact
selection manifest.

### Approved V2-D007 amendment checklist

The maintainer approved these corrections on 2026-07-20:

1. Walking Labs as a pinned curriculum candidate, not outline authority;
2. complete, auditable extraction of qualifying outbound occurrences from the
   pinned Awesome README;
3. canonical-family deduplication that preserves every category occurrence;
4. explicit mechanical exclusion classes and unresolved identities;
5. curator-context triage separated from direct source evaluation;
6. repository-lineage verification before treating similarly named Awesome
   repositories as independent;
7. withdrawal of the unopened Wave 2 and removal of its caps and query
   intentions from active authority;
8. a blocking catalog gate before any new outbound source open; and
9. continued prohibition of topical search, second-hop traversal,
   implementation deep dives, evidence promotion, outline drafting, curriculum
   adoption, and legacy readmission.

### Approved V2-D012 amendment checklist

The maintainer approved these early-alignment corrections on 2026-07-21:

1. three active provisional skeletons using only already captured artifacts;
2. high-level conceptual-tree presentation with one or two levels beneath the
   root;
3. at most one temporary challenger and stable, preserved version lineage;
4. maintainer-only admission, merger, replacement, retirement, and selection;
5. a structural-pressure ledger that updates per authorized batch while
   skeleton versions change only at checkpoints;
6. bounded adversarial read-only review followed by an immediate maintainer
   checkpoint before core-05;
7. future checkpoints after at most five separately authorized batches or an
   earlier structural stop;
8. the 21-batch plan as a candidate upper bound rather than an automatic
   completion mandate; and
9. continued prohibition of new source opens, detailed-outline expansion,
   substantive research, evidence promotion, and legacy readmission without a
   later explicit decision.

### Approved V2-D013 amendment checklist

The maintainer approved these structural corrections on 2026-07-21:

1. rejection of A, B, and C as active outline candidates while preserving the
   checkpoint as design history;
2. conventional harness-engineering terminology as the public outline spine;
3. context engineering, memory/state, tools, skills, orchestration, evaluation,
   observability, permissions, human control, and production operations shown
   by their recognizable names;
4. explicit relationships among overlapping common terms instead of invented
   replacements;
5. functional hierarchy beyond two levels when it exposes real distinctions;
6. decision, causal, and responsibility analysis retained only as
   cross-cutting questions;
7. one active replacement candidate rather than artificial portfolio variance;
8. catalog and curriculum language used as vocabulary input, never importance,
   effectiveness, completeness, or sequence authority; and
9. no new source opening, core-05, detailed outline, evidence promotion, or
   legacy access before the next maintainer decision.
