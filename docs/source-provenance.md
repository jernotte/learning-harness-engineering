# V2 Source Provenance and Coverage

## Status and purpose

V2 retains the tested source-capture and claim-audit contract independently of
the retired research program. This document governs how authorized research
activity becomes durable evidence. It does not define what V2 should research
or how the approved outline will be organized.

The system must make selection visible: what was searched, returned, opened,
inspected, retained as background, referenced, or excluded. Correct citations
alone do not establish breadth, independence, or completeness.

## Provenance funnel

```text
search executed
  -> observed results returned
  -> source opened
  -> source inspected
  -> read_only, referenced, or excluded
  -> referenced evidence mapped to a material claim
```

A search snippet is never evidence. If its content affects analysis, open and
log the source.

Catalog-led discovery has a separate pre-open funnel:

```text
catalog link occurrence enumerated
  -> non-resource exclusion or candidate occurrence
  -> canonical source family assigned or identity left unresolved
  -> catalog-context triage recommendation
  -> maintainer-approved source opening
  -> source inspected
  -> read_only, referenced, or excluded
```

Enumeration and triage do not mean a destination was opened. A catalog title,
category, or annotation remains curator-reported metadata until the linked
source is directly inspected.

`Read only` means the source was inspected and retained as context or a lead but
does not support a current artifact. `Referenced` means it supports, opposes, or
materially contextualizes a declared claim. `Excluded` is available only after
inspection and requires a reason. Disposition changes are append-only.

## Catalog occurrences and source levels

A catalog occurrence is below the source-family level. Each occurrence retains
the pinned catalog identity, exact README line and heading path, displayed
label, raw and normalized URL, curator annotation, mechanical inclusion or
exclusion class, and canonical-family mapping when one can be established
without network access. Repeated placements remain separate occurrences even
when they map to one family.

Counts must distinguish all Markdown link occurrences, mechanically excluded
non-resource occurrences, qualifying resource occurrences, normalized URLs,
canonical families, unresolved identities, opened families, and accessibility
states. A previously unopened destination is `not_assessed`; only an authorized
open or access attempt may establish accessible or inaccessible. “Complete
catalog” means complete against one pinned file and its declared qualifying-link
rules, not complete coverage of the field or Internet.

The versioned catalog rule manifest records the extractor identity, recognized
Markdown constructs, relative-target resolution, URL normalization,
family-deduplication rules, exclusion classes, and fail-closed behavior. Its
deterministic audit must enforce both accounting invariants: all extracted
occurrences equal qualifying plus mechanically excluded occurrences, and each
qualifying occurrence maps to exactly one canonical family or one unresolved
identity. Catalog triage fields and values are not provenance dispositions and
must not generate lifecycle events for unopened leads.

Every opened source receives a lightweight identity and source events. A source
used by a material claim also receives a full narrative record under
`research/sources/` with exact locations, version, evidence assessment,
dependencies, contradictions, and limits.

A coherent repository, paper package, or documentation set may use one family
record with exact files, pages, tests, commits, or sections represented as child
locations. Counts must distinguish source items from source families so a large
site or repository does not masquerade as broad independent coverage.

## Required search events

Each search event records:

- cycle or bounded task, pass, agent, timestamp, and stable query ID;
- exact query and query family;
- channel, provider, filters, purpose, and requested result limit;
- intended coverage dimension;
- observed returned identities when available;
- returned count, pagination or cursor state, truncation, and pages examined.

Audits report the observed provider window, never every result that may exist
outside it. A parsed empty result is a real zero. Truncated or unparseable output
has unknown counts and incomplete capture; it must not be rewritten as zero.

## Required source events

Each opened source event records:

- stable source ID and canonical URL or local identity;
- parent family, host, organization, source type, and evidence lineage;
- task, pass, agent, timestamp, and discovery provenance;
- pages, sections, files, tests, commits, or history inspected;
- inspection extent: screening, partial substantive, or full substantive;
- inspected surfaces using the schema vocabulary;
- disposition and reason;
- artifact and claim IDs when referenced;
- version or freshness state and primary-verification state.

For catalog-discovered sources, discovery provenance additionally retains all
catalog occurrence IDs and any known duplicate, alias, fork, mirror, shared-
author, shared-dataset, or derivative-summary relationship. Unverified
canonicalization remains explicit rather than being forced into one family.

Host and lineage are separate. Shared hosting does not imply common origin, and
separate articles do not imply independence.

## Claim-evidence ledger

Every material claim in an analysis or synthesis receives a globally unique V2
claim ID. One canonical ledger owns the exact claim text. It records epistemic
kind, supporting and opposing sources, exact locations, primary verification,
version limits, confidence, and artifact location.

Claim IDs are never reused. A wording-only clarification may retain an ID with
revision history; a material change in scope or meaning creates a new ID and
supersedes the old one.

