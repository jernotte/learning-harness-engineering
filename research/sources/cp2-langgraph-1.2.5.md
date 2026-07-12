# Source Record: LangGraph 1.2.5

**Source ID:** CP2-S003
**Maturity:** Captured source — selection screening only
**Source type:** Repository
**Author or organization:** LangChain
**Publication date:** Release page reported 2026-06-12; pin verified 2026-07-12
**URL:** https://github.com/langchain-ai/langgraph/tree/1.2.5
**Inspected version:** Python LangGraph tag `1.2.5`, commit `7ab79f9f3e94fb4357334d902f5fd69ec0088eb4`
**Related cycle or question:** Field landscape, Checkpoint 2 selection
**Source family / parent:** LangGraph repository
**Inspection extent:** Screening
**Surfaces inspected:** README, releases, command output
**Provenance events:** `cp2-open-s003`, `cp2-inspect-s003-readme`, `cp2-inspect-s003-pin`, `cp2-detail-s003`
**Primary verification events:** Selection-ledger events generated from `checkpoint-2-selection-annotations.json`

## Why this source matters

LangGraph is the proposed programmed-control and durable-runtime counterpoint. Its repository describes a low-level orchestration framework for stateful agents, which is sufficient to justify testing whether the responsibility lens works on a framework rather than a single product.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| CP2-S003-E01 | Public Git tag resolves to the recorded commit | `refs/tags/1.2.5` | `field-landscape-selection-checkpoint-2-deep-dive-set-C001` | supports | Pin is for the Python package tag |
| CP2-S003-E02 | README positions LangGraph as a low-level orchestration framework for long-running, stateful agents | `README.md` at `1.2.5`, lines 257-275 | `field-landscape-selection-checkpoint-2-deep-dive-set-C002` | material premise | Vendor self-description; no mechanism verified |

## Evidence assessment

Tag resolution is direct. The monorepo carries multiple package tag families; the case must not mix SDK or unrelated package versions with the `1.2.5` Python boundary.

## Relationships and contradictions

Existing Cycle 1 LangGraph documentation supported landscape claims, but this record independently establishes only selection identity and pinning.

## Leads and open questions

The eventual case should bound which packages constitute the harness surface and whether a framework case is comparable to opinionated agent products.
