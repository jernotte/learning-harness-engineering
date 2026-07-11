# Research Methodology

## The loop, not a pipeline

The project uses four recurring modes of work: reconnaissance, analysis, consolidation, and refinement. They are written as `recon -> analyze -> consolidate -> refine` because that is the usual direction of increasing maturity, but they are not a one-way production line. A code deep dive may reveal missing vocabulary and send us back to recon. A synthesis may expose two incompatible claims and require another analysis. Refinement may show that the taxonomy itself is distorting the evidence.

Each cycle begins with a question that matters to harness design. “Research memory” is too broad to control the work. “How do current harnesses decide what persistent information enters the active context, and what evidence supports those policies?” provides something to map, compare, and eventually answer.

## 1. Reconnaissance: learn the shape of the unknown

Recon favors breadth. Its purpose is to discover how the topic is discussed, which systems embody it, where the strongest evidence may live, what schools of thought disagree, and which important examples are absent from our initial framing.

A good recon uses several passes. Begin with vocabulary, surveys, known systems, and citation trails. Expand through repositories, papers, practitioner accounts, benchmarks, conference material, contrary results, and neighboring terminology. Search recent material deliberately. Then inspect promising sources enough to determine whether they deserve a full analysis; a title or search result is only a lead.

Recon should produce a readable landscape, not a link dump. The cycle artifact records the central questions, vocabulary and aliases, candidate implementations, source inventory, tentative architectural axes, conspicuous gaps, and recommended deep dives. It also records why the proposed set offers coverage—different mechanisms, domains, model families, levels of openness, or evidence quality.

Several breadth passes should occur before the first deep-dive set is fixed. Recon remains open throughout the cycle because serious analysis often uncovers the best missing sources.

## 2. Analysis: understand mechanisms in context

Analysis asks what a system actually does and what the evidence can legitimately tell us about it. For open implementations, begin with a stable version. Follow control flow rather than stopping at documentation: find where context is assembled, decisions are made, tools are described and dispatched, state is persisted, subagents are created, failures are observed, and results are verified. Tests and version history can clarify invariants and design changes.

For a technique or paper, reconstruct the claim, comparison, conditions, outcome measure, and limitations. Check whether the benchmark measures the architectural benefit being attributed to it. Note model and harness dependencies because a gain on one pair may not transfer to another.

Case studies should normally address:

- the problem or model limitation being addressed;
- the mechanism and its place in the control flow;
- direct implementation or primary-source evidence;
- the proposed causal explanation, clearly labeled as such;
- benefits, costs, assumptions, and failure modes;
- evaluation evidence and important missing tests;
- similarities and contrasts with other approaches;
- portability across models, domains, and harnesses;
- contradictions, confidence limits, and open questions.

This is a thinking guide rather than a demand for eleven shallow headings. Tailor the presentation to what the subject reveals, while preserving the distinctions necessary for later comparison.

Closed-source systems require restraint. We can analyze declared and observed behavior through official material, firsthand accounts, credible reporting, and independent observations. We cannot turn an external behavior into a confident claim about internal code. Corroboration becomes stronger when sources are genuinely independent rather than repeating one origin.

## 3. Consolidation: turn cases into structured understanding

Consolidation is where a collection of good notes becomes research. Compare mechanisms along architectural axes that emerged from the evidence. In a memory study, for example, useful axes might include what is stored, who writes it, how it is indexed, when it is retrieved, how it re-enters context, how conflicts are handled, and how stale state is removed. The right axes will differ for tool design or delegation.

The top-level organization should usually reflect problems and design decisions. Product-by-product summaries alone make it difficult to see reusable lessons. Products remain essential as evidence: a synthesis should let a reader compare how Claude Code, Codex CLI, pi, Hermes, OpenClaw, or other relevant systems address the same decision without implying that every comparison needs the same cast.

During consolidation:

1. Normalize vocabulary without erasing meaningful differences.
2. Group claims that rely on the same underlying evidence.
3. Place supporting, negative, and contradictory evidence together.
4. Ask whether apparent conflict comes from different models, tasks, versions, metrics, or definitions.
5. Identify provisional patterns and the conditions under which they may hold.
6. Expose gaps that require another recon or analysis pass.

Comparison tables are useful when the same exact dimensions apply across several systems. Narrative is better for causal explanations, qualifications, and design histories. Use each where it improves comprehension.

## 4. Refinement: earn the conclusion

Refinement is not copyediting. It is the stage where accumulated claims are challenged, reduced, and made useful. Reopen cited sources and ensure they support the language used. Search for counterexamples and disconfirming results. Remove repetitions that add no independent evidence. Separate robust mechanisms from incidental implementation details. Tighten scope when the evidence is narrower than the provisional conclusion.

Then classify each reusable pattern honestly: observed, supported, contextual, emerging, contested, or anti-pattern. Explain what problem it addresses, why it may work, when it is appropriate, what it costs, how it fails, and what would change our confidence. A reader should be able to use the finding in a design discussion without mistaking it for a universal recipe.

Refinement also examines the method. Did the source template hide important information? Did subagents duplicate searches? Did the coverage map encourage anchoring? A change to canonical structure should be logged and reviewed, especially during early cycles.

## Saturation and reopening

Research has diminishing returns. A cycle is ready to stop when new credible searches predominantly reproduce already understood mechanisms, major implementations and viewpoints are represented, material conclusions have traceable evidence, contradictions have been investigated or bounded, and known gaps are explicit. The cycle review should state the case for stopping rather than simply declaring completion.

Saturation is conditional on the date, versions, and search boundaries. A later source reopens the work when it introduces a new mechanism, credible contradiction, meaningful change in model assumptions, or evidence strong enough to alter a conclusion. Mere repetition does not.

## Artifact maturity and auditability

The research preserves a trail from discovery to conclusion:

```text
lead
  -> captured source
  -> analyzed evidence
  -> provisional finding
  -> reviewed finding
  -> consolidated pattern
```

A source record establishes what was examined and which claims it can support. A case study performs analysis. A synthesis compares cases and makes provisional findings. A review earns higher confidence. The maturity label describes review state, not whether the conclusion is positive.

The canonical artifacts should be optimized for accurate agent work and durable version control while remaining legible to humans. `research/STATUS.md` provides a shorter audit view. If a generated website becomes useful, it should read these same artifacts and link back to them rather than introduce separately edited conclusions.

## Checkpoints and gradual autonomy

Early checkpoints intentionally trade some speed for alignment. The maintainer reviews the first recon map and taxonomy proposal, the first deep-dive selection, the first batch of cases, the first synthesis, and the first cycle review. This is how the project discovers whether its schemas and judgments are producing the desired quality before mistakes multiply.

Once the maintainer explicitly approves the operating model, routine checkpoints become non-blocking, inspectable milestones. Changes to scope, taxonomy, evidence policy, or a consequential reviewed conclusion still require review. The current mode is always visible in `research/STATUS.md`.
