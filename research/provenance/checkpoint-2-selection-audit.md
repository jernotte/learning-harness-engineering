# Provenance Audit: field-landscape

**Generated:** 2026-07-12T19:16:21.511Z
**Completeness:** `complete`
**Audit profile:** `provisional-promotion`
**Promotion gate:** PASS

## Funnel

| Stage | Count |
| --- | ---: |
| searches | 2 |
| search_updates | 0 |
| applied_search_updates | 0 |
| rejected_search_updates | 0 |
| searches_with_incomplete_result_capture | 0 |
| returned | 35 |
| returned_source_identities_recovered | 35 |
| opened | 10 |
| read_only | 0 |
| referenced | 8 |
| excluded | 2 |
| declared_claims | 3 |
| claims | 14 |
| claim_evidence_mappings | 14 |
| verifications | 14 |
| unverified_claim_evidence_mappings | 0 |
| native_boundaries | 3 |
| native_observations | 15 |
| automatically_resolved_observations | 2 |
| human_resolved_observations | 13 |
| unresolved_observations | 0 |
| linked_observations | 13 |
| not_research_observations | 2 |
| observation_resolution_batches | 2 |
| manual_capture_actions | 47 |
| semantic_batch_actions | 1 |

## Channel coverage

- Planned: GitHub repository search, release/history inspection, user-provided material
- Actual: GitHub repository search

## Searches

| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
| CP2-Q001 | GitHub repository search | batch: [site:github.com/badlogic/pi-mono releases pi-mono GitHub; site:github.com/OpenHands software agent SDK releases GitHub; site:github.com/langchain-ai/langgraph releases GitHub; site:github.com/browser-use/browser-use releases GitHub] | candidate identity and release screening | Codex web search | not limited | 17 | complete | none observed |
| CP2-Q002 | GitHub repository search | batch: [site:github.com/openclaw/openclaw/releases OpenClaw latest release; site:github.com/badlogic/pi-mono/releases pi-mono latest release; site:github.com/huggingface/smolagents/releases smolagents latest release; site:github.com/stanford-oval/storm/releases STORM latest release] | candidate identity and release screening | Codex web search | not limited | 18 | complete | none observed |

## Search-update history

| Update event | Search event | From | To | Effective state | Reason |
| --- | --- | --- | --- | --- | --- |
| — | — | — | — | — | — |

## Host distribution

- api.github.com: 1
- local: 1
- github.com: 8

## Source distributions

- host: github.com=8, api.github.com=1, local=1
- organization: earendil-works=1, OpenHands=1, LangChain=2, Browser Use=1, OpenClaw=1, Hugging Face=1, Stanford OVAL=1, SWE-agent=1, GitHub CLI=1
- source_type: repository=8, repository metadata=1, command output=1
- publication_year: unspecified=10
- primary_secondary: primary implementation=8, primary implementation metadata=1, operational metadata=1
- evidence_lineage: Pi repository=1, OpenHands Software Agent SDK repository=1, LangGraph repository=2, Browser Use repository=1, OpenClaw repository=1, smolagents repository=1, STORM repository=1, SWE-agent repository=1, local GitHub CLI configuration=1

## Repository depth

- CP2-R001: no inspection surfaces; unpinned
- CP2-R002: no inspection surfaces; unpinned
- CP2-R003: no inspection surfaces; unpinned
- CP2-R004: no inspection surfaces; unpinned
- CP2-R005: no inspection surfaces; unpinned
- CP2-R006: no inspection surfaces; unpinned
- CP2-R007: no inspection surfaces; unpinned
- CP2-R008: no inspection surfaces; unpinned
- CP2-R009: no inspection surfaces; unpinned
- CP2-R010: no inspection surfaces; unpinned
- CP2-R011: no inspection surfaces; unpinned
- CP2-R012: no inspection surfaces; unpinned
- CP2-R013: no inspection surfaces; unpinned
- CP2-R016: no inspection surfaces; unpinned
- CP2-R018: no inspection surfaces; unpinned
- CP2-R019: no inspection surfaces; unpinned
- CP2-R020: no inspection surfaces; unpinned
- CP2-R021: no inspection surfaces; unpinned
- CP2-R022: no inspection surfaces; unpinned
- CP2-R023: no inspection surfaces; unpinned
- CP2-R024: no inspection surfaces; unpinned
- CP2-R025: no inspection surfaces; unpinned
- CP2-R026: no inspection surfaces; unpinned
- CP2-R027: no inspection surfaces; unpinned
- CP2-R028: no inspection surfaces; unpinned
- CP2-R029: no inspection surfaces; unpinned
- CP2-R032: no inspection surfaces; unpinned
- CP2-R033: no inspection surfaces; unpinned
- CP2-R034: no inspection surfaces; unpinned
- CP2-R035: no inspection surfaces; unpinned
- CP2-S001: README, releases, command_output; pinned
- CP2-S002: README, releases, command_output; pinned
- CP2-S003: README, releases, command_output; pinned
- CP2-S004: README, releases, command_output; pinned
- CP2-S005: other, releases, command_output; pinned
- CP2-S006: README, releases, command_output; pinned
- CP2-S007: README, releases, command_output; pinned
- CP2-S008: README, releases, command_output; pinned


