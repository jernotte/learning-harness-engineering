# Harness Engineering V2 — Seed Map

**Task:** `v2-outline-seed-map`

**Status:** `awesome-screen-core-01` complete; maintainer screening gate current

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

## First-hop Wave 1 extraction

All six approved source families were inspected directly. They remain
`read_only` structural inputs: none is a promoted finding, none establishes an
adopted boundary or taxonomy, and no reference discovered inside them was
opened.

### `wave1-openai-harness-engineering`

**Source-native framing and intended outcome.** OpenAI's 2026 engineering
retrospective describes a five-month, greenfield coding-product experiment in
which humans steered while Codex agents produced the repository. Its central
problem is not a component inventory but an enabling question: when the agent
fails, what capability, information, feedback, or enforceable constraint is
missing from its environment?

**Organization and vocabulary.** The article moves from the empty repository
and a changed engineer role through application legibility, repository
knowledge as the system of record, agent legibility, architectural enforcement,
merge philosophy, autonomy, entropy, and continuing unknowns. Recurring terms
include progressive disclosure, repository-local knowledge, worktree isolation,
mechanical enforcement, observable application behavior, feedback loops, and
background garbage collection.

**Assumptions and limits.** The reported throughput and development-time
figures are first-party, source-reported outcomes from one organization, one
coding domain, and an unusual no-manually-written-code constraint. The source
itself says long-term architectural coherence remains unknown. It does not
isolate the contribution of individual harness choices or show transfer to
other domains.

**Structural effect.** This strengthens an engineering-decision or
failure-response journey: start with a task and operating environment, diagnose
what prevents dependable work, then make the missing capability legible and
enforceable. It weakens a flat component taxonomy and suggests that operation,
maintenance, and entropy control belong in the main journey rather than an
afterthought. This is a candidate effect for later skeleton comparison, not an
adopted sequence.

### `wave1-harness-conditions`

**Source-native framing and intended outcome.** The June 2026 preprint asks for
conceptual hygiene: a harness exists when four necessary conditions coexist—an
agent loop, a tool interface, context management, and control mechanisms. It
treats memory, observability, model switching, and several other mechanisms as
qualifiers rather than constitutive requirements.

**Organization and vocabulary.** The paper proceeds through genealogy,
constitutive definition, boundary tests, six coding-harness applications, and
four design tensions: autonomy versus control, broad versus curated context,
generalist versus specialized, and open permission versus containment. It
excludes an agent framework, an SDK without a runtime loop, IDE autocomplete,
an evaluation harness, and a fixed workflow orchestrator from the core concept.

**Assumptions and limits.** This is a conceptual argument, not an effectiveness
study. Applying the test to six systems selected as known harnesses offers
little discriminating evidence; the paper itself says the positive cases are
near-tautological and places more weight on the exclusions. Its examples are
coding-agent weighted, and its strict adaptive-loop requirement conflicts with
V2's approved interim boundary, which allows fixed workflows and scheduling
when they surround model calls.

**Structural effect.** A constitutive test may be useful as one boundary
instrument and a source of edge cases. It should not silently become the V2
membership rule. The disagreement makes boundary choice an explicit early
decision and suggests teaching multiple useful investigation boundaries before
organizing the mechanisms inside any one of them.

### `wave1-architecture-decisions`

**Source-native framing and intended outcome.** This April 2026 preprint uses
“agent harness” as a loose working label and reports a protocol-guided,
agent-assisted qualitative analysis of 70 publicly available projects frozen
on 23 March 2026. It asks which architectural decisions recur, which choices
co-occur, and which recurring bundles describe the sampled design space.

**Organization and vocabulary.** Five focal dimensions—subagent architecture,
context management, tool systems, safety mechanisms, and orchestration—were
retained from a larger coding scheme because they recurred, were comparatively
codable, and served the paper's questions. Descriptive co-occurrence analysis
then supports five interpretive patterns: lightweight tool, balanced CLI,
multi-agent orchestrator, enterprise full-featured, and
scenario-verticalized/research. The paper explicitly says these are descriptive
centers of gravity, not maturity levels, quality tiers, causal effects, or
latent classes.

**Assumptions and limits.** The sample contains 67 source repositories and
three public-evidence comparison cases, is mostly community-led, and permits
sampled code reading for large projects. Discovery was systematic but not
exhaustive; the five dimensions are stable for this analysis rather than proof
of field saturation. The associations are descriptive, and comparative
architectural outcomes remain future work.

**Structural effect.** The source strengthens “consequential decisions and
coherent bundles under constraints” as a possible organizing principle. It
also argues against copying its five dimensions as headings: the paper chose
them for comparative codability, not for complete knowledge organization or
curriculum sequence. Product and project families are more useful here as
evidence for decisions than as the outline spine.

