# Provenance Audit: v2-outline-seed-map

**Generated:** 2026-07-21T00:37:57.725Z
**Completeness:** `complete_with_declared_manual_sources`
**Audit profile:** `diagnostic`
**Promotion gate:** PASS

## Funnel

| Stage | Count |
| --- | ---: |
| searches | 0 |
| search_updates | 0 |
| applied_search_updates | 0 |
| rejected_search_updates | 0 |
| searches_with_incomplete_result_capture | 0 |
| returned | 0 |
| returned_source_identities_recovered | 0 |
| opened | 72 |
| read_only | 66 |
| referenced | 0 |
| excluded | 6 |
| declared_claims | 0 |
| claims | 0 |
| claim_evidence_mappings | 0 |
| verifications | 0 |
| unverified_claim_evidence_mappings | 0 |
| native_boundaries | 9 |
| native_observations | 385 |
| automatically_resolved_observations | 250 |
| human_resolved_observations | 135 |
| unresolved_observations | 0 |
| linked_observations | 347 |
| not_research_observations | 38 |
| observation_resolution_batches | 9 |
| manual_capture_actions | 8 |
| semantic_batch_actions | 7 |

## Channel coverage

- Planned: direct seed URL inspection, local repository inspection, declared manual source, direct first-hop URL inspection
- Actual: local repository inspection

## Searches

| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
| — | — | — | — | — | — | — | — | — |

## Search-update history

| Update event | Search event | From | To | Effective state | Reason |
| --- | --- | --- | --- | --- | --- |
| — | — | — | — | — | — |

## Host distribution

- asixiv.org: 1
- github.com: 28
- api.github.com: 1
- local filesystem: 1
- openai.com: 3
- arxiv.org: 9
- www.anthropic.com: 7
- blog.langchain.com: 1
- platform.claude.com: 6
- modelcontextprotocol.io: 2
- genai.owasp.org: 1
- developers.openai.com: 3
- langchain-ai.github.io: 1
- platform.openai.com: 1
- wellarchitected.github.com: 1
- www.letta.com: 1
- www.mendral.com: 1
- blog.modelcontextprotocol.io: 1
- code.claude.com: 1
- www.swebench.com: 1
- docs.anthropic.com: 1

## Source distributions

- host: wellarchitected.github.com=1, github.com=28, modelcontextprotocol.io=2, www.anthropic.com=7, arxiv.org=9, api.github.com=1, code.claude.com=1, developers.openai.com=3, openai.com=3, langchain-ai.github.io=1, blog.langchain.com=1, www.swebench.com=1, platform.claude.com=6, www.letta.com=1, www.mendral.com=1, genai.owasp.org=1, docs.anthropic.com=1, platform.openai.com=1, asixiv.org=1, blog.modelcontextprotocol.io=1, local filesystem=1
- organization: wellarchitected.github.com=1, github.com=25, modelcontextprotocol.io=2, www.anthropic.com=7, arxiv.org=9, api.github.com=1, code.claude.com=1, developers.openai.com=3, openai.com=3, langchain-ai.github.io=1, blog.langchain.com=1, www.swebench.com=1, platform.claude.com=6, www.letta.com=1, ai-boost=1, www.mendral.com=1, genai.owasp.org=1, docs.anthropic.com=1, platform.openai.com=1, asixiv.org=1, blog.modelcontextprotocol.io=1, maintainer-provided=1, walkinglabs=2
- source_type: web source=34, repository=28, preprint=9, manual local PDF=1
- publication_year: 2026=1, unspecified=71
- primary_secondary: unknown until inspected=68, primary=3, independent survey and educational synthesis=1
- evidence_lineage: generic web open=68, AI Boost curated catalog repository=1, declared manual source; repository-staged readable copy=1, Walking Labs curated catalog repository=1, Walking Labs curriculum repository=1

## Repository depth

