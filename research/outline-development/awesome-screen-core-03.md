# Awesome Catalog Direct-Screen Calibration — `awesome-screen-core-03`

**Status:** Complete; awaiting maintainer review

**Authority:** V2-D010, approved 2026-07-20

**Frozen membership:** `awesome-screening-plan.json` at commit
`3c66817a1f7a43adf7492451f859c501f1dfee7c`, SHA-256
`8ce00b2a284a2f789972f3322586497ff0450b734d3cf2d3ad8aec5d8f0169fc`

**Native external-interaction window:** `2026-07-21T00:15:24Z` through
`2026-07-21T00:20:48Z`

## Boundary and accounting

The primary agent directly interacted with the exact 20 registered URLs. The
native capture contains 31 `source_opened` events but exactly 20 unique
canonical requested URLs and 20 unique source IDs. Eleven additional opens
were bounded same-URL recoveries: mem0 and LangGraph once each; the OpenAI
skills-evaluation article twice; the MCP authorization page, SWE-bench, and the
Anthropic tool-writing article once each after access failures; Codex hooks
once after navigation-only output; and Chrome DevTools MCP, Claude Agent SDK
permissions, and Stash once each after the first combined response omitted or
did not expose enough of the direct page body. Every repeat used the same
literal registered URL; automatic redirects and URL normalization remained
transport behavior rather than manually traversed destinations.

No query, search-result page, manual redirect traversal, second-hop link,
bibliography, PDF, destination repository file, implementation code, or
unregistered URL was opened. The direct web transport is recorded as native
observations and derived direct opens; the package contains no `search` or
`result_returned` event. No completed core-01 or core-02 destination was
reopened, and all later catalog batches remain unopened.

This is a structural screen, not evidence admission. A proposed `read_only`
disposition means the direct page was useful only for identity, scope,
relevance, or evidence-posture calibration. It does not promote a finding,
adopt a catalog category, approve a topic, or authorize deeper reading. The
baseline lineage notice applies to every row: catalog membership is a shared
curator discovery path, not independent corroboration, and cross-URL aliases
or destination-source independence remain unassessed except where the direct
page exposed a redirect, recurrence, or scope mismatch.

## Screening register

