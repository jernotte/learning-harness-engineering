# Coverage Map

This is the concise human view of what the project has examined, what remains provisional, and where important gaps remain. The detailed reasoning lives in `research/syntheses/field-landscape.md`; the audit trail lives in `research/cycles/field-landscape.md`.

## Current landscape coverage

Cycle 1 used three complementary, separately executed passes: academic/empirical research, an implementation recon report describing 22 systems, and production/cross-cutting documentation with selected code checks. The passes shared the same project framing and are not independent corroboration. Because search and source events were not instrumented, Cycle 1 coverage is `reconstructed` and its exact query, result, and screening breadth is incomplete.

The maintainer has directionally accepted a three-layer model: source-native vocabulary for discovery/navigation, the responsibilities below as a multi-label analytical lens, and a later human-facing narrative. Final Checkpoint 1 promotion awaits provenance and claim/source remediation.

## Source-native topic index

This is the human and search entry point. Query families are provisional because Cycle 1 search events are reconstructed; the provenance audit will replace impressions with observed coverage.

| Familiar topic | Example query/alias families | Related analytical responsibilities | Current coverage state |
| --- | --- | --- | --- |
| Agent loop and orchestration | agent loop, ReAct, run loop, workflow, graph, routing | 1, 4, 9 | Several legacy records await formal admission; implementation breadth reconstructed |
| Tools and agent-computer interfaces | tool use, function calling, ACI, commands, environment, sandbox | 3, 5, 6, 9 | SWE-agent and MCP have legacy records awaiting formal admission; current production interfaces need pinned cases |
| Context engineering | prompt assembly, compaction, condensation, retrieval, progressive disclosure | 2, 3, 6 | A Claude context legacy record awaits formal admission; Pi/OpenHands remain leads |
| Memory and persistent state | session, checkpoint, event log, long-term memory, artifacts, forgetting | 3, 7, 11 | LangGraph, ADK, and MemoryAgentBench have legacy records awaiting formal admission; procedural memory thin |
| Planning and workflows | plan-and-execute, replanning, tree search, deterministic workflow | 4, 8, 9 | Agentless and practitioner-guidance legacy records await formal admission; ReAct/ReWOO/LATS remain leads |
| Skills and procedural knowledge | skills, recipes, prompt modules, learned procedures | 2, 3, 7, 11 | Mostly framing and product documentation; empirical depth pending |
| Subagents and multi-agent systems | handoff, agent-as-tool, worker, delegation, debate, voting | 3, 4, 8, 9 | Claude/OpenAI and BenchAgent legacy records await formal admission; implementation comparisons pending |
| Verification and evaluation | tests, critic, judge, grader, trajectory, benchmark, self-correction | 6, 9, 10 | Several empirical and production legacy records await formal admission; judge/evaluator gaps remain |
| Runtime, sessions, and lifecycle | resume, interrupt, cancel, scheduler, gateway, background agent | 1, 5, 7, 9 | ADK/LangGraph legacy records await formal admission; OpenClaw/Hermes/Letta remain leads |
| Model routing and instruction policy | model selection, fallback, effort, role model, system prompt | 2, 3 | Claude/ADK documentation records await formal admission; controlled comparisons scarce |
| Self-improvement | context optimization, workflow search, self-editing harness, regression gate | 7, 10, 11 | A Weng legacy record awaits formal admission as framing; primary research bundle remains leads |

## Analytical responsibility view

| Provisional responsibility | Legacy recorded evidence awaiting formal D-003 admission | Unadmitted leads and gap before durable conclusions |
| --- | --- | --- |
| Run lifecycle and ingress | Google ADK runtime/session record | OpenClaw, Hermes, and Letta lifecycle leads; comparative research thin |
| Model and instruction policy | Claude subagent and Google ADK records | Browser Use/provider normalization leads; few controlled routing comparisons |
| Active-context and capability construction | Claude context/memory and MCP records | Pi/OpenHands leads; compaction loss and admission effects need analysis |
| Control flow and execution semantics | Anthropic patterns, Google ADK, and Agentless records | ReAct/ReWOO/LATS leads; matched model/code/hybrid comparisons needed |
| Action and environment mediation | SWE-agent and MCP records | smolagents, browser/desktop, and current coding-interface leads need pinning |
| Observation and feedback construction | SWE-agent and Anthropic agent-loop/tool guidance | Browser/GUI grounding and event-integrity leads need verification |
| Durable state and persistence | LangGraph, Google ADK, and MemoryAgentBench records | OpenHands event/view lead; procedural memory and provenance remain thin |
| Decomposition, coordination, and aggregation | Anthropic patterns, Claude/OpenAI orchestration docs, and BenchAgent | Current implementation comparisons and compute-control evidence needed |
| Verification, recovery, and control boundaries | Kamoi self-correction survey and production evaluation guidance | Programmatic-verifier and rollback bundles remain leads |
| Observability and external evaluation | Anthropic evals, OpenAI tracing, General AgentBench, and BenchAgent | Long-horizon trials, evaluator bias, and normalized ablations remain thin |
| Adaptation and optimization across runs | Weng synthesis as framing | DSPy, TextGrad, ADAS, SICA, Self-Harness, and regression evidence remain leads |

