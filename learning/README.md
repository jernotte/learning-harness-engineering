# Harness Engineering Learning Guide

This directory is the human-oriented learning layer of the project. It translates reviewed research into material designed to be read, remembered, questioned, and applied.

The layers have different jobs:

1. `research/` contains canonical evidence, implementation cases, claims, sources, and audits.
2. `learning/` explains that evidence as a coherent learning experience.
3. `site/` is generated from `learning/` after Markdown validation and is never an independently edited knowledge source.

The learning layer may simplify navigation and introduce teaching aids, examples, diagrams, and exercises. It may never make a claim more certain, general, independent, or effective than the research supports.

## Learning progression

### 1. Context management in agent harnesses

[Context Management in Agent Harnesses: What the Model Sees Is a Product Decision](chapters/context-management-in-agent-harnesses.md)

Learn how real harnesses construct the active prompt, bound file and tool output, project durable history, compact long sessions, transfer context to subagents, and distinguish memory from immediate model visibility. The chapter deeply compares four reviewed implementations, adds pinned topic-specific contrasts from Codex and Letta, and keeps Claude Code clearly source-reported.

**Prerequisites:** Basic tool-calling, prompts, and context-window concepts.

**Status:** Provisional. Fable adversarial review completed 2026-07-19 (implementation numbers spot-verified against all pinned checkouts; three low-severity fixes applied). Awaiting maintainer review.
**Research basis:** [Context management across agent harnesses](../research/syntheses/context-management-across-harnesses.md).

Read the generated experience from the [site landing page](../site/index.html) or open [Chapter 1 directly](../site/chapters/context-management-in-agent-harnesses.html). The [generated-source manifest](../site/generated-source-manifest.json) binds those pages to the Markdown and research inputs used to create them.

The earlier “Where Harnesses Put Control” page was rejected by the maintainer as too abstract and shallow to teach the subject. It remains recoverable in Git history but is no longer part of the active curriculum.

## How to read the evidence labels

- **Verified implementation fact:** directly inspected in pinned code, tests, documentation, or history.
- **Source-reported claim:** what a paper, vendor, or practitioner reports under its stated conditions.
- **Inference:** a conclusion drawn from evidence rather than directly stated by it.
- **Hypothesis:** a testable explanation or expectation that the current evidence has not established.
- **Engineering recommendation:** a judgment about how to reason or build, with conditions.
- **Open question:** an important uncertainty the current evidence does not resolve.
- **Contested practice:** credible evidence or interpretations point in different directions.

These labels describe epistemic status, not importance. A well-framed open question can be more useful than a weakly supported prescription.

## Give feedback while learning

Use [READER-FEEDBACK.md](READER-FEEDBACK.md) to record anything unclear, unsupported, missing, impractical, or worth deeper research. Reader feedback is not an afterthought: it determines which explanations need revision and which questions deserve the next research cycle.

## Canonicality rule

If the Markdown and generated HTML ever disagree, the Markdown controls. If the learning Markdown and canonical research disagree, the research controls until the discrepancy is resolved explicitly.
