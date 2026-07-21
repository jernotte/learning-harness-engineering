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

## V2-D008 — Catalog gate approved and first calibration authorized

**Status:** Approved
**Date:** 2026-07-20

### Decision

Approve the completed catalog gate and its accounting, exclusions, Walking
Labs curriculum-candidate analysis, catalog-context triage, and proposed
screening program. Ratify the bounded Git-lineage interpretation: the two
Awesome repositories are not Git forks or mirrors in the inspected identity
metadata, while editorial/source independence remains unassessed and shared
URLs are not corroboration.

Approve the complete 21-batch program as intended direct-screening scope, but
authorize only `awesome-screen-core-01` for execution. The exact authorized
register is the 20-family batch in
`research/outline-development/awesome-screening-plan.json` at commit
`3c66817a1f7a43adf7492451f859c501f1dfee7c`, file SHA-256
`8ce00b2a284a2f789972f3322586497ff0450b734d3cf2d3ad8aec5d8f0169fc`.
This decision supersedes only the batch's historical
`proposed_not_authorized` field in that gate-proposal snapshot; its source
membership, inspection extent, and second-hop boundary remain immutable.

Direct screening may establish identity, accessibility, actual relevance,
scope, evidence posture, visible lineage, and schema friction. It does not
authorize deep reading, search, identity-resolution queries, second-hop or
bibliography traversal, outline drafting, evidence promotion, legacy
readmission, or any other batch.

### Why the staged authorization remains controlling

The first batch spans 20 sources, 18 catalog categories, and five apparent
source forms. It is a calibration of the screening method rather than a sample
whose results may stand in for the catalog. Reviewing it before further opens
prevents a mistaken schema, inspection depth, or provenance treatment from
being repeated across the remaining 375 destinations.

### Consequences and next gate

Complete `awesome-screen-core-01`, reconcile its diagnostic provenance, and
present actual identity/accessibility results, source-form and relevance
corrections, evidence-posture and lineage observations, schema friction, and a
recommendation for the next authorization. Every other batch remains blocked
until the maintainer reviews that checkpoint.

### Execution record

The authorized batch completed on 2026-07-20. Its 22 direct-open events map to
the exact 20 registered URLs and 20 source IDs; two same-URL repeats handled
runtime rendering and introduced no new family. Nineteen sources are
`read_only`, and the LangGraph redirect shell is `excluded` with inspection
extent `none`. No search, identity query, second hop, implementation deep dive,
claim, reference, or evidence promotion occurred. The diagnostic boundary has
zero unresolved observations. This completion records execution under V2-D008;
it does not decide or authorize the next batch.

### Design-history disposition

`none` — the prior catalog-correction rationale, the staged-calibration
explanation, and this exact approval record fully preserve the decision; the
approval exchange adds no essential raw context.

### Approval record

The maintainer explicitly approved the catalog gate, ratified the bounded
Git-lineage interpretation, approved the 21-batch program as intended scope,
and authorized only `awesome-screen-core-01` on 2026-07-20.

## V2-D009 — First calibration approved and second calibration authorized

**Status:** Approved
**Date:** 2026-07-20

### Decision

Approve the `awesome-screen-core-01` direct-screen method and its nineteen
`read_only` / one `excluded` dispositions. Later batches must retain the
expanded per-family register fields established by that calibration: frozen
family and occurrence joins; requested and observed identity; transport
accessibility and substantive inspectability; exact inspected surface; visible
version versus actual pin; repository-shallow state; actual source form;
relevance; evidence posture; lineage or alias notice; catalog correction;
schema friction; and final disposition.

Authorize only the exact 20-family `awesome-screen-core-02` batch in
`research/outline-development/awesome-screening-plan.json` at commit
`3c66817a1f7a43adf7492451f859c501f1dfee7c`, file SHA-256
`8ce00b2a284a2f789972f3322586497ff0450b734d3cf2d3ad8aec5d8f0169fc`.
This decision supersedes only that batch's historical
`proposed_not_authorized` field in the immutable proposal; membership,
screening extent, and second-hop prohibition remain fixed.

### Boundaries

Core-02 may directly screen each registered URL only for identity,
accessibility, inspectability, relevance, scope, source form, evidence posture,
visible lineage, version or pin state, catalog correction, schema friction, and
disposition. It does not authorize search, identity-resolution queries,
second-hop or bibliography traversal, reopening core-01, implementation or
technique deep reading, claims, evidence promotion, outline drafting, legacy
readmission, or another batch.

### Consequences and next gate

Commit this authority checkpoint before the first core-02 interaction. Then
screen the exact registered URLs, reconcile the diagnostic provenance, apply
the approved register method, validate and review the completed package, and
stop at the core-02 source-screening gate. No later batch opens implicitly.

### Design-history disposition

`none` — the approval and exact bounded authorization are fully represented by
this canonical decision; the surrounding exchange adds no essential rationale.

