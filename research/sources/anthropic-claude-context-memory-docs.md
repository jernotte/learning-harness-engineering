# Source Record: Claude Code Context and Memory Documentation

**Source ID:** FL-S004
**Maturity:** Captured source
**Source type:** Official product documentation
**Author or organization:** Anthropic
**Publication date:** Not stated; current documentation inspected 2026-07-10
**URLs:** https://code.claude.com/docs/en/how-claude-code-works and https://code.claude.com/docs/en/memory
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained transcript output and the legacy record
**Surfaces inspected:** documentation
**Provenance events:** `fl-open-s004`, `fl-inspect-s004`, `fl-disposition-s004`
**Related claim IDs:** C005 and C016 in `field-landscape-synthesis-field-landscape`
**Canonical mapping locations:** C005 — How Claude Code Works, “The context window”; C016 — “The context window” and Memory, “Auto memory”
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl`

## Why this source matters

These tightly related pages expose concrete context-lifecycle and persistent-memory policies in a production coding harness.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | Context includes history, files, tool output, persistent instructions, auto memory, skills, system instructions, and tool metadata; older tool outputs are cleared before conversational compaction. | “The context window” in How Claude Code Works. | Declared behavior; exact algorithms and prompts are closed. |
| source-reported claim | MCP definitions are deferred and skills load on demand, while subagents isolate high-volume work in separate contexts. | Context-management sections. | Effect sizes are not provided here. |
| source-reported claim | Auto memory uses a small always-loaded Markdown index plus on-demand topic files, with project-scoped local storage. | “Auto memory” in the memory documentation. | Current product policy, not evidence that model-written memory is reliably useful. |

## Evidence assessment

High directness for exposed product behavior and concrete policy choices. Effectiveness remains a reported design rationale, and the pages carry high freshness risk. The two URLs should be separated if later analysis relies heavily on one mechanism.

## Relationships and contradictions

Provides production examples for progressive disclosure, compaction, filesystem persistence, and context isolation. It also shows that “memory” spans persistent instructions, model-written notes, session history, and context retrieval rather than one store.

## Leads and open questions

Inspect comparable policies in open systems and seek evaluations of compaction loss, retrieval relevance, memory staleness, and instruction adherence.
