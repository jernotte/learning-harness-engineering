# Reconstructed Claim Ledger: Field Landscape

**Artifact:** `research/syntheses/field-landscape.md`

**Artifact ID:** `field-landscape-synthesis-field-landscape`

**Canonical data:** `research/provenance/field-landscape-events.jsonl`

**Completeness:** `reconstructed`

**Attestation:** Primary-agent prose-to-ledger attestation recorded 2026-07-12

**Audit status:** Passed under `provisional-promotion` with explicit reconstructed-provenance waiver

This is a human-readable projection of canonical claim declarations and mappings. The event log owns claim text, exact source locations, verification events, versions, and notes. Source IDs resolve through the complete source table in the generated audit and through the records under `research/sources/`.

| Claim | Kind | Canonical claim | Evidence | Confidence | Prose location |
| --- | --- | --- | --- | --- | --- |
| <a id="c001"></a>C001 | inference | A useful harness-architecture lens asks how the software allocates control, state, capability, and evidence among models, deterministic code, environments, other agents, and humans over time. | FL-S014, FL-S012, FL-S007 | Moderate; provisional taxonomy | Opening thesis |
| <a id="c002"></a>C002 | engineering recommendation | Use source-native vocabulary for discovery, a multi-label responsibility lens for engineering comparison, and a later human-centered narrative for teaching rather than forcing one hierarchy to do all three jobs. | FL-S014, FL-S001 | Moderate; provisionally promoted direction | How to use this map |
| <a id="c003"></a>C003 | inference | Run lifecycle and ingress are a distinct harness responsibility covering start, identity, persistence, resume, cancellation, wake-up, and application-boundary completion. | FL-S007, FL-S010 | Moderate | Responsibility 1 |
| <a id="c004"></a>C004 | inference | Model and instruction policy is a harness responsibility because the harness chooses which fixed model, effort, instructions, routing, and structured contract apply to each call. | FL-S005, FL-S007 | Moderate | Responsibility 2 |
| <a id="c005"></a>C005 | inference | Active-context and capability construction determines which instructions, history, files, memories, tools, skills, summaries, artifacts, and observations enter a model call and in what representation. | FL-S004, FL-S012 | Moderate-high for responsibility; policy effects untested | Responsibility 3 |
| <a id="c006"></a>C006 | inference | Control flow and execution semantics may be model-directed, deterministic, graph-based, planner/executor-based, search-based, or hybrid; no one control allocation is universally preferred by the recovered evidence. | FL-S001, FL-S007, FL-S015 | Moderate | Responsibility 4 |
| <a id="c007"></a>C007 | inference | Action and environment mediation is an architectural responsibility because action language and execution interface can materially affect agent performance and failure behavior. | FL-S016 | Moderate; historical model/benchmark dependence | Responsibility 5 |
| <a id="c008"></a>C008 | inference | Observation and feedback construction is distinct from action execution and from verification: it determines how environment changes, outputs, errors, and tool results become model-interpretable observations. | FL-S003, FL-S016 | Moderate | Responsibility 6 |
| <a id="c009"></a>C009 | inference | Durable state and persistence include execution checkpoints, session state and events, artifacts, cross-session memory, provenance, and learned procedures rather than a single memory store. | FL-S010, FL-S007, FL-S008 | Moderate-high for decomposition | Responsibility 7 |
| <a id="c010"></a>C010 | engineering recommendation | Decomposition, coordination, and aggregation should be analyzed through task division, state isolation, context and authority, control transfer, budgets, cancellation, aggregation, and verification rather than agent count alone. | FL-S001, FL-S005, FL-S013, FL-S006 | Moderate | Responsibility 8 |
| <a id="c011"></a>C011 | engineering recommendation | Verification and recovery should distinguish feedback source, error observability, critic independence, correction policy, and acceptance or rollback rather than treating reflection as one mechanism. | FL-S009 | Moderate-high; freshness-sensitive | Responsibility 9 |
| <a id="c012"></a>C012 | inference | Observability and external evaluation form a parallel architecture outside the optimized run, covering traces, trajectories, outcome graders, repeated trials, benchmark adapters, and resource accounting. | FL-S002, FL-S013 | Moderate-high | Responsibility 10 |
| <a id="c013"></a>C013 | inference | Adaptation and optimization across runs can edit prompts, context, workflows, tools, harness code, or optimizer policy and therefore belongs outside a single trajectory. | FL-S014 | Moderate framing; technique evidence varies | Responsibility 11 |
| <a id="c014"></a>C014 | engineering recommendation | Later comparisons should record control owner, time horizon, state ownership and isolation, authority and budget, failure semantics, model/version dependence, and whether evidence sits inside or outside the optimized loop. | FL-S007, FL-S012, FL-S013 | Moderate | Cross-cutting dimensions |
| <a id="c015"></a>C015 | inference | Planning is better treated as a family of control strategies than as a required standalone harness component. | FL-S001, FL-S007, FL-S015 | Moderate | Responsibility 4 / outline comparison |
| <a id="c016"></a>C016 | engineering recommendation | Memory should be decomposed at least into active context, resumable execution state, artifacts, cross-session knowledge, and procedural adaptation. | FL-S004, FL-S007, FL-S010, FL-S008 | Moderate-high | Responsibility 7 / outline comparison |
| <a id="c017"></a>C017 | source-reported claim | BenchAgent reports that five of six tested multi-agent workflows trail a matched single-agent anchor under its normalized internal protocol, while a separately evaluated Claude-Code-style external runtime performs strongly; this is not a causal ablation of subagents. | FL-S006 | Moderate; preprint v1 and protocol-specific | Responsibility 8 |
| <a id="c018"></a>C018 | source-reported claim | The 2024 TACL survey found little convincing evidence for prompted intrinsic self-correction outside unusually favorable tasks, while reliable external feedback was effective in the surveyed literature. | FL-S009 | Moderate-high for reviewed period | Responsibility 9 |
| <a id="c019"></a>C019 | source-reported claim | General AgentBench reports substantial degradation when agents move into its unified general-agent setting, a sequential context ceiling, and a parallel candidate-selection verification gap. | FL-S011 | Moderate; preprint v1 and benchmark-specific | Contradictions |
| <a id="c020"></a>C020 | source-reported claim | An agent harness and an evaluation harness have different responsibilities, and evaluation may need both the execution trajectory and resulting environment state across repeated trials. | FL-S002 | Moderate-high as production methodology | Responsibility 10 |
| <a id="c021"></a>C021 | engineering recommendation | Self-improvement should be treated as an outer lifecycle with trustworthy evaluation, bounded edit surfaces, regression protection, rollback, and authority boundaries rather than as merely another inner loop. | FL-S014 | Moderate | Responsibility 11 |
| <a id="c022"></a>C022 | engineering recommendation | The familiar tools category should be analyzed across capability admission, action representation and execution, and observation construction because those mechanisms have different control owners and evidence. | FL-S012, FL-S016 | Moderate-high | Outline comparison |
| <a id="c023"></a>C023 | engineering recommendation | The familiar subagents category should be analyzed through decomposition, context and state isolation, control transfer, authority and budgets, concurrency, aggregation, and verification. | FL-S005, FL-S013, FL-S006 | Moderate-high | Outline comparison |
| <a id="c024"></a>C024 | engineering recommendation | Run lifecycle and ingress plus model mediation and routing should be explicit in the analytical lens because recovered production sources expose them as developer-controlled architecture that the seed outline underrepresented. | FL-S007, FL-S005 | Moderate | Outline comparison |

## Review boundary

The ledger does not promote implementation-report-only systems, lineage observations, candidate deep dives, or academic leads that lack full records. Those remain visible as `read_only` or explicitly unadmitted material. It also makes no claim about exhaustive search breadth, source balance, absence of evidence, marginal information, or saturation.