### Approval record

The maintainer explicitly approved the proposed core-01 method and dispositions
and authorized core-02 on 2026-07-20.

### Execution record

Core-02 completed under this authorization on 2026-07-20. Its native boundary
contains 21 direct-open events for the 20 frozen families and registered URLs,
producing exactly 20 source IDs; the sole repeat was a second same-literal-URL
attempt after the GitHub
Governing Agents route returned no substantive content. No search, identity
query, manual redirect traversal, second hop, core-01 reopen, implementation
deep dive, claim, reference, evidence promotion, legacy access, or outline
drafting occurred.

The joined register records 19 proposed `read_only` dispositions and one
proposed exclusion, nine intentionally shallow repository screens, requested
and observed redirects, visible-version-versus-pin state, evidence posture,
lineage limits, and material catalog corrections. The standalone diagnostic
audit passes at `complete` with 57 native observations, zero unresolved
observations, zero claims, and nine resolved `repository_shallow` warnings.
The consolidated diagnostic audit also passes at
`complete_with_declared_manual_sources` with eight native boundaries, 346
native observations, 52 unique opened source identities, 49 `read_only`
dispositions, three exclusions, zero searches, zero claims, and zero unresolved
observations.

This execution record exhausts V2-D009's opening authority. It does not approve
the core-02 dispositions or authorize core-03. The maintainer must review the
completed package before the next decision.

## V2-D010 — Core-02 method approved and third calibration authorized

**Status:** Approved
**Date:** 2026-07-20

### Decision

Approve continued use of the `awesome-screen-core-02` direct-screen method,
including the expanded per-family register fields established by core-01 and
tested again in core-02. This approval covers the method only. The maintainer's
approval did not explicitly ratify core-02's nineteen proposed `read_only`
dispositions, one proposed exclusion, or catalog corrections, so those remain
proposed rather than silently acquiring authority.

Authorize only the exact 20-family `awesome-screen-core-03` batch in
`research/outline-development/awesome-screening-plan.json` at commit
`3c66817a1f7a43adf7492451f859c501f1dfee7c`, file SHA-256
`8ce00b2a284a2f789972f3322586497ff0450b734d3cf2d3ad8aec5d8f0169fc`.
This decision supersedes only that batch's historical
`proposed_not_authorized` field in the immutable proposal; membership,
screening extent, and second-hop prohibition remain fixed.

### Boundaries

Core-03 may directly screen each registered URL only for frozen family and
occurrence joins, requested and observed identity, transport accessibility,
substantive inspectability, exact inspected surface, visible version versus
actual pin, repository-shallow state, actual source form, relevance, evidence
posture, visible lineage or alias state, catalog correction, schema friction,
and proposed disposition.

It does not authorize search, identity-resolution queries, manual redirect
traversal, second-hop or bibliography traversal, reopening core-01 or core-02,
implementation or technique deep reading, claims, evidence promotion, outline
drafting, legacy readmission, or another batch.

### Consequences and next gate

Commit this authority checkpoint before the first core-03 interaction. Then
screen the exact registered URLs, reconcile the diagnostic provenance, apply
the approved method, validate and review the completed package, and stop at the
core-03 source-screening gate. No later batch opens implicitly.

### Design-history disposition

`none` — the exact partial approval and bounded authorization are fully
represented by this canonical decision; the brief approval exchange adds no
essential rationale.

### Approval record

The maintainer explicitly approved core-02's method and authorized
`awesome-screen-core-03` on 2026-07-20. The response did not explicitly approve
core-02's individual dispositions or catalog corrections.

### Execution record

Core-03 completed under this authorization on 2026-07-20. Its native boundary
contains 31 direct-open events for the 20 frozen families and registered URLs,
producing exactly 20 source IDs. The eleven additional events were
same-literal-URL content recoveries or
exact-URL access retries: no alternate route, query, search result, manual
redirect traversal, second hop, prior-batch reopen, implementation deep dive,
claim, reference, evidence promotion, legacy access, or outline drafting
occurred.

The joined register preserves all 22 frozen occurrence joins and records 17
proposed `read_only` dispositions, three proposed exclusions, nine
intentionally shallow repository screens, requested and observed route changes,
visible-version-versus-pin state, evidence posture, recurrence and lineage
limits, and material catalog corrections. The standalone diagnostic audit
passes at `complete` with 39 native observations, zero unresolved observations,
zero claims, and nine resolved `repository_shallow` warnings. The consolidated
diagnostic audit also passes at `complete_with_declared_manual_sources` with
nine native boundaries, 385 native observations, 72 unique opened source
identities, 66 `read_only` dispositions, six exclusions, zero searches, zero
claims, and zero unresolved observations.

This execution record exhausts V2-D010's opening authority. It does not approve
the core-03 dispositions, retroactively approve core-02's proposed
dispositions or corrections, or authorize core-04. The maintainer must review
the completed package before the next decision.

