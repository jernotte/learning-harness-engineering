# Walking Labs Curriculum-Candidate Analysis

**Task:** `v2-outline-seed-map`<br>
**Authority:** V2-D007 structural input only<br>
**Repository:** `https://github.com/walkinglabs/learn-harness-engineering`<br>
**Pinned commit:** `e587e4cce9cfe9b0523fd79d6e0152d4a1f1dfc3`<br>
**Disposition:** `read_only`
**Promotion:** None

This artifact describes the curriculum that the repository proposes. It does
not adopt its objectives, definition, subsystem model, sequence, projects,
reference judgments, or effectiveness claims as V2 authority.

## Inspection boundary

The structural inspection covered:

- the complete root `README.md` curriculum, audience, prerequisites, learning
  path, syllabus, resource-library, and reference sections;
- `docs/en/index.md`;
- all 13 English lecture navigation pages at
  `docs/en/lectures/*/index.md`, including their questions, major headings,
  key takeaways, exercises, and named further-reading surface;
- the English project index and all seven project navigation pages at
  `docs/en/projects/`;
- the English resource, template, advanced-pack, reference, method-map, and
  skills navigation pages under `docs/en/`; and
- bounded Git identity/lineage metadata only: heads, roots, commit graphs,
  README hashes and initial headings, the introduction of the course's Awesome
  link, and current literal-URL overlap.

The repository contains English plus 14 translated documentation/README
variants. Those translations were enumerated but not re-read as independent
curricula. Code examples, starter and solution implementations, generated
coursebooks, screenshots, build tooling, the bundled skill implementation, and
project source code were not inspected. No course link or reference destination
was opened.

During a later evidence-location audit, one overly broad pattern search across
`docs/en` returned isolated matching lines from some code/template navigation
Markdown outside the declared substantive surface. None of those incidental
matches is used in this analysis. The interaction is retained in provenance; it
does not expand the approved inspection boundary or support a claim.

The approved brief simultaneously requires the two Awesome repositories'
lineage to be established and says the shallow-repository warning should be
resolved without inspecting prohibited “implementation code or history.” This
pass interpreted the explicit lineage mandate as permitting only the Git
identity metadata above, while continuing to prohibit implementation history.
That interpretation is recorded rather than silently treated as settled and
requires maintainer ratification at the catalog gate. Rejecting it would remove
the lineage conclusion; it would not affect the curriculum-structure analysis.

## Source-native objectives and audience

The repository presents itself as a project-based course for people already
using coding agents in real repositories. Its stated primary outcome is more
reliable agent execution through environment design, persistent state,
verification, scope control, and session lifecycle. It assumes terminal and Git
fluency, ability to read and write application code, basic debugging skill, and
access to a coding agent that can edit files and run commands.

The course is therefore narrower than the V2 program boundary in three visible
ways:

1. it is explicitly about **AI coding agents**;
2. it treats the **software repository** as the central operating environment;
   and
3. its practical target is a developer improving agent performance on one
   evolving Electron application.

Those are coherent curriculum choices, not evidence that V2 should make the
same choices.

## Curriculum architecture and sequence

The course pairs two question-led lectures with one project for its first six
phases, then adds one lecture/project pair for autonomous loops.

| Phase | Lectures | Project | Source-native progression | Structural caution for V2 |
| --- | --- | --- | --- | --- |
| 1 — see the problem | L01 capable models still fail; L02 define a harness | P01 prompt-only versus rules-first | motivate reliability failure, then introduce a component model | begins from a strong “fix the harness first” thesis before independently establishing the boundary or causal evidence |
| 2 — structure the repository | L03 repository as system of record; L04 split instructions | P02 agent-readable workspace | make knowledge visible, then apply progressive disclosure | treats repository-local documentation as the normal context architecture |
| 3 — connect sessions | L05 persist continuity; L06 separate initialization | P03 multi-session continuity | externalize state and make restart deterministic | privileges file-backed continuity and initialization scripts over other state/runtime designs |
| 4 — feedback and scope | L07 WIP=1; L08 feature lists | P04 runtime feedback and scope control | atomize work, externalize scope, and gate state transitions | turns one-feature-at-a-time and feature lists into broad defaults from a coding-project setting |
| 5 — verification | L09 prevent premature victory; L10 require full-pipeline tests | P05 generator/evaluator role separation | replace self-assessment with execution evidence and a separate checker | combines termination, testing, and multi-agent review without fully separating their design questions |
| 6 — integrate and operate | L11 observability; L12 clean handoff | P06 complete harness and ablation | expose runtime signals, preserve restart quality, then combine the preceding artifacts | capstone accumulation can obscure which mechanisms are necessary, redundant, or task-specific |
| 7 — automate the loop | L13 autonomous loops | P07 goal, timer, and maker-checker loops | move the human “outside the loop” using automation, worktrees, skills, connectors, subagents, and external state | the late extension introduces a broader orchestration layer after the original capstone and may belong beside, rather than after, the prior spine |

