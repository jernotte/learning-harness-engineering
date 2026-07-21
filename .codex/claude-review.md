# Harness Engineering V2 — Independent Read-Only Review

## Project goal

Harness Engineering V2 is rebuilding its research program from a clean
conceptual slate. The authority reset is complete. V2-D005 through V2-D011
approve an outline-first process. The maintainer approved core-02's exact
19 `read_only` / one `excluded` dispositions and corrections, then approved
the method exercised in core-03 plus its exact 17 `read_only` / three
`excluded` dispositions and corrections. The authorized 20-source
`awesome-screen-core-04` calibration within `v2-outline-seed-map` is complete
and awaiting maintainer review; its proposed result is 17 `read_only` / three
`excluded`. Its opening authority is exhausted, and no core-05 or later batch
is authorized. The final goal continues through a maintainer-approved outline
and stops before substantive research.

The explicit review request determines whether the scope is the completed
reset, a Stage 4 seed-map checkpoint, later outline work, or another bounded
change. Never transfer authority or maturity between those scopes.

## Governing authority

Judge the change against the explicit review request and the current:

- `AGENTS.md`
- `research/STATUS.md`
- `research/DECISIONS.md`
- `research/LEGACY.md`
- `research/outline-development/brief.md`
- `docs/design-history.md`
- `docs/source-provenance.md`
- `docs/provenance-architecture.md`

Historical Git content and pre-pivot decisions are inspectable only when the
review request declares them as comparison evidence. They are never active
authority.

## Reset acceptance criteria when reset is in scope

- The active worktree is attached to `codex/harness-engineering-v2` and its
  history descends from
  `2ad6c8cf5d5246874475df2acc71c6fdc74cdbba`.
- `codex/archive-pre-pivot-2026-07-20` still resolves to
  `071fd2d833c809723c881921956a50e46fa748f1`.
- No active governing file instructs agents to use the inherited R1–R11
  taxonomy, old cases, case order, syntheses, curriculum, learning artifacts,
  or checkpoint decisions.
- Retired conceptual, legacy evidence, learning, site, and hard-coded writer
  paths named by the approved reset manifest are absent from the active tree.
- The archive/readmission contract prevents automatic transfer of old sources,
  claims, IDs, maturity, approval, or review status.
- The retained provenance code and taxonomy-neutral templates remain present.
- Historical validation is labeled as infrastructure evidence rather than V2
  subject evidence or proof of current runtime compatibility.
- Deterministic provenance and local-link checks pass.
- The reset does not inspect seed sources, admit subject evidence, define a
  substantive taxonomy, or begin downstream research.

## Stage 4 acceptance criteria when structural mapping is in scope

- V2-D005 and V2-D006 were approved before the first seed interaction;
  V2-D007 records the later catalog-method correction and explicitly withdraws
  the never-opened Wave 2; V2-D008 approves the catalog gate and authorizes only
  the exact `awesome-screen-core-01` batch; V2-D009 approves that calibration's
  method and dispositions and authorized only exact `awesome-screen-core-02`.
  V2-D010 approves continued use of the core-02 method and authorized only exact
  `awesome-screen-core-03`; V2-D011 approved the outstanding core-02 and
  core-03 results and authorized only exact `awesome-screen-core-04`. All four
  opening authorizations are now exhausted.
- The original repository seed is pinned to the observed commit, the local PDF
  has a verified fingerprint, and the Walking Labs curriculum repository is
  pinned before structural inspection.
- The completed seed and Wave 1 boundaries remain immutable. Each later
  curriculum, catalog, or screening pass has an honest, separately declared
  native boundary under the `diagnostic` profile.
- Every opened source has identity, discovery path, inspected locations,
  reading depth, lineage, freshness or version state, and final disposition.
- Every pinned Awesome README link occurrence is accounted for by an explicit
  resource inclusion or mechanical exclusion rule. Deduplication preserves all
  occurrence and category contexts, and unresolved identities remain visible.
- Catalog titles, categories, ordering, recurrence, and curator annotations are
  labeled as catalog metadata rather than direct source evaluation or evidence.
- The Walking Labs analysis identifies objectives, scope, organizing model,
  sequence, projects, assumptions, references, and omissions without adopting
  its curriculum.
