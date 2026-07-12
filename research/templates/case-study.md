# Case Study: [Implementation or Technique]

**Maturity:** Analyzed evidence
**Question:**
**Artifact ID:** [globally unique `<cycle-id>-case-<artifact-slug>`]
**Scope and inspected version:**
**Primary evidence records:**
**Source-audit reference:**
**Claim-evidence ledger:**

## Executive understanding

Give a readable account of what was learned, why it matters to harness engineering, and the most important confidence limit. Write this after the evidence sections.

## Problem and context

What model limitation, engineering problem, or operating condition is the mechanism addressing? What assumptions does the system make?

## Mechanism and control flow

Trace what actually happens. For code, point to stable files and relevant paths through the implementation. Separate verified implementation facts from source-reported behavior and inference.

## Design rationale

Explain why the mechanism may work and which evidence supports that explanation. Label inferred rationale when the implementer did not state it.

## Benefits, costs, and failure modes

Describe what the approach gains, what it consumes or complicates, how it fails, and the conditions under which the trade may reverse.

## Evaluation and counterevidence

Summarize outcome evidence, negative results, missing comparisons, confounds, and credible contradictions. Do not infer effectiveness from adoption alone.

Explicitly compare the observed implementation practice with relevant academic research, controlled evaluations, benchmarks, and credible operational evidence. State whether they support, qualify, contradict, or have not tested the mechanism. When industry and research disagree, investigate whether the difference comes from model capability, task, version, metric, budget, production constraints, or an unsupported convention. Do not assume that deployment proves effectiveness or that a bounded study settles production design.

## Comparison and transferability

Identify meaningfully similar and contrasting approaches. Discuss dependence on model, harness, task, domain, version, or infrastructure.

## Responsibility-lens map and friction

Use source-native language in the narrative, then multi-label relevant mechanisms against the provisional responsibilities. The IDs are:

- R1 — run lifecycle and ingress;
- R2 — model and instruction policy;
- R3 — active-context and capability construction;
- R4 — control flow and execution semantics;
- R5 — action and environment mediation;
- R6 — observation and feedback construction;
- R7 — durable state and persistence;
- R8 — decomposition, coordination, and aggregation;
- R9 — verification, recovery, and control boundaries;
- R10 — observability and external evaluation;
- R11 — adaptation and optimization across runs;

For the case, record:

- responsibilities that were difficult to distinguish;
- mechanisms that legitimately spanned boundaries;
- responsibilities absent or irrelevant in this case;
- important mechanisms not represented by the lens;
- categories that appeared too broad, narrow, or abstract;
- proposed changes to test at Checkpoint 3.

Apply these provisional primary owners while recording cross-boundary coupling as friction:

- Responsibility 2 owns instruction/model policy: authorship or selection of behavioral instructions, model/role selection, routing, and fallback.
- Responsibility 3 owns per-call prompt materialization and model-visible capability admission: what instructions, tools, skills, resources, and state enter a call, with ordering, precedence, scoping, and context cost.
- Responsibility 5 owns action representation, authorization, dispatch, and execution against the environment.

Do not force a clean answer when code couples them.

## Findings and open questions

Give every material finding a globally unique claim ID derived from the artifact ID. List it with exactly one canonical epistemic kind—`verified implementation fact`, `source-reported claim`, `inference`, `hypothesis`, `engineering recommendation`, or `open question`—supporting and, when applicable, opposing source-record IDs, verification events, version/freshness limits, and a confidence judgment. State what additional evidence would materially change it.

## Research trail

Record examined sources, important searches that produced little value, discovered leads, and any coverage gaps reopened by this analysis.