The dependency logic is easy to follow: problem -> definition -> repository
legibility -> continuity -> scope -> verification -> observability/cleanup ->
automation. The sequence is strongest as a practical onboarding journey. It is
not yet a neutral knowledge architecture because many later choices are
preselected by the early repository-centric component model.

## Project pedagogy

Projects P01–P06 reuse one Electron knowledge-base application. Each stage adds
product behavior and harness artifacts, and one solution becomes the next
starter. The course uses baseline/strong-harness comparisons, restart tests,
verification evidence, evaluator scores, intervention counts, and an eventual
ablation exercise. P07 changes the unit of practice from a session to a
repeating loop.

This offers several useful teaching patterns:

- concepts are exercised immediately rather than left as terminology;
- the learner repeatedly compares behavior under different surrounding
  systems;
- persistent artifacts make the course cumulative; and
- projects ask for observable results rather than document production alone.

It also creates interpretation limits:

- successive projects are coupled, so accumulated product and harness changes
  confound simple before/after comparisons;
- most project pages describe intended comparisons rather than a complete
  reproducible experimental protocol;
- one application stack and coding-agent domain dominate transfer; and
- a supplied “solution” can teach one implementation while appearing to prove
  the general mechanism.

## Resource and reference surface

The repository offers three applied layers:

1. a minimal pack centered on `AGENTS.md`/`CLAUDE.md`, `init.sh`, a progress
   log, and `feature_list.json`;
2. additional handoff, clean-state, evaluator, and quality templates; and
3. a more opinionated “OpenAI Advanced Pack” with repository-local product,
   architecture, plan, reliability, security, quality, and reference files.

Its reference navigation distinguishes a small backbone, selected 2026
extensions, internal method notes, and a suggested reading order. These labels
are the course curator's judgment. No reference was opened in this pass, and no
reference description is treated as verified source evaluation.

## Conceptual friction inside the course

The repository does not present one stable five-part harness model:

- the root README defines **Instructions, State, Verification, Scope, and
  Session Lifecycle**; while
- Lecture 02 defines **Instructions, Tools, Environment, State, and Feedback**.

The two lists can be reconciled analytically—scope and lifecycle may be policies
implemented through instructions/state, while tools and environment may be
runtime capabilities—but the course does not make that reconciliation
explicit. The mismatch matters because the five-part model supplies much of
the later sequence. V2 should preserve this as taxonomy friction, not silently
choose one version.

Other visible boundary tensions include:

- L13 says loop engineering is “one floor above” harness engineering, while its
  six primitives overlap V2's possible harness scope for delegation,
  orchestration, tools, state, and automation;
- P05 calls its mechanism self-verification while prescribing role separation,
  which are distinct control designs; and
- the course alternates between “everything outside model weights” as a broad
  boundary and a much narrower repository-file operating kit in its practical
  defaults.

## Assumptions, omissions, and anchoring hazards

### Assumptions embedded in the proposal

- coding repositories are the primary environment;
- durable state normally lives in files and Git;
- deterministic checks and explicit artifacts are the leading reliability
  mechanisms;
- work should usually be serialized at one feature per session;
- the learner can compare runs while holding the coding agent and target task
  sufficiently stable; and
- human judgment remains available to design rubrics, inspect results, and
  decide when automation is trustworthy.

### Analyst-inferred gaps relative to the provisional V2 brief

The following comparison uses only the already approved audience, outcome, and
scope questions in the V2 brief. It is not an adopted topic inventory, future
taxonomy, or requirement that every item become outline content:

- non-coding and non-repository domains;
- context selection, compaction, and memory designs beyond repository files;
- tool-schema design, dynamic capability discovery, model routing, and
  protocol boundaries;
- permissions, sandboxing, secrets, and adversarial environmental input as
  design constraints;
- workflow and multi-agent topology before the late generator/evaluator and
  loop sections;
