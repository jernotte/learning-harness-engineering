# Bounded Provenance Validation

This directory contains the derived acceptance and preflight evidence for approved D-004.

- `bounded-fail-audit.md` and `.json` are generated from the deliberately deficient fixture. Blocking is the expected result.
- `bounded-pass-audit.md` and `.json` are generated from the corrected fixture. Passing with one visible, explained concentration warning is the expected result.
- `native-observations.jsonl` is generated from the miniature Codex rollout fixture. It contains one capture boundary and two fingerprint-only tool observations; raw tool inputs and outputs are absent.
- `real-capture-auto.jsonl` is adapter-derived from an immutable window of the actual Codex thread transcript.
- `real-capture-annotations.json` is the single semantic batch used for the real test.
- `real-capture-events.jsonl` combines automatic events with that batch.
- `real-capture-audit.md` and `.json` are the passing near-zero-overhead acceptance evidence.
- `realistic-preflight-auto.jsonl` is adapter output for a 38-observation slice of the actual Stage 0.5 implementation session.
- `realistic-preflight-resolutions.json` is one append-only batch resolving the two generic tool-inventory exceptions and correcting the effective state of one archived truncated search.
- `realistic-preflight-events.jsonl` preserves the original false-zero event plus its update. The generated audit retains the 36/2 overhead result while blocking on incomplete returned-result capture.

The canonical fixtures and implementation live under `tools/provenance/`. Regenerate with:

```sh
node tools/provenance/cli.mjs audit --events tools/provenance/fixtures/bounded-fail.jsonl --json research/provenance/validation/bounded-fail-audit.json --markdown research/provenance/validation/bounded-fail-audit.md --cycle bounded-validation --completeness complete
node tools/provenance/cli.mjs audit --events tools/provenance/fixtures/bounded-pass.jsonl --json research/provenance/validation/bounded-pass-audit.json --markdown research/provenance/validation/bounded-pass-audit.md --cycle bounded-validation --completeness complete
node tools/provenance/cli.mjs ingest-codex --rollout tools/provenance/fixtures/rollout.jsonl --out research/provenance/validation/native-observations.jsonl --cycle bounded-validation --pass native-test
node tools/provenance/cli.mjs audit --events research/provenance/validation/real-capture-events.jsonl --json research/provenance/validation/real-capture-audit.json --markdown research/provenance/validation/real-capture-audit.md --cycle stage-0-5-real-capture --completeness complete --acceptance near-zero --requireRepository true --requireReviewScope true --requireArchive true
node tools/provenance/cli.mjs resolve-observations --events research/provenance/validation/realistic-preflight-auto.jsonl --resolutions research/provenance/validation/realistic-preflight-resolutions.json --out research/provenance/validation/realistic-preflight-events.jsonl
node tools/provenance/cli.mjs audit --events research/provenance/validation/realistic-preflight-events.jsonl --json research/provenance/validation/realistic-preflight-audit.json --markdown research/provenance/validation/realistic-preflight-audit.md --cycle stage-0-5-realistic-preflight --completeness complete
node tools/provenance/test.mjs
node tools/provenance/check-local-links.mjs
```

The deliberately deficient fixture audit and the corrected historical preflight audit both exit with status 2 by design. The former proves the general gate; the latter honestly preserves an unrecoverable truncated result window while leaving the overhead measurement inspectable.

The link checker scans every Markdown file under the repository root except `.git` and reports only pass/fail plus missing targets. Acceptance reports do not quote a file count, avoiding scope-dependent count discrepancies.

The real test captured one official-documentation search, three returned results, one fetched source, and one ordinary local repository inspection. It passed transcript-prefix and per-observation fingerprint verification with zero manual interaction-capture actions and one semantic batch.

The real acceptance package now includes a review-scope manifest, two canonical material claims, two exact source mappings, two primary verification events, and a matching prose-ledger attestation. The Stage 0.5-only `semantic_batch_actions <= 1` rule does not apply to normal research cycles.

Its `capture_archive` record points to the approved external raw prefix under `/Users/jernotte/dev/reference-materials/research/provenance-transcripts/`. The archive contains lines 1–1641, is 5,434,209 bytes, has SHA-256 `fd4a1895c9a1600a819ee7cca0b1f95df6c22e15cb46d49096870c1152147414`, and is owner-readable/writable only. The generated real audit is run with `--requireArchive true` and cryptographically verifies it.

The realistic preflight covers `2026-07-11T19:48:00Z` through `20:01:00Z`. Two of 38 observations (5.3%) required semantic review, both in one batch; the other 36 were resolved from ordinary tool use. This remains evidence for exception-scaled overhead. Separately, the archived output for its documentation search was runtime-truncated. The original automatic zero remains visible in history, while its effective audit state is now unknown and `incomplete_truncated`; the audit blocks on that result-capture gap.
