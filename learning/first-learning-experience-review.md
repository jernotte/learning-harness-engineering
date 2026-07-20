# First Learning Experience — Independent Review Record

**Status:** Original pilot rejected; replacement prepared for maintainer reading, Fable review deferred
**Date:** 2026-07-19
**Artifact:** Rejected `where-harnesses-put-control` pilot and replacement `context-management-in-agent-harnesses`

## Maintainer disposition

On 2026-07-19, the maintainer accepted the website presentation but rejected the learning content. The material was too abstract and shallow, provided too little mechanism-level explanation, did not compare harnesses along consistent axes, and devoted too much attention to process and evidence posture relative to the engineering being taught. The maintainer explicitly stated that the chapter reduced rather than improved understanding.

The active curriculum is being replaced rather than incrementally polished. The replacement starts with context management and must meet a new content bar: concrete problem, exact implementation flow, same-axis comparison, tradeoff and failure analysis, builder consequence, and optional evidence drill-down.

## Review scope

The later read-only review will cover:

- `site/`
- `tools/learning-site/`
- `tools/html-writer/`
- `learning/`
- the context-management synthesis and claim ledger
- D-014, current authorization, and the reviewer contract

The review is intended to test research-to-learning fidelity, certainty labels,
counterevidence, technical mental models, evidence drill-down, accessibility,
navigation, and the separation among the Codex writer, Fable writer, and
read-only Fable reviewer.

## Historical rejected-pilot validation

The rejected pilot passed deterministic presentation and fidelity checks. Those
checks did not establish that the content taught the subject well; the
maintainer's rejection is the controlling result.

- Codex learning-site generator: PASS, 26 assertions.
- Separate Fable-high writer integration: PASS, four focused safety/model tests.
- Static and browser site validator: PASS with zero errors or warnings.
- Responsive Chrome rendering: desktop, tablet, and mobile PASS without
  horizontal overflow.
- Keyboard, focus, theme, evidence expansion, text contrast, console/runtime,
  dark-mode, and print checks: PASS.
- Manifest hash verification and byte-identical clean regeneration: PASS.
- Local Markdown links and `git diff --check`: PASS.
- Codex visual inspection of landing, chapter, responsive, and dark viewports:
  PASS.

## Replacement validation

- Canonical replacement chapter: `learning/chapters/context-management-in-agent-harnesses.md`.
- Agent-grade substrate: `research/syntheses/context-management-across-harnesses.md`
  and its 15-claim working ledger.
- Deterministic Codex site generator: PASS, 29 assertions.
- Static and browser validation: PASS with zero errors or warnings.
- Source manifest: 14 canonical inputs with verified hashes and four generated
  output records.
- Responsive desktop, tablet, mobile, dark-mode, keyboard, print, internal-link,
  and source-to-output checks: PASS.
- Codex visual inspection of the landing page, full chapter, diagrams, tables,
  evidence disclosures, and mobile rendering: PASS.
- Independent Fable content review: deferred by capacity; no PASS is claimed.

## Promotion state

The replacement is ready for maintainer **content** review, not maturity
promotion. It has full narrative records for every new referenced source, exact
pinned locations, reciprocal mappings in the four reused case records, and a
15-claim working ledger. It does not yet have a dedicated canonical event log,
per-mapping primary-verification events, prose-to-ledger attestation, review
scope, or generated source and claim-evidence audit. No waiver has been issued.
Those gates remain visible so the evidence machinery supports the chapter
without delaying the maintainer's first judgment about whether it actually
teaches the subject.

## Reviewer invocation state

Two bounded `claude_review` invocations exited before returning a report. A
subsequent no-tools Fable-high health probe returned HTTP 429 with the explicit
message `You've hit your session limit · resets 4:30am (America/Chicago)`.

These failures are not a review, finding set, or PASS. No Claude finding,
concern, recommendation, or challenge exists to disposition yet. The rejected
pilot remains rejected, and the replacement remains prepared for maintainer
reading and later independent review.

## Required continuation

Codex is authorized to complete and deterministically validate the replacement
without Fable because the Fable session limit remains a blocker. After the
limit resets, run one fresh read-only `claude_review` against the finished
replacement. That later review is not allowed to retroactively turn this
deferred state into a PASS. Codex must disposition the returned items,
implement agreed in-scope fixes, rerun validation, and use at most one focused
`claude_verify` pass.
