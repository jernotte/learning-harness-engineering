# V2 Catalog Gate

**Status:** Approved 2026-07-20<br>
**Authority:** V2-D007 package; approved by V2-D008<br>
**Promotion:** None
**New catalog destinations opened:** Zero

This gate answers the maintainer's concern that the AI Boost repository is a
resource aggregator rather than one ordinary source. It accounts for the whole
pinned catalog, analyzes the Walking Labs course as a curriculum candidate,
and proposes an exact program for evaluating every catalog family. It does not
choose a taxonomy, draft an outline, admit evidence, or treat curator metadata
as source evaluation.

## Approval outcome

The maintainer approved this gate, ratified the bounded Git-lineage
interpretation, approved all 21 proposed batches as intended screening scope,
and authorized only `awesome-screen-core-01` for execution. The other 20
batches remain blocked pending later source-screening gates. The authorized
batch is anchored to `awesome-screening-plan.json` at commit
`3c66817a1f7a43adf7492451f859c501f1dfee7c` (SHA-256
`8ce00b2a284a2f789972f3322586497ff0450b734d3cf2d3ad8aec5d8f0169fc`).
V2-D008 supersedes only `awesome-screen-core-01`'s historical
`proposed_not_authorized` field in that immutable gate proposal; the batch's
membership and constraints remain controlling.

The authorized batch has now completed and is recorded in
`awesome-screen-core-01.md`: 20 unique registered families, 19 `read_only`
dispositions, one redirect-shell exclusion, no search, no second hop, and no
promotion. V2-D009 approves its method and dispositions and authorizes only the
exact `awesome-screen-core-02` batch under the same boundary. That second batch
has also completed and is recorded in `awesome-screen-core-02.md`: 20 unique
registered families, 19 proposed `read_only` dispositions, one proposed
substantive-inspectability exclusion, no search, no second hop, and no
promotion. Its authorization is exhausted. V2-D010 approved continued use of
the core-02 method and authorized only exact `awesome-screen-core-03`. Core-03 has now
completed and is recorded in `awesome-screen-core-03.md`: 20 unique registered
families, 17 proposed `read_only` dispositions, three proposed access-based
exclusions, no search, no second hop, and no promotion. Its authorization is
exhausted. V2-D011 approved core-02's and core-03's recorded dispositions,
methods, and catalog corrections and authorized only exact
`awesome-screen-core-04`. Core-04 has now completed with 17 proposed
`read_only` dispositions and three proposed access-based exclusions; its
opening authority is exhausted, and the other 17 batches remain blocked.

## Approved decision package

1. The catalog occurrence/exclusion rules and offline family accounting were
   accepted.
2. The Walking Labs curriculum analysis was accepted and the bounded
   Git-lineage interpretation was ratified.
3. The complete 21-batch direct-screening program was approved as intended
   scope.
4. V2-D008 authorized only `awesome-screen-core-01`; after its completion,
   V2-D009 authorized only `awesome-screen-core-02`; after that completion,
   V2-D010 authorized only `awesome-screen-core-03`; after that completion,
   V2-D011 authorized only `awesome-screen-core-04`. All four opening
   authorizations are exhausted. Every other batch remains blocked unless
   explicitly approved later.

This accepted recommendation preserves calibration before scale. The first 20
sources span 18 catalog categories and five apparent source forms, making the
batch a useful test of the direct-screen schema before hundreds of opens could
compound a classification mistake.

## Complete pinned-catalog accounting

Catalog input: `ai-boost/awesome-harness-engineering` README at
`09bda3af8c32b95958f0158e0f356076d6ab44c8`.

| Measure | Count |
| --- | ---: |
| All extracted link-like occurrences | 652 |
| Qualifying outbound resource occurrences | 415 |
| Mechanically excluded occurrences | 237 |
| Unique normalized qualifying URLs | 401 |
| Offline source-family keys | 401 |
| Syntactically unresolved keys | 0 |
| Previously opened identities | 6 |
| Structurally canonicalized GitHub/arXiv keys | 240 |
| Provisional normalized-URL keys | 155 |

Both accounting invariants pass: `652 = 415 + 237`, and every qualifying
occurrence maps to exactly one offline family key or syntactically unresolved
identity. Eleven families recur in more than one catalog occurrence; ten span
more than one category. Those contexts remain in the occurrence ledger rather
than being erased by deduplication.

“Offline family key” is deliberately narrower than “verified source identity.”
No redirect was resolved, no destination was opened, and possible aliases
across different URLs remain `not_assessed` until direct screening.

### Mechanical exclusions

| Class | Count |
| --- | ---: |
| Presentation images | 191 |
| In-page navigation | 24 |
| Translation links | 9 |
| Repository-local/relative targets | 7 |
| Header badges/repository chrome | 5 |
| Acknowledgment/profile | 1 |

The versioned rule manifest recognizes inline and reference-style Markdown
links/images, HTML anchors/images, Markdown autolinks, and bare HTTP URLs. Its
fixture tests include malformed URLs, reference-style images, multi-category
precedence, GitHub/arXiv normalization, and source-form regression cases.

## Catalog-context triage

