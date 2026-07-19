# Checkpoint 3: What Four Harnesses Changed About the Map

**Status:** Approved at Gate B
**Date:** 2026-07-18
**Artifact ID:** `field-landscape-checkpoint-taxonomy-method-review`
**Evidence boundary:** Maintainer-reviewed Pi v0.80.6, OpenHands Software Agent SDK v1.35.0, OpenClaw v2026.6.6, and Hermes Agent v0.18.2; bounded selection evidence from deferred LangGraph and Browser Use
**Canonical taxonomy:** Stable R1–R11 IDs with D-013's approved R9/R11 labels and cross-cutting annotations
**Provenance limitation:** The four implementation cases have complete provenance. The original landscape remains reconstructed, so this checkpoint cannot establish field-wide breadth, representativeness, or saturation.

This is a fixed-source consolidation of already reviewed or admitted records. It planned no new search channel, so the generated audit intentionally reports “Planned: None declared” and “Actual: local repository inspection.” That is a boundary disclosure, not evidence that a breadth pass occurred.

## Executive judgment

The eleven-responsibility lens earned its keep. Across four materially different harnesses, it repeatedly exposed distinctions that a component list would hide: durable state is not active context; executing an action is not the same as constructing the observation the model receives; runtime recovery is not proof that the task is correct; and observability is not optimization.

