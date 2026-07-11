# Source Record: Create Custom Subagents

**Maturity:** Captured source
**Source type:** Official product documentation
**Author or organization:** Anthropic
**Publication date:** Not stated; current documentation inspected 2026-07-10
**URL:** https://code.claude.com/docs/en/sub-agents
**Related cycle or question:** Cycle 1 field landscape

## Why this source matters

The page describes a production delegation interface in unusually concrete terms: isolated prompts and contexts, tool/model/permission configuration, persistence scope, worktree isolation, foreground/background execution, and result return.

## Claims and evidence

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
