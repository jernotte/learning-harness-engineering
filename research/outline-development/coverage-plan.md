# V2 Outline Seed Map — Coverage Plan

**Task ID:** `v2-outline-seed-map`
**Declared:** 2026-07-20T15:00:12Z
**Authority:** V2-D005 through V2-D011, approved 2026-07-20
**Current pass:** `awesome-screen-core-04` authorized
**Audit profile:** `diagnostic`
**Target completeness:** `complete_with_declared_manual_sources`

## Decision this pass informs

The direct screen of the exact 20 families in `awesome-screen-core-04` applies
the method approved through V2-D011 while preserving requested and observed
identity, accessibility, substantive inspectability, relevance, scope, source
form, evidence posture, visible lineage, version or pin state, catalog
correction, schema friction, and proposed disposition. The batch is anchored to
`awesome-screening-plan.json` at commit
`3c66817a1f7a43adf7492451f859c501f1dfee7c`. The pass may not search, follow a
second hop, reopen core-01, core-02, or core-03, deep-read a source, choose a
taxonomy, or draft an outline. No other batch may open without another explicit
decision.

## Wave 1 authorization

At the seed-only gate on 2026-07-20, the maintainer approved the exact six
registered Wave 1 source families without revision. Approval authorizes only
their direct inspection for structural effect on the recorded outline
decisions. It does not authorize following their references, treating their
claims as established, promoting evidence, drafting an outline, or substituting
unregistered sources.

Wave 1 is complete. All six approved source families received `read_only`
structural dispositions. No search, resolution query, second-hop open,
implementation deep dive, claim declaration, or evidence promotion occurred.
The exact Wave 2 proposal was never approved or opened and is withdrawn by
V2-D007. Its planned queries were never used.

## Mandatory seed coverage

| Seed ID | Identity | Channel | Complete outline-bearing surface |
| --- | --- | --- | --- |
| `v2-seed-asixiv-2606-00001` | `https://asixiv.org/pdf/curated/2606.00001` | Direct public seed URL | Metadata, abstract, introduction, headings, section summaries or necessary structural prose, conclusion or limitations, references |
| `v2-seed-awesome-harness-engineering` | `https://github.com/ai-boost/awesome-harness-engineering` | Public repository, structure-only | Repository identity, README and repository-local framing, complete category/list organization, contribution guidance when relevant; no implementation code or history beyond identity pinning |
| `v2-seed-local-2606-24937v1` | `/Users/jernotte/Downloads/2606.24937v1_copy.pdf` | Declared manual source | Path, SHA-256, bytes, modification time, independent recheck, metadata, abstract, introduction, headings, section summaries or necessary structural prose, conclusion or limitations, references |
| `v2-curriculum-walkinglabs-learn-harness-engineering` | `https://github.com/walkinglabs/learn-harness-engineering` | Public repository, curriculum structure | Repository identity and pin; English curriculum-bearing README, lecture/project navigation and objectives, sequence, resource-library and reference surface, omissions and assumptions; no implementation deep dive or history beyond identity/lineage checking |

### Post-declaration manual-source access note

The declared Downloads path remained the identity and predeclared manual-set
member, but macOS permitted metadata access while blocking content reads. The
maintainer then added a readable copy at
`/Users/jernotte/dev/learning-harness-engineering/2606.24937v1_copy.pdf`, in the
archived repository checkout. The inspection did not modify that checkout.

The readable copy measured 9,266,428 bytes, had modification time
`2026-06-30T01:27:42-0500`, and produced SHA-256
`7c5a2b81fe135dc9b08221d1da9282f99a7146f043e580eb4809364baff145fe`.
The hash matched independent `shasum` and OpenSSL checks; the size matched
independent `stat` and byte-count checks. The provenance stream retains the
failed access lifecycle, declared identity, inspected path, and rechecks rather
than pretending the original path was directly readable.

## Extraction dimensions

For each seed, record without adopting:

- source-native definitions and vocabulary;
- candidate topics and stated audience or outcomes;
- organizational structure and implied prerequisites;
- assumptions and reference shape;
- omissions, tensions, and counterframes;
- anchoring hazards; and
- materially different organizational possibilities.

For the Awesome README catalog, additionally record every recognized link-like occurrence,
mechanical inclusion or exclusion, exact line and heading path, label, raw and
normalized URL, curator annotation, offline family-key mapping, duplicate or
alias relation, apparent source form, catalog-only triage, and uncertainty.
Catalog metadata never substitutes for opening a source.

Before classification, record a versioned rule manifest and extractor identity
that define the recognized Markdown constructs, relative-target resolution,
URL normalization, family-deduplication rules, exclusion classes, and
fail-closed handling. The generated catalog audit must prove:

- all occurrences = qualifying occurrences + mechanically excluded
  occurrences; and
- every qualifying occurrence maps to exactly one offline family key or one
  syntactically unresolved identity.

An unopened destination has accessibility state `not_assessed`. Only an
authorized earlier open or access attempt may establish accessibility.

## Interaction boundary

- Primary agent only for every external interaction.
- Native rollout:
  `/Users/jernotte/.codex/sessions/2026/07/20/rollout-2026-07-20T00-42-48-019f7e0c-5fbb-7121-873a-3d2df5c0aa79.jsonl`.
- Completed seed and Wave 1 boundaries remain immutable. Each catalog,
  curriculum, or later screening pass receives a separate declared window.
- Re-ingest and reconcile immediately after the first external interaction in
  each new pass and at every Stage 4 checkpoint.
- No transcript-prefix archive is requested and no selective conversation
  packet is authorized.

