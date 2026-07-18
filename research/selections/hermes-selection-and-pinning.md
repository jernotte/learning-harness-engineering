# Hermes Selection and Pinning Amendment

**Status:** Approved selection amendment; Hermes analysis has not begun
**Cycle:** `field-landscape`
**Artifact ID:** `field-landscape-selection-hermes-pinning`
**Decision:** D-011
**Prepared and approved:** 2026-07-18
**Evidence date:** 2026-07-18
**Provenance completeness:** `complete` for the bounded selection pass
**Source audit:** [`hermes-selection-audit.md`](../provenance/hermes-selection-audit.md)
**Claim ledger:** [`hermes-selection-and-pinning.md`](../claims/hermes-selection-and-pinning.md)

## Decision in one paragraph

Hermes Agent is suitable for the existing concrete-harness case method and is selected as the final implementation before Checkpoint 3. The immutable boundary is `NousResearch/hermes-agent`, annotated tag `v2026.7.7.2`, dereferenced commit `9de9c25f620ff7f1ce0fd5457d596052d5159596`, package version `0.18.2`. The repository has its own history root, but its later history contains an explicit OpenClaw migration layer, an OpenClaw-inspired permissions change, and a named port of an OpenClaw Telegram fix. The future comparison must therefore separate data/configuration translation, selective influence, independently implemented behavior, and unresolved similarity; it must not call recurrence independent convergence. ([C001](../claims/hermes-selection-and-pinning.md#c001), [C003](../claims/hermes-selection-and-pinning.md#c003), [C004](../claims/hermes-selection-and-pinning.md#c004), [C005](../claims/hermes-selection-and-pinning.md#c005))

This amendment deliberately trades Browser Use's stronger perception-grounded R5/R6 contrast for a tightly teachable OpenClaw/Hermes comparison and a faster transition into synthesis. Browser Use is deferred until after the first learning-oriented synthesis, not removed. Checkpoint 3 convenes immediately after the reviewed Hermes case, with no additional implementation inserted first. ([C008](../claims/hermes-selection-and-pinning.md#c008), [C010](../claims/hermes-selection-and-pinning.md#c010))

## Exact implementation boundary

| Field | Selected boundary |
| --- | --- |
| Canonical repository | `https://github.com/NousResearch/hermes-agent.git` |
| Repository classification | Concrete Python agent harness/runtime, not only a framework or model |
| Annotated tag | `v2026.7.7.2` |
| Tag object | `b7751df34688835a108e0d630f3495fc11f3df79` |
| Dereferenced commit | `9de9c25f620ff7f1ce0fd5457d596052d5159596` |
| Package version | `0.18.2` |
| Release publication | 2026-07-08; release identifier represents 2026-07-07 |
| Local retained checkout | `/Users/jernotte/dev/reference-materials/research/hermes-agent-v2026.7.7.2` |
| Evidence cutoff | Pinned repository, contained documentation, tests, and reachable history as of 2026-07-18 |

The tagged tree contains a shared `AIAgent` runtime reached through interactive CLI, messaging gateway, ACP, batch, API, and library entry points. It also contains prompt/provider/tool machinery, session persistence, cron, plugins, skills, platform adapters, documentation, and tests. That is sufficient to support a source-native, control-flow-first case comparable to Pi, OpenHands SDK, and OpenClaw. It does not establish that every packaged entry point or optional subsystem is ordinary behavior. ([C002](../claims/hermes-selection-and-pinning.md#c002))

The GitHub release object reports `immutable: false`; the future case must use the dereferenced commit, not trust a moving release page or default branch. The local tag contains an SSH signature block, but authenticity was not independently verified because no allowed-signers trust file was configured. Pinning rests on the observed public tag object and exact commit hash, not on a signature-verification claim.

## What the OpenClaw relationship actually is

### What is directly established

- Hermes begins at repository root `21d80ca68346dfdb8d3556015a723a9217f8566f` on 2025-07-22. The reviewed OpenClaw repository begins at a different root, `f6dd362d39b8e30bd79ef7560aab9575712ccc11`, on 2025-11-24. The histories do not support whole-repository fork or direct Git descent, and Hermes's root predates OpenClaw's recorded root. ([C003](../claims/hermes-selection-and-pinning.md#c003))
- Hermes added `hermes claw migrate` in commit `d53035ad821f7ba80c9f74637d267064837cb8d3` on 2026-03-12. The pinned migration maps persona, memory, user data, skills, model/provider configuration, behavior settings, session-reset policy, MCP, messaging, approvals, browser settings, secrets, and other operator state into Hermes representations. Items without direct equivalents—including heartbeat files, cron jobs, plugins, hooks, multi-agent lists, and channel bindings—are archived for manual handling. ([C003](../claims/hermes-selection-and-pinning.md#c003))
- Hermes history explicitly labels a permissions change as inspired by OpenClaw v2026.3.7 and a later Telegram change as a port of `openclaw/openclaw#72038`. These are concrete examples of selective influence or implementation transfer after Hermes already existed. ([C004](../claims/hermes-selection-and-pinning.md#c004))

### What those facts do not establish

They do not establish a shared codebase, broad architectural inheritance, independent convergence, or the provenance of every analogous prompt, tool, memory, session, gateway, or lifecycle mechanism. Migration support primarily proves that Hermes understands and translates selected OpenClaw user/configuration state. Two explicit ports prove some later influence, not the scope of all influence. A future case must inspect each consequential comparison separately. ([C005](../claims/hermes-selection-and-pinning.md#c005))

The legitimate comparison class is therefore **separately rooted repositories with later migration compatibility and selective documented influence**. “Lineage comparison” is useful shorthand only if it retains that qualification.

## Bounded adoption assessment

The evidence supports substantial repository attention and unusually high development activity; it does not support a dependable count of users, production deployments, dependents, maintainers, or team members.

As of 2026-07-18, GitHub's repository API reported 216,532 stars, 40,588 forks, 836 subscribers, and 23,538 open issues, with Nous Research as the organization. Those are dated platform counters and organizational metadata—not measures of quality, effectiveness, or active adoption. ([C006](../claims/hermes-selection-and-pinning.md#c006))

At the selected commit, the reachable repository history contains 14,857 commits, 2,014 distinct `git shortlog -sne` author identities, 3,953 commits at or after 2026-06-08T00:00:00Z, 11,391 at or after 2026-04-08T00:00:00Z, and 21 version tags from `v2026.3.12` through `v2026.7.7.2`. The date-window counts use full-history `git rev-list --since-as-filter` with explicit UTC boundaries rather than Git's pruning-oriented `--since`. Author identities can contain aliases or automation, and release tags are not users. The counts establish project continuity and activity at the pin, nothing more. ([C007](../claims/hermes-selection-and-pinning.md#c007))

The project also ships documented migration from OpenClaw and a broad set of platform and tool integrations. These demonstrate maintained compatibility surfaces, not how many people use them. No independently supportable user, deployment, dependent-package, or outcome evidence was found in this bounded pass.

## Why Hermes earns the final pre-Checkpoint-3 slot

Hermes is not the highest-contrast next case. Browser Use remains better for perception-grounded action, page-state projection, environmental drift, and the unresolved R5/R6 boundary. Hermes instead offers three immediate values:

1. It is a current, concrete, active harness with a clean immutable boundary and repository-contained architecture material.
2. Its explicit OpenClaw migration and selective ports make it possible to teach a difficult but practical distinction: recurrence may arise from translation, borrowing, compatibility pressure, independent implementation, or shared external constraints.
3. It exposes an unusually explicit self-improvement claim and skill/memory surface that may sharpen TF-007 and R11—without permitting the selection pass to assume that the implementation optimizes outcomes or works as claimed.

The maintainer prioritizes beginning the learning phase after one more implementation. Under that objective, Hermes's comparative and teaching value outweighs Browser Use's greater architectural breadth for this one slot. The cost remains visible: the first synthesis will still lack a reviewed perception-heavy browser case, and no R5/R6 conclusion may be presented as broadly tested. ([C008](../claims/hermes-selection-and-pinning.md#c008))

## Responsibility-coverage hypothesis

This is a selection hypothesis, not an implementation finding.

| Responsibility | Expected Hermes test | Comparison value before analysis | Confidence |
| --- | --- | --- | --- |
| R1 lifecycle and ingress | CLI, gateway, ACP, batch/API, cron | Compare long-lived ingress and lifecycle scales with OpenClaw | likely |
| R2 model and instruction policy | provider resolution, configuration, prompt policy | Test whether similar operational scope produces different policy ownership | likely |
| R3 active context and capability construction | prompt builder, skills, context/memory plugins, toolsets | Test translated versus native context/capability choices | likely |
| R4 control flow and execution | `AIAgent` conversation path | Concrete loop suitable for standalone tracing | likely |
| R5 action and environment mediation | tool registry and terminal/browser/MCP backends | Compare policy and backend allocation; browser perception remains secondary | likely |
| R6 observation and feedback construction | tool results, gateway delivery, model-visible feedback | Expected, but the important boundaries are unverified | uncertain |
| R7 durable state and persistence | SQLite/session, memory, gateway state | Strong comparison candidate, especially around migrated state | likely |
| R8 decomposition and coordination | delegate tool, profiles, gateway/platform routing | Presence and default use remain unknown | uncertain |
| R9 verification, recovery, and control | approvals, sandbox/backends, retries/tests | Mechanism presence and default behavior remain unknown | uncertain |
| R10 observability and evaluation | trajectories, tests, batch runner | External evaluation and ordinary-path use remain unknown | uncertain |
| R11 adaptation and optimization | advertised skill creation/improvement and memory mechanisms | High-value falsification opportunity for adaptation-versus-optimization | uncertain |

Deferring Browser Use leaves the perception-heavy R5/R6 cell materially weak. Hermes should not be used to fill it by pointing to an optional browser tool.

## Recommended future case question

The initial question presumed more inheritance than the selection evidence supports. The better question is:

> How does Hermes Agent v0.18.2 connect models to users and environments, and—only where pinned evidence supports comparison—which OpenClaw concepts are translated, selectively borrowed, deliberately unmapped, or independently implemented? What tradeoffs follow from those choices?

The future artifact must remain a standalone Hermes case organized in Hermes's own vocabulary and traced through its own production path. OpenClaw supplies targeted comparison questions, not a template to project onto Hermes. ([C009](../claims/hermes-selection-and-pinning.md#c009))

### Scope risks to settle before deep analysis

- Choose one representative production entry path rather than cataloguing every CLI, gateway, ACP, batch, and API surface.
- Distinguish default runtime behavior from plugins, profiles, optional skills, providers, and external services.
- Treat the migration layer as translation evidence; do not infer runtime equivalence from field mappings.
- Bound the large repository and test surface in a written scope artifact before tracing.
- Inspect explicit OpenClaw references and candidate similarities separately, including counterexamples and unmapped concepts.
- Keep the package's “self-improving” description as a source claim until code and outcome evidence establish what actually adapts and what feedback drives it.

## Approved D-011 tradeoff and transition

D-011 amends only D-010's immediate order and Checkpoint 3 trigger. D-010's rolling criteria remain the decision standard, including falsification, evidence readiness, diversity, cost, lineage risk, and adoption last. The maintainer consciously accepts lower immediate breadth in exchange for comparative-teaching value and a bounded transition into learning-oriented work.

After the Hermes case:

1. The maintainer reviews the standalone Hermes artifact and its bounded OpenClaw comparisons.
2. Checkpoint 3 convenes immediately to consolidate taxonomy friction, decide the target-test policy, and assess the case method.
3. The first cross-harness synthesis compares reviewed mechanisms, tradeoffs, contradictions, and evidence limits.
4. Human-oriented learning material derives from that reviewed synthesis through architectural explanations, decision maps, source-native-to-responsibility vocabulary, industry-versus-research comparisons, negative findings, open questions, and design exercises.
5. Browser Use and other contrast cases reopen later when they answer explicit gaps, beginning with perception-grounded R5/R6 evidence.

No synthesis or learning artifact was created in this pass. No case beyond Hermes may begin before Checkpoint 3. ([C010](../claims/hermes-selection-and-pinning.md#c010))

## Limits and stopping boundary

- This pass established identity, pinning, selection suitability, bounded relationship evidence, and dated repository/activity signals only.
- It did not trace Hermes's full control flow, prompts, tools, state transitions, memory behavior, skill evolution, evaluation, or default configuration.
- It did not compare Hermes and OpenClaw mechanism by mechanism.
- It did not establish adoption, effectiveness, quality, independent convergence, or broad code lineage.
- The Cycle 1 landscape remains reconstructed; Hermes is newly admitted only at selection depth.
- The canonical taxonomy remains unchanged.

The next authorized action is a **scope-first Hermes case-study goal at the exact pin above**. That goal must be separately approved before analysis begins.
