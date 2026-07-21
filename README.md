# Harness Engineering V2

This repository is rebuilding its harness-engineering research program from a
clean conceptual slate. The V2 program will begin with a maintainer-approved
outline. Only after that outline fixes the objectives, scope, organization, and
sequence will a separate research plan authorize substantive investigation.

The prior program is preserved in Git history but is not active knowledge.
Existing research questions, R1–R11 taxonomy, case order, findings, syntheses,
curriculum, and learning artifacts do not constrain V2.

## Current state

The V2 authority reset and outline-development brief were approved on
2026-07-20. V2-D007 later corrected Stage 4 after the maintainer clarified that
the Awesome repository must be treated as a comprehensive lead catalog and the
Walking Labs course as a curriculum candidate. The maintainer approved the
completed catalog gate, ratified its bounded lineage interpretation, approved
the 21-batch screening program as intended scope, and first authorized the
20-source `awesome-screen-core-01` calibration batch. That batch is complete;
the maintainer approved its method and 19 `read_only` / one `excluded`
dispositions and authorized only `awesome-screen-core-02` next. Core-02 has now
completed the same bounded 20-family screen with 19 proposed `read_only`
dispositions and one proposed exclusion. Its joined identity, accessibility,
relevance, evidence-posture, catalog-correction, and schema results are in
[`research/outline-development/awesome-screen-core-02.md`](research/outline-development/awesome-screen-core-02.md).
The maintainer approved continued use of core-02's method and authorized only
the exact `awesome-screen-core-03` batch. Core-03 is now complete with 17
proposed `read_only` dispositions and three proposed exclusions; its joined
register is in
[`research/outline-development/awesome-screen-core-03.md`](research/outline-development/awesome-screen-core-03.md).
Core-02's individual dispositions and catalog corrections also remain proposed
because their approval was not explicit. No later batch is authorized. Work
remains on
`codex/harness-engineering-v2`, which began at commit
`2ad6c8cf5d5246874475df2acc71c6fdc74cdbba`.

The complete pre-pivot history remains recoverable from
`codex/archive-pre-pivot-2026-07-20` at
`071fd2d833c809723c881921956a50e46fa748f1`.

No V2 subject outline, taxonomy, case set, synthesis, or reviewed finding
currently exists. The approved and amended
[`research/outline-development/brief.md`](research/outline-development/brief.md)
authorizes structural inspection of the named inputs and a complete pinned-
catalog inventory. It does not adopt their taxonomies, authorize a new outbound
source open without maintainer approval of an exact batch, or authorize
substantive research.

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
