# Provenance Audit: field-landscape

**Generated:** 2026-07-13T00:34:12.574Z
**Completeness:** `complete`
**Audit profile:** `provisional-promotion`
**Promotion gate:** PASS

## Funnel

| Stage | Count |
| --- | ---: |
| searches | 1 |
| search_updates | 0 |
| applied_search_updates | 0 |
| rejected_search_updates | 0 |
| searches_with_incomplete_result_capture | 0 |
| returned | 21 |
| returned_source_identities_recovered | 21 |
| opened | 5 |
| read_only | 0 |
| referenced | 5 |
| excluded | 0 |
| declared_claims | 15 |
| claims | 19 |
| claim_evidence_mappings | 19 |
| verifications | 19 |
| unverified_claim_evidence_mappings | 0 |
| native_boundaries | 1 |
| native_observations | 53 |
| automatically_resolved_observations | 49 |
| human_resolved_observations | 4 |
| unresolved_observations | 0 |
| linked_observations | 43 |
| not_research_observations | 10 |
| observation_resolution_batches | 1 |
| manual_capture_actions | 27 |
| semantic_batch_actions | 1 |

## Channel coverage

- Planned: academic web search, local repository inspection
- Actual: academic web search, local repository inspection

## Searches

| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
| PI-Q001 | academic web search | batch: [site:arxiv.org LLM agent context compaction summarization long horizon memory benchmark; site:arxiv.org agent computer interface tool design coding agents SWE-agent; site:aclanthology.org large language model self correction external feedback survey; site:arxiv.org coding agent trajectory evaluation tool use verification benchmark] | targeted mechanism qualification | Codex web search | not limited | 21 | complete | none observed |

## Search-update history

| Update event | Search event | From | To | Effective state | Reason |
| --- | --- | --- | --- | --- | --- |
| — | — | — | — | — | — |

## Host distribution

- github.com: 1
- arxiv.org: 3
- aclanthology.org: 1

## Source distributions

- host: github.com=1, aclanthology.org=1, arxiv.org=3
- organization: earendil-works=1, Kamoi et al.=1, Yang et al.=1, Semenov et al.=1, Cim et al.=1
- source_type: repository=1, peer-reviewed survey=1, peer-reviewed paper and implementation=1, preprint=2
- publication_year: 2024=2, 2026=2, unspecified=1
- primary_secondary: primary implementation=1, primary scholarly synthesis=1, primary research report=3
- evidence_lineage: earendil-works/pi v0.80.6=1, Kamoi et al. TACL survey=1, SWE-agent paper=1, Beyond Compaction preprint=1, Parallel Context Compaction preprint=1

## Repository depth

- CP2-S001: README, documentation, code, tests, history, releases, command_output; pinned
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=history, code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=2b3fda9921b5590f285165287bd442a25817f17b
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=unspecified; commit=2b3fda9921b5590f285165287bd442a25817f17b
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=2b3fda9921b5590f285165287bd442a25817f17b
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=351efc828b6fc5250fa50d6b32b20b0f0cb22cb4
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=2b3fda9921b5590f285165287bd442a25817f17b
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=2b3fda9921b5590f285165287bd442a25817f17b
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=9028562e2d5eda76de662ec9b7584125760eb83f
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=2b3fda9921b5590f285165287bd442a25817f17b
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=history, code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved

GitHub source-funnel totals: returned=0, opened=1, readme_only=0, code_inspected=1, test_inspected=1, history_inspected=1, pinned=1, referenced=1

Captured local-repository observation totals: observations=39, code_inspected=34, test_inspected=2, history_inspected=2, commit_captured=8

## Claim-evidence coverage

| Claim ID | Kind | Supporting sources | Opposing sources | Mappings | Verified | Missing verification | Confidence |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| field-landscape-case-pi-v0-80-6-C001 | verified implementation fact | CP2-S001 | — | 1 | 1 | 0 | high for the pinned repository; the import absence is version-bounded |
| field-landscape-case-pi-v0-80-6-C002 | verified implementation fact | CP2-S001 | — | 1 | 1 | 0 | high for v0.80.6; no effectiveness implication |
| field-landscape-case-pi-v0-80-6-C003 | verified implementation fact | CP2-S001 | — | 1 | 1 | 0 | high; concrete runs remain configuration- and extension-dependent |
| field-landscape-case-pi-v0-80-6-C004 | verified implementation fact | CP2-S001 | — | 1 | 1 | 0 | high for mechanics; trusted hooks are inside the trust boundary |
| field-landscape-case-pi-v0-80-6-C005 | verified implementation fact | CP2-S001 | — | 1 | 1 | 0 | high; in-memory mode is not durable |
| field-landscape-case-pi-v0-80-6-C006 | verified implementation fact | CP2-S001 | — | 1 | 1 | 0 | high for implementation; semantic retention and task benefit are unmeasured |
| field-landscape-case-pi-v0-80-6-C007 | verified implementation fact | CP2-S001 | — | 1 | 1 | 0 | high for the inspected boundary; extensions make deployed behavior open-ended |
| field-landscape-case-pi-v0-80-6-C008 | source-reported claim | CP2-S001 | — | 1 | 1 | 0 | high for declared and code-consistent policy; no security-effectiveness claim |
| field-landscape-case-pi-v0-80-6-C009 | verified implementation fact | CP2-S001 | — | 1 | 1 | 0 | high for present and absent code at the pin; extensions can add policy |
| field-landscape-case-pi-v0-80-6-C010 | verified implementation fact | CP2-S001 | — | 1 | 1 | 0 | high for the inspected repository; private external evaluations remain unknowable |
| field-landscape-case-pi-v0-80-6-C011 | inference | CP2-S001 | — | 1 | 1 | 0 | moderate; illustrative history, not a failure-frequency measurement |
| field-landscape-case-pi-v0-80-6-C012 | source-reported claim | FL-S016 | — | 2 | 2 | 0 | moderate transfer confidence across different implementation, model, benchmark, and date |
| field-landscape-case-pi-v0-80-6-C013 | source-reported claim | PI-S002, PI-S003 | — | 3 | 3 | 0 | moderate-low due to recent preprints, different tasks and models, and no direct Pi comparison |
| field-landscape-case-pi-v0-80-6-C014 | source-reported claim | FL-S009 | — | 2 | 2 | 0 | moderate transfer confidence; the survey predates current models and does not evaluate Pi |
| field-landscape-case-pi-v0-80-6-C015 | hypothesis | CP2-S001 | — | 1 | 1 | 0 | low until contrasted with remaining cases; no taxonomy change authorized |

