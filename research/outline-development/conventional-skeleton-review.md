# Harness Engineering V2 — Conventional Skeleton Adversarial Review

**Checkpoint:** `V2-SK-CP01`
**Status:** Complete historical checkpoint-01 review; D retained as a reviewed
baseline beneath F and G
**Authority:** V2-D013
**Reviewed skeleton:** [`conventional-skeleton.md`](conventional-skeleton.md)
**Vocabulary basis:**
[`conventional-vocabulary-map.md`](conventional-vocabulary-map.md)
**Current successor:** [`governing-structure.md`](governing-structure.md)
**Review type:** Bounded local read-only adversarial review; not externally
independent and not maintainer approval

## Scope and limits

Two local adversaries separately reviewed the replacement against the approved
brief, the V2-D013 acceptance criteria, the captured local vocabulary basis,
and the current authority boundary. One focused on architecture, ownership,
hierarchy, and sequence. The other focused on vocabulary authority,
traceability, and governance consistency. Their work is not independent
corroboration.

Neither reviewer opened an external source, inspected legacy material, changed
a source disposition, admitted evidence, or exercised decision authority. The
configured external Claude reviewer remains unavailable under the recorded hard
tenant transfer rule, so these reviews are useful challenge but not independent
external corroboration.

Both initial reviews failed checkpoint readiness while passing the maintainer's
conventional-vocabulary direction. The primary accepted every reported defect;
there was no consequential disagreement and no reconciliation request.

## Architecture findings and primary dispositions

| ID | Severity | Finding | Disposition and correction |
| --- | --- | --- | --- |
| A-01 | High | The candidate did not explicitly connect its structure to the approved audience and outcomes, critique its benefits and hazards, or assign later roles to sources, implementations, domains, and cases. | **Accept.** Added audience/outcome fit, inclusion and source-role rules, benefits, blind spots, anchoring hazards, and what the structure exposes or hides. |
| A-02 | High | Major sections lacked individually auditable ownership and dependency tests. | **Accept.** Added a thirteen-row ownership table with one primary question, prerequisites, and principal cross-links per major section. |
| A-03 | Medium | Foundations duplicated architecture ownership and the final section was a catch-all. | **Accept.** Removed architecture forms from Foundations and narrowed the final section to composition and synthesis of the preceding subjects. |
| A-04 | Medium | Routing, handoffs, isolation, retry, recovery, and versioning recurred without functional ownership. | **Accept.** Narrowed the visible labels and added explicit placement rules and vocabulary-map cross-references. |
| A-05 | Medium | MCP, service interfaces, and agent-to-agent interfaces were subordinated too broadly to Tool Engineering. | **Accept.** Split Protocols and Integration into its own major subject while keeping tool semantics and agent coordination in their primary homes. |
| A-06 | Medium | Several deepest leaves were example inventories rather than functional hierarchy. | **Accept.** Pruned environment, domain, implementation, and product inventories and retained depth only for semantic, ownership, or dependency distinctions. |
| A-07 | Medium | The familiar lookup term “Guardrails” was absent. | **Accept.** Added Guardrails and Policy Enforcement under Security, Permissions, and Human Control. |
| A-08 | Medium | Success criteria first appeared too late in the reading order. | **Accept.** Established goals and success criteria in Foundations while leaving evaluation design and evidence quality to the later dedicated section. |

## Vocabulary, traceability, and authority findings

| ID | Severity | Finding | Disposition and correction |
| --- | --- | --- | --- |
| T-01 | High | The vocabulary map conflated captured wording, maintainer direction, and proposed boundaries and did not make each load-bearing row reproducible. | **Accept.** Separated those epistemic layers, added exact local anchors and representative family IDs per row, and stated that no active row depends solely on unratified core-04. |
| T-02 | High | Excessive or weakly anchored leaves made catalog presence or analyst familiarity look like structural authority. | **Accept.** Pruned example-only and implementation-specific leaves; the remaining tree is a proposal whose rationale is functional rather than a recurrence claim. |
| T-03 | High | The skeleton promoted worktrees while the vocabulary map said they were not part of the public spine. | **Accept.** Removed worktrees from the tree and kept them explicitly unpromoted. |
| T-04 | High | The skeleton omitted several evaluation fields required by the active brief. | **Accept.** Resolved with the same audience, ownership, source-role, and self-critique additions recorded for A-01 and A-02. |
| T-05 | Medium | Repeated common terms did not consistently expose primary versus cross-reference use. | **Accept.** Added the overlap table and function-specific labels for routing, handoffs, recovery, isolation, traces, and shared state. |
| T-06 | Medium | The final architecture section duplicated several earlier owners. | **Accept.** Limited it to end-to-end composition, cross-topic tradeoffs, transfer, and architectural change, with an explicit no-new-mechanism rule. |
| T-07 | Medium | Active control documents retained obsolete checkpoint-00 portfolio language. | **Accept.** Marked V2-SK-CP00 as historical, made V2-D013 the current drafting boundary, registered the checkpoint-01 outputs, and replaced active portfolio/select-or-combine controls. |

## Explicit passes from the initial reviews

Both reviewers agreed that the replacement:

- uses recognizable field terminology rather than the rejected A/B/C labels;
- keeps context distinct from memory, skills from tools and protocols, planning
  from orchestration, observability from evaluation, and permissions from
  sandboxing;
- uses the checkpoint-00 decision, causal, and responsibility lenses only as
  cross-cutting questions;
- does not copy a seed or catalog organization wholesale;
- keeps A, B, and C as rejected design history;
- leaves core-04 unratified and core-05 closed; and
- changes no frozen source, catalog, curriculum, provenance, or screening
  artifact.

## Focused verification

The architecture verifier passed A-01 through A-08 with no residual or newly
introduced consequential defect. It confirmed that the thirteen-section tree
remains recognizable and high-level, that its extra depth is functional, and
that the final section, ownership table, and placement rules close the former
duplication and ambiguity.

The vocabulary/authority verifier found T-01 through T-06 closed, then caught
two residual T-07 phrases during the same focused pass: one checklist item still
deferred the role of implementations and sources, and the coverage plan still
said “baseline review” and “portfolio authority.” After those exact phrases
were corrected, the verifier passed T-01 through T-07 with no new consequential
authority, traceability, stale-control, or scope defect. It also confirmed that
core-04 remains unratified, core-05 remains closed, frozen research and
provenance artifacts remain unchanged, and local-link and whitespace checks
pass.

## Deterministic validation

After all accepted corrections:

- `node tools/provenance/test.mjs` — pass;
- `node tools/catalog/test.mjs` — pass;
- `node tools/provenance/check-local-links.mjs` — pass; and
- `git diff --check` — pass.

## Maintainer choices left open

The review does not resolve the choices reserved to the maintainer:

1. whether all thirteen major subjects are recognizable and at the right
   level;
2. whether Tools, Skills, and Protocols should remain separate;
3. whether Agent Loops/Workflows and Orchestration Systems should remain
   separate;
4. whether Human-in-the-Loop should remain primarily under authority and
   permissions;
5. whether Reliability should become a major subject; and
6. whether Integrated Harness Architectures belongs in the outline or in a
   later synthesis derivative.

No topic placement, later source batch, detailed-outline expansion, or subject
research follows from this review without an explicit maintainer decision.
