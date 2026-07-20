# Source Record: OpenClaw v2026.6.6

**Source ID:** CP2-S005
**Maturity:** Reviewed implementation evidence
**Source type:** Repository
**Author or organization:** OpenClaw
**Publication date:** Release train identifies 2026-06-06; pinned commit dated 2026-06-12; pin first verified 2026-07-12
**URL:** https://github.com/openclaw/openclaw/tree/v2026.6.6
**Inspected version:** Annotated tag `v2026.6.6`, dereferenced commit `8c802aa683510c7f7503597b54c3021733245e59`
**Related cycle or question:** Field landscape, Checkpoint 2 OpenClaw case, and Hermes lineage/taxonomy-friction context
**Source family / parent:** OpenClaw repository
**Inspection extent:** Full substantive within the written OpenClaw case boundary
**Surfaces inspected:** Repository identity, pinned documentation, Telegram polling/direct-message path, routing/session state, embedded runtime, prompts/context/tools, transcript persistence, compaction, memory, scheduling, subagents, hooks, QA, representative test source, and targeted reachable history
**Provenance events:** Checkpoint 2 selection events plus the OpenClaw case event log
**Primary verification events:** Selection-ledger pin verification, OpenClaw case claim/source/location verification events, and the Hermes case C017/C020 mappings in `research/provenance/hermes-agent-case-events.jsonl`

## Why this source matters

OpenClaw is the long-lived, multi-channel runtime contrast in the first implementation set. The case follows one admitted Telegram direct message from durable polling ingress through session routing, embedded model/tool execution, transcript persistence, and final delivery. Targeted inspection then tests scheduled work, memory adaptation, subagents, hooks, runtime recovery, and external QA without treating every bundled capability as a default.

The source is especially useful for understanding that a production harness may contain several lifecycle, scheduling, persistence, and delivery boundaries around one model turn. It also supplies the first observed optional across-run adaptation mechanism in the case set: memory promotion based on repeated recall and diversity rather than task outcomes.

