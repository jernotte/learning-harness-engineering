# Harness Engineering V2 — Baseline Skeleton Adversarial Review

**Checkpoint:** `V2-SK-CP00`
**Status:** Complete; awaiting maintainer review
**Authority:** V2-D012
**Reviewed portfolio:** [`skeletons.md`](skeletons.md)
**Pressure record:** [`skeleton-pressure-ledger.md`](skeleton-pressure-ledger.md)

## Scope and independence limit

Two bounded local reviewers separately tested the baseline: one architecture
adversary and one traceability/authority adversary. They were read-only and
advisory. The configured external Claude reviewer was not invoked because
V2-D012 records a hard tenant-transfer prohibition and forbids retry or
circumvention. This pass therefore supplies adversarial separation of roles,
not external independence.

The review used only already captured repository artifacts through core-04.
It opened no external source, core-05 family, legacy artifact, repository
implementation, second hop, or new evidence boundary.

## Acceptance tests

The reviewers tested:

- genuine organizing variance rather than renamed headings;
- alignment with the approved audience, outcomes, and interim boundary;
- deterministic section ownership and treatment of cross-cutting material;
- dependency order, back-edges, alternate reading modes, and hidden catch-alls;
- catalog, curriculum, seed, vendor, and source-type anchoring;
- separation of captured framing, primary inference, and proposal;
- unsupported factual premises or evidence promotion;
- premature convergence; and
- whether failure and uncertainty response warrants an active fourth option.

## Architecture-adversary findings and primary dispositions

| ID | Severity | Finding | Primary disposition | Resolution |
| --- | --- | --- | --- | --- |
| `A-01` | High | B declared transitions as its organizing unit but used broad chronological phases. | `accept` | Recast B1–B8 as transition classes and added one common inspection tuple. |
| `A-02` | High | The material-distinctness examples assigned several primary homes despite the one-owner rule. | `accept` | Assigned one exact branch ID per skeleton, listed only secondary links, and stated A/B/C ownership tie-breaks. |
| `A-03` | Medium | Shared rails could duplicate branch content and silently elevated representation/ownership to approved status. | `accept` | Separated four approved comparison obligations from the provisional representation/ownership hypothesis; assigned an explanatory owner and traversal rule in each skeleton. |
| `A-04` | Medium | B did not explicitly test the system boundary or no-harness/single-call cases. | `accept` | Made boundary membership and those edge cases explicit in B1. |
| `A-05` | Medium | The sequence rationales hid iterative back-edges. | `accept` | Distinguished first-reading order from the A, B, and C technical feedback paths. |
| `A-06` | Medium | A7, B8, and C8 converged into nearly identical operational catch-alls. | `accept` | Re-expressed them as a decision, a lifecycle transition, and an accountability assignment, with explicit exclusions. |
| `A-07` | Medium | C allocated responsibility but did not say how to judge whether an allocation is good. | `accept` | Required alternatives, conditions, causal consequences, evidence, and revocation/reassignment criteria in every allocation branch; C6 judges evidence sufficiency. |
| `A-08` | Medium | A's recommendation was not auditable against all seven outcomes and could reflect Wave 1 frequency. | `accept` | Added an outcome-by-outcome qualitative comparison, applied the approved priority order, named B/C strengths, and stated conditions that disqualify A. |

No architecture finding was rejected or required reconciliation.

## Traceability-adversary findings and primary dispositions

| ID | Severity | Finding | Primary disposition | Resolution |
| --- | --- | --- | --- | --- |
| `T-01` | High | The baseline ledger mixed source framing, prior synthesis, checkpoint inference, and proposal and cited aggregate core files too broadly. | `accept` | Declared the four epistemic layers, added a `Basis/status` field, linked named headings, and supplied representative family IDs for aggregate screen pressures. |
| `T-02` | Medium | The ledger still called representation/ownership a mandatory rail after the portfolio marked it provisional. | `accept` | Changed it to a proposed checkpoint-00 cross-cutting hypothesis subject to maintainer review. |
| `T-03` | Medium | The charter retained pre-approval language after the brief was approved. | `accept` | Distinguished approved interim audience/outcomes/boundary controls from still-open final definition and organization choices. |
| `T-04` | Medium | Source-role prose implied that source types inherently supply particular evidence. | `accept` | Changed the statements to conditional future roles and limited documentation to declared behavior or interfaces. |
| `T-05` | Medium | Challenger activation wording could be read as granting a reviewer portfolio authority. | `accept` | Reviewers may only recommend activation; the maintainer retains the decision. |
| `T-06` | Medium | “While direct screens continue” implied that the remaining catalog program must execute. | `accept` | Made all future direct screening conditional on later maintainer authorization. |

A transient suspected duplicate in A7 was retracted by the reviewer after
checking the live file and is not retained as a finding. No traceability
finding was rejected or required reconciliation.

## Reviewer conclusions after correction

- The three active options are materially different: A organizes builder
  decisions, B observable control transitions, and C responsibility and
  authority allocation.
- All three trees satisfy the requested high-level presentation: one root and
  no more than two conceptual levels beneath it.
- No catalog category, curriculum subsystem, product family, implementation
  family, or source type became an outline spine.
- A and C expose the interim boundary directly; corrected B now tests it before
  assuming a lifecycle.
- The failure/uncertainty route should remain the one temporary challenger. It
  currently overlaps A's correction journey and B's response transitions and
  is more vulnerable to problem-first curriculum anchoring than either.
- A may remain the provisional recommendation because the approved priority
  order favors design judgment and evidence evaluation. It is neither selected
  nor protected from replacement; its disqualifying conditions are explicit.

## Deterministic validation

The pre-review and post-correction repository checks passed:

```text
node tools/provenance/test.mjs                 PASS
node tools/catalog/test.mjs                    PASS
node tools/provenance/check-local-links.mjs    PASS
git diff --check                               PASS
```

Structural closeout also verified exactly three active skeletons, all seven
required option fields, and no tree deeper than two levels beneath its root.
The frozen screening plan, catalog gate, core-01 through core-04 registers, and
provenance artifacts are unchanged; no core-05 artifact exists.

One focused architecture verification found no residual A-01–A-08 defect and
confirmed material variance and tree depth. One focused traceability
verification found no residual T-01/T-02 or earlier live correction defect,
reproduced the pressure anchors and representative family IDs, and confirmed
the core-04/core-05 and frozen-artifact boundaries. Both passed.

## Remaining maintainer choices

The review does not resolve the choices reserved to the maintainer:

1. Is the constraints-to-decisions journey the right primary organizing
   direction, or does it feel too much like generic systems design?
2. Should causal transitions be the main spine, a mandatory secondary map, or
   only a diagnostic reading path?
3. Should responsibility and authority remain a full alternative, or become a
   cross-cutting map inside another skeleton?
4. Should failure and uncertainty response remain a challenger, replace an
   active option, or be dropped?
5. Are the shared comparison obligations and the priority placed on design
   judgment and evidence evaluation aligned with the intended program?

No later batch, outline selection, or detailed-outline work follows from this
review without an explicit maintainer decision.
