# Source Record: Create Custom Subagents

**Source ID:** FL-S005
**Maturity:** Captured source
**Source type:** Official product documentation
**Author or organization:** Anthropic
**Publication date:** Not stated; current documentation inspected 2026-07-10
**URL:** https://code.claude.com/docs/en/sub-agents
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained transcript output and the legacy record
**Surfaces inspected:** documentation
**Provenance events:** `fl-open-s005`, `fl-inspect-s005`, `fl-disposition-s005`
**Related claim IDs:** C004, C010, C023, and C024 in `field-landscape-synthesis-field-landscape`
**Canonical mapping locations:** C004 and C024 — frontmatter reference; C010 and C023 — “Manage subagent context” and frontmatter reference
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl`

## Why this source matters

The page describes a production delegation interface in unusually concrete terms: isolated prompts and contexts, tool/model/permission configuration, persistence scope, worktree isolation, foreground/background execution, and result return.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | A subagent uses its own system prompt and fresh context and returns a summary to the parent. | Configuration and “Manage subagent context.” | Official behavioral contract; internal scheduling is closed. |
| source-reported claim | Delegation policy is influenced by task text and subagent descriptions, while explicit invocation is also supported. | “Understand automatic delegation.” | No reliability measurement is supplied. |
| source-reported claim | Subagents can vary tools, model, permissions, turn limits, skills, memory, background mode, and worktree isolation. | Frontmatter reference. | Available controls do not establish which settings improve outcomes. |

## Evidence assessment

Strong direct evidence for the exposed coordination and isolation surface of Claude Code. High freshness risk. Marketing language around effectiveness should be treated as design rationale rather than outcome evidence.

## Relationships and contradictions

Illustrates that multi-agent architecture includes delegation contracts, context partitioning, execution isolation, permissions, concurrency, and return-channel design—not merely the number or roles of agents.

## Leads and open questions

Compare manager-as-tools, handoffs, shared event buses, and graph subagents. Seek evidence for when context isolation outweighs communication loss and cost.
