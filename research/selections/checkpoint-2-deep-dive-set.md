# Checkpoint 2 Proposal: First Deep-Dive Set

**Status:** Approved and amended by D-009 and D-010; Pi, OpenHands, and OpenClaw reviewed; Browser Use alone authorized next
**Cycle:** `field-landscape`
**Artifact ID:** `field-landscape-selection-checkpoint-2-deep-dive-set`
**Prepared:** 2026-07-12
**Provenance completeness:** `complete` for this bounded selection pass
**Source audit:** [`checkpoint-2-selection-audit.md`](../provenance/checkpoint-2-selection-audit.md)
**Claim ledger:** [`checkpoint-2-selection.md`](../claims/checkpoint-2-selection.md)

## Maintainer decision

On 2026-07-12, the maintainer approved the six-case first batch—five pinned open implementations plus one conditional closed-production case—and authorized only the Pi pilot. On 2026-07-16, the maintainer approved D-007 and D-009, accepted Pi and OpenHands SDK as reviewed cases, and authorized only OpenClaw with a scope-first condition. On 2026-07-17, the maintainer accepted OpenClaw after the C003 reconciliation and approved D-010, authorizing Browser Use alone next with the same scope-first discipline. D-009 defers LangGraph to a future framework/substrate comparison because it does not answer the current concrete-harness case question; its slot is not replaced. Claude Code, Hermes, every cohort member, and every alternate remain blocked. This is a selection record, not a finding about how an uninspected system works.

Cycle 1 remains reconstructed. Its implementation report supplied leads, not evidence: exact provider result windows, screening breadth, and report-only inspection depth remain unknowable. This proposal independently captured the bounded selection searches, every observed returned result, every opened candidate, and exact public Git tag refs. It does not revalidate the landscape's breadth or the eleven-responsibility lens.

## Selection logic

The batch is chosen as a portfolio, not by an aggregate score. A useful first set must expose materially different allocations of control, state, action, observation, lifecycle, and evidence while remaining small enough for an early pilot correction to matter. Selection considers:

- expected responsibility coverage and boundary friction;
- contrast in control-loop, context, state, environment, and coordination shape;
- open versus closed evidence modes;
- immutable pinning and documentation alignment;
- domain and runtime diversity;
- likelihood of revealing negative evidence or an awkward taxonomy fit;
- transfer value beyond coding agents;
- redundancy, analysis cost, and feasibility.

Raw popularity is not evidence of implementation value, team size, adoption, or effectiveness. D-010 permits operationalized adoption evidence as a subordinate selection dimension after information gain, falsification value, evidence readiness, diversity, cost, and lineage risk. Expected responsibility coverage below is a hypothesis to test against code and admitted evidence, not an implementation claim.

For rolling case order, D-010 records explicit precedence: marginal information gain on uncovered or high-friction responsibilities; falsification and anchoring protection; evidence quality and readiness; evidence-mode and domain diversity; analysis and governance cost; lineage and independence risk; and only then operationalized adoption. A later pivot must name the evidence or higher-priority criterion that outweighs this decision.

## Recommended batch

