# Provenance Audit: field-landscape

**Generated:** 2026-07-17T03:36:46.347Z
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
| returned | 9 |
| returned_source_identities_recovered | 9 |
| opened | 9 |
| read_only | 1 |
| referenced | 8 |
| excluded | 0 |
| declared_claims | 17 |
| claims | 28 |
| claim_evidence_mappings | 28 |
| verifications | 28 |
| unverified_claim_evidence_mappings | 0 |
| native_boundaries | 1 |
| native_observations | 55 |
| automatically_resolved_observations | 55 |
| human_resolved_observations | 0 |
| unresolved_observations | 0 |
| linked_observations | 49 |
| not_research_observations | 6 |
| observation_resolution_batches | 0 |
| manual_capture_actions | 8 |
| semantic_batch_actions | 1 |

## Channel coverage

- Planned: local repository inspection, generic web search
- Actual: generic web search, local repository inspection

## Searches

| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
| auto-Q-9c54cee9d4f7b2 | generic web search | site:arxiv.org/abs/2511.03690 OpenHands Software Agent SDK technical report \|\| site:arxiv.org software engineering agents independent verification judge critic task completion reliability | targeted implementation-report and task-verification qualification | web.run | not limited | 9 | complete | none observed |

## Search-update history

| Update event | Search event | From | To | Effective state | Reason |
| --- | --- | --- | --- | --- | --- |
| search-update-d1e6dedb1e0a56cb3b | auto-search-8f2e93014f0193a22d | complete | complete | applied | Supply the agent-owned semantics for the mechanically captured two-query bundle without changing its returned-result facts. |

## Host distribution

- arxiv.org: 6
- github.com: 2
- aclanthology.org: 1
- anthropic.com: 1

## Source distributions

- host: arxiv.org=5, github.com=2, anthropic.com=1, aclanthology.org=1
- organization: arxiv.org=1, earendil-works=1, OpenHands=1, Anthropic=1, Kamoi et al.=1, Yang et al.=1, Wang et al. / OpenHands=1, Semenov et al.=1, Cim et al.=1
- source_type: preprint=3, repository=2, vendor engineering guidance=1, peer-reviewed survey=1, peer-reviewed paper and implementation=1, peer-reviewed technical report=1
- publication_year: 2024=2, 2026=4, unspecified=3
- primary_secondary: unknown until inspected=1, primary implementation retained record=1, primary implementation=1, primary vendor guidance retained record=1, primary scholarly synthesis retained record=1, primary research report retained record=3, primary research report=1
- evidence_lineage: generic web open=1, Pi v0.80.6 reviewed case=1, OpenHands/software-agent-sdk v1.35.0=1, Anthropic engineering article=1, Kamoi et al. TACL survey=1, SWE-agent paper=1, OpenHands SDK technical report, arXiv v2 / MLSys 2026=1, Beyond Compaction preprint=1, Parallel Context Compaction preprint=1

## Repository depth

- CP2-S002: README, documentation, code, tests, history, releases, command_output; pinned
- CP2-S001: code, documentation, tests, history; pinned
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=history, code, tests, documentation; commit=9028562e2d5eda76de662ec9b7584125760eb83f
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code, tests, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=history; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=history, code, tests; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=history; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=history; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=history, code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/learning-harness-engineering; surfaces=code; commit=unresolved

GitHub source-funnel totals: returned=0, opened=2, readme_only=0, code_inspected=2, test_inspected=2, history_inspected=2, pinned=2, referenced=2

Captured local-repository observation totals: observations=43, code_inspected=38, test_inspected=4, history_inspected=6, commit_captured=1

## Claim-evidence coverage