- deployment, multi-tenancy, production economics, cost and latency control,
  and organization-level operating models;
- rigorous evaluation design, statistical uncertainty, negative results, and
  transfer across tasks, models, and harness versions; and
- explicit treatment of when a mechanism should be removed as model
  capabilities change, beyond a brief simplification/ablation recommendation.

### Anchoring hazards

- the polished five-subsystem diagrams may make a contested component list
  feel settled;
- the problem-first sequence can still anchor V2 toward the course's chosen
  failure diagnoses and file artifacts;
- repeated reference to OpenAI and Anthropic practitioner accounts can appear
  like independent outcome evidence when the course has synthesized them into
  one narrative; and
- the practical strength of the projects can pull a research outline toward a
  coding workshop before V2 has approved its objectives and domain breadth.

## Awesome-repository lineage

The course links `walkinglabs/awesome-harness-engineering` as a core reference.
At the inspected heads:

| Repository | Commit | History facts observed offline |
| --- | --- | --- |
| `walkinglabs/learn-harness-engineering` | `e587e4cce9cfe9b0523fd79d6e0152d4a1f1dfc3` | the Walking Labs Awesome link entered `docs/en/index.md` in `1961fff…` and `README.md` in `f90e952…`, both on 2026-04-02 |
| `walkinglabs/awesome-harness-engineering` | `f84f1701974cf1ad67dd774b025b33e613275cee` | 61 commits; root commit `15f877a…` by `sanbuphy` on 2026-03-29 |
| `ai-boost/awesome-harness-engineering` | `09bda3af8c32b95958f0158e0f356076d6ab44c8` | 197 commits; root commit `ca4c566…` by `noahbenjamin1994` on 2026-03-29 |

The two Awesome repositories have no shared commit hash in their complete local
histories, different root commits and initial category structures, different
current README hashes, and different growth histories. They are therefore not
Git forks or mirrors in the inspected Git lineage. Their current READMEs share
22 literal HTTP URL strings, of which two are common Awesome-list chrome
(`awesome.re` and its badge) and 20 are substantive resource URLs. That overlap
is expected for catalogs covering the same field and does not establish
independent corroboration.

The bounded conclusion is:

- the course is directly connected to the **Walking Labs** catalog;
- the **AI Boost** catalog is a separately initialized and maintained catalog;
  but
- neither catalog placement nor overlap is independent evidence about any
  linked resource, topic, or outcome.

## Candidate lessons for V2's outline process

Without adopting content, the course supplies useful outline-development tests:

- Does the eventual outline state audience, prerequisites, decisions, and
  observable outcomes as clearly as this course does?
- Should a problem/decision journey precede mechanism coverage?
- Which ideas require immediate practice, and which require comparative
  evidence before teaching?
- Can a stable example support cumulative learning without becoming the
  program's implicit domain boundary?
- Are lifecycle, verification, and operation best taught as a sequence, as
  cross-cutting constraints, or both?
- Does loop engineering sit inside harness engineering, above it, or across the
  same responsibilities at a different timescale?

These are questions for later competing skeletons. The curriculum itself is not
a baseline outline.

## Evidence-location map

Every location below is relative to the pinned course commit
`e587e4cce9cfe9b0523fd79d6e0152d4a1f1dfc3`. The paths were read from the local
pin; outbound links displayed inside them were not opened.