### `wave1-scheduler-framework`

**Source-native framing and intended outcome.** This April 2026 position and
design paper models agent loops and graph executors as schedulers. Its key axes
are ready-set cardinality, policy explicitness, and policy determinism. It then
proposes “Graph Harness,” which trades expressiveness for explicit execution
commitment, bounded recovery, auditable state transitions, and side-effect-aware
scheduling.

**Organization and vocabulary.** The paper moves from a scheduler-unified
framework through planning failures, four design principles, an immutable
static-DAG commitment, separated planning/execution/recovery contexts, a node
state machine, join semantics, and a seven-group experimental protocol. The
protocol is a future design, not completed validation. Static graphs are
presented as appropriate for “verifiable engineering tasks,” while exploratory,
dynamically evolving, and creative tasks are acknowledged counterexamples.

**Assumptions, limits, and lineage.** The source explicitly reports no
experimental validation. Its embedded 70-project survey is labeled
non-peer-reviewed, relies on subjective selection and classification, and has
some category-boundary sensitivity. It shares the author, 70-project scale,
many named projects, and a closely related sampling frame with
`wave1-architecture-decisions`; the exact transformations are not established,
but substantial corpus lineage is apparent. Recurrence between the two is not
independent corroboration.

**Structural effect.** Execution topology is a consequential decision lens,
especially when paired with commitment, recovery, side effects, and task
predictability. The source does not justify making scheduling the whole outline
spine: its own applicability boundary shows that execution structure follows
task and environment constraints. It also makes recovery and stopping part of
control semantics rather than detachable “reliability” topics.

### `wave1-natural-language-harnesses`

**Source-native framing and intended outcome.** The May 2026 preprint asks
whether harness policy can be externalized as editable natural language and
executed by a shared Intelligent Harness Runtime (IHR). It separates policy
from exact mechanisms: natural language owns task-family roles, stages,
validation, recovery, state, and delegation choices; runtime code and adapters
retain precise, reproducible, safety-sensitive, and externally coupled work.

**Organization and vocabulary.** The paper defines a four-layer system—base
agent, runtime policy, NLAH, and scripts/adapters—then compares native-code,
prompted, and IHR-executed realizations across coding, terminal-use, and
computer-use benchmarks. It reports task outcomes, process and mechanism
metrics, and module ablations for file-backed state, evidence-backed answering,
verification, self-evolution, multi-candidate search, orchestration, compaction,
and memory.

**Assumptions and limits.** The experiments use one IHR implementation, Codex
CLI 0.123.0, GPT-5.4-mini, three harness families, and particular benchmark
conditions. The reported results show both gains and costs: natural-language
realizations can remain competitive while increasing calls or tokens; handoff
is a major weakness; added branching can reduce results; and a code harness
ported across models can encode brittle stopping assumptions. The authors name
natural-language imprecision, model dependence, cost, and safety or permission
risks as limits.

**Structural effect.** Representation and ownership are real design decisions,
not merely documentation choices, because they affect inspectability,
portability, exactness, and testability. They are better treated as a
cross-cutting implementation dimension than assumed as a foundational module.
The paper also sharpens an evidence rule for later research: inspect executed
behavior rather than infer control from policy text alone.

### `wave1-building-effective-agents`

**Source-native framing and intended outcome.** Anthropic's 2024 practitioner
article distinguishes workflows, where code fixes the control path, from
agents, where the model dynamically directs process and tool use. It recommends
starting with the simplest adequate solution, including a single model call,
because additional agentic complexity trades cost and latency for possible
performance.

**Organization and vocabulary.** The article progresses from an augmented LLM
through prompt chaining, routing, parallelization, orchestrator-workers, and
evaluator-optimizer before reaching autonomous agents. Pattern fit depends on
task decomposition, classification quality, independent work, evaluability,
and whether the required steps can be known in advance. Agent execution relies
on environmental ground truth, checkpoints, stopping conditions, clear tool
interfaces, and feedback.

**Assumptions and limits.** The source reports experience from Anthropic and
customer teams. It is a vendor-authored practitioner synthesis, not a controlled
comparison of the patterns or a field-complete taxonomy. Its examples emphasize
customer support and coding because those tasks combine action with observable
success criteria and feedback loops.

**Structural effect.** “Should this be agentic at all?” becomes a prerequisite
decision rather than an implicit premise. Task shape, evaluability, cost, trust,
and required flexibility should appear before choosing loop, workflow, or
multi-agent mechanisms. This materially strengthens a constraints-to-decisions
sequence and weakens any agent-loop-first outline.

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

Wave 1 does not eliminate these possibilities, but it changes their relative
pressure:

- the **engineering decision journey** gains support because task shape,
  operating constraints, ownership, control commitments, and evidence precede
  mechanism choice across several sources;
