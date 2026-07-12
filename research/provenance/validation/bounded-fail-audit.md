# Provenance Audit: bounded-validation

**Generated:** 2026-07-12T00:42:40.130Z
**Completeness:** `complete`
**Promotion gate:** BLOCKED

## Funnel

| Stage | Count |
| --- | ---: |
| searches | 1 |
| searches_with_incomplete_result_capture | 0 |
| returned | 5 |
| opened | 4 |
| read_only | 1 |
| referenced | 2 |
| excluded | 1 |
| claims | 2 |
| verifications | 0 |
| native_boundaries | 1 |
| native_observations | 1 |
| automatically_resolved_observations | 0 |
| human_resolved_observations | 0 |
| unresolved_observations | 1 |
| linked_observations | 0 |
| not_research_observations | 0 |
| observation_resolution_batches | 0 |
| manual_capture_actions | not measured |
| semantic_batch_actions | not measured |

## Channel coverage

- Planned: general web search, GitHub repository search
- Actual: general web search

## Searches

| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
| fx-Q1 | general web search | bounded provenance fixture | validation | fixture search | 5 | 5 | complete | none |

## Host distribution

- arxiv.org: 3
- github.com: 1

## Source distributions

- host: arxiv.org=3, github.com=1
- organization: Fixture A=1, Fixture B=1, Fixture C=1, Example=1
- source_type: paper=3, repository=1
- publication_year: unspecified=4
- primary_secondary: unspecified=4
- evidence_lineage: unspecified=4

## Repository depth

- fx-source-d: README; unpinned


GitHub source-funnel totals: returned=1, opened=1, readme_only=1, code_inspected=0, test_inspected=0, history_inspected=0, pinned=0, referenced=1

Captured local-repository observation totals: observations=0, code_inspected=0, test_inspected=0, history_inspected=0, commit_captured=0

## Transcript retention

- None recorded

## Complete source table

| Source ID | Host | Type | Returned | Opened | Inspection | Surfaces | Disposition | Version | Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fx-source-a | arxiv.org | paper | yes | yes | full_substantive | paper | referenced | unspecified | tools/provenance/fixtures/missing-a.md |
| fx-source-b | arxiv.org | paper | yes | yes | partial_substantive | paper | read_only | unspecified | — |
| fx-source-c | arxiv.org | paper | yes | yes | screening | abstract | excluded | unspecified | — |
| fx-source-d | github.com | repository | yes | yes | screening | README | referenced | live_unpinned | tools/provenance/fixtures/missing-d.md |
| fx-source-e | example.net | blog | yes | no | not_inspected | — | none | unspecified | — |

## Blocking errors

- `missing_source_record`: Referenced source lacks an existing full record: fx-source-a
- `missing_source_record`: Referenced source lacks an existing full record: fx-source-d
- `missing_claim_declaration`: Claim reference has no canonical declaration: bounded-validation-synthesis-fixture-C001
- `missing_verification`: Claim mapping lacks primary verification: bounded-validation-synthesis-fixture-C001 -> fx-source-a @ section 2
- `missing_claim_declaration`: Claim reference has no canonical declaration: bounded-validation-synthesis-fixture-C002
- `missing_verification`: Claim mapping lacks primary verification: bounded-validation-synthesis-fixture-C002 -> fx-source-d @ src/loop.ts:10
- `unpinned_implementation_claim`: Implementation claim uses an unpinned source: fx-source-d
- `unreconciled_native_interaction`: Native research-capable interaction is unreconciled: fx-native-unreconciled
- `native_source_missing`: Neither runtime transcript nor durable archive is available for fx-boundary

## Warnings requiring response

- `planned_channel_missing`: Planned channel had no search: GitHub repository search
- `host_concentration`: 3/4 opened sources came from arxiv.org
- `repository_shallow`: fx-source-d was inspected without code, tests, or history