| Analysis area | Exact pinned locations inspected | What the location supports |
| --- | --- | --- |
| Identity, language surface, objective, and audience | `README.md:1-55`, `README.md:101-184`, `README.md:351-381` | 15 displayed languages, 13 lectures, seven projects, coding-agent/repository audience, stated reliability thesis, learning path, and syllabus |
| Seven-phase sequence | `README.md:351-381`; the title, opening question, major headings, key takeaways, and exercise sections of each of the 13 lecture files listed below | lecture order, paired conceptual progression, and the late loop-engineering extension |
| Project pedagogy | `README.md:371-381`, `README.md:590-596`; `docs/en/projects/project-01-baseline-vs-minimal-harness/index.md`; `docs/en/projects/project-02-agent-readable-workspace/index.md`; `docs/en/projects/project-03-multi-session-continuity/index.md`; `docs/en/projects/project-04-incremental-indexing/index.md`; `docs/en/projects/project-05-grounded-qa-verification/index.md:6-35`; `docs/en/projects/project-06-runtime-observability-and-debugging/index.md:6-34`; `docs/en/projects/project-07-loop-engineering-first-loop/index.md:5-138` | recurring Electron application, weak/strong comparisons, role comparison, capstone ablation, and loop experiments |
| Resource layers | `docs/en/resources/index.md:1-58`; `docs/en/resources/openai-advanced/index.md:1-83`; `docs/en/resources/reference/index.md:1-87`; `docs/en/resources/templates/index.md` navigation/headings only | minimal pack, added templates, advanced pack, reference grouping, and curator-supplied reading order |
| Conflicting subsystem models | `README.md:136-178`; `docs/en/lectures/lecture-02-what-a-harness-actually-is/index.md:10`, `:32`, `:40-71`, `:89-91` | root Instructions/State/Verification/Scope/Lifecycle model versus lecture Instructions/Tools/Environment/State/Feedback model and broad “outside model weights” boundary |
| Loop boundary and verification terminology | `docs/en/lectures/lecture-13-loop-engineering/index.md:141-180`, `:464-466`; `docs/en/projects/project-05-grounded-qa-verification/index.md:6-22` | “one floor above” claim, six loop primitives, and self-verification label paired with generator/evaluator separation |
| Course reference relationship | `README.md:48-55`; Git `-S` checks described below | direct link to the Walking Labs Awesome repository and first introduction commits |

The 13 lecture files used for structural sequencing are:

1. `docs/en/lectures/lecture-01-why-capable-agents-still-fail/index.md`
2. `docs/en/lectures/lecture-02-what-a-harness-actually-is/index.md`
3. `docs/en/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md`
4. `docs/en/lectures/lecture-04-why-one-giant-instruction-file-fails/index.md`
5. `docs/en/lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md`
6. `docs/en/lectures/lecture-06-why-initialization-needs-its-own-phase/index.md`
7. `docs/en/lectures/lecture-07-why-agents-overreach-and-under-finish/index.md`
8. `docs/en/lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md`
9. `docs/en/lectures/lecture-09-why-agents-declare-victory-too-early/index.md`
10. `docs/en/lectures/lecture-10-why-end-to-end-testing-changes-results/index.md`
11. `docs/en/lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md`
12. `docs/en/lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md`
13. `docs/en/lectures/lecture-13-loop-engineering/index.md`

### Reproducible bounded lineage observations

The lineage comparison used only `git rev-parse HEAD`, `git rev-list --all`,
`git rev-list --max-parents=0 --all`, `git show` of root `README.md`, and
`git log --reverse -S<course-named-url>` for `README.md` and
`docs/en/index.md`, plus local SHA-256 and literal-URL set comparison of the
three pinned READMEs. It did not inspect implementation diffs.

| Check | Walking Labs Awesome | AI Boost Awesome |
| --- | --- | --- |
| Head | `f84f1701974cf1ad67dd774b025b33e613275cee` | `09bda3af8c32b95958f0158e0f356076d6ab44c8` |
| Complete local commit count | 61 | 197 |
| Root | `15f877a7939dc03813d338da22bcd105847a84d8`, `sanbuphy`, `2026-03-29T19:44:01+08:00` | `ca4c56670fb2d15e95beed46338e8d59a5315483`, `noahbenjamin1994`, `2026-03-29T23:18:02+08:00` |
| Current README SHA-256 | `459ddc6db897b4e328e44addfdc7483090fb028318d8303de8d78cc50750100c` | `4b7f0642e294fb528499b0920a03ec54035f1dc6b0630db5e045e4781fd77c7e` |
| Initial H2 organization | Definitions/field notes; long-running state; playbooks; evals/observability; orchestration/implementations | foundations; design primitives; reference implementations; security; evals; templates; related lists |

The complete local commit sets have zero hash in common. The course's direct
Walking Labs Awesome link first appears in `docs/en/index.md` at
`1961fff00d9a790da7662f1133985c6670c42545` and in `README.md` at
`f90e952e6e5da034cc06fb0b03b6f9dd51c12174`, both dated 2026-04-02. The
literal-URL comparison produces 22 shared strings; excluding the common
Awesome-list home and badge leaves 20 substantive resource URLs. These checks
support only the bounded non-fork/non-mirror inference stated above. They do not
establish editorial independence, source independence, or effectiveness.

## Catalog-gate disposition

Retain the pinned course as a `read_only` curriculum candidate. No course
implementation deep dive was conducted or is proposed at this gate. Its
outbound references remain unopened leads, and its structure may influence
later outline alternatives only after the maintainer reviews this analysis.
