# OpenClaw v2026.6.6

**Status:** Maintainer-reviewed implementation case

**Artifact ID:** `field-landscape-case-openclaw-v2026-6-6`

**Implementation boundary:** `openclaw/openclaw`, annotated tag `v2026.6.6`, dereferenced commit `8c802aa683510c7f7503597b54c3021733245e59`

**Scope:** [Pre-analysis boundary](openclaw-v2026.6.6-scope.md)

**Claim ledger:** [OpenClaw claims](../claims/openclaw-v2026.6.6.md)

**Primary evidence records:** [CP2-S005](../sources/cp2-openclaw-v2026.6.6.md), [FL-S008](../sources/hou-2026-memoryagentbench.md), [PI-S002](../sources/semenov-2026-beyond-compaction.md), [PI-S003](../sources/cim-2026-parallel-compaction.md), [FL-S006](../sources/fu-2026-benchagent.md), [FL-S009](../sources/kamoi-2024-self-correction-survey.md), and [FL-S002](../sources/anthropic-2026-agent-evals.md)

**Provenance:** `complete`; promotion-profile audit PASS with no blocking errors and one resolved, scope-preserving warning

## Executive finding

OpenClaw's ordinary agent path is not best understood as one model loop with many tools. It is a long-lived operational runtime whose work begins before the model is called and continues after the model has stopped. On the representative Telegram path, a polling worker durably spools an update; channel code authenticates, deduplicates, buffers, routes, and assigns it to a session; shared orchestration admits a canonical per-session operation; the embedded runtime materializes model, prompt, context, skills, tools, policy, and transcript state; and delivery code turns streamed and final agent output back into Telegram messages. ([C001](../claims/openclaw-v2026.6.6.md#c001), [C002](../claims/openclaw-v2026.6.6.md#c002), [C005](../claims/openclaw-v2026.6.6.md#c005))

The architecture's center of gravity is continuity under imperfect transports, long sessions, overlapping work, model failures, context pressure, and restarts. OpenClaw has several durable stores and several schedulers rather than one atomic “run”: the SQLite ingress queue, update offsets, dispatch claims, a session registry, JSONL transcripts, workspace memory, reply operations, channel lanes, and model-attempt state. Their boundaries deliberately solve different problems. The tradeoff is that “accepted,” “persisted,” “completed,” and “delivered” do not mean the same thing across layers. A near-limit Telegram fragment, for example, may leave durable ingress and sit in an in-memory timer before it becomes an agent turn. ([C003](../claims/openclaw-v2026.6.6.md#c003), [C004](../claims/openclaw-v2026.6.6.md#c004), [C010](../claims/openclaw-v2026.6.6.md#c010))

OpenClaw also sharpens the distinction between runtime correctness and task correctness. Its programmed envelope is unusually elaborate: authorization gates, leases, lane ownership, tool policy, schema projection, transcript locks, result pairing, replay safety, retry contracts, compaction recovery, delivery deduplication, and optional containment. The normal path can nevertheless accept a model completion without an independent judge of whether the user's task was solved. Optional finalization hooks and repository QA systems can add review or external evaluation, but they are separate policy layers. ([C007](../claims/openclaw-v2026.6.6.md#c007), [C008](../claims/openclaw-v2026.6.6.md#c008), [C016](../claims/openclaw-v2026.6.6.md#c016))

