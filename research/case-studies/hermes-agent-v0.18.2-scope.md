# Hermes Agent v0.18.2 Case Scope

**Status:** Scope established before deep analysis
**Case boundary:** `NousResearch/hermes-agent`, annotated tag `v2026.7.7.2`, tag object `b7751df34688835a108e0d630f3495fc11f3df79`, dereferenced commit `9de9c25f620ff7f1ce0fd5457d596052d5159596`, package version `0.18.2`
**Checkout:** `/Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2`
**Scope date:** 2026-07-18
**Artifact ID:** `field-landscape-scope-hermes-agent-v0-18-2`

## Decision this boundary serves

This case asks how pinned Hermes Agent turns one ordinary CLI request into model calls, environment actions, model-visible feedback, durable session state, and a terminal response. The CLI path is the deep trace because it reaches the shared `AIAgent` runtime without first adding the messaging, editor, hosted API, or scheduler concerns of the other entry points.

Hermes is a broad product repository. The case must explain one concrete harness path and the consequential mechanisms around it, not inventory every provider, tool, platform adapter, plugin, skill, dashboard surface, or optional service. Gateway, cron, ACP, batch, and library entry points receive targeted comparison only where they reveal a different lifecycle, ownership boundary, or default.

The case remains a standalone Hermes analysis. OpenClaw appears only where pinned evidence can establish migration translation, named borrowing or porting, deliberate non-mapping, meaningful divergence, or an unresolved similarity. A recurrent mechanism is not independent corroboration merely because both repositories contain it.

## Verified implementation boundary

The retained checkout is clean and has canonical remote `https://github.com/NousResearch/hermes-agent.git`. `HEAD` and `v2026.7.7.2^{}` resolve to `9de9c25f620ff7f1ce0fd5457d596052d5159596`; the annotated tag object is `b7751df34688835a108e0d630f3495fc11f3df79`. The pinned commit is dated 2026-07-07 and titled `chore: release v0.18.2 (2026.7.7.2) (#60651)`. Package metadata in `pyproject.toml` and `hermes_cli/__init__.py` declares `0.18.2`.

Repository-contained code, documentation, tests, and history reachable from the selected commit are the primary evidence boundary. Moving default-branch code and live documentation will not be projected backward. A live source may be used only when a question raised by the pinned implementation requires it; it must then be dated, admitted separately, and limited to what it establishes.

The repository contains top-level CLI and runtime modules, a decomposed `agent/` runtime, concrete `tools/`, provider and plugin packages, a long-running `gateway/`, `cron/`, ACP adapters, bundled and optional skills, documentation, and a large test tree. The package is one release family, but the presence of a module does not establish ordinary or enabled-by-default behavior.

## Representative production path selected for deep tracing

The primary trace is one ordinary terminal chat turn through the classic CLI interface:

> `hermes chat` / default chat dispatch → `hermes_cli.main.cmd_chat()` → `cli.main()` → `HermesCLI` session setup and input handling → `AIAgent.run_conversation()` → `agent.conversation_loop.run_conversation()` → system-prompt, provider, history, memory, skill, and tool materialization → provider call → zero or more tool-call execution/feedback iterations → turn finalization and session persistence → CLI streaming/final display.

This path is selected because the pinned command dispatch explicitly enters `cli.main()`, which constructs `HermesCLI`; the CLI then invokes the shared `AIAgent` runtime. It exercises the product's default interactive harness while keeping platform delivery, editor protocols, and scheduled execution outside the deep path.

The trace includes both an existing-session turn and the relevant new/resumed-session setup because persistence and context construction depend on that boundary. It stops at external model-provider APIs and tool-controlled external systems. Their private behavior is outside the case.

## Deep analysis surfaces

Deep tracing will cover the selected path and its closest tests in:

- `hermes_cli/main.py` for chat dispatch, resume policy, configuration gates, and CLI handoff;
- `cli.py` for `HermesCLI`, session initialization, input/turn lifecycle, callbacks, cancellation, display, and persistence boundaries;
- `run_agent.py` as the public `AIAgent` facade;
- `agent/agent_init.py`, `agent/conversation_loop.py`, `agent/turn_context.py`, `agent/turn_finalizer.py`, `agent/turn_retry_state.py`, and invoked retry/error helpers for the principal loop;
- `agent/system_prompt.py`, `agent/prompt_builder.py`, skill/context helpers, and runtime/provider resolution for each call's effective policy and visible context;
- `model_tools.py`, `toolsets.py`, `tools/registry.py`, `agent/tool_executor.py`, approval/guardrail code, representative terminal/file/web tools, and the selected execution backend for schema, authorization, dispatch, containment, result shaping, and feedback;
- `hermes_state.py`, the active context engine/compressor, memory manager/provider boundary, trajectory helpers, and session-related code reached by the CLI path.

