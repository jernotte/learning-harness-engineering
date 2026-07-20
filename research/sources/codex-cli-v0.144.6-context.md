# Source Record: Codex CLI Context Management at rust-v0.144.6

**Source ID:** CTX-S001  
**Maturity:** Analyzed evidence for the bounded context-management question; not a full harness case  
**Source type:** Open-source implementation, tests, prompts, and pinned documentation  
**Author or organization:** OpenAI  
**Publication boundary:** Tag `rust-v0.144.6`, 2026-07-18  
**URL:** https://github.com/openai/codex/tree/5d1fbf26c43abc65a203928b2e31561cb039e06d  
**Inspected version:** Commit `5d1fbf26c43abc65a203928b2e31561cb039e06d`  
**Related question:** Context construction, tool-output shaping, compaction, subagent transfer, and cross-run memory  
**Inspection extent:** Targeted substantive; no behavioral test execution and no full implementation case  
**Surfaces inspected:** Prompt construction, AGENTS/skill budgets, context-window accounting, local and remote compaction, shell-output truncation, multi-agent history projection, memory extension  

## Why this source matters

Codex provides a strong counter-shape to the four reviewed cases. It makes several context products explicit: durable rollout history, an active model projection, compacted continuation state, selectively inherited subagent history, and disabled-by-default cross-run memory.

## Evidence items

| Evidence item ID | Verified implementation observation | Exact pinned location | Related claim IDs | Limits |
| --- | --- | --- | --- | --- |
| CTX-S001-E01 | Automatic compaction defaults to a threshold derived at 90% of the effective context window and can trigger before or during a turn or after a context-window change | `codex-rs/protocol/src/openai_models.rs` 390–450; `codex-rs/core/src/session/context_window.rs` 24–91; `session/turn.rs` 304–369, 798–946 | `field-landscape-synthesis-context-management-across-harnesses-C013` | Configuration and model metadata can lower the threshold |
| CTX-S001-E02 | Local fallback compaction creates a continuation handoff, retains recent real user messages within a 20,000-token budget, and warns that repeated compaction can reduce accuracy | `codex-rs/core/src/compact.rs` 51–68, 220–376, 585–658; `codex-rs/prompts/templates/compact/prompt.md` | `field-landscape-synthesis-context-management-across-harnesses-C013` | Mechanism and warning only; task retention not measured here |
| CTX-S001-E03 | Remote compaction v2 retains recent user/developer/system material under a 64,000-token budget and omits raw tool/reasoning chatter from the replacement context | `codex-rs/core/src/compact_remote_v2.rs` 51–56, 430–560; `compact_remote.rs` 304–459 | `field-landscape-synthesis-context-management-across-harnesses-C013` | Remote service internals outside the open client remain uninspected |
| CTX-S001-E04 | Shell output is bounded to 10,000 tokens by default and one MiB per process; model-visible truncation preserves the beginning and end with a warning | `codex-rs/core/src/unified_exec/mod.rs` 64–72, 177–179; `tools/context.rs` 310–439; `codex-rs/utils/output-truncation/src/lib.rs` 12–29 | `field-landscape-synthesis-context-management-across-harnesses-C013` | Other tools have their own shaping policies |
| CTX-S001-E05 | Initial context can include instructions, permissions, skills, plugins, extensions, world state, and AGENTS files; later turns append changes rather than reconstructing the same initial package | `codex-rs/core/src/session/mod.rs` 3187–3645; `agents_md.rs` 36–235 | `field-landscape-synthesis-context-management-across-harnesses-C013` | Concrete contents depend on configuration and workspace |
| CTX-S001-E06 | Multi-agent v2 defaults `fork_turns` to all, but full history is a selective projection that excludes tool calls/results, reasoning, inter-agent chatter, and non-final assistant material; callers can choose none or the last N turns | `codex-rs/core/src/tools/handlers/multi_agents_v2/spawn.rs` 178–225; `agent/control/spawn.rs` 45–78, 469–570 | `field-landscape-synthesis-context-management-across-harnesses-C013` | Current v2 path only; inheritance is not an effectiveness result |
| CTX-S001-E07 | Cross-run memory exists as an experimental, disabled-by-default extension with bounded summary injection and asynchronous consolidation | `codex-rs/features/src/lib.rs` 926–934; `codex-rs/ext/memories/src/extension.rs` 40–127; `prompts.rs` 23–50; memory README 29–157 | `field-landscape-synthesis-context-management-across-harnesses-C013` | Experimental; no outcome benefit established |

## Evidence assessment

The source is direct, recent, pinned implementation evidence. It is narrower than a case study: the control loop, full state model, permissions, provider behavior, and evaluation system were not traced end to end. Its use here is to challenge the four-case comparison on specific context decisions, not to promote Codex as a reviewed harness finding.

## Open questions

Measure information retention and task outcomes across local versus remote compaction, different `fork_turns` projections, repeated compaction, and experimental memory. Inspect later releases separately rather than projecting this pin forward.
