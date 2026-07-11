# Source Record: Harness Engineering for Self-Improvement

**Maturity:** Captured source
**Source type:** Technical synthesis / research blog
**Author or organization:** Lilian Weng
**Publication date:** 2026-07-04
**URL:** https://lilianweng.github.io/posts/2026-07-04-harness/
**Related cycle or question:** Cycle 1 field landscape

## Why this source matters

This is the project's anchor framing and a recent attempt to define the harness as a software system rather than a prompt wrapper. It also connects production coding-agent patterns with current work on context, workflow, and harness optimization.

## Claims and evidence

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | A harness orchestrates execution and governs planning, tools/actions, context/perception, artifacts, and evaluation. | Definition near the beginning of the post. | This is a proposed framing, not an empirical decomposition. |
| source-reported claim | Mainstream coding-agent interfaces have converged on an agent loop and recognizable tool families. | “Case study: Coding Agent Harness,” including the tool-family table. | The post calls its list non-comprehensive; convergence strength still needs code comparison. |
| source-reported claim | Harness optimization can progress from prompts through structured context, workflows, harness code, and optimizer code. | “Harness Optimization” and subsequent sections. | A conceptual ladder; evidence varies substantially by cited technique. |
| source-reported claim | Evaluators and permission controls should remain outside a self-improvement loop. | Open challenges, especially reward hacking. | A reasoned recommendation, not a universal experimental result. |

## Evidence assessment

Highly recent and broad, written by an experienced researcher, with extensive links to primary work. Directness and rigor vary by section because the post is a synthesis. It is strong for vocabulary and leads, moderate for conclusions, and should not substitute for its cited papers or inspected implementations.

## Relationships and contradictions

Its definition is broader than older “model + tools + memory + planning” agent taxonomies and aligns with production frameworks that include persistence, runtime control, evaluation, and permissions. The first recon must test rather than inherit its decomposition.

## Leads and open questions

Verify the cited 2025–2026 context, workflow-optimization, and self-harness results individually. Determine which proposed layers recur in production code.
