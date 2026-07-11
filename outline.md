# Harness Engineering: Understanding the Orchestration Layer of Agentic Systems

**Audience:** Software engineers building or evaluating agentic systems. Assumes programming fluency and basic LLM familiarity (prompts, context windows, tool calling). No ML research background required.

**Format:** Concepts + case studies. Each module dissects real harnesses (Claude Code, OpenHands, deep-research systems) to extract design principles. Implementation details are pointed to, not walked through.

**Course goal:** By the end, a student can (1) explain what a harness is and why each component exists, (2) critique the design of an existing harness, and (3) produce a defensible design for their own.

**Anchor texts:**
- Weng, *Harness Engineering for Self-Improvement* (2026) — the framing text for the whole course
- Voss, *How Do You Write a Good Skill? There's Actual Data Now* (2026) + SkillsBench / SkillComposer papers — Module 4

---

## Module 1 — What Is a Harness, and Why Does It Work?

**Core question:** Why does the same model perform wildly differently in different wrappers?

- Definition: the harness is the orchestration layer around a base model — how it plans, acts, perceives, stores state, and gets evaluated. "LLM + tools" undersells it; it's software architecture, not prompt templates.
- The capability gap the harness fills: models are stateless, context-bounded, and have no native access to an environment. Every harness component maps to one of these limitations.
- The agentic loop: plan → act → observe → iterate. Why a loop with feedback beats one-shot generation.
- Harness vs. model vs. prompt: which layer owns which problem. When a fix belongs in the harness and when it belongs in the prompt.
- The internalization arc: harness tricks get absorbed into models over time (chain-of-thought prompting → native reasoning). Why harness engineering is still worth learning despite this.

**Case study:** Anatomy of Claude Code — walk the layers: system prompt, tool set, permission system, context management, memory, skills, subagents. Establishes the map for Modules 2–6.

**Exercise:** Take a task an LLM chat interface fails at; identify which missing harness component causes the failure.

---

## Module 2 — Tools and the Agentic Loop

**Core question:** Tools are the model's hands and eyes — what makes a tool set good?

- The standard coding-agent tool set (read/write/edit, shell, search, fetch) and why it converged across harnesses.
- Tool ergonomics: names, descriptions, and parameter schemas are prompts. Error messages are feedback the model learns from within an episode.
- Granularity trade-offs: few general tools (shell) vs. many specific ones (dedicated edit tool). Why harnesses ship a dedicated Edit tool when `sed` exists.
- Verification as a first-class tool concern: the loop only self-corrects if actions produce observable results (test output, diffs, screenshots).
- Permissions and sandboxing: why the permission layer sits *outside* the loop; blast-radius thinking.

**Case studies:** Claude Code's Edit tool (exact-match constraint as an error-prevention design) vs. raw shell agents; MCP as a tool-distribution standard.

**Exercise:** Given a badly designed tool definition, predict the failure modes, then redesign it.

---

## Module 3 — Context Engineering

**Core question:** The context window is the scarcest resource in the system — how do harnesses spend it?

