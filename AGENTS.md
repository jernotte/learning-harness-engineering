# Agent Instructions

## Mission

Build a living, evidence-backed body of knowledge about harness engineering: the orchestration code and instructions between an unmodified language model and the environment in which it works. Optimize first for learning and dependable synthesis, then for practical design judgment, and only afterward for teaching material.

This is a research repository, not a project to build a single harness. Study many domains and implementations so that conclusions transfer beyond one product.

## Read before working

Read these files in order:

1. `README.md`
2. `docs/research-charter.md`
3. `docs/methodology.md`
4. `docs/source-provenance.md`
5. `docs/research-plan.md`
6. `research/STATUS.md`, `research/COVERAGE.md`, and `research/DECISIONS.md`
7. The active cycle file named by `research/STATUS.md`, when one exists

Treat `outline.md` as an informed starting hypothesis. Do not silently adopt its modules as the final taxonomy.

## Current authorization

Checkpoint 1 is provisionally promoted under an explicit reconstructed-provenance waiver. Checkpoint 2 is approved: the six-case batch is selected, Claude Code remains conditional on a bounded maintainer-supplied evidence set, and only the Pi pilot at `v0.80.6` / `2b3fda9921b5590f285165287bd442a25817f17b` is authorized. Pause for maintainer alignment after that one case; no other implementation deep dive or case study may begin. The eleven-responsibility lens remains provisional until Checkpoint 3 records taxonomy friction.

D-004 remains approved. Its overhead preflight result stands, while one historical truncated search remains honestly marked incomplete. The fixed promotion profile and monotonic `search_update` safeguard are now enforced. Provenance infrastructure is frozen: change it only when real research exposes a consequential failure, not to address speculative or immaterial imperfections. Until manual `result_returned` events are mechanically bound to native output, any checkpoint relying on them must verify their canonical URLs against the retained native archive and record the check. If this becomes materially expensive or unreliable in search-heavy work, pause and ask whether the D-005 freeze exception is justified; do not preemptively implement an adapter. Bootstrap activity remains segregated and `partial`; do not mix it into the subject corpus.

## Scope

Focus on mechanisms a harness developer can control while treating model weights and tokenization as fixed. In scope are agent loops, prompts and policies, tools, context construction and compaction, persistent state and memory, planning, delegation and multi-agent orchestration, workflows, model routing, verification, evaluation, observability that supports harness improvement, permissions where they shape the loop, and self-improving harness mechanisms.

Model training, fine-tuning, tokenizer design, general HCI, and security as an independent discipline are out of scope. Include adjacent material only when it explains or evaluates a harness design decision. Do not let an adjacent field take over a research cycle.

## Non-negotiable epistemic rules

- Trace every material factual claim to evidence. Prefer links to the exact paper section, documentation page, source file, commit, experiment, or firsthand account.
- Identify source-code observations by commit, tag, or release whenever possible. Do not describe a moving default branch as timeless architecture.
- Distinguish `verified implementation fact`, `source-reported claim`, `inference`, `hypothesis`, `engineering recommendation`, and `open question`. Never blur these categories for smoother prose.
- A vendor statement establishes what the vendor says, not that the mechanism works. A paper establishes what its experiment found under stated conditions, not a universal rule.
- Repetition is not necessarily independent corroboration. Check whether apparently separate articles derive from the same announcement, paper, benchmark, or author.
- Evaluate evidence along several axes: directness, rigor, recency, independence, applicability, and confidence. Do not reduce quality to a source-type hierarchy.
- Prefer current findings when evidence is otherwise comparable, but allow unusually rigorous older work to outweigh weak recent claims. Mark conclusions whose validity is especially sensitive to model or harness version.
- Preserve credible contradictions, negative results, failed approaches, and uncertainty. Do not force consensus or discard failures merely to make the synthesis cleaner.
- Seek evidence that could falsify the maintainer's beliefs and the agent's emerging thesis. Prior experience is a useful hypothesis, never assumed truth.
- Never equate popularity, polish, citation count, or confident language with evidence.
- Do not call a recurring technique a best practice without outcome evidence. Use the pattern vocabulary in `docs/methodology.md`.
- A direct external link in analysis does not replace a durable source record. Referenced evidence must be represented in the source catalog and a full source record before it supports a material claim.
- Count claim coverage, not source files. Every material claim must have a globally unique claim ID derived from `<cycle-id>-<artifact-type>-<artifact-slug>-C###` in one canonical artifact claim ledger and map to supporting and, when applicable, opposing source records. Source records reference claim IDs rather than owning duplicate claim text.

## Taxonomy and navigation