The lens also failed in a consistent way. A broad label such as “R9 is strong” can compress several opposing facts into one score. A harness can have excellent protocol integrity, replay, cancellation, and crash recovery while accepting an unverified model completion. Similarly, “R11 self-improvement” can describe durable change without any measured outcome signal. The solution is not twelve or fifteen new top-level boxes. It is to preserve stable responsibilities while requiring the few internal distinctions and cross-cutting annotations that changed the interpretation of every case. [C001](../claims/checkpoint-3-taxonomy-method-review.md#c001)

The recommendation is therefore evolutionary:

- retain R1–R11 as stable analytical IDs;
- keep the R2/R3/R5 and R5/R6 boundaries because the cases show that they answer different questions even when one code path joins them;
- refine R9 and R11 so their names cannot smuggle in task success or optimization;
- formalize lifecycle scale, control owner, injection surface, effective configuration, and mechanism lineage as cross-cutting annotations;
- adopt static-first implementation analysis with narrowly triggered focused test execution;
- carry the browser/perception gap explicitly into the first synthesis.

The maintainer approved D-013 at Gate B on 2026-07-18. The approved changes are reflected in the methodology and governing artifacts; this checkpoint still does not establish field saturation or taxonomy finality.

## What the evidence can and cannot support

The four cases are strong implementation evidence, but they are not a representative sample of the entire field.

| Evidence strength | What is justified |
| --- | --- |
| Four pinned, reviewed implementations | Compare the mechanisms and boundary friction directly observed at those versions |
| Different repository families and scales | Treat recurrence across Pi, OpenHands, and the long-lived runtimes as a useful architectural observation |
| Explicit OpenClaw/Hermes relationship evidence | Separate direct ports, migration translation, named inspiration, and unresolved similarity mechanism by mechanism |
| Pinned tests and selected history | Identify encoded invariants and concrete historical failure surfaces |
| Sparse mechanism-level outcome evidence | Qualify practices, not declare them effective or best |

The batch remains concentrated in coding and personal-agent systems. It contains no reviewed browser/perception harness, no admitted closed-production case, no framework/substrate comparison, and no implementation with demonstrated outcome-driven harness optimization. OpenClaw and Hermes also have migration compatibility and named influence, so their recurrence is not independent corroboration unless a particular mechanism's lineage is established separately. [C001](../claims/checkpoint-3-taxonomy-method-review.md#c001)

## The recurring architecture underneath the products

All four cases place a model-directed decision loop inside programmed envelopes, but the envelopes differ substantially.

- Pi keeps the inner loop compact while its coding-session layer owns prompt refresh, tools, persistence, compaction, retry, and extensions.
- OpenHands makes the layers explicit through an agent policy, mutable conversation, event tree, active view, typed actions and observations, and an optional server envelope.
- OpenClaw surrounds one model run with durable ingress, routing, shared-session policy, queueing, replay, liveness, compaction, delivery, schedules, and plugins.
- Hermes combines a model-directed CLI loop with route restoration, persisted sessions, verification-on-stop, optional goal judgment, background delegation, and across-run memory or skill mutation.

This recurrence is an **observed architectural pattern**, not evidence that the pattern is optimal. Its educational value is that “who controls the harness?” has no one-word answer: the model chooses local actions while runtime code, configuration, operators, providers, extensions, and evaluators own different boundaries. [C015](../claims/checkpoint-3-taxonomy-method-review.md#c015)

## Friction decisions

### TF-001: keep R1; name lifecycle scale and ingress origin

Pi separates product/session from inner-turn lifecycle. OpenHands adds server, conversation, run, step, and tool-call boundaries. OpenClaw adds gateway, durable update, lane, attempt, schedule, and delivery. Hermes adds process, goal, delegated-child, batch, and background-review boundaries—and even demonstrates that a hook named `on_session_end` may fire at a turn boundary rather than actual session shutdown.

That is recurring resolution loss inside R1, not evidence for several universal lifecycle responsibilities. The proposed rule is to keep R1 and annotate consequential lifecycle claims with:

- **scale:** process/application, service, session, task/run, turn/step, action/tool, background child, or a source-native equivalent;
- **ingress origin:** interactive, message/channel, schedule, heartbeat, batch, editor/API, or background completion.

The vocabulary is extensible; it is not a forced hierarchy. [C002](../claims/checkpoint-3-taxonomy-method-review.md#c002)

### TF-002: keep R2, R3, and R5 distinct

Every case contains a runtime join where model and instruction policy, active call material, visible schemas, and executable capabilities meet. OpenHands provides the important counter-shape: frozen policy, active `View`, and typed tools are separate components before runtime materialization reunites them. This disproves the idea that coupling requires one component while preserving the architectural dependency.

The existing ownership remains useful:

- R2 asks who selects the model, route, role, and behavioral policy.
- R3 asks what instructions, history, state, observations, and capabilities enter this call.
- R5 asks what actions are authorized and executable in the environment.

Joined construction paths should carry multiple labels plus control-owner and lifecycle-stage annotations. Merging the responsibilities would make the analysis easier to file and harder to reason with. [C003](../claims/checkpoint-3-taxonomy-method-review.md#c003)

### TF-003: keep R5 and R6; trace the handoff

The four cases all distinguish, at least conceptually, between performing an action and deciding what evidence reaches the model. Their code placement varies. Pi often implements execution and truncation in one tool. OpenHands uses distinct action, executor, observation, and event types. OpenClaw retains canonical results while creating bounded provider views and recovery rewrites. Hermes inserts transformations, spill stubs, hints, and normalization between execution and the tool-role message.

Future cases should trace the source-native path:

```text
request -> authorization -> execution -> raw result
        -> transformation -> persistence -> model-visible observation
```

Not every system will implement every stage, and one function may own several. R5 remains the primary home of action authorization and environment execution; R6 begins when raw consequences are selected, transformed, or structured as feedback. Browser Use remains the planned falsification case because the current evidence begins primarily with symbolic tool results rather than perception-grounded state. [C004](../claims/checkpoint-3-taxonomy-method-review.md#c004)

### TF-004: treat injection as a cross-cutting dimension

Extensions, hooks, middleware, skills, plugins, rules, providers, and policy callbacks alter many different responsibilities in every reviewed case. “Extensions” is therefore a poor twelfth responsibility: it names how control enters the system, not what architectural outcome is being produced.

For a consequential injection surface, record:

- affected responsibilities;
- lifecycle boundary;
- control owner;
- authority to observe, add, transform, block, or dispatch;
- effect on durable state;
- failure posture;
- default, optional, or deployment-specific activation.

This turns “the system supports plugins” into a tractable trust and control question. [C005](../claims/checkpoint-3-taxonomy-method-review.md#c005)

### TF-005: keep R9 stable, but require separate operational and task contracts

This is the strongest recurring taxonomy problem. Pi, OpenHands, and OpenClaw invest heavily in runtime integrity and recovery while ordinary task acceptance remains absent, optional, or external. Hermes supplies the needed counterexample to a binary description: it combines runtime recovery, a surface- and task-conditioned same-agent verification-on-stop policy, and an optional auxiliary goal judge.

The proposal is to retain the stable R9 identifier but rename it:

> **R9 — Runtime integrity, recovery, and task acceptance**

Every case should then report at least four facets separately:

1. protocol and runtime integrity;
2. operational recovery, replay, cancellation, and escalation;
3. evidence acquisition for checking work;
4. task verification and acceptance, including feedback source, judge independence, and acceptance policy.

R5 continues to own pre-action authorization and environment containment. A mechanism that governs both admission and continuation may legitimately carry R5 and R9 labels.

The ownership rule across adjacent responsibilities is:

- **R4** describes progression mechanics: scheduling, branching, retries, and termination.
- **R6** describes how raw consequences become model-facing evidence.
- **R9** describes the failure, recovery, verification, escalation, and acceptance criteria or policies that govern whether execution may continue or count as acceptable.
- **R10** describes assessment outside the active run.

A retry loop may therefore be R4 plus R9; a test result may be constructed under R6, judged under R9, and later analyzed under R10. Multi-labeling is preferable to pretending the shared mechanism has only one owner.

The main alternative is to create separate top-level responsibilities for operational integrity and task acceptance. That is conceptually clean, but it would introduce ID churn before the deferred perception case or a closed-production case tests the boundary. Leaving R9 unchanged and unstructured is rejected because it repeatedly hid the batch's most consequential negative finding. [C006](../claims/checkpoint-3-taxonomy-method-review.md#c006)

### TF-006: formalize control owner and study-object type

The reviewed cases divide control among more actors than “framework, application, and model.” Depending on the mechanism, effective ownership may sit with runtime/core code, an application, an operator, project or agent instructions, the model, a provider, a channel/platform adapter, an extension, an evaluator, or a user.

Control owner should remain an extensible, multi-value cross-cutting dimension. Cases should distinguish who declares a default from who owns the effective runtime decision. Study-object type should be recorded separately as a concrete product, SDK/platform, framework/substrate, or deployment.

This also explains why LangGraph did not fit the concrete-harness case question. A framework can supply mechanisms while downstream applications choose the prompts, tools, stopping rules, observation policy, and verification defaults that the current case method tries to explain. That is a different research object, not a missing responsibility. [C007](../claims/checkpoint-3-taxonomy-method-review.md#c007)

### TF-007: rename R11 around adaptation; earn the word optimization

Pi and the bounded OpenHands path contain no default completed-run feedback loop that changes future policy. OpenClaw's optional dreaming can promote memory using usage, diversity, and recency signals without a task-outcome objective. Hermes actively mutates memory and skills and curates them by content, correction, usage, and age, again without selecting changes because measured task performance improved.

The proposal is:

> **R11 — Across-run adaptation**

Each mechanism should state what changes, what triggers it, whose signal it uses, who authorizes it, how changes are retained or rolled back, and whether measured outcomes select the change. “Outcome-driven optimization” becomes a stricter subtype that must be demonstrated, not a synonym for persistence, curation, or model-authored updates.

R11 requires an experience, usage, correction, evaluation, or outcome signal to intentionally change future harness behavior. Merely retaining unchanged state remains R7. A manually selected model, prompt, or configuration remains R2 unless an across-run feedback process selects that change. This boundary prevents ordinary persistence from being relabeled adaptation.

The positive OpenClaw and Hermes examples are not safe independent corroboration because their relationship creates a lineage confound, even though no direct port of these particular mechanisms is currently documented. No inspected case demonstrates outcome-driven optimization, so a separate top-level optimization responsibility would presently be an empty promise. [C008](../claims/checkpoint-3-taxonomy-method-review.md#c008)

## Additional cross-cutting annotations

### TF-008: effective configuration population

Hermes shows that “the default at this commit” can mean different things for a missing configuration file, a versionless existing file, a versioned migrated file, an explicit value, and the runtime-resolved effective value. OpenHands adds a related entry-point distinction: a direct `Agent` and the default preset do not activate the same condenser policy.

The proposed rule is narrow. When a material claim uses **default**, record the applicable surface or entry point, activation state, and—where relevant—configuration origin, migration generation, explicit override, and effective runtime value. Configuration population is a cross-cutting version annotation, not another responsibility. Its broader generality remains provisional because Hermes supplies the only full migration example in this batch. [C009](../claims/checkpoint-3-taxonomy-method-review.md#c009)

### TF-009: mechanism-level lineage and independence

The OpenClaw/Hermes relationship cannot be summarized honestly as either “independent systems” or “one is a fork.” Their recorded roots differ, while later Hermes history contains an explicit migration, documented inspiration, a modeled prompt, and a direct port of a specific fix. Other similarities remain unresolved.

Lineage should be recorded per mechanism or finding using values such as direct port, translated compatibility, documented inspiration, shared dependency or source, unresolved similarity, and no known link. “No known link” is not proof of independent development. A cross-case recurrence may contribute to prevalence without contributing equally to independent corroboration. [C010](../claims/checkpoint-3-taxonomy-method-review.md#c010)

### TF-010: observability is not external evaluation

All four cases contain useful operational records, traces, events, cost accounting, tests, or exports. None lets those facilities automatically establish task success or mechanism effectiveness. R10 can remain one responsibility, but future comparisons should report **operational observability** and **external evaluation** separately so a rich trace surface is not scored as validated quality. [C011](../claims/checkpoint-3-taxonomy-method-review.md#c011)

## Proposed responsibility lens after Gate B

Most top-level labels do not change.

| ID | Proposed treatment | Reason |
| --- | --- | --- |
| R1 | Retain; require lifecycle-scale and ingress-origin annotations | Four-case recurrence shows resolution loss, not universal new responsibilities |
| R2 | Retain | Policy selection remains distinct from call materialization |
| R3 | Retain | Active context and visible capability remain distinct from durable state and executable authority |
| R4 | Retain | Scheduling and next-step ownership remained useful in all cases |
| R5 | Retain | Action authority and environment execution remain their own decisions |
| R6 | Retain | Model-visible evidence is not reducible to raw action results |
| R7 | Retain | Durable history and active model context were different in every case |
| R8 | Retain | Delegation availability, scheduling, isolation, and aggregation remain separable from the core loop |
| R9 | Rename and require operational-integrity, recovery, evidence, and task-acceptance facets | A flat R9 repeatedly hid absent or conditional verification |
| R10 | Retain; report observability and external evaluation separately | Rich traces do not prove outcomes |
| R11 | Rename to Across-run adaptation; reserve optimization for measured outcome feedback | Persistence and curation are not optimization |

This is intentionally less dramatic than a new taxonomy. The cases mostly validated the responsibilities and showed how to compare them without flattening important conditions.

## Focused upstream-test policy

The batch has used pinned tests mainly as static design and regression evidence. OpenClaw's bounded attempt did not execute because package-manager setup tried to write into the retained checkout, while Hermes explicitly remained inspect-only and contains a possible double-middleware traversal that static inspection and existing tests do not settle. The Pi and OpenHands packages do not contain sufficiently explicit process evidence to support a reliable four-case execution count. Regardless of that historical count, neither package-manager mechanics nor omission should choose the future method for us.

Checkpoint 3 proposes a **static-first, question-triggered focused-execution policy**. [C012](../claims/checkpoint-3-taxonomy-method-review.md#c012)

### Default

Inspect pinned code, relevant test source, repository-contained documentation, and targeted history. A test's source establishes an encoded expectation or regression invariant. A corrective commit establishes a historical failure class. Neither establishes production frequency, task effectiveness, or that the test passes in the current environment.

### Trigger for execution

A focused upstream test may run without a separate per-command maintainer decision after Gate B only when all of the following hold:

1. static inspection leaves a load-bearing ambiguity;
2. resolving it could materially change a claim, confidence level, taxonomy or method decision, or a consequential account of defaults, authority, integrity, recovery, or persistence;
3. an exact pinned test target can discriminate between plausible explanations;
4. the question, expected outcomes, and claim consequence are recorded before execution;
5. the run is bounded, local, repeatable, and does not require model calls, credentials, paid APIs, live services, or uncontrolled external side effects.

### Execution boundary

- Keep the retained canonical checkout detached, clean, and unchanged.
- Use a disposable writable worktree or copy at the exact approved commit under the authorized reference-materials area.
- Verify the commit and clean baseline before execution and confirm the canonical checkout remains unchanged afterward.
- Respect repository lockfiles and declared toolchain versions; do not upgrade dependencies merely to make a test pass.
- Record OS and architecture, runtime and package-manager versions, exact command and selector, dependency/cache or network use, duration, exit status, and generated modifications.
- Run without user secrets and with least privilege. If safe containment is impractical, report the test as blocked.

### Interpretation

A pass establishes only that the exact target behaved as asserted at the pinned commit in the recorded environment. A failure must first be classified as setup, dependency, nondeterminism, or implementation/test failure. One justified retry after correcting an identified setup problem is permitted; open-ended environment repair is not. A blocked test is a limit, not a negative result about the harness.

Full upstream suites are not routine promotion gates. They are heterogeneous, costly, often service-dependent, and weak evidence for architectural effectiveness. A full suite, custom failure-injection reproduction, model/API call, live-service test, destructive run, or material scope expansion still requires a separately approved objective.

Every future case should say which tests were inspected, executed, skipped, failed, or blocked; why; in what environment; and what changed in the claim ledger. The four reviewed cases do not need retroactive execution merely to make their packages symmetrical.

## Consequences for future cases

Under the maintainer-approved D-013 decision, future implementation cases should:

1. remain control-flow-first and source-native in their narrative;
2. apply R1–R11 afterward as a multi-label diagnostic;
3. identify default, optional, and effective configuration populations;
4. name lifecycle scale, ingress origin, control owner, and injection authority when material;
5. trace action-to-observation stages rather than saying only that a tool returned output;
6. separate runtime integrity, recovery, evidence acquisition, task acceptance, observability, and external evaluation;
7. reserve optimization language for a measured outcome-to-change loop;
8. record lineage per mechanism before treating recurrence as corroboration;
9. use focused test execution only under the policy above.

Framework and substrate studies should use a framework-appropriate question about mechanism, policy affordance, downstream ownership, and constraints. They should not wear the concrete-harness template while repeatedly answering “the application decides.”

## Recommended first synthesis and learning chapter

The strongest first teaching question is:

> **Where Harnesses Put Control: Model-Directed Loops Inside Programmed Execution and Recovery Envelopes**

Suggested subtitle:

> **Why runtime integrity is not task acceptance**

This topic has enough direct implementation evidence to teach a concrete mental model without waiting for another harness. A useful walkthrough is:

```text
ingress -> call construction -> model decision -> action mediation
        -> observation -> persistence/recovery -> task acceptance
        -> external evaluation -> possible across-run adaptation
```

The chapter should compare decisions rather than products. It can explain where each harness puts control, then teach the distinctions that recurred: durable history versus active context; action versus observation; integrity versus acceptance; default versus optional capability; core versus operator/model/provider/extension ownership; and adaptation versus optimization. [C013](../claims/checkpoint-3-taxonomy-method-review.md#c013)

The chapter must visibly preserve what remains open:

- The batch has not tested perception, page-state projection, action grounding, observation loss, or environmental drift; Browser Use is one bounded way to test transfer, not a path to a complete taxonomy by itself.
- The sample remains concentrated in open coding and personal-agent systems.
- Claude Code and other closed production evidence remain absent.
- LangGraph still requires a framework/substrate question.
- Outcome evidence rarely isolates the exact mechanisms at these pins.
- Compaction, verification, delegation, and adaptation remain largely unvalidated inside the reviewed systems.
- OpenClaw/Hermes recurrence is lineage-confounded.
- The batch does not establish saturation, field prevalence, best practice, or independent convergence.

These gaps should shape the next research choice after the maintainer reads the first learning experience. [C014](../claims/checkpoint-3-taxonomy-method-review.md#c014) Browser Use remains the strongest already pinned falsification case for the most obvious environment and observation gap. [C016](../claims/checkpoint-3-taxonomy-method-review.md#c016)

## Alternatives considered

### Split R1 by lifecycle scale

Rejected for now. The scales recur, but their number and boundaries differ. An annotation preserves the distinction without inventing universal top-level layers.

### Merge R2, R3, and R5

Rejected. All four cases join them at runtime, but OpenHands proves they can have separate components, owners, and failure modes. Coupling is exactly why the questions should remain separately visible.

### Add an extensions responsibility

Rejected. Injection changes other responsibilities; it is not one architectural outcome.

### Split R9 into two new top-level IDs

Deferred. Operational integrity and task acceptance deserve separate names, but mandatory facets under a stable R9 capture the current evidence without renumbering the corpus. The split can be reconsidered after perception-grounded and closed-production cases.

### Keep “optimization” in ordinary R11 language

Rejected. No reviewed case demonstrates an outcome-to-change optimization loop, and two cases show adaptation that could be mislabeled improvement.

### Split R10 into top-level observability and evaluation responsibilities

Deferred. The four cases prove that operational records and outcome evaluation must be reported separately, but both still answer how developers understand the harness from outside the active task. Mandatory sublayer reporting preserves that distinction without top-level churn. Reconsider a split if later cases show consistently separate owners, artifacts, and decision contracts that the stable R10 label obscures.

### Require every cited test or full upstream suite to run

Rejected. That makes cost scale with repository test volume, biases comparison toward test-rich systems, and can produce false confidence unrelated to the architectural claim.

### Never execute target tests

Rejected. Static inspection can leave a genuinely load-bearing dynamic ambiguity, and a bounded pinned test can resolve it more cheaply and reliably than prolonged inference.

## Gate B decision

The [independent review and disposition record](checkpoint-3-independent-review.md) confirms the substantive package after one low-severity readable-ledger correction and a focused passing verification. No consequential disagreement remained, so reconciliation was not used. The review did not approve D-013.

The maintainer approved:

1. the stable R1–R11 approach with the R9 and R11 refinements;
2. lifecycle, owner, injection, configuration-population, lineage, and R10 sublayer annotations;
3. the static-first focused-test policy;
4. the proposed first synthesis and learning-chapter direction;
5. Browser Use remaining the explicit post-learning falsification case, without implying that one browser case closes perception or field-coverage gaps.

This decision authorizes the canonical cross-harness synthesis and human-oriented learning Markdown. HTML remains downstream of validated Markdown and another implementation remains blocked until the final learning checkpoint.