## Reported implementation-family coverage

The table below comes from the implementation recon report. It is a candidate coverage map, not a complete verified inventory. Several examples have not completed the durable source lifecycle.

| Family | Examples encountered | Current status |
| --- | --- | --- |
| Model-driven coding loops | Codex CLI, Pi, Gemini CLI, OpenCode, Goose, Aider, SWE-agent | Reported by reconstructed recon; no batch selected |
| Event-sourced workspace agents | OpenHands Software Agent SDK | Reported lead; not yet admitted as a pinned case |
| Explicit state graphs and durable workflows | LangGraph, Microsoft Agent Framework, OpenAI Agents SDK, PydanticAI | Family reported; some legacy documentation records await formal admission |
| Conversational/message-passing multi-agent systems | AutoGen and successors | Reported lineage lead; not yet verified for selection |
| Code-as-action agents | smolagents | Reported lead; not yet admitted |
| Browser and computer-use agents | Browser Use, Agent S | Reported leads; one may later represent perception/grounding |
| Research pipelines | STORM, GPT Researcher, DeerFlow | Reported leads; version lineage not yet admitted |
| Long-lived personal agents | OpenClaw, Letta Code, Hermes Agent | Reported leads; code and lifecycle claims not yet admitted |

## Empirical question coverage

The recon deliberately captured evidence on interface effects, context/memory limits, planning validity, deterministic versus adaptive flows, multi-agent scaling, self-correction, benchmark reliability, and automated harness optimization. It did not attempt a full literature review of any one area.

The most important contradictions to carry forward are:

- interleaved action/observation versus plan-execute separation;
- autonomous/model-directed versus deterministic/hybrid control;
- parallel or multi-agent scaling versus matched single-agent cost and quality;
- intrinsic reflection versus independent/executable feedback;
- more context, turns, or samples versus context and verification ceilings;
- general substrates versus specialized interfaces;
- flexible language planning versus formal validity;
- end-state success versus trajectory quality;
- leaderboard progress versus benchmark integrity and version drift.

## Relationship with `outline.md`

The seed outline successfully anticipated most subject matter and retains value as source-native, human-readable navigation. The responsibility lens adds distinctions: tools span capability admission, action representation, environment execution, and observation construction; memory spans active context, runtime state, artifacts, cross-session knowledge, and procedural adaptation; planning is a control strategy; skills are a packaging and admission strategy; subagents require analysis of decomposition, state isolation, control transfer, budgets, and aggregation; and evaluation remains distinct from verification inside the run.

Two material areas proposed by recon are run lifecycle/ingress and model mediation/routing. Source-native corpus organization and later teaching may recombine responsibilities, while case analysis preserves the architectural distinctions through multi-labeling.

## Known gaps at Checkpoint 1

- Candidate repositories have not been cloned and pinned; moving-branch observations are provisional.
- The responsibility map has not yet been tested through a shared case-study schema.
- Closed production systems provide controls and declared behavior but little causal visibility.
- Few studies isolate a single harness mechanism while keeping model, tools, context, budget, and evaluator fixed.
- Cost, latency, variance, and long-horizon reliability are inconsistently reported.
- Lifecycle, observation construction, failure recovery, and model mediation are visible in code but thinly studied as independent topics.
- The field lacks stable vocabulary for runtime, workflow engine, environment service, gateway, session, memory, and agent.
- Historical and current architectures are easily mixed in fast-moving or rewritten projects.
- Exact search queries and result sets from the two Cycle 1 subagents are not recoverable.
- Browser Use, smolagents, Pi, OpenHands, OpenClaw, Hermes, Letta, and other details appeared as recon leads without completing the source-record lifecycle.
- Sixteen source records exist, but claim-evidence coverage has not yet been measured; source count is not evidence coverage.
- No generated source audit currently shows host/type/organization balance, GitHub inspection depth, or concentration warnings.

## Next coverage decision

Build and validate provenance capture, reconstruct this cycle, complete the source and claim audits, and re-present Checkpoint 1. Only then may Checkpoint 2 propose a pinned, bounded batch with a responsibility-coverage matrix and a deliberate Claude Code closed-production reference case.