- auto-source-95e2f11879a290a0: other, README, documentation, history, command_output; pinned
- v2-source-walkinglabs-learn-harness-engineering: README, documentation, history, code, command_output; pinned
- v2-source-walkinglabs-awesome-harness-engineering: README, history, command_output; pinned
- auto-source-7fe841355559703a: other, README, releases; unpinned
- auto-source-baf9cbcdf7e11126: other, README, releases; unpinned
- auto-source-dab460140f5c7122: other, README, releases; unpinned
- auto-source-22e1d1b5ef859fb4: other, README; unpinned
- auto-source-721d7c06c94b6351: other, README, releases; unpinned
- auto-source-257ed09536576a04: other, README, releases; unpinned
- auto-source-b2dde8d2b4d70b66: other, README; unpinned
- auto-source-dad4c9f3ba7f1da9: other, README, releases; unpinned
- auto-source-cb8f252ccaaf10b0: other, README, releases; unpinned
- auto-source-c785b5a9d8fcdc9f: other, README; unpinned
- auto-source-8028887117fae6cb: other, README, releases; unpinned
- auto-source-cc9be4621c6c116e: other, README; unpinned
- auto-source-85f5c040be9f452b: other, README, releases; unpinned
- auto-source-97dcab4759c83fdb: other, README, releases; unpinned
- auto-source-0439b639378468c6: other, README, releases; unpinned
- auto-source-46c5f25a10670fc7: other, README, releases; unpinned
- auto-source-ba31bde2dfc28f63: other, README; unpinned
- auto-source-cddc9a2d075a5103: other, README; unpinned
- auto-source-642743ad9061795a: other, README; unpinned
- auto-source-580ca860ba1f4d76: other, README; unpinned
- auto-source-cf18e9c6fc10a052: other, README; unpinned
- auto-source-7def51b1549aee4a: other, README; unpinned
- auto-source-dd44483fe80f0f0a: other, README; unpinned
- auto-source-7cb0600d234b19c0: other, README; unpinned
- auto-source-53e1f0b762c2e77b: other, README, releases; unpinned
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, tests; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=history; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=history; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=history, code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/ai-boost-awesome-harness-engineering; surfaces=tests; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=command_output; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=command_output; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/ai-boost-awesome-harness-engineering; surfaces=history; commit=09bda3af8c32b95958f0158e0f356076d6ab44c8
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/ai-boost-awesome-harness-engineering; surfaces=documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/ai-boost-awesome-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/ai-boost-awesome-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=history, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/ai-boost-awesome-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/ai-boost-awesome-harness-engineering/README.md; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering; surfaces=documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=history, code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, tests; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=unspecified; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering/docs/en; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering/README.md; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering/docs/en/lectures/lecture-02-what-a-harness-actually-is/index.md; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/dev/reference-materials/research/walkinglabs-learn-harness-engineering/docs/en/resources/index.md; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=tests, command_output; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, tests; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=command_output; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, tests; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=command_output; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code, tests, documentation; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=command_output; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=code; commit=unresolved
- captured local inspection: /Users/jernotte/.codex/worktrees/6101/learning-harness-engineering; surfaces=command_output; commit=unresolved

GitHub source-funnel totals: returned=0, opened=28, readme_only=25, code_inspected=1, test_inspected=0, history_inspected=3, pinned=3, referenced=0

