# Source Record: OpenAI Agents SDK Architecture Documentation

**Source ID:** FL-S013
**Maturity:** Captured source
**Source type:** Official SDK documentation
**Author or organization:** OpenAI
**Publication date:** Not stated; current documentation inspected 2026-07-10
**URLs:** https://openai.github.io/openai-agents-python/agents/ and https://openai.github.io/openai-agents-python/handoffs/ and https://openai.github.io/openai-agents-python/tracing/
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained documentation output and the legacy record
**Surfaces inspected:** documentation
**Provenance events:** `fl-open-s013`, `fl-inspect-s013`, `fl-disposition-s013`
**Related claim IDs:** C010, C012, C014, and C023 in `field-landscape-synthesis-field-landscape`
**Canonical mapping locations:** C010 and C023 — Handoffs; C012 — Tracing; C014 — Handoffs and Tracing
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl`

## Why this source matters

This documentation exposes a current orchestration decomposition centered on Agent plus Runner, tools, guardrails, sessions, handoffs, hooks, results, and tracing.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | The Runner owns turns, tool execution, guardrails, handoffs, and sessions when the developer chooses SDK-managed orchestration. | Agents documentation overview. | Describes the SDK surface, not an empirically preferred decomposition. |
| source-reported claim | Handoffs transfer execution and can filter or summarize the context passed to the next agent. | Handoffs documentation. | The quality/cost tradeoff of filtering is not evaluated there. |
| source-reported claim | Built-in tracing records model generations, tools, handoffs, guardrails, and custom spans within an end-to-end workflow. | Tracing documentation. | Observability support does not itself ensure useful diagnosis or evaluation. |

## Evidence assessment

Current, direct evidence of a widely used SDK’s declared architecture. Strong for control surfaces and terminology; weak for outcome comparisons. High freshness risk.

## Relationships and contradictions

Its manager-versus-handoff distinction provides a different coordination axis from role-based multi-agent taxonomies. Its tracing model reinforces the separation between runtime events and later evaluation.

## Leads and open questions

Inspect source code and stable release tags during a deep dive. Compare context ownership and termination semantics across handoffs, agents-as-tools, and subagents.
