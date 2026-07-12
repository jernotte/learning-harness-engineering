# Provenance Audit: stage-0-5-real-capture

**Generated:** 2026-07-12T18:06:53.159Z
**Completeness:** `complete`
**Audit profile:** `diagnostic`
**Promotion gate:** PASS

## Funnel

| Stage | Count |
| --- | ---: |
| searches | 1 |
| search_updates | 0 |
| applied_search_updates | 0 |
| rejected_search_updates | 0 |
| searches_with_incomplete_result_capture | 0 |
| returned | 3 |
| returned_source_identities_recovered | 3 |
| opened | 1 |
| read_only | 0 |
| referenced | 1 |
| excluded | 0 |
| declared_claims | 2 |
| claims | 2 |
| claim_evidence_mappings | 2 |
| verifications | 2 |
| unverified_claim_evidence_mappings | 0 |
| native_boundaries | 1 |
| native_observations | 3 |
| automatically_resolved_observations | 3 |
| human_resolved_observations | 0 |
| unresolved_observations | 0 |
| linked_observations | 3 |
| not_research_observations | 0 |
| observation_resolution_batches | 0 |
| manual_capture_actions | 0 |
| semantic_batch_actions | 1 |

## Channel coverage

- Planned: official documentation search, local repository inspection
- Actual: official documentation search, local repository inspection

## Searches

| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
| auto-Q-7ace547f2e79c9 | official documentation search | Codex PostToolUse WebSearch coverage | official documentation lookup | OpenAI Developer Docs MCP | 3 | 3 | complete | observed window smaller than total hits |

## Search-update history

| Update event | Search event | From | To | Effective state | Reason |
| --- | --- | --- | --- | --- | --- |
| — | — | — | — | — | — |

## Host distribution

- learn.chatgpt.com: 1

## Source distributions

- host: learn.chatgpt.com=1
- organization: OpenAI=1
- source_type: official documentation=1
- publication_year: unspecified=1
- primary_secondary: primary=1
- evidence_lineage: OpenAI documentation=1

## Repository depth

- No referenced repository sources
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=history, code; commit=dfdffdc7ca76eda4ebb209f2074957ff0f1f9b70

GitHub source-funnel totals: returned=0, opened=0, readme_only=0, code_inspected=0, test_inspected=0, history_inspected=0, pinned=0, referenced=0

Captured local-repository observation totals: observations=1, code_inspected=1, test_inspected=0, history_inspected=1, commit_captured=1

## Claim-evidence coverage

| Claim ID | Kind | Supporting sources | Opposing sources | Mappings | Verified | Missing verification | Confidence |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| stage-0-5-real-capture-analysis-provenance-architecture-C001 | source-reported claim | auto-source-99bc0cb8da0c7a35 | — | 1 | 1 | 0 | high for the live documentation observed on 2026-07-11 |
| stage-0-5-real-capture-analysis-provenance-architecture-C002 | engineering recommendation | — | — | 1 | 1 | 0 | high for the evaluated Codex runtime and documented hook surface |

## Transcript retention

- native-boundary-fd4a1895c9a1600a819e: /Users/jernotte/dev/reference-materials/research/provenance-transcripts/stage-0-5-real-capture/native-boundary-fd4a1895c9a1600a819e-prefix.jsonl; sha256=fd4a1895c9a1600a819ee7cca0b1f95df6c22e15cb46d49096870c1152147414; bytes=5434209; lines=1-1641; mode=0600

## Provenance waivers

- None recorded

## Complete source table

| Source ID | Host | Type | Returned | Opened | Inspection | Surfaces | Disposition | Version | Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| auto-source-6959106e44077cd3 | learn.chatgpt.com | official documentation | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-99bc0cb8da0c7a35 | learn.chatgpt.com | official documentation | yes | yes | partial_substantive | documentation | referenced | live_unpinned | research/provenance/validation/sources/openai-hooks.md |
| auto-source-f1bfabe51f8471f2 | learn.chatgpt.com | official documentation | yes | no | not_inspected | — | none | unspecified | — |

## Blocking errors

- None

## Warnings requiring response

- None
