# Where Harnesses Put Control

**Subtitle:** Model-directed loops inside programmed execution and recovery envelopes
**Maturity:** Provisional synthesis — canonical audit and bounded independent content review complete; maintainer learning review pending
**Cycle:** Field landscape, first implementation batch
**Artifact ID:** `field-landscape-synthesis-first-batch-harness-architecture`
**Included cases:** Pi v0.80.6, OpenHands Software Agent SDK v1.35.0, OpenClaw v2026.6.6, Hermes Agent v0.18.2
**Evidence boundary:** Four pinned, maintainer-reviewed open implementations plus already admitted research used only to qualify explicit mechanism questions
**Provenance completeness:** `complete`; synthesis promotion-profile audit passes and every implementation input has its own complete promotion-profile audit
**Claim-evidence ledger:** [First-batch harness architecture](../claims/first-batch-harness-architecture.md)
**Checkpoint basis:** [Approved Checkpoint 3](../cycles/checkpoint-3-taxonomy-and-method-review.md)

## The engineering question

When an agent appears to “decide what to do,” which decisions actually belong to the model, and which belong to the software around it?

That question is more useful than asking whether a harness is autonomous. In all four reviewed cases, the model chooses local actions—call a tool, emit text, continue, or stop—inside an envelope of programmed decisions. Code and configuration decide how work enters, which model and instructions are used, what tools are visible, which proposed effects are authorized, what result is shown back, what persists, how failures recover, and whether a candidate completion is accepted. ([C001](../claims/first-batch-harness-architecture.md#c001), [C002](../claims/first-batch-harness-architecture.md#c002))

This is an observed architecture across four pins, not evidence that it is optimal, universal, or independently invented. Pi and OpenHands are coding-oriented; OpenClaw and Hermes are long-lived personal-agent runtimes; Browser Use, closed production harnesses, and framework/substrate studies remain absent. OpenClaw and Hermes also have explicit migration and influence links, so their recurrence cannot automatically count as independent corroboration. ([C015](../claims/first-batch-harness-architecture.md#c015), [C017](../claims/first-batch-harness-architecture.md#c017))

## A control-contract map

Seven active-system control contracts plus one external-assessment contract provide a compact way to trace the architecture without replacing the approved R1–R11 analytical lens:

| Contract | Engineering question | Typical owners |
| --- | --- | --- |
| Admission | What starts work, under which identity, session, and lifecycle? | channel, CLI, scheduler, gateway, operator |
| Call construction | Which model, instructions, history, state, and capabilities enter this call? | runtime, operator configuration, provider adapter, extensions |
| Action authority | Which model-proposed effects may actually execute? | schemas, policy, approval, hooks, sandbox/backend |
| Observation | Which consequences become evidence for the next model decision? | tool implementation, formatter, context policy, provider projection |
| Continuity | What persists, retries, recovers, branches, compacts, or disappears? | session store, event log, queue, recovery controller |
| Acceptance | What counts as finished, verified, or acceptable? | model stop, deterministic checks, critic, judge, operator, external system |
| Adaptation | What changes future runs, and which signal selects the change? | memory/skill policy, curator, evaluator, operator, optimizer |
| External evaluation | How are trajectories and outcomes assessed across tasks, trials, versions, and costs? | evaluation harness, grader, benchmark, operator |

This eight-part teaching scaffold is not a universal pipeline: stages can be absent, nested, repeated, or implemented together, and external evaluation is ordinarily outside the active run. R1–R11 remain the deeper multi-label diagnosis. ([C016](../claims/first-batch-harness-architecture.md#c016))

## The recurring architecture

### Pi: compact inner loop, product policy outside it

Pi's low-level agent loop streams a model response, executes tool calls, appends results, and repeats. The coding-session layer owns the product behavior around that loop: project instructions and skills, active tools, persistent session trees, compaction, retries, extensions, model configuration, and interaction lifecycle. The model ordinarily stops by returning no further tool calls; the inspected default path has no independent task-success gate. ([Pi C002](../claims/pi-v0.80.6.md#c002), [Pi C009](../claims/pi-v0.80.6.md#c009))

### OpenHands: explicit state and mediation layers

OpenHands separates agent policy, durable conversation state, active model view, typed actions, executors, typed observations, and an optional server envelope. Its ordinary `Conversation.run()` is still model-directed over actions, while deterministic code owns sampling boundaries, dispatch, confirmation, budgets, pending-action completion, recovery, and status. A critic and `/goal` judge exist, but both are optional and neither governs an ordinary run by default. ([OpenHands C005](../claims/openhands-sdk-v1.35.0.md#c005), [OpenHands C012](../claims/openhands-sdk-v1.35.0.md#c012))

### OpenClaw: one model run inside a long-lived delivery runtime

The reviewed OpenClaw path begins before the model and ends after it. Telegram ingress, durable queueing, routing, shared-session policy, channel and session lanes, embedded execution, transcript persistence, retries, compaction recovery, liveness, and final delivery all surround the model-directed loop. These layers strongly protect operational continuity. They do not, on the ordinary path, independently prove that the task is semantically correct. ([OpenClaw C005](../claims/openclaw-v2026.6.6.md#c005), [OpenClaw C007](../claims/openclaw-v2026.6.6.md#c007), [OpenClaw C016](../claims/openclaw-v2026.6.6.md#c016))

### Hermes: conditioned verification and across-run mutation

Hermes's classic CLI path combines a model/tool loop with provider and credential recovery, budgets, compression, validation, persistence ordering, optional verification-on-stop, optional persistent goals, plugins, delegation, and background adaptation. It is the strongest counterexample to saying “these harnesses have no verification”: some coding-like completions can be nudged to obtain fresh execution evidence, and `/goal` adds an auxiliary judge. But activation depends on surface and configuration history, the nudge is not an independent test executor, and the judge is optional and unevaluated here. ([Hermes C005](../claims/hermes-agent-v0.18.2.md#c005), [Hermes C011](../claims/hermes-agent-v0.18.2.md#c011), [Hermes C012](../claims/hermes-agent-v0.18.2.md#c012))

## Comparison by decision, not product

| Decision | Pi | OpenHands SDK | OpenClaw | Hermes |
| --- | --- | --- | --- | --- |
| Inner model-directed unit | provider response and tool batch | agent step over active conversation view | embedded-agent attempt within channel/session runtime | conversation-loop iteration within classic CLI turn |
| Programmed emphasis | prompt/tools, queues, persistence, compaction, retry, extensions | typed actions/observations, event integrity, active view, recovery | durable ingress, routing, replay, liveness, delivery | route recovery, persistence, conditional verification, goals, adaptation |
| Ordinary completion | no tool calls or queued work | assistant content or finish action | valid embedded completion and delivery path | text completion, sometimes subject to verification-on-stop |
| Additional task check | extension-defined | optional critic or `/goal` judge | optional finalizer and external QA | conditioned same-agent evidence nudge or optional goal judge |
| Durable state vs active context | append-only tree vs compacted projection | event tree vs active `View`; the default preset adds condensation | registry/transcript/queue/files vs provider projection | SQLite and memory vs cached prompt and compacted projection |
| Across-run adaptation | not observed in bounded default path | not observed in bounded SDK path | optional dreaming, disabled by default | background memory/skill review and curation |

The table deliberately avoids a single “strong/weak” score. A system can be strong in replay and weak in semantic acceptance, or rich in optional mechanisms while keeping the ordinary path simple. Flattening those choices destroys the tradeoffs the comparison is meant to expose.

## Finding 1: model-directed does not mean model-controlled

The model has consequential agency in every case: it chooses tool calls and arguments and whether to emit a candidate completion. It does not own the full run.

Pi code controls queue insertion, tool-batch scheduling, cancellation, and provider failure normalization. OpenHands code controls typed action dispatch, confirmation, locks, conversation state, and run status. OpenClaw distributes control across channel ingress, routing, queue policy, session and global lanes, context engines, tool policy, providers, and delivery. Hermes adds operator and migration-sensitive configuration, provider/credential rotation, middleware, verification policy, and optional goal control. Extensions in all four can move authority again. ([C002](../claims/first-batch-harness-architecture.md#c002), [C008](../claims/first-batch-harness-architecture.md#c008))

The practical consequence is that “who decides?” needs a stage and an owner. The model may select an action while a schema decides whether it is representable, an approval policy decides whether it may execute, a tool backend decides where it runs, and a formatter decides what evidence returns. Calling the entire path autonomous hides the most important design work.

## Finding 2: stored is not visible

Every reviewed case separates durable state from the material entering the next model call. ([C003](../claims/first-batch-harness-architecture.md#c003))

- Pi keeps an append-only session tree while projecting the active branch, a compaction summary, and a retained tail.
- OpenHands keeps an event tree while an active, model-convertible `View` follows one branch and can apply condensation when the selected agent configuration enables it.
- OpenClaw distributes continuity across a session registry, JSONL transcripts, ingress queues, workspace files, memory, and process-local attempt state; provider-facing tool results may be bounded without rewriting canonical history, except for an explicit last-resort recovery path.
- Hermes persists messages in SQLite and memory files while using a cached system prompt, request-local additions, and compression-dependent active history.

This is not merely a storage detail. If information is durable but not admitted to the next call, it cannot directly influence the model. If a summary replaces raw interaction in active context, preserving the original elsewhere helps audit and recovery but does not guarantee semantic fidelity for the model.

Summarization compaction is therefore best classified as a **contested implementation practice** in this corpus. It recurs in the four cases as a response to finite context, while recent preprints report loss, latency, and variability under other models and tasks. Those papers do not directly test the four pins, so the evidence supports neither “compaction is safe” nor “compaction is an anti-pattern.” ([C012](../claims/first-batch-harness-architecture.md#c012))

## Finding 3: the result is not yet the observation

The reviewed symbolic tool paths repeatedly expose at least four questions:

1. What action did the model request?
2. What action, after validation and policy, was authorized?
3. What happened in the environment?
4. What representation reached the next model call?

Pi validates calls, allows trusted hooks, executes tools, and deliberately bounds file and shell evidence. OpenHands normalizes model calls into typed actions, passes them through analyzer/confirmation/hooks, executes them, and converts typed observations into model messages. OpenClaw distinguishes canonical transcript results, provider-bounded projections, and recovery-time rewrites. Hermes passes requests through schema filtering, middleware, approvals, guardrails, execution, result transformation, spill/hint handling, and observation insertion. ([C004](../claims/first-batch-harness-architecture.md#c004))

The distinction does not require separate components. Pi often implements execution and shaping in one tool; OpenHands makes the types more explicit. The analytical value is in the failure modes: authorization can be bypassed, raw output can be truncated, stale environment state can be hidden, a canonical record can differ from the provider projection, and trusted extensions can mutate data after an earlier validation boundary.

SWE-agent's historical experiments support the general importance of agent-computer interface design under their coding protocol. They do not show that typed actions, a particular truncation policy, or any interface in these four systems improves modern outcomes. Browser and GUI perception remain a major untested transfer boundary. ([C011](../claims/first-batch-harness-architecture.md#c011), [C017](../claims/first-batch-harness-architecture.md#c017))

## Finding 4: runtime integrity is not task acceptance

The most important distinction in the batch is between keeping the run valid and deciding whether its work is correct. Every ordinary path has a completion policy, but that policy may do no more than accept a model-authored stop. ([C005](../claims/first-batch-harness-architecture.md#c005))

**Protocol and runtime integrity** includes paired tool calls and results, valid state transitions, bounded tool arguments, locks, cancellation, replay, persistence ordering, timeouts, and recovery from malformed or overlong context.

**Operational recovery** includes retry, resume, compaction recovery, stuck detection, dead-letter handling, crash restoration, provider fallback, and delivery repair.

**Task acceptance** names the policy that lets a candidate outcome stop or proceed. Its weakest form accepts model-authored completion. A stronger, evidence-backed contract can require executable tests, environment assertions, a separate critic, a judge, human approval, or domain-specific checks.

**External evaluation** then asks how the system performs across tasks, trajectories, models, versions, costs, and repeated trials. It is outside the ordinary run even when it consumes the same events.

Pi's default loop can recover from provider and context failures without independently judging task success. OpenHands has extensive event and lifecycle integrity while its critic and goal judge are optional. OpenClaw protects durable ingress through delivery while semantic finalization remains optional or external. Hermes adds conditioned verification and an optional goal judge, but neither becomes universal proof of correctness. Observability is extensive in all four and must not be mistaken for evaluation. ([C009](../claims/first-batch-harness-architecture.md#c009))

The external evidence points in the same direction without validating these exact mechanisms. Kamoi and collaborators found reliable external feedback more credible than ungrounded intrinsic self-correction in the literature they reviewed. Anthropic's production guidance separates the agent harness from the evaluation harness and distinguishes trajectory from outcome. Applicability still depends on task observability, judge independence, model version, and the quality of the acceptance signal. ([C006](../claims/first-batch-harness-architecture.md#c006))

One admitted operational result comes from OpenHands: its authors report a 61% reduction in system-attributable errors for V1 versus V0 during a 15-day parallel rollout and low persistence/replay overhead. That supports the redesign as a bundle under its deployment. It does not isolate the causal contribution of event sourcing, co-location, typed actions, recovery, or another individual mechanism. ([C013](../claims/first-batch-harness-architecture.md#c013))

## Finding 5: available is not default

Platform repositories make it easy to describe everything that can be configured as though an ordinary run uses it. The four cases show why this is unsafe. ([C007](../claims/first-batch-harness-architecture.md#c007))

- Pi provides delegation through an optional extension and assigns containment outside its core loop or to extensions.
- OpenHands's direct `Agent` has no condenser, while a default preset adds one; critics, goals, delegation, and container workspaces are optional.
- OpenClaw sandboxing defaults off, dreaming defaults off, and hooks affect only installed deployments.
- Hermes verification-on-stop can differ between a missing fresh config, a versionless existing config, a migrated config, and an explicit runtime value; `/goal` remains optional, while background review and curation have their own defaults.

A material default claim therefore needs a population: version, entry point or surface, activation state, configuration origin, migration generation when relevant, and effective runtime value. “Supports a critic” is a capability statement. “An ordinary run is accepted by a critic” is a behavior statement. They require different evidence.

## Finding 6: extensions are control injection, not a module

Pi extensions can alter prompts, tools, observations, events, state, rendering, and delegation. OpenHands plugins, hooks, rules, skills, profiles, MCP endpoints, and agent definitions enter several layers. OpenClaw hooks span model selection through delivery and environment. Hermes middleware and plugins can affect requests, context, approval, execution, results, verification, sessions, children, and gateway events. ([C008](../claims/first-batch-harness-architecture.md#c008))

The useful comparison is not whether a harness “has plugins.” It is:

- where the injection occurs;
- who may install or activate it;
- what authority it receives;
- whether it runs before or after an irreversible effect;
- whether it can block, transform, or only observe;
- how failure is handled;
- whether its changes persist;
- and whether its exact version is recoverable.

Extensibility can let one core support different products, but that reuse benefit is not measured here. It can also move authority past earlier validation boundaries or make a deployment impossible to reconstruct from core state alone. The presence of hooks is not evidence of safety, correctness, or outcome benefit.

## Finding 7: adaptation is not optimization

OpenClaw and Hermes both change future artifacts across runs. OpenClaw's optional dreaming promotes memory using recall, diversity, recency, and contamination signals. Hermes can run background review that updates memory or skills from conversation content and corrections, and its curator uses usage and recency. Neither inspected path measures task outcomes and selects changes because they improved those outcomes. ([C010](../claims/first-batch-harness-architecture.md#c010))

This is **across-run adaptation**. It may be useful; it may also preserve errors, preferences, or model-authored interpretations. Without an outcome objective, comparison baseline, selection rule, and downstream measurement, calling it optimization or self-improvement would import a benefit the evidence does not establish.

MemoryAgentBench supplies a related negative qualification: its authors report that no evaluated memory method mastered all tested retrieval, test-time learning, long-range understanding, and conflict-resolution or selective-forgetting competencies. It does not test OpenClaw dreaming or Hermes background review. It reinforces the narrower point that changing or retaining memory artifacts does not by itself establish memory competence. ([C010](../claims/first-batch-harness-architecture.md#c010))

Pi and OpenHands supply bounded negative cases: no automatic outcome-to-policy bridge was found in the inspected paths. That does not prove absence from every extension, hosted deployment, or future version.

## Delegation: a useful caution about architectural sophistication

All four repositories can express delegation, but availability does not establish benefit or epistemic independence. Pi and OpenHands implement delegation through optional tools or extensions; OpenClaw and Hermes additionally define child lifecycle, routing, and policy mechanisms. A child returning text is not automatically an independent verifier, and shared models, context, prompts, workspaces, or lineage can correlate errors.

BenchAgent's controlled internal comparison reports that five of six evaluated multi-agent workflows trailed a matched single-agent anchor, while a separately evaluated Claude-Code-style runtime performed strongly under a different protocol. The correct inference is not “subagents hurt.” It is that role count alone explains little: decomposition, state isolation, artifacts, verification, aggregation, model budget, and protocol all matter. ([C014](../claims/first-batch-harness-architecture.md#c014))

## Dependence and lineage

Recurrence is useful evidence that a design is used in the observed implementations. It is not automatically evidence that separate teams independently discovered the same optimum.

Hermes and OpenClaw have distinct recorded repository roots, followed by an explicit migration path, a named OpenClaw-inspired permission change, an orchestrator prompt modeled on an OpenClaw helper, and a named port of a streaming fix. These facts establish selective mechanism-level influence and translation, not whole-repository fork descent. They also mean similar mechanisms must be checked individually before being counted as independent recurrence. No known link is not proof of independence. ([C015](../claims/first-batch-harness-architecture.md#c015))

## Implications for harness builders

The evidence supports questions, not a universal recipe:

1. **Locate model authority precisely.** Which choices are genuinely delegated to the model, and which remain deterministic?
2. **Trace the effective call.** What instructions, state, and capabilities are visible on this exact surface and configuration population?
3. **Separate proposal from effect.** Which policy layers sit between a model request and an environment mutation?
4. **Treat observations as designed evidence.** What was omitted, summarized, truncated, normalized, or rewritten before the model saw it?
5. **Name every durable boundary.** Which state survives a call, turn, process crash, session, or deployment—and which of it re-enters context?
6. **Write an acceptance contract.** What evidence must exist before the harness treats a candidate completion as correct enough?
7. **Separate run health from outcome quality.** Recovery, tests of harness code, traces, and benchmark evaluation answer different questions.
8. **Audit optionality.** What is available, enabled, inherited, migrated, or effective at runtime?
9. **Describe injected authority.** Where can extensions or providers change behavior, and what happens when they fail?
10. **Demand an outcome signal before saying optimization.** What measured result selects the future change?

These recommendations are the practical use of the seven active-system control contracts and the external-evaluation contract, not claims that every harness should share one internal architecture. ([C016](../claims/first-batch-harness-architecture.md#c016))

## What remains unknowable

The four cases do not establish field prevalence, best practice, or taxonomy saturation. They do not include a perception-grounded browser/GUI deep dive, a closed-production harness, or a framework/substrate study. Mechanism-isolating outcome evidence is sparse; judge quality, repeated-compaction retention, extension failure behavior, and across-run adaptation benefit remain largely unmeasured. One Browser Use case can challenge the symbolic R5/R6 model but cannot close field coverage by itself. ([C017](../claims/first-batch-harness-architecture.md#c017))

The original Cycle 1 landscape also remains provisionally promoted under reconstructed provenance. Its breadth, balance, absence-of-evidence, marginal-information, and saturation limits continue to travel into this synthesis. This document relies on the later complete case packages for its implementation findings rather than treating the reconstructed landscape as proof of prevalence.

## Source and claim audit

The synthesis declares 17 material claims in one canonical ledger. Its implementation evidence comes from four exact pins whose case audits already pass. Ten already admitted research or selection records provide targeted qualification: SWE-agent on interface relevance; Kamoi et al. on feedback; Anthropic on evaluation structure; MemoryAgentBench on memory competencies; two compaction preprints; the OpenHands technical report; BenchAgent; and the two selection records that expose browser and framework gaps.

The generated [synthesis source and claim-evidence audit](../provenance/first-batch-synthesis-audit.md) passes under the `provisional-promotion` profile at `complete` provenance: 14 referenced sources, 17 declarations, 65 exact mappings, 65 primary verifications, zero blocking errors, and two resolved selection-depth warnings. Source back-references, the computed prose-to-ledger attestation, and review scope are present. No subagent report is treated as independent evidence or primary verification. The [bounded independent review and Codex dispositions](first-batch-harness-architecture-review.md) complete Markdown content validation; maintainer reading feedback remains the test of explanatory value.
