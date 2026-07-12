# Source Record: Benchmark Test-Time Scaling of General LLM Agents

**Source ID:** FL-S011
**Maturity:** Captured source
**Source type:** Research preprint and benchmark implementation
**Author or organization:** Xiaochuan Li and collaborators
**Publication date:** 2026-02-22
**URL:** https://arxiv.org/abs/2602.18998
**Code:** https://github.com/cxcscmu/General-AgentBench
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained abstract/experiment excerpts and the legacy record
**Surfaces inspected:** abstract, paper
**Provenance events:** `fl-open-s011`, `fl-inspect-s011`, `fl-disposition-s011`
**Related claim IDs:** C019 in `field-landscape-synthesis-field-landscape`
**Canonical mapping locations:** C019 — abstract and scaling experiments; the specialized-versus-general comparison is retained only inside the bounded C019 wording
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl`

## Why this source matters

General AgentBench attempts to hold a shared general-agent substrate across search, coding, reasoning, and tool-use domains, making it unusually relevant to claims about harness generality and test-time scaling.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

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
