# OpenHands Software Agent SDK v1.35.0: Analysis Scope

**Status:** Completed boundary — final analysis stayed within scope

**Artifact ID:** `field-landscape-scope-openhands-sdk-v1-35-0`

**Repository:** `https://github.com/OpenHands/software-agent-sdk.git`

**Inspected boundary:** tag `v1.35.0`, commit `9028562e2d5eda76de662ec9b7584125760eb83f`

**Local cache:** `/Users/jernotte/dev/reference-materials/research/openhands-sdk-v1.35.0`

**Scope written:** 2026-07-16, before deep control-flow tracing

## Boundary verification

The canonical `origin` is `https://github.com/OpenHands/software-agent-sdk.git`. The lightweight `v1.35.0` tag resolves directly to the approved commit, the working tree is detached at that commit, and the checkout is clean. The release commit is titled `Release v1.35.0 (#4070)` and has author timestamp `2026-07-11T00:14:31+02:00`. Because this is a lightweight tag, the repository provides no separate tagger timestamp; the case will treat the commit timestamp as its local release boundary rather than claim an independently verified publication time.

The repository is a Python workspace containing four version-aligned packages:

- `openhands-sdk`: the public agent, conversation, event/state, model, context, tool-interface, persistence, and observability substrate;
- `openhands-tools`: concrete tool definitions and implementations;
- `openhands-workspace`: local or remote environment backends;
- `openhands-agent-server`: the REST/WebSocket wrapper and remote conversation lifecycle.

Repository-contained documentation consists primarily of the pinned README, package READMEs, examples, source docstrings, tests, and contributor/agent guidance. The README points to a separate live documentation repository. Live docs will not be projected backward onto this version; if opened later, they will receive a dated source boundary and must establish their applicability to v1.35.0.

## Case question

How does the pinned SDK turn an ingress message into a durable, model-visible, tool-executing conversation, and how do its event/state, workspace, recovery, extension, verification, and remote-service layers allocate control?

This question deliberately studies the reusable Software Agent SDK. It is not a study of the legacy `OpenHands/OpenHands` application or of OpenHands Cloud as a product.

## Primary production path: deep trace

The primary path is the public standalone SDK flow shown by the pinned README:

1. a caller constructs `LLM` and `Agent`;
2. `Conversation(...)` selects or creates the local implementation;
3. `LocalConversation.send_message()` records ingress;
4. `LocalConversation.run()` / `arun()` owns repeated stepping, limits, cancellation, status, and termination;
5. `Agent.step()` / `astep()` builds the model view, invokes the configured LLM, converts responses into action events, and coordinates tool execution;
6. action, observation, message, condensation, error, and state events update `ConversationState` and its persistent event log;
7. concrete tool executors act through the supplied workspace and feed observations back into the next model-visible view.

The deep trace will follow these files and their directly invoked collaborators:

- `openhands-sdk/openhands/sdk/conversation/conversation.py`
- `openhands-sdk/openhands/sdk/conversation/impl/local_conversation.py`
- `openhands-sdk/openhands/sdk/conversation/base.py`
- `openhands-sdk/openhands/sdk/conversation/state.py`
- `openhands-sdk/openhands/sdk/conversation/event_store.py`
- `openhands-sdk/openhands/sdk/agent/agent.py`
- `openhands-sdk/openhands/sdk/agent/base.py`
- `openhands-sdk/openhands/sdk/agent/utils.py`
- `openhands-sdk/openhands/sdk/agent/parallel_executor.py`
- `openhands-sdk/openhands/sdk/context/agent_context.py`
- `openhands-sdk/openhands/sdk/context/view/`
- `openhands-sdk/openhands/sdk/context/condenser/`
- `openhands-sdk/openhands/sdk/llm/llm.py` and its router/retry collaborators when invoked by the primary path
- `openhands-sdk/openhands/sdk/tool/` and the event types emitted along the path

Representative tests will be used to establish invariants rather than exhaustively catalog features. Priority test families are conversation run/interrupt/persistence/fork/state-view behavior; event-to-message conversion and event integrity; prompt/context construction and condensation; action batches, parallel execution, tool-call recovery and validation; model fallback; hooks/plugins; security/confirmation controls; and stuck/goal behavior.

## Targeted supporting inspection

These surfaces will be inspected only far enough to explain a boundary reached by the primary path:

