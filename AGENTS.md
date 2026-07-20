# Agent Instructions — Harness Engineering V2

## Mission and current phase

This repository is rebuilding its harness-engineering research program from a
clean conceptual slate. The immediate objective is to establish an approved
outline before deeper subject research begins. Existing research machinery may
be reused when it is independent of the rejected program; inherited questions,
taxonomies, cases, findings, syntheses, curriculum, and learning artifacts have
no V2 authority.

The maintainer is the decision authority at every gate. Do not infer approval
from earlier repository history or from the existence of an artifact.

## Read before working

Read these files in order:

1. `README.md`
2. `research/STATUS.md`
3. `research/DECISIONS.md`
4. `research/LEGACY.md`
5. `docs/design-history.md`
6. `docs/source-provenance.md`
7. `docs/provenance-architecture.md`
8. Any active brief named by `research/STATUS.md`

`docs/research-charter.md`, `docs/methodology.md`, and
`docs/research-plan.md` are interim V2 control documents until the maintainer
approves the detailed outline. They do not pre-approve a subject taxonomy or a
post-outline research sequence.

## Current authorization

The maintainer accepted the completed V2 repository reset and approved V2-D005,
V2-D006, the Stage 4 catalog correction V2-D007, and the catalog-gate decision
V2-D008 on 2026-07-20. The original three-seed pass, six-source Wave 1,
Walking Labs curriculum inspection, and complete pinned-catalog census are
complete. The unopened Wave 2 is withdrawn and has no active authority.

The catalog gate is approved. The maintainer ratified the bounded Git-lineage
interpretation and approved the complete 21-batch program as intended scope.
Only `awesome-screen-core-01` is authorized for execution. Its exact 20-family
register is the batch of that name in
`research/outline-development/awesome-screening-plan.json` as committed at
`3c66817a1f7a43adf7492451f859c501f1dfee7c`. V2-D008 supersedes only that
batch's historical `proposed_not_authorized` field; its membership and
inspection constraints remain fixed, and all other batches remain blocked.

For `awesome-screen-core-01`, open only each registered direct URL and inspect
only the predeclared screening surface needed to establish identity,
accessibility, actual relevance, scope, evidence posture, and visible lineage.
Do not run a topical or ecosystem search, follow a second hop, perform an
implementation or technique deep dive, draft an outline, select cases,
synthesize findings, produce or adopt curriculum, build a site, promote
evidence maturity, or re-admit legacy evidence. Identity-resolution queries
remain separately preapproved and none is authorized for this batch.

## Clean-slate boundary

- `codex/harness-engineering-v2` is the active branch.
- `codex/archive-pre-pivot-2026-07-20` at commit
  `071fd2d833c809723c881921956a50e46fa748f1` is historical, not active
  authority.
- The V2 branch began at
  `2ad6c8cf5d5246874475df2acc71c6fdc74cdbba`.
- Never merge the archive branch into V2 merely to recover content.
- Consult archived material only under the readmission process in
  `research/LEGACY.md`.
- Old claim IDs, maturity labels, approvals, and review outcomes never transfer
  into V2 automatically.

## Maintainer gates

The current program has these baseline blocking gates:

1. Approve the repository triage before reset changes.
2. Review the completed V2 authority reset and its validation/review evidence.
3. Approve the outline-development brief before seed investigation.
4. Select, combine, or reject competing outline skeletons before detailed
   outline finalization.
5. Explicitly approve the final outline's objectives, scope, organization, and
   sequence before substantive research planning or execution.

An approved active brief may add narrower blocking checkpoints between these
baseline gates. Once approved, those checkpoints are binding and must be
reflected in `research/STATUS.md`; while a brief remains proposed, it grants no
authority.

At a gate, pause. Record the decision in `research/DECISIONS.md` and update
`research/STATUS.md` only after the maintainer responds.

## Evidence discipline

Retain these process invariants independent of any future taxonomy:

- Trace every material factual claim to exact, inspectable evidence.
- Pin implementation observations to a commit, tag, release, or explicit live
  date.