The first seed open occurred at `2026-07-20T15:01:44.615Z`. The retained native
rollout records an ingest-and-validate pass completing at `15:02:01Z` and a
corrected-window pass completing at `15:02:12Z`; both validated, and the latter
contained exactly the two linked source-interaction observations with no
unknown interaction. The final consolidated boundary was ingested after the
seed-only window closed. Event
`v2-outline-seed-map-first-interaction-reconciliation-verification` records the
targeted check against those native calls without claiming durable transcript
archive coverage.

The Wave 1 window begins at `2026-07-20T16:12:06Z`, immediately before the six
approved direct opens, and closes at `2026-07-20T16:20:46Z`, after the final
authorized same-seed reinspection used to identify unopened Wave 2 leads. The
window contains no topical query or second-hop open. Semantic annotation and
append-only observation resolution are recorded in the Wave 1 event package.

A user-requested, top-level Walking Labs README orientation occurred after the
Wave 1 checkpoint but before V2-D007 was recorded. It followed no outbound
link and informed only the method correction. The catalog provenance package
must retro-ingest and explicitly label that tight native window; it may not
pretend the interaction occurred after the amendment. It receives the normal
`source_opened` -> `source_inspected` -> `read_only` lifecycle with inspection
extent `screening` and the exact scope `top-level README; no outbound links
followed`.

The V2-D007 repository and catalog window begins at
`2026-07-20T20:08:52Z`, immediately before pinning and inspecting only
`walkinglabs/learn-harness-engineering`, the already pinned
`ai-boost/awesome-harness-engineering`, and the course-named
`walkinglabs/awesome-harness-engineering` lineage identity. Repository-local
curriculum and catalog surfaces are authorized; no outbound catalog destination
or course resource is opened in this window.

The immediate pinning window closes at `2026-07-20T20:09:35Z`. The declared
structural inspection window runs from `20:09:35Z` through `20:38:25Z`, and a
focused finalization window runs from `20:38:25Z` through `20:43:00Z`. The
slightly adjacent boundaries contain no duplicate call at their shared cutoff.
All six total Stage 4 native boundaries reconcile: 230 observations, zero
unreconciled observations, zero claims, and no catalog-destination source-open
event. The consolidated diagnostic audit passes at
`complete_with_declared_manual_sources`.

One evidence-location diagnostic over-broadly pattern-scanned `docs/en`
Markdown and returned isolated matches from code/template navigation files.
Those matches support no analysis, did not trigger implementation inspection,
and are explicitly retained in the source lifecycle and curriculum artifact.

The `awesome-screen-core-01` native boundary is declared from
`2026-07-20T21:57:45Z`, after the V2-D008 authority checkpoint at commit
`949f3f1b61449c9fc15581e836bfb680b185918d`. It covers only direct opens of the
20 registered URLs, the immediate adapter-reconciliation check, and the local
control actions needed to close the batch. The last authorized direct-source
interaction completed before `2026-07-20T22:03:36Z`; that timestamp closes the
external-interaction portion of this batch boundary. Later local reconciliation
and checkpoint actions do not extend permission to open another source.

The `awesome-screen-core-02` native boundary is declared from
`2026-07-20T22:54:34Z`, after the committed V2-D009 authority checkpoint at
`ea39a73121ca005cd19f136e03967ccf57cf1e48`. It closes before
`2026-07-20T22:59:08Z` and contains 57 native observations, 21 direct opens for
exactly 20 frozen source IDs and URLs, and no search or returned-result event.
The GitHub Governing Agents URL is the sole repeated direct open. Ten
conservative local provenance-control observations are reciprocally linked;
zero observations remain unresolved. Later reconciliation and checkpoint
actions do not extend permission to open another source.

The `awesome-screen-core-03` native boundary is declared from
`2026-07-21T00:15:24Z`, after the committed V2-D010 authority checkpoint at
`4d56178`. It closes before `2026-07-21T00:20:48Z` and contains 39 native
observations, 31 direct opens for exactly 20 frozen source IDs and URLs, and no
search or returned-result event. Eleven additional direct opens were bounded
same-URL recoveries or exact-URL access retries. Nine conservative local
provenance-control observations are reciprocally linked; zero observations
remain unresolved. Later reconciliation and checkpoint actions do not extend
permission to open another source.

## Search and traversal limits

- No topical or ecosystem search.
- During the now-closed batch boundary, only the 20 direct URLs registered in
  `awesome-screen-core-01` were permitted to open.
- During the now-closed second batch boundary, only the 20 direct URLs
  registered in `awesome-screen-core-02` were permitted to open.
- During the now-closed third batch boundary, only the 20 direct URLs
  registered in `awesome-screen-core-03` were permitted to open.
- During the current fourth batch boundary, only the 20 literal direct URLs
  registered in `awesome-screen-core-04` may open. Core-01, core-02, and
  core-03 may not reopen. All other catalog batches and every identity-
  resolution query remain blocked.
- No second-hop traversal, destination bibliography harvesting,
  implementation deep dive, or legacy-material access.
- Mechanical README extraction performs no network request and creates no
  source-open event for outbound URLs.
- An exact-title or identifier-resolution query for an ambiguous catalog
  identity requires separate maintainer approval and predeclared intent.

## Stop and checkpoint

Stop when all 20 `awesome-screen-core-04` families have an honest direct-screen
result or recorded access failure; each source has the required identity,
surface, accessibility, relevance, scope, evidence posture, lineage, and
proposed disposition; schema friction and catalog corrections are explicit;
and the diagnostic boundary is reconciled. Present that complete calibration
for maintainer review before opening another batch.
