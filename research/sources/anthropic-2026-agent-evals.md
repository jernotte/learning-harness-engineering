# Source Record: Demystifying Evals for AI Agents

**Maturity:** Captured source
**Source type:** Official engineering article
**Author or organization:** Anthropic
**Publication date:** 2026-01-09
**URL:** https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
**Related cycle or question:** Cycle 1 field landscape

## Why this source matters

It explicitly distinguishes an agent harness from an evaluation harness and explains why outcomes and trajectories require different evaluation mechanisms.

## Claims and evidence

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
