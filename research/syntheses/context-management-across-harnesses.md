# Context Management Across Agent Harnesses

**Status:** Working synthesis derived from four maintainer-reviewed implementation cases; independent Fable review deferred by the maintainer because the reviewer session limit is exhausted  
**Evidence boundary:** Four maintainer-reviewed cases—Pi `v0.80.6`, OpenHands Software Agent SDK `v1.35.0`, OpenClaw `v2026.6.6`, and Hermes Agent `v0.18.2`—plus topic-specific primary inspection of Codex CLI `rust-v0.144.6` and Letta Code `v0.28.11` / open server `0.16.8`, and three already-admitted context or memory research records  
**Canonical claim ledger:** [Context-management claim ledger](../claims/context-management-across-harnesses.md)  

## The engineering question

An agent can retain terabytes and still make a poor next decision. The model acts only on the bounded representation assembled for the current call. Context management is therefore not “how much the agent remembers.” It is the policy pipeline that decides which durable and live information becomes model-visible evidence, in what representation, at what cost, and with which losses.

The four reviewed harnesses expose six recurring decisions:

1. **Initial construction:** which instructions, capabilities, files, and environment facts enter a call without retrieval;
2. **Acquisition:** how the harness reads, searches, or retrieves information that is not already active;
3. **Observation shaping:** how raw tool and environment results become bounded model-visible messages;
4. **History projection:** which branch or event view is eligible for replay;
5. **Compaction:** what is summarized, evicted, archived, or retained when the projected history is too large;
6. **Context transfer:** what a child agent or later run inherits, retrieves, or must rediscover.

