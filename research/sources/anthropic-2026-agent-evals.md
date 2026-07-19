# Source Record: Demystifying Evals for AI Agents

**Source ID:** FL-S002
**Maturity:** Captured source
**Source type:** Official engineering article
**Author or organization:** Anthropic
**Publication date:** 2026-01-09
**URL:** https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained transcript output and the legacy record
**Surfaces inspected:** documentation
**Provenance events:** `fl-open-s002`, `fl-inspect-s002`, `fl-disposition-s002`
**Related claim IDs:** C012 and C020 in `field-landscape-synthesis-field-landscape`; `field-landscape-case-hermes-agent-v0-18-2-C019`
**Canonical mapping locations:** C012 — “The structure of an evaluation”; C020 — the same section plus transcript/trajectory, outcome, and non-determinism guidance; Hermes C019 — all three evidence rows below
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl` and the Hermes case event log

## Why this source matters

It explicitly distinguishes an agent harness from an evaluation harness and explains why outcomes and trajectories require different evaluation mechanisms.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | An agent harness processes inputs, orchestrates tool calls, and returns results; an evaluation harness supplies tasks, runs trials, records trajectories, grades, and aggregates. | Definitions in “The structure of an evaluation.” | Vendor terminology, but unusually precise and useful for scope boundaries. |
| source-reported claim | Agent evaluation must consider both the execution trajectory and the resulting environment state. | Definitions of transcript/trajectory and outcome. | The relative value depends on domain and grader quality. |
| source-reported claim | Non-determinism requires multiple trials and distributions of success rather than single-run conclusions. | Evaluation guidance and non-determinism section. | Trial count and statistical practice are task-specific. |

## Evidence assessment

Recent production-informed methodology with concrete definitions and examples. It is not a peer-reviewed experiment, but it is direct evidence of how a major harness builder structures evaluation. Strong for terminology and evaluation architecture.

## Relationships and contradictions

Supports separating in-loop verification/feedback from outside-loop evaluation. It also reinforces the project rule that a system being optimized should not be its only grader.

## Leads and open questions

Compare its recommendations with independent benchmark methodology and research on judge reliability, reward hacking, and trajectory evaluation.

## First-batch synthesis claim references

“The structure of an evaluation,” the trajectory/outcome distinction, and the non-determinism guidance support `field-landscape-synthesis-first-batch-harness-architecture-C006`, materially contextualize `C009`, and support C016's decision to keep external evaluation distinct from the seven active-system control contracts. These are source-reported production recommendations, not direct tests of the four implementation pins.
