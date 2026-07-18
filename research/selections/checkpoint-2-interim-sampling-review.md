# Checkpoint 2 Interim Sampling Review after OpenClaw

**Status:** Historical D-010 decision; immediate order later amended by approved D-011

**Date:** 2026-07-16

**Evidence boundary:** Maintainer-reviewed Pi v0.80.6, OpenHands SDK v1.35.0, and OpenClaw v2026.6.6; D-006, D-009, and D-010

**Later amendment:** On 2026-07-18, D-011 selected pinned Hermes Agent as the final pre-Checkpoint-3 case and deferred Browser Use until after the first learning-oriented synthesis. The analysis below is preserved as the evidence and tradeoff record for D-010; its active authorization and trigger are superseded by [`hermes-selection-and-pinning.md`](hermes-selection-and-pinning.md).

**Reconstruction caveat:** The original Cycle 1 landscape remains provisionally promoted under reconstructed provenance. This review uses Cycle 1 leads only as leads; it does not inherit their reported behavior or breadth as evidence.

## Decision made

The maintainer accepted OpenClaw after the C003 acknowledgement-policy reconciliation and chose the already selected Browser Use contrast as the next and only case. An adoption-weighted cohort, a lineage comparison with Hermes, a replacement programmed-control harness, and the conditional Claude Code case remain alternatives rather than implicit additions.

This remains an interim sampling decision, not Checkpoint 3. It does not validate the taxonomy, authorize cross-harness synthesis, or silently resize the historical D-006 batch.

## What the first three cases now cover

Pi, OpenHands SDK, and OpenClaw are intentionally different implementations. Pi exposes a compact interactive session/runtime split. OpenHands exposes typed actions, event-tree state, active views, and optional platform policy. OpenClaw exposes durable channel ingress, long-lived session ownership, several schedulers and stores, optional background work, and usage-driven memory adaptation.

The three cases repeatedly stress lifecycle scale, policy/context/tool coupling, action-result versus model-observation boundaries, cross-cutting extensions, runtime integrity versus task acceptance, and control ownership. Recurrence is useful evidence that these questions are analyzable across architectures. It is not yet independent proof that any shared implementation choice is effective.

The most important uncovered contrast remains perception-grounded environment interaction. None of the three deeply tests screenshot/DOM observation construction, browser-state drift, action grounding, dynamic page recovery, or the relationship between raw browser state and the evidence shown to the model. The programmed-control contrast also weakened when LangGraph was correctly deferred as a framework rather than a concrete harness. The closed production perspective remains blocked on a supplied Claude Code evidence set.

## Alternative 1: preserve the contrast sequence and analyze Browser Use

**Question answered:** How does a concrete browser harness construct perception-grounded observations, mediate actions in a changing environment, recover from stale state, and decide that a browser task is complete?

**Value:** This is the cleanest test of TF-003 after three code/message-oriented systems. It also tests whether the existing case method transfers to a different environment rather than accumulating more evidence from similar text-and-tool loops. Browser Use is already in D-006 at an exact pin, so selection and repository identity do not need to be reopened.

**Replication and independence:** It is a contrast case, not an independent replication of OpenClaw. Its value is falsification and boundary testing. Similarities would be more surprising and informative because the environment and observation substrate differ.

**Adoption evidence:** No adoption claim is required to justify it. The project has not operationalized current usage, team size, dependents, or production deployment for this case, and repository attention alone would be weak evidence.

**Anchoring risk:** Low relative to a cohort of related personal/coding agents. It introduces a counter-shape before the current beliefs about text-oriented harnesses harden.

**Evidence access and cost:** The repository is open and already pinned at `0.13.4` / `68afe46456a23009a7d5eec2017ec7ab51b7c027`. The main cost risk is scope across browser control, DOM/vision extraction, controller, agent loop, telemetry, and provider integrations. A written scope can contain it around one page-action-observation path.

**Taxonomy value:** High for R5/R6, R3, R4, R9, and possibly lifecycle/state boundaries. It directly tests a weakly covered responsibility contrast rather than adding another example to an already visible cluster.