- `openhands-agent-server/openhands/agent_server/conversation_service.py` and `event_service.py`: creation, restoration, execution, interruption, leases, and remote event delivery;
- `openhands-sdk/openhands/sdk/conversation/impl/remote_conversation.py`: client-side contrast with local state ownership;
- `openhands-tools`: the default terminal, file-editing, task/delegation, finish, and preset surfaces necessary to explain schema, dispatch, environment effects, or delegation;
- `openhands-workspace`: the workspace protocols and representative local/remote/container boundary used by those tools;
- hooks, plugins, skills, subagents, MCP, critic, security analyzer, goal loop, and observability modules only where the primary path calls or configures them;
- release-adjacent history for concrete correctness, lifecycle, state, action/observation, recovery, or compatibility questions raised by the pinned code.

The agent server is not a second full case. It receives targeted treatment because it wraps the same SDK conversation with a materially different ingress, persistence, concurrency, and cancellation boundary.

## Survey-only surfaces

The following receive structure-level or representative inspection, not complete tracing:

- most REST routers and service endpoints outside conversation execution;
- the full catalog of tools, examples, plugins, skills, MCP integrations, model providers, and workspace backends;
- stress, integration, API-compatibility, and packaging tests except representative cases that establish a relevant invariant or known failure surface;
- browser/VNC, GitHub workflow, cloud-workspace, secret-store, deployment, UI, image-building, and distribution machinery;
- settings/export/migration details unless they materially affect the selected model, instruction, tool, or recovery path.

Survey findings cannot support claims about untraced control flow. They may identify an explicit absence, extension surface, or later question only when the inspected boundary is stated.

## Explicit exclusions

- The legacy `OpenHands/OpenHands` application architecture is excluded. References to it may establish lineage or an explicit non-dependency only; its code cannot be used to describe this SDK.
- OpenHands CLI, OpenHands Cloud, deployment orchestration, hosted evaluation services, and private production behavior are excluded unless implemented directly in the pinned repository path being traced.
- Moving default-branch code and current live docs are excluded from implementation claims about v1.35.0.
- Browser Use is not analyzed as a separate harness here even though a browser tool exists in the monorepo.
- No model-behavior experiment, benchmark reproduction, exhaustive provider comparison, security audit, or performance evaluation will be performed.
- No other selected case or cross-harness synthesis begins. Comparison is limited to testing the already recorded Pi taxonomy-friction questions and narrowly relevant external outcome evidence.

## Planned history and test slices

History inspection will begin from symbols and tests encountered on the primary path, using `git log`, `git blame`, and release-adjacent commits narrowly. Candidate failure surfaces visible from filenames include event loss, conversation restore and lease behavior, interrupt/cancellation, state-view caching, action/observation matching, malformed tool calls, parallel execution, condensation, stuck detection, confirmation/security policy, and agent-server event-loop safety. A filename is a lead, not evidence; only inspected code, tests, or commits may support the case.

## Cost and stopping boundary

OpenHands is intentionally the platform-scale contrast to Pi. Depth is controlled by one end-to-end local conversation trace plus targeted inspection of the remote wrapper and environment services. The case stops when it can explain, with exact evidence:

- startup, ingress, run/resume/cancel/finish semantics;
- model and per-call context/tool construction;
- action validation, authorization, dispatch, and observation formation;
- event/state persistence, replay, branching, condensation, and recovery;
- delegation and extension points that actually intersect the traced path;
- internal verification/control boundaries versus external evaluation;
- observability and any bounded across-run adaptation evidence;
- Pi's four existing taxonomy-friction questions and any genuinely new friction.

It will not expand merely to cover every package, endpoint, tool, provider, example, or test. A material expansion into the legacy application, hosted platform, or another repository requires a scope revision and maintainer approval.

## Initial limitations

- The tag proves repository identity and version, but its lightweight form gives no independent tag publication timestamp.
- The README's claims about products built on the SDK and benchmark performance are vendor statements until separately admitted and verified; they are not implementation facts or effectiveness evidence.
- Repository-contained docs may be less complete than the live docs, while the live docs may have drifted beyond this release.
- The monorepo contains multiple valid execution modes. The standalone local path is primary; the remote agent-server path is a bounded contrast, not a complete second traversal.
- No conclusion about architecture quality or task outcomes follows from package modularity, test volume, or implementation prevalence.