A targeted local test invocation did not execute because the package manager attempted a workspace dependency check that required a disallowed temporary-file write in the retained checkout. Tests contribute inspected source and invariant evidence only; this case does not claim local behavioral reproduction.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| CP2-S005-E01 | The annotated public tag dereferences to the recorded clean commit | `refs/tags/v2026.6.6^{}`; commit `8c802aa683510c7f7503597b54c3021733245e59` | `field-landscape-selection-checkpoint-2-deep-dive-set-C001`, `field-landscape-case-openclaw-v2026-6-6-C001` | supports | Identity and version only |
| CP2-S005-E02 | Polling normally uses isolated ingress and a durable SQLite queue with dedupe, lane claims, retry, and dead-letter behavior | `extensions/telegram/src/monitor.ts` 169–309; `telegram-ingress-worker.runtime.ts` 144–192; `telegram-ingress-spool.ts` 120–139; `src/channels/message/ingress-queue.ts` 319–388; `polling-session.ts` 521–586, 613–682, 901–979 | C002 | supports | Webhook and other channels differ |
| CP2-S005-E03 | Authorization precedes reply-cache and dispatch-dedupe mutation; pairing is the default DM policy | `extensions/telegram/src/bot-core.ts` 242–273; `bot-handlers.runtime.ts` 2746–2848, 2887–3015; `dm-access.ts` 80–176; commit `05a3b44c93be3254c1b1bd1bf90362943d2c0828` | C002, C016 | supports | Assumes ordinary DM path; policy is configurable |
| CP2-S005-E04 | Telegram's `after_agent_dispatch` policy is acknowledged on successful middleware-chain return; near-limit text and media-group handlers can return with admitted content only in process-local timers before actual reply-chain dispatch, after which polling deletes the claimed spool record | `extensions/telegram/src/bot-core.ts` 191–221; `bot-update-tracker.ts` 163–181, 232–258; `bot-update-tracker.test.ts` 78–114; `bot-handlers.runtime.ts` 803–960, 1125–1150, 1695–1821; `polling-session.ts` 521–545 | C003 | supports inference | The acknowledgement mapping and buffer/spool sequence are static implementation facts; no crash reproduction, frequency measurement, or cross-branch behavioral test |
| CP2-S005-E05 | Default-account DMs normally share the main agent session while named-account fallback and explicit bindings can isolate them | `extensions/telegram/src/conversation-route.ts` 45–193; `src/routing/session-key.ts` 203–264; `bot-message-context.ts` 404–480 | C004 | supports | Depends on default `dmScope` and no explicit binding |
| CP2-S005-E06 | Telegram lanes, reply fences, per-session reply operations, queue policy, and embedded session/global lanes form nested execution ownership | `extensions/telegram/src/sequential-key.ts` 101–155; `bot-message-dispatch.ts` 1364–1381; `src/auto-reply/reply/reply-turn-admission.ts` 26–83; `reply-run-registry.ts` 229–416; `queue/settings.ts` 12–63; `src/agents/embedded-agent-runner/run.ts` 514–576 | C005, C019 | supports | Layer importance varies by channel and configuration |
| CP2-S005-E07 | Model/provider, prompt, bootstrap, skills, context-engine state, and the effective tool set are materialized into each ordinary embedded run | `src/agents/embedded-agent-runner/run.ts` 614–808; `run/attempt.ts` 1042–1201, 1309–1710, 1818–2145, 2269–2317, 2910–3074; `src/agents/system-prompt.ts` 973–1329; `bootstrap-files.ts` 64–217 | C006, C019 | supports | Raw mode, alternate harnesses, and plugin context engines differ |
| CP2-S005-E08 | Programmed retry, replay, liveness, timeout, and compaction policies bound the model-directed loop without judging task correctness | `src/agents/embedded-agent-runner/run.ts` 1201–1207, 1966–2450, 3052–3742; `run/attempt.ts` 3402–3526, 4400–4900, 5090–5282; representative tests | C007, C016 | supports | Static inspection; no behavioral outcome experiment |
| CP2-S005-E09 | Tool policy, schema projection, hooks, approval, and optional sandboxing govern action authority; sandbox mode defaults off | `src/agents/agent-tools.ts` 414–740; `embedded-agent-runner/effective-tool-policy.ts` 26–35; `tool-schema-projection.ts` 193–289; `openclaw-tools.ts` 316–590; `sandbox/config.ts` 230–285; `plugins/hooks.ts` 1255–1324 | C008, C015 | supports | Not a security assessment; plugins and operators can alter policy |
| CP2-S005-E10 | Canonical transcript results, provider-facing bounded projections, and recovery-time persisted rewrites are distinct representations | `src/agents/embedded-agent-runner/tool-result-truncation.ts` 29–47, 205–250, 680–799; `tool-result-context-guard.ts` 462–555; `embedded-agent-subscribe.handlers.tools.ts` 1152–1235 | C009, C019 | supports | Individual tool output formats not exhaustively inspected |
| CP2-S005-E11 | Session registry, JSONL transcript, SQLite ingress, workspace files, and process-local state have different durability/recovery boundaries | `src/config/sessions/paths.ts` 37, 258–322; `store.ts` 680–770, 895–924; `src/agents/sessions/session-manager.ts` 1–174, 727–923; `run/attempt.ts` 1965–2136, 4598–4866 | C010, C019 | supports | Filesystem and configured backends affect durability |
| CP2-S005-E12 | The default memory plugin provides on-demand retrieval and pre-compaction writes, distinct from transcript and active context | Pinned `docs/concepts/memory.md` 117–159; `extensions/memory-core/index.ts` 125–205; `extensions/memory-core/src/prompt-section.ts` 4–38; `flush-plan.ts` 12–43, 97–141 | C011 | supports | Documentation establishes slot default; deployment may change or disable it |
| CP2-S005-E13 | Disabled-by-default dreaming promotes short-term material using recall/diversity/recency signals rather than task outcomes | `src/memory-host-sdk/dreaming.ts` 13–50, 366–467, 529–544; `extensions/memory-core/src/short-term-promotion.ts` 2320–2465 | C012, C019 | supports | Optional; no outcome study or downstream-plugin claim |
| CP2-S005-E14 | Cron and heartbeat enter agent execution with distinct session, prompt, concurrency, and delivery policy | `src/cron/isolated-agent/run.ts` 1248–1395; `run-executor.ts` 230–455; `src/infra/heartbeat-runner.ts` 1295–1800 | C013, C019 | supports | Targeted rather than exhaustive scheduler analysis |
| CP2-S005-E15 | Subagent tools provide isolated/forked contexts, run/session modes, and channel-thread binding where available | `src/agents/openclaw-tools.ts` 394–526; `tools/sessions-spawn-tool.ts` 98–220; `subagent-spawn.ts` 500–775 | C014 | supports | No ACP internals, quality experiment, or independence claim |
| CP2-S005-E16 | Plugin hooks cross model, prompt, message, tool, persistence, session, subagent, gateway, scheduling, dispatch, and environment stages | `src/plugins/hook-types.ts` 74–161; `src/plugins/hooks.ts` 824–970, 1255–1324 | C015, C019 | supports | Only installed/enabled hooks affect a deployment |
| CP2-S005-E17 | Runtime integrity is extensive while task-success checking is optional/external; the repo contains scenario and judged-QA systems | `run/attempt.ts` 3158–3268; `run.ts` 3600–3742; pinned `docs/concepts/personal-agent-benchmark-pack.md` 10–28; `qa-e2e-automation.md` 905–971 | C016, C017 | supports inference/context | QA presence does not establish mechanism effectiveness or ordinary-path acceptance |
| CP2-S005-E18 | Reachable fixes identify concrete ingress, session-lock, transcript-pairing, prompt-cache, lifecycle, and delivery failure surfaces | Commits `05a3b44c93be`, `1af55bc6654`, `210adf1d118`, `613f51a7aa9`, `95890fe1506`, `d5c8e90e284`, `88dc177afc2` | C002, C010, C016 | supports/contextualizes | Corrective history does not measure incidence or prove complete resolution |
| CP2-S005-E19 | The reviewed OpenClaw history has recorded root `f6dd362d39b8e30bd79ef7560aab9575712ccc11`, distinct from Hermes's recorded root | Repository root `f6dd362d39b8e30bd79ef7560aab9575712ccc11`; reviewed case boundary `v2026.6.6` / `8c802aa683510c7f7503597b54c3021733245e59` | `field-landscape-case-hermes-agent-v0-18-2-C017`, `field-landscape-case-hermes-agent-v0-18-2-C020` | contextualizes | Recorded roots establish separate repository histories, not absence of later copying, shared ancestry outside the recorded histories, or independent convergence |
| CP2-S005-E20 | The reviewed OpenClaw case supplies a counter-shape for the Hermes taxonomy hypothesis across nested lifecycle scales, per-call context and capability materialization, action/result projections, cross-cutting hooks, runtime integrity versus task acceptance, and outcome-agnostic memory adaptation | Combined CP2-S005-E05–E17 and the reviewed OpenClaw taxonomy-friction entries | `field-landscape-case-hermes-agent-v0-18-2-C020` | contextualizes | Cross-case taxonomy evidence only; it does not establish a canonical taxonomy change or Hermes behavior |
| CP2-S005-E21 | Workspace bootstrap defaults to 20,000 characters per file and 60,000 in aggregate, with bounded head/tail trimming and warnings. Live tool-result ceilings resolve to 16,000, 32,000, or 64,000 characters by context-window tier and are further bounded to 30 percent of the model window. | `src/agents/embedded-agent-helpers/bootstrap.ts` 91–100, 120–145, 413–470; `src/agents/embedded-agent-runner/tool-result-truncation.ts` 29–54, 204–250 | `field-landscape-synthesis-context-management-across-harnesses-C003`, `field-landscape-synthesis-context-management-across-harnesses-C004` | supports | Exact ordinary-path defaults at the pin; configuration, raw mode, plugins, and alternate context engines may change them |