**What remains uncovered:** Explicit programmed workflows, lineage effects, a closed production system, and adoption-weighted replication.

## Alternative 2: adopt an evidenced, adoption-weighted cohort

**Question answered:** Which mechanisms recur across systems with strong, operationalized adoption signals, where do they diverge, and which pressures plausibly explain those choices?

**Value:** High if the near-term learning goal is to understand what widely used systems actually ship and maintain. Replication may reveal convergence, tradeoffs, and operational constraints that one-off contrast cases miss.

**Prerequisite:** The cohort does not yet exist as evidence. Adoption would need a dated protocol and source trail covering several indicators—credible usage or dependents where available, maintainer/contributor activity, release cadence, organizational support, integrations, and repository attention as only one weak signal. The project should not infer users or team size from stars.

**Independence and lineage risk:** High. Related systems may copy, interoperate, migrate, share providers, or respond to the same ecosystem constraints. Repetition without lineage analysis is not independent corroboration and cannot establish effectiveness.

**Anchoring risk:** High if several related coding/personal agents run before a dissimilar counterexample. The corpus's first strong beliefs could reflect one product lineage or provider era.

**Evidence access and cost:** Requires a bounded selection update before any case. It may be worthwhile later, but it is not the smallest next step.

**Taxonomy value:** Moderate. It tests recurrence more than missing boundaries. It may add operational-pressure evidence if the adoption protocol is credible.

**What remains uncovered:** Perception-grounded observation and a clean programmed-control contrast unless deliberately included.

## Alternative 3: analyze Hermes as an OpenClaw lineage and tradeoff case

**Question answered:** Which mechanisms are inherited, translated, discarded, or changed across a migration-compatible or historically related pair, and what tradeoffs do those differences imply?

**Value:** Potentially high as a lineage study. It would be a poor independent-convergence test but a strong design-descent comparison if the relationship, versions, and evidence boundary are established first.

**Adoption evidence:** Not established in the current corpus. Popularity should not be assumed from mentions or migration support.

**Independence and lineage risk:** Deliberately high. That is not a defect if the case question is lineage. It becomes a defect only if shared mechanisms are counted as independent convergence.

**Anchoring risk:** Moderate to high if scheduled immediately; a second related long-lived agent may reinforce OpenClaw-shaped categories before Browser Use tests them.

**Evidence access and cost:** Hermes is not part of the approved pinned batch. Selection would require repository identity, an immutable pin, lineage evidence, a scope, and a separate maintainer decision. No Hermes implementation was inspected for this review.

**Taxonomy value:** Moderate for ownership, memory, lifecycle, and extension boundaries; lower for the currently weak environment/observation contrast.

**What remains uncovered:** Independent replication, browser grounding, programmed control, and the closed case.

## Alternative 4: select a concrete programmed-control harness

**Question answered:** What changes when explicit application code owns workflow nodes, transitions, fan-out, aggregation, interrupts, and stopping rather than leaving most next-step decisions to the model?

**Value:** It recovers the intended control-flow contrast lost when LangGraph was reclassified as a framework. Studying a concrete application would let the framework's mechanisms appear in situ without pretending the framework chose the application's prompts, tools, or acceptance policy.

**Adoption evidence:** Not yet established and not required if contrast is the selection goal.

**Independence and anchoring:** Likely favorable if the application is outside coding/personal-agent lineages. The main risk is choosing a small application for architectural neatness rather than real implementation value.

**Evidence access and cost:** Requires candidate selection, exact pinning, and an amendment to D-006/D-009. That is more governance and recon than using Browser Use's existing pin.

**Taxonomy value:** High for R4, R8, R7, and framework/application ownership. It is less direct than Browser Use for the R5/R6 observation question.

**What remains uncovered:** Browser grounding, adoption replication, lineage, and the closed production case.

## Alternative 5: wait for and prioritize Claude Code