Captured local-repository observation totals: observations=102, code_inspected=82, test_inspected=7, history_inspected=6, commit_captured=1

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
| auto-source-03c873afc5afad1c | wellarchitected.github.com | web source | no | yes | none | other | excluded | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-0439b639378468c6 | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-0668b361cac37fb4 | modelcontextprotocol.io | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-0f0c0cdf7c9dc4eb | www.anthropic.com | web source | no | yes | none | other | excluded | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-107da49445a23241 | arxiv.org | preprint | no | yes | partial_substantive | other, paper, abstract | read_only | live_unpinned | — |
| auto-source-126e07cf0d684e03 | www.anthropic.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-13d43140a57ef61e | arxiv.org | preprint | no | yes | screening | other, paper, abstract | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-16980c73f034951c | api.github.com | web source | no | yes | none | other | excluded | live_unpinned | — |
| auto-source-1afa2530b3e1f412 | arxiv.org | preprint | no | yes | partial_substantive | other, paper, abstract | read_only | live_unpinned | — |
| auto-source-1ce67529b68b7d4a | code.claude.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-1eba12a4a8fa384c | www.anthropic.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-22b0273a7c1efebd | developers.openai.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-22e1d1b5ef859fb4 | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-257ed09536576a04 | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-293d0f9661696880 | openai.com | web source | no | yes | full_substantive | other, documentation | read_only | live_unpinned | — |
| auto-source-2b0bbc572c83b1d8 | langchain-ai.github.io | web source | no | yes | none | other | excluded | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-38c43325a50c50c6 | www.anthropic.com | web source | no | yes | full_substantive | other, documentation | read_only | live_unpinned | — |
| auto-source-3cdc3bbb8a55263b | blog.langchain.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-433a37bad4e66a78 | www.swebench.com | web source | no | yes | none | other | excluded | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-44a30ce8057db5dc | modelcontextprotocol.io | web source | no | yes | none | other | excluded | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-46c5f25a10670fc7 | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-4bc641a728ca0582 | platform.claude.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-4f11e26be57ffed1 | arxiv.org | preprint | no | yes | screening | other, paper, abstract | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-523b6fa0a1bdab02 | arxiv.org | preprint | no | yes | partial_substantive | other, paper, abstract | read_only | live_unpinned | — |
| auto-source-53e1f0b762c2e77b | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-54d4071243dd4517 | platform.claude.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-580ca860ba1f4d76 | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-58a5a7279791ce2c | arxiv.org | preprint | no | yes | screening | other, paper, abstract | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-642743ad9061795a | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-64af1d1a2fd48283 | www.anthropic.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-721d7c06c94b6351 | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-7647307fe49844a0 | arxiv.org | preprint | no | yes | screening | other, paper, abstract | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-7cb0600d234b19c0 | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-7def51b1549aee4a | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-7fe841355559703a | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-8028887117fae6cb | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-82747c62f33e4f20 | platform.claude.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-855185e3d07e09ad | www.letta.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-85f5c040be9f452b | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-88fd75feed929931 | arxiv.org | preprint | no | yes | partial_substantive | other, paper, abstract | read_only | live_unpinned | — |
| auto-source-907e72292eae9f69 | arxiv.org | preprint | no | yes | screening | other, paper, abstract | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-95e2f11879a290a0 | github.com | repository | no | yes | screening | other, README, documentation, history, command_output | read_only | pinned | — |
| auto-source-97dcab4759c83fdb | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-9a17e7add848af00 | developers.openai.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-9fa759b72385cdec | www.anthropic.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-a841a2284747ba07 | platform.claude.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-ab8062b62991ffcf | platform.claude.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-aba1b395dcfe14d7 | developers.openai.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-ae10eb4597fe2dea | openai.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-b2dde8d2b4d70b66 | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-ba31bde2dfc28f63 | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-baf9cbcdf7e11126 | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-c1baaa073231686d | www.mendral.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-c785b5a9d8fcdc9f | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-cb8f252ccaaf10b0 | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-cc9be4621c6c116e | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-cddc9a2d075a5103 | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-cecce92d753337bd | genai.owasp.org | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-cf18e9c6fc10a052 | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-d5f9dbd62b3ecc11 | www.anthropic.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-dab460140f5c7122 | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-01.md |
| auto-source-dad4c9f3ba7f1da9 | github.com | repository | no | yes | screening | other, README, releases | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-db41d6bba0d86a4e | platform.claude.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-dd44483fe80f0f0a | github.com | repository | no | yes | screening | other, README | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-e205ffac9d9f156d | openai.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-e9e39426a0d8260e | docs.anthropic.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-03.md |
| auto-source-ec4f8c98c7439855 | platform.openai.com | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| auto-source-f608d57e93e6c8c4 | asixiv.org | web source | no | yes | full_substantive | other, paper, abstract | read_only | live_unpinned | — |
| auto-source-fc75dde1b88ed17e | blog.modelcontextprotocol.io | web source | no | yes | screening | other, documentation | read_only | live_unpinned | research/outline-development/awesome-screen-core-02.md |
| v2-seed-local-2606-24937v1 | local filesystem | manual local PDF | no | yes | partial_substantive | paper, other | read_only | Version 1.2.2 dated 22 June 2026 | — |
| v2-source-walkinglabs-awesome-harness-engineering | github.com | repository | no | yes | screening | README, history, command_output | read_only | pinned | — |
| v2-source-walkinglabs-learn-harness-engineering | github.com | repository | no | yes | partial_substantive | README, documentation, history, code, command_output | read_only | pinned | — |