- What actually occupies context: system prompt, tool schemas, history, retrieved memory, file contents. Budgeting mentality.
- Attention competition: everything in context dilutes everything else. Why "just add more instructions" degrades performance (foreshadows Module 4's concise-beats-comprehensive finding).
- Techniques: compaction/summarization, progressive disclosure (load schemas and docs on demand), offloading to the filesystem, selective retrieval.
- Context as an evolving artifact: Agentic Context Engineering (ACE) — context as a curated playbook that improves across episodes, not a transcript that grows.
- Context rot and long-horizon tasks: how harnesses survive conversations longer than the window.

**Case studies:** Claude Code compaction and deferred tool loading; ACE from the Weng post.

**Exercise:** Audit the context budget of a real agent transcript — what's earning its tokens, what isn't?

---

## Module 4 — Skills: Packaging Procedural Knowledge

**Core question:** How do you give a model expertise it doesn't have — and how do you know it worked?

- What a skill is: procedural knowledge as a loadable artifact (instructions + supporting files), triggered on demand rather than baked into the system prompt.
- Skills vs. fine-tuning vs. system prompts vs. RAG: when each is the right layer.
- The evidence (SkillsBench, SkillComposer): what the data says about writing good skills —
  - Human curation beats model self-generation (self-generated skills scored *below* the no-skill baseline).
  - Concise beats comprehensive: 2–3 focused files outperform exhaustive documentation.
  - Selective loading beats bulk loading: injecting a full skill library scored 16 points worse than a small relevant subset.
  - Portability isn't free: gains vary 4–26 points across model–harness pairs; test per harness.
  - Target domains where the model is weakest: gains ranged from ~4 points (software) to ~52 points (healthcare) — yet most community skills target software.
- Anatomy of a good skill: trigger description, scoped instructions, progressive disclosure of supporting files.
- Measurement as a requirement, not an afterthought: with/without comparisons; skills can look professional and still hurt.

**Case studies:** Dissect two real skills — one that follows the evidence, one that violates it — and compare against the SkillsBench findings.

**Exercise:** Write a skill spec (not code) for a domain you know well; peer-review against the five findings.

---

## Module 5 — Memory and Persistent State

**Core question:** The model forgets everything between episodes — what should the harness remember, and how?

- Filesystem as memory: why durable, inspectable files beat clever in-context schemes. Plain text as the universal interface.
- A working taxonomy: episodic (what happened), semantic (facts about the user/project), procedural (how to do things — overlaps with skills).
- The memory lifecycle: capture → store → index → recall → verify → decay. Most designs fail at recall relevance and at pruning.
- What *not* to store: anything derivable from the environment (code, git history) goes stale; store the non-obvious.
- Artifacts vs. memory: intermediate outputs, logs, and trajectories as persistent state that enables recovery and parallelism.

**Case studies:** Claude Code's memory directory + CLAUDE.md; ChatGPT memory; Weng's "memory lifecycle management" as an open challenge.

**Exercise:** Design the memory schema for a specific agent (e.g., a customer-support agent): what gets written, when it's recalled, when it dies.

---

## Module 6 — Subagents, Workflows, and Orchestration

**Core question:** When is one context window not enough — and who decides what happens next, the model or the code?

- Why delegate: context isolation (the subagent's exploration doesn't pollute the parent), parallelism, specialization.
- The orchestrator–worker pattern; structured outputs as the contract between agents.
- The control-flow spectrum: model-driven (agent decides each step) ↔ deterministic workflows (code decides, agents fill in steps). When each wins; why loops, fan-out, and verification belong in code.
- Quality patterns: adversarial verification, judge panels, loop-until-dry discovery — using multiple agents to buy confidence, not just throughput.
- Failure handling: subagents die, results are partial; persistent state (Module 5) is what makes orchestration recoverable.

**Case studies:** Claude Code's Agent/Workflow tools; multi-agent deep-research systems; AI Scientist / Autodata role-based workflows from the Weng post.

**Exercise:** Given a task (e.g., "audit this codebase for security issues"), decide what runs in one context, what fans out, and what the verification step is.

---

## Module 7 — Evaluation and Feedback Loops

**Core question:** How do you know your harness is any good — and what goes wrong when your evaluator is weak?

- Evals as the harness engineer's unit tests: task suites, with/without comparisons (the SkillsBench method generalized), pass-rate deltas over vibes.
- Tracing and observability: reading trajectories to localize failures — was it the model, the prompt, a tool, the context budget, or the workflow?
- Weak evaluators: subjective domains where scoring is fuzzy; LLM-as-judge and its failure modes.
- Reward hacking: agents optimizing the metric instead of the goal; why the evaluator must sit outside the loop being optimized.
- Regression discipline: every harness change is a software change — it needs a baseline and a diff.

**Case studies:** SkillsBench methodology; Weng's "weak, fuzzy evaluators" and "reward hacking" challenges.

**Exercise:** Design an eval suite for the agent you specced in Modules 4–6.

---

## Module 8 — The Frontier: Self-Improving Harnesses

**Core question:** What happens when the harness becomes the thing being optimized?

Survey module (the back half of the Weng post — breadth over depth):
- The optimization ladder: prompts → context → workflows → the harness code itself.
- Meta-approaches: Meta Context Engineering (mechanisms vs. content); meta-harnesses optimizing information flow.
- Self-improving harnesses: failure-pattern detection, bounded self-edits, regression testing (Self-Harness).
- Evolutionary search: AlphaEvolve, Darwin Gödel Machine, Hyperagents — populations of harnesses as the search space.
- Joint optimization with model weights: early and preliminary (SIA).
- Open challenges as design constraints for *your* harness today: diversity collapse, negative-result incentives, short-term vs. long-term optimization, where humans sit in the oversight stack.
- Closing argument: recursive self-improvement, if it comes, likely starts here — in the harness, not the weights.

**Exercise / capstone discussion:** Each student presents a one-page harness design for a domain of their choice, defended component-by-component using the principles from Modules 1–7.

---

## Cross-Cutting Themes (woven through all modules)

1. **Every component compensates for a model limitation.** If you can't name the limitation, you don't need the component.
2. **Deliberate simplicity.** Files, plain text, and existing software-engineering practice beat clever bespoke machinery.
3. **Persistent, inspectable state.** If you can't read what the agent did, you can't debug it, resume it, or trust it.
4. **Everything in context is a prompt** — tool schemas, error messages, file names, skill descriptions. Write them like prompts.
5. **Measure or you're guessing.** With/without comparisons, per-harness; polish does not predict effectiveness.
6. **Keep the evaluator and permissions outside the loop.** The thing being optimized must not grade itself or approve its own actions.
