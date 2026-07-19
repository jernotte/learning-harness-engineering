# Research Methodology

## The loop, not a pipeline

The project uses four recurring modes of work: reconnaissance, analysis, consolidation, and refinement. They are written as `recon -> analyze -> consolidate -> refine` because that is the usual direction of increasing maturity, but they are not a one-way production line. A code deep dive may reveal missing vocabulary and send us back to recon. A synthesis may expose two incompatible claims and require another analysis. Refinement may show that the taxonomy itself is distorting the evidence.

Each cycle begins with a question that matters to harness design. “Research memory” is too broad to control the work. “How do current harnesses decide what persistent information enters the active context, and what evidence supports those policies?” provides something to map, compare, and eventually answer.

## Three layers of organization

The project does not ask one taxonomy to serve discovery, architecture, and teaching equally well.

First, recon and human navigation use source-native vocabulary: tools, context, memory, planning, workflows, skills, subagents, evaluation, runtime, routing, self-improvement, and the aliases used by the field. These terms are discoverable and readable even when they overlap.

Second, analysis applies a multi-label responsibility lens. The provisional responsibilities concern run lifecycle; model and instruction policy; active-context and capability construction; control flow; action and environment mediation; observation construction; durable state; decomposition and coordination; verification and recovery; external evaluation; and adaptation across runs. This lens exposes allocations of control, state, capability, and evidence. It is not an exclusive directory tree, and a mechanism may legitimately span several responsibilities.

Third, the eventual field guide and curriculum may recombine reviewed knowledge into fewer, approachable narrative modules. Teaching convenience must not erase analytical distinctions, but analytical vocabulary must not make discovery or reading needlessly abstract.

This layered approach is intentionally revisable. Case studies record boundary friction, missing concepts, and forced classifications so taxonomy changes are driven by evidence.

For the first batch, Responsibility 2 primarily owns instruction/model policy, including authorship or selection of behavioral instructions, routing, and fallback. Responsibility 3 owns per-call prompt materialization and model-visible capability admission. Responsibility 5 owns action representation, authorization, dispatch, and execution. Real systems may couple these boundaries; that coupling is taxonomy-friction evidence rather than permission to classify inconsistently.

## 1. Reconnaissance: learn the shape of the unknown

Recon favors breadth. Its purpose is to discover how the topic is discussed, which systems embody it, where the strongest evidence may live, what schools of thought disagree, and which important examples are absent from our initial framing.

A good recon uses several passes. Begin with vocabulary, surveys, known systems, and citation trails. Expand through repositories, papers, practitioner accounts, benchmarks, conference material, contrary results, and neighboring terminology. Search recent material deliberately. Then inspect promising sources enough to determine whether they deserve a full analysis; a title or search result is only a lead.

Every search and source interaction follows `docs/source-provenance.md`. Query logs make search breadth visible; source events distinguish returned results, opened sources, reading depth, and final disposition. A source must be cataloged before its contents can enter analysis. Read-only and excluded sources remain visible because they show what the research considered and prevent later agents from repeating low-value paths.

Recon should produce a readable landscape, not a link dump. The cycle artifact records the central questions, vocabulary and aliases, candidate implementations, source inventory, tentative architectural axes, conspicuous gaps, and recommended deep dives. It also records why the proposed set offers coverage—different mechanisms, domains, model families, levels of openness, or evidence quality.

The source audit complements this narrative with planned-versus-actual channels, source-type and host distributions, repository inspection depth, disposition, lineage, and concentration warnings. Breadth is judged against the research question, not a universal quota.

Several breadth passes should occur before the first deep-dive set is fixed. Recon remains open throughout the cycle because serious analysis often uncovers the best missing sources.

## 2. Analysis: understand mechanisms in context

Analysis asks what a system actually does and what the evidence can legitimately tell us about it. For open implementations, begin with a stable version. Follow control flow rather than stopping at documentation: find where context is assembled, decisions are made, tools are described and dispatched, state is persisted, subagents are created, failures are observed, and results are verified. Tests and version history can clarify invariants and design changes.

For a technique or paper, reconstruct the claim, comparison, conditions, outcome measure, and limitations. Check whether the benchmark measures the architectural benefit being attributed to it. Note model and harness dependencies because a gain on one pair may not transfer to another.

Use the following provisional responsibilities as a multi-label analytical lens. They are questions to apply, not exclusive modules or a claim that every harness implements each one:

| ID | Architectural responsibility | Central question |
| --- | --- | --- |
| R1 | Run lifecycle and ingress | What starts, resumes, cancels, wakes, and completes a run? |
| R2 | Model and instruction policy | Which models, roles, instructions, settings, routing, and fallbacks govern cognitive work? |
| R3 | Active-context and capability construction | What instructions, history, state, tools, skills, and observations enter a model call? |
| R4 | Control flow and execution semantics | Who or what decides the next step, scheduling, branching, retries, and termination? |
| R5 | Action and environment mediation | How are model actions represented, authorized, dispatched, and executed? |
| R6 | Observation and feedback construction | How are results, errors, tests, and environment changes turned into usable model feedback? |
| R7 | Durable state and persistence | What survives beyond a call or run, and how is it retained, recovered, updated, or forgotten? |
| R8 | Decomposition, coordination, and aggregation | How is work divided, coordinated, isolated, and recombined? |
| R9 | Runtime integrity, recovery, and task acceptance | What policies define protocol integrity, operational recovery, evidence acquisition, escalation, and whether work is acceptable? |
| R10 | Observability and external evaluation | How do developers inspect operation and, separately, assess outcomes outside the active task? |
| R11 | Across-run adaptation | How do experience, usage, correction, evaluation, or outcome signals intentionally change future prompts, skills, memory, workflows, tools, or code? |

