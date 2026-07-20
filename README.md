# Harness Engineering V2

This repository is rebuilding its harness-engineering research program from a
clean conceptual slate. The V2 program will begin with a maintainer-approved
outline. Only after that outline fixes the objectives, scope, organization, and
sequence will a separate research plan authorize substantive investigation.

The prior program is preserved in Git history but is not active knowledge.
Existing research questions, R1–R11 taxonomy, case order, findings, syntheses,
curriculum, and learning artifacts do not constrain V2.

## Current state

The V2 authority reset was accepted on 2026-07-20. Current work is limited to
the outline-development brief on `codex/harness-engineering-v2`, which began at
commit `2ad6c8cf5d5246874475df2acc71c6fdc74cdbba`.

The complete pre-pivot history remains recoverable from
`codex/archive-pre-pivot-2026-07-20` at
`071fd2d833c809723c881921956a50e46fa748f1`.

No V2 subject outline, taxonomy, case set, synthesis, or reviewed finding
currently exists. The named seed sources remain unopened pending approval of
the proposed
[`research/outline-development/brief.md`](research/outline-development/brief.md).

## Where to begin

- [`AGENTS.md`](AGENTS.md) is the operating contract.
- [`research/STATUS.md`](research/STATUS.md) states the active stage and gate.
- [`research/DECISIONS.md`](research/DECISIONS.md) contains V2 decisions only.
- [`research/LEGACY.md`](research/LEGACY.md) defines the archive and selective
  readmission boundary.
- [`research/outline-development/brief.md`](research/outline-development/brief.md)
  is the proposed Stage 3 decision packet; it is not yet approved.
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
  source-provenance.md      source, claim, and completeness rules
  provenance-architecture.md retained technical capture architecture
research/
  STATUS.md                 current stage and next gate
  COVERAGE.md               admitted V2 subject coverage only
  DECISIONS.md              V2 decisions only
  LEGACY.md                 archive and selective-readmission contract
  outline-development/      proposed brief; no subject outline yet
  provenance/validation/    retained infrastructure validation evidence
  sources/README.md         rules for future V2 source records
  templates/                taxonomy-neutral evidence templates only
tools/provenance/            capture, reconciliation, validation, and audit CLI
```

The repository deliberately has no active case-study, synthesis, curriculum,
or site structure. Those shapes may be introduced only when the approved
outline and a later research plan require them.
