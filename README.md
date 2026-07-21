# Harness Engineering V2

This repository is rebuilding its harness-engineering research program from a
clean conceptual slate. The V2 program will begin with a maintainer-approved
outline. Only after that outline fixes the objectives, scope, organization, and
sequence will a separate research plan authorize substantive investigation.

The prior program is preserved in Git history but is not active knowledge.
Existing research questions, R1–R11 taxonomy, case order, findings, syntheses,
curriculum, and learning artifacts do not constrain V2.

## Current state

The V2 authority reset, outline-development brief, complete pinned-catalog
census, Walking Labs curriculum inspection, and first four 20-family catalog
calibrations are complete. Core-01 through core-03 are approved. Core-04's
proposed 17 `read_only` / three `excluded` result remains awaiting maintainer
ratification, and no core-05 or later batch is authorized.

The maintainer rejected the abstraction-first A/B/C portfolio, then used
V2-D013 to create the reviewed conventional-topic baseline `V2-SK-D`. After a
maintainer-provided build-up alternative exposed useful reading-path pressure
and several false linear dependencies, V2-D014 authorized one synthesis:
[`V2-SK-F`](research/outline-development/conventional-buildup-skeleton.md).
F keeps a single familiar-topic architecture and adds a branching build-up
traversal, explicit decision targets, and security, assurance, and production
rails. Its bounded local
[`adversarial review`](research/outline-development/conventional-buildup-skeleton-review.md)
is complete. The reviewed
[`V2-SK-D`](research/outline-development/conventional-skeleton.md) remains its
checkpoint-01 baseline; [`V2-SK-E`](research/outline-development/buildup-skeleton.md)
is retained only as an advisory input. F remains a structural hypothesis, not
an approved outline or subject authority.

Work remains on `codex/harness-engineering-v2`, which began at commit
`2ad6c8cf5d5246874475df2acc71c6fdc74cdbba`.

The complete pre-pivot history remains recoverable from
`codex/archive-pre-pivot-2026-07-20` at
`071fd2d833c809723c881921956a50e46fa748f1`.

No V2 subject outline has been approved, and no subject-research taxonomy, case
set, evidence synthesis, or reviewed subject finding currently exists. The
approved and amended
[`research/outline-development/brief.md`](research/outline-development/brief.md)
authorizes structural inspection of the named inputs, a complete pinned-catalog
inventory, and the provisional F synthesis. It does not adopt
source taxonomies, authorize a new outbound source open without maintainer
approval of an exact batch, or authorize substantive research.

## Where to begin

- [`AGENTS.md`](AGENTS.md) is the operating contract.
- [`research/STATUS.md`](research/STATUS.md) states the active stage and gate.
- [`research/DECISIONS.md`](research/DECISIONS.md) contains V2 decisions only.
- [`research/LEGACY.md`](research/LEGACY.md) defines the archive and selective
  readmission boundary.
- [`docs/design-history.md`](docs/design-history.md) defines consequential-only
  conversation retention without turning Git into a chat log.
- [`research/outline-development/brief.md`](research/outline-development/brief.md)
  is the approved process contract for structural landscape mapping and outline
  gates.
- [`docs/source-provenance.md`](docs/source-provenance.md) defines evidence
  capture and audit rules.
- [`docs/provenance-architecture.md`](docs/provenance-architecture.md) documents
  the retained technical capture baseline.

## Repository shape

```text
docs/
  research-charter.md       interim V2 charter; final objectives remain pending
  methodology.md            outline-first interim method
  research-plan.md          current gated V2 plan
  design-history.md         selective private conversation-retention policy
  source-provenance.md      source, claim, and completeness rules
  provenance-architecture.md retained technical capture architecture
research/
  STATUS.md                 current stage and next gate
  COVERAGE.md               admitted V2 subject coverage only
  DECISIONS.md              V2 decisions only
  LEGACY.md                 archive and selective-readmission contract
  outline-development/      approved brief and gated structural-landscape work
  provenance/validation/    retained infrastructure validation evidence
  sources/README.md         rules for future V2 source records
  templates/                taxonomy-neutral evidence templates only
tools/provenance/            capture, reconciliation, validation, and audit CLI
```

The repository deliberately has no active case-study, synthesis, curriculum,
or site structure. Those shapes may be introduced only when the approved
outline and a later research plan require them.