| Order | Case | Why it earns a slot | Evidence mode and boundary | Principal selection risk |
| --- | --- | --- | --- | --- |
| 1 | **Pi** | Compact, explicitly named agent harness and coding runtime; useful first test of whether the method can trace a small core without flattening context, policy, actions, and state | Open primary implementation; `earendil-works/pi` tag `v0.80.6`, commit `2b3fda9921b5590f285165287bd442a25817f17b`; tag verified 2026-07-12 ([CP2-S001](../sources/cp2-pi-v0.80.6.md)) | Its compact coding focus may underexercise durable workflow and external evaluation concerns |
| 2 | **OpenHands Software Agent SDK** | Contrasts Pi with an SDK/workspace substrate and a larger state/event surface | Open primary implementation; tag `v1.35.0`, commit `9028562e2d5eda76de662ec9b7584125760eb83f`; verified 2026-07-12 ([CP2-S002](../sources/cp2-openhands-sdk-v1.35.0.md)) | Must not mix the current SDK with legacy `OpenHands/OpenHands` architecture |
| Deferred by D-009 | **LangGraph** | Originally selected as an explicit programmed-graph and durability counterpoint; now retained for a future framework/substrate comparison rather than treated as a concrete harness | Open primary implementation; Python package tag `1.2.5`, commit `7ab79f9f3e94fb4357334d902f5fd69ec0088eb4`; verified 2026-07-12 ([CP2-S003](../sources/cp2-langgraph-1.2.5.md)) | Framework capability does not establish downstream application policy; the current case question would produce a primitive inventory rather than a comparable harness analysis |
| Next by D-010 | **Browser Use** | Moves the batch outside coding and makes observation/action grounding and recovery central | Open primary implementation; tag `0.13.4`, commit `68afe46456a23009a7d5eec2017ec7ab51b7c027`; verified 2026-07-12 ([CP2-S004](../sources/cp2-browser-use-0.13.4.md)) | Rapid releases and cloud/open-source boundaries can blur the inspected product |
| 3, reviewed | **OpenClaw** | Adds long-lived ingress, channels, scheduling, persistent state, and operational lifecycle as questions the other open cases are unlikely to foreground | Open primary implementation; annotated tag `v2026.6.6`, dereferenced commit `8c802aa683510c7f7503597b54c3021733245e59`; verified 2026-07-12 ([CP2-S005](../sources/cp2-openclaw-v2026.6.6.md)) | Large, fast-moving surface and many integrations can overwhelm the harness core unless scope is tightly bounded |
| 6 | **Claude Code** | Deliberate closed production reference case; tests whether the method can compare externally supported behavior without inventing internals | Conditional `closed-production / maintainer-supplied bounded set`; no material has yet been found in the repository or approved reference-material directory | Cannot begin until the supplied set is enumerated, dated, and logged; internal causal architecture remains unknowable |

The original six-case proposal was the smallest set preserving all five planned contrasts. D-009 deliberately defers LangGraph and leaves the programmed-control slot open because case-type comparability now outweighs filling the matrix with a framework. D-010 preserves Browser Use because removing it would collapse the observation/environment contrast and makes it the final unconditional case before Checkpoint 3. If the Claude Code evidence set is admitted by the Browser Use review, the maintainer may explicitly authorize it as the final pre-Checkpoint-3 case; otherwise it is deferred and Checkpoint 3 convenes after Browser Use. No replacement is added before that checkpoint.

## Responsibility-coverage hypothesis

`●` means a primary question for the case, `○` a secondary or coupled question, `?` genuinely uncertain before analysis, and `—` not deliberately sampled. These marks do not assert that a mechanism exists.

