# Source Record: Do More Agents Help? Controlled and Protocol-Aligned Evaluation of LLM Agent Workflows

**Maturity:** Captured source
**Source type:** Research preprint and evaluation framework
**Author or organization:** Yuhang Fu and collaborators
**Publication date:** 2026-06-04
**URL:** https://arxiv.org/abs/2606.05670
**Related cycle or question:** Cycle 1 field landscape

## Why this source matters

BenchAgent explicitly tries to normalize the substrate used by single- and multi-agent workflows, addressing a major confound in claims that adding agents improves quality.

## Claims and evidence

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | Under the paper's substrate-internal protocol, only one of six multi-agent systems nominally exceeds the matched single-agent anchor, within its one-run uncertainty guidance; the others cost more and trail by 2.56–11.29 points. | Abstract and evaluation. | Preprint v1, one primary model, and benchmark aggregation choices require audit. |
| source-reported claim | A separately evaluated Claude-Code-style runtime with task-specific subagents, artifacts, and verification performs strongly on a GAIA snapshot. | Protocol-aligned external study. | Not a causal ablation of subagents; external/runtime comparison differs from the controlled internal study. |

## Evidence assessment

Extremely recent and directly targeted at an important methodological problem. Strong lead for a deep dive, but not yet a basis for a universal anti-multi-agent conclusion. The split between controlled internal workflows and an external runtime must remain explicit.

## Relationships and contradictions

Challenges role-count narratives and suggests studying delegation contracts, diversity, shared state, synthesis, verification, and total inference budget separately.

## Leads and open questions

Audit protocol parity, implementation fidelity for each workflow, uncertainty treatment, compute accounting, and the causal contribution of artifacts and verifier stages in the external runtime.
