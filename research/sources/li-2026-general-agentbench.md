# Source Record: Benchmark Test-Time Scaling of General LLM Agents

**Maturity:** Captured source
**Source type:** Research preprint and benchmark implementation
**Author or organization:** Xiaochuan Li and collaborators
**Publication date:** 2026-02-22
**URL:** https://arxiv.org/abs/2602.18998
**Code:** https://github.com/cxcscmu/General-AgentBench
**Related cycle or question:** Cycle 1 field landscape

## Why this source matters

General AgentBench attempts to hold a shared general-agent substrate across search, coding, reasoning, and tool-use domains, making it unusually relevant to claims about harness generality and test-time scaling.

## Claims and evidence

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | Ten evaluated agents degrade materially when moved from domain-specific evaluations into the unified general-agent setting. | Abstract and paper evaluation. | Requires inspection of normalization and model/harness controls before causal attribution. |
| source-reported claim | Sequential scaling encounters a context ceiling; parallel sampling improves candidate coverage without solving correct-candidate selection, called a verification gap. | Abstract and scaling experiments. | Preprint v1; mechanisms and exact effect sizes require deeper review. |

## Evidence assessment

Very recent, directly relevant, and accompanied by code. It is a preprint and bundles several datasets behind a shared interface, so benchmark mapping and configuration deserve audit. Strong deep-dive candidate; provisional evidence for separating context lifecycle and verification from raw inference budget.

## Relationships and contradictions

Complicates the intuition that more turns or samples automatically improve an agent. It complements long-context failure work and supports treating selection/verification as a separate responsibility.

## Leads and open questions

Inspect tool specs, prompts, task adapters, budgets, stop policies, model versions, and whether domain-specific baselines receive genuinely comparable information.
