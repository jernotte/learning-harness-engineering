# Awesome Harness Engineering Catalog Audit

**Status:** Complete against the pinned README and rule manifest; no previously unopened destination was opened during extraction or enumeration

**Catalog commit:** `09bda3af8c32b95958f0158e0f356076d6ab44c8`
**README SHA-256:** `4b7f0642e294fb528499b0920a03ec54035f1dc6b0630db5e045e4781fd77c7e`
**Rule-manifest SHA-256:** `bf42198a5128b955bee094786d87b6184382bcf33161302b8f0fa64d85f4b969`
**Extractor:** `tools/catalog/extract-awesome-catalog.mjs` v1.0.0 (`a9700a7b1ff3a2076607809fcf5e5285b88adbea22c913ab61d28553aa2abfab`)

## Accounting

| Measure | Count |
| --- | ---: |
| All rendered/link-like occurrences | 652 |
| Qualifying outbound resource occurrences | 415 |
| Mechanically excluded occurrences | 237 |
| Unique normalized qualifying URLs | 401 |
| Offline family keys | 401 |
| Syntactically unresolved family keys | 0 |
| Reference definitions | 0 |

Invariant 1: **PASS** — 652 = 415 + 237.

Invariant 2: **PASS** — all 415 qualifying occurrences map to exactly one offline family key or syntactically unresolved identity.

No URL was requested, resolved through redirects, or opened during extraction. An offline family key is not a verified source identity: possible aliases across different URLs remain `not_assessed`. Accessibility is `not_assessed` unless an earlier authorized source lifecycle is explicitly merged.

## Mechanical exclusions

| Class | Count |
| --- | ---: |
| `presentation_image` | 191 |
| `in_page_navigation` | 24 |
| `translation_link` | 9 |
| `repository_local_or_relative` | 7 |
| `header_badge_or_repository_chrome` | 5 |
| `acknowledgment_or_profile` | 1 |

## Qualifying occurrences by catalog category

| Category | Occurrences |
| --- | ---: |
| Security, Sandbox & Permissions | 38 |
| Design Primitives / Skills & MCP | 34 |
| Design Primitives / Task Runners & Orchestration | 34 |
| Reference Implementations / Demo Harnesses | 31 |
| Foundations | 30 |
| Design Primitives / Context Delivery & Compaction | 25 |
| Design Primitives / Memory & State | 25 |
| Design Primitives / Agent Loop | 21 |
| Evals & Verification | 19 |
| Production Infrastructure & Operations | 19 |
| Reference Implementations / Generators & Meta-Harnesses | 18 |
| Design Primitives / Observability & Tracing | 15 |
| Design Primitives / Tool Design | 15 |
| Design Primitives / Verification & CI Integration | 14 |
| Reference Implementations / Tutorials & Educational | 14 |
| Design Primitives / Debugging & Developer Experience | 13 |
| Design Primitives / Permissions & Authorization | 13 |
| Design Primitives / Planning & Task Decomposition | 12 |
| Design Primitives / Human-in-the-Loop | 11 |
| Reference Implementations / Adjacent Collections | 7 |
| Related Awesome Lists | 7 |

## Catalog-only triage

| Status | Families |
| --- | ---: |
| `candidate_for_direct_screening` | 337 |
| `defer` | 44 |
| `out_of_current_scope` | 14 |
| `already_screened` | 6 |

| Apparent form | Families |
| --- | ---: |
| `repository` | 169 |
| `article_or_web_resource` | 114 |
| `paper_or_preprint` | 61 |
| `course_collection_or_guide` | 26 |
| `documentation_or_specification` | 18 |
| `benchmark_or_evaluation` | 13 |

| Offline identity basis | Families |
| --- | ---: |
| `structural_github_repository_key` | 186 |
| `provisional_normalized_url_key` | 155 |
| `structural_arxiv_work_key` | 54 |
| `previously_opened_identity` | 6 |

These statuses and forms are curator-context metadata, not source evaluation, provenance dispositions, evidence, or outline authority.