The columns refer to the provisional architectural responsibilities defined in the [methodology](../../docs/methodology.md#2-analysis-understand-mechanisms-in-context) and explained in the [landscape synthesis](../syntheses/field-landscape.md#a-provisional-responsibility-map):

| ID | Responsibility | What it asks |
| --- | --- | --- |
| R1 | Run lifecycle and ingress | What starts, resumes, cancels, wakes, and completes a run? |
| R2 | Model and instruction policy | Which model, role, instructions, settings, routing, and fallback govern cognitive work? |
| R3 | Active-context and capability construction | What instructions, history, state, tools, skills, and observations enter a model call? |
| R4 | Control flow and execution semantics | Who or what decides the next step, scheduling, branching, retries, and termination? |
| R5 | Action and environment mediation | How are actions represented, authorized, dispatched, and executed? |
| R6 | Observation and feedback construction | How are results, errors, tests, and environment changes made usable to the model? |
| R7 | Durable state and persistence | What survives beyond a call or run, and how is it managed? |
| R8 | Decomposition, coordination, and aggregation | How is work divided, coordinated, isolated, and recombined? |
| R9 | Verification, recovery, and control boundaries | How is work judged, retried, rolled back, escalated, or stopped? |
| R10 | Observability and external evaluation | How is the harness traced, measured, benchmarked, and evaluated from outside the run? |
| R11 | Adaptation and optimization across runs | How does completed-run evidence change future harness behavior? |

| Case | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Pi | ○ | ● | ● | ● | ● | ○ | ○ | ? | ○ | ○ | ? |
| OpenHands SDK | ○ | ○ | ● | ● | ● | ● | ● | ○ | ● | ● | ? |
| LangGraph (deferred framework) | ○ | ? | ○ | ● | ○ | ○ | ● | ● | ● | ● | ? |
| Browser Use | ○ | ○ | ● | ● | ● | ● | ○ | ? | ● | ○ | ? |
| OpenClaw | ● | ● | ● | ○ | ● | ○ | ● | ○ | ● | ○ | ? |
| Claude Code | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? |

Responsibilities 1–10 receive at least two contrasting open cases as selection hypotheses. Responsibility 11—adaptation and optimization across runs—remains deliberately weak and uncertain. The first batch should record whether it is absent, hidden inside skills/memory/configuration, or simply a poor fit; it should not manufacture coverage. Claude Code remains all `?` until the maintainer-supplied evidence boundary exists.

## Documentation and version alignment

For every open case, the deep dive should clone or cache the exact commit under `/Users/jernotte/dev/reference-materials/research` only after Checkpoint 2 approval. Repository-contained README and documentation at that tag are aligned by construction. Live documentation may be consulted later only as a separately dated source; it must not be silently projected backward onto the pinned code. Package-family boundaries must be explicit, especially LangGraph's multi-package repository and the separation between the OpenHands SDK and older OpenHands implementations.

## Claude Code admission plan

The closed case is conditional, not a placeholder for public speculation. Before its analysis, the maintainer-supplied set should be copied or referenced as an independently enumerable manual-source set and should include whatever is available from:

- the exact Claude Code version and capture date;
- official documentation or release notes intended to accompany that version;
- exported configuration, commands, hooks, skills, subagent definitions, or policy files;
- bounded transcripts or observable tool traces the maintainer authorizes for research;
- notes distinguishing direct observation from maintainer interpretation.

The case may describe declared and observed behavior. It may not infer internal source code, hidden prompts, or causal implementation details from behavior alone.

## Alternates and deferred candidates

| Candidate | Evidence mode and pin | Expected lens contribution and value | Main risk | Replacement condition |
| --- | --- | --- | --- | --- |
| smolagents | Open primary implementation; `v1.26.0`, `12c1bc820eca50ace6f80a21d90426d41d74f845` ([CP2-S006](../sources/cp2-smolagents-v1.26.0.md)) | Responsibilities 3–6 and 8; high value for action-representation contrast | Narrower library surface may test less of the full harness and duplicate Pi's action questions | Replace Pi only if code-as-action versus structured calls becomes more important than a compact coding-harness pilot |
| STORM | Open primary implementation; `v1.1.0`, `e80d9bbea7362141a479940dabb751c1f244e4b6` ([CP2-S007](../sources/cp2-storm-v1.1.0.md)) | Responsibilities 3, 4, 6, 8–10; high value for a staged research/evidence pipeline | STORM/Co-STORM and paper/package lineage can be mixed unless tightly bounded | Replace LangGraph if domain-specific research pipelines are prioritized over a general programmed-control substrate |
| SWE-agent | Open primary implementation plus separately versioned paper evidence; `v1.1.0`, `0f3acafacabc0def8cc76b4e48acb4b6cf302cb9` ([CP2-S008](../sources/cp2-swe-agent-v1.1.0.md)) | Responsibilities 3–6 and 9–10; high value for connecting ACI code with outcome evidence | Paper/code version mismatch and greater coding-agent redundancy | Replace Pi or OpenHands if outcome-linked ACI evidence is prioritized despite greater coding-agent redundancy |

The remaining inherited leads stay deferred or excluded from this batch:

| Inherited lead | Current evidence state | Selection disposition |
| --- | --- | --- |
| Codex CLI | Reconstructed read-only lead; unpinned in this pass | Deferred: large and overlaps the closed coding case |
| Gemini CLI, OpenCode, Goose, Aider | Reconstructed read-only leads; unpinned | Deferred: would overconcentrate the first batch in coding loops |
| Microsoft Agent Framework, PydanticAI, OpenAI Agents SDK | Reconstructed read-only leads; unpinned | Deferred with LangGraph to a future framework/substrate comparison; none is currently a concrete-harness replacement |
| AutoGen | Reconstructed lineage lead; unpinned | Deferred pending current-successor and maintenance-lineage verification |
| Agent S | Reconstructed read-only lead; unpinned | Deferred: Browser Use is the first perception/environment case |
| GPT Researcher, DeerFlow | Reconstructed read-only leads; unpinned | Deferred: STORM is the pinned research-pipeline alternate; DeerFlow lineage is version-sensitive |
| Letta Code, Hermes Agent | Reconstructed read-only leads; unpinned | Deferred: OpenClaw is the first pinned long-lived-runtime case |
| AutoGPT, BabyAGI archive | Reconstructed historical/lineage leads; unpinned | Excluded from the first batch; useful later only for a bounded historical question |

## Pilot recommendation

Only **Pi** is authorized as the pilot. Pi is the best pilot because its tagged repository identifies an agent loop, state management, model-provider layer, coding CLI, and explicit external containment boundary within a comparatively compact project. That makes it likely to reveal whether the case method can distinguish Responsibilities 2, 3, and 5 without requiring a platform-scale investigation.

The pilot is implementation-grounded but not implementation-deferential. For consequential mechanisms it must ask whether academic research, controlled evaluations, benchmarks, or credible operational evidence support, qualify, contradict, or have not tested the observed practice. Disagreement is a research result to investigate, not noise to reconcile away; agreement supports a reusable pattern only within the shared conditions of the evidence.

The pilot would produce one case study, one canonical claim ledger, source records for every referenced item, a case source audit, and an explicit responsibility-friction report. It would not begin comparisons with the other cases.

The maintainer review after the pilot should ask:

1. Is the narrative readable and useful to an experienced builder, rather than an inventory of files?
2. Did the analysis trace actual control flow deeply enough without expanding into unrelated product detail?
3. Are implementation fact, stated rationale, inference, and recommendation visibly separate?
4. Did the responsibility lens expose useful distinctions, especially among instruction policy, context/capability admission, and action mediation?
5. What felt abstract, forced, missing, or too expensive to repeat across five more cases?
6. Should the batch, case schema, or analysis depth change before scaling?

## Risks and explicit gaps

- The search pass was intentionally GitHub-concentrated because its decision was repository identity and pinning, not landscape breadth. The audit preserves irrelevant returned results and this concentration rather than treating it as broad recon.
- No code, tests, or history were inspected. Expected responsibility coverage may be wrong; that is a reason to run cases, not a defect to hide in selection.
- Claude Code is conditional until the maintainer provides and bounds the evidence set. If it is not enumerated, dated, bounded, and admitted by the Browser Use review, it is formally deferred and Checkpoint 3 proceeds without it.
- Responsibility 11 remains weak. A later case may need to target adaptation explicitly, but adding one now would enlarge the first batch based on reconstructed leads rather than admitted evidence.
- Fast release cadence makes every pin immediately historical. The commit—not the moving release label—is the analysis boundary.
- Native reconciliation proves the generic-web interactions occurred but does not mechanically bind the 35 manually authored result URLs to the archived output. Before approval, the primary agent confirmed every URL and both batched query strings in the three retained archives. Any later checkpoint relying on manual result events must repeat and record that comparison unless the maintainer explicitly changes the policy.

## Authorized next step

Browser Use `0.13.4` at `68afe46456a23009a7d5eec2017ec7ab51b7c027` is the only authorized implementation case. A written scope boundary must precede deep analysis. This is not Checkpoint 3. LangGraph remains deferred, Claude Code remains conditional on material admission and the Browser Use review branch, and Hermes, every cohort member, every programmed-control replacement, and all alternates remain blocked.
