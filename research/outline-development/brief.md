# Harness Engineering V2 — Outline-Development Brief

- **Status:** Approved by the maintainer on 2026-07-20
- **Stage:** 3 — outline-development brief
- **Decision authority:** Maintainer
- **Subject evidence admitted:** None

**Approval effect:** V2-D005 and the linked review-limit decision V2-D006 are
approved. This contract authorizes only bounded seed mapping. Each later
checkpoint separately unlocks the next stage; brief approval does not approve
an outline, authorize substantive research, or grant blanket
conversation-export permission.

## Approval record

The maintainer explicitly approved V2-D005 and V2-D006 on 2026-07-20, adopting
the audience, outcomes, scope, decision targets, organizational criteria,
sequence criteria, seed boundary, provenance treatment, checkpoints, non-goals,
outline approval test, and selective design-history policy below.

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

Produce three materially different skeletons by default. They must differ in
organizing principle, not merely in headings, labels, or order.

Each skeleton must state:

- its organizing principle and intended reading mode;
- how it serves the approved audience, outcomes, and decision targets;
- what question or decision each top-level section owns;
- its inclusion and exclusion logic;
- how it handles source-native vocabulary and aliases;
- how it treats mechanisms that cross section boundaries without duplicating
  claims;
- its dependency and sequence rationale;
- its benefits, risks, blind spots, and anchoring hazards; and
- what it makes easy to see and what it tends to hide.

No role for implementations, papers, products, domains, or sources is preferred
before the seed map. Each skeleton must state whether those materials form its
organizing spine, supporting evidence, a traversal path, a cross-cutting layer,
or some combination, and must expose the consequences of that choice.

### Granularity rules

- Skeletons use one or two levels, sufficient to expose the structural choice.
- The detailed outline normally uses two or three levels.
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

No reading mode or sequence is preferred before the seed map. The skeleton
comparison must evaluate linear, non-linear, hybrid, or other plausible modes
against the approved audience and outcomes, and explain any option it omits.

## Bounded seed investigation

Brief approval authorizes only the following seed-mapping task. It is not a
general literature review.

### Mandatory seed set

1. `https://asixiv.org/pdf/curated/2606.00001`
2. `https://github.com/ai-boost/awesome-harness-engineering`
3. `/Users/jernotte/Downloads/2606.24937v1_copy.pdf`

The repository seed will be pinned to the commit observed when inspection
begins. The local PDF will be identified by path, SHA-256, byte count, and
modification time before content is used.

For each PDF, inspect the complete outline-bearing surface: metadata, abstract,
introduction, headings, section summaries or prose needed to understand the
structure, conclusion or limitations, and references. For the repository,
inspect its complete category/list organization and relevant repository-local
framing or contribution documentation. Do not inspect implementation code or
history beyond pinning identity.

Extract, without adopting:

- source-native definitions and vocabulary;
- candidate topics and stated audience or outcomes;
- organizational structure and implied prerequisites;
- assumptions and reference shape;
- tensions, omissions, and counterframes;
- anchoring hazards; and
- materially different organizational possibilities.

### First-hop eligibility

A first-hop candidate must be directly cited, named, or linked by one of the
three seeds. A curated repository entry counts as one hop. Anything discovered
inside a first-hop source is second hop and prohibited.

Before opening a first-hop source, record the unresolved outline decision it
may affect:

- definition or technical boundary;
- audience or intended outcome;
- organizing principle;
- section granularity;
- prerequisite or sequence;
- treatment of a cross-cutting concern; or
- material omission, tension, or counterframe.

Selection precedence is:

1. expected material effect on one of those outline decisions;
2. a framing distinct from or adverse to the dominant seed framing;
3. an original or primary source over a summary when practical;
4. distinct evidence lineage; and
5. low inspection cost for the expected structural information.

Repetition, popularity, list prominence, and citation count are not selection
reasons.

### Caps and search boundary

- The three seeds are mandatory and do not count against the first-hop cap.
- Open at most 12 unique first-hop source families, in two waves of at most six.
- Overlapping references count once.
- No more than six total first-hop sources may be attributable solely to one
  seed without a documented reason accepted at a checkpoint.
- Across the entire Stage 4 task, at most three exact-title or
  identifier-resolution queries may locate already named direct citations. Run
  one resolution query per tool call and count it in the first-hop register.
- During the seed-only pass, such a query is permitted only when a seed's own
  metadata is insufficient to identify an unopened Wave 1 candidate. Record
  the resolution intent before the query; do not open the result before Wave 1
  approval.
- No topical search, ecosystem search, second-hop traversal, implementation
  deep dive, or bibliography harvesting is authorized.
- Stop below the cap when additional candidates are unlikely to change the
  outline space.

Exceeding 12 requires a maintainer-approved request naming the unresolved
outline decision, why current material is insufficient, the exact direct
first-hop candidates, and their expected decision impact. One extension of at
most four sources is permitted. Otherwise preserve the uncertainty as an open
question.

The first-hop register is the controlling cap record because the retained audit
engine does not mechanically enforce hop eligibility or wave size. Each row
must record source-family ID, direct seed attribution, exact direct-hop
evidence, proposed wave, approving checkpoint, unresolved decision, selection
reason, query use, and whether the source was opened.

## Provenance and evidence treatment

Use task ID `v2-outline-seed-map` and declare the coverage plan before the
first external interaction.

- Use the retained `diagnostic` audit profile. This stage performs no evidence
  promotion and must not use the `provisional-promotion` profile.