## Checkpoint 3 reuse mappings

The Gate B proposal reuses this reviewed record without adding an OpenClaw implementation claim:

- field-landscape-checkpoint-taxonomy-method-review-C001 (E02–E20)
- C002 (E05–E06, E14, E20); C003 (E07, E09, E20); C004 (E09–E10, E20)
- C005 (E09, E16, E20); C006 (E08, E17, E20); C007 (E05–E17)
- C008 (E13, E20); C010 (E19–E20); C011 (E17, E20); C012 (E04, E08, E18)
- C013 (E02–E17); C014 (reviewed case boundary); C015 (E08, E17); C016 (E09–E10, E20)

All abbreviated IDs in this list use the prefix field-landscape-checkpoint-taxonomy-method-review-. OpenClaw/Hermes recurrence remains lineage-confounded where a mechanism's origin is explicit or unresolved.

## Evidence assessment

The exact tagged checkout and repository-contained documentation are direct version evidence. Code, representative tests, and reachable history support implementation and failure-surface claims. No tests were required to assert behavior beyond the static implementation; one subtrace attempted targeted repository tests, but the intentionally read-only external checkout rejected temporary-directory creation with `EPERM`. That failure did not alter the checkout and is not treated as outcome evidence.

The source is authoritative for the open implementation but cannot establish effectiveness from mechanism presence, test volume, integration breadth, repository attention, or release cadence. Default-versus-optional labels are configuration-specific and should travel with every derived claim.