| # | Frozen family, source, occurrence, and catalog context | Requested and observed identity; transport and substantive inspectability | Exact surface; visible version versus actual pin; repository depth | Actual source form; relevance and evidence posture | Lineage, catalog correction, schema friction, and disposition |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `awesome-family-ba31bde2dfc28f63` / `auto-source-ba31bde2dfc28f63`; `awesome-occ-9145adff01915719`; Skills & MCP | Requested and observed [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp); transport accessible and substantively inspectable | Top-level repository/README; `main`, 565 commits visible, no inspected commit or release pin; `repository_shallow`, `live_unpinned` | Project repository for browser automation through MCP using Playwright and structured accessibility snapshots. Its MCP-versus-CLI/Skills suitability comparison is project guidance, not comparative evidence. | Skills & MCP is plausible but browser control, structured tool output, state, and introspection also matter. Proposed `read_only`. |
| 2 | `awesome-family-d5f9dbd62b3ecc11` / `auto-source-d5f9dbd62b3ecc11`; `awesome-occ-70f3ff4b8d5b8e9d`; Permissions & Authorization | Requested and observed [Claude Code Auto Mode](https://www.anthropic.com/engineering/claude-code-auto-mode); transport accessible and substantively inspectable | Direct first-party engineering article dated 2026-03-25, by John Hughes; no immutable content pin; `live_unpinned` | Vendor account of a two-layer defense, tiered approvals, threat model, and internal/synthetic evaluations. The reported approval, false-positive, and false-negative figures remain source-reported and do not replace human review. | Permission architecture is central. Tool-output prompt-injection checks are a cross-cutting mechanism inside that architecture, not an independently adopted outline topic. Proposed `read_only`. |
| 3 | `awesome-family-cddc9a2d075a5103` / `auto-source-cddc9a2d075a5103`; `awesome-occ-dd13bff13d3bfb88`; Memory & State | Requested and observed [mem0](https://github.com/mem0ai/mem0); transport accessible and substantively inspectable after one same-URL recovery | Top-level repository/README; `main`, 2,494 commits visible, no inspected commit pin; `repository_shallow`, `live_unpinned` | Broad agent-memory project describing memory extraction, storage, retrieval, and a newer algorithm. Its benchmark values and production claims are project-reported; the README explicitly distinguishes proprietary managed-service optimizations from the open-source implementation. | Placement is plausible, but managed-service and open-source behavior must not be conflated. Proposed `read_only`. |
| 4 | `awesome-family-642743ad9061795a` / `auto-source-642743ad9061795a`; `awesome-occ-06d06575189b4c6a`, `awesome-occ-c1523ae7f2b2d0f3`; Task Runners & Orchestration | Requested and observed [LangGraph](https://github.com/langchain-ai/langgraph); transport accessible and substantively inspectable after one same-URL recovery | Top-level repository/README; `main`, 7,001 commits visible, no inspected commit or release pin; `repository_shallow`, `live_unpinned` | Low-level orchestration framework project describing long-running stateful agents, durable execution, human-in-the-loop, memory, and debugging/deployment integrations. Capabilities remain project descriptions. | Two catalog occurrences remain one family, not corroboration. The root did not substantiate the separate “LangGraph 2.0 Release” wording without a prohibited second hop. Proposed `read_only`. |
| 5 | `awesome-family-22b0273a7c1efebd` / `auto-source-22b0273a7c1efebd`; `awesome-occ-b0d4109b21ff58a5`; Verification & CI Integration | Requested and observed [“Testing Agent Skills Systematically with Evals”](https://developers.openai.com/blog/eval-skills); transport accessible and substantively inspectable after two same-URL line recoveries | Direct vendor tutorial/article dated 2026-01-22, by Dominik Kundel and Gabriel Chua; no immutable content pin; `live_unpinned` | Practical guidance for defining success, capturing an agent run and artifacts, and combining deterministic and rubric-based checks for skills. It is not an independently validated benchmark. | Material form correction: article/tutorial, not `benchmark_or_evaluation`; it covers skill evaluation and regression testing, while CI integration is only one possible use. Proposed `read_only`. |
| 6 | `awesome-family-580ca860ba1f4d76` / `auto-source-580ca860ba1f4d76`; `awesome-occ-79033a5c43493ecd`; Observability & Tracing | Requested and observed [Opik](https://github.com/comet-ml/opik); transport accessible and substantively inspectable | Top-level repository/README; `main`, 6,453 commits visible and README marked updated 2026-07-17; no inspected commit pin; `repository_shallow`, `live_unpinned` | Broad observability and evaluation platform project spanning tracing, evaluation, prompt/agent optimization, monitoring, guardrails, and CI/CD evaluation. Throughput and capability claims remain project-reported. | Observability placement is plausible but too narrow for the described platform. Proposed `read_only`. |
| 7 | `awesome-family-1ce67529b68b7d4a` / `auto-source-1ce67529b68b7d4a`; `awesome-occ-953cbf3a12b431bb`; Debugging & Developer Experience | Requested and observed [Claude Code commands](https://code.claude.com/docs/en/commands); transport accessible and substantively inspectable | Direct live product documentation; page mentions behavior as of `v2.1.199`, but no immutable page or runtime pin was inspected; `live_unpinned` | Broad command reference that directly describes `/doctor` as diagnosing installation and configuration problems and being able to fix them. Vendor documentation establishes stated behavior only. | Material scope correction: the source is a general commands page, not a standalone `/doctor` artifact. Proposed `read_only`. |
| 8 | `awesome-family-cf18e9c6fc10a052` / `auto-source-cf18e9c6fc10a052`; `awesome-occ-48f7f814ecad6046`; Human-in-the-Loop | Requested and observed [HITL Protocol](https://github.com/rotorstar/hitl-protocol); transport accessible and substantively inspectable | Top-level repository/README; `main`, 43 commits and a visible `v0.8` badge, but no inspected immutable pin; `repository_shallow`, `live_unpinned` | Open protocol/specification project for service-agent-human decision handoff using HTTP 202, a review URL, and polling, plus reference implementations. Project assertions were not independently tested. | Material form correction: protocol/specification plus implementations, not merely a repository example; it distinguishes service-requested decisions from framework-internal approval prompts. Proposed `read_only`. |
| 9 | `awesome-family-7def51b1549aee4a` / `auto-source-7def51b1549aee4a`; `awesome-occ-f2a59ad605e937b4`; Generators & Meta-Harnesses | Requested and observed [revfactory/harness](https://github.com/revfactory/harness); transport accessible and substantively inspectable | Top-level repository/README; `main`, 45 commits visible, no inspected commit or release pin; `repository_shallow`, `live_unpinned` | Claude Code-specific team-architecture factory/meta-skill that says it generates agent teams and skills from a domain description using six patterns. Scope and maturity are project self-description. | Meta-harness relevance is real but product-specific; the project's own “L3” framing is not an adopted V2 level model. Proposed `read_only`. |
| 10 | `awesome-family-44a30ce8057db5dc` / `auto-source-44a30ce8057db5dc`; `awesome-occ-5c7ba19e60bbd01b`; Security, Sandbox & Permissions | Requested [MCP authorization specification](https://modelcontextprotocol.io/specification/2025-11-05/basic/authorization); both exact-URL attempts were rejected by the transport as unsafe, so no substantive content was inspectable | No page body, specification text, ownership detail, or immutable-content status was inspectable; inspection extent `none` | Actual source content, relevance, and evidence posture remain unestablished within the authorized boundary. | The date-bearing path was not treated as a proven pin. No alternate route or adjacent specification page was opened. Proposed `excluded`. |
| 11 | `awesome-family-ccc69641ceab4252` / `auto-source-433a37bad4e66a78`; `awesome-occ-6f6ef8704182b010`; Evals & Verification | Requested `https://www.swebench.com`; transport normalized the lifecycle URL to `https://www.swebench.com/`, but both exact-request attempts failed with a fetch error and no substantive content | No benchmark overview, version, dataset, result, or pin was inspectable; inspection extent `none` | Actual benchmark scope and evidence posture remain unestablished within the authorized boundary. | The differing source-ID suffix records automatic trailing-slash normalization, not a different frozen family. No linked README or alternate route was opened. Proposed `excluded`. |
| 12 | `awesome-family-4f11e26be57ffed1` / `auto-source-4f11e26be57ffed1`; `awesome-occ-7e7c8fae3e6ced3b`; Production Infrastructure & Operations | Requested and observed [AgentCgroup](https://arxiv.org/abs/2602.09345); transport accessible and substantively inspectable | ArXiv abstract and metadata only; visible current `v2` dated 2026-02-21 (`v1` 2026-02-10), but the requested work URL is unversioned and not an explicit pin; `live_unpinned` | Paper abstract characterizing OS-resource dynamics for sandboxed coding agents and describing an eBPF/cgroups mechanism with paper-reported preliminary results. No method, code, task data, or result was reproduced. | Production operations is relevant, but resource isolation and tool-call boundaries also matter. Proposed `read_only`. |
| 13 | `awesome-family-0f0c0cdf7c9dc4eb` / `auto-source-0f0c0cdf7c9dc4eb`; `awesome-occ-6e95c54e44ce8552`, `awesome-occ-0ee87eed885b41c2`; Tool Design and Foundations | Requested [Anthropic tool-writing article](https://www.anthropic.com/engineering/writing-effective-tools-for-agents); both exact-URL attempts were rejected by the transport as unsafe, so no substantive content was inspectable | No article body, authorship, date, thesis, mechanism, or version was inspectable; inspection extent `none` | Actual source content, relevance, and evidence posture remain unestablished within the authorized boundary. | Two catalog occurrences remain one inaccessible family, not corroboration. No alternate route was opened. Proposed `excluded`. |
| 14 | `awesome-family-aba1b395dcfe14d7` / `auto-source-aba1b395dcfe14d7`; `awesome-occ-2ea09f7388c8cc16`; Agent Loop | Requested [Codex hooks](https://developers.openai.com/codex/hooks), automatically observed at `https://learn.chatgpt.com/docs/hooks`; transport accessible and substantively inspectable after one same-URL line recovery | Direct live product documentation; no immutable page or runtime pin; `live_unpinned` | Vendor documentation for lifecycle hooks, event matchers, plugin hooks, tool coverage, blocking/rewriting, permission requests, and stated enforcement limits. It establishes documented behavior, not effectiveness. | Material form correction: documentation, not an article. Hooks cross the agent loop, policy, extensibility, observability, and control boundaries. Proposed `read_only`. |
| 15 | `awesome-family-13d43140a57ef61e` / `auto-source-13d43140a57ef61e`; `awesome-occ-c907d9c70c49393b`; Planning & Task Decomposition | Requested and observed [Agyn](https://arxiv.org/abs/2602.01465); transport accessible and substantively inspectable | ArXiv abstract and metadata only; visible current `v2` dated 2026-02-07, but the requested work URL is unversioned and not an explicit pin; `live_unpinned` | Paper abstract describing a role-based multi-agent software-engineering system with isolated sandboxes, communication, and methodology, plus paper-reported SWE-bench results. No method or result was reproduced. | Planning placement is too narrow: organization, orchestration, review, communication, and sandboxes are also central. Proposed `read_only`. |
| 16 | `awesome-family-e9e39426a0d8260e` / `auto-source-e9e39426a0d8260e`; `awesome-occ-b8cda1cbc6f0fc0c`; Context Delivery & Compaction | Requested [Claude prompt-caching docs](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), automatically observed at `https://platform.claude.com/docs/en/build-with-claude/prompt-caching`; transport accessible and substantively inspectable | Direct live product documentation; no immutable page or runtime pin; `live_unpinned` | Vendor documentation for prompt-prefix caching, automatic and explicit breakpoints, TTLs, and stated cost/latency behavior. It is product behavior and guidance, not comparative evidence. | Material narrowing: prompt caching is distinct from compaction and from general durable context management. Proposed `read_only`. |
| 17 | `awesome-family-dd44483fe80f0f0a` / `auto-source-dd44483fe80f0f0a`; `awesome-occ-32d0c78b7491af80`; Tool Design | Requested and observed [Outlines](https://github.com/dottxt-ai/outlines); transport accessible and substantively inspectable | Top-level repository/README; `main`, 1,308 commits visible, no inspected commit or release pin; `repository_shallow`, `live_unpinned` | Structured-output constrained-generation library. Guarantee and provider-independence statements are project claims; no implementation or output property was tested. | Boundary correction: decoding/generation constraints are adjacent to tool design and may instead belong at the model-invocation or control layer, depending on the approved V2 boundary. Proposed `read_only`. |
| 18 | `awesome-family-7cb0600d234b19c0` / `auto-source-7cb0600d234b19c0`; `awesome-occ-42a8934b19e481ff`; Skills & MCP | Requested and observed [Chrome DevTools MCP](https://github.com/chromedevtools/chrome-devtools-mcp); transport accessible and substantively inspectable after one same-URL line recovery | Top-level repository/README and direct tool/configuration lists; live default branch, no inspected commit or release pin; `repository_shallow`, `live_unpinned` | Chrome DevTools project MCP server exposing browser automation, navigation, performance, network, debugging, memory, extension, and experimental tools. Behavior was not executed or verified. | MCP placement is plausible but debugging, observability, browser isolation, concurrency, and tool-surface design also matter. Proposed `read_only`. |
| 19 | `awesome-family-a841a2284747ba07` / `auto-source-a841a2284747ba07`; `awesome-occ-fb32b279ec81d9a8`; Permissions & Authorization | Requested [Claude Agent SDK permissions](https://platform.claude.com/docs/en/agent-sdk/permissions), automatically observed at `https://code.claude.com/docs/en/agent-sdk/permissions`; transport accessible and substantively inspectable after one same-URL line recovery | Direct live product documentation; page states requirements and behavior around versions `v2.1.198` and `v2.1.199`, but no immutable page or runtime pin; `live_unpinned` | Vendor documentation for hook, deny, ask, mode, allow, and callback ordering; scoped rules; and documented bypass conditions. It establishes current stated product behavior only. | Permission ordering and always-run enforcement points are directly relevant but product-specific, not a universal authorization model. Proposed `read_only`. |
| 20 | `awesome-family-53e1f0b762c2e77b` / `auto-source-53e1f0b762c2e77b`; `awesome-occ-4b6751472a6698b7`; Memory & State | Requested and observed [Stash](https://github.com/alash3al/stash); transport accessible and substantively inspectable after one same-URL line recovery | Top-level repository/README and visible release metadata; `main`, 112 commits, visible `v0.2.11` dated 2026-05-29; no inspected commit pin; `repository_shallow`, `live_unpinned` | Self-hosted persistent-memory project using Postgres/pgvector, MCP, recall, and a project-described consolidation pipeline. Cloud and open-source implementations explicitly differ; all capability claims remain project-reported. | Placement is plausible. Hosted and repository implementations must not be treated as one mechanism or evidence lineage. Proposed `read_only`. |

## Cross-source calibration results

- The approved core-02 method transferred without increasing depth. Seventeen
  families were structurally screenable; three remained inaccessible at their
  registered URL and are proposed for exclusion rather than workaround.
- Transport success and substantive inspectability remain separate. MCP
  authorization and the Anthropic tool-writing article were rejected by the
  safe-open layer; SWE-bench returned a fetch error. None was resolved through
  another route.
- Requested and observed identities remain distinct. Codex hooks, Claude
  prompt caching, and Claude Agent SDK permissions changed hosts or routes
  automatically; SWE-bench received a trailing-slash normalization and a
  different automatic source-ID suffix.
- A visible article date, documentation version mention, branch, release,
  badge, or paper version is not an inspected immutable pin. All nine
  repository screens remained `repository_shallow`; none inspected code,
  tests, history, or a commit pin.
- Catalog category and label remain context rather than authority. The OpenAI
  eval-skills resource is an article/tutorial rather than a benchmark; HITL is
  a protocol plus implementations; Codex hooks is documentation; prompt
  caching is not compaction; and several broad systems cross catalog sections.
- Relevance and evidence strength remain separate. Official documentation,
  first-party engineering reports, research abstracts, and project READMEs can
  be directly relevant while leaving effectiveness, independence,
  applicability, and implementation unverified.
- Recurrence is not corroboration. LangGraph and the inaccessible Anthropic
  tool-writing article each preserve two occurrence joins but remain one
  source family apiece.
- The semantic annotation helper cannot preserve family IDs, occurrence IDs,
  requested/observed identities, transport versus substantive inspectability,
  visible version versus actual pin, `repository_shallow`, catalog
  corrections, or per-family lineage notes. This register is the durable join;
  the generated provenance audit remains the lifecycle-accounting view.

## Result and next gate

The proposed result retains seventeen families `read_only` and excludes three
because no substantive content was inspectable. No source is `referenced`, no
claim is declared, no evidence maturity changes, and no outline decision
follows from this batch.

Continued use of the method remains proposed at this gate; core-03 does not
authorize a later batch. The maintainer must now review the 17/3 dispositions,
catalog corrections, source lifecycles, requested/observed identities,
lineage limits, schema friction, provenance audit, and whether the method may
continue. No core-04 source may be opened until a separate explicit decision.