Use three complementary layers instead of forcing one hierarchy to do every job:

1. **Source-native vocabulary** drives recon and human navigation. Preserve common terms such as tools, context, memory, planning, skills, workflows, subagents, evaluation, runtime, routing, and self-improvement, plus the aliases used by sources.
2. **Architectural responsibilities** provide a multi-label analytical lens for comparing control, state, capability, and evidence. They are questions to apply, not exclusive folders into which a source must fit.
3. **Narrative and curriculum structure** is a later human-centered view derived from reviewed research. It may recombine responsibilities into fewer approachable modules.

Search using source-native terms, aliases, product terminology, mechanism terms, and failure terms. Never restrict discovery to the names in the analytical lens. Record taxonomy friction rather than forcing a mechanism into a category.

## Research loop

Every substantial topic follows an iterative `recon -> analyze -> consolidate -> refine` loop. The phases may send work backward when a gap or contradiction appears.

### Recon

Search broadly before settling on an explanation. Map vocabulary, architectural questions, influential and recent sources, open and closed implementations, competing approaches, benchmarks, negative reports, and unresolved questions. Run multiple breadth passes; later deep dives should be allowed to reopen recon.

Produce a source inventory and coverage map before choosing all deep-dive targets. Search beyond familiar products and beyond the seed outline. Record why a source is promising, but do not promote an unread search result into evidence.

Use the approved provenance capture path for every query and source interaction. The audit funnel is `returned -> opened -> read_only or referenced`, with `excluded` available after inspection. Search results may be leads, but an agent may not rely on a result snippet as evidence. If a snippet matters, open and log the source.

### Analyze

Read primary material and inspect code deeply. For an implementation, trace actual control flow, prompts, tool schemas, state transitions, persistence, error handling, and verification rather than relying on the README. Use history and tests when they clarify design intent or real behavior.

Use `research/templates/case-study.md` as a starting schema, adapting it when the subject requires different treatment. Separate observed mechanism from explanation of why it may work. State assumptions, tradeoffs, failure modes, evaluation support, transfer limits, and open questions.

Treat implementation prevalence as evidence of use, not effectiveness. For consequential mechanisms, compare the code and stated rationale with relevant academic research, controlled evaluations, benchmarks, negative results, and credible operational evidence. Record whether those sources support, qualify, contradict, or have not tested the practice. Preserve industry–research disagreement and investigate differing models, tasks, versions, metrics, budgets, and production constraints rather than automatically privileging either side.

At Checkpoint 3, each case must report where the responsibility lens was difficult to apply, which mechanisms spanned boundaries, what did not fit, and what taxonomy change—if any—the evidence suggests. Do not silently repair the taxonomy during a case study.

Closed-source systems may be studied through official material and credible firsthand or third-party reports. Describe only externally supported behavior; do not invent internal architecture. Multiple reports increase confidence only to the extent that they are independent.

### Consolidate

Compare evidence across implementations and source types. Organize primarily around architectural problems and decisions, while tailoring substructure to the topic. Individual products are evidence and case studies, not necessarily the top-level taxonomy.

Deduplicate claims, expose disagreements, identify the conditions behind apparently conflicting results, and turn isolated observations into provisional findings. Keep each finding linked to its supporting and opposing evidence.

### Refine

Reduce accumulated material into useful, defensible knowledge. Check claims against sources, look for counterexamples, resolve or bound contradictions, remove low-value duplication, improve the taxonomy, and make conclusions actionable without overstating them.

Classify recurring techniques as `observed`, `supported`, `contextual`, `emerging`, `contested`, or `anti-pattern`. Record confidence and transfer limits. Refine both what was learned and how the research process should improve.

Stop a cycle when credible new searches mostly repeat known mechanisms and conclusions, material claims are traceable, important contradictions have been investigated, gaps are explicit, and the synthesis can inform an engineering decision. This is saturation for now, not permanent completion. Reopen work when new evidence adds meaningful information.

## Artifacts and maturity

Use the templates under `research/templates/` as minimum prompts, not forms that must be filled mechanically. Prefer readable analytical prose supported by tables or lists where those make comparison easier.

Keep evidence at an honest maturity level:

`lead -> captured source -> analyzed evidence -> provisional finding -> reviewed finding -> consolidated pattern`

Do not place a lead or an agent summary directly into reviewed synthesis. The canonical research artifacts live in this repository. A dashboard or other human view, if added, must be derived from them.

Every opened source receives a lightweight catalog/event entry. A source used to support, oppose, or materially contextualize a claim also requires a full narrative source record. Read-only sources remain visible with their reading depth and disposition reason; they do not require full narrative records.