- the **failure-mode route** gains support because missing capabilities,
  propagation, recovery, handoff loss, brittle stopping, and entropy expose why
  mechanisms exist;
- the **control lifecycle** remains useful as a traversal path, especially for
  observation, action, feedback, persistence, recovery, and stopping;
- the **nested-systems stack** weakens as a primary spine because the sources
  disagree on whether workflows, schedulers, evaluation, memory, and repeated
  loops are inside or outside a harness; and
- the **responsibility map** remains useful as an analytical overlay, but the
  papers show that ownership and representation often cut across mechanism
  families.

These are still agent-generated structural hypotheses for maintainer review,
not accepted outline choices.

### Sequence pressures exposed by Wave 1

The following possible dependency order is now more plausible, but remains
unapproved:

1. establish the concrete task, environment, operating conditions, and evidence
   needed to recognize success;
2. decide whether a single call, fixed workflow, adaptive agent, or composed
   system is warranted;
3. draw an investigation boundary and assign ownership for state, policy,
   exact mechanisms, and human authority;
4. choose execution and control commitments, then the mechanisms that realize
   them;
5. make behavior observable and testable through environment feedback,
   verification, recovery, and stopping; and
6. operate, maintain, and revise the system under cost, trust, version, and
   entropy pressures.

This is not a draft outline. It is a compact statement of the dependency
pressure that the catalog landscape and any later maintainer-approved source
openings should test rather than inherit.

### Shared omissions and risks

Across the seeds, outcome evidence and transfer conditions are much thinner
than descriptive architecture. That raises potential gaps for maintainer
disposition: non-coding domains, version sensitivity, model–harness
co-adaptation, negative evidence, and mechanisms that may deserve removal as
models improve. None is pre-approved as outline scope. All three seeds can also
bias V2 toward a contemporary coding-agent ecosystem and toward comprehensive
lists instead of decision-supporting structure.

## Wave 1 coverage limits and remaining questions

Wave 1 is not representative. Four of its six sources are 2026 arXiv
preprints selected by the same curated repository; the other two are vendor
engineering articles. The set remains heavily coding-agent weighted. The
NLAH paper adds terminal-use and computer-use benchmarks, and the Anthropic
article adds customer support, but neither corrects the overall discovery and
lineage concentration.

The most consequential remaining structural questions are:

- whether long-running operation and human judgment belong in the main spine
  or as cross-cutting constraints;
- whether an older cognitive-architecture frame materially changes the
  boundary or decision vocabulary;
- where shared protocols and external interfaces belong without becoming a
  product or standards catalog;
- how early evaluation and domain-transfer requirements should constrain the
  structure; and
- whether a trust-boundary failure source materially strengthens a
  failure-first route or only imports an adjacent security track.

The former Wave 2 proposal in `first-hop-register.md` was withdrawn before
approval. The V2-D007 mapping of the complete pinned Awesome catalog and Walking
Labs curriculum candidate is complete, and V2-D008 approved that catalog gate.
The current source-screening gate controls whether any new outbound source may
be selected or opened.

## V2-D007 method correction

Wave 1 remains a completed six-source structural screen, but it no longer
defines the selection path forward. The Awesome repository is now treated as a
lead catalog whose complete qualifying outbound occurrence universe has been
inventoried and deduplicated without turning curator categories into evidence.
Walking Labs is evaluated as an existing curriculum proposal, not adopted as an
outline. V2-D008 approved that catalog gate and authorized only the first
calibration batch.

## V2-D008 direct-screen calibration

The exact 20-family `awesome-screen-core-01` batch is complete. Nineteen direct
pages are retained `read_only`; one LangGraph endpoint is excluded because the
registered URL yielded only a redirect shell and no further traversal was
authorized. The screen corrected a legacy Letta destination, an ECC repository
rename and scope expansion, several catalog source-form assumptions, and the
distinction between relevance and evidentiary strength. It also exposed schema
needs for requested-versus-observed identity, repository-shallow inspection,
transport accessibility versus substantive inspectability, and multiple
same-family opens. These are calibration results, not an adopted structure or
cross-source finding. The joined register is
`research/outline-development/awesome-screen-core-01.md`.

## Provenance state

The consolidated diagnostic audit passes at
`complete_with_declared_manual_sources`: zero errors, ten resolved warnings,
seven native boundaries, 289 native observations, and zero unresolved
observations. Across the structural program to date it records 32 unique opened
source identities, 30 `read_only` dispositions, two exclusions, zero searches,
zero claims, and zero promoted evidence. The `awesome-screen-core-01` package
contributes 20 unique opened identities, 19 `read_only` dispositions, one
exclusion, and seven intentionally resolved `repository_shallow` warnings.
