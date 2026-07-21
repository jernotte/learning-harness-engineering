# Awesome Catalog Direct-Screen Calibration — `awesome-screen-core-04`

**Status:** Complete; awaiting maintainer review

**Authority:** V2-D011, approved 2026-07-20

**Frozen membership:** `awesome-screening-plan.json` at commit
`3c66817a1f7a43adf7492451f859c501f1dfee7c`, SHA-256
`8ce00b2a284a2f789972f3322586497ff0450b734d3cf2d3ad8aec5d8f0169fc`

**Native external-interaction window:** `2026-07-21T00:58:06Z` through
`2026-07-21T01:04:23Z`

## Boundary and accounting

The primary agent directly interacted with the exact 20 registered URLs. The
native capture contains 34 `source_opened` events but exactly 20 unique
canonical requested URLs and 20 unique source IDs. Fourteen additional opens
were bounded same-literal-URL recoveries: Langfuse, Syncause/debug-skill,
LangGraph HITL, AI Harness Scorecard, Inspect AI, the Digital Applied article,
Beyond Permission Prompts, Plan-and-Act, Autonomous Context Compression,
agent-device, the LangChain authorization article, TencentDB-Agent-Memory,
Evaluating Skills, and Weave once each. The retries recovered omitted or
insufficient direct-page bodies where possible; LangGraph remained a redirect
shell, AI Harness Scorecard remained a 404, and Beyond Permission Prompts
remained rejected by the safe-open transport.

No query, search-result page, manual redirect traversal, second-hop link,
bibliography, PDF, destination repository file, implementation code, or
unregistered URL was opened. Automatic redirects and URL normalization remained
transport behavior rather than manually traversed destinations. The package
contains no `search` or `result_returned` event. No completed core-01, core-02,
or core-03 destination was reopened, and all later catalog batches remain
unopened.

This is a structural screen, not evidence admission. A proposed `read_only`
disposition means the direct page was useful only for identity, scope,
relevance, or evidence-posture calibration. It does not promote a finding,
adopt a catalog category, approve a topic, or authorize deeper reading. The
baseline lineage notice applies to every row: catalog membership is a shared
curator discovery path, not independent corroboration, and cross-URL aliases or
destination-source independence remain unassessed except where the direct page
exposed a redirect, recurrence, or scope mismatch.

## Screening register