**Question answered:** What externally supportable defaults and mechanisms can be established for a widely deployed closed coding harness, and how do its evidence limits change the case method?

**Value:** Potentially high. It would add the approved batch's closed-source evidence mode and may be the strongest practical system in the portfolio. It also tests whether the project can remain precise when source code is unavailable.

**Prerequisite:** The maintainer must supply an independently enumerable, bounded, dated evidence set: product/version/date boundary, official documentation, authorized configuration exports, representative transcripts or traces, and any firsthand material that may be cited. Until then every architectural cell remains unknown rather than inferred from public reputation.

**Adoption evidence:** Plausible but not admitted in this project. If adoption becomes part of the justification, it needs the same operationalized evidence as any cohort member.

**Independence and anchoring:** It adds a different evidence mode but remains a coding agent. Closed-source uncertainty can invite projection from familiar open systems, so claims must be narrower rather than more confident.

**Evidence access and cost:** Currently blocked by the missing maintainer-supplied set. Waiting would halt implementation learning; replacing missing material with broad public claims would violate the approved plan.

**Taxonomy value:** High for evidence-mode limits and potentially R2/R3/R5/R9, but unknowable until the material is enumerated.

**What remains uncovered:** Browser grounding and programmed control.

## Comparison

| Alternative | Immediate information gain | Readiness | Main risk | Strongest taxonomy test |
| --- | --- | --- | --- | --- |
| Browser Use | High | Already selected and pinned | Browser/platform breadth | R5/R6 observation grounding |
| Adoption-weighted cohort | Potentially high | Requires evidence protocol and reselection | lineage and anchoring mistaken for convergence | recurrence and operational ownership |
| Hermes lineage | High for descent, low for independence | Requires selection and pin | copied/inherited behavior mislabeled as corroboration | lifecycle/memory tradeoffs |
| Programmed-control harness | High | Requires candidate selection and batch amendment | choosing a framework-like or unrepresentative application | R4/R8 and ownership |
| Claude Code | Potentially high | Blocked on supplied evidence | projecting internals into a closed system | closed-source evidence limits |

## Approved recommendation

OpenClaw is approved on its own merits, and Browser Use is authorized as the next single case at D-006's existing pin. It has the highest immediate information gain per unit of governance work, directly tests the most important uncovered action/observation boundary, and preserves an early counterexample against anchoring. ([C020](../claims/openclaw-v2026.6.6.md#c020))

The rolling decision uses the precedence recorded in D-010: marginal information gain on uncovered or high-friction responsibilities; falsification and anchoring protection; evidence readiness; evidence-mode and domain diversity; analysis and governance cost; lineage and independence risk; and only then operationalized adoption evidence. Any pivot must identify the evidence or higher-priority criterion that outweighs the prior decision.

The Claude Code evidence set now has a decision deadline rather than an indefinite conditional state. At the Browser Use review, if the set has already been enumerated, dated, bounded, and admitted, the maintainer may explicitly authorize Claude Code as the final pre-Checkpoint-3 case. Otherwise Claude Code is formally deferred and Checkpoint 3 convenes immediately after Browser Use. No replacement case may be added before that checkpoint.

## Approval and next boundary

On 2026-07-17, the maintainer approved D-010 after reviewing the OpenClaw package, an external verification, the adversarial C003 and process findings, and the primary agent's response. The approved boundary is:

1. Browser Use `0.13.4` at `68afe46456a23009a7d5eec2017ec7ab51b7c027` is the only authorized implementation and requires a written scope before deep analysis.
2. Claude Code, Hermes, every adoption-cohort member, programmed-control replacement, and all alternates remain blocked.
3. Browser Use is the last unconditional pre-Checkpoint-3 case; the Claude evidence branch above determines whether Checkpoint 3 follows Browser Use directly or follows one separately authorized Claude Code case.
4. Checkpoint 3 must compare the accumulated taxonomy friction and deliberately decide how focused upstream test execution fits the case method.

The provisional taxonomy remains unchanged, and Browser Use analysis has not begun.
