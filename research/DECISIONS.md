# Harness Engineering V2 Decision Log

This log contains V2 decisions only. Pre-pivot decisions remain recoverable at
`codex/archive-pre-pivot-2026-07-20` commit
`071fd2d833c809723c881921956a50e46fa748f1` and have no active authority.

## V2-D001 — Full conceptual reset and outline-first program

**Status:** Approved
**Date:** 2026-07-20

### Decision

Begin Harness Engineering V2 from a clean conceptual slate. Preserve tested
research and provenance infrastructure where useful, but treat the inherited
research questions, R1–R11 taxonomy, case ordering, findings, syntheses,
curriculum, and learning artifacts as replacement candidates rather than
authority.

Develop and obtain maintainer approval of a new outline before deeper research.
Use the two named web resources and one maintainer-provided PDF as seed leads
only after an outline-development brief is approved. They do not supply an
adopted taxonomy.

Legacy evidence may later be reconsidered only when the approved outline
creates a concrete question it can answer.

### Why

The pre-pivot organization and learning outputs did not match the maintainer's
objectives or preferred structure. Continuing to refine them would compound the
wrong framing. An outline-first process gives the maintainer direct control over
objectives, scope, organization, and sequence before research investment grows.

### Consequences

No old conclusion or maturity status transfers to V2. Subject research remains
blocked through the outline gate. The pre-pivot state remains recoverable rather
than duplicated in the active branch.

### Approval record

The maintainer directed the full pivot, established the seed set and
outline-first sequence, and approved creation of the bounded V2 goal.

## V2-D002 — Repository triage and reset manifest

**Status:** Approved
**Date:** 2026-07-20

### Decision

Apply the complete 221-file triage as approved:

- initially retain 30 taxonomy-neutral infrastructure and validation files;
- initially rewrite or adapt 13 governing and technical-documentation files;
- retire 53 conceptual, research-structure, learning, site, and presentation
  files;
- remove 125 legacy source/provenance files from the active branch while
  preserving them in the archive;
- add one V2 legacy/readmission contract.

Retain `tools/provenance/`, `research/provenance/validation/`, the neutral
source/ledger/audit templates, and `.gitignore`. Remove the old case, cycle, and
synthesis templates until the approved outline defines their required shape.
Remove both presentation-writer stacks because their inputs and contracts are
hard-coded to the retired program.

### Alternatives considered

- Keep old artifacts in an in-tree archive. Rejected because it duplicates Git
  history and preserves anchoring risk.
- Leave legacy source records and provenance packages active but relabel them.
  Rejected because active paths and prior maturity create accidental-admission
  risk.
- Rewrite the old case/cycle/synthesis templates immediately. Rejected because
  doing so would prefigure a structure before outline approval.
- Remove all infrastructure. Rejected because the provenance engine and neutral
  evidence templates are tested and independent of the old taxonomy.

### Consequences

The authority chain must change atomically: `AGENTS.md`, `README.md`, the
reviewer contract, status, coverage, decisions, and provenance documentation
must agree. Subject event packages and their source records must leave together
or their audits become non-reproducible.

### Approval record

The maintainer explicitly approved the reset manifest on 2026-07-20.

During the configured reset review, one initially unchanged file,
`research/provenance/validation/README.md`, received a local warning that its
D-004 and Stage 0.5 labels are archived rather than active authority. This
routine de-anchoring annotation changes the final implementation count to 29
unchanged files and 14 adapted files; it does not change the approved retention
or removal boundary.

## V2-D003 — Legacy readmission requires new V2 evidence work

**Status:** Approved as part of V2-D001 and V2-D002
**Date:** 2026-07-20

### Decision

An approved V2 outline question is necessary but not sufficient for legacy
reuse. The underlying source and exact location must be reopened; freshness,
applicability, independence, and lineage must be reassessed; and new V2 source
events, records, claim IDs, verification, and review must be created. Prior
maturity and approval never transfer.

### Consequence

Archived internal analyses can guide where to look, but cannot support a V2
material claim on their own.

## V2-D004 — Completed authority reset accepted

**Status:** Approved
**Date:** 2026-07-20

### Decision

Accept the completed V2 authority reset after review of the branch and archive
identity, exact active-tree changes, deterministic validation, independent
review dispositions, and remaining reviewer-tool limits. Authorize Stage 3
development of the outline-development brief.

### Consequences

The reset is a closed checkpoint. The pre-pivot corpus remains non-authoritative
and recoverable only through the archive/readmission boundary. Stage 3 may
define how the outline will be developed and judged, but seed inspection,
first-hop screening, outline drafting, and subject research remain blocked
until the maintainer approves the brief.

### Approval record

After the reset evidence and limits were presented, the maintainer explicitly
confirmed acceptance on 2026-07-20.
