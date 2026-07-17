# Source Record: Pi v0.80.6

**Source ID:** CP2-S001
**Maturity:** Analyzed evidence — Pi pilot primary implementation
**Source type:** Repository
**Author or organization:** earendil-works
**Publication date:** Tagged commit dated 2026-07-10; pin verified 2026-07-12
**URL:** https://github.com/earendil-works/pi/tree/v0.80.6
**Inspected version:** `v0.80.6`, commit `2b3fda9921b5590f285165287bd442a25817f17b`
**Related cycle or question:** Field landscape, Checkpoint 2 selection and Pi pilot
**Source family / parent:** Pi repository
**Inspection extent:** Full substantive for the approved harness questions
**Surfaces inspected:** README, pinned documentation, code, representative tests, history, releases, command output
**Provenance events:** Selection events plus Pi pilot source/open/inspection events in `pi-pilot-events.jsonl`
**Primary verification events:** Selection-ledger events and Pi pilot claim-mapping verification events

## Why this source matters

Pi is the pilot because it places a provider layer, reusable agent runtime, coding session, tools, extensions, persistence, and context management in one pinned repository. The pilot followed the production coding path from `AgentSession` into `Agent` and the provider boundary, then inspected state projection, tool mediation, compaction, recovery, tests, and relevant history.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| CP2-S001-E01 | Public Git tag resolves to the recorded commit | `refs/tags/v0.80.6` | `field-landscape-selection-checkpoint-2-deep-dive-set-C001` | supports | Identity/pin only |
| CP2-S001-E02 | README names the harness, agent core, provider layer, and coding CLI | `README.md` at `v0.80.6`, “Pi Agent Harness” and “All Packages” | `field-landscape-selection-checkpoint-2-deep-dive-set-C002`, `field-landscape-selection-checkpoint-2-deep-dive-set-C003` | material premise | Repository self-description; no code verified |
| CP2-S001-E03 | The low-level loop streams a response, executes tool calls, appends paired results, refreshes state, and continues until no tool/follow-up work remains | `packages/agent/src/agent-loop.ts`, lines 155–270; `packages/agent/src/agent.ts`, lines 424–570 | `field-landscape-case-pi-v0-80-6-C001`, `C002` | supports | Mechanics only; no task-quality claim |
| CP2-S001-E04 | Coding prompt/context policy combines active tools, instruction files, skills metadata, and extension-controlled turn refresh | `system-prompt.ts` 28–173; `resource-loader.ts` 85–119; `agent-session.ts` 473–499 and 983–1021 | `field-landscape-case-pi-v0-80-6-C003` | supports | Run configuration can replace or extend defaults |
| CP2-S001-E05 | Tool mediation validates arguments, permits trusted hooks, schedules parallel/sequential execution, and fails length-truncated calls closed | `agent-loop.ts` 383–747 and corresponding tests | `field-landscape-case-pi-v0-80-6-C004`, `C011` | supports | Trusted hooks remain able to mutate validated objects |
| CP2-S001-E06 | Append-only tree storage is projected into a compaction-aware active model context | `session-manager.ts` 414–465, 974–1050, 1187–1365 | `field-landscape-case-pi-v0-80-6-C005` | supports | In-memory mode is not durable |
| CP2-S001-E07 | Default compaction uses an LLM summary plus recent entries, with threshold and overflow paths | `agent-session.ts` 1729–2050; `docs/compaction.md`; compaction tests | `field-landscape-case-pi-v0-80-6-C006`, `C013` | supports/contextualizes | Repository does not measure semantic retention |
| CP2-S001-E08 | Subagents are an optional process-spawning extension rather than a core-loop primitive | `examples/extensions/subagent/index.ts` and absence from the default agent/coding core | `field-landscape-case-pi-v0-80-6-C007` | supports | Repository-wide absence is version-bounded |
| CP2-S001-E09 | Pi declares host authority by default and assigns strong containment to external boundaries or extensions | `README.md` 39–45; `docs/security.md`; `docs/containerization.md` | `field-landscape-case-pi-v0-80-6-C008` | supports | Establishes policy, not security effectiveness |
| CP2-S001-E10 | Retry and overflow recovery are implemented; default task-success verification and a task-level evaluation harness are absent | `agent-session.ts` 1027–1062, 1890–2050, 2574–2640; repository-wide inspection | `field-landscape-case-pi-v0-80-6-C009`, `C010`, `C014` | supports/contextualizes | Extensions and private external systems remain unknowable |

## Evidence assessment

The pinned repository is direct primary evidence for implementation mechanics. Code, tests, and history provide high directness for what exists and how state flows, but they cannot establish effectiveness. Rapid changes immediately before the release increase freshness while also showing version sensitivity. The `badlogic/pi-mono` URL used during selection redirects to this canonical repository; the repository documentation still contains some moving `pi-mono` links, so only local pinned content supports versioned claims.

## Relationships and contradictions

Cycle 1 contained Pi only as an unadmitted lead. The pilot independently verified its mechanisms. SWE-agent provides indirect outcome evidence for interface importance; Kamoi et al. qualify ungrounded self-correction; the two 2026 compaction preprints challenge assumptions about summary predictability and cost without directly evaluating Pi.

## Leads and open questions

Direct evaluations remain needed for Pi's compaction retention, tool-interface effect, voluntary verification behavior, and optional subagent cost/quality. The relationship between the newer `AgentHarness` and the production `AgentSession` also needs a later-version lineage check.