## Transcript retention

- native-boundary-74f621581a6d010050e9: /Users/jernotte/dev/reference-materials/research/provenance-transcripts/pi-pilot/pi-pilot-prefix.jsonl; sha256=74f621581a6d010050e9ebd7f2fe93c9fa14aef0161afbb9f93d608ea8d618b3; bytes=15985199; lines=1-4689; mode=0600

## Provenance waivers

- None recorded

## Complete source table

| Source ID | Host | Type | Returned | Opened | Inspection | Surfaces | Disposition | Version | Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CP2-S001 | github.com | repository | no | yes | full substantive | README, documentation, code, tests, history, releases, command_output | referenced | pinned | research/sources/cp2-pi-v0.80.6.md |
| FL-S009 | aclanthology.org | peer-reviewed survey | yes | yes | partial substantive | abstract, paper | referenced | published_2024_reopened_2026-07-12 | research/sources/kamoi-2024-self-correction-survey.md |
| FL-S016 | arxiv.org | peer-reviewed paper and implementation | no | yes | partial substantive | abstract, paper | referenced | published_2024_reused_from_retained_record_2026-07-12 | research/sources/yang-2024-swe-agent.md |
| PI-R002 | aclanthology.org | peer-reviewed paper | yes | no | not_inspected | — | none | unspecified | — |
| PI-R004 | arxiv.org | preprint | yes | no | not_inspected | — | none | unspecified | — |
| PI-R005 | arxiv.org | preprint | yes | no | not_inspected | — | none | unspecified | — |
| PI-R007 | aclanthology.org | peer-reviewed paper | yes | no | not_inspected | — | none | unspecified | — |
| PI-R008 | aclanthology.org | author index | yes | no | not_inspected | — | none | unspecified | — |
| PI-R009 | aclanthology.org | peer-reviewed paper | yes | no | not_inspected | — | none | unspecified | — |
| PI-R010 | aclanthology.org | author index | yes | no | not_inspected | — | none | unspecified | — |
| PI-R011 | aclanthology.org | peer-reviewed paper | yes | no | not_inspected | — | none | unspecified | — |
| PI-R012 | aclanthology.org | peer-reviewed paper | yes | no | not_inspected | — | none | unspecified | — |
| PI-R013 | aclanthology.org | peer-reviewed paper | yes | no | not_inspected | — | none | unspecified | — |
| PI-R014 | aclanthology.org | author index | yes | no | not_inspected | — | none | unspecified | — |
| PI-R015 | aclanthology.org | peer-reviewed paper | yes | no | not_inspected | — | none | unspecified | — |
| PI-R016 | aclanthology.org | proceedings index | yes | no | not_inspected | — | none | unspecified | — |
| PI-R017 | aclanthology.org | paper PDF | yes | no | not_inspected | — | none | unspecified | — |
| PI-R018 | aclanthology.org | paper PDF | yes | no | not_inspected | — | none | unspecified | — |
| PI-R019 | aclanthology.org | paper PDF | yes | no | not_inspected | — | none | unspecified | — |
| PI-R020 | aclanthology.org | paper PDF | yes | no | not_inspected | — | none | unspecified | — |
| PI-R021 | aclanthology.org | paper PDF | yes | no | not_inspected | — | none | unspecified | — |
| PI-S002 | arxiv.org | preprint | yes | yes | partial substantive | abstract, paper | referenced | live_preprint_opened_2026-07-12 | research/sources/semenov-2026-beyond-compaction.md |
| PI-S003 | arxiv.org | preprint | yes | yes | partial substantive | abstract, paper | referenced | live_preprint_opened_2026-07-12 | research/sources/cim-2026-parallel-compaction.md |

## Blocking errors

- None

## Warnings requiring response

- `host_concentration` (resolved): 3/5 opened sources came from arxiv.org — The 3/5 concentration reflects two deliberately targeted compaction preprints plus reuse of the admitted SWE-agent paper. The bounded pilot also uses the pinned implementation and a peer-reviewed ACL source; it does not claim landscape breadth or saturation.
