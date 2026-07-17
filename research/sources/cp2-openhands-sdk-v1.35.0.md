# Source Record: OpenHands Software Agent SDK v1.35.0

**Source ID:** CP2-S002
**Maturity:** Reviewed implementation evidence
**Source type:** Repository
**Author or organization:** OpenHands
**Publication date:** Release commit 2026-07-11; pin first verified 2026-07-12
**URL:** https://github.com/OpenHands/software-agent-sdk/tree/v1.35.0
**Inspected version:** `v1.35.0`, commit `9028562e2d5eda76de662ec9b7584125760eb83f`
**Related cycle or question:** Field landscape, Checkpoint 2 selection
**Source family / parent:** OpenHands Software Agent SDK
**Inspection extent:** Full substantive within the written case boundary
**Surfaces inspected:** README, package manifests, code, tests, examples, releases, targeted history, command output
**Provenance events:** Selection events plus the OpenHands case event log
**Primary verification events:** Selection-ledger pin events and OpenHands case claim/source/location verification events

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

## Evidence assessment

The exact tag and clean checkout are direct version evidence. Code and representative tests establish implementation claims; targeted reachable history establishes concrete prior defects without measuring frequency. The repository is authoritative for the pin but cannot establish effectiveness merely from mechanism presence or test volume.

## Relationships and contradictions

This repository is not interchangeable with the inherited `OpenHands/OpenHands` lead or its older architecture. The technical report describes that lineage and reports bundled V0/V1 outcomes, while this record remains the source of truth for v1.35.0 implementation behavior. Recent compaction research and self-correction evidence qualify selected mechanisms without directly evaluating the SDK.

## Leads and open questions

- Recover exact benchmark configurations and evaluated commits before making pin-specific outcome claims.
- Test event/view recovery, condensation retention, goal-judge accuracy, parallel tool safety, and plugin-resume reproducibility empirically.
- Compare the R9 runtime-integrity/task-verification split across the remaining cases before revising the taxonomy.
