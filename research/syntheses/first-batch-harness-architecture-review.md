# Independent Review: First-Batch Synthesis and Learning Markdown

**Date:** 2026-07-18
**Reviewer:** Independent Claude reviewer, `claude-fable-5[1m]`, high effort
**Review type:** Read-only adversarial review with direct repository and pinned-evidence access
**Reviewed artifacts:** Canonical synthesis and ledger, human learning Markdown, four reviewed case ledgers, admitted source records, and generated synthesis audit
**Initial verdict:** `inconclusive` because the reviewer's scope tracker did not record direct inspection of every declared supporting path
**Codex disposition:** Substantive content review accepted; one low-severity finding and two useful concerns accepted and fixed. The scope-tracker limitation did not identify a missing central artifact or a consequential content defect.

## What the review established

The reviewer directly challenged the central learning and research claims and found that:

- the learning chapter matches or weakens the canonical synthesis rather than strengthening it;
- OpenClaw and Hermes recurrence is not counted as independent corroboration;
- all reported claim-audit counts reconciled before the agreed evidence addition;
- heavily used claim anchors resolve;
- optional and default behavior remain separated;
- the OpenHands and BenchAgent quantitative claims retain their protocol limits; and
- the teaching diagram represents durable state as cross-cutting and external evaluation as an optional consumer of trajectories and outcomes.

The reviewer found no material overstatement of effectiveness, prevalence, independence, browser transfer, or taxonomy finality.

## Dispositions

| Item | Codex assessment | Disposition |
| --- | --- | --- |
| F-001 — synthesis and source indexes still said the canonical audit was pending | `accept` | Updated both indexes to state that the complete promotion-profile audit passes. |
| CN-001 / R-001 — MemoryAgentBench was admitted in case-level qualification but silently absent from the synthesis | `accept` | Added FL-S008 as bounded contextual evidence for C010, added its source back-reference and human explanation, and regenerated the audit. It does not directly test OpenClaw or Hermes. |
| CN-002 — `learning/README.md` described the future `site/` layer in present tense | `accept` | Changed the statement to future tense while preserving Markdown canonicality. |
| R-002 — one Checkpoint 3 consequence retained pre-approval conditional wording | `accept` | Replaced the condition with explicit D-013-approved wording. |

No consequential disagreement remained, so `claude_reconcile` was not used.

## Focused verification

The first `claude_verify` invocation made after the agreed fixes exited with code 1 before returning a report. Codex therefore performed the focused verification directly:

- provenance test suite: PASS;
- canonical synthesis event validation: PASS;
- promotion-profile audit: PASS at `complete` provenance;
- 14 referenced sources, 17 declarations, 65 mappings, and 65 primary verifications;
- zero blocking audit errors and two resolved selection-depth warnings;
- JSON and JSONL parsing: PASS;
- local Markdown links: PASS; and
- `git diff --check`: PASS.

After the human repaired the verifier, the maintainer explicitly authorized resuming from that failed boundary. A fresh Fable-high verification then directly confirmed all four agreed dispositions and the audit counts above. It reported no finding or recommendation. Its only concern was that this section still described the earlier failed invocation as the final verifier state; this paragraph closes that record-accuracy issue.

The completed verifier retained an `inconclusive` headline because its scope tracker did not record fresh inspection of twelve unchanged ancillary source records. It did inspect every changed or load-bearing path for the agreed fixes, including the synthesis, learning chapter, claim ledger, MemoryAgentBench record, canonical events, and generated audit. All six substantive falsification challenges survived. Codex accepts the path-coverage limitation as non-consequential for this focused pass: the unchanged records had already been admitted and verified, the deterministic package passed independently, and the verifier found no evidence of content drift. No further review loop is warranted.

## Review conclusion

The Markdown layer passes content validation for the bounded first learning experience. It remains `provisional` pending the maintainer's actual reading and feedback; that human learning review is the intended test of explanatory value.