GitHub source-funnel totals: returned=30, opened=8, readme_only=7, code_inspected=0, test_inspected=0, history_inspected=0, pinned=8, referenced=8

Captured local-repository observation totals: observations=0, code_inspected=0, test_inspected=0, history_inspected=0, commit_captured=0

## Claim-evidence coverage

| Claim ID | Kind | Supporting sources | Opposing sources | Mappings | Verified | Missing verification | Confidence |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| field-landscape-selection-checkpoint-2-deep-dive-set-C001 | verified implementation fact | CP2-S001, CP2-S002, CP2-S003, CP2-S004, CP2-S005, CP2-S006, CP2-S007, CP2-S008 | — | 8 | 8 | 0 | high for repository identity and immutable Git refs; no implementation behavior verified |
| field-landscape-selection-checkpoint-2-deep-dive-set-C002 | engineering recommendation | — | — | 5 | 5 | 0 | moderate as a selection judgment; expected responsibility coverage remains unverified |
| field-landscape-selection-checkpoint-2-deep-dive-set-C003 | engineering recommendation | — | — | 1 | 1 | 0 | moderate selection judgment; actual code size and analytical difficulty remain to be tested |

## Transcript retention

- native-boundary-be3ef7710efb02a78bb2: /Users/jernotte/dev/reference-materials/research/provenance-transcripts/checkpoint-2-selection/selection-window-1-prefix.jsonl; sha256=be3ef7710efb02a78bb2b1f433959ad4e464a3443f4e1075f05b50ed3694feac; bytes=12040589; lines=1-3701; mode=0600
- native-boundary-ee95d67b4ebf252d27e7: /Users/jernotte/dev/reference-materials/research/provenance-transcripts/checkpoint-2-selection/selection-window-2-prefix.jsonl; sha256=ee95d67b4ebf252d27e7eaf6eae126f207b1a7d54c3d9d4bc1cf1305c2d73a63; bytes=12193211; lines=1-3750; mode=0600
- native-boundary-7c60ecd51bcfa382aaf8: /Users/jernotte/dev/reference-materials/research/provenance-transcripts/checkpoint-2-selection/selection-window-3-prefix.jsonl; sha256=7c60ecd51bcfa382aaf8cd6454f42f4da01dec9f12d6fd184800726151f1666e; bytes=12928266; lines=1-3979; mode=0600

## Provenance waivers

- None recorded

## Complete source table