Transitional prose and purely structural outline labels do not require
artificial claims. A statement that establishes a consequential fact,
comparison, category rationale, causal explanation, pattern, or recommendation
does. Before review, the primary records a prose-to-ledger attestation and a
review-scope manifest covering every material artifact.

Primary verification is an event, not a checkbox. Each referenced
claim/source/location mapping records the verifier, date, inspected version,
outcome, and whether the evidence supports the wording and scope. A subagent
cannot verify its own evidence for promotion.

## Outline-development boundary

The approved outline-development brief at
`research/outline-development/brief.md` controls the Stage 4 capture boundary
and audit treatment. The outline should avoid unnecessary subject-matter
claims. Maintainer approval of an outline approves objectives, scope,
organization, and sequence; it does not promote seed statements into research
findings.

Every opened seed, curriculum candidate, catalog-screened family, or approved
substantive source still requires source events and a final disposition.
Unopened catalog occurrences remain lead inventory and do not receive false
source-open events. If the outline or supporting rationale must make a material
factual claim, the normal record, ledger, mapping, and verification rules apply.

## Native observation resolution

Runtime adapters preserve derived observation files; do not hand-edit them to
settle ambiguity. Append-only `observation_resolution` events may link an
unresolved observation to reciprocal canonical events or mark an eligible
generic-shell observation `not_research` with a reason.

Each resolution names the immediately preceding effective state. Stale or
competing transitions block the audit. Known external interactions and unknown
native tool shapes must be linked or remain unresolved; they cannot be hidden as
non-research.

## Completeness labels

- `complete`: technically enforced capture or complete transcript
  reconciliation covers every interaction in the declared boundary.
- `complete_with_declared_manual_sources`: instrumented activity is complete and
  manual inputs come only from an independently enumerable set whose members are
  individually logged.
- `partial`: known activity was not captured.
- `reconstructed`: provenance was recreated from surviving material.
- `unknown`: completeness cannot be assessed.

Agent attestation alone cannot establish completeness. `Partial`,
`reconstructed`, and `unknown` material may support individually verified
claims, but cannot establish search breadth, balance, marginal information,
absence of evidence, or saturation without an explicit maintainer waiver whose
scope remains visible.

## Human audit view

Generated audits report:

- searches and query families by channel;
- planned versus actual coverage;
- returned, opened, read-only, referenced, and excluded counts;
- distribution by host, organization, source type, year, evidence lineage, and
  primary or secondary status;
- repository inspection depth and pin state;
- reading depth and disposition reasons;
- missing records, mappings, verification, or review scope;
- concentration warnings and their dispositions;
- native-observation resolution and completeness status.

At a catalog checkpoint, a separate deterministic catalog audit reports raw
occurrence totals, qualifying and mechanically excluded counts, normalized URL
and canonical-family counts, duplicate and unresolved mappings, triage
distribution, and accessibility state. It is derived from the versioned rule
manifest plus the occurrence and family artifacts. The retained provenance
audit remains unchanged and continues to report only source lifecycle, runtime
capture, claims, and evidence completeness; unopened catalog leads never become
synthetic source events. These catalog measures do not change evidence
maturity.

Warnings are prompts for judgment, not quotas. A checkpoint either performs
more work or explains why the concentration fits the bounded question.

## Review and promotion gates

No claim-bearing artifact is promoted unless every opened source has a final
disposition, every referenced source has a full record, every material claim has
exact evidence mappings, every mapping has valid primary verification,
implementation facts are pinned or explicitly live, the declared capture
boundary reconciles, and all audit errors and warnings are resolved or
explained.

Generated audits validate declared mechanics. They do not prove that omitted
prose claims were discovered, that evidence is sufficient, or that a conclusion
is true.

## Capture architecture and limits

The retained implementation uses native Codex rollout ingestion as the
completeness backstop and explicit semantic events for intent, inspection depth,
disposition, exact claim use, and verification. It is documented in
`docs/provenance-architecture.md`.

The adapter is a tested inherited baseline, not permanent proof of current
runtime coverage. Unknown shapes fail closed. Change the infrastructure only
when authorized real work exposes a consequential failure; do not add adapters,
heuristics, or dashboards speculatively.

Manual `result_returned` events are not mechanically bound to native output.
Any review relying on them must compare their canonical URLs with the retained
native boundary and record the reviewer, date, scope, and outcome.

Every complete native boundary used for promotion requires a durable
fingerprint-verified archive record. Raw transcript prefixes may contain private
prompts and tool output. Writing them outside this repository requires explicit
privacy approval, owner-only permissions, an exact boundary, and recorded hash,
byte count, line count, date, runtime source, and archive path.

That full-boundary rule applies only when a research boundary is used for
evidence promotion. Selective design-history packets follow
`docs/design-history.md`; they are privacy-controlled governance context, never
satisfy a `capture_archive` requirement, and do not establish provenance
completeness. Stage 4 performs no promotion and requests no full-prefix archive.
