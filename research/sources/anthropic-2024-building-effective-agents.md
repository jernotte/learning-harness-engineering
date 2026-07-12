# Source Record: Building Effective Agents

**Source ID:** FL-S001
**Maturity:** Captured source
**Source type:** Official engineering article
**Author or organization:** Anthropic
**Publication date:** 2024-12-19
**URL:** https://www.anthropic.com/engineering/building-effective-agents
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained transcript output and the legacy record
**Surfaces inspected:** documentation
**Provenance events:** `fl-open-s001`, `fl-inspect-s001`, `fl-disposition-s001`
**Related claim IDs:** C002, C006, C010, and C015 in `field-landscape-synthesis-field-landscape`
**Canonical mapping locations:** C002, C006, and C015 — “What are agents?” / “Building blocks, workflows, and agents”; C010 — orchestrator-workers and parallelization patterns
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl`

## Why this source matters

This article supplies a production-informed distinction between deterministic workflows and model-directed agents, plus a compact vocabulary of common control-flow patterns.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

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
