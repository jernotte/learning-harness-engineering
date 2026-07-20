# Awesome Catalog Direct-Screen Calibration — `awesome-screen-core-01`

**Status:** Complete; awaiting maintainer review

**Authority:** V2-D008, approved 2026-07-20

**Frozen membership:** `awesome-screening-plan.json` at commit
`3c66817a1f7a43adf7492451f859c501f1dfee7c`, SHA-256
`8ce00b2a284a2f789972f3322586497ff0450b734d3cf2d3ad8aec5d8f0169fc`

**Native external-interaction window:** `2026-07-20T21:57:45Z` through
`2026-07-20T22:03:36Z`

## Boundary and accounting

The primary agent directly opened the exact 20 registered URLs. The native
capture contains 22 `source_opened` events but exactly 20 unique canonical
requested URLs and 20 unique source IDs: the OpenAI agent-loop page was opened
again after the first wrapper returned no displayed page content, and the
OpenAI long-horizon page was reopened at a line position on the same URL after
its navigation-heavy first rendering hid the article body. Neither repeat
introduced another source family.

No query, search-result page, second-hop link, bibliography, destination
repository file, implementation code, or unregistered URL was opened. The web
runtime internally labels its direct-open transport `native_web_search`; the
derived provenance contains no `search` or `result_returned` event and records
only the requested direct URLs. All other catalog batches remain unopened.

This is a structural screen, not evidence admission. A `read_only` disposition
means the direct page was useful for identity, scope, relevance, or evidence-
posture calibration only. It does not promote a finding, adopt a catalog
category, approve a topic, or authorize deeper reading.

## Screening register

