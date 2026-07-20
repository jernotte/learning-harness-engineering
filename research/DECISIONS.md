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

### Design-history disposition

Candidate `V2-HIST-001` — the full conceptual pivot and its maintainer
rationale. No conversation packet or external export is approved.

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

### Design-history disposition

`none` — the approved reset manifest, alternatives, consequences, exact Git
boundary, and review record already preserve the decision without needing raw
dialogue.

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

### Design-history disposition

`none` — the concise rule records the complete readmission constraint, and no
separate exchange is needed to interpret it.

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

### Design-history disposition

`none` — the acceptance introduced no rationale or rejected alternative beyond
the reset record and its validation evidence.

## V2-D005 — Outline-development brief

**Status:** Approved
**Date:** 2026-07-20

### Decision

Approve `research/outline-development/brief.md` as the controlling Stage 4
authorization. The proposal defines a builder-first audience, intended
decision outcomes, a fixed-model surrounding-system boundary, organizational
and sequence criteria, three competing skeletons, an exact three-seed boundary,
two maintainer-approved first-hop waves of at most six sources, one optional
four-source extension, primary-only diagnostic provenance, claim and
disposition rules, deterministic outputs, stop conditions, and blocking
checkpoints through final outline approval.

Conversation retention follows `docs/design-history.md`. Repository decision
records remain canonical and concise; Stage 4 requests no full-prefix archive.
Owner-only raw packets are limited to approved consequential exchanges and
require explicit per-packet manifest approval. They confer no research
authority, subject evidence, or provenance completeness.

### Design-history disposition

Candidate `V2-HIST-002` — the maintainer's rejection of the full-prefix/none
binary and requested selective-retention rationale. No conversation packet or
external export is approved.

### Approval and authority record

The maintainer explicitly approved V2-D005 and V2-D006 on 2026-07-20. This
adopts every item in the brief approval checklist and makes
`docs/design-history.md` binding. It authorizes only the bounded Stage 4 seed
map and its narrower checkpoints. It does not authorize a first-hop open before
the seed-only gate, substantive research, outline drafting, evidence promotion,
legacy readmission, or any raw conversation export.

## V2-D006 — One-time review fallback for the selective-history revision

**Status:** Approved
**Date:** 2026-07-20

### Context

The configured external Claude review covered the earlier brief but not the
later selective-history revision. For the revised scope, the first invocation
was rejected before transmission pending fresh, risk-informed authorization.
The maintainer then authorized the exact V2 governance and provenance paths.
A second invocation was rejected before transmission by a hard tenant rule that
forbids that private repository transfer even with explicit authorization. No
repository file was transmitted, and the reviewer must not be retried or
circumvented for this revision.

### Decision

For this documentation-only selective-history revision, accept the passing
deterministic checks and bounded local read-only audits as a one-time fallback
for the unavailable external pass. This does not call the revision externally
reviewed, change the general configured-review requirement, authorize a future
bypass, or cover implementation of the selective extractor, Stage 4 source
work, evidence promotion, or later meaningful changes.

At approval time no compliant configured reviewer was available, so the
maintainer accepted this declared fallback. If a compliant reviewer becomes
available before Stage 4 begins, run it and record the result without
retroactively claiming that the original revision was externally reviewed.

### Alternatives considered

- Leave Stage 3 blocked until the external destination becomes permitted.
  This preserves the strongest separation but has no bounded resolution path.
- Create a sanitized review packet. Rejected because the repository contract
  requires direct inspection of actual artifacts, a packet summary is not a
  substitute, and using one to evade the tenant rule is prohibited.
- Discard the selective-history revision. Rejected because it would reinstate
  the full-prefix-versus-none choice the maintainer explicitly rejected.

### Evidence and limits

- `node tools/provenance/test.mjs` passes.
- `node tools/provenance/check-local-links.mjs` passes.
- `git diff --check` passes.
- A bounded content audit found four issues; all four were accepted and fixed:
  exact reviewer-content retention, canonical packet content modes, complete
  design-history dispositions, and verified owner-only permission modes.
- A separate final infrastructure audit found no actionable issue against the
  hybrid policy, packet boundary, provenance separation, or Stage 4 gate.
- A follow-up privacy/minimum-necessary audit found no raw conversation,
  credential, email, or secret value in the declared review scope and confirmed
  the provenance fixtures are synthetic.

