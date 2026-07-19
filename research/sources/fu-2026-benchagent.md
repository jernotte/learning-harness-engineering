# Source Record: Do More Agents Help? Controlled and Protocol-Aligned Evaluation of LLM Agent Workflows

**Source ID:** FL-S006
**Maturity:** Captured source
**Source type:** Research preprint and evaluation framework
**Author or organization:** Yuhang Fu and collaborators
**Publication date:** 2026-06-04
**URL:** https://arxiv.org/abs/2606.05670
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained abstract/evaluation excerpts and the legacy record
**Surfaces inspected:** abstract, paper
**Provenance events:** `fl-open-s006`, `fl-inspect-s006`, `fl-disposition-s006`
**Related claim IDs:** C010, C017, and C023 in `field-landscape-synthesis-field-landscape`; `field-landscape-case-hermes-agent-v0-18-2-C019`
**Canonical mapping locations:** C010, C017, and C023 — abstract, substrate-internal evaluation, and protocol-aligned external study; Hermes C019 — both evidence rows below
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl` and the Hermes case event log

## Why this source matters

BenchAgent explicitly tries to normalize the substrate used by single- and multi-agent workflows, addressing a major confound in claims that adding agents improves quality.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

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

## First-batch synthesis claim references

The substrate-internal evaluation and separately scoped external-runtime study support `field-landscape-synthesis-first-batch-harness-architecture-C014`. The synthesis preserves the protocol split and does not turn the result into a universal anti-delegation claim.