- Similarly named Awesome repositories are not treated as independent until
  their lineage is checked.
- Before V2-D008, no previously unopened outbound catalog family was opened.
  Core-01 opened exactly its 20 registered direct URLs. Core-02 later opened
  exactly its 20 registered direct URLs—and no other family—under V2-D009. No
  topical search, identity query, second hop, implementation deep dive,
  core-01 reopen, or legacy readmission occurred. Core-03 then opened exactly
  its 20 registered direct URLs—and no other family—without reopening either
  completed prior batch. Core-04 then opened exactly its 20 registered direct
  URLs, preserved its 22 occurrence joins, and did not reopen any prior batch.
- Every authorized direct screen records actual identity, accessibility,
  relevance, scope, evidence posture, visible lineage, inspection extent, and a
  final disposition without treating the screen as deep reading or evidence.
- Material outline-choice claims, if any, have V2 claim IDs, exact mappings,
  primary verification, and full source records. Nothing is promoted.
- Work is stopped at the `awesome-screen-core-04` source-screening gate with
  its complete source lifecycles, reconciled diagnostic provenance, schema
  friction, and recommendation; all later batches remain blocked.

## Quality bar

- Authority is unambiguous across README, agent instructions, status, coverage,
  decisions, legacy policy, and this review contract.
- The reset is internally coherent: removed source records do not leave active
  subject event packages or stale backlinks.
- Retained provenance rules continue to require exact evidence, honest
  completeness, append-only correction, source disposition, claim mapping,
  primary verification, and fail-closed unknown interactions.
- Historical infrastructure claims remain accurately scoped by runtime and
  date.
- During reset review, no prose may pre-approve the future outline. During
  outline development, treat only the choices explicitly approved in V2-D005
  or a later maintainer decision as settled.
- Outline-development artifacts label source-native terms, cross-source
  inferences, structural proposals, and open questions without blurring them.
- A source's organization, popularity, or repetition is never treated as proof
  that the final outline should adopt it.
- User changes outside the declared review scope remain intact.

## Non-negotiable invariants

- Review is advisory and read-only. It cannot edit files, approve the reset,
  approve the outline, admit evidence, change scope, or promote maturity.
- Do not recommend restoring pre-pivot concepts merely because they were
  previously reviewed or well evidenced.
- Do not browse or inspect the three seed resources during reset review. During
  Stage 4 review, inspect only captured artifacts and evidence paths explicitly
  authorized in the review request; do not widen the source boundary or follow
  references independently.
- Do not propose speculative provenance infrastructure. Report an actual defect
  in the retained implementation only when it affects the reset or deterministic
  evidence.
- Preserve the audit funnel and the distinction between source reports,
  implementation facts, inferences, hypotheses, recommendations, and open
  questions.
- A passing test establishes only what that test covers.

## Validation commands

```sh
node tools/provenance/test.mjs
node tools/provenance/check-local-links.mjs
```

The reviewer should inspect the actual diff and current tree in addition to the
reported command output.

## Review emphasis

- Ghost authority or stale links to retired concepts.
- Legacy records, generated artifacts, or hard-coded presentation inputs left
  active accidentally.
- A clean-slate statement contradicted by status, decisions, templates, or
  review instructions.
- Weak archive identity or a readmission rule that permits maturity transfer.
- Missing validation fixtures required by the retained test suite.
- Claims that historical adapter validation proves current or universal
  runtime coverage.
- Scope drift into seed analysis, outline content, or substantive research.
- For Stage 4, an incomplete pinned-catalog census, unaccounted or silently
  discarded link occurrences, lossy deduplication, unpinned repository
  identity, curator metadata presented as source evaluation, unverified
  repository lineage, a source outside the authorized batch, a search or second
  hop, hidden taxonomy or curriculum adoption, unsupported cross-source
  judgment, or provenance overstatement.

Do not report taste-only wording changes. Prioritize defects that change
authority, recoverability, evidence integrity, validation, or the maintainer's
control of later gates.

## Reviewer access

The reviewer may inspect the current repository, Git refs, and local evidence
paths explicitly declared in the review request. External transcript archives,
raw conversation packets, archived legacy material, seeds, and retained source
content are out of scope unless the request names the exact path and records
the required maintainer authorization. Review, reconciliation, and verification
remain read-only.