## Relationships and contradictions

Pi and OpenHands provide reviewed counter-shapes for nested lifecycle, context/state projection, tool/result boundaries, extensions, and runtime integrity. Their recurrence with OpenClaw is taxonomy evidence, not independent proof of effectiveness. MemoryAgentBench, two compaction preprints, BenchAgent, the self-correction survey, and external evaluation guidance qualify OpenClaw mechanisms without directly testing this release.

OpenClaw includes migration and compatibility surfaces, but this case did not inspect Hermes or treat related systems as independent convergence evidence.

## Leads and open questions

- Reproduce fragment-buffer process failure and quantify loss/retry behavior.
- Measure compaction retention, tool-result projection, and recovery under matched long-lived tasks.
- Evaluate shared-main versus peer-scoped DM sessions under realistic ownership models.
- Test dreaming for retrieval quality, correction/forgetting, and downstream task effects.
- Compare subagent modes under matched compute, state, artifacts, and verification.
- Evaluate finalization hooks and QA judges against executable outcomes.
- Inspect other channels only when a later question requires a channel-specific counterexample.

## First-batch synthesis claim references

The first-batch synthesis maps CP2-S005-E05–E20 to `field-landscape-synthesis-first-batch-harness-architecture-C001` through `C005`, `C007` through `C010`, `C012`, `C015` through `C017` where the canonical ledger names this record. OpenClaw/Hermes recurrence remains mechanism-level and lineage-confounded where migration, influence, or unresolved copying can explain similarity.

## Context-management synthesis claim references

The working context-management synthesis reuses CP2-S005-E07, E10–E14, and E21 for `field-landscape-synthesis-context-management-across-harnesses-C001` through `field-landscape-synthesis-context-management-across-harnesses-C007` where the canonical ledger names OpenClaw, and CP2-S005-E10–E12 and E18 for `field-landscape-synthesis-context-management-across-harnesses-C008`. The reviewed case boundary also contextualizes `field-landscape-synthesis-context-management-across-harnesses-C012`. Every mapping retains the pin, default/optional distinctions, and the OpenClaw/Hermes lineage caveat; no recurrence is treated as independent corroboration.
