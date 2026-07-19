# Source Record: SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering

**Source ID:** FL-S016
**Maturity:** Analyzed evidence
**Source type:** Peer-reviewed research paper and open implementation
**Author or organization:** John Yang and collaborators
**Publication date:** 2024-05-06; revised 2024-11-11
**URL:** https://arxiv.org/abs/2405.15793
**Project:** https://swe-agent.com/
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained abstract/design excerpts and the legacy record
**Surfaces inspected:** abstract, paper
**Provenance events:** `fl-open-s016`, `fl-inspect-s016`, `fl-disposition-s016`
**Related claim IDs:** `field-landscape-synthesis-field-landscape-C007`, `-C008`, and `-C022`; `field-landscape-case-pi-v0-80-6-C012`; `field-landscape-case-openhands-sdk-v1-35-0-C017`
**Canonical mapping locations:** Cycle 1 — abstract, ACI design sections, and reported ablations; Pi C012 — retained abstract, ACI design, and ablation evidence; OpenHands C017 — the same retained evidence, bounded as indirect comparison
**Primary verification events:** Listed per mapping in the Cycle 1, Pi, and OpenHands canonical event logs

## Why this source matters

SWE-agent treats the interface between model and computer as a first-class optimization target and reports task results tied to that design.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | A custom agent-computer interface improves the model's ability to navigate, edit, and test repositories. | Abstract, design sections, and reported experiments/ablations. | Historical models and benchmark state; detailed causal attribution needs full paper/code analysis. |
| source-reported claim | The reported system achieved 12.5% SWE-bench pass@1 and 87.7% HumanEvalFix at publication. | Abstract. | Historical results, not current state of the art. |

## Evidence assessment

Primary, peer-reviewed, open, and unusually aligned with harness engineering. Strong evidence that action/observation interface design can matter, but exact lessons should be reconstructed at the evaluated version rather than transferred from current code.

## Relationships and contradictions

Supports Anthropic's tool-interface guidance and suggests separating action representation, environment mediation, and observation construction rather than grouping all three as “tools.”

## Leads and open questions

Pin the evaluated implementation, reconstruct ablations, compare with raw shell and current coding-agent tools, and identify which gains survive newer models.

## First-batch synthesis claim references

The retained abstract, ACI design, and ablation evidence materially contextualize `field-landscape-synthesis-first-batch-harness-architecture-C004` and support source-reported claim `C011`. Transfer remains limited by historical models, benchmark state, implementation differences, and the absence of a direct comparison to the four pins.