| # | Frozen family, source, occurrence, and catalog context | Requested and observed identity; transport and substantive inspectability | Exact surface; visible version versus actual pin; repository depth | Actual source form; relevance and evidence posture | Lineage, catalog correction, schema friction, and disposition |
| --- | --- | --- | --- | --- | --- |
| 1 | `awesome-family-82fcf33f253d184e` / `auto-source-82fcf33f253d184e`; `awesome-occ-a73eb84f68c7d926`; Task Runners & Orchestration | Requested and observed [OpenAI Agents SDK](https://github.com/openai/openai-agents-python); accessible and substantively inspectable | Top-level repository/README; `main`, 1,754 commits and visible `v0.18.3` dated 2026-07-17; no inspected commit or release pin; `repository_shallow`, `live_unpinned` | Framework project for multi-agent workflows covering agents, tools, handoffs, guardrails, human intervention, sessions, tracing, and realtime behavior. Capabilities remain project descriptions. | Orchestration placement is plausible but narrower than the stated runtime and control surface. Proposed `read_only`. |
| 2 | `awesome-family-96fed04bf2b61d5a` / `auto-source-96fed04bf2b61d5a`; `awesome-occ-b42b5fc2c9132327`; Verification & CI Integration | Requested `https://blog.langchain.com/agent-evaluation-readiness-checklist`; automatically observed [the current article route](https://www.langchain.com/blog/agent-evaluation-readiness-checklist); accessible and substantively inspectable | Direct practitioner/vendor article by Victor Moreira, dated 2026-03-27; no immutable content pin; `live_unpinned` | Checklist covering trace capture, success criteria, capability and regression evaluation, datasets, graders, isolation, production readiness, and CI. It is an article and method checklist, not a benchmark. | Material form correction from `benchmark_or_evaluation`; CI is one downstream use within a broader evaluation-readiness method. Proposed `read_only`. |
| 3 | `awesome-family-a5d406dab37933d6` / `auto-source-a5d406dab37933d6`; `awesome-occ-835cc3f17d5fa365`; Observability & Tracing | Requested and observed [Langfuse](https://github.com/langfuse/langfuse); accessible and substantively inspectable after one same-URL recovery | Top-level repository/README; `main`, 8,026 commits visible, no inspected commit or release pin; `repository_shallow`, `live_unpinned` | Broad LLM-engineering platform project spanning observability, prompt management, evaluation, datasets, playgrounds, APIs, and cloud or self-hosted deployment. Capabilities remain project descriptions. | Observability placement is plausible but too narrow for the described platform. Proposed `read_only`. |
| 4 | `awesome-family-38cbf4cf3362b5b3` / `auto-source-38cbf4cf3362b5b3`; `awesome-occ-631096934e487a43`; Debugging & Developer Experience | Requested and observed [Syncause/debug-skill](https://github.com/syncause/debug-skill); accessible and substantively inspectable after one same-URL recovery | Top-level repository/README; `main`, 33 commits and no visible releases; no inspected commit pin; `repository_shallow`, `live_unpinned` | Skill plus MCP dependency describing evidence-based debugging through reproduction, runtime facts and traces, citation, repair, and cross-client installation. Assertions remain project-reported. | Debugging placement is plausible; skills, MCP, observability, and evidence-workflow design are also central. Proposed `read_only`. |
| 5 | `awesome-family-04f0a9647deb851b` / `auto-source-04f0a9647deb851b`; `awesome-occ-7ffb9fdc841822b8`; Human-in-the-Loop | Requested [LangGraph HITL concepts](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop); both exact-URL attempts returned only an automatic trailing-slash redirect shell | No substantive documentation, mechanism, ownership detail, version, or pin was inspectable; inspection extent `none` | Actual source content, relevance, and evidence posture remain unestablished within the authorized boundary. | No manual redirect traversal or alternate route was used. Proposed `excluded`. |
| 6 | `awesome-family-321ceef539b977c0` / `auto-source-321ceef539b977c0`; `awesome-occ-e832f3d4f31d8d46`; Generators & Meta-Harnesses | Requested and observed [harness-evolver](https://github.com/raphaelchristi/harness-evolver); accessible and substantively inspectable | Top-level repository/README; `main`, 333 commits and visible `v6.4.2` dated 2026-04-04; no inspected commit or release pin; `repository_shallow`, `live_unpinned` | Project claiming automated evolution of prompts, routing, tools, and architecture through isolated worktrees, evaluation, gating, selection, and learning loops. Reported score changes remain unverified project results. | Meta-harness placement is plausible, while evaluation, safe mutation, observation, and deployment are also material. Proposed `read_only`. |
| 7 | `awesome-family-e593782dc9320b43` / `auto-source-e593782dc9320b43`; `awesome-occ-3ee9f6573aea4235`; Security, Sandbox & Permissions | Requested [AI Harness Scorecard](https://github.com/anthropics/ai-harness-scorecard); both exact-URL attempts returned GitHub 404 | No repository body, README, ownership basis, version, or pin was inspectable; inspection extent `none` | Actual source identity, content, relevance, and evidence posture remain unestablished within the authorized boundary. | No owner query, search, alternate repository, or second hop was used. Proposed `excluded`. |
| 8 | `awesome-family-0cd3a19d9e9d34c3` / `auto-source-0cd3a19d9e9d34c3`; `awesome-occ-3aa53980a606678b`; Evals & Verification | Requested URL preserved its casing while GitHub displayed [UKGovernmentBEIS/inspect_ai](https://github.com/ukgovernmentbeis/inspect_ai); accessible and substantively inspectable after one same-URL recovery | Top-level repository/README; `main`, 6,816 commits and 248 tags visible; no inspected commit or tag pin; `repository_shallow`, `live_unpinned` | UK AI Security Institute evaluation framework project covering prompts, tool use, multi-turn tasks, model-graded evaluation, extensions, and prebuilt evals. Capabilities remain project descriptions. | Evaluation placement is plausible; the root does not validate any evaluation result or framework effectiveness. Proposed `read_only`. |
| 9 | `awesome-family-9b1e18963f7fbc08` / `auto-source-9b1e18963f7fbc08`; `awesome-occ-bacc93f5ac20847a`; Production Infrastructure & Operations | Requested and observed [AI Agent Scaling Gap](https://www.digitalapplied.com/blog/ai-agent-scaling-gap-march-2026-pilot-to-production); accessible and substantively inspectable after one same-URL recovery | Direct consultancy/practitioner article by Digital Applied Team, dated 2026-03-26; no immutable content pin; `live_unpinned` | Reports a survey of 650 enterprise technology leaders and proposes five production-readiness gaps and a readiness framework. The direct page exposed no independently inspectable methodology or dataset, so figures and recommendations remain source-reported. | Production operations is relevant, but evaluation, monitoring, integration, ownership, and scope cross the catalog category. Proposed `read_only`. |
| 10 | `awesome-family-72fcf67d67c1b151` / `auto-source-72fcf67d67c1b151`; `awesome-occ-26b8c6a87560dbd7` (Foundations), `awesome-occ-eded1b85fe9b6909` (Design Primitives / Permissions & Authorization), `awesome-occ-f9138f30e8cb2992` (Security, Sandbox & Permissions) | Requested [Beyond Permission Prompts](https://www.anthropic.com/engineering/beyond-permission-prompts); both exact-URL attempts were rejected by the transport as unsafe | No article body, authorship, date, thesis, mechanism, version, or pin was inspectable; inspection extent `none` | Actual source content, relevance, and evidence posture remain unestablished within the authorized boundary. | Three catalog occurrences across three contexts remain one inaccessible family, not corroboration. No alternate route was opened. Proposed `excluded`. |
| 11 | `awesome-family-4b95225a7f6d480b` / `auto-source-4b95225a7f6d480b`; `awesome-occ-bed81ea0b11fb2ae`; Agent Loop | Requested `https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking`; automatically observed [the current Extended Thinking route](https://platform.claude.com/docs/en/build-with-claude/extended-thinking); accessible and substantively inspectable | Direct live product documentation; no immutable page or runtime pin; `live_unpinned` | Vendor documentation for extended and adaptive thinking, budgets, display, streaming, tool-loop preservation, and related constraints. It establishes stated behavior, not effectiveness. | Agent Loop placement is too broad: this is primarily model-invocation and runtime configuration that constrains a loop. Proposed `read_only`. |
| 12 | `awesome-family-cb9a1fa584365064` / `auto-source-cb9a1fa584365064`; `awesome-occ-ba2a6552b108d595`; Planning & Task Decomposition | Requested and observed [Plan-and-Act](https://arxiv.org/abs/2503.09572); accessible and substantively inspectable after one same-URL recovery | ArXiv abstract and metadata only; visible current `v3` dated 2025-04-22 and ICML 2025 status, but the requested work URL is unversioned and not an explicit pin; `live_unpinned` | Paper abstract describing planner/executor separation and synthetic plan generation with paper-reported WebArena-Lite and WebVoyager results. No PDF, method, code, or result was reproduced. | Planning placement is plausible; the abstract is only a lead for later evidence-bearing reading if an approved outline asks the question. Proposed `read_only`. |
| 13 | `awesome-family-cb71b43c7896c074` / `auto-source-cb71b43c7896c074`; `awesome-occ-a82f32555e57b186`; Context Delivery & Compaction | Requested `https://blog.langchain.com/autonomous-context-compression`; automatically observed [the current article route](https://www.langchain.com/blog/autonomous-context-compression); accessible and substantively inspectable after one same-URL recovery | Direct vendor/practitioner article by LangChain Team, dated 2026-03-11; no immutable content pin; `live_unpinned` | Describes agent-triggered context compression retaining recent context and summarizing earlier material, with custom-eval, Terminal-Bench, and internal coding observations. Results remain vendor-reported. | Compaction placement is plausible; autonomy, control policy, state recovery, and evaluation also matter. Proposed `read_only`. |
| 14 | `awesome-family-e176ffce9b6e9ae3` / `auto-source-75b74b7e71f381ad`; `awesome-occ-0f657f6680d7d5e9`; Tool Design | Requested `https://python.useinstructor.com`; transport normalized the lifecycle URL to [the trailing-slash documentation root](https://python.useinstructor.com/); accessible and substantively inspectable | Direct live project documentation/landing page; no immutable content or release pin; `live_unpinned` | Multi-language structured-output and extraction library describing schema validation, retries, streaming, and provider support, while distinguishing extraction from agent frameworks. Capabilities remain project descriptions. | Material form correction: documentation/project landing rather than an article. Structured model output and validation are adjacent to, but not necessarily part of, tool design. Proposed `read_only`. |
| 15 | `awesome-family-58c73d163c73c759` / `auto-source-58c73d163c73c759`; `awesome-occ-afd4c9794d6928bf`; Skills & MCP | Requested `https://github.com/callstackincubator/agent-device`; automatically observed [callstack/agent-device](https://github.com/callstack/agent-device); accessible and substantively inspectable after one same-URL recovery | Top-level repository/README; `main`, 1,119 commits and visible `v0.19.1` dated 2026-07-08; no inspected commit or release pin; `repository_shallow`, `live_unpinned` | CLI project for agents to inspect, control, and verify mobile, web, and desktop apps through accessibility snapshots, actions, assertions, evidence, replay, CI, logs, and traces. Capabilities remain project descriptions. | Material identity correction: owner moved from CallstackIncubator to `callstack`. Skills & MCP is too narrow; verification, testing, device tooling, and observability are central. Proposed `read_only`. |
| 16 | `awesome-family-1040cd9966982c98` / `auto-source-1040cd9966982c98`; `awesome-occ-78ad5474b004ac11`; Permissions & Authorization | Requested `https://blog.langchain.com/two-different-types-of-agent-authorization`; automatically observed [the current article route](https://www.langchain.com/blog/two-different-types-of-agent-authorization); accessible and substantively inspectable after one same-URL recovery | Direct vendor conceptual article by Harrison Chase, dated 2026-03-23; no immutable content pin; `live_unpinned` | Distinguishes user-delegated credentials from agent-fixed identity and discusses channels, sharing, human intervention, and memory implications. This is a product/practitioner framing, not a universal authorization model. | Authorization placement is plausible; identity, credential provenance, channel policy, and memory permissions cross multiple boundaries. Proposed `read_only`. |
| 17 | `awesome-family-11d6c73f1872cbdd` / `auto-source-11d6c73f1872cbdd`; `awesome-occ-4a2ff5fd2b782642`; Memory & State | Requested `https://github.com/tencent/tencentdb-agent-memory`; automatically observed [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory); accessible and substantively inspectable after one same-URL recovery | Top-level repository/README; `main`, 103 commits visible, no inspected commit or release pin; `repository_shallow`, `live_unpinned` | Layered symbolic-memory project describing raw logs, summaries, visual canvases, traceable drill-down, cross-session layers, integrations, and optional gateway authentication. Reported benchmark and token gains remain project claims. | Material identity correction: owner redirects from `tencent` to `TencentCloud`. Memory placement is plausible; compaction, progressive disclosure, traceability, and identity also matter. Proposed `read_only`. |
| 18 | `awesome-family-f3f1b6782caa4b28` / `auto-source-f3f1b6782caa4b28`; `awesome-occ-074890eb72e67d66`; Task Runners & Orchestration | Requested `https://developers.openai.com/codex/sdk`; automatically observed [the current Codex SDK route](https://learn.chatgpt.com/docs/codex-sdk); accessible and substantively inspectable | Direct live product documentation; no immutable page or SDK/runtime pin; `live_unpinned` | Vendor documentation for programmatically controlling local Codex agents from CI, internal tools, workflows, and applications, including threads and an MCP-based orchestration option. It establishes documented integration scope only. | Material form correction: documentation rather than an article. Orchestration relevance is real but product-specific. Proposed `read_only`. |
| 19 | `awesome-family-9e658ac64da0d3d1` / `auto-source-9e658ac64da0d3d1`; `awesome-occ-b853300bbaa387f7`; Verification & CI Integration | Requested `https://blog.langchain.com/evaluating-skills`; automatically observed [the current Evaluating Skills article](https://www.langchain.com/blog/evaluating-skills); accessible and substantively inspectable after one same-URL recovery | Direct vendor/practitioner article by LangChain Team / Robert Xu, dated 2026-03-05; no immutable content pin; `live_unpinned` | Describes clean-container skill evaluation, task and metric design, baseline-versus-skill comparison, modularity, invocation, and observability, with vendor-reported internal results. It is a method report, not an independently validated benchmark. | Material form correction from `benchmark_or_evaluation`; CI is only one possible downstream integration. Proposed `read_only`. |
| 20 | `awesome-family-3c94d1f5d485d1a9` / `auto-source-3c94d1f5d485d1a9`; `awesome-occ-9457b30a27175a4e`; Observability & Tracing | Requested and observed [Weights & Biases Weave](https://github.com/wandb/weave); accessible and substantively inspectable after one same-URL recovery | Top-level repository/README; `master`, 7,101 commits and visible `v0.53.2` dated 2026-07-16; no inspected commit or release pin; `repository_shallow`, `live_unpinned` | Toolkit project for logging and debugging model calls and traces, building evaluations, and organizing experimentation-to-production information. Capabilities and stated goals remain project descriptions. | Observability placement is plausible but evaluation and experimental lifecycle management are equally explicit. Proposed `read_only`. |

## Cross-source calibration results

- The approved core-03 method transferred without increasing depth. Seventeen
  families were structurally screenable; three remained inaccessible at their
  registered route and are proposed for exclusion rather than workaround.
- Transport success and substantive inspectability remain separate. The
  LangGraph route produced only a redirect shell, AI Harness Scorecard produced
  a 404, and Beyond Permission Prompts was rejected by the safe-open layer.
- Requested and observed identities remain distinct. LangChain articles,
  Anthropic docs, agent-device, TencentDB-Agent-Memory, and Codex SDK changed
  hosts, owners, or routes automatically; Instructor gained a trailing slash
  and therefore a different automatic source-ID suffix.
- A visible article date, documentation statement, branch, release, tag, or
  paper version is not an inspected immutable pin. All eight substantively
  accessible repository screens remained `repository_shallow`; none inspected
  code, tests, history, or a commit pin. The ninth catalog-apparent repository,
  AI Harness Scorecard, was not inspectable at all.
- Catalog category and label remain context rather than authority. The two
  evaluation resources are articles or method reports, Extended Thinking is a
  model/runtime control rather than a complete agent loop, Instructor is a
  documentation/project surface rather than an article, and several platforms
  cross catalog sections.
- Relevance and evidence strength remain separate. Official documentation,
  first-party engineering reports, practitioner articles, a paper abstract, and
  project READMEs can be directly relevant while leaving effectiveness,
  independence, applicability, and implementation unverified.
- Recurrence is not corroboration. Beyond Permission Prompts preserves three
  occurrence joins but remains one inaccessible source family.
- The semantic annotation helper cannot preserve family IDs, occurrence IDs,
  requested/observed identities, transport versus substantive inspectability,
  visible version versus actual pin, `repository_shallow`, catalog corrections,
  or per-family lineage notes. This register is the durable join; the generated
  provenance audit remains the lifecycle-accounting view.

## Result and next gate

The proposed result retains seventeen families `read_only` and excludes three
because no substantive content was inspectable. No source is `referenced`, no
claim is declared, no evidence maturity changes, and no outline decision
follows from this batch.

Continued use of the method remains proposed at this gate; core-04 does not
authorize a later batch. The maintainer must now review the 17/3 dispositions,
catalog corrections, source lifecycles, requested/observed identities, lineage
limits, schema friction, provenance audit, and whether the method may continue.
No core-05 source may be opened until a separate explicit decision.
