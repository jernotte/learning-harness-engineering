# Source Record: OpenHands Software Agent SDK v1.35.0

**Source ID:** CP2-S002
**Maturity:** Reviewed implementation evidence
**Source type:** Repository
**Author or organization:** OpenHands
**Publication date:** Release commit 2026-07-11; pin first verified 2026-07-12
**URL:** https://github.com/OpenHands/software-agent-sdk/tree/v1.35.0
**Inspected version:** `v1.35.0`, commit `9028562e2d5eda76de662ec9b7584125760eb83f`
**Related cycle or question:** Field landscape, Checkpoint 2 selection, OpenHands SDK case, and Hermes taxonomy-friction context
**Source family / parent:** OpenHands Software Agent SDK
**Inspection extent:** Full substantive within the written case boundary
**Surfaces inspected:** README, package manifests, code, tests, examples, releases, targeted history, command output
**Provenance events:** Selection events plus the OpenHands case event log
**Primary verification events:** Selection-ledger pin events, OpenHands case claim/source/location verification events, and the Hermes case C020 mapping in `research/provenance/hermes-agent-case-events.jsonl`

## Why this source matters

The SDK is the event/workspace-oriented platform contrast to Pi. The case traces one complete local conversation path and targeted remote-server, tool, state, recovery, delegation, verification, and observability boundaries. It exposes durable history versus active model view and runtime recovery versus task acceptance more explicitly than Pi, while also showing why optional platform features must not be described as defaults.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| CP2-S002-E01 | Public Git tag resolves to the recorded commit | `refs/tags/v1.35.0` | `field-landscape-selection-checkpoint-2-deep-dive-set-C001` | supports | Identity/pin only |
| CP2-S002-E02 | Repository describes a modular SDK used to build code agents and exposes local or ephemeral workspaces through an Agent Server | `README.md` at `v1.35.0`, lines 30–43 | `field-landscape-selection-checkpoint-2-deep-dive-set-C002` | material premise | Self-description; selection claim only |
| CP2-S002-E03 | Local and remote factory paths converge on server-side local conversation execution | `conversation/conversation.py`; `conversation/impl/remote_conversation.py`; `agent_server/conversation_service.py`; `tool/tool.py` 133–155 | `field-landscape-case-openhands-sdk-v1-35-0-C001` | supports | Hosted backends surveyed, not exhaustively traced |
| CP2-S002-E04 | Durable event-tree state is distinct from active-branch, model-convertible, condensation-aware view state | `conversation/state.py`; `event_store.py`; `context/view/`; tree, replay, and view-cache tests | C002 | supports | Durability depends on configured persistence |
| CP2-S002-E05 | Local conversation and agent server own different lifecycle scales, locks, cancellation, recovery, and completion behavior | `local_conversation.py`; `agent_server/event_service.py`; `conversation_service.py`; lifecycle tests and targeted commits | C003, C011, C016 | supports | ACP and all server endpoints excluded |
| CP2-S002-E06 | Frozen agent policy is materialized with runtime tools, plugins, skills, MCP, prompt context, and model view | `agent/base.py`; `agent/agent.py`; `local_conversation.py` plugin/readiness paths | C004, C016 | supports | Ambient plugins and external MCP endpoints can drift |
| CP2-S002-E07 | Ordinary model-directed execution can finish without an independent success gate | `agent/agent.py`; `response_dispatch.py`; `local_conversation.py`; optional critic/goal modules | C005, C012 | supports | Custom hooks, critics, and goal mode can alter behavior |
| CP2-S002-E08 | Typed actions pass through optional authorization and become typed observations; direct tool execution bypasses loop safeguards | `agent/agent.py`; `tool/tool.py`; `hooks/`; `local_conversation.py` 2809–2850 | C006, C016 | supports | Caller/plugin trust boundary remains open-ended |
| CP2-S002-E09 | Parallel tools rely on explicit resource declarations and default to serial execution | `agent/parallel_executor.py`; `tool/tool.py`; representative terminal declaration and tests | C007 | supports | No performance or race-frequency experiment |
| CP2-S002-E10 | Local workspace executes on the host; isolation belongs to remote/container deployment | `workspace/base.py`; `workspace/local.py`; factory paths; README | C008 | supports | No container security assessment |
| CP2-S002-E11 | Condensation is optional on direct agents and enabled by the default preset as durable LLM-summary projection | `agent/base.py`; `tools/preset/default.py`; `context/condenser/`; tests | C009, C015 | supports/contextualizes | Semantic retention is unmeasured |
| CP2-S002-E12 | Delegation is a tool that runs separate child conversations over a shared workspace and aggregates final text | `tools/delegate/definition.py`; `tools/delegate/impl.py`; subagent tests | C010 | supports | Not core scheduling or independent acceptance |
| CP2-S002-E13 | Recovery, critic, goal, telemetry, and external evaluation occupy distinct layers; no cross-run policy optimizer was found in scope | recovery/critic/goal/telemetry paths and bounded repository search | C011–C013, C016 | supports | Private/downstream systems remain unknowable |
| CP2-S002-E14 | The reviewed OpenHands SDK case supplies a platform-scale counter-shape for the Hermes taxonomy hypothesis through multiple lifecycle owners, durable event state versus model view, typed action/observation layers, plugin surfaces, optional task verification, and bounded absence of an across-run optimizer | Combined CP2-S002-E03–E13 and the reviewed OpenHands taxonomy-friction entries | `field-landscape-case-hermes-agent-v0-18-2-C020` | contextualizes | Cross-case taxonomy evidence only; it does not establish a canonical taxonomy change or Hermes behavior |
| CP2-S002-E15 | File-editor output is capped at 16,000 characters; terminal observations are capped at 30,000 characters and may save full output under the conversation's observation directory. A bare `Agent` has no condenser, while the standard summarizing condenser and GPT-5 preset use `max_size=80` and `keep_first=4`. | `openhands-tools/openhands/tools/file_editor/utils/constants.py` 1–5; `file_editor/editor.py` 319–323, 787–810; `terminal/constants.py` 15–18; `terminal/definition.py` 163–199, 315–331; `openhands-sdk/openhands/sdk/conversation/state.py` 397–402; `agent/base.py` 250–265; `context/condenser/llm_summarizing_condenser.py` 482–492; `openhands-tools/openhands/tools/preset/gpt5.py` 59–74 | `field-landscape-synthesis-context-management-across-harnesses-C004`, `field-landscape-synthesis-context-management-across-harnesses-C005` | supports | Caps and preset defaults are version-specific; full-output persistence requires a configured conversation persistence directory, and summary quality is unmeasured |

