# Harness Engineering V2 — F Synthesis Adversarial Review

**Checkpoint:** `V2-SK-CP02`
**Status:** Complete; awaiting maintainer review
**Authority:** V2-D014
**Reviewed skeleton:**
[`conventional-buildup-skeleton.md`](conventional-buildup-skeleton.md)
**Reviewed inputs:** [`conventional-skeleton.md`](conventional-skeleton.md) and
[`buildup-skeleton.md`](buildup-skeleton.md)
**Review type:** Bounded local read-only adversarial review; not externally
independent and not maintainer approval

## Scope and limits

Two local adversaries separately tested F against the active brief, V2-D014,
the checkpoint-02 acceptance criteria, D's reviewed vocabulary and ownership
basis, and the current authority boundary. One focused on architecture,
hierarchy, sequence, and dependency honesty. The other focused on vocabulary
ownership, D/E lineage, traceability, and governance consistency. Their work is
not independent corroboration.

Neither reviewer opened an external source, inspected legacy material, changed
a source disposition, admitted evidence, or exercised decision authority. The
configured external Claude reviewer remains unavailable under the recorded
hard tenant-transfer prohibition; it was not retried or circumvented. Local
review therefore supplies adversarial pressure but not independent external
corroboration.

Both initial reviews found F's synthesis direction sound but failed checkpoint
readiness pending correction. The primary accepted every reported defect.
There was no consequential disagreement and no reconciliation request.

## D/E adjudication tested

The review treated D and E as inputs with different authority:

- D is the completed, reviewed checkpoint-01 baseline and supplies the full
  canonical content tree, vocabulary ownership, inclusion boundary, and source
  roles.
- E is a post-checkpoint-01 advisory input. It contributes build-up motivation,
  stop points, point-of-risk reminders, and explicit decisions, but has no
  retroactive V2-D013 authority and supplies no subject evidence.
- F is the sole active checkpoint-02 candidate. It preserves D's canonical tree
  and adds one branching, nonduplicated traversal plus security, assurance, and
  production rails.

## Architecture findings and primary dispositions

| ID | Severity | Finding | Disposition and correction |
| --- | --- | --- | --- |
| A-01 | High | The traversal visually made `F7` a prerequisite for persistent memory and continuity despite classifying them as optional. | **Accept.** Moved `F3c` and `F3d` to independent sibling branches. Persistent memory may feed one context-shaped call, a workflow, or orchestration; only `F3a/F3b` and F7 remain a co-design cycle. |
| A-02 | High | F did not state how it served the approved primary audience and seven intended outcomes. | **Accept.** Added the assumed audience and an explicit seven-row outcome-to-structure map without claiming that the skeleton already satisfies those outcomes with evidence. |
| A-03 | High | F lacked an affirmative inclusion rule. | **Accept.** Restored the approved surrounding-system mechanism or decision test, evidence-to-judge rule, adjacent-field constraint, and fixed-model exclusions. |
| A-04 | Medium | The traversal visually subordinated Protocols and Integration to Tool Engineering even though protocols can support retrieval, tool exposure, or orchestration independently. | **Accept.** Made F6 an independent optional sibling with cross-edges to F2, F4, and F8. |
| A-05 | Medium | Several drawn edges lacked one of the brief's four controlling dependency classifications. | **Accept.** Classified the full optional-branch junction and every material relationship as hard prerequisite, common construction order, optional capability edge, or cross-cutting/back-edge; descriptive cycle and synthesis labels are now subtypes. |
| A-06 | Medium | F7's child label duplicated stopping, retry, and recovery ownership already divided among loops, orchestration, and production. | **Accept.** Restored D's `Autonomy and Control`; semantic retry/replanning and stopping remain in F7, task recovery in F8, and infrastructure retry and resilience in F12. |
| A-07 | Medium | The production rail said operating evidence could reopen every topic but its diagram reopened only F2–F9 and F13. | **Accept.** The rail now reopens F1–F13 as relevant, including goals, assurance design, instrumentation, and operations themselves. |
| A-08 | Medium | E's lineage could be read as checkpoint-01 or V2-D013 candidate authority. | **Accept.** E's header now identifies a post-CP01 advisory origin, says it was never active or approved, marks the original V2-D013 authority claim incorrect, and records only D014 retention for CP02 input. |

