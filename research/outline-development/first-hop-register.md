# V2 Outline Seed Map — First-Hop Register

**Task:** `v2-outline-seed-map`

**Checkpoint:** Wave 1 complete; Wave 2 awaiting maintainer approval

**Opened first-hop families:** 6 / 12

**Resolution queries used:** 0 / 3

**Extension:** Not requested; unavailable before both ordinary waves

This is the controlling cap and eligibility record. Opened rows remain
structural inputs rather than promoted evidence; proposed rows remain unopened
leads. Neither inclusion here nor maintainer approval to open a row pre-approves
its framing, reliability, or eventual use.

## Completed Wave 1

| Source-family ID | Candidate | Direct seed attribution | Exact direct-hop evidence | Proposed wave | Approving checkpoint | Unresolved outline decision | Selection reason | Resolution query | Opened |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `wave1-openai-harness-engineering` | OpenAI, [“Harness Engineering”](https://openai.com/index/harness-engineering/) | `v2-seed-awesome-harness-engineering` | Pinned `README.md`, “Foundations,” line 65; repeated under “Context Delivery & Compaction,” line 143, and “Task Runners & Orchestration,” line 269 | Wave 1 | Seed-only maintainer gate — approved 2026-07-20 | Should V2 be organized around developer-controlled environment/scaffolding decisions, and what practical outcomes should the outline support? | The curator describes a contemporary engineering-practice frame; opening it was expected to test the list's broad placement and surface intended outcomes | None | Yes — `read_only` |
| `wave1-harness-conditions` | [“What makes a harness a harness: necessary and sufficient conditions for an agent harness”](https://arxiv.org/abs/2606.10106) | `v2-seed-awesome-harness-engineering` | Pinned `README.md`, “Foundations,” line 91 | Wave 1 | Seed-only maintainer gate — approved 2026-07-20 | What is inside the harness boundary, and is a constitutive definition useful or overly restrictive for this program? | The curator reports a necessary-and-sufficient definition; opening it was expected to challenge the seeds' incompatible boundaries and expose exclusion consequences | None | Yes — `read_only` |
| `wave1-architecture-decisions` | [“Architectural Design Decisions in AI Agent Harnesses”](https://arxiv.org/abs/2604.18071) | `v2-seed-awesome-harness-engineering` | Pinned `README.md`, “Foundations,” line 92 | Wave 1 | Seed-only maintainer gate — approved 2026-07-20 | Which dimensions are architectural decisions rather than flat topics, and which trade-offs could determine outline organization? | The curator reports a comparative architecture study; opening it was expected to test a decision-centered lens without adopting the repository's category tree | None | Yes — `read_only` |
| `wave1-scheduler-framework` | [“A Scheduler-Theoretic Framework for LLM Agent Execution”](https://arxiv.org/abs/2604.11378) | `v2-seed-awesome-harness-engineering` | Pinned `README.md`, “Design Primitives / Agent Loop,” line 117 | Wave 1 | Seed-only maintainer gate — approved 2026-07-20 | Should execution topology and sequence be a primary spine, a subordinate mechanism, or a cross-cutting design decision? | The curator reports a unified execution-control model; opening it was expected to test the asixiv seed's loop-above-harness framing | None | Yes — `read_only` |
| `wave1-natural-language-harnesses` | [“Natural-Language Agent Harnesses”](https://arxiv.org/abs/2603.25723) | `v2-seed-awesome-harness-engineering` | Pinned `README.md`, “Foundations,” line 78 | Wave 1 | Seed-only maintainer gate — approved 2026-07-20 | Should harness representation and portability be taught as a foundational concern, an implementation choice, or omitted from the first outline? | The curator reports a portable natural-language representation of control logic; opening it was expected to test code-centric assumptions | None | Yes — `read_only` |
| `wave1-building-effective-agents` | Anthropic, [“Building Effective Agents”](https://www.anthropic.com/research/building-effective-agents) | `v2-seed-awesome-harness-engineering`; `v2-seed-local-2606-24937v1` | Pinned `README.md`, “Foundations,” line 68; local PDF, §29.3.3 and bibliography entry [342] | Wave 1 | Seed-only maintainer gate — approved 2026-07-20 | Where should the workflow-versus-agent decision occur, and what prerequisite order best supports design judgment? | Both seeds describe it as a design-pattern source; opening it was expected to challenge an agent-first sequence and clarify the workflow decision | None | Yes — `read_only` |

The “Architectural Design Decisions” and “Scheduler-Theoretic” papers share an
author, a 70-project scale, many named projects, and a closely related public
project frame. Their exact transformation or dataset identity was not
established during structural screening, but substantial lineage overlap is
apparent. Recurrence between them is not independent corroboration.

## Proposed Wave 2 — unopened

| Source-family ID | Candidate | Direct seed attribution | Exact direct-hop evidence | Proposed wave | Approving checkpoint | Unresolved outline decision | Selection reason | Resolution query | Opened |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `wave2-long-running-generator-evaluator` | Prithvi Rajasekaran, *Building long-running agentic applications: the generator/evaluator pattern* | `v2-seed-asixiv-2606-00001` | Seed PDF, page 11, reference [4]; source is also the named basis for the seed's generator/evaluator section | Wave 2 | First-hop wave gate — awaiting maintainer approval | Should longitudinal verification, handoff, persistence, and stopping form one cross-cutting control strand rather than separate component chapters? | A first-party long-running-application account could test whether the seed's strongest lifecycle claim survives inspection of its named source and whether operation should shape the outline spine | Planned exact-title identity resolution after approval; would use query 1 / 3 | No |
| `wave2-stripe-minions` | Steve Kaliski, *Stripe's Minions: 1,300 PRs a week* | `v2-seed-asixiv-2606-00001` | Seed PDF, page 11, reference [5]; named enterprise case in the abstract and operational examples | Wave 2 | First-hop wave gate — awaiting maintainer approval | Must operating model, throughput, review economics, and retained human authority appear in the main knowledge architecture rather than a terminal operations section? | This named operator account could challenge the current coding-practice concentration with a distinct organization and expose which scale claims are structural versus anecdotal | Planned exact-title identity resolution after approval; would use query 2 / 3 | No |
| `wave2-cognitive-architectures` | Sumers et al., [*Cognitive Architectures for Language Agents*](https://arxiv.org/abs/2309.02427) | `v2-seed-local-2606-24937v1` | Local PDF, bibliography entry [329], page 598; cited in the book's memory and agent-architecture framing | Wave 2 | First-hop wave gate — awaiting maintainer approval | Does a model-inspired cognitive-architecture frame materially improve the harness boundary and responsibility vocabulary, or does it over-center model cognition? | An older peer-reviewed conceptual lineage could counter the 2026 coding-harness framing and test whether memory, action, decision, and learning should be responsibilities, interfaces, or exclusions | None; the seed supplies the exact arXiv URL | No |
| `wave2-mcp-specification` | [Model Context Protocol specification](https://modelcontextprotocol.io) | `v2-seed-asixiv-2606-00001`; `v2-seed-local-2606-24937v1` | Seed PDF, page 11, reference [6]; local PDF, Chapter 18 MCP treatment and bibliography entry [335], page 598 | Wave 2 | First-hop wave gate — awaiting maintainer approval | Where should external capability protocols and host–client–server trust boundaries live without turning the outline into a standards or tool catalog? | A primary specification with two-seed attribution can test protocols as an interface/cross-cutting concern and reduce reliance on vendor retrospectives or curator categories | None; both seeds supply the canonical specification identity | No |
| `wave2-gaia-benchmark` | Mialon et al., [*GAIA: A Benchmark for General AI Assistants*](https://arxiv.org/abs/2311.12983) | `v2-seed-local-2606-24937v1` | Local PDF, §29.3.3, page 576, and bibliography entry [362], page 600 | Wave 2 | First-hop wave gate — awaiting maintainer approval | How early must task success, tool-use evidence, cost, and cross-domain transfer requirements constrain the outline and its later research questions? | A general-assistant benchmark supplies a non-vendor, non-coding evaluation frame that can test whether evidence and evaluability belong before architecture choice | None; the seed supplies the exact arXiv URL | No |
| `wave2-indirect-prompt-injection` | Greshake et al., *Not What You've Signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection* | `v2-seed-local-2606-24937v1` | Local PDF, §29.2.5 and §29.3.4, pages 575–576, and bibliography entry [408], page 603 | Wave 2 | First-hop wave gate — awaiting maintainer approval | Should trust boundaries and adversarial environmental input be a cross-cutting design constraint or a failure-first traversal, and where does adjacent security stop? | A concrete adverse source can challenge happy-path and coding bias while testing the brief's rule that security belongs only where it materially shapes a harness decision | Planned exact-title identity resolution after approval; would use query 3 / 3 | No |

Wave 2 uses two asixiv-only leads, three book-only leads, and one lead shared by
those seeds. It adds no curated-repository-only source, so the ordinary
12-source plan would contain five sources attributable solely to the curated
repository—below the approved ceiling of six. The three planned identity
queries are not yet executed and would exhaust the Stage 4 resolution-query
cap if this wave is approved unchanged.

## Why Wave 1 was bounded as it was

Wave 1 deliberately favors sources that could change the outline's boundary,
primary organizing principle, or sequence before detail accumulates. It does
not yet balance domains, mechanism families, evidence modes, positive and
negative results, or closed and open systems. Those are later selection
questions if the maintainer approves continued first-hop screening.

All six candidates are attributable to the same curated repository; only
`wave1-building-effective-agents` is also directly cited by the book, and none
is attributable solely to the asixiv seed. This is a material curator-anchoring
risk. The completed wave accepted that concentration only because the six exact leads
span six high-leverage unresolved outline decisions without a resolution
query.

## Why Wave 2, and what it still will not cover

The proposal targets the remaining questions most likely to alter the primary
organizing principle or sequence: long-horizon control and human judgment,
operational scale, an older architectural counterframe, protocol boundaries,
non-coding evaluation, and adversarial environmental input. It deliberately
tests the Wave 1 pressure toward a constraints-to-decisions journey rather than
collecting more mechanism categories.

The wave would still not establish representative domain coverage, balance
open and closed implementations, validate effectiveness claims, or justify a
taxonomy. It contains two sources mediated into the seed by the same loop-
engineering synthesis and two standards/evaluation-style sources that may have
limited direct effect. Those are known costs of using the remaining first-hop
budget for structural falsification rather than breadth for its own sake.

## Resolution-query log

| Query number | Exact title or identifier | Direct seed and location | Resolution intent recorded before use | Result identity only | Opened |
| --- | --- | --- | --- | --- | --- |
| None | — | — | — | — | No |

The three Wave 2 query intentions are predeclared in its rows but remain
unexecuted. They enter this log only if the maintainer approves the
corresponding source families.

## Gate rules

- A candidate must be directly named, cited, or linked by a mandatory seed.
- Before any later open, its row must state the unresolved outline decision and
  expected structural effect.
- Each ordinary wave contains at most six unique source families and requires
  the corresponding explicit checkpoint approval.
- Resolution results remain unopened until the corresponding wave is approved;
  no Wave 2 resolution query or source open has occurred.
- Anything discovered inside a first-hop source is second hop and prohibited.
