# Harness Engineering V2 — Independent Read-Only Review

## Project goal

Harness Engineering V2 is rebuilding its research program from a clean
conceptual slate. The authority reset is complete. V2-D005 and V2-D006 approve
an outline-first process whose active implementation stage is the bounded
`v2-outline-seed-map` task. The final goal continues through a
maintainer-approved outline and stops before substantive research.

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

## Stage 4 acceptance criteria when seed mapping is in scope

- V2-D005 and V2-D006 were approved before the first seed interaction.
- The task inspects exactly the three mandatory seeds before the seed-only
  checkpoint and does not open a first-hop source early.
- The repository seed is pinned to the observed commit, and the local PDF has
  path, SHA-256, byte count, modification time, and an independent recheck.
- The native capture boundary is declared before interaction, reconciled after
  the first external interaction, and audited under the `diagnostic` profile
  with honest `complete_with_declared_manual_sources` treatment.
- Every opened source has identity, discovery path, inspected locations,
  reading depth, lineage, freshness or version state, and final disposition.
- The seed map separates source-native extraction from cross-source structural
  judgment and does not adopt a seed taxonomy or claim field completeness.
- The first-hop register counts exact direct-hop evidence, seed attribution,
  unresolved outline decision, wave, query use, approval checkpoint, and open
  state. No topical search, second hop, implementation deep dive, or legacy
  readmission occurs.
- Material outline-choice claims, if any, have V2 claim IDs, exact mappings,
  primary verification, and full source records. Nothing is promoted.
- Work stops at the seed-only gate with an unopened Wave 1 proposal of at most
  six source families.

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
- For Stage 4, early first-hop access, incomplete seed surfaces, unpinned source
  identity, weak direct-hop evidence, cap/query drift, hidden taxonomy adoption,
  unsupported cross-source judgment, or provenance overstatement.

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