The local agents share the Codex environment and are not equivalent to the
configured external reviewer. Their agreement is useful review evidence, not
independent external corroboration.

### Consequences and reopening condition

If approved, the brief may proceed to its maintainer-authorized Stage 4 without
claiming that this revision completed external review. Future meaningful work
still follows the configured review workflow. Reopen this decision if a
compliant external destination becomes available before Stage 4 begins or if
the selective-history change expands beyond the reviewed documentation scope.

### Design-history disposition

`none` — the repository record fully states the transport failure, alternatives,
evidence, limit, and reopening condition; raw dialogue would add no necessary
interpretive context.

### Approval record

The maintainer explicitly approved this one-time fallback together with
V2-D005 on 2026-07-20. The limitation and reopening condition remain in force;
this approval does not characterize the selective-history revision as
externally reviewed or waive configured review for Stage 4 source work.

## V2-D007 — Comprehensive catalog landscape correction

**Status:** Approved
**Date:** 2026-07-20

### Context

After the first six-source structural wave, the maintainer clarified that
`walkinglabs/learn-harness-engineering` must be examined as an existing learning
and curriculum artifact, and that `ai-boost/awesome-harness-engineering` is a
resource aggregator whose outbound resources must be inventoried and evaluated
rather than sampled as though the repository itself were one ordinary source.
The preceding 12-source first-hop design therefore answered a narrower question
than the maintainer intended.

### Decision

Amend V2-D005 and the Stage 4 brief as follows:

- withdraw the unopened Wave 2 proposal in full; its six rows remain historical
  leads and confer no priority or authority;
- add `walkinglabs/learn-harness-engineering` as a mandatory structural and
  curriculum candidate, to be inspected without adopting its objectives,
  taxonomy, sequence, projects, or claims;
- treat the pinned `ai-boost/awesome-harness-engineering` README as a lead
  catalog: mechanically extract every substantive outbound resource,
  preserve all category and curator contexts, canonicalize and deduplicate
  source families, and record mechanical exclusions;
- distinguish catalog-context triage from direct source evaluation. An
  aggregator title or annotation is curator-reported metadata, not evidence
  that the linked source is relevant, reliable, independent, or effective;
- inspect the relationship between the `ai-boost` repository and the
  `walkinglabs/awesome-harness-engineering` identity named by the course before
  treating either as independent; and
- stop at a catalog gate with the complete inventory, curriculum analysis,
  lineage result, triage rules, and proposed direct-screening or deep-reading
  set. No previously unopened outbound resource may be opened before that gate.

The comprehensive inventory has no arbitrary source-count ceiling. Later
source opens remain bounded by explicit maintainer-approved batches. Topical
or ecosystem search, second-hop traversal, implementation deep dives, evidence
promotion, outline drafting, and legacy readmission remain unauthorized.

### Alternatives considered

- **Retain the 12-source sample.** Rejected because it leaves most of the
  maintainer-named aggregator unevaluated and lets the curator's unexplored
  selection silently define the visible landscape.
- **Adopt the Walking Labs course structure as the outline baseline.** Rejected
  because it is an existing coding-agent curriculum with its own objectives and
  sequence; clean-slate V2 must evaluate it as a candidate artifact rather than
  inherit it.
- **Deep-read every aggregated source immediately.** Rejected because inventory,
  metadata triage, direct screening, and evidence-bearing analysis are
  different maturity levels. Collapsing them would create large unreviewed
  scope before the maintainer can inspect the landscape and selection rules.

### Consequences and next gate

The completed Wave 1 remains valid only as six `read_only` structural screens.
The old Wave 2, extension, three-query ceiling, and 12-source completion rule no
longer control Stage 4. The next blocking checkpoint is the catalog gate. The
maintainer will review the inventory's completeness and exclusions, the
Walking Labs analysis, repository lineage, triage framework, and exact proposed
source-opening set before any new outbound source is opened.

### Design-history disposition

Candidate `V2-HIST-003` — the maintainer's clarification that the Awesome
repository must be treated as an aggregator and evaluated through its linked
resources, together with the resulting withdrawal of Wave 2. No packet export
or manifest is approved.

### Approval record

The maintainer explicitly agreed with this assessment and plan and directed it
to be implemented on 2026-07-20.
