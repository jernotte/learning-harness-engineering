# Source Record: LangGraph Persistence and Subgraph Documentation

**Source ID:** FL-S010
**Maturity:** Captured source
**Source type:** Official framework documentation
**Author or organization:** LangChain
**Publication date:** Not stated; current documentation inspected 2026-07-10
**URLs:** https://docs.langchain.com/oss/javascript/langgraph/persistence and https://docs.langchain.com/oss/python/langgraph/use-subgraphs
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained documentation output and the legacy record
**Surfaces inspected:** documentation
**Provenance events:** `fl-open-s010`, `fl-inspect-s010`, `fl-disposition-s010`
**Related claim IDs:** C003, C009, and C016 in `field-landscape-synthesis-field-landscape`
**Canonical mapping locations:** C003 — Persistence documentation; C009 — Persistence and “Subgraph persistence”; C016 — Persistence documentation
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl`

## Why this source matters

LangGraph exposes durable execution and state boundaries as explicit runtime architecture rather than treating memory as chat history alone.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | Graph state is checkpointed into threads, enabling resume, inspection, branching/time travel, human interruption, and fault recovery. | Persistence documentation. | Framework capabilities, not measured outcome improvements. |
| source-reported claim | Subgraphs can use per-invocation, per-thread, or stateless persistence with different isolation, memory, interrupt, and recovery semantics. | “Subgraph persistence.” | Specific to current LangGraph behavior. |
| source-reported claim | Some indirection patterns reduce static discoverability of subgraph state even when interrupts propagate. | Subgraph state inspection limitations. | Implementation-specific but useful negative architectural detail. |

## Evidence assessment

Direct documentation of exposed runtime semantics. Strong for identifying checkpoint, state-ownership, and delegation-boundary decisions; weak for effectiveness claims. High freshness risk.

## Relationships and contradictions

Shows that persistence supports execution reliability and human control in addition to “memory.” It complicates a component taxonomy that puts all persisted state under one memory heading.

## Leads and open questions

Compare event-sourced and checkpointed runtimes, exactly-once/idempotency requirements, and state sharing across parallel workers.
