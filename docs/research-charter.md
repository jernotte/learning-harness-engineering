# Research Charter

## Why this project exists

Harness engineering is the discipline of shaping what a language model can accomplish through the software around it. The same model can behave like a limited chat interface, a capable coding agent, or a long-running research system depending on how the harness constructs context, exposes tools, preserves state, orders work, handles feedback, and evaluates results.

The maintainer already builds harnesses. The aim is not to reach basic implementation competence or to produce one more framework. It is to formalize existing intuition, find gaps in it, learn what other builders have discovered, and establish a stronger foundation for designing and testing future systems. The most important product is a trustworthy learning process and the curated knowledge it leaves behind.

The eventual corpus should support three uses. It should be a living reference that can be maintained as the frontier moves; it should improve practical architectural judgment across different kinds of agents; and mature findings should be reusable in a course for colleagues who are technically capable but new to harness engineering.

## What counts as harness engineering here

The object of study is the orchestration layer connecting an unmodified language model to a task and an environment. We assume that a harness builder can select and call models but cannot retrain them, fine-tune their weights, or change their tokenizer.

This includes the agentic loop, prompt and policy construction, tool interfaces, context engineering, memory and persistent state, planning, workflows, delegation, multi-agent coordination, model routing, verification, evaluation, and mechanisms that allow a harness to learn or modify itself. Operational concerns such as permissions or observability are included when their design changes the loop or our ability to understand it.

Security, general user-interface design, model training, and other adjacent disciplines are not independent research tracks. They may enter a study when they explain a relevant architectural constraint, but they should not displace the central question: what can the harness developer control, and what does that choice do?

The program deliberately spans coding agents, research agents, computer-use systems, scientific agents, and other domains. Studying several domains makes it possible to distinguish a general harness principle from a local convention.

## What good research looks like

The corpus should be backed by sources and implementation evidence rather than confident retellings. Academic work is valuable when its method supports the claim being made. Official documentation is valuable for establishing declared behavior. Code is especially important because it can confirm whether architectural assertions exist in a real implementation. Practitioner writing, talks, interviews, and informal testing can reveal lessons unavailable elsewhere, even when their confidence must remain lower.

No category is admitted or rejected wholesale. A polished paper can overgeneralize from a narrow benchmark; a marketing article can contain an excellent architectural disclosure; a social post can point to a real failure mode. We judge the specific claim and its evidence.

Research breadth must also be auditable. The project records searches, returned results when available, opened sources, reading depth, disposition, and eventual claim use. This allows a reviewer to distinguish a justified source mix from clustering around a convenient host, organization, source type, or evidence lineage. Referenced claims require durable records; read-only and excluded sources remain visible without being promoted into evidence.

Six questions guide that judgment:

1. **Directness:** How close is the evidence to the mechanism or outcome?
2. **Rigor:** How strong and reproducible is the method?
3. **Recency:** Could changes in models or harnesses have superseded it?
4. **Independence:** Do corroborating sources actually have separate origins and incentives?
5. **Applicability:** Under what models, tasks, and harness conditions does it transfer?
6. **Confidence:** How strongly does the total evidence justify the conclusion?

Recency is an important tie-breaker in a rapidly changing field, not an automatic trump card. Strong older evidence can remain more useful than a weak new claim. Conversely, conclusions that depend on a model limitation may age rapidly and should say so.

## Truthful language

The project distinguishes what we saw from what someone said and from what we inferred. A verified implementation fact is not the same as a source-reported claim. An inference is not a fact merely because it is plausible. A hypothesis remains open until evidence addresses it. An engineering recommendation adds judgment beyond description and must state its conditions.

Similarly, common does not mean good. Patterns are classified according to the evidence behind them:

- An **observed pattern** recurs in implementations without sufficient outcome evidence.
- A **supported pattern** has credible evidence of benefit.
- A **contextual pattern** is supported under identifiable conditions.
- An **emerging pattern** is promising but too recent or thinly tested for confidence.
- A **contested pattern** has credible conflicting evidence or interpretations.
- An **anti-pattern** has evidence of recurring harm or failure.

Negative findings are first-class knowledge. Failed mechanisms, null results, obsolete assumptions, and discarded hypotheses help builders avoid repeated mistakes. They should be summarized proportionately rather than hidden.

## A living, useful corpus

Historical lineage matters when it explains a current design, recurring failure, or shift in assumptions. It is not an end in itself. Superseded material may be trimmed when it no longer helps an engineer understand or decide anything.

No subject is permanently complete. A research cycle reaches practical saturation when additional credible work provides little new information, its important conclusions are traceable, its contradictions and gaps are visible, and the synthesis can support engineering decisions. A new implementation, model capability, or result can reopen it.

The original `outline.md` captures a valuable early view of the field, including tools, context, skills, memory, orchestration, evaluation, and self-improvement. It is evidence of our starting hypotheses—not a boundary on what the research may discover or how the final knowledge should be arranged.