| # | Joined identity and catalog context | Directly inspected identity, surface, and accessibility | Relevance, scope, and evidence posture | Disposition and correction |
| --- | --- | --- | --- | --- |
| 1 | `awesome-family-ae10eb4597fe2dea` / `auto-source-ae10eb4597fe2dea`; occurrences `awesome-occ-50505e685fbcbfbd`, `awesome-occ-3ae952523b309a35`; catalog: Agent Loop and Foundations | [OpenAI, “Unrolling the Codex agent loop”](https://openai.com/index/unrolling-the-codex-agent-loop), requested without and observed with a trailing slash; article page, published 2026-01-23; accessible; screening surface: article body | Directly describes the Codex user/model/tool loop, prompt construction, tool iteration, and context management. First-party product mechanism explanation; it does not independently validate effectiveness. | `read_only`. Two catalog occurrences remain one source family and are not corroboration. |
| 2 | `awesome-family-7647307fe49844a0` / `auto-source-7647307fe49844a0`; occurrence `awesome-occ-e1734db43f437a44`; catalog: Agent Loop | [Yao et al., “ReAct: Synergizing Reasoning and Acting in Language Models”](https://arxiv.org/abs/2210.03629); arXiv abstract and metadata, v3 dated 2023-03-10; accessible; screening surface: abstract only | Evaluates an interleaved reasoning/action policy on named QA and interactive benchmarks. It is mechanism and benchmark evidence, not a general harness architecture or universal result. | `read_only`. The catalog’s loop placement is plausible but narrower than the paper’s evaluated task framing. |
| 3 | `awesome-family-3cdc3bbb8a55263b` / `auto-source-3cdc3bbb8a55263b`; occurrence `awesome-occ-c5457cbc44742319`; catalog: Planning & Task Decomposition | [LangChain, “Plan-and-Execute Agents”](https://blog.langchain.com/plan-and-execute-agents), requested without and observed with a trailing slash; blog article dated 2023-05-10; accessible | Introduces an experimental planner/executor split and notes added model-call cost. The article explicitly describes the anticipated improvements as theoretical and leaves evaluation for future work. | `read_only`. Correct form is a vendor design announcement, not effectiveness evidence. |
| 4 | `awesome-family-126e07cf0d684e03` / `auto-source-126e07cf0d684e03`; occurrence `awesome-occ-9eb1144b284ed744`; catalog: Context Delivery & Compaction | [Anthropic, “Effective context engineering for AI agents”](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents); engineering article dated 2025-09-29; accessible | Covers context selection, tool descriptions, just-in-time retrieval, compaction, structured notes, and subagents. First-party practitioner guidance and reported observations; cited downstream claims were not followed or verified. | `read_only`. Relevant across several mechanisms, so the single catalog category is not an adopted boundary. |
| 5 | `awesome-family-82747c62f33e4f20` / `auto-source-82747c62f33e4f20`; occurrence `awesome-occ-d394d49c0c6988ac`; catalog: Tool Design | [Anthropic, “Tool use with Claude”](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview); live Claude Platform documentation; accessible; no visible page version/date | Documents client- versus server-executed tools, the tool-call/result round trip, schemas, tool choice, and current product behavior. Product documentation establishes what the API says and does, not outcome quality. | `read_only`; `live_unpinned`. Correct form is vendor product documentation. |
| 6 | `awesome-family-0668b361cac37fb4` / `auto-source-0668b361cac37fb4`; occurrence `awesome-occ-cad1dd3e7a217594`; catalog: Skills & MCP | Requested [MCP introduction](https://modelcontextprotocol.io/introduction), automatically observed at `https://modelcontextprotocol.io/docs/getting-started/intro`; official live documentation; accessible; no visible version/date | Defines MCP as an open standard connecting AI applications to data, tools, and workflows. The landing page’s benefit and ecosystem statements are project claims, not comparative evidence. | `read_only`; `live_unpinned`. Redirect changes the route, not the family. Correct form is a standard/project introduction. |
| 7 | `awesome-family-cecce92d753337bd` / `auto-source-cecce92d753337bd`; occurrence `awesome-occ-4f1c7fcc838fc22a`; catalog: Permissions & Authorization | [OWASP, “LLM06:2025 Excessive Agency”](https://genai.owasp.org/llmrisk/llm062025-excessive-agency), requested without and observed with a trailing slash; guidance page; accessible | Directly addresses excessive functionality, permissions, and autonomy, plus least privilege, approvals, and complete mediation. Prompt injection appears as one possible trigger/example; indirect prompt injection is not the source’s organizing topic. The page is risk guidance, not an empirical harness evaluation. | `read_only`, narrowly for authority and blast-radius controls. This resolves the earlier catalog ambiguity: it belongs here for agency controls, not as a prompt-injection topic. |
| 8 | `awesome-family-7fe841355559703a` / `auto-source-7fe841355559703a`; occurrence `awesome-occ-84177a32e1b7a1d5`; catalog: Memory & State | [letta-ai/letta](https://github.com/letta-ai/letta); top-level GitHub repository/README only; accessible; live `main`; visible release `v0.16.8` dated 2026-05-14, but no commit pin was visible | The README describes stateful agents and memory, but also states this repository is the legacy Letta V1 server and that active development moved elsewhere. No moved repository or implementation file was opened. | `read_only`; `repository_shallow`, `live_unpinned`. Material catalog correction: the registered destination is a legacy surface. Any current-repository resolution requires a later gate. |
| 9 | `awesome-family-1eba12a4a8fa384c` / `auto-source-1eba12a4a8fa384c`; occurrence `awesome-occ-e8be3812e71da7dd`; catalog: Task Runners & Orchestration | [Anthropic, “Building a C compiler with a team of parallel Claudes”](https://www.anthropic.com/engineering/building-c-compiler); engineering article dated 2026-02-05; accessible | A first-person, single-project experiment describing persistent loops, containers, Git-mediated task locks, tests, feedback shaping, context-efficient logs, specialization, costs, results, and limitations. Directly harness-relevant but not an independently reproduced comparison. | `read_only`. Correct form is a practitioner case study/experiment, not a general orchestration specification. |
| 10 | `awesome-family-baf9cbcdf7e11126` / `auto-source-baf9cbcdf7e11126`; occurrence `awesome-occ-69cc24b9bab14c65`; catalog: Verification & CI Integration | [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo); top-level GitHub repository/README only; accessible; live `main`; visible release `0.121.19` dated 2026-07-14; no commit pin visible | Self-describes evaluation, red-teaming, comparison, and CI/CD capabilities for LLM applications and agents. No implementation, benchmark, or adoption claim was verified. | `read_only`; `repository_shallow`, `live_unpinned`. Relevant implementation candidate, not effectiveness proof. |
| 11 | `awesome-family-dab460140f5c7122` / `auto-source-dab460140f5c7122`; occurrence `awesome-occ-1386a7bdace494de`; catalog: Observability & Tracing | [traceloop/openllmetry](https://github.com/traceloop/openllmetry); top-level GitHub repository/README only; accessible; live `main`; visible release `0.62.1` dated 2026-06-28; no commit pin visible | Self-describes OpenTelemetry-based LLM instrumentation and integrations. The same README says telemetry is no longer collected and retains a “Why we collect telemetry” section, exposing possible stale-document friction that deeper work would need to resolve. | `read_only`; `repository_shallow`, `live_unpinned`. Capabilities and compatibility remain project-reported. |
| 12 | `awesome-family-22e1d1b5ef859fb4` / `auto-source-22e1d1b5ef859fb4`; occurrence `awesome-occ-96e63f0f1d37ee19`; catalog: Debugging & Developer Experience | [AgentOps-AI/agentops](https://github.com/agentops-ai/agentops); top-level GitHub repository/README only; accessible; live `main`; no visible commit/version pin | Self-describes agent monitoring, replay, cost tracking, evaluation, and framework integrations. No code, tests, hosted service, or comparative result was inspected. | `read_only`; `repository_shallow`, `live_unpinned`. Catalog form is an implementation/vendor platform, not independent evidence. |
| 13 | `awesome-family-721d7c06c94b6351` / `auto-source-721d7c06c94b6351`; occurrence `awesome-occ-58ed4717b4a21c19`; catalog: Human-in-the-Loop | [aws-samples/sample-human-in-the-loop-patterns](https://github.com/aws-samples/sample-human-in-the-loop-patterns); top-level GitHub repository/README only; accessible; live `main`; ten commits and no releases visible; no commit pin visible | Presents four AWS/Strands/MCP-specific approval patterns: framework hook, per-tool context, asynchronous Step Functions, and MCP elicitation. It is sample implementation guidance, not a comparative effectiveness study. | `read_only`; `repository_shallow`, `live_unpinned`. Useful pattern inventory with vendor/runtime-specific applicability. |
| 14 | `awesome-family-257ed09536576a04` / `auto-source-257ed09536576a04`; occurrence `awesome-occ-20a2ea7d77bd3f92`; catalog: Generators & Meta-Harnesses | Requested [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code), automatically observed at `https://github.com/affaan-m/ECC`; top-level repository/README only; accessible; live `main`; README advertises `v2.0.0` from 2026-06, no commit pin visible | Now presents itself as ECC, a cross-harness operator system spanning skills, memory, security, evaluation, orchestration, and multiple agent products. All maturity, usage, and performance statements are project-reported. | `read_only`; `repository_shallow`, `live_unpinned`. Material catalog correction: both repository name and product scope have changed. |
| 15 | `awesome-family-58a5a7279791ce2c` / `auto-source-58a5a7279791ce2c`; occurrences `awesome-occ-79d00f751427ab02`, `awesome-occ-87d71f5ec04a1aa8`; catalog: Evals & Verification and Demo Harnesses | [Xia et al., “Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?”](https://arxiv.org/html/2511.13646v3); exact arXiv HTML v3; accessible; screening surface included abstract, method overview, setup, and visible main results | Primary research on runtime tool synthesis with reported SWE-bench Verified and Pro results, cross-model comparisons, and ablations. Results remain source-reported, benchmark/model/version-specific, and unreproduced here. | `read_only`; exact preprint version. Correct form is a research paper with an associated implementation, not two independent catalog sources. |
| 16 | `awesome-family-64af1d1a2fd48283` / `auto-source-64af1d1a2fd48283`; occurrence `awesome-occ-5f98b946e4f93aeb`; catalog: Security, Sandbox & Permissions | [Anthropic, “How we contain Claude across products”](https://www.anthropic.com/engineering/how-we-contain-claude); engineering article dated 2026-05-25; accessible | First-party retrospective on approvals, sandboxes, VMs, filesystem and egress boundaries, tool-content trust, observed incidents, and product-specific telemetry. Directly relevant to harness containment, but not independent security validation. | `read_only`. Prompt injection is one threat path inside a broader deterministic containment and authority-boundary account. |
| 17 | `awesome-family-b2dde8d2b4d70b66` / `auto-source-b2dde8d2b4d70b66`; occurrence `awesome-occ-5d61f1ee01942946`; catalog: Evals & Verification | [confident-ai/deepeval](https://github.com/confident-ai/deepeval); top-level GitHub repository/README only; accessible; live `main`; no visible commit/version pin | Self-describes an LLM evaluation framework with agent task, tool, planning, and MCP metrics, many using LLM-as-judge methods. Metric validity, implementation, and comparative performance were not assessed. | `read_only`; `repository_shallow`, `live_unpinned`. Relevant implementation candidate, not validation of its own metrics. |
| 18 | `awesome-family-4bc641a728ca0582` / `auto-source-4bc641a728ca0582`; occurrence `awesome-occ-0d5c66ebbfb202ba`; catalog: Production Infrastructure & Operations | [Anthropic, “MCP tunnels”](https://platform.claude.com/docs/en/agents-and-tools/mcp-tunnels/overview); live Claude Platform documentation; accessible; explicitly a research preview with no continuity commitment; no visible page version/date | Documents an outbound-only private-network connection, proxy, TLS/OAuth layers, deployment prerequisites, and shared responsibility. Product-specific current architecture; it does not establish general production outcomes. | `read_only`; `live_unpinned`. Correct form is preview product documentation, not a stable standard. |
| 19 | `awesome-family-9a17e7add848af00` / `auto-source-9a17e7add848af00`; occurrences `awesome-occ-f17db988033387c4`, `awesome-occ-e5c721d4c554c314`; catalog: Planning & Task Decomposition and Foundations | [OpenAI, “Run long horizon tasks with Codex”](https://developers.openai.com/blog/run-long-horizon-tasks-with-codex); developer article dated 2026-02-23; accessible; same URL rendered twice to expose the article body | First-party single-run experiment describing a roughly 25-hour coding task, durable project files, milestones, verification, repair, and the surrounding Codex loop. The author labels it an experiment rather than production evidence. | `read_only`. Two catalog occurrences and two same-URL render events remain one source family. Correct form is a practitioner case study. |
| 20 | `awesome-family-2b0bbc572c83b1d8` / `auto-source-2b0bbc572c83b1d8`; occurrence `awesome-occ-f9f88caee2748284`; catalog: Agent Loop | Requested [LangGraph low-level concepts](https://langchain-ai.github.io/langgraph/concepts/low_level); automatically observed with a trailing slash, but the returned page contained only “Redirecting...” | No substantive page content, identity metadata, mechanism description, date, or evidence posture was inspectable without another traversal. The screen therefore establishes only that the registered endpoint is a redirect shell. | `excluded` from this completed calibration’s usable read-only sources; inspection extent `none`. No redirect destination was manually followed and no resolution query was made. |

## Cross-source calibration results

- Relevance and evidence posture must remain separate. Several pages are
  directly about harness mechanisms yet provide only vendor documentation,
  first-party experience, or project self-description.
- Catalog category is context, not a source-native taxonomy. The context article,
  containment article, ECC repository, and Live-SWE paper each span or conflict
  with their catalog placements.
- Repository home pages require an explicit `repository_shallow` extent and a
  separate distinction between a visible release label and a pinned inspected
  commit. None of the seven repository screens inspected code or established a
  commit pin.
- Requested identity and observed identity need separate fields. The MCP intro,
  Letta legacy notice, ECC rename, and redirect-only LangGraph endpoint show
  different redirect, supersession, and lineage cases.
- Transport accessibility is not substantive inspectability. The LangGraph
  endpoint returned successfully but exposed no screenable content.
- A source family can legitimately have more than one direct-open event while
  remaining one source. Runtime rendering and evidence retrieval should not be
  miscounted as independent sources.
- The semantic annotation helper cannot preserve family IDs, occurrence IDs,
  requested/observed identities, `repository_shallow`, or catalog corrections.
  This register is therefore the durable join from each provenance `source_id`
  to the frozen catalog family and occurrences; the generated provenance audit
  remains the lifecycle accounting view.

## Result and next gate

Nineteen families are retained `read_only` and one is `excluded` because only a
redirect shell was inspectable. No source is `referenced`, no claim is declared,
no evidence maturity changes, and no outline decision follows from this batch.

The primary recommendation is to retain the direct-screen depth but require the
future per-family register to carry the fields this calibration exposed:
requested and observed identity, transport accessibility, substantive
inspectability, exact surface, visible version versus actual pin,
`repository_shallow`, source form, relevance, evidence posture, lineage/alias
notice, catalog correction, schema friction, and final disposition. Keep that
register joined to the frozen family and occurrence IDs; do not expand the
generic provenance schema speculatively.

If the maintainer accepts that method and the 19/1 dispositions, the next
recommended authorization is only the already planned 20-family
`awesome-screen-core-02` batch, unchanged and under the same no-query,
direct-page-only, no-second-hop boundary. That is a recommendation, not present
authority. If the maintainer changes any required field, depth rule, or
disposition interpretation, apply the correction before another source opens.

The maintainer must now review the calibration, including the dispositions,
catalog corrections, schema friction, and whether the screen depth is useful.
No other batch may execute until separately authorized.
