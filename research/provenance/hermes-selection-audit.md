# Provenance Audit: field-landscape

**Generated:** 2026-07-18T23:44:04.844Z
**Completeness:** `complete`
**Audit profile:** `provisional-promotion`
**Promotion gate:** PASS

## Funnel

| Stage | Count |
| --- | ---: |
| searches | 1 |
| search_updates | 1 |
| applied_search_updates | 1 |
| rejected_search_updates | 0 |
| searches_with_incomplete_result_capture | 0 |
| returned | 20 |
| returned_source_identities_recovered | 20 |
| opened | 4 |
| read_only | 0 |
| referenced | 4 |
| excluded | 0 |
| declared_claims | 10 |
| claims | 18 |
| claim_evidence_mappings | 18 |
| verifications | 18 |
| unverified_claim_evidence_mappings | 0 |
| native_boundaries | 2 |
| native_observations | 51 |
| automatically_resolved_observations | 47 |
| human_resolved_observations | 4 |
| unresolved_observations | 0 |
| linked_observations | 47 |
| not_research_observations | 4 |
| observation_resolution_batches | 1 |
| manual_capture_actions | 8 |
| semantic_batch_actions | 1 |

## Channel coverage

- Planned: generic web search, local repository inspection
- Actual: generic web search, local repository inspection

## Searches

| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
| auto-Q-b38c4e22e81bc7 | generic web search | site:github.com/NousResearch/hermes-agent releases tags Hermes Agent \|\| site:github.com/NousResearch/hermes-agent OpenClaw migration \|\| site:github.com/NousResearch/hermes-agent README architecture agent loop memory skills | Hermes repository identity, release, architecture, and OpenClaw relationship | web.run | not limited | 20 | complete | none observed |

## Search-update history

| Update event | Search event | From | To | Effective state | Reason |
| --- | --- | --- | --- | --- | --- |
| hermes-selection-search-semantics | auto-search-b16962d068edc842ab | complete | complete | applied | Supply the agent-owned semantics for the mechanically captured targeted repository search without changing its result-capture facts. |

## Host distribution

- github.com: 3
- api.github.com: 1

## Source distributions

- host: github.com=3, api.github.com=1
- organization: Browser Use=1, OpenClaw=1, Nous Research=1, GitHub / Nous Research=1
- source_type: repository=3, repository metadata=1
- publication_year: 2026=4
- primary_secondary: primary implementation selection record=1, primary implementation retained record=1, primary implementation=1, primary platform metadata=1
- evidence_lineage: Browser Use 0.13.4=1, OpenClaw v2026.6.6 reviewed case=1, NousResearch/hermes-agent v0.18.2=1, NousResearch/hermes-agent GitHub metadata=1

## Repository depth

- auto-source-a17476e9d7955152: no inspection surfaces; unpinned
- auto-source-1c536b49866b2838: no inspection surfaces; unpinned
- auto-source-397deee3f229d6bb: no inspection surfaces; unpinned
- auto-source-40f3221b225b449b: no inspection surfaces; unpinned
- auto-source-97dace3f420d9eb6: no inspection surfaces; unpinned
- auto-source-b76d7b99528f89e5: no inspection surfaces; unpinned
- auto-source-875de05d2e10d849: no inspection surfaces; unpinned
- auto-source-48d05d6898c43c61: no inspection surfaces; unpinned
- auto-source-f885b06776bfe135: no inspection surfaces; unpinned
- auto-source-da7cfb35827ca758: no inspection surfaces; unpinned
- auto-source-1dd03a5ac20fd65a: no inspection surfaces; unpinned
- auto-source-e6f85fe0b04350de: no inspection surfaces; unpinned
- auto-source-2cc99bf857fd4bff: no inspection surfaces; unpinned
- auto-source-ea725dbd777a05a3: no inspection surfaces; unpinned
- auto-source-2ca07098833756ce: no inspection surfaces; unpinned
- auto-source-696f0f1aedf66103: no inspection surfaces; unpinned
- auto-source-c02e8aa8748fa613: no inspection surfaces; unpinned
- auto-source-6b89f07a31abfec1: no inspection surfaces; unpinned
- auto-source-bb5eeb6a5fd34aaa: no inspection surfaces; unpinned
- auto-source-6c2983b19c28bff3: no inspection surfaces; unpinned
- CP2-S009: README, documentation, code, tests, history, releases, command_output; pinned
- CP2-S005: code, history; pinned
- CP2-S004: README, releases; pinned
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=history, code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=history, code, tests, documentation; commit=9de9c25f620ff7f1ce0fd5457d596052d5159596
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=history, code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=history, code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=history, code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=code, tests, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=history, code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=history, code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=history, code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=history, code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=history, tests; commit=9de9c25f620ff7f1ce0fd5457d596052d5159596
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=history, code; commit=b7751df34688835a108e0d630f3495fc11f3df79
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=history; commit=9de9c25f620ff7f1ce0fd5457d596052d5159596
- captured local inspection: /Users/jernotte/dev/reference-materials/research/provenance-transcripts/hermes-selection/hermes-selection-prefix.jsonl; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/provenance-transcripts/hermes-selection/hermes-selection-prefix.jsonl; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=history; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=history; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2; surfaces=command_output; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/sessions; surfaces=command_output; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/sessions; surfaces=command_output; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/sessions; surfaces=command_output; commit=unresolved

