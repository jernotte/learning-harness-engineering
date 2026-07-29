# Source Record: Letta Code and Letta Server Context Management

**Source ID:** CTX-S002  
**Maturity:** Analyzed evidence for the bounded context-management question; not a full product case  
**Source type:** Two related open-source implementations, tests, prompts, and pinned documentation  
**Author or organization:** Letta  
**Publication boundaries:** Letta Code tag `v0.28.11`, 2026-07-16; Letta server tag `0.16.8`, 2026-05-14  
**URLs:** https://github.com/letta-ai/letta-code/tree/0ffc7e3d4b9514fde062566eacd3bdb2454431c2 and https://github.com/letta-ai/letta/tree/1131535716e8a31c9a437f8695e25ac98f203a24  
**Inspected versions:** Letta Code commit `0ffc7e3d4b9514fde062566eacd3bdb2454431c2`; Letta server commit `1131535716e8a31c9a437f8695e25ac98f203a24`  
**Related question:** Always-visible versus on-demand memory, compaction, durable history search, reflection, shell output, and subagent inheritance  
**Inspection extent:** Targeted substantive; no behavioral test execution and no end-to-end compatibility or cloud-deployment verification  

## Boundary warning

Letta Code establishes client/harness behavior. The Letta repository establishes one pinned open-source server implementation. Letta Code locks client package version `1.10.2`; this inspection did not prove that the two repository pins form one matched product release or that the live Letta cloud deployment runs server `0.16.8`. Conclusions remain source-specific.

## Why these sources matter

Letta exposes context placement as an explicit policy. Material under `system/` is always visible; other memory remains external and must be retrieved. Durable conversation history remains searchable after it leaves the active transcript. The design makes the core tradeoff unusually legible: guaranteed visibility permanently consumes context, while external placement saves capacity and creates retrieval risk.

## Evidence items

| Evidence item ID | Verified implementation observation | Exact pinned location | Related claim IDs | Limits |
| --- | --- | --- | --- | --- |
| CTX-S002-E01 | Normal Letta Code agents receive memory blocks and can use MemFS; subagents are explicitly ephemeral and receive neither MemFS nor memory blocks | Letta Code `src/agent/create.ts` 124–168, 224–295 | `field-landscape-synthesis-context-management-across-harnesses-C014` | Backend capability and deployment mode affect MemFS availability |
| CTX-S002-E02 | `system/` memory content becomes always-visible prompt material, while other memory contributes metadata and requires on-demand reads | Letta Code `src/tools/descriptions/Memory.md` 1–21; server `letta/schemas/memory.py` 68–140, 205–349, 688–732; `prompts/prompt_generator.py` 26–89, 107–177 | `field-landscape-synthesis-context-management-across-harnesses-C014` | Prompt mode and server version can change representation |
| CTX-S002-E03 | MemFS memory edits require a reason, validation, a clean repository, and a git commit before later synchronization | Letta Code `src/tools/impl/memory-apply-patch.ts` 104–160; `src/agent/memory-git-hooks.ts` 14–164 | `field-landscape-synthesis-context-management-across-harnesses-C014` | Establishes mutation mechanics, not correctness of memory content |
| CTX-S002-E04 | Default reflection runs every 25 completed steps and uses a background subagent over bounded transcript material to update committed memory or skills | Letta Code `src/settings-manager.ts` 181–196; `memory-reminder.ts` 138–201; `post-turn-reflection.ts` 17–75; `agent/subagents/builtin/reflection.md` | `field-landscape-synthesis-context-management-across-harnesses-C014` | Usage/step-driven adaptation, not an outcome optimizer |
| CTX-S002-E05 | Letta Code exposes fresh stateless subagents and an explicit fork path that inherits the parent conversation as reference | Letta Code `src/agent/subagents/builtin/fork.md` 1–11; `src/agent/subagents/manager.ts` 743–776, 794–905 | `field-landscape-synthesis-context-management-across-harnesses-C014` | Forked child tool capability differs; no outcome comparison |
| CTX-S002-E06 | Shell output requests a 10,000-token default budget, also caps inline content at 30,000 characters, and retains at most one million characters in a running session | Letta Code `src/tools/impl/exec-command.ts` 24–33, 190–248, 721–809; `src/tools/impl/truncation.ts` 13 | `field-landscape-synthesis-context-management-across-harnesses-C014` | One tool surface only |
| CTX-S002-E07 | Server compaction triggers at 90% of the configured context window; default mode is sliding-window summarization with a separate provider-appropriate summarizer | Letta server `letta/constants.py` 82–83; `services/summarizer/thresholds.py` 27–41; `summarizer_config.py` 11–89; `compact.py` 42–131, 180–348 | `field-landscape-synthesis-context-management-across-harnesses-C014` | Source comment contains older provider-specific wording while the pinned implementation applies the constant multiplier |
| CTX-S002-E08 | Sliding-window compaction summarizes an older prefix, retains a recent tail, increases eviction until below target, and accounts for tool definitions in pressure | Letta server `summarizer_sliding_window.py` 45–95, 98–232; `compact.py` 350–360 | `field-landscape-synthesis-context-management-across-harnesses-C014` | Semantic retention not evaluated here |
| CTX-S002-E09 | Durable conversation history remains hybrid-searchable after leaving active context; default return count is five and tool/search recursion is filtered | Letta server `functions/function_sets/base.py` 87–140; `services/tool_executor/core_tool_executor.py` 81–170; `constants.py` 458 | `field-landscape-synthesis-context-management-across-harnesses-C014` | Retrieval quality and recall behavior unmeasured |

## Evidence assessment

The records are direct and pinned, and they expose a distinctive memory/context architecture. The mixed boundary is the main limitation: client behavior, open server behavior, and live cloud behavior must not be collapsed. This source supports a bounded contrast, not a reviewed Letta product case or compatibility claim.

## Relationships and contradictions

The retained Arize context-management article was useful as a pedagogical and discovery lead, but several of its Letta statements do not match these pins: the pinned server default is sliding-window summarization using a separate summarizer rather than default self-compaction, and pinned Letta Code implements an explicit conversation-forking subagent. The pinned implementation therefore controls this record.

## Open questions

Evaluate recall misses, incorrect memory placement, conflict correction, reflection quality, client/server compatibility, and task outcomes. Separate self-hosted, cloud, normal-agent, stateless-child, and forked-child populations in any later case.