Finally, OpenClaw is the first case in this project with a concrete, optional across-run adaptation mechanism. Memory “dreaming” can promote repeatedly recalled and diverse snippets into durable memory. It is disabled by default and optimizes a usage-derived memory signal, not measured task success. That is adaptation, but it is not evidence of self-improving task performance. ([C011](../claims/openclaw-v2026.6.6.md#c011), [C012](../claims/openclaw-v2026.6.6.md#c012))

## Boundary and representative configuration

The exact annotated tag dereferences to the approved commit, and the detached checkout is clean. The commit is dated 2026-06-12. The repository contains more than twenty-six thousand tracked files across core TypeScript, bundled extensions, packages, applications, documentation, and tests. The case therefore follows the written scope rather than treating the monorepo as one undifferentiated product. ([C001](../claims/openclaw-v2026.6.6.md#c001))

The representative path is an ordinary text direct message on the bundled Telegram channel, using polling rather than webhook ingress, the default Telegram account, an already admitted sender, no explicit conversation binding or DM topic, and OpenClaw's ordinary embedded harness. This is a deliberately concrete path, not a claim that all OpenClaw deployments use Telegram or these policies.

The deep trace covered Telegram polling, authorization, route/session construction, core dispatch, run admission, the embedded agent attempt, transcript/session persistence, and Telegram streaming/final delivery. Model/context/tool construction, compaction, policy, memory, hooks, and result shaping received deep or targeted inspection. Gateway lifecycle, cron, heartbeat, subagents, QA, and targeted history received bounded inspection. Other channels, apps, providers, hosted services, alternate harnesses, ACP, Codex, browser/media tools, and third-party plugins remained survey-only or excluded.

## The representative path end to end

The path can be summarized without pretending that it is one transaction:

1. The channel plugin starts a polling session. Polling is token-leased; isolated ingress is enabled by default.
2. A worker receives Telegram updates and writes them into OpenClaw's shared SQLite-backed channel-ingress queue before advancing its local update position.
3. The main process claims queued records by channel lane. A successful handler deletes a record; a retryable failure releases it; selected poison failures are dead-lettered.
4. Telegram middleware applies update-watermark and semantic deduplication, then serializes ordinary direct-message work by chat lane.
5. A centralized authorization gate runs before reply-chain or dispatch-deduplication state is mutated. The default DM policy is pairing, so an unrecognized sender receives a pairing challenge and does not reach the agent.
6. Accepted content is normalized, optionally buffered/debounced, routed to an agent/session, and recorded as inbound session metadata.
7. `runChannelInboundEvent` invokes the shared buffered reply dispatcher. A per-session reply operation and queue policy coordinate concurrent or follow-up work.
8. `runEmbeddedAgent` enters session and global lanes, resolves workspace, hooks, harness, provider, model, authentication, and fallbacks, then executes a bounded attempt.
9. The attempt loads skills and bootstrap files, repairs and projects transcript state, materializes policy-filtered tools, assembles the system prompt and active context, and submits the model turn.
10. The embedded SDK drives model/tool interaction. OpenClaw wraps it with tool hooks, transcript guards, timeouts, replay/liveness checks, compaction recovery, and final payload construction.
11. Session metadata and JSONL transcript state are persisted at their respective boundaries. Tool evidence may be bounded for the provider without rewriting canonical history.
12. Telegram receives block, tool, reasoning, and final payloads. Partial streaming normally edits a draft in place; a stale or unsafe draft falls back to a durable final send when that delivery capability is available.

The exact code locations for these stages are mapped through [C002](../claims/openclaw-v2026.6.6.md#c002), [C004](../claims/openclaw-v2026.6.6.md#c004), [C005](../claims/openclaw-v2026.6.6.md#c005), [C006](../claims/openclaw-v2026.6.6.md#c006), and [C009](../claims/openclaw-v2026.6.6.md#c009).

## Ingress is durable, but the entire turn is not atomic

The Telegram polling design has two distinct processes. The worker performs `getUpdates`, waits for the parent to acknowledge a spooled record, and only then advances its update cursor. The spool abstraction delegates to the shared SQLite state database, where `(queue_name, event_id)` conflict handling deduplicates the update. The main process drains records with lane-aware concurrency and explicit retry/dead-letter behavior. This is stronger than an in-memory webhook callback and is a genuine long-lived-runtime mechanism. ([C002](../claims/openclaw-v2026.6.6.md#c002))

Authorization is deliberately earlier than content caching. Fresh messages, edits, and channel posts share one gate; direct-message rules combine configured policy, access groups, and pairing-store state. This ordering is not cosmetic. Reachable history contains a corrective commit that moved authorization ahead of cache/dedupe after unauthorized content could enter later prompt context. The commit establishes a concrete historical failure class, not its frequency. ([C002](../claims/openclaw-v2026.6.6.md#c002), [C016](../claims/openclaw-v2026.6.6.md#c016))

The durable story has a qualification. Telegram configures its acknowledgement policy as `after_agent_dispatch`, but that label does not mechanically observe dispatch on this path. `bot-core` calls `finishUpdate(completed: true)` when the middleware chain returns, and the update tracker maps that successful completion to its `agent_dispatch` acknowledgement stage. Near-limit text and media-group handlers can return after placing admitted pieces only in process-local buffers and scheduling timers; actual reply-chain dispatch happens later from those callbacks. The polling layer treats the resolved handler as successful and deletes the claimed SQLite spool record. A crash after middleware completion but before the timer-driven dispatch can therefore lose the buffered content. No crash experiment was run, so this remains an implementation inference rather than a measured reliability claim. It illustrates why a “durable ingress” label is too coarse: durability changes between transport receipt, normalized message, admitted turn, transcript entry, and delivered reply. ([C003](../claims/openclaw-v2026.6.6.md#c003))

Other boundaries choose deduplication over automatic replay. The persistent dispatch claim is committed immediately before dispatch, not after successful final delivery. `dispatchTelegramMessage` catches processing errors, attempts a user-visible fallback, and returns rather than rethrowing to the spool. These choices may reduce duplicate effects at the cost of not automatically retrying every post-admission failure.

## Routing: one chat lane does not imply one private context

Telegram direct-message identity prefers the sender's Telegram user ID and feeds it into the shared route resolver. The effective session key is a separate decision. With the default `dmScope: "main"`, the default agent/account route normally resolves to `agent:main:main`. Named-account fallback deliberately chooses a peer-scoped key, and explicit bindings, topic routing, or configuration can also isolate sessions. ([C004](../claims/openclaw-v2026.6.6.md#c004))

This yields a subtle default: different admitted Telegram DMs have different Telegram chat lanes and delivery destinations while normally sharing the default agent's conversation state. Sender isolation at ingress is not session isolation. That may be intentional for a personal agent with one owner and many channels, but it is an important deployment boundary, not a universal privacy or multi-user model.

The session record persists last-route and inbound metadata separately. Last-route persistence is awaited, while some inbound metadata is best-effort. That asymmetry supports later channel delivery without making the whole route/session update a transaction.

## Model policy, active context, and capability construction

`runEmbeddedAgent` first serializes work, resolves workspace and runtime plugins, lets hooks alter model choice, selects the agent harness, and resolves provider/model/authentication with fallbacks. A non-OpenClaw harness plugin can take ownership at that branch, but those runtimes are outside this case. The normal branch enters `runEmbeddedAttempt`. ([C006](../claims/openclaw-v2026.6.6.md#c006))

The attempt constructs one effective call boundary from several sources:

- configured and hook-modified model/provider policy;
- the selected agent/workspace and channel/session runtime metadata;
- bootstrap files such as `AGENTS.md`, `SOUL.md`, `TOOLS.md`, `IDENTITY.md`, `USER.md`, `HEARTBEAT.md`, `BOOTSTRAP.md`, and `MEMORY.md` when applicable;
- a skill snapshot or eligible live skills, with prompt-level filtering and size bounds;
- repaired transcript messages and the selected context engine;
- system-prompt policy, runtime details, time, owner identity, sandbox description, and provider contributions;
- a final, policy-filtered tool inventory.

Default bootstrap injection is `always`, while heartbeat receives a lightweight set and cron receives none. The default context engine is the legacy pass-through/runtime-compaction path unless a plugin slot replaces it. Raw model mode deliberately strips most of this assembly. These are distinct modes; the full path should not be projected onto raw runs or alternate context engines. ([C006](../claims/openclaw-v2026.6.6.md#c006))

The tool list is a useful boundary check. Tool names in the prompt come from the effective registered set, and the prompt explicitly warns that documentation in `TOOLS.md` does not prove a tool is available. Explicit allowlists, group/sender/agent policy, sandbox policy, provider schema compatibility, tool search, MCP/LSP materialization, and plugins can all change what is visible and executable. Consequently R2, R3, and R5 remain distinguishable questions, but the implementation must synchronize them at call construction. ([C006](../claims/openclaw-v2026.6.6.md#c006), [C008](../claims/openclaw-v2026.6.6.md#c008))

## A model-directed loop inside a programmed acceptance envelope

The model normally selects tools and produces the final response, but deterministic code decides whether a turn is admissible and complete. OpenClaw owns session/global queueing, timeout and abort behavior, replay-safe retries, model/auth failover, empty or silent response handling, strict-agentic liveness checks for supported models, context-overflow recovery, and terminal payload classification. ([C005](../claims/openclaw-v2026.6.6.md#c005), [C007](../claims/openclaw-v2026.6.6.md#c007))

Compaction illustrates the hybrid control. The runtime can compact after high-context timeout or overflow, resume without replaying the inbound message, and fall back to persisted tool-result truncation before it gives up. It caps retry counts and extends timeout once when compaction is already active. These policies protect forward progress and transcript coherence. They do not determine whether the eventual answer is substantively correct.

The same distinction applies to strict-agentic handling. Missing, reasoning-only, empty, incomplete-tool, or replay-unsafe outcomes receive different bounded treatments. Exhaustion produces an explicit blocked or error-shaped result rather than silently calling it success. A valid assistant completion, however, normally satisfies the runtime contract. Optional `before_agent_finalize` hooks can request another model pass, but no such judge is required on the representative path. ([C007](../claims/openclaw-v2026.6.6.md#c007), [C016](../claims/openclaw-v2026.6.6.md#c016))

## Actions, authority, containment, and observations

OpenClaw composes tool authority from global, provider, agent, group, sender, sandbox, inherited, and plugin policy. Tool schemas are projected to provider-compatible JSON Schema; incompatible dynamic structures can be rejected or quarantined. Every ordinary tool can be wrapped by a sequential `before_tool_call` hook that may modify parameters, require approval, or block. Post-call and synchronous persistence hooks observe or rewrite later stages. ([C008](../claims/openclaw-v2026.6.6.md#c008), [C015](../claims/openclaw-v2026.6.6.md#c015))

Containment is operator policy, not intrinsic to the loop. The resolved sandbox default is `mode: "off"`; when enabled, backend, scope, workspace access, and tool policy are resolved per agent. Some individual mechanisms remain constrained—for example, the inspected `apply_patch` policy retains a workspace boundary unless explicitly changed—but the general default path should be described as host-side rather than sandboxed. This is a trust-boundary finding, not a security audit or a claim that every tool is unrestricted.

Raw execution results and model-facing evidence are not one object. The runtime records canonical transcript content, may send a truncated clone to the provider while preserving history, and can perform an explicit persisted rewrite only as overflow recovery. Tool lifecycle events separately cap output, classify blocked/error/abandoned states, and retain side-effect metadata used by replay safety. This makes R5 and R6 analytically useful, even though the same runtime code spans both. ([C009](../claims/openclaw-v2026.6.6.md#c009))

Recent compaction papers provide relevant counterpressure. They report loss, latency, and run-to-run variability for synchronous summarization under different tasks and models, and one proposes deterministic structured eviction. Those studies identify plausible failure modes for OpenClaw's runtime compaction; they do not test this prompt, this transcript tree, this recovery sequence, or this release. The honest classification is contested implementation practice rather than validated or disproven mechanism. ([C018](../claims/openclaw-v2026.6.6.md#c018))

## Durable state is a federation of stores

OpenClaw does not have one canonical “memory” or “session database.” The representative path uses at least:

- the SQLite channel-ingress queue for transport work;
- persisted Telegram update offsets and dispatch claims;
- `sessions.json` for route and session metadata;
- an append-only JSONL transcript tree for messages, model changes, compactions, and custom entries;
- workspace bootstrap and memory files;
- indexes and plugin stores when memory/search is active;
- process-local lane, attempt, streaming, and buffer state.

The session registry is written atomically through a restricted temporary file. The transcript manager opens under an owned lock, repairs older/corrupt state, guards tool-call/result pairing and provenance, and can rotate after compaction. The context engine operates on a repaired projection rather than every stored record. This earns the R7/R3 distinction but also shows that session recovery crosses R1, R4, R6, R7, and R9. ([C010](../claims/openclaw-v2026.6.6.md#c010))

Targeted history reinforces these failure surfaces. Reachable fixes address stale session locks, manual-abort lock release, pre-reset lifecycle events clobbering a rotated session, tool-result pairing after context assembly, prompt-cache stability, and delivered-message accounting. They establish that lock, projection, and delivery boundaries have failed in concrete ways; they do not measure how often or prove that adjacent variants are fixed.

## Memory: retrieval, deliberate writes, and optional adaptation

The pinned documentation identifies `memory-core` as the default memory plugin. Its implementation adds `memory_search` and `memory_get` when available and injects explicit recall guidance into the system prompt. Pre-compaction memory flush can ask the model to append durable notes to `memory/YYYY-MM-DD.md`, with a silent response when nothing should be stored. These mechanisms separate model-visible retrieval, deliberate workspace writes, transcript history, and the current active prompt. ([C011](../claims/openclaw-v2026.6.6.md#c011))

MemoryAgentBench is useful here because it refuses to equate memory with retrieval alone. Its benchmark separates accurate retrieval, test-time learning, long-range understanding, and conflict resolution/selective forgetting, and reports that no evaluated method masters all of them. That does not score OpenClaw. It instead warns that the presence of search, flush, and persistence mechanisms leaves write quality, conflict handling, and downstream task value unmeasured. ([C018](../claims/openclaw-v2026.6.6.md#c018))

OpenClaw's optional “dreaming” mechanism goes further. A scheduled sweep can select short-term snippets by score, recall/signal count, query diversity, recency, and contamination checks, rehydrate the source, deduplicate promotion markers, respect a memory-file budget, and append selected content to long-term memory. Global dreaming is disabled by default. Its signal is evidence of repeated access and diversity, not evidence that retaining the item improved later outcomes. ([C012](../claims/openclaw-v2026.6.6.md#c012))

This is the first observed R11 mechanism in the case set, but it exposes a category problem: adaptive context and outcome-driven optimization are not the same. Dreaming changes future calls based on past use. It does not automatically optimize a measured task objective. Calling both “self-improvement” would overstate the evidence.

## Long-lived work: heartbeat, cron, and subagents

Cron and heartbeat are not merely timers outside the harness. Isolated cron prepares agent, session, model, delivery, timeout, and tool policy, then invokes the same embedded agent with cron-specific context. Heartbeat checks enablement, active hours, busy lanes, active replies, pending delivery recovery, session identity, and optional isolated-session mode before invoking the ordinary reply path with heartbeat-specific prompt and tool policy. ([C013](../claims/openclaw-v2026.6.6.md#c013))

These paths make ingress broader than human messages. A turn may originate from a channel, schedule, system event, commitment, or background completion, and each origin has different bootstrap, concurrency, session, and delivery semantics. They strengthen the case for lifecycle-scale annotations without yet justifying more top-level responsibilities.

Subagents are similarly optional. `sessions_spawn` can select a target agent/model, use isolated or forked context, run once or create a thread-bound session where supported, and attach bounded files. Forking currently requires the same agent; cross-agent work uses isolated context. The mechanism provides explicit context and lifecycle policy, but it does not make a child an independent verifier. Results return through the same family of session and delivery machinery. ([C014](../claims/openclaw-v2026.6.6.md#c014))

BenchAgent qualifies any effectiveness interpretation. Its controlled internal comparison reports that five of six multi-agent workflows trail the matched single-agent anchor under its protocol, while a separately evaluated Claude-Code-style runtime performs strongly without isolating subagents as the cause. OpenClaw's coordination mechanism should therefore be treated as an available design with measurable costs and unestablished benefit, not as improvement by construction. ([C018](../claims/openclaw-v2026.6.6.md#c018))

## Cross-cutting hooks and control ownership

The plugin hook vocabulary spans model resolution, prompt building, exact LLM input/output observation, finalization, compaction, reset, inbound claims, messages, tools, transcript writes, sessions, subagents, gateway start/stop, heartbeat, cron, dispatch, and execution environment. Some hooks observe; others modify, block, require approval, synthesize replies, or request another model pass. ([C015](../claims/openclaw-v2026.6.6.md#c015))

This strongly recurs with Pi and OpenHands: extension is not one responsibility. It is a cross-cutting way to reassign control. A useful case description must name both the mechanism and the effective owner—core application, operator configuration, channel, agent definition, model, provider, or plugin. A capability exposed by a hook is not a default policy.

## Verification, observability, and evaluation

OpenClaw's runtime integrity layer is extensive. It includes ingress deduplication, pairing/authorization, lane and reply-operation ownership, session locks, transcript repair, tool-result pairing, schema/policy checks, replay metadata, retries, liveness contracts, compaction recovery, abort fences, delivery deduplication, and targeted regression tests. ([C016](../claims/openclaw-v2026.6.6.md#c016))

Task acceptance is separate. The ordinary path can finish on a model response that satisfies transport and execution contracts. A `before_agent_finalize` hook can request revision, but it is optional and avoids revising after certain side effects. The repository's personal-agent scenario pack checks reminders, routing, memory, redaction, approval denial, proof-backed completion, and recovery. Character evaluation can run candidates and blinded judge models while retaining transcripts. These are external QA/evaluation systems, not proof attached to every live reply. ([C016](../claims/openclaw-v2026.6.6.md#c016), [C017](../claims/openclaw-v2026.6.6.md#c017))

Kamoi et al.'s review supports distinguishing reliable external feedback from ungrounded intrinsic correction, while Anthropic's evaluation guidance separates the agent harness from the evaluation harness and recommends examining trajectories and outcomes across repeated trials. Neither directly validates OpenClaw's finalization hook, QA scenarios, or judge prompts. They clarify why protocol integrity, task acceptance, and external evaluation should remain separate claims. ([C018](../claims/openclaw-v2026.6.6.md#c018))

Operational observability includes run lifecycle diagnostics, exact LLM input/output hooks, trajectory events, usage and cache accounting, compaction counts, tool metadata, delivery state, logs, and tests. The repository can establish these mechanisms. It cannot establish private deployment configuration, production incidence, user counts, task success, or the causal value of individual mechanisms at this pin. ([C017](../claims/openclaw-v2026.6.6.md#c017))

## Responsibility-lens map

| Responsibility | OpenClaw mechanism | Diagnostic result |
| --- | --- | --- |
| R1 lifecycle and ingress | gateway/account task, worker, durable ingress record, lane handler, session operation, embedded run, attempt, tool, schedule, delivery | Strong coverage; scale must be named |
| R2 model and instruction policy | config, agent route, provider/model/auth selection, hook/provider contributions | Distinct question, coupled during materialization |
| R3 active context and capabilities | transcript projection, bootstrap, skills, memory prompt, tool inventory, context engine | Strong coverage; joined to R2/R5 |
| R4 control and execution semantics | channel lanes, reply operations, queues, model-directed tool loop, programmed retries and liveness | Multiple schedulers with different durability |
| R5 action and environment mediation | tool policy, schemas, approvals/hooks, host or optional sandbox execution | Strong coverage; operator/plugin dependent |
| R6 observation and feedback | canonical result, provider projection, truncation/rewrite, channel payloads and errors | Distinct layers that cross R5/R7 |
| R7 durable state and persistence | SQLite ingress, offsets, session registry, JSONL transcript, workspace memory | Federation of stores, not atomic turn state |
| R8 coordination and aggregation | agent routing, session messaging, isolated/forked subagents | Optional and context-dependent |
| R9 verification, recovery, controls | authorization, leases, locks, replay, retry, compaction, optional finalizer | Runtime integrity strong; task acceptance optional |
| R10 observability and evaluation | logs, traces, trajectory events, usage, scenario packs, judged QA | Strong external layer; no per-reply effectiveness implication |
| R11 across-run adaptation | optional memory dreaming/promotion | Present as usage-driven adaptation, not outcome optimization |

## Taxonomy friction after three cases

All six registered questions receive meaningful OpenClaw evidence. The detailed classifications and citations are in [the taxonomy-friction register](../TAXONOMY-FRICTION.md). In summary:

- **TF-001 observed:** lifecycle scale expands beyond application/session/turn into gateway, channel account, polling worker, durable update, lane, reply operation, scheduled job, model attempt, tool, and delivery.
- **TF-002 observed:** model/instruction policy, call-visible capabilities, and executable authority remain conceptually distinct but are assembled together.
- **TF-003 observed:** canonical results, provider-facing projections, overflow rewrites, and delivered channel payloads are separate layers.
- **TF-004 observed:** hooks, plugins, channels, memory slots, context engines, and skills alter several responsibilities.
- **TF-005 observed:** runtime integrity and operational recovery are extensive while semantic task acceptance remains optional.
- **TF-006 observed:** core, operator, channel, agent, model, provider, and plugin each own different decisions; control owner is a useful cross-cutting dimension.

OpenClaw adds **TF-007**: R11 currently groups adaptive context/memory with outcome-driven optimization. The dreaming implementation demonstrates the former without the latter. This is a proposed question for Checkpoint 3, not a taxonomy revision. ([C019](../claims/openclaw-v2026.6.6.md#c019))

One additional boundary is recorded within TF-001 rather than opened as a new issue: human channel events, scheduled jobs, heartbeats, and background completions are different ingress classes. Further cases should determine whether an origin annotation is enough.

## Negative findings and unsupported practices

- Durable polling does not make the whole turn atomic; near-limit fragment and media buffers create an in-memory interval after update completion.
- The default Telegram account and default `dmScope` normally share one agent session across admitted direct-message senders.
- Dispatch deduplication can suppress automatic replay after a post-admission processing failure.
- Sandbox mode is off by default; containment is an operator/deployment choice.
- Plugin hooks can modify or bypass several ordinary stages, so core behavior does not fully describe a deployment.
- Compaction and result rewriting preserve liveness and bounded context, but semantic retention is unmeasured at this pin.
- Memory search, flush, and dreaming do not establish memory accuracy or task benefit.
- Dreaming uses recall/diversity/recency signals, not observed task outcomes.
- Subagent availability does not establish quality improvement, independence, or verification.
- Strict-agentic contracts and replay safety validate execution shape, not task correctness.
- External QA and judged character evaluation do not govern every ordinary live turn.
- Repository size, release activity, integrations, and attention were not used as evidence of effectiveness or adoption.
- Hosted behavior, private deployments, provider internals, third-party plugins, real user counts, and private evaluations remain unknowable.

## Open questions and proposed tests

- What is the loss rate for Telegram fragment/media buffers under controlled process failure between middleware completion and timer flush?
- For which deployments is shared-main DM context intentional, and when should peer-scoped sessions be the safer default?
- How often do layered dedupe and delivery rules prevent duplicates versus suppress desirable retries?
- How much task-relevant information survives repeated compaction and provider-facing tool-result truncation?
- Does memory promotion improve later task outcomes, merely reduce retrieval effort, or entrench frequently recalled mistakes?
- How should conflicting or obsolete promoted memories be corrected and forgotten?
- Which subagent configurations improve outcomes after controlling for model calls, context, artifacts, and verification?
- How accurately do finalization hooks or QA judges predict executable task success?
- Would explicit lifecycle-scale and ingress-origin annotations improve comparison without splitting R1?
- Should R11 distinguish adaptive state/context from measured outcome optimization?

## Case-method retrospective

The scope artifact successfully controlled OpenClaw's integration surface. The case followed one Telegram direct-message path and used other channels and runtimes only to identify explicit boundaries. The largest cost driver was not repository size by itself; it was the number of durable and process-local ownership layers crossed by one message. The written boundary prevented that cost from turning into an inventory of channels, tools, or providers.

Control-flow-first analysis remained readable, but OpenClaw required a slightly different explanatory unit from Pi and OpenHands: the transaction boundary. Following where an update became durable, authorized, session-owned, model-visible, transcript-persisted, and delivered exposed more of the architecture than following package names or feature headings would have.

The method scaled to a long-lived system. The responsibility table again worked best after the native narrative. The defaults-versus-options discipline was essential: polling versus webhook, shared versus peer-scoped sessions, legacy versus plugin context engines, host versus sandbox execution, normal reply versus finalization hook, ordinary turn versus cron/heartbeat, isolated versus forked child context, and disabled-by-default dreaming all produce materially different claims.

Pi and OpenHands friction largely recurred. OpenClaw adds stronger evidence for lifecycle scale, multiple persistence/commit boundaries, operator/channel ownership, and R9 subdimensions. It also provides the first observed R11 mechanism and shows why “adaptation” and “optimization” should not be synonyms. No taxonomy or method change is recommended before the maintainer review and later Checkpoint 3 comparison.

The three retained evidence windows overlap within about 27 minutes of wall-clock analysis: one primary trace and two concurrent, bounded subtraces. They contain 272 native observations. The adapter resolved 262 automatically; ten exceptions—five clone-progress polls and five scoped instruction or test commands—were reviewed together in one append-only batch. The audit records 20 manual interaction events: ten exception-linked repository records and ten source identities, all authored in batch rather than per ordinary read. There were no searches, manually authored web-result events, unresolved observations, or provenance-code changes.

That overhead remained exception-scaled: 96.3 percent of observations were classified automatically, and the only observation-resolution action was one ten-item batch. The package contains 20 declared claims, 31 claim/source/location mappings, and 31 primary verifications. All three exact transcript prefixes are retained outside the repository with mode `0600` and are cryptographically rechecked by regeneration.

## Research trail and source coverage

The case began with pin verification and the written scope, then followed the Telegram polling/direct-message path from channel startup to final delivery. Two bounded subtraces covered ingress/routing/delivery and embedded model/context/tool execution. The primary agent re-opened and verified the load-bearing authorization, routing/session, durable queue, embedded-run, prompt/tool, sandbox, result-projection, memory, scheduling, hook, subagent, QA, and history locations before writing the case.

Targeted history was reached from traced symbols and tests rather than searched as a general project chronology. Corrective commits were retained only when they clarified a concrete ingress, session, transcript, compaction, or delivery invariant. No other harness was inspected.

A bounded targeted-test invocation was attempted, but `pnpm` tried to perform a workspace dependency check and failed when it could not create a temporary file in the externally retained checkout. Consequently no OpenClaw test executed locally. Tests were inspected as pinned source evidence, and the case's implementation claims rest on static control-flow, test, documentation, and history inspection—not behavioral reproduction.

Six already admitted research records were reused locally. They provide bounded context for memory evaluation, compaction risks, multi-agent comparisons, feedback sources, and external evaluation. Three reviewed or selection-level implementation records—Pi, OpenHands SDK, and Browser Use—support only taxonomy and sampling judgments. None is represented as a direct OpenClaw experiment, and the pinned OpenClaw repository remains the only implementation source for the OpenClaw findings.

The generated audit records ten opened and referenced sources, 237 linked research observations, 35 reasoned non-research observations, and no missing source disposition, claim mapping, or verification. Its sole warning is resolved: Browser Use remains screening-depth evidence because deeper inspection would have violated this case's boundary. Command-derived repository-path display retains minor normalization noise for a few compound shell reads; exact claim locations, the pinned source record, and the native transcript evidence remain authoritative, so this does not affect a research conclusion or justify reopening the frozen provenance implementation.

## Review scope and attestation

The review scope covers every material implementation, negative, comparison, research-qualification, taxonomy-friction, and sampling-recommendation claim in this case and the linked ledger. It excludes other channels' detailed behavior, hosted services, third-party integrations, alternate harnesses, provider internals, security assurance, behavioral experiments, benchmark reproduction, adoption measurement, and causal effectiveness.

Every material prose claim is linked to a canonical claim ID or explicitly framed as a scope boundary, question, or limitation. The canonical event log contains the 31 mappings and primary verifications, digest-backed prose attestation, and explicit review scope; the generated promotion-profile audit passes. On 2026-07-17, the maintainer accepted the case after external verification and primary reconciliation of C003 with the `after_agent_dispatch` implementation, as recorded in D-010.