## Blocking errors

- None

## Warnings requiring response

- `planned_channel_missing` (resolved): Planned channel had no search: direct seed URL inspection — The diagnostic channel counter derives actual channels from search events, while this pass used authorized direct source opens rather than searches. The native boundary contains the direct asixiv and GitHub source opens.
- `planned_channel_missing` (resolved): Planned channel had no search: declared manual source — The diagnostic channel counter derives actual channels from searches and repository observations. The separately enumerable manual source is represented by the predeclared manual_source_set and its complete source lifecycle.
- `planned_channel_missing` (resolved): Planned channel had no search: direct first-hop URL inspection — The diagnostic channel counter derives actual channels from search events, while Wave 1 deliberately used six authorized direct source opens and no search. The native boundary and six source_opened lifecycles record the planned channel directly.
- `repository_shallow` (resolved): auto-source-7fe841355559703a was inspected without code, tests, or history — V2-D008 intentionally authorized only a top-level direct screen. The README and visible release metadata were sufficient to identify the registered destination as a legacy repository; opening code, history, or the moved repository was prohibited.
- `repository_shallow` (resolved): auto-source-baf9cbcdf7e11126 was inspected without code, tests, or history — V2-D008 intentionally authorized only a top-level direct screen. Repository implementation, tests, documentation, benchmarks, and release contents remain outside the calibration boundary.
- `repository_shallow` (resolved): auto-source-dab460140f5c7122 was inspected without code, tests, or history — V2-D008 intentionally authorized only a top-level direct screen. The README exposed identity, scope, and documentation friction; code, tests, history, and linked discussions were prohibited.
- `repository_shallow` (resolved): auto-source-22e1d1b5ef859fb4 was inspected without code, tests, or history — V2-D008 intentionally authorized only a top-level direct screen. No implementation, tests, hosted service, documentation, or history inspection was permitted.
- `repository_shallow` (resolved): auto-source-721d7c06c94b6351 was inspected without code, tests, or history — V2-D008 intentionally authorized only a top-level direct screen. The README was sufficient to identify four sample patterns; code, deployment, tests, and the linked article remained prohibited.
- `repository_shallow` (resolved): auto-source-257ed09536576a04 was inspected without code, tests, or history — V2-D008 intentionally authorized only a top-level direct screen. The automatic rename and expanded cross-harness scope were observable on the repository home; guides, architecture, skills, code, tests, and release files remained prohibited.
- `repository_shallow` (resolved): auto-source-b2dde8d2b4d70b66 was inspected without code, tests, or history — V2-D008 intentionally authorized only a top-level direct screen. Metric implementation, tests, documentation, research citations, and hosted-platform behavior remain outside the calibration boundary.
- `repository_shallow` (resolved): auto-source-dad4c9f3ba7f1da9 was inspected without code, tests, or history — V2-D009 intentionally authorized only a top-level direct screen. The README, archive notice, and visible release metadata were sufficient to establish identity and lifecycle; code, tests, history, documentation, and release contents were prohibited.
- `repository_shallow` (resolved): auto-source-cb8f252ccaaf10b0 was inspected without code, tests, or history — V2-D009 intentionally authorized only a top-level direct screen. The README established the educational reference-implementation scope and production caveat; individual servers, code, tests, history, registry, and release contents were prohibited.
- `repository_shallow` (resolved): auto-source-c785b5a9d8fcdc9f was inspected without code, tests, or history — V2-D009 intentionally authorized only a top-level direct screen. The README was sufficient to correct the gateway and provider-infrastructure scope; code, tests, history, documentation, benchmarks, and hosted behavior were prohibited.
- `repository_shallow` (resolved): auto-source-8028887117fae6cb was inspected without code, tests, or history — V2-D009 intentionally authorized only a top-level direct screen. The README exposed benchmark identity and its material scope change; task files, code, tests, history, paper, leaderboard, and result reproduction were prohibited.
- `repository_shallow` (resolved): auto-source-cc9be4621c6c116e was inspected without code, tests, or history — V2-D009 intentionally authorized only a top-level direct screen. The README established the observability-platform scope; code, tests, history, documentation, integrations, benchmarks, and hosted behavior were prohibited.
- `repository_shallow` (resolved): auto-source-85f5c040be9f452b was inspected without code, tests, or history — V2-D009 intentionally authorized only a top-level direct screen. The README and visible release metadata established the debugging surface; code, tests, history, transcript parsing, privacy behavior, packages, and release contents were prohibited.
- `repository_shallow` (resolved): auto-source-97dcab4759c83fdb was inspected without code, tests, or history — V2-D009 intentionally authorized only a top-level direct screen. The root README was sufficient to expose the broad-platform versus named-node mismatch; node documentation, code, tests, history, feature pages, and release contents were prohibited.
- `repository_shallow` (resolved): auto-source-0439b639378468c6 was inspected without code, tests, or history — V2-D009 intentionally authorized only a top-level direct screen. The README exposed benchmark scope and its reproducibility caveat; task data, code, tests, history, paper, leaderboard, dataset, fixtures, and result reproduction were prohibited.
- `repository_shallow` (resolved): auto-source-46c5f25a10670fc7 was inspected without code, tests, or history — V2-D009 intentionally authorized only a top-level direct screen. The README and visible release metadata established the prompt-compression research series; implementation, code, tests, history, papers, experiments, examples, and release contents were prohibited.
- `repository_shallow` (resolved): auto-source-ba31bde2dfc28f63 was inspected without code, tests, or history — V2-D010 intentionally authorized only a top-level direct screen. The README established browser-automation MCP scope and the project's interface comparison; code, tests, history, documentation, examples, and browser execution were prohibited.
- `repository_shallow` (resolved): auto-source-cddc9a2d075a5103 was inspected without code, tests, or history — V2-D010 intentionally authorized only a top-level direct screen. The README established memory scope and the managed-versus-open-source benchmark caveat; code, tests, history, documentation, benchmark artifacts, and hosted behavior were prohibited.
- `repository_shallow` (resolved): auto-source-642743ad9061795a was inspected without code, tests, or history — V2-D010 intentionally authorized only a top-level direct screen. The README established broad orchestration scope and exposed that the separate release label required a prohibited second hop; code, tests, history, documentation, integrations, and release contents were prohibited.
- `repository_shallow` (resolved): auto-source-580ca860ba1f4d76 was inspected without code, tests, or history — V2-D010 intentionally authorized only a top-level direct screen. The README established the broad observability, evaluation, optimization, and monitoring scope; code, tests, history, documentation, integrations, benchmarks, and hosted behavior were prohibited.
- `repository_shallow` (resolved): auto-source-cf18e9c6fc10a052 was inspected without code, tests, or history — V2-D010 intentionally authorized only a top-level direct screen. The README established the protocol and service-requested decision shape; specification files, implementations, code, tests, history, packages, and release contents were prohibited.
- `repository_shallow` (resolved): auto-source-7def51b1549aee4a was inspected without code, tests, or history — V2-D010 intentionally authorized only a top-level direct screen. The README established the Claude-specific team factory and project level framing; skill files, generated outputs, code, tests, history, examples, and release contents were prohibited.
- `repository_shallow` (resolved): auto-source-dd44483fe80f0f0a was inspected without code, tests, or history — V2-D010 intentionally authorized only a top-level direct screen. The README established the structured-output constrained-generation scope and boundary question; code, tests, history, documentation, backend behavior, examples, benchmarks, and release contents were prohibited.
- `repository_shallow` (resolved): auto-source-7cb0600d234b19c0 was inspected without code, tests, or history — V2-D010 intentionally authorized only a top-level direct screen. The README established the direct tool categories and configuration surface; tool documentation, code, tests, history, browser execution, security behavior, and release contents were prohibited.
- `repository_shallow` (resolved): auto-source-53e1f0b762c2e77b was inspected without code, tests, or history — V2-D010 intentionally authorized only a top-level direct screen. The README and visible release metadata established persistent-memory scope and the cloud-versus-repository distinction; code, tests, history, documentation, consolidation behavior, hosted behavior, and release contents were prohibited.