| Catalog-only status | Families | Meaning at this gate |
| --- | ---: | --- |
| `candidate_for_direct_screening` | 337 | At least one catalog context suggests possible direct outline relevance |
| `defer` | 44 | Tutorial/demo/template context lowers immediate order but does not remove it from complete evaluation |
| `out_of_current_scope` | 14 | Direct collection boundary may be screened; its links remain prohibited second hop |
| `already_screened` | 6 | Reuse prior `read_only` structural screen without added maturity |
| `unresolved_identity` | 0 | No target was syntactically impossible to key offline |

Multi-category status uses a declared deterministic precedence:
`candidate_for_direct_screening > defer > out_of_current_scope`. A source that
appears once in a core category and once under demos therefore remains a
candidate instead of being demoted by manifest insertion order.

The catalog is implementation-heavy even before destinations are read: the
apparent-form heuristic yields 169 repositories, 114 web/articles, 61
papers/preprints, 26 courses/collections/guides, 18 documentation/specification
surfaces, and 13 benchmarks/evaluations. These are URL-and-label heuristics,
not verified source types or evidence-quality judgments.

## Walking Labs curriculum candidate

The pinned course at
`e587e4cce9cfe9b0523fd79d6e0152d4a1f1dfc3` is a coherent, project-based
coding-agent curriculum: 13 lectures, seven projects, and 15 displayed language
variants. Its sequence moves from failure framing and a harness definition
through repository structure, continuity, scope, verification,
observability/cleanup, and finally autonomous loops.

It is useful as a pedagogical proposal, but unsuitable as an automatic V2
outline baseline:

- it assumes coding agents and repositories as the normal domain;
- it teaches opinionated file-backed state and one-feature-at-a-time defaults;
- its root README defines Instructions/State/Verification/Scope/Session
  Lifecycle, while Lecture 2 defines Instructions/Tools/Environment/State/
  Feedback;
- its projects accumulate changes in one Electron application, limiting clean
  causal and transfer inferences; and
- its polished learning journey could anchor V2 toward a coding workshop before
  objectives and field structure are approved.

The complete structural analysis and exact pinned evidence locations are in
[`walkinglabs-curriculum.md`](walkinglabs-curriculum.md).

## Repository lineage and the ratified interpretation

The two Awesome repositories have different roots and initial H2 structures,
zero commit hash in common across the complete local graphs, different current
README hashes, and 61 versus 197 commits. Their current READMEs share 22 literal
HTTP strings; after removing common Awesome-list chrome, 20 are substantive
resource URLs. The bounded inference is that they are not Git forks or mirrors
in the inspected Git lineage. That does **not** establish editorial or source
independence, and recurrence across them is not corroboration.

The brief both requires this lineage to be established and says the shallow-
repository warning should be resolved without prohibited “implementation code
or history.” The pass interpreted the explicit lineage requirement as allowing
Git identity metadata only—heads, roots, commit graphs, README hashes/headings,
the course-link introduction, and URL overlap—while implementation history
remained prohibited. The maintainer ratified that bounded interpretation in
V2-D008. It does not establish editorial or source independence.

## Proposed evaluation program

Every one of the 401 families appears exactly once in the plan:

- 6 prior read-only screens are reused without reopening;
- 337 core candidates occupy 17 batches;
- 44 deferred applied/tutorial/demo/template families occupy three batches;
- 14 adjacent collections occupy one direct-boundary batch; and
- no deep-reading set is proposed yet.

That is 395 proposed new direct screens in 21 batches of at most 20. Each row
predeclares the offline family key, catalog contexts, planned direct surface,
inspection extent, unresolved outline decision, expected structural effect,
identity-query state, and prohibited second-hop boundary. Direct screening must
establish source identity, accessibility, actual relevance, scope, evidence
posture, and lineage before any deep-reading choice becomes defensible.

Review surfaces:

- [catalog audit](awesome-catalog-summary.md)
- [complete 401-family triage](awesome-catalog-triage.md)
- [human-readable exact batches](awesome-screening-batches.md)
- [machine-readable exact plan](awesome-screening-plan.json)
- [raw occurrence ledger](awesome-link-occurrences.jsonl)
- [offline family set](awesome-source-families.json)

## Limits preserved at catalog-gate approval

- No previously unopened catalog destination was opened or queried.
- No destination bibliography, course reference, or second-hop link was
  followed.
- No topical/ecosystem search, implementation deep dive, outline drafting,
  evidence promotion, legacy readmission, curriculum adoption, or learning-
  material work occurred.
- One evidence-location diagnostic over-broadly pattern-scanned `docs/en`
  Markdown and returned isolated lines from some code/template navigation
  files. Those lines support no analysis; the incident is explicit in the
  curriculum artifact and provenance.
- At that gate checkpoint, the diagnostic provenance audit passed at
  `complete_with_declared_manual_sources`, with six native boundaries, 230
  observations, zero unreconciled observations, zero claims, and three
  resolved historical channel-counter warnings.

The configured external reviewer could not be used for this revised source
scope because the recorded tenant rule still prohibits that transfer even
after the maintainer's authorization. It was not retried or circumvented. Two
initial bounded local read-only audits reviewed catalog accounting and
curriculum authority/traceability; a final gate/control pair checked authority,
provenance, hashes, and generated-output determinism. All findings were
independently checked, fixed, and verified.