| Claim ID | Kind | Supporting sources | Opposing sources | Mappings | Verified | Missing verification | Confidence |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| field-landscape-case-openhands-sdk-v1-35-0-C001 | verified implementation fact | CP2-S002 | — | 2 | 2 | 0 | high for v1.35.0; remote backend and hosted deployment internals were only surveyed |
| field-landscape-case-openhands-sdk-v1-35-0-C002 | verified implementation fact | CP2-S002 | — | 2 | 2 | 0 | high for the pinned local implementation; durability requires file-backed persistence |
| field-landscape-case-openhands-sdk-v1-35-0-C003 | verified implementation fact | CP2-S002 | — | 1 | 1 | 0 | high for traced paths; ACP-specific internals and all endpoints were not analyzed |
| field-landscape-case-openhands-sdk-v1-35-0-C004 | verified implementation fact | CP2-S002 | — | 1 | 1 | 0 | high for mechanics; exact deployed context remains configuration- and external-plugin-dependent |
| field-landscape-case-openhands-sdk-v1-35-0-C005 | verified implementation fact | CP2-S002 | — | 1 | 1 | 0 | high for the ordinary configured path; stop hooks, critics, goal mode, and custom agents may alter behavior |
| field-landscape-case-openhands-sdk-v1-35-0-C006 | verified implementation fact | CP2-S002 | — | 1 | 1 | 0 | high for mechanics; custom executors and async hooks remain inside the caller or plugin trust boundary |
| field-landscape-case-openhands-sdk-v1-35-0-C007 | verified implementation fact | CP2-S002 | — | 1 | 1 | 0 | high for scheduler policy; no outcome or race-frequency experiment was run |
| field-landscape-case-openhands-sdk-v1-35-0-C008 | verified implementation fact | CP2-S002 | — | 2 | 2 | 0 | high for local behavior and supported boundary; container-security effectiveness was not assessed |
| field-landscape-case-openhands-sdk-v1-35-0-C009 | verified implementation fact | CP2-S002 | — | 2 | 2 | 0 | high for configured behavior; semantic retention and task effects are not established by implementation |
| field-landscape-case-openhands-sdk-v1-35-0-C010 | verified implementation fact | CP2-S002 | — | 1 | 1 | 0 | high for the inspected delegate tool; it is not default core scheduling and does not provide independent environment isolation or acceptance |
| field-landscape-case-openhands-sdk-v1-35-0-C011 | inference | CP2-S002 | — | 1 | 1 | 0 | moderate; concrete defects and mechanisms are verified, while relative engineering priority and generality are inferred |
| field-landscape-case-openhands-sdk-v1-35-0-C012 | verified implementation fact | CP2-S002 | — | 1 | 1 | 0 | high for default and configured mechanics; judge accuracy and real-world benefit are unmeasured here |
| field-landscape-case-openhands-sdk-v1-35-0-C013 | verified implementation fact | CP2-S002 | — | 2 | 2 | 0 | high for present observability and bounded absence in the selected path; downstream or private adaptation remains unknowable |
| field-landscape-case-openhands-sdk-v1-35-0-C014 | source-reported claim | OH-S001 | — | 1 | 1 | 0 | moderate-high for the reported protocol and numbers; author-produced comparison, bundled redesign, and version-family limits constrain causal transfer |
| field-landscape-case-openhands-sdk-v1-35-0-C015 | source-reported claim | PI-S002, PI-S003, FL-S009, FL-S002 | — | 5 | 5 | 0 | moderate-low to moderate transfer confidence; none directly evaluates OpenHands v1.35.0 condenser, critic, or goal judge |
| field-landscape-case-openhands-sdk-v1-35-0-C016 | hypothesis | CP2-S002 | — | 2 | 2 | 0 | low until more cases test counterexamples; this is taxonomy friction, not an approved revision |
| field-landscape-case-openhands-sdk-v1-35-0-C017 | source-reported claim | FL-S016 | — | 2 | 2 | 0 | moderate transfer confidence across different implementations, models, benchmarks, and dates |

## Transcript retention

- native-boundary-18dbe2273b43e4fe9fcc: /Users/jernotte/dev/reference-materials/research/provenance-transcripts/openhands-sdk-v1.35.0/rollout-prefix-through-line-5490.jsonl; sha256=18dbe2273b43e4fe9fccd075a01dd51e5483c51210d1445e24351979c6014360; bytes=19875979; lines=1-5490; mode=0600

## Provenance waivers

- None recorded

## Complete source table

| Source ID | Host | Type | Returned | Opened | Inspection | Surfaces | Disposition | Version | Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| auto-source-0ef46b87b9bc2771 | arxiv.org | preprint | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-1aa615c402ca7756 | arxiv.org | preprint | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-23b7d51d69ffff08 | arxiv.org | preprint | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-3256d47fb0925d46 | arxiv.org | preprint | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-50ce7be445b507ac | arxiv.org | preprint | no | yes | partial_substantive | other | read_only | live_unpinned | — |
| auto-source-5ae33e058797ee6c | arxiv.org | preprint | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-687d47dd2cb4464a | arxiv.org | preprint | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-e1e29b0cc32a3ae4 | arxiv.org | preprint | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-f174accdcca59134 | doi.org | paper identifier | yes | no | not_inspected | — | none | unspecified | — |
| auto-source-f56405f5490a861c | arxiv.org | preprint | yes | no | not_inspected | — | none | unspecified | — |
| CP2-S001 | github.com | repository | no | yes | partial substantive | code, documentation, tests, history | referenced | pinned | research/sources/cp2-pi-v0.80.6.md |
| CP2-S002 | github.com | repository | no | yes | full substantive | README, documentation, code, tests, history, releases, command_output | referenced | pinned | research/sources/cp2-openhands-sdk-v1.35.0.md |
| FL-S002 | anthropic.com | vendor engineering guidance | no | yes | partial substantive | documentation | referenced | published_2026_retained_record | research/sources/anthropic-2026-agent-evals.md |
| FL-S009 | aclanthology.org | peer-reviewed survey | no | yes | partial substantive | abstract, paper | referenced | published_2024_retained_record | research/sources/kamoi-2024-self-correction-survey.md |
| FL-S016 | arxiv.org | peer-reviewed paper and implementation | no | yes | partial substantive | abstract, paper | referenced | published_2024_retained_record | research/sources/yang-2024-swe-agent.md |
| OH-S001 | arxiv.org | peer-reviewed technical report | no | yes | partial substantive | abstract, paper | referenced | arxiv_v2_opened_2026-07-16 | research/sources/wang-2026-openhands-sdk.md |
| PI-S002 | arxiv.org | preprint | no | yes | partial substantive | abstract, paper | referenced | preprint_retained_record | research/sources/semenov-2026-beyond-compaction.md |
| PI-S003 | arxiv.org | preprint | no | yes | partial substantive | abstract, paper | referenced | preprint_retained_record | research/sources/cim-2026-parallel-compaction.md |

## Blocking errors

- None

## Warnings requiring response

- `host_concentration` (resolved): 6/10 opened sources came from arxiv.org — This is a bounded implementation case, not a breadth pass: the pinned GitHub repository is the primary evidence, one author technical report was opened for system outcomes, and four previously admitted scholarly records were reused to qualify mechanisms. The concentration is expected and does not support a source-balance or saturation claim.
