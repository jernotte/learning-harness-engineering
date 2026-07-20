# Reader Feedback

Record feedback while reading the learning chapters. Anchor the concern to a section or stable claim link whenever possible. The primary agent should disposition each entry visibly rather than silently rewriting around it.

| Date | Artifact or section | Reader concern | Type | Disposition | Resolution |
| --- | --- | --- | --- | --- | --- |
| 2026-07-19 | First “Where Harnesses Put Control” learning pilot | The site presentation was acceptable, but the content was abstract, shallow, governance-heavy, and failed to explain exact mechanisms, same-axis differences, tradeoffs, or why a builder would choose one design. It did not improve understanding. | desired depth | fix now | Rejected the pilot and replaced the active curriculum with a mechanism-level context-management chapter. The new acceptance bar is problem → exact mechanism → same-axis comparison → tradeoff/failure → builder decision. Fable review completed 2026-07-19; maintainer review remains pending. |
| 2026-07-19 | Fable review — “Two targeted contrasts,” Letta table | “no MemFS and no memory blocks” uses MemFS without defining it anywhere in the chapter or glossary. | confusing terminology | fix now | Defined inline (git-backed memory file store) and added a MemFS glossary entry. |
| 2026-07-19 | Fable review — Decision 1 (initial construction) | The only Decision section without exact implementation anchors; described qualitatively while Decisions 2–6 carry pinned defaults and an evidence block. | desired depth | fix now | Added an initial-construction anchor block (Pi E04, OpenHands E06, OpenClaw E07, Hermes E10) and a forward pointer to the instruction/bootstrap byte budgets quantified in Decision 2. |
| 2026-07-19 | Fable review — Decision 3, Hermes spill preview | “Roughly 1,500-character preview” could not initially be corroborated at the spill path during sampling. | unsupported | fix now | Verified `DEFAULT_PREVIEW_SIZE_CHARS = 1_500` at `tools/budget_config.py:19` in the pinned checkout; wording tightened to state the exact pinned default. All other sampled numbers across Pi, OpenHands, OpenClaw, Hermes, and Codex verified exactly. |
| 2026-07-19 | Maintainer annotator export — Version E title | Title too long. | desired depth | fix now | Retitled to “Context Engineering”; the removed qualifiers moved into the subtitle and summary. |
| 2026-07-19 | Maintainer annotator export — Version E §1 | Listy, unexplained; audience is technical but new to harnesses; wants concept build-up and flow diagrams. | unclear | fix now | Rewrote §1: system prompt, instruction files, skills, and tool schemas defined before any comparison; each harness now has its own explanation and its own assembly-flow diagram. Pattern applied to §2, §3, and §5 as well (16 per-harness flow diagrams total). |
| 2026-07-19 | Maintainer annotator export — “Extensions inside the policy path” | Undefined jargon in a tradeoff table. | unclear | fix now | All optimizes-for tables rewritten in full plain-language sentences; terms defined on first use throughout. |
| 2026-07-19 | Maintainer annotator export — em dashes (two notes) | Em dashes read as AI-writing formatting; strongly disliked. | dislike | fix now | Every em dash removed from Version E (verified zero remaining); rule saved to persistent style memory for all future writing. |
| 2026-07-19 | Maintainer annotator export — §2/§3 diagrams | Comparative diagrams liked in concept but too high-level; wants per-harness diagrams grouped with each harness's how-it-works prose; detail over overview. | desired depth | fix now | Each harness in §1–§3 and §5 now carries its own mechanism-flow diagram inline with its explanation; the comparative figures remain as end-of-section summaries. |

## Types

- `unclear`
- `unsupported`
- `missing`
- `counterexample`
- `impractical`
- `confusing terminology`
- `desired depth`

## Dispositions

- `fix now`
- `targeted research`
- `next cycle`
- `open`
- `rejected with reason`

## Review questions for the replacement chapter

1. Can you now explain durable state versus active context without referring back to the chapter?
2. Do the file, tool-result, compaction, subagent, and memory comparisons use genuinely comparable axes?
3. Are the implementation defaults and failure behaviors concrete enough to inform a design?
4. Does the chapter explain *why* each tradeoff exists rather than merely listing features?
5. Are verified facts, bounded topic inspections, secondary reports, and inferences easy to distinguish without disrupting the lesson?
6. Which mechanism still feels hand-wavy, shallow, or unsupported?
7. What would you build differently after reading it?
8. Which context-management question should receive direct experimental testing?
9. Which harness or topic should be the next learning chapter?
