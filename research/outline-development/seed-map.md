# Harness Engineering V2 — Seed Map

**Task:** `v2-outline-seed-map`

**Status:** Seed-only inspection complete; awaiting maintainer gate

**Authority:** Approved outline-development brief

**Maturity:** Structural input only; no finding, taxonomy, or evidence promotion

This map preserves each seed's own vocabulary before making bounded
cross-source judgments. A seed's categories, prominence, or repeated terms do
not become the V2 taxonomy by appearing here. Apparent recurrence across the
seeds is not treated as independent corroboration: they draw from an
overlapping contemporary agent-engineering ecosystem, and one is explicitly a
curated list.

## Seed identity and disposition

| Seed ID | Source identity | Inspection | Disposition |
| --- | --- | --- | --- |
| `v2-seed-asixiv-2606-00001` | [*Loop Engineering: The Anthropic Playbook for Designing Systems That Prompt Your Agents*](https://asixiv.org/pdf/curated/2606.00001), an 11-page 2026 conference-style reformatting and synthesis of the cited HuaShu Orange Book guide | Complete text inspection and visual review of all 11 pages | `read_only` structural input |
| `v2-seed-awesome-harness-engineering` | [ai-boost/awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering), observed `main` commit `09bda3af8c32b95958f0158e0f356076d6ab44c8` | Complete README/category structure and repository-local framing; no listed resource opened and no code/history inspected beyond identity pinning | `read_only` discovery map |
| `v2-seed-local-2606-24937v1` | Haggai Roitman, *The Hitchhiker's Guide to Agentic AI: From Foundations to Systems*, version 1.2.2 (2026), 603 pages; SHA-256 `7c5a2b81fe135dc9b08221d1da9282f99a7146f043e580eb4809364baff145fe`, 9,266,428 bytes | Complete outline-bearing and harness-relevant structural inspection; full-text extraction plus visual review of 26 selected structural pages | `read_only` structural input |

The failed GitHub API identity endpoint is separately recorded as `excluded`;
it supplied no content. The repository identity was pinned with `git
ls-remote` instead.

## Per-source extraction

### `v2-seed-asixiv-2606-00001`

**Source-native framing and intended outcome.** The paper proposes “loop
engineering” as a move beyond prompt, context, and harness engineering: a loop
is a repeated, scheduled system that can discover work, hand it off, verify it,
persist state, and run again. It is aimed at practitioners turning occasional
agent use into repeatable operational routines.

**Organization and vocabulary.** Its progression is definitional and then
operational: prompt → context → harness → loop; five loop moves (discovery,
handoff, verification, persistence, scheduling); six parts (automations,
worktrees, skills, connectors, sub-agents, and memory); generator/evaluator
roles; failure modes; costs; examples; and a “build your first loop” sequence.
The paper ends with an annotated skill, glossary, synthesis, notes, and nine
references.

**Assumptions and reference shape.** The treatment assumes a capable agent and
available product primitives, then emphasizes orchestration and operational
discipline. Its reference base is primarily a compact mix of practitioner
guides, product material, specifications, social posts, a podcast, and the
source guide rather than controlled outcome evidence.

**Omissions, tensions, and anchoring hazards.** It makes scheduling and
repetition the layer above a harness, whereas the V2 fixed-model boundary
already allows scheduling, delegation, routing, and persistent state as
harness-controlled mechanisms. Adopting that nesting would decide a contested
boundary before research. The practical sequence is also optimized for
building a loop, not for teaching the full design space or evaluating when a
loop is unnecessary. Its clear numbered framework is useful for generating
questions but unusually easy to mistake for a finished curriculum.

### `v2-seed-awesome-harness-engineering`

**Source-native framing and intended outcome.** The repository defines the
harness as scaffolding around a model—context delivery, tools, planning
artifacts, verification loops, memory, and sandboxes—and curates resources that
address a specific harness problem or offer a generalizable pattern. It also
warns that some harness components may expire as models improve.

**Organization and vocabulary.** At the pinned commit, the README contains 30
“Foundations” entries, followed by these overlapping design-primitives groups:

| Curated group | Entries |
| --- | ---: |
| Agent Loop | 21 |
| Planning | 12 |
| Context Delivery & Compaction | 25 |
| Tool Design & Tool Use | 15 |
| Skills & MCP | 34 |
| Permissions & Approval Policies | 13 |
| Memory & State | 24 |
| Task Runners & Orchestration | 34 |
| Verification Loops | 14 |
| Observability & Tracing | 15 |
| Debugging & Developer Experience | 13 |
| Human-in-the-Loop | 11 |

It then separates reference implementations (tutorials, generators/meta
tools, demo harnesses, and adjacent collections) from security/sandboxing,
evaluations, templates, production infrastructure and operations, and related
lists.

**Assumptions and reference shape.** The repository is a discovery aid with
opinionated “why it matters” annotations. Its inclusion criteria emphasize
specificity, usefulness, and transfer potential; they do not constitute an
evidence-quality, independence, or outcome-verification rubric. The list mixes
papers, vendor posts, documentation, repositories, tutorials, and curated
collections.

**Omissions, tensions, and anchoring hazards.** Permissions appears both as a
design primitive and within security; verification appears both as a loop and
within evaluations. Those overlaps may reflect useful cross-cutting concerns,
or may reveal that a flat topic inventory is the wrong organizing form. The
repository is strongly coding-agent and contemporary-product weighted.
Popularity badges, confident annotations, and category size are signals of
curator attention—not evidence of importance, effectiveness, or curriculum
priority.

### `v2-seed-local-2606-24937v1`

**Source-native framing and intended outcome.** The book is an independent
survey and educational resource for ML engineers, applied researchers, agent
developers, systems engineers, and technical leaders. It assumes basic neural
network and probability knowledge but attempts to build from first principles.
Its disclaimer says language models assisted research and drafting, that human
editing and verification were best-effort, and that readers should verify
important material independently.

**Organization and vocabulary.** The contents organize 29 chapters into six
parts: foundations; reinforcement-learning methods for LLMs; reasoning;
evaluation; agentic AI; and assessment/reference. (The introductory prose says
“five parts” while listing six.) Part V places harness material among RAG,
memory, design patterns, benchmarks, MCP, skills, A2A, multi-agent systems,
frameworks, and agentic UI.

Chapter 18, “Agent Harness — Context Management and Orchestration,” defines a
harness as the runtime that wraps an LLM into a stateful, goal-directed agent.
It assigns the runtime execution, memory, communication, and observability,
while describing reasoning as delegated to the model. Its structural coverage
includes context budgets and prompt architecture; tool schemas, routing, and
sandboxing; ReAct and plan/execute loops; multi-agent, human-in-the-loop, and
workflow graphs; state; retries, loop detection, and failure handling;
observability; production concerns; framework comparison; implementation; and
testing. Chapter 19 contrasts predefined workflows with dynamic agents and
recommends beginning with workflows when they suffice.

**Assumptions and reference shape.** The book presents a broad “complete
stack” learning journey and ends with 410 bibliography entries spanning
papers, preprints, documentation, standards, and repositories. Its breadth is
useful for locating interfaces, but its own synthesis is not independent proof
for the claims it summarizes.

**Omissions, tensions, and anchoring hazards.** Most of the book's training,
tokenization, reinforcement-learning, and model-reasoning material lies outside
V2's fixed-model scope. RAG, memory, MCP, A2A, and UI are presented as layers
adjacent to the harness even though Chapter 18's broad runtime definition can
include several of them. The claim that reasoning is wholly delegated to the
model sits uneasily beside verification, evaluation, and human challenge at
the harness layer. The book is text-only and explicitly excludes multimodal,
domain-specific, and personalization depth. Its comprehensive textbook order
could create false prerequisites and invite V2 to become a general agentic-AI
course rather than a harness-engineering program.

## Cross-source structural judgment

### Boundary conflict to preserve

The seeds do not agree on what contains what. The asixiv paper places the
repeatable, scheduled “loop” above a harness. The curated repository and the
book include loop control, scheduling, orchestration, state, or verification
inside their harness framing. V2 therefore needs an explicit boundary decision
based on useful engineering questions, not a vote among seed labels.

### Common topic candidates, not an adopted taxonomy

The seeds jointly raise possible questions around loop/control logic; context;
tools and capability interfaces; state and memory; orchestration, delegation,
and scheduling; verification and evaluation; permissions and sandboxing;
observability and debugging; cost and latency; human intervention; and
protocols or external interfaces. The maintainer has not decided which of
these, if any, the outline must cover. A later structure could treat them as
components, decisions, lifecycle stages, cross-cutting constraints, examples,
or exclusions rather than peer modules.

### Materially different organizing possibilities

The seed structures triggered six agent-generated possibilities for later
competing skeletons. No seed proposes any row in exactly this form:

| Organizational possibility | Seed feature that triggered it | Status |
| --- | --- | --- |
| Control lifecycle: intake and context construction → action → feedback → persistence → stopping | The asixiv five-move loop and Chapter 18's runtime/control sequence | Agent synthesis for later comparison |
| Responsibility map: what the harness controls, stores, exposes, checks, and escalates | The repository's overlapping component groups and the book's runtime responsibilities | Agent synthesis for later comparison |
| Engineering decision journey: task/environment constraints → architecture → implementation → operation → improvement | The repository's foundations/design/operations progression and the book's implementation/testing treatment | Agent synthesis for later comparison |
| Failure-mode route: introduce mechanisms as responses to diagnosed breakdowns | The asixiv failure section and the book's retry, loop-detection, and failure treatment | Agent synthesis for later comparison |
| Nested-systems stack: model interface → runtime → workflow → multi-agent coordination → operations | The asixiv prompt/context/harness/loop nesting and the book's adjacent layers | Agent synthesis for later comparison |
| Progressive curriculum: constraints → mechanisms → composition → operational judgment | The book's part/chapter progression and the asixiv “build your first loop” sequence | Agent synthesis for later comparison |

These alternatives are hypotheses for Stage 5, not draft outlines. Hybrids may
be stronger than any pure form, but combining them prematurely could conceal
the choice of primary organizing principle.

### Shared omissions and risks

Across the seeds, outcome evidence and transfer conditions are much thinner
than descriptive architecture. That raises potential gaps for maintainer
disposition: non-coding domains, version sensitivity, model–harness
co-adaptation, negative evidence, and mechanisms that may deserve removal as
models improve. None is pre-approved as outline scope. All three seeds can also
bias V2 toward a contemporary coding-agent ecosystem and toward comprehensive
lists instead of decision-supporting structure.

## Candidate first-hop effect

The six unopened Wave 1 candidates in `first-hop-register.md` were chosen to
challenge definition, architecture, execution topology, representation,
workflow-versus-agent sequencing, and practice/outcome framing. They are not a
representative sample and do not authorize any open. Two candidates appear to
draw on analyses of 70 public projects; their possible shared dataset or
lineage must be checked before treating them as independent.

## Provenance state

The diagnostic audit passes at
`complete_with_declared_manual_sources`: four opened identities, three
`read_only` dispositions, one failed helper endpoint `excluded`, zero claims,
zero promoted evidence, and zero unresolved native observations. All three
warnings are resolved in the event stream. The repository pin is represented
as structured version data, and the retained native calls verify that adapter
reconciliation followed the first source open. No resolution query or
first-hop open occurred.