This decomposition is an inference from the four pins, not a proposed replacement taxonomy. It is useful because each decision has different failure modes and different owners. ([C001](../claims/context-management-across-harnesses.md#c001))

## Storage is not context

All four systems separate retained state from the active representation sent to the model. Pi keeps an append-only session tree while projecting one active branch after the latest compaction. OpenHands keeps an append-only event tree and builds a model-convertible `View` over the active branch. OpenClaw has a federation of stores—channel ingress, session metadata, JSONL transcripts, workspace files, memory indexes, and process-local state—while its context engine and provider path operate on repaired, bounded projections. Hermes stores canonical session messages in SQLite while compression can soft-archive older active rows and insert a smaller same-session projection.

This distinction is load-bearing. Retention answers whether information can be recovered, audited, searched, or reprojected. Active context answers whether the model can use it on this call. Preserving raw history reduces irreversible storage loss; it does not undo the decision to omit or summarize that history before inference. ([C002](../claims/context-management-across-harnesses.md#c002))

## Same problem, materially different policies

| Decision surface | Pi v0.80.6 | OpenHands SDK v1.35.0 | OpenClaw v2026.6.6 | Hermes v0.18.2 |
| --- | --- | --- | --- | --- |
| Initial context | Coding prompt from active tools, instruction files, skills metadata, project/environment facts, and extension state | Frozen agent policy materialized with runtime tools, plugins, skills, MCP, prompt context, and the active `View` | Per-run model/provider, bootstrap files, skills, context-engine state, system prompt, and effective tools; full, lightweight, and raw modes differ | Cached system prompt plus request-local history, plugin context, memory, tools, provider normalization, and route fields |
| Durable trajectory | Append-only JSONL tree | Append-only event tree | JSONL transcript plus other session and workspace stores | SQLite session and message rows |
| Ordinary model view | Active branch; after compaction, summary plus retained recent entries and later events | Model-convertible active branch after condensation rules | Repaired transcript/context-engine projection with bounded provider-facing results | Active SQLite rows plus request-local additions; compressed rows are excluded from the active projection |
| Large tool output | Read keeps a bounded head; shell keeps a bounded tail and writes full output to a temporary file | Typed observation conversion can truncate or spill output before model-message construction | Live result cap depends on context size, never exceeds 30% of the window, and preserves an important-looking tail when possible; recovery can rewrite persisted history | Post-execution transformation can spill large output and return a retrieval stub or hint |
| Compaction default | Enabled; structured LLM summary plus recent tail | No condenser on bare `Agent`; default preset installs an LLM summarizer | Runtime compaction and recovery are present on the ordinary embedded path; configuration and alternate context engines can change behavior | Fresh built-in configuration enables in-place LLM compression at 50% of effective context |
| Child context | Optional extension; separate process strategy rather than a core invariant | Separate child conversations share the workspace; parent receives final text | Several subagent modes and policies; context depends on mode and route | Fresh child sessions omit parent context files and durable memory; bounded summaries return to the parent |

The table is deliberately about policies, not feature checkmarks. “Has compaction” hides whether compaction is default, whether old data remains recoverable, which regions are protected, how failure behaves, and whether the result has ever been evaluated for downstream task retention. ([C003](../claims/context-management-across-harnesses.md#c003), [C004](../claims/context-management-across-harnesses.md#c004), [C005](../claims/context-management-across-harnesses.md#c005), [C006](../claims/context-management-across-harnesses.md#c006))

## Two targeted counter-shapes

The four reviewed cases remain the comparative backbone, but two bounded primary inspections reveal choices the original set would otherwise hide.

Codex CLI `rust-v0.144.6` treats context as several products. Initial prompt construction includes instructions, permissions, skills, plugins, extensions, world state, and bounded AGENTS material; later turns append changes. Automatic compaction defaults to a threshold derived at 90% of the effective context window. Local fallback compaction creates a continuation handoff and preserves recent real user messages within a 20,000-token budget, while remote compaction v2 uses a different replacement policy with a 64,000-token recent-instruction budget. Multi-agent v2 defaults to “all” history, but that phrase means a selective projection: user, developer, and system messages plus final assistant answers survive, while tool calls/results, reasoning, inter-agent chatter, and non-final assistant material do not. Experimental cross-run memory is disabled by default. ([C013](../claims/context-management-across-harnesses.md#c013))

Letta exposes information placement as policy. In the pinned Letta Code client, `system/` memory becomes always-visible prompt material; other memory appears through metadata and must be read on demand. Normal agents receive memory while ordinary subagents are ephemeral and stateless; an explicit forked child can instead inherit parent conversation history as reference. In the pinned open server, active history compacts at a 90-percent threshold using sliding-window summarization by default, while older durable conversation remains hybrid-searchable. Reflection can periodically update committed memory or skills, but its step-based signal is not an outcome objective. ([C014](../claims/context-management-across-harnesses.md#c014))

These are topic records, not full case studies. In particular, the Letta Code and open-server pins are not asserted to be one compatibility-verified cloud release.

## One reported closed-source comparator

Arize reports that Claude Code uses layered file-read limits and same-range deduplication, persists oversized tool results while returning small previews, compacts with a structured continuation summary and recent-file restoration, and supports both blank and forked child contexts. Those details are useful hypotheses because they expose another policy combination. They remain source-reported: the article names no stable Claude Code implementation boundary and says some limits are remotely tunable. Direct inspection also found version-sensitive disagreements between the article's OpenClaw and Letta descriptions and the pins used here. Claude Code therefore informs the question without entering the verified implementation matrix. ([C015](../claims/context-management-across-harnesses.md#c015))

## Tool output is an evidence policy

Tool execution produces environment data; observation construction decides what the model learns from it.

Pi makes the choice visible at the tool level. Its file reader keeps a bounded head and gives a continuation hint, while its shell tool keeps the tail—where command failures and summaries often appear—and saves complete output to a temporary file. OpenHands converts executor results into typed observations and may add fields, truncate content, or spill it before constructing a model message. OpenClaw caps live results by both a character ceiling and a 30-percent context-share ceiling; it normally keeps the beginning but switches to head-plus-tail when diagnostics or summary-like material appear near the end. Hermes can replace large content with a disk-backed retrieval stub and add navigation hints before appending the tool-role message.

These are different bets about error cost:

- **Head retention** favors schemas, introductions, and early declarations but can lose final errors.
- **Tail retention** favors recent output, exit summaries, and stack-trace endings but can lose setup and causality.
- **Head plus tail** covers both boundaries while deleting the middle, which can contain the only relevant match.
- **Spill plus retrieval hint** preserves recoverability but adds another model decision and tool call; the model may never retrieve the missing portion.
- **Typed transformation** can expose structured status cleanly, but the transformer becomes part of the evidentiary boundary.

The correct comparison is not “which cap is biggest?” It is whether the retained shape matches the output type, whether truncation is visible, whether full content remains recoverable, and whether the agent receives a practical retrieval path. ([C004](../claims/context-management-across-harnesses.md#c004))

## Compaction is a family of lossy transactions

All four reviewed systems can use LLM-authored summaries, but their transactions differ.

Pi chooses a cut point, preserves a recent tail, asks a model for a structured summary, appends a compaction entry, and rebuilds the active branch. The old tree remains stored. OpenHands condensation preserves a prefix and recent suffix, records forgotten event IDs and the summary in a durable `Condensation` event, and leaves a soft-pressure failure able to retain the current view. A bare `Agent` has no condenser; the default preset does. OpenClaw combines ordinary compaction with overflow recovery, pairing repair, bounded projections, and optional pre-compaction memory writes. Hermes protects the system prompt, an early region on the first pass, and a recent tail; prunes old tool output; summarizes the middle with an auxiliary model; soft-archives the old active rows; and inserts the compacted projection atomically. Its special early-region protection decays after the first compression. Some summary failures preserve context, while an ordinary failure can fall back to a placeholder and drop the middle unless stricter abort behavior is configured.

The mechanisms solve a real capacity problem, but implementation presence is not retention evidence. Two recent preprints report that synchronous LLM summarization can be lossy, blocking, variable across runs, and difficult to control under their tested protocols. One proposes typed, dependency-aware eviction; the other reports large latency shares and summary variability across four backbones on non-coding tasks. Neither evaluates these four releases, prompts, protected-region policies, or coding workloads. “Contested implementation practice” is therefore the supported conclusion—not “summarization is bad” and not “recent-tail summaries are proven.” ([C005](../claims/context-management-across-harnesses.md#c005), [C009](../claims/context-management-across-harnesses.md#c009))

## Subagents are context-boundary decisions

Delegation is often discussed as a coordination pattern, but it is also a context allocation mechanism.

OpenHands gives each delegated child a separate conversation while sharing the parent workspace, then aggregates final text. Hermes gives children fresh sessions and focused prompts, omits parent context files and durable memory, constrains inherited capability, and returns bounded summaries with overflow retrieval. Pi's reviewed production path has no core subagent scheduler; its example extension demonstrates that delegation policy can live outside the core loop. OpenClaw supports multiple child and scheduled-work surfaces whose inheritance depends on mode and route.

Isolation reduces prompt contamination and lets a child receive a narrow problem. It also removes background assumptions, earlier evidence, and tacit constraints. Returning only a summary protects the parent window, but it makes the child a lossy compressor and prevents the parent from directly inspecting the complete trajectory unless a retrieval path exists. A subagent is not automatically an independent verifier merely because it has a separate context. ([C006](../claims/context-management-across-harnesses.md#c006))

## Long-term memory is upstream of context, not a synonym for it

OpenClaw and Hermes make the separation explicit. OpenClaw can retrieve from a memory plugin, deliberately write workspace memory before compaction, and optionally promote repeatedly recalled material through disabled-by-default dreaming. Hermes has bounded `MEMORY.md` and `USER.md` state, an optional recall provider, and background processes that can update future memory or skills. Those stores matter only when a later call retrieves or injects their content.

MemoryAgentBench is useful because it separates accurate retrieval, test-time learning, long-range understanding, and conflict resolution or selective forgetting. Its authors report that no evaluated method masters every tested competency. The benchmark does not score these harnesses, but it prevents a category error: persistence plus retrieval is not automatically correct memory, and memory mutation is not automatically outcome-driven improvement. ([C007](../claims/context-management-across-harnesses.md#c007), [C010](../claims/context-management-across-harnesses.md#c010))

## Failure modes follow the transformations

The context path creates predictable failure classes:

| Transformation | Typical failure | Why it can remain hidden |
| --- | --- | --- |
| Instruction injection | stale, conflicting, or over-budget instructions | the model cannot report an instruction it never received |
| Read/retrieval | wrong window, retrieval miss, stale index | the returned fragment can look locally coherent |
| Tool-result shaping | the decisive error or evidence is truncated | execution succeeded as a protocol operation even though evidence quality fell |
| Branch projection | relevant work exists on another branch | durable storage makes the system appear complete to an operator |
| Summarization | a constraint, identifier, failed attempt, or causal link disappears | fluent summaries can conceal omission and hallucination |
| Memory write | a model-authored interpretation becomes durable | repeated retrieval can amplify the mistake |
| Child transfer | the child lacks context or the parent receives an overcompressed result | both agents can complete their local loops successfully |

The shared pattern is asymmetric observability: context failures often remove the evidence needed for the model to recognize that a failure happened. This makes explicit truncation markers, recoverable raw state, retrieval handles, and measured retention tests more important than polished summaries. ([C008](../claims/context-management-across-harnesses.md#c008))

## What the evidence does and does not support

The case evidence strongly supports the structural distinction between durable state and active context, and it shows several concrete context policies in use. It does not establish which policy produces the best task outcomes. The compaction studies qualify summarization but use different tasks and models. MemoryAgentBench qualifies simplistic memory claims but does not evaluate these implementations. Repository tests mostly establish mechanics and regression invariants rather than long-horizon semantic retention.

The strongest engineering recommendation is therefore to define a **context contract** for each information surface:

1. What is the source of truth?
2. What enters automatically, and what requires retrieval?
3. What selection and transformation occurs?
4. What is the exact budget and priority rule?
5. How is omission disclosed to the model and operator?
6. Can full content be recovered, and by whom?
7. What crosses a branch, restart, compaction, or child boundary?
8. Which task-level test would reveal harmful loss?

This contract turns “context window management” from a token-counting exercise into an information-integrity design problem. It does not prescribe one implementation. ([C011](../claims/context-management-across-harnesses.md#c011))

## Open gaps

This synthesis has four full open implementation cases and two bounded topic inspections; two of the full cases have explicit migration or influence links. It does not establish field prevalence, independent convergence, closed-production behavior, or the best design for browser perception, multimodal state, very large codebases, or multi-day collaborative work. Claude Code remains a reported lead without a stable implementation boundary; Browser Use and other systems may provide important counterexamples. The first learning chapter should teach the observed mechanisms deeply and name those gaps rather than simulate breadth with unverified feature lists. ([C012](../claims/context-management-across-harnesses.md#c012))
