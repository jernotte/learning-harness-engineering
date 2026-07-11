# Source Record: Google Agent Development Kit Architecture Documentation

**Maturity:** Captured source
**Source type:** Official framework documentation and engineering article
**Author or organization:** Google
**Publication date:** Documentation current in 2026; ADK 2.0 article 2026-07-01
**URLs:** https://adk.dev/runtime/ and https://adk.dev/sessions/ and https://developers.googleblog.com/en/why-we-built-adk-20/
**Related cycle or question:** Cycle 1 field landscape

## Why this source matters

ADK makes event loops, session/state/memory services, deterministic graphs, dynamic workflows, multi-agent collaboration, tools, artifacts, callbacks, evaluation, and observability separately visible. Its recent 2.0 rationale directly addresses the model-versus-code control boundary.

## Claims and evidence

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | ADK separates a current session and its state/events from searchable cross-session memory managed by distinct services. | Sessions and Memory documentation. | A framework abstraction, not proof it is optimal. |
| source-reported claim | Runtime behavior includes an event loop with yield/pause/resume, explicit run configuration, resume, and cancellation. | Runtime technical reference. | High-level documentation; language implementations may differ. |
| source-reported claim | ADK 2.0 recommends deterministic workflows for predefined control and agents for decisions requiring dynamic reasoning, with hybrid composition. | “When to use Agents vs Workflows.” | Vendor guidance; no controlled comparison in the article. |

## Evidence assessment

Very recent and direct for the framework’s public architecture. The 2.0 article has announcement/marketing incentives, so architectural disclosures are useful while effectiveness language needs independent support.

## Relationships and contradictions

Supports control allocation as a first-class architectural decision: code and model may each own different branches. Its state taxonomy also suggests separating event history, working state, long-term memory, and artifacts.

## Leads and open questions

Inspect implementation parity across languages, failure/retry semantics, and actual evaluation hooks. Compare with LangGraph and AutoGen event-driven runtimes.