## Targeted supporting inspection

Targeted inspection will answer consequential questions without becoming a second full trace:

- Gateway ingress, authorization, session routing, delivery, hooks, and process lifecycle through `gateway/run.py`, `gateway/session.py`, and representative shared helpers;
- cron as scheduled ingress, ACP as editor ingress, batch/trajectory generation, and the library/programmatic API;
- provider routing, credential pools, fallback, and alternate API adapters only far enough to explain shared policy and failure behavior;
- context compression, prompt caching, memory-provider and context-engine plugins, and the difference between retained state and model-visible projection;
- delegation, asynchronous/background tools, checkpoints, process registry, skills, plugins, shell hooks, and policy-injection surfaces;
- verification hooks, stopping rules, regression tests, trajectory capture, observability, and external evaluation support;
- `learn_prompt`, learning graph/mutations, curator, memory evolution, and skill creation or improvement to determine whether Hermes adapts, what signal drives it, and whether any measured outcome is optimized;
- the OpenClaw migrator and only those named history commits or mechanism comparisons needed to classify translation, selective influence, divergence, or uncertainty;
- targeted history for concrete lifecycle, context, tool-integrity, persistence, recovery, verification, and learning failure surfaces.

## Survey-only surfaces

The following receive structural or representative inspection unless the primary path proves they are load-bearing:

- individual gateway platforms and their channel-specific presentation, pairing, threading, rate-limit, and media behavior;
- the TUI, dashboard, desktop/web UI, hosted relay, API-server product behavior, and installer/service-management code;
- the full provider, tool, MCP, browser, computer-use, media, voice, and optional-skill catalogs;
- every terminal or browser backend beyond the representative boundary needed to explain authority and containment;
- ACP protocol details, batch datasets, evaluation campaigns, datagen configurations, and deployment infrastructure;
- third-party plugins, external MCP servers, private services, and user-authored skills.

Survey evidence may establish that a capability or extension point exists. It cannot establish ordinary execution, deployment prevalence, effectiveness, or equivalence to the CLI path.

## Explicit exclusions

This case will not:

- analyze Browser Use, Claude Code, LangGraph, or another harness;
- turn the artifact into a whole-repository OpenClaw comparison or imply direct fork descent;
- treat migration mappings as proof of equivalent runtime architecture;
- call similar mechanisms independent convergence without mechanism-specific independence evidence;
- infer users, team size, quality, or effectiveness from repository attention or activity;
- execute pinned upstream tests, model-behavior experiments, or comparative benchmarks;
- audit security except where authorization, containment, trust, or recovery changes the harness loop;
- describe live services or moving documentation as behavior of the pinned release;
- promote an advertised “self-improving” capability without identifying the changed artifact, feedback signal, acceptance rule, persistence path, and outcome evidence.

## Tests and history likely to clarify invariants

Pinned tests will be inspected, not executed. Priority families include conversation/turn finalization, provider fallback, prompt and system-prompt construction, context compression and restoration, session/memory writes, tool dispatch and output classification, approvals and containment, interruption and retry, delegation, learning graph/mutations, curator behavior, gateway session/lifecycle, and trajectory capture.

History inspection begins from symbols and tests encountered on the selected path. A commit may establish that maintainers addressed a concrete failure surface or changed an invariant; it cannot establish failure frequency or outcome benefit. OpenClaw-related history will be limited to directly named influence, migration, or port evidence plus necessary counterexamples.

## Expected cost and stopping boundary

Hermes is larger and more rapidly decomposed than the previous cases. The main cost is following an older public facade (`run_agent.py`) into the current `agent/` modules while separating the interactive CLI's defaults from many optional entry points, providers, plugins, and learning features.

Deep tracing stops when the selected CLI turn can be explained end to end with exact code, test, documentation, and targeted history locations; default and optional behavior are separated; R1–R11 and TF-001–TF-007 can be classified; the claimed learning mechanisms can be distinguished as adaptation, operator-directed mutation, or outcome-driven optimization; and further inspection mostly adds provider, platform, tool, or UI variants.

Unresolved hosted behavior, private usage, external-provider internals, and outcome effectiveness remain unknowable rather than expanding the case. Any material expansion beyond this scope requires a written scope revision and maintainer approval.