| Source ID | Host | Type | Returned | Opened | Inspection | Surfaces | Disposition | Version | Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CP2-R001 | github.com | release page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R002 | github.com | release page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R003 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R004 | github.com | release page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R005 | github.com | organization page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R006 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R007 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R008 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R009 | github.com | release page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R010 | github.com | issue | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R011 | github.com | organization page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R012 | github.com | organization page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R013 | github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R014 | github.github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R015 | education.github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R016 | github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R017 | partner.github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R018 | github.com | release page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R019 | github.com | release page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R020 | github.com | release page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R021 | github.com | release page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R022 | github.com | release page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R023 | github.com | repository file | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R024 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R025 | github.com | repository file | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R026 | github.com | repository file | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R027 | github.com | repository | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R028 | github.com | organization page | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R029 | github.com | lineage lead | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R030 | resources.github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R031 | github.github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R032 | github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R033 | github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R034 | github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-R035 | github.com | irrelevant result | yes | no | not_inspected | — | none | unspecified | — |
| CP2-S001 | github.com | repository | no | yes | screening | README, releases, command_output | referenced | pinned | research/sources/cp2-pi-v0.80.6.md |
| CP2-S002 | github.com | repository | no | yes | screening | README, releases, command_output | referenced | pinned | research/sources/cp2-openhands-sdk-v1.35.0.md |
| CP2-S003 | github.com | repository | no | yes | screening | README, releases, command_output | referenced | pinned | research/sources/cp2-langgraph-1.2.5.md |
| CP2-S004 | github.com | repository | no | yes | screening | README, releases, command_output | referenced | pinned | research/sources/cp2-browser-use-0.13.4.md |
| CP2-S005 | github.com | repository | no | yes | screening | other, releases, command_output | referenced | pinned | research/sources/cp2-openclaw-v2026.6.6.md |
| CP2-S006 | github.com | repository | no | yes | screening | README, releases, command_output | referenced | pinned | research/sources/cp2-smolagents-v1.26.0.md |
| CP2-S007 | github.com | repository | no | yes | screening | README, releases, command_output | referenced | pinned | research/sources/cp2-storm-v1.1.0.md |
| CP2-S008 | github.com | repository | no | yes | screening | README, releases, command_output | referenced | pinned | research/sources/cp2-swe-agent-v1.1.0.md |
| CP2-X001 | api.github.com | repository metadata | no | yes | screening | other | excluded | live_unpinned | — |
| CP2-X002 | local | command output | no | yes | screening | command_output | excluded | local_live | — |

## Blocking errors

- None

## Warnings requiring response

- `planned_channel_missing` (resolved): Planned channel had no search: release/history inspection — Exact release and tag boundaries were checked through direct public git ls-remote commands rather than a search event; the native calls and resulting tag refs are reconciled in this log.
- `planned_channel_missing` (resolved): Planned channel had no search: user-provided material — No maintainer-supplied Claude Code material was present in the repository or approved reference directory. The case remains conditional and no public substitute was used.
- `host_concentration` (resolved): 8/10 opened sources came from github.com — This bounded pass answers repository identity, pinning, and top-level suitability questions, so concentration on primary GitHub repositories is expected. It makes no landscape-breadth or effectiveness claim.
- `repository_shallow` (resolved): CP2-S001 was inspected without code, tests, or history — Checkpoint 2 selection explicitly prohibited implementation deep dives. README/release screening and exact tag resolution are sufficient for selection; code, tests, and history remain required during an approved case study.
- `repository_shallow` (resolved): CP2-S002 was inspected without code, tests, or history — Checkpoint 2 selection explicitly prohibited implementation deep dives. README/release screening and exact tag resolution are sufficient for selection; code, tests, and history remain required during an approved case study.
- `repository_shallow` (resolved): CP2-S003 was inspected without code, tests, or history — Checkpoint 2 selection explicitly prohibited implementation deep dives. README/release screening and exact tag resolution are sufficient for selection; code, tests, and history remain required during an approved case study.
- `repository_shallow` (resolved): CP2-S004 was inspected without code, tests, or history — Checkpoint 2 selection explicitly prohibited implementation deep dives. README/release screening and exact tag resolution are sufficient for selection; code, tests, and history remain required during an approved case study.
- `repository_shallow` (resolved): CP2-S005 was inspected without code, tests, or history — Checkpoint 2 selection explicitly prohibited implementation deep dives. README/release screening and exact tag resolution are sufficient for selection; code, tests, and history remain required during an approved case study.
- `repository_shallow` (resolved): CP2-S006 was inspected without code, tests, or history — Checkpoint 2 selection explicitly prohibited implementation deep dives. README/release screening and exact tag resolution are sufficient for selection; code, tests, and history remain required during an approved case study.
- `repository_shallow` (resolved): CP2-S007 was inspected without code, tests, or history — Checkpoint 2 selection explicitly prohibited implementation deep dives. README/release screening and exact tag resolution are sufficient for selection; code, tests, and history remain required during an approved case study.
- `repository_shallow` (resolved): CP2-S008 was inspected without code, tests, or history — Checkpoint 2 selection explicitly prohibited implementation deep dives. README/release screening and exact tag resolution are sufficient for selection; code, tests, and history remain required during an approved case study.
