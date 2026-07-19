# First Learning Experience — Independent Review Record

**Status:** Pending — Fable session limit, no review verdict produced
**Date:** 2026-07-19
**Artifact:** `where-harnesses-put-control` and its generated static site

## Review scope

The planned read-only review covers:

- `site/`
- `tools/learning-site/`
- `tools/html-writer/`
- `learning/`
- the first-batch synthesis and claim ledger
- D-013, current authorization, and the reviewer contract

The review is intended to test research-to-learning fidelity, certainty labels,
counterevidence, technical mental models, evidence drill-down, accessibility,
navigation, and the separation among the Codex writer, Fable writer, and
read-only Fable reviewer.

## Deterministic evidence prepared for review

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

## Reviewer invocation state

Two bounded `claude_review` invocations exited before returning a report. A
subsequent no-tools Fable-high health probe returned HTTP 429 with the explicit
message `You've hit your session limit · resets 4:30am (America/Chicago)`.

These failures are not a review, finding set, or PASS. No Claude finding,
concern, recommendation, or challenge exists to disposition yet. The site
remains prepared for review, and Checkpoint 4 remains awaiting maintainer
review.

## Required continuation

After the Fable limit resets, run one fresh read-only `claude_review` against
the scope above. Codex must independently disposition every returned item,
implement agreed in-scope fixes, rerun deterministic validation, and use at
most one focused `claude_verify` pass. Update this record with the actual model,
findings, dispositions, fixes, verification result, and remaining limits.