- Capture the native interaction boundary from the first seed open through the
  last authorized first-hop interaction.
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
- `research/outline-development/first-hop-register.md`
- `research/outline-development/claim-ledger.md` when the first material claim
  is declared
- V2 source records for referenced material under `research/sources/`
- `research/provenance/v2-outline-seed-map-auto.jsonl`
- `research/provenance/v2-outline-seed-map-seed-annotations.json`
- `research/provenance/v2-outline-seed-map-wave-1-annotations.json`
- `research/provenance/v2-outline-seed-map-wave-2-annotations.json` when wave
  two is approved
- `research/provenance/v2-outline-seed-map-extension-annotations.json` when the
  extension is approved
- `research/provenance/v2-outline-seed-map-seed-events.jsonl`
- `research/provenance/v2-outline-seed-map-wave-1-events.jsonl`
- `research/provenance/v2-outline-seed-map-wave-2-events.jsonl` when wave two
  is approved
- `research/provenance/v2-outline-seed-map-extension-events.jsonl` when the
  extension is approved
- `research/provenance/v2-outline-seed-map-events.jsonl`
- `research/provenance/v2-outline-seed-map-resolutions.json` and
  `research/provenance/v2-outline-seed-map-resolved.jsonl` only if resolution
  is needed
- `research/provenance/v2-outline-seed-map-audit.json`
- `research/provenance/v2-outline-seed-map-audit.md`

Stage 5 writes `research/outline-development/skeletons.md`. Stage 6 iterates and
ultimately approves `research/outline-development/outline.md`; approval changes
that artifact's authority, not its path.

The seed map must separate per-source extraction from cross-source structural
judgment. It will not claim field coverage or saturation.

### Maintainer checkpoints

1. **Brief gate — satisfied.** V2-D005 and V2-D006 were approved before any
   seed was opened.
2. **Seed-only gate — current.** After the three seeds are inspected, review
   their source-native map, candidate register, provenance state, and the
   proposed first wave of at most six first-hop sources. No first-hop source is
   opened before approval.
3. **First-hop wave gate.** After wave one, review what changed and approve,
   revise, or reject the exact second wave of at most six sources.
4. **Extension gate — conditional.** After wave two, if the 12-source cap is
   exhausted while a material outline decision remains unresolved, review the
   exact extension request and approve, revise, or reject at most four direct
   first-hop sources. Register extension rows under this checkpoint. Skip this
   gate when no extension is requested.
5. **Seed-map gate.** Review the completed audited seed map and remaining gaps
   before skeleton drafting.
6. **Skeleton gate.** Review three materially different skeletons and select,
   combine, reorder, or reject them.
7. **Detailed-outline iteration.** Expand only the maintainer-directed
   structure and visibly disposition requested changes.
8. **Final outline gate.** Explicitly approve objectives, scope, organization,
   and sequence.
9. **Post-outline stop.** A separate goal must define and authorize
   substantive research.

## Stop conditions

Stop immediately and ask for direction if:

- an unknown or unreconciled research-capable runtime interaction appears;
- search or result capture is truncated, unparseable, or otherwise unknown;
- the local PDF identity changes or cannot be verified;
- a seed cannot be accessed or the repository cannot be pinned;
- progress would require topical search, second-hop traversal, credentials,
  paid access, or deep implementation inspection;
- a cap is exhausted while a material structural question remains;
- a proposed factual claim requires evidence outside the approved boundary;
  or
- evidence suggests changing the brief's objectives, scope, or method.

Normal seed-map completion occurs when all three seeds and selected first-hop
sources have final dispositions, the extraction matrix is complete, the
diagnostic audit gate passes with zero errors and zero unresolved warnings, and
further authorized first-hop inspection is unlikely to add a materially
different organizational option. This is bounded seed-map completion, not
field coverage or saturation.

## Non-goals

This program stage will not:

- establish findings, patterns, best practices, or field completeness;
- adopt seed terminology or headings as the V2 taxonomy;
- select implementation cases or a representative cohort;
- conduct implementation deep dives or effectiveness evaluation;
- consult or re-admit legacy evidence;
- finalize the post-outline research method;
- produce curriculum, a site, or presentation tooling;
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

The maintainer approved each of these decisions on 2026-07-20:

1. builder-first primary audience and assumed baseline knowledge;
2. design judgment and evidence-based evaluation as the leading outcomes;
3. fixed-model, surrounding-system technical boundary and adjacent-field rule;
4. later research decision targets;
5. three competing skeletons, two-to-three-level final detail, and no fixed
   section count;
6. deferral of the reading mode and sequence until competing skeletons can be
   compared with explicit dependency tests;
7. exact three-seed boundary and complete outline-bearing inspection surface;
8. first-hop eligibility, two waves of six, and one optional four-source
   extension;
9. diagnostic, primary-only provenance; disposition, claim, output, and
   stop-condition rules;
10. deliberate deferral of whether implementations, products, domains, cases,
   or sources organize the outline or play a supporting role;
11. the nine-step maintainer-control sequence, including its conditional
    extension gate;
12. non-goals and post-outline stop; and
13. the nine-part detailed-outline approval test; and
14. selective design-history retention: concise canonical decision records,
    consequential-only owner packets, explicit per-packet approval, and no
    Stage 4 full-prefix archive.

This approval adopts the selective design-history policy but authorizes no raw
packet export. Each proposed packet requires explicit approval of its exact
selection manifest.
