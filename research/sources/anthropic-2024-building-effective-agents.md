# Source Record: Building Effective Agents

**Maturity:** Captured source
**Source type:** Official engineering article
**Author or organization:** Anthropic
**Publication date:** 2024-12-19
**URL:** https://www.anthropic.com/engineering/building-effective-agents
**Related cycle or question:** Cycle 1 field landscape

## Why this source matters

This article supplies a production-informed distinction between deterministic workflows and model-directed agents, plus a compact vocabulary of common control-flow patterns.

## Claims and evidence

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | Workflows use predefined code paths; agents let the LLM direct its process and tool use. | “What are agents?” | A useful spectrum, though hybrid systems blur the binary. |
| source-reported claim | Common patterns include chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer, and open-ended agent loops. | “Building blocks, workflows, and agents.” | Practitioner synthesis; not every pattern has comparative evaluation here. |
| source-reported claim | Environmental feedback, stopping conditions, and carefully engineered tool interfaces are central to an agent loop. | “Agents” and “Prompt engineering your tools.” | General guidance based on Anthropic experience. |
| source-reported claim | Complexity should be added only when measurement shows value. | Summary and repeated guidance. | Directionally important but not quantified in this source. |

## Evidence assessment

Direct practitioner evidence from a model and agent vendor, but presented as guidance rather than a controlled study. Strong for vocabulary, implementation considerations, and candidate axes; moderate for claims of effectiveness. Its simplicity preference should be tested against newer long-horizon systems.

## Relationships and contradictions

The agent/workflow spectrum aligns with Agentless and recent Google ADK guidance that deterministic control can outperform or stabilize model-directed routing under some conditions.

## Leads and open questions

Find comparative results on deterministic, hybrid, and model-directed orchestration. Trace whether current production harnesses preserve the same pattern vocabulary.
