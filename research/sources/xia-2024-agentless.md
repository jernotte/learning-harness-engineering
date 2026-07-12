# Source Record: Agentless: Demystifying LLM-based Software Engineering Agents

**Source ID:** FL-S015
**Maturity:** Captured source
**Source type:** Research paper / implementation
**Author or organization:** Chunqiu Steven Xia, Yinlin Deng, Soren Dunn, and Lingming Zhang
**Publication date:** 2024-07-01
**URL:** https://arxiv.org/abs/2407.01489
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained abstract/evaluation excerpts and the legacy record
**Surfaces inspected:** abstract, paper
**Provenance events:** `fl-open-s015`, `fl-inspect-s015`, `fl-disposition-s015`
**Related claim IDs:** C006 and C015 in `field-landscape-synthesis-field-landscape`
**Canonical mapping locations:** C006 — abstract and three-stage architecture; C015 — three-stage architecture
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl`

## Why this source matters

Agentless is useful negative evidence against treating autonomy or architectural complexity as inherently beneficial. It replaces a free-running tool loop with a simple staged localization, repair, and validation workflow.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | A three-stage, largely deterministic workflow achieved 32% on the then-current SWE-bench Lite and lower reported cost than compared open-source agents. | Abstract and evaluation. | Historical result tied to 2024 models, benchmark version, and compared systems; not a current leaderboard claim. |
| inference | Control allocation between code and model is a more useful architectural axis than a binary agent/non-agent label. | The system retains multiple model calls and validation while removing model-directed action selection. | Our interpretation, to be tested across domains. |

## Evidence assessment

Primary paper with implementation and benchmark results, strong for its stated historical comparison. Applicability is narrow and freshness risk is high because both models and SWE-bench systems changed rapidly. Its conceptual counterexample remains valuable even if the ranking is obsolete.

## Relationships and contradictions

Supports Anthropic and Google guidance that deterministic workflows can be preferable for decomposable tasks, while challenging narratives that more autonomous loops necessarily perform better.

## Leads and open questions

Re-evaluate the architecture under current models and harder/less decomposable tasks. Compare cost, variance, debuggability, and failure localization rather than pass rate alone.