## V2-D011 — Outstanding calibration results approved and fourth calibration authorized

**Status:** Approved
**Date:** 2026-07-20

### Decision

Approve the exact nineteen `read_only` dispositions, one `excluded`
disposition, and catalog corrections recorded in
`research/outline-development/awesome-screen-core-02.md`.

Approve continued use of the direct-screen method as exercised in core-03,
including its expanded per-family register, and approve the exact seventeen
`read_only` dispositions, three `excluded` dispositions, and catalog
corrections recorded in
`research/outline-development/awesome-screen-core-03.md`.

Authorize only the exact 20-family `awesome-screen-core-04` batch in
`research/outline-development/awesome-screening-plan.json` at commit
`3c66817a1f7a43adf7492451f859c501f1dfee7c`, file SHA-256
`8ce00b2a284a2f789972f3322586497ff0450b734d3cf2d3ad8aec5d8f0169fc`.
The batch contains 20 unique registered direct URLs and 22 frozen occurrence
joins, zero identity-resolution queries, screening extent only, and a
prohibited second hop. This decision supersedes only core-04's historical
`proposed_not_authorized` field in the immutable proposal; membership, URLs,
occurrence joins, planned surfaces, extent, and prohibitions remain fixed.

The maintainer's phrase “approve everything” is bounded by the immediately
preceding core-02 and core-03 gate items. It is not blanket authority for other
batches or later program stages.

### Approval limits

Approving these dispositions and corrections ratifies screening results only.
It admits no subject evidence, proves no source claim or effectiveness result,
and adopts no catalog category, topic, taxonomy, outline, or curriculum. An
access-based exclusion is not a judgment of topic irrelevance or permanent
unavailability. Approval of the 21-batch intended scope still does not
authorize automatic execution.

### Boundaries

Core-04 may interact only with each literal registered direct URL to establish
the frozen joins, requested and observed identity, transport accessibility,
substantive inspectability, exact inspected surface, visible version versus
actual pin, `repository_shallow` state, actual source form, relevance, evidence
posture, visible lineage or alias state, catalog correction, schema friction,
and proposed disposition. A bounded repeat of the same literal URL is allowed
only for direct-page content recovery or access confirmation and must be fully
counted. Automatic redirects may be observed and recorded but never manually
traversed.

This does not authorize search or identity-resolution queries, topical or
ecosystem search, reopening core-01, core-02, or core-03, manual redirect
traversal, second-hop or bibliography traversal, repository file, code, or
history inspection, implementation or technique deep reading, claims,
references, evidence promotion or maturity, outline or skeleton drafting,
taxonomy adoption, case selection, synthesis, curriculum or learning work,
site work, legacy access or readmission, conversation-packet export, or any
other batch.

### Consequences and next gate

Commit this authority checkpoint before the first core-04 interaction. Then
start a distinct core-04 diagnostic native boundary, screen the exact
registered URLs, reconcile the diagnostic provenance, validate and review the
completed package, and stop at the core-04 source-screening gate. No core-05 or
later batch opens implicitly.

### Design-history disposition

`none` — the terse approval adds no new rationale or rejected alternative; the
bounded gate items, exact frozen batch, limits, and consequences are fully
represented by this canonical decision.

### Approval record

The maintainer said “approve everything and continue to core-04” on
2026-07-20. This decision records the bounded gate interpretation above.

### Execution record

Core-04 completed under this authorization on 2026-07-20. Its native boundary
contains 34 direct-open events for exactly 20 resulting source IDs across the
20 frozen families and literal registered URLs. Fourteen additional events
were bounded same-literal-URL content recoveries or access confirmations. No
alternate route, query, search
result, manual redirect traversal, second hop, prior-batch reopen, repository
file or history inspection, implementation deep dive, claim, reference,
evidence promotion, legacy access, or outline drafting occurred.

The joined register preserves all 22 frozen occurrence joins and records 17
proposed `read_only` dispositions and three proposed exclusions: a redirect-only
LangGraph HITL surface, a GitHub 404 for AI Harness Scorecard, and a safe-open
rejection for Beyond Permission Prompts. It also preserves nine mechanically
reported and intentionally resolved `repository_shallow` warnings, including
the inaccessible repository-shaped URL; requested and observed identities;
visible-version-versus-pin state; evidence posture; recurrence and lineage
limits; and material catalog corrections. The standalone diagnostic audit
passes at `complete` with 54 native observations, zero unresolved observations,
zero searches, and zero claims. The consolidated diagnostic audit passes at
`complete_with_declared_manual_sources` with ten native boundaries, 439 native
observations, 92 unique opened source identities, 83 `read_only` dispositions,
nine exclusions, zero searches, zero claims, and zero unresolved observations.

This execution record exhausts V2-D011's opening authority. It does not approve
the core-04 dispositions or catalog corrections, authorize continued method
use, or authorize core-05. The maintainer must review the completed package
before the next decision.
