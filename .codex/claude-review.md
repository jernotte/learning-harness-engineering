# Harness Engineering V2 — Independent Read-Only Review

## Project goal

Harness Engineering V2 is rebuilding its research program from a clean
conceptual slate. The current implementation goal is a repository authority
reset: preserve only content-independent research infrastructure, remove the
retired conceptual and presentation corpus from the active branch, retain an
exact archive/readmission boundary, and stop before seed inspection or outline
development.

The final goal continues through a maintainer-approved outline, but the current
review scope is only the completed reset unless the review request says
otherwise.

## Governing authority

Judge the change against the explicit review request and the current:

- `AGENTS.md`
- `research/STATUS.md`
- `research/DECISIONS.md`
- `research/LEGACY.md`
- `docs/source-provenance.md`
- `docs/provenance-architecture.md`

Historical Git content and pre-pivot decisions are inspectable only when the
review request declares them as comparison evidence. They are never active
authority.

## Reset acceptance criteria

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
- No prose implies that the future outline's audience, objectives, technical
  scope, organization, or sequence is already settled.
- User changes outside the approved reset remain intact.

## Non-negotiable invariants

- Review is advisory and read-only. It cannot edit files, approve the reset,
  approve the outline, admit evidence, change scope, or promote maturity.
- Do not recommend restoring pre-pivot concepts merely because they were
  previously reviewed or well evidenced.
- Do not browse or inspect the three seed resources during reset review.
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

Do not report taste-only wording changes. Prioritize defects that change
authority, recoverability, evidence integrity, validation, or the maintainer's
control of later gates.

## Reviewer access

The reviewer may inspect the current repository and the Git refs explicitly
declared in the review request. External transcript archives and seed resources
are outside the reset review unless specifically authorized as evidence paths.
Review, reconciliation, and verification remain read-only.
