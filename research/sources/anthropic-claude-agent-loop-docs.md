# Source Record: How the Agent Loop Works

**Source ID:** FL-S003
**Maturity:** Captured source
**Source type:** Official product/SDK documentation
**Author or organization:** Anthropic
**Publication date:** Not stated; current documentation inspected 2026-07-10
**URL:** https://code.claude.com/docs/en/agent-sdk/agent-loop
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained transcript output and the legacy record
**Surfaces inspected:** documentation
**Provenance events:** `fl-open-s003`, `fl-inspect-s003`, `fl-disposition-s003`
**Related claim IDs:** C008 in `field-landscape-synthesis-field-landscape`
**Canonical mapping locations:** C008 — “The loop at a glance”
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl`

## Why this source matters

It provides a current, explicit description of the message and tool lifecycle used by the Claude Agent SDK and reportedly by Claude Code.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | The loop assembles prompt, system instructions, tool definitions, and history; the model emits text/tool requests; the harness executes tools and feeds results back until no tool call remains. | “The loop at a glance.” | Official behavioral description, not inspected closed-source internals. |
| source-reported claim | The SDK exposes controls for tools, permissions, turns, budget, effort, model, compaction, sessions, and hooks. | Page sections and navigation. | Presence does not establish effectiveness. |

## Evidence assessment

Direct and current documentation for declared behavior. Strong for the observable lifecycle and exposed control surface, weak for hidden implementation detail and outcome claims. High freshness risk because product behavior changes quickly.

## Relationships and contradictions

Matches the generic observe/act loop in Anthropic’s 2024 article and Weng’s 2026 synthesis, while showing that a production loop also needs termination, budgets, permissions, context lifecycle, and session handling.

## Leads and open questions

Compare with open coding-agent runtimes to identify which lifecycle mechanics are shared and which are product-specific.
