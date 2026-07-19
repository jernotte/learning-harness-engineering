# Hermes Agent v0.18.2 Independent Review

**Status:** Initial review dispositioned, focused Claude verification passed, and Gate A approved under D-012
**Reviewed package:** [Hermes Agent v0.18.2](hermes-agent-v0.18.2.md)
**Initial review date:** 2026-07-18
**Promotion authority:** Maintainer at Gate A; neither Claude nor Codex can self-promote the case

## Reviewer identity and boundary

The opted-in read-only reviewer ran with direct repository access and the pinned Hermes checkout as declared evidence. It requested `claude-fable-5[1m]`, resolved to `claude-fable-5`, used high effort, and reported the requested model as accepted. Claude Code reported version `2.1.208`; the review contract and schema were both v0.2 (`prompt_version: 0.2.0`, `schema_version: claude-review-v0.2`). The reviewed working state hash was `sha256:8fd41b2599c7564531e86561c0230efc353f29d2639c784f2818fc6c822aa040` over base and head commit `66cead388fa9859bc484cf0a2652f0421966083f` plus the uncommitted package.

The initial verdict was `inconclusive`, with no findings. The reviewer said the package held up under adversarial inspection and independently rechecked approximately ten load-bearing mechanisms against the pinned checkout. Its verdict was mechanically downgraded because its access tracker did not record inspection of the central case and nine reused source records, and because the retained transcript archive needed to verify scope-first ordering was outside the originally declared evidence directory. This is an evidence-access limitation of that review run, not a claim that the case failed.

## Codex dispositions

| Item | Disposition | Reason and action |
| --- | --- | --- |
| Findings | `accept` (none) | The reviewer reported no correctness, epistemic, governance, or audit finding. |
| CN-1 — scope-first ordering was not independently visible | `needs_targeted_verification` | Accepted as a review-access gap. Primary inspection of the retained rollout establishes that the scope patch completed before the deep trace began; exact evidence is below. The focused verification will receive the archive directory and every previously unreported scope path. No provenance redesign is warranted. |
| CN-2 — project-repository rows add audit display noise | `accept` | The noise is visible and non-consequential. Exact source records and claim locations remain authoritative. Under D-005, it does not justify reopening frozen provenance infrastructure. |
| CN-3 — fresh versus migrated omitted a versionless-existing population | `accept` | The pinned code treats a missing config file as current but an existing file without `_config_version` as legacy version zero. The case, C011, C020, CP2-S009-E16, canonical annotations, and taxonomy-friction entry now distinguish no-file fresh, versionless existing, versioned migrated, explicit, and runtime-effective values. |
| R-1 — timestamp future scope registration | `accept` as a Checkpoint 3 method candidate | A cheap pre-analysis scope-registration event could improve future reviewability. It is not retroactively added to Hermes and does not authorize tooling or schema work. Checkpoint 3 should decide whether the added action is worth requiring. |
| R-2 — carry the versionless population into Checkpoint 3 | `accept` | The Hermes artifacts now preserve the full configuration-origin distinction, and the candidate remains explicitly unapproved pending four-case consolidation. |

No consequential disagreement remained, so `claude_reconcile` was not used.

## Mechanical scope-order check

The retained rollout is `/Users/jernotte/.codex/sessions/2026/07/10/rollout-2026-07-10T20-20-05-019f4ec2-9fba-7033-a71b-0e34e29bf2ae.jsonl`.

- Rollout line 10488, `2026-07-18T21:58:41.244Z`, call `call_i9hQOJxRHVunyNMYuY2yS3xi`: the scope-file patch was issued.
- Line 10489, `2026-07-18T21:58:41.375Z`: the patch completed successfully.
- Line 10496, `2026-07-18T21:59:02.815Z`, call `call_RPyi5QhqQGYltzk2uTr3fY67`: the first deep-trace subtask began, 21.44 seconds after the scope file was created.
- Line 10511, `2026-07-18T21:59:40.915Z`, call `call_fRGBMDJnAGMsMVLOCcjfZiOB`: the primary agent began its first research-capable runtime-file trace.
- The final pre-scope subject read, line 10484 at `2026-07-18T21:57:40.829Z`, was a narrow dispatch slice used to identify the production boundary. Earlier reads established only pin, structure, package/test layout, and entry points, which the scope-first requirement explicitly permits.

The same ordering is represented by automatic observations in `research/provenance/hermes-agent-case-main-auto.jsonl`: the scope-add observation precedes the deep-trace spawn and the first primary runtime trace. The retained exact-prefix archive is `/Users/jernotte/dev/reference-materials/research/hermes-agent-case-main-transcript-prefix.jsonl`, through line 10,890, with SHA-256 `91ce20816fdff48d548e38e0518f9ec8ad89409e92faf4fd30f6e99c23a5b1c5`.

## Adversarial challenges

Challenges CH-1 through CH-9 survived direct inspection. They covered verification defaults and migrations, lifecycle naming, background review and curation, mechanism-level OpenClaw influence, persistence ordering and compaction defaults, delegation/goal/memory/terminal defaults, the double-middleware open question, audit/ledger consistency, and governance state. CH-10—scope-first ordering—was initially inconclusive only because the transcript archive was not in the reviewer's evidence root; the mechanical check above resolves it for Codex and is the focus of the one allowed verification pass.

## Focused verification

The one permitted focused verification passed with no findings or inconclusive reasons. It used the same accepted Fable 5 high-effort configuration and reviewed working-state hash `sha256:9b4acf02006c08095c8b895e8101a4ca5aa5299915ef74f21efbc1c1e9ba5399`.

The first attempt to grant the verifier the entire `reference-materials/research` parent was refused as too broad. The final pass instead received the pinned Hermes checkout plus `/Users/jernotte/dev/reference-materials/research/hermes-gate-a-review-evidence`, an owner-only (`0700`) directory containing only a mode-`0600` hard link to the exact retained main transcript prefix. The reviewer directly read the cited archive lines and confirmed scope creation, successful patch completion, the first deep-trace spawn, the first primary trace, and the boundary-only nature of the sampled pre-scope reads. Its access tracker also recorded every central and reused source path omitted by the initial pass.

Claude independently re-derived the configuration-origin behavior from the pinned code and confirmed that C011 and C020 agree across the case, ledger, CP2-S009, annotations, generated events, audit, and friction register. It confirmed the exact audit counts, unchanged R1–R11 lens, proposed—not approved—D-012, and absence of later-phase work.

The verifier reported one low-confidence residual concern, VC-1: its read-only interface could inspect content but not execute a shell hash or inode check. Codex accepts the limitation and independently ran both checks. The isolated path and canonical archive are the same inode (`8045454`), both mode `0600`, both 42,393,661 bytes, and the recomputed SHA-256 is `91ce20816fdff48d548e38e0518f9ec8ad89409e92faf4fd30f6e99c23a5b1c5`, matching the audit. No repository or research change is required.

The maintainer approved D-012 on 2026-07-18 after reviewing this package. Hermes is therefore a reviewed finding; Claude's verification remained advisory and did not make that promotion decision.
