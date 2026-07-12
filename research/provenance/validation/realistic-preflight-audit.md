# Provenance Audit: stage-0-5-realistic-preflight

**Generated:** 2026-07-12T18:06:57.473Z
**Completeness:** `complete`
**Audit profile:** `diagnostic`
**Promotion gate:** BLOCKED

## Funnel

| Stage | Count |
| --- | ---: |
| searches | 1 |
| search_updates | 1 |
| applied_search_updates | 1 |
| rejected_search_updates | 0 |
| searches_with_incomplete_result_capture | 1 |
| returned | 0 |
| returned_source_identities_recovered | 0 |
| opened | 0 |
| read_only | 0 |
| referenced | 0 |
| excluded | 0 |
| declared_claims | 0 |
| claims | 0 |
| claim_evidence_mappings | 0 |
| verifications | 0 |
| unverified_claim_evidence_mappings | 0 |
| native_boundaries | 1 |
| native_observations | 38 |
| automatically_resolved_observations | 36 |
| human_resolved_observations | 2 |
| unresolved_observations | 0 |
| linked_observations | 11 |
| not_research_observations | 27 |
| observation_resolution_batches | 1 |
| manual_capture_actions | not measured |
| semantic_batch_actions | not measured |

## Channel coverage

- Planned: None declared
- Actual: official documentation search, local repository inspection

## Searches

| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
| auto-Q-ef0b810ee18675 | official documentation search | Codex hooks app server JSONL events | pending | OpenAI Developer Docs MCP | 10 | unknown | incomplete_truncated | runtime output truncation detected; returned-result window is incomplete |

## Search-update history

| Update event | Search event | From | To | Effective state | Reason |
| --- | --- | --- | --- | --- | --- |
| search-update-63a82b79dc7643a4ce | auto-search-21ec016aa02182c152 | complete | incomplete_truncated | applied | The archived native output at line 1402 begins with an explicit runtime truncation warning and contains unparseable partial search JSON; the historical automatic zero-result fields are not supported. |

## Host distribution

- None

## Source distributions

- host: None
- organization: None
- source_type: None
- publication_year: None
- primary_secondary: None
- evidence_lineage: None

## Repository depth

- No referenced repository sources
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=history, code, tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=history, code; commit=unresolved

GitHub source-funnel totals: returned=0, opened=0, readme_only=0, code_inspected=0, test_inspected=0, history_inspected=0, pinned=0, referenced=0

Captured local-repository observation totals: observations=10, code_inspected=7, test_inspected=6, history_inspected=2, commit_captured=0

## Claim-evidence coverage

| Claim ID | Kind | Supporting sources | Opposing sources | Mappings | Verified | Missing verification | Confidence |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| — | — | — | — | — | — | — | — |

## Transcript retention

- None recorded

## Provenance waivers

- None recorded

## Complete source table

| Source ID | Host | Type | Returned | Opened | Inspection | Surfaces | Disposition | Version | Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| — | — | — | — | — | — | — | — | — | — |

## Blocking errors

- `incomplete_search_result_capture`: Search result capture is incomplete_truncated: auto-Q-ef0b810ee18675

## Warnings requiring response

- None
