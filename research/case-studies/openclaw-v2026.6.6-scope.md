# OpenClaw v2026.6.6 Case Scope

**Status:** Scope established before deep analysis
**Case boundary:** `openclaw/openclaw`, annotated tag `v2026.6.6`, dereferenced commit `8c802aa683510c7f7503597b54c3021733245e59`
**Checkout:** `/Users/jernotte/dev/reference-materials/research/openclaw-v2026.6.6`
**Scope date:** 2026-07-16
**Artifact ID:** `field-landscape-scope-openclaw-v2026-6-6`

## Decision this boundary serves

This case asks how one pinned OpenClaw release turns an inbound channel message into a durable agent run and a delivered response. The analysis should expose the architectural choices behind a long-lived, multi-channel harness without becoming an inventory of every integration in a repository with more than twenty-six thousand tracked files.

The scope deliberately follows a concrete product path rather than treating all advertised capability as ordinary behavior. Optional channels, plugins, harnesses, providers, memory engines, automation surfaces, and deployment modes will count only when code on the representative path invokes them by default or when targeted inspection establishes a consequential alternative.

## Verified implementation boundary

The external checkout has canonical remote `https://github.com/openclaw/openclaw.git`. Both `HEAD` and `v2026.6.6^{}` resolve to `8c802aa683510c7f7503597b54c3021733245e59`; `v2026.6.6` is an annotated Git tag. The checkout is detached and clean. The pinned commit is dated 2026-06-12 and is titled `fix(codex): stabilize app-server release tests`.

Repository-contained documentation is the default documentation boundary. Moving documentation, hosted services, current default-branch behavior, and third-party integration behavior will not be projected backward onto this release. If a live source is needed for a question raised by the implementation, it will be separately dated, admitted, and limited.

The repository is a large pnpm workspace. The relevant first-party surfaces include core TypeScript under `src/`, bundled plugins under `extensions/`, shared packages under `packages/`, repository-contained documentation under `docs/`, tests adjacent to code and under `test/`, and separate applications under `apps/` and `ui/`. Generated, vendored, independently versioned, and hosted components will not be treated as one implementation merely because they share the monorepo.

## Representative path selected for deep tracing

The primary trace is one ordinary Telegram direct message using the bundled Telegram plugin, the default agent routing/session policy, and OpenClaw's ordinary embedded-agent path:

> Telegram update → bundled Telegram admission and message normalization → agent/session route and session-key materialization → core buffered reply dispatch → per-session operation and queue admission → active context, skills, tools, and model policy construction → embedded agent run → tool execution and model-facing results → transcript/session persistence → streamed and final reply delivery through Telegram.

This path is selected because it crosses the plugin/core boundary and exercises the distinctive multi-channel ingress, routing, persistent-session, agent-loop, and outbound-delivery responsibilities in one real flow. A direct message avoids group mentions, forum-topic bindings, broadcast policy, and native-command special cases that would obscure the ordinary harness path. Telegram is representative, not canonical for every channel; channel-specific behavior will be labeled as such.

The default embedded-agent path is the selected cognitive runtime. ACP bindings, Codex app-server turns, alternate CLI harnesses, synthetic replies, and direct Gateway `agent` RPC calls receive targeted or survey treatment only when they clarify ownership or a meaningful alternative. They will not be blended into the representative path.

## Deep analysis surfaces

Deep tracing will cover the production functions and their closest tests for:

- Telegram direct-message admission, normalization, authorization, route/session selection, buffered dispatch, and delivery, centered on `extensions/telegram/src/bot-message-dispatch.ts` and its runtime dependencies;
- the core auto-reply transition through `src/auto-reply/reply/dispatch-from-config.ts`, provider dispatch, run admission, queue behavior, session metadata, and `src/auto-reply/reply/agent-runner-execution.ts`;
- the embedded runtime entry at `src/agents/embedded-agent-runner/run.ts`, its attempt/session construction, prompt/context preparation, event subscription, tool flow, compaction/retry handling, persistence, cancellation, and terminal outcome;
- the durable session/transcript structures actually reached by that path;
- the outbound handoff from core reply payloads back through the Telegram dispatcher.

