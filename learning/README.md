# Harness Engineering Learning Guide

This directory is the human-oriented learning layer of the project. It translates reviewed research into material designed to be read, remembered, questioned, and applied.

The layers have different jobs:

1. `research/` contains canonical evidence, implementation cases, claims, sources, and audits.
2. `learning/` explains that evidence as a coherent learning experience.
3. `site/` is generated from `learning/` after Markdown validation and is never an independently edited knowledge source.

The learning layer may simplify navigation and introduce teaching aids, examples, diagrams, and exercises. It may never make a claim more certain, general, independent, or effective than the research supports.

## Learning progression

### 1. The Context Window

[The Context Window: what the model is actually reading during a conversation](../site-variants/context-engineering.html)

Builds the subject from zero. What a stateless model actually receives on each call; tokens; the anatomy of a turn-zero context and why tool schemas dominate it; who authors each region and how prefix caching follows from that; why a larger window does not remove the problem; and the four moves a harness makes in response, bounding, compaction, subagents, and memory.

**Prerequisites:** None. The chapter assumes no prior knowledge of harnesses, tokens, or tool calling.

**Status:** Draft, maintainer-approved 2026-07-29. Nineteen cited sources, with three read and explicitly set aside and two unreachable (recorded in the chapter). Example-agent figures are constructed and labelled as such; every claim about measured model behaviour is footnoted.

**Authoring note:** This chapter is hand-authored HTML rather than generated from Markdown. Its figures are bespoke HTML and CSS that Markdown cannot express, so `tools/learning-site` was bypassed and `site/generated-source-manifest.json` records the page as hand-authored. The canonicality rule below therefore does not apply to this chapter: the HTML at `site-variants/context-engineering.html` is the source. Reconciling this with the Markdown pipeline is an open question.

Read it at [site-variants/context-engineering.html](../site-variants/context-engineering.html), which carries the annotator for feedback, or without the annotator at [site/chapters/context-management-in-agent-harnesses.html](../site/chapters/context-management-in-agent-harnesses.html).

The comparison-first drafts (Versions A through E, including the 9,210-word “Context Engineering” deep guide) are superseded. They remain in `site-variants/` and in Git history. They were rejected for demanding that a reader hold four unfamiliar systems in mind while still learning the concepts.

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