The full rationale and current evidence for these boundaries live in `research/syntheses/field-landscape.md`. Case studies must record where the lens clarifies a mechanism and where it blurs, omits, or distorts one.

The stable IDs do not imply that every responsibility is internally uniform. R4 owns progression mechanics such as scheduling, branching, retry, and termination. R6 owns construction of model-facing evidence. R9 owns criteria and policies for failure, recovery, verification, escalation, and acceptance; cases report protocol/runtime integrity, operational recovery, evidence acquisition, and task verification/acceptance separately. R10 reports operational observability separately from external outcome evaluation. Shared mechanisms may be multi-labeled.

R11 requires a signal from experience, usage, correction, evaluation, or outcomes to intentionally change future behavior. Ordinary persistence remains R7, and manually selected policy remains R2. Reserve **outcome-driven optimization** for a mechanism in which measured outcomes select future changes; persistent mutation or curation alone is adaptation, not demonstrated improvement.

When they materially change interpretation, cases also annotate lifecycle scale and ingress origin, control owner and study-object type, injection authority, effective configuration population, and mechanism-level lineage. These are cross-cutting comparison dimensions, not additional top-level responsibilities.

Implementation analysis is static-first. Inspect pinned code, tests, documentation, and targeted history by default. A focused upstream test may run without a new per-command maintainer decision only when a predeclared load-bearing ambiguity can materially change a claim or method decision, an exact target discriminates among plausible explanations, and execution is local, bounded, repeatable, and free of credentials, paid APIs, live services, or uncontrolled side effects. Run it from an exact-pin disposable writable copy; record environment, command, result, and claim consequence; interpret a pass narrowly. Full upstream suites and broader experiments are not routine promotion gates and require a separately approved objective.

Implementation prevalence is evidence that a design is used, not that it is effective or best. For each consequential mechanism, ask whether academic work, controlled experiments, benchmarks, or credible operational evidence support, qualify, contradict, or simply have not tested the practice. Preserve disagreement rather than automatically privileging either industry adoption or academic results: deployed systems may optimize for conditions absent from a study, while common practice may also persist without valid outcome evidence. Agreement across independent implementation and outcome evidence can strengthen a pattern only within the conditions both actually support.

Case studies should normally address:

- the problem or model limitation being addressed;
- the mechanism and its place in the control flow;
- direct implementation or primary-source evidence;
- the proposed causal explanation, clearly labeled as such;
- benefits, costs, assumptions, and failure modes;
- evaluation evidence and important missing tests;
- agreement or disagreement between implementation practice and academic, benchmark, or other outcome evidence;
- similarities and contrasts with other approaches;
- portability across models, domains, and harnesses;
- contradictions, confidence limits, and open questions.
- taxonomy friction: boundaries that blurred, mechanisms that spanned responsibilities, missing categories, and categories that appeared too broad or narrow.

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
7. Complete a claim-evidence ledger before promoting conclusions.

Comparison tables are useful when the same exact dimensions apply across several systems. Narrative is better for causal explanations, qualifications, and design histories. Use each where it improves comprehension.

## 4. Refinement: earn the conclusion

Refinement is not copyediting. It is the stage where accumulated claims are challenged, reduced, and made useful. Reopen cited sources and ensure they support the language used. Audit material claims rather than relying on source-record counts. Search for counterexamples and disconfirming results. Remove repetitions that add no independent evidence. Separate robust mechanisms from incidental implementation details. Tighten scope when the evidence is narrower than the provisional conclusion.

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

A lightweight provenance entry is required for every opened source; a full source record is required only when the source is referenced by an artifact. Material claims receive globally unique claim IDs and map to supporting and, when applicable, opposing records. This ordering is mandatory: catalog and inspect the source, create the record when it becomes evidence, then write or promote the claim. Backfilling records after synthesis is a process failure even when the resulting citation is correct.

Before a provisional finding or checkpoint is presented, the cycle must generate its source audit and claim-coverage audit. Every referenced source must have a record, every referenced claim/source/location mapping must have a primary verification event, no subagent may self-verify its evidence, and every concentration warning must be addressed or explained. The cycle also declares provenance completeness using the labels in `docs/source-provenance.md`.

The canonical artifacts should be optimized for accurate agent work and durable version control while remaining legible to humans. `research/STATUS.md` provides a shorter audit view. If a generated website becomes useful, it should read these same artifacts and link back to them rather than introduce separately edited conclusions.

## Checkpoints and gradual autonomy

Early checkpoints intentionally trade some speed for alignment. The maintainer reviews the first recon map and taxonomy proposal, the first deep-dive selection, the first batch of cases, the first synthesis, and the first cycle review. This is how the project discovers whether its schemas and judgments are producing the desired quality before mistakes multiply.

Checkpoint 2 identifies a release, tag, and exact commit for every open implementation before approval; it also states the evidence mode for closed systems. Checkpoint 3 explicitly stress-tests the responsibility lens using friction recorded in each case. Checkpoint artifacts include their human-readable source audit.

Once the maintainer explicitly graduates the governance mode, routine checkpoints become non-blocking, inspectable milestones. Approval of D-001 did not itself graduate the process. Changes to scope, taxonomy, evidence policy, or a consequential reviewed conclusion still require review. The current mode is always visible in `research/STATUS.md`.