## Vocabulary, traceability, and authority findings

| ID | Severity | Finding | Disposition and correction |
| --- | --- | --- | --- |
| T-01 | High | F claimed to retain all D structural children while repartitioning D's state nodes and renaming other children without an explicit disposition. | **Accept.** Restored D's canonical tree exactly apart from F's stable IDs, including `Design Goals and Success Criteria`, `Working and Session State`, `Task and Workflow State`, tool and skill labels, `Autonomy and Control`, and `Developer Experience`. F's new contribution now resides in the traversal and rails rather than a silent rewrite of D. |
| T-02 | Medium | F7's accountability row assigned it unqualified recovery, reopening the reviewed three-way ownership split. | **Accept.** Limited the F7 decision to planning, semantic retry or replanning, and stopping. |
| T-03 | Medium | E's `V2-SK-CP01` checkpoint tag rewrote its actual post-CP01 advisory origin. | **Accept.** Replaced the checkpoint tag with explicit post-CP01 advisory-origin metadata retained for CP02. |
| T-04 | Medium | The reviewer contract still described V2-D013 conventional-skeleton work as the only local authority after core-04. | **Accept.** Updated it to V2-D014's bounded local F synthesis and review while retaining the complete later-source-batch block. |

## Explicit passes from the initial reviews

The initial reviews also agreed that F:

- has one canonical content tree and one ID-based traversal without duplicate
  topic subtrees;
- preserves the recognizable conventional vocabulary and D's structural
  coverage;
- separates working, session, task, and workflow state from optional
  persistent memory;
- treats orchestration as coordination across tasks, time, resources, humans,
  or agents rather than as a multi-agent escalation stage;
- exposes Context/Tools, State/Loops, Evaluation/Observability,
  Security/authority, and Production/earlier-design cycles or back-edges;
- treats a direct model call as a boundary edge case rather than the settled
  smallest harness;
- uses per-section questions, analytical capabilities, and decisions without
  implementation-outcome guarantees;
- remains a research and knowledge architecture rather than a curriculum or
  universal maturity ladder; and
- leaves core-04 unratified, core-05 closed, and all source, evidence,
  provenance, legacy, case, and detailed-outline boundaries unchanged.

## Focused verification

The architecture verifier passed A-01 through A-08 with no residual
consequential defect. It confirmed that persistent memory, continuity, and
protocols are independent optional branches; every drawn branch has a
controlling classification; the audience, outcome, and inclusion contracts are
present; F7 ownership is no longer duplicated; production can reopen F1–F13;
and E's advisory lineage is explicit.

The vocabulary/authority verifier passed T-01 through T-04 with no residual
consequential defect. A normalized comparison found D's and F's canonical
trees identical apart from stable D/F IDs. It also confirmed the corrected
retry/recovery split, E's post-CP01 origin, V2-D014 reviewer-control wording,
sole-active F / D-baseline / E-advisory lineage, and the unchanged core-04 and
core-05 boundary.

## Deterministic validation

After all accepted corrections:

- `node tools/provenance/test.mjs` — pass;
- `node tools/catalog/test.mjs` — pass;
- `node tools/provenance/check-local-links.mjs` — pass; and
- `git diff --check` — pass.

## Maintainer choices left open

The review does not exercise the choices reserved to the maintainer:

1. whether F should become the governing skeleton while D remains its reviewed
   baseline;
2. whether one canonical tree plus the partial-order build-up traversal solves
   the reference-versus-construction problem;
3. whether the optional branches and stop points reflect the intended mental
   model;
4. whether the security, assurance, and production rails are visible enough
   without duplicating their explanatory homes;
5. whether the analytical-capability and decision fields add useful
   accountability;
6. whether Evaluation and Observability should keep their current canonical
   IDs while the assurance cycle carries the dependency; and
7. whether the thirteen conventional subjects remain at the right level.

No source batch, topic placement, detailed-outline expansion, evidence work,
case selection, curriculum, or learning derivative follows from this review
without an explicit maintainer decision.