GitHub source-funnel totals: returned=20, opened=3, readme_only=1, code_inspected=2, test_inspected=1, history_inspected=2, pinned=3, referenced=3

Captured local-repository observation totals: observations=45, code_inspected=30, test_inspected=4, history_inspected=14, commit_captured=4

## Claim-evidence coverage

| Claim ID | Kind | Supporting sources | Opposing sources | Mappings | Verified | Missing verification | Confidence |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| field-landscape-selection-hermes-pinning-C001 | verified implementation fact | CP2-S009, HS-S001 | — | 2 | 2 | 0 | high for identity and commit |
| field-landscape-selection-hermes-pinning-C002 | verified implementation fact | CP2-S009 | — | 1 | 1 | 0 | high for structural classification |
| field-landscape-selection-hermes-pinning-C003 | verified implementation fact | CP2-S009, CP2-S005 | — | 2 | 2 | 0 | high for roots and migration surface |
| field-landscape-selection-hermes-pinning-C004 | verified implementation fact | CP2-S009 | — | 1 | 1 | 0 | high for the two documented examples |
| field-landscape-selection-hermes-pinning-C005 | inference | CP2-S009, CP2-S005 | — | 2 | 2 | 0 | moderate-high |
| field-landscape-selection-hermes-pinning-C006 | source-reported claim | HS-S001 | — | 1 | 1 | 0 | high for snapshot, low applicability to adoption |
| field-landscape-selection-hermes-pinning-C007 | verified implementation fact | CP2-S009 | — | 1 | 1 | 0 | high for counts, bounded interpretation |
| field-landscape-selection-hermes-pinning-C008 | engineering recommendation | — | — | 3 | 3 | 0 | moderate |
| field-landscape-selection-hermes-pinning-C009 | engineering recommendation | — | — | 2 | 2 | 0 | moderate-high |
| field-landscape-selection-hermes-pinning-C010 | engineering recommendation | — | — | 3 | 3 | 0 | high as approved governance |

## Transcript retention

- native-boundary-7a7bced6fabbee080408: /Users/jernotte/dev/reference-materials/research/provenance-transcripts/hermes-selection/hermes-selection-prefix.jsonl; sha256=7a7bced6fabbee0804084ef8b4b3925cfb20b56a407db8e4f1055f81869c4f4b; bytes=32492304; lines=1-8425; mode=0600
- native-boundary-b0f5a079978d68ed8f69: /Users/jernotte/dev/reference-materials/research/provenance-transcripts/hermes-selection/hermes-selection-correction-prefix.jsonl; sha256=b0f5a079978d68ed8f69af12acf3f0f42e7bbff566ef6f5c8f43cf9933df3ea1; bytes=34018633; lines=1-8790; mode=0600

## Provenance waivers

- None recorded

## Complete source table

| Source ID | Host | Type | Returned | Opened | Inspection | Surfaces | Disposition | Version | Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| auto-source-1c536b49866b2838 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-1dd03a5ac20fd65a | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-2ca07098833756ce | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-2cc99bf857fd4bff | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-397deee3f229d6bb | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-40f3221b225b449b | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-48d05d6898c43c61 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-696f0f1aedf66103 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-6b89f07a31abfec1 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-6c2983b19c28bff3 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-875de05d2e10d849 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-97dace3f420d9eb6 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-a17476e9d7955152 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-b76d7b99528f89e5 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-bb5eeb6a5fd34aaa | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-c02e8aa8748fa613 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-da7cfb35827ca758 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-e6f85fe0b04350de | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-ea725dbd777a05a3 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-f885b06776bfe135 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| CP2-S004 | github.com | repository | no | yes | screening | README, releases | referenced | pinned selection record | research/sources/cp2-browser-use-0.13.4.md |
| CP2-S005 | github.com | repository | no | yes | partial substantive | code, history | referenced | pinned reviewed record | research/sources/cp2-openclaw-v2026.6.6.md |
| CP2-S009 | github.com | repository | no | yes | partial substantive | README, documentation, code, tests, history, releases, command_output | referenced | pinned | research/sources/cp2-hermes-agent-v0.18.2.md |
| HS-S001 | api.github.com | repository metadata | no | yes | screening | other, releases, command_output | referenced | live snapshot 2026-07-18 | research/sources/hermes-github-metadata-2026-07-18.md |

## Blocking errors

- None

## Warnings requiring response

- `host_concentration` (resolved): 3/4 opened sources came from github.com — This is a bounded repository selection and pinning amendment, not a landscape breadth pass. GitHub is the primary location for the exact implementation, history, release, and retained comparison records; the amendment makes no source-balance or saturation claim.
- `repository_shallow` (resolved): CP2-S004 was inspected without code, tests, or history — Browser Use is reused only as the existing pinned selection contrast whose deferral cost must remain visible. No Browser Use implementation finding relies on it, and deep inspection would violate the bounded Hermes selection amendment.