## Checkpoint 3 reuse mappings

The Gate B proposal reuses this reviewed record without adding an OpenHands implementation claim:

- field-landscape-checkpoint-taxonomy-method-review-C001 (E03–E14)
- C002 (E05, E14); C003 (E06, E08, E14); C004 (E08, E14)
- C005 (E06, E08, E13–E14); C006 (E07, E13–E14); C007 (E03–E14)
- C008 (E13–E14); C009 (E11); C011 (E13–E14); C012 (E05, E13)
- C013 (E03–E13); C014 (reviewed case boundary); C015 (E07, E13); C016 (E08, E14)

All abbreviated IDs in this list use the prefix field-landscape-checkpoint-taxonomy-method-review-. These mappings support four-case comparison only; they do not retroactively change the reviewed case.

## Evidence assessment

The exact tag and clean checkout are direct version evidence. Code and representative tests establish implementation claims; targeted reachable history establishes concrete prior defects without measuring frequency. The repository is authoritative for the pin but cannot establish effectiveness merely from mechanism presence or test volume.

## Relationships and contradictions

This repository is not interchangeable with the inherited `OpenHands/OpenHands` lead or its older architecture. The technical report describes that lineage and reports bundled V0/V1 outcomes, while this record remains the source of truth for v1.35.0 implementation behavior. Recent compaction research and self-correction evidence qualify selected mechanisms without directly evaluating the SDK.

## Leads and open questions

- Recover exact benchmark configurations and evaluated commits before making pin-specific outcome claims.
- Test event/view recovery, condensation retention, goal-judge accuracy, parallel tool safety, and plugin-resume reproducibility empirically.
- Compare the R9 runtime-integrity/task-verification split across the remaining cases before revising the taxonomy.

## First-batch synthesis claim references

The first-batch synthesis maps CP2-S002-E03–E14 to `field-landscape-synthesis-first-batch-harness-architecture-C001` through `C005`, `C007` through `C010`, `C012`, `C016`, and `C017` where the canonical ledger names this record. The mappings support structural comparison and explicit default/optional limits; reported V1 outcomes remain in OH-S001 rather than being inferred from implementation presence.

## Context-management synthesis claim references

The working context-management synthesis reuses CP2-S002-E04, E06, E08, E11, E12, and E15 for `field-landscape-synthesis-context-management-across-harnesses-C001` through `field-landscape-synthesis-context-management-across-harnesses-C006` where the canonical ledger names OpenHands, and CP2-S002-E04, E08, and E11 for `field-landscape-synthesis-context-management-across-harnesses-C008`. The reviewed case boundary also contextualizes `field-landscape-synthesis-context-management-across-harnesses-C012`. Condensation remains default-preset rather than bare-Agent behavior, and none of these mappings establishes retention quality.