Maturity is promoted deliberately. The primary agent may promote captured material through analyzed evidence only after verifying its sources. An artifact cannot become a provisional finding until its canonical claim-evidence ledger is complete, a prose-to-ledger attestation is recorded, all referenced sources have full records, every referenced claim/source/location mapping has a primary verification event, no subagent has self-verified its own evidence, and the cycle source audit passes. A reviewed finding additionally requires a documented claim/source check with reviewer, date, and review basis. During early alignment, the maintainer is the reviewer at the applicable checkpoint. After the process is explicitly graduated, the primary agent may review routine findings; the maintainer still reviews material reversals and changes to scope, taxonomy, or evidence policy. A consolidated pattern must be based on reviewed findings from a synthesis, not on recurrence alone.

At the end of meaningful work, update:

- `research/STATUS.md` with progress, confidence, blockers, and the next highest-value action;
- `research/COVERAGE.md` when scope coverage or gaps changed;
- `research/DECISIONS.md` when methodology, taxonomy, scope, or evidence policy changed;
- the active cycle artifact with sources examined and the saturation assessment.
- the cycle source audit and global source-coverage view after research activity.

Write for a technically capable newcomer without talking down to an experienced engineer. Favor clear, enjoyable prose over curt fragments and dense walls of bullets. Do not polish narrative beyond the maturity of its evidence.

## Human checkpoints

The early cycles require close review because early drift compounds. Pause for maintainer review after:

1. the first landscape recon and proposed taxonomy;
2. selection of the first deep-dive set;
3. the first completed case-study batch;
4. the first cross-harness synthesis;
5. the first refine/saturation review.

Also pause before materially changing scope, methodology, taxonomy, or canonical schemas, and when evidence would reverse a consequential reviewed conclusion. Record the proposed decision and alternatives in `research/DECISIONS.md` before requesting review.

After the maintainer explicitly graduates the process, these become inspectable milestones rather than blocking approvals, except for material changes and major reversals. `research/STATUS.md` must state which governance mode is active.

## Agents and concurrency

The primary agent owns research design, source verification, deduplication, synthesis, shared control state, maturity promotion, provenance consolidation, and final quality. It may use at most two research subagents concurrently. The overall cap is one primary plus two subagents; nested delegation counts against the same cap and must never bypass it.

Use subagents for bounded, separately executed work such as complementary landscape searches or implementation deep dives. Do not call their results independent corroboration merely because different agents produced them. Give each a distinct question, required output, and non-overlapping provenance log. Subagents should normally return reports or edit only explicitly assigned artifacts and their own event logs. Only the primary updates `STATUS.md`, `COVERAGE.md`, `DECISIONS.md`, checkpoint state, cross-case syntheses, maturity labels, and consolidated provenance. Treat subagent reports and edits as unverified until the primary records verification of the cited evidence. Do not split synthesis into disconnected fragments merely to create parallel work.

## Repositories and external material

Clone or cache third-party implementations under `/Users/jernotte/dev/reference-materials/research`. This path may require environment approval before writing. Never work around that restriction or copy large third-party repositories into this project. Keep curated source records, commit identifiers, relevant permalinks, and our analysis here.

Gather sources from anywhere useful: papers, documentation, repositories and history, prompts and tool definitions, benchmarks, technical blogs, talks, podcasts, interviews, practitioner reports, and social posts. Judge each item individually. Prefer original material over summaries, but use lower-formality evidence when it provides unique implementation knowledge and label its limits.

Direct empirical reproduction is not the initial program's main goal. Inspect implementations deeply and record proposed experiments when published evidence cannot answer an important question. Conduct lightweight behavioral checks only when explicitly included in an approved cycle.

## Working discipline

- Begin with the active question and the decision the research should eventually inform.
- Search with multiple names for the same mechanism; terminology is inconsistent across harnesses.
- Read the sources that support a claim before writing the claim. Never cite a search snippet.
- Register and log the source before using it in analysis. Do not backfill evidence only after prose has been written.
- Do not present a checkpoint without its generated source audit, claim-evidence coverage audit, and provenance-completeness status.
- Prefer primary sources and implementation evidence, then use independent secondary sources to challenge or contextualize them.
- Capture negative and disconfirming evidence alongside positive evidence.
- Separate notes about what exists from recommendations about what to build.
- Avoid redundant searching once marginal information gain is low; redirect effort to an explicit gap or contradiction.
- Do not build the course, a harness, a dashboard, or elaborate automation unless an approved plan makes it the next useful step.
- Preserve user changes and avoid unrelated repository edits.