The deep trace stops at external model-provider and Telegram APIs. Their responses and contracts may be described only through pinned adapters/types or separately admitted primary material; their private implementation is outside the case.

## Targeted inspection surfaces

Targeted inspection will answer cross-cutting case questions without attempting full subsystem coverage:

- Gateway startup, plugin activation, channel supervision, shutdown, health, and background service ownership;
- agent and session routing, multi-agent bindings, session-key scoping, reset/resume behavior, queue modes, and concurrency locks;
- system-prompt construction, bootstrap files, skills, tool visibility, model/provider selection, fallback, and compaction policy;
- tool schema construction, policy filtering, approval/elevation, sandbox versus host execution, result shaping, and transcript persistence;
- plugin and internal hook interception points across ingress, prompt construction, model resolution, tools, persistence, and delivery;
- built-in memory/search and the distinction among transcript state, workspace memory files, indexed retrieval, and model-visible context;
- subagents and session tools as optional coordination mechanisms;
- cron and heartbeat as alternate ingress/lifecycle paths;
- logging, diagnostics, telemetry, usage accounting, tests, and any repository-contained evaluation claims;
- targeted version history for concrete lifecycle, routing, context, persistence, tool-integrity, and recovery failures.

## Survey-only surfaces

The following receive structural survey treatment unless the deep trace proves they alter the selected path:

- non-Telegram channel plugins and channel-specific presentation, pairing, thread, callback, or rate-limit behavior;
- WebChat, CLI, desktop/mobile apps, nodes, canvas, Talk, and direct Gateway RPC entry points;
- alternate providers and model-family compatibility patches;
- ACP, Codex app-server, CLI-backend, and other alternate agent harnesses;
- optional memory engines, external MCP servers, community plugins, skills, and migration plugins;
- browser, media generation/understanding, voice, document, and provider-specific tools;
- hosted deployment products, cloud services, installers, and operational infrastructure outside the pinned repository;
- administrative UI and product surfaces that do not change the selected harness flow.

Survey evidence can establish that a mechanism or extension point exists. It cannot establish its ordinary execution, effectiveness, or equivalence to the selected path.

## Explicit exclusions

This case will not:

- enumerate or deeply analyze every bundled channel, provider, plugin, tool, application, or package;
- analyze Hermes, Browser Use, Claude Code, LangGraph, or any other harness;
- treat migration compatibility with another product as independent convergence evidence;
- infer hosted behavior, private evaluations, usage, team size, or effectiveness from repository popularity;
- run behavioral model experiments or comparative benchmarks;
- perform a security audit independent of how authorization, containment, and trust shape the loop;
- generalize a Telegram-specific mechanism to all channels without sibling evidence;
- silently expand into the Codex app-server or ACP harness as a second case.

## Tests and history likely to clarify invariants

Representative tests will be selected around Telegram dispatch/session metadata, inbound deduplication, reply dispatch, session delivery, queue/admission behavior, embedded-runner context and tools, transcript locking, compaction, cancellation, timeout, tool policy, sandboxing, subagent delivery, cron/heartbeat, and Gateway lifecycle. Tests establish encoded behavior at the pin, not production frequency or outcome quality.

History inspection will begin from symbols and tests on the selected path and follow only commits that explain a concrete invariant or failure surface. The case will record fixes as historical evidence of a failure class, never as a rate estimate.

## Expected cost and stopping boundary

OpenClaw is materially larger than Pi and OpenHands. The principal cost is following a path that crosses a bundled plugin, core reply orchestration, the embedded runtime, persistent sessions, and outbound delivery while resisting the monorepo's many optional alternatives.

Deep tracing stops when the selected path can be explained end to end with exact implementation and test locations; the targeted questions have enough evidence to classify R1–R11 and TF-001 through TF-006; consequential defaults are separated from optional capability; and further inspection mostly adds channel/provider/plugin variants rather than changing the architecture. Unresolved external or hosted behavior will remain unknowable rather than expanding the boundary.

Any material expansion beyond this scope requires a documented scope revision and maintainer approval.