- Distinguish verified implementation fact, source-reported claim, inference,
  hypothesis, engineering recommendation, and open question.
- A vendor statement establishes what the vendor says, not that a mechanism
  works.
- A paper establishes what its stated method found under stated conditions,
  not a universal rule.
- Repetition is not independent corroboration. Track source and mechanism
  lineage.
- Evaluate directness, rigor, recency, independence, applicability, and
  confidence without reducing quality to a source-type hierarchy.
- Preserve credible contradictions, negative results, failed approaches, and
  uncertainty.
- Do not equate popularity, implementation presence, polish, or confident
  language with effectiveness.
- Search snippets and agent summaries are leads, not evidence.
- A direct link does not replace a durable source record and exact claim/source
  mapping when a source supports a material claim.

## Provenance

Use `tools/provenance/` and the rules in `docs/source-provenance.md` for every
authorized external search, source open, external repository inspection, or
maintainer-provided research file. Local reads of governing repository files do
not need subject-source events.

The retained adapter is a tested baseline, not assumed proof of every future
runtime shape. Unknown interactions fail closed. If authorized work exposes a
consequential capture failure, stop and present the observed failure and a
bounded correction proposal; do not silently weaken completeness.

Full transcript-prefix archiving is privacy-sensitive and requires explicit
authorization before writing outside this repository. It is not requested for
Stage 4 and must not be used as selective design history.

## Design history

`research/DECISIONS.md` is the canonical decision record and must remain
concise. Preserve raw conversation only through the consequential-selection
policy in `docs/design-history.md`. Never commit raw packets, export a blanket
transcript prefix for design history, or treat a packet as authority, subject
evidence, or research-provenance completeness.

Every external packet requires explicit maintainer approval of its exact
selection manifest. Until a reviewed selective extractor exists, record a
candidate disposition but do not copy conversation manually.

## Independent review and agreement

This repository opts into independent review through
`.codex/claude-review.md`. After meaningful implementation:

1. Run deterministic validation.
2. Invoke the configured read-only reviewer with the original requirement,
   acceptance criteria, repository path, material review paths, approved
   evidence paths, and validation evidence.
3. Independently classify every finding, concern, and recommendation as
   `accept`, `reject`, `partially_accept`, or
   `needs_targeted_verification`.
4. For a consequential disagreement, perform a targeted check when useful and
   use exactly one bounded reconciliation.
5. Implement agreed, in-scope fixes. Escalate only unresolved consequential
   disagreement or work requiring new authority.
6. Rerun deterministic validation and use at most one focused verification
   pass for agreed items.
7. Report dispositions, evidence, changes, and remaining limits.

Review, reconciliation, and verification are read-only. They cannot approve a
gate, change scope, admit legacy evidence, promote maturity, or author project
content.

## Agents and concurrency

The primary agent owns research design, source verification, shared control
state, evidence admission, synthesis, and final quality. Use at most two
subagents concurrently, including nested delegation. Give each a bounded,
non-overlapping task and separate provenance responsibility. Subagent work is
not independent corroboration and remains unverified until the primary checks
the cited evidence.

Only the primary updates `research/STATUS.md`, `research/DECISIONS.md`, shared
coverage state, maturity, or cross-artifact synthesis.

## External material

Third-party repositories and durable external evidence belong under
`/Users/jernotte/dev/reference-materials/research` when an approved task
requires them. That location may require explicit write approval. Do not copy
large third-party repositories into this project or work around permission
boundaries.

Third-party curriculum and catalog repositories are structural inputs only;
their internal organization and outbound links confer no V2 authority.

## Working discipline

- Begin from the active decision and gate, not from inherited subject matter.
- Preserve user changes and avoid unrelated edits.
- Do not build infrastructure speculatively.
- Keep canonical source data distinct from generated audits and presentation.
- Keep status concise and current.
- Stop when the authorized stage is complete; do not roll through a maintainer
  gate.
