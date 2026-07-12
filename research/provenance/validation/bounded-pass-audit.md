# Provenance Audit: bounded-validation

**Generated:** 2026-07-12T00:42:53.086Z
**Completeness:** `complete`
**Promotion gate:** PASS

## Funnel

| Stage | Count |
| --- | ---: |
| searches | 2 |
| searches_with_incomplete_result_capture | 0 |
| returned | 5 |
| opened | 4 |
| read_only | 1 |
| referenced | 2 |
| excluded | 1 |
| claims | 2 |
| verifications | 2 |
| native_boundaries | 1 |
| native_observations | 2 |
| automatically_resolved_observations | 2 |
| human_resolved_observations | 0 |
| unresolved_observations | 0 |
| linked_observations | 1 |
| not_research_observations | 1 |
| observation_resolution_batches | 0 |
| manual_capture_actions | not measured |
| semantic_batch_actions | not measured |

## Channel coverage

- Planned: general web search, GitHub repository search
- Actual: general web search, GitHub repository search

## Searches

| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
| fxp-Q1 | general web search | bounded provenance fixture | validation | fixture search | 4 | 4 | complete | none |
| fxp-Q2 | GitHub repository search | bounded repository fixture | validation | fixture GitHub search | 1 | 1 | complete | none |

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

- fxp-source-d: README, code, tests; pinned


GitHub source-funnel totals: returned=1, opened=1, readme_only=0, code_inspected=1, test_inspected=1, history_inspected=0, pinned=1, referenced=1

Captured local-repository observation totals: observations=0, code_inspected=0, test_inspected=0, history_inspected=0, commit_captured=0

## Transcript retention

- None recorded

## Complete source table

| Source ID | Host | Type | Returned | Opened | Inspection | Surfaces | Disposition | Version | Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fxp-source-a | arxiv.org | paper | yes | yes | full_substantive | paper | referenced | unspecified | tools/provenance/fixtures/source-a.md |
| fxp-source-b | arxiv.org | paper | yes | yes | partial_substantive | paper | read_only | unspecified | — |
| fxp-source-c | arxiv.org | paper | yes | yes | screening | abstract | excluded | unspecified | — |
| fxp-source-d | github.com | repository | yes | yes | partial_substantive | README, code, tests | referenced | pinned | tools/provenance/fixtures/source-d.md |
| fxp-source-e | example.net | blog | yes | no | not_inspected | — | none | unspecified | — |

## Blocking errors

- None

## Warnings requiring response

- `host_concentration` (resolved): 3/4 opened sources came from arxiv.org — Deliberate fixture concentration retained to prove that an explained warning remains visible without blocking promotion.
