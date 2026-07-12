# Source Record: OpenClaw v2026.6.6

**Source ID:** CP2-S005
**Maturity:** Captured source — selection screening only
**Source type:** Repository
**Author or organization:** OpenClaw
**Publication date:** Release train identifies 2026-06-06; pin verified 2026-07-12
**URL:** https://github.com/openclaw/openclaw/tree/v2026.6.6
**Inspected version:** Annotated tag `v2026.6.6`, dereferenced commit `8c802aa683510c7f7503597b54c3021733245e59`
**Related cycle or question:** Field landscape, Checkpoint 2 selection
**Source family / parent:** OpenClaw repository
**Inspection extent:** Screening
**Surfaces inspected:** Repository root, releases, command output
**Provenance events:** `cp2-open-s005`, `cp2-inspect-s005-readme`, `cp2-inspect-s005-pin`, `cp2-detail-s005`
**Primary verification events:** Selection-ledger events generated from `checkpoint-2-selection-annotations.json`

## Why this source matters

OpenClaw is the proposed long-lived-runtime case. Selection screening indicates a broad agent/runtime product with channels, tools, and operational release surfaces, making lifecycle and persistence useful questions rather than established facts.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| CP2-S005-E01 | Annotated public tag dereferences to the recorded commit | `refs/tags/v2026.6.6^{}` | `field-landscape-selection-checkpoint-2-deep-dive-set-C001` | supports | Identity/pin only |
| CP2-S005-E02 | The tagged root exposes apps, configuration, documentation, extensions, skills, core source, tests, and deployment surfaces; release screening exposes channel and persistent-operation concerns | Repository root at `v2026.6.6`, lines 203-389, plus captured release page | `field-landscape-selection-checkpoint-2-deep-dive-set-C002` | material premise | Large surface; README mechanisms uninspected |

## Evidence assessment

The dereferenced commit is strong pin evidence. High release velocity and a large integration surface create severe scope and freshness risks.

## Relationships and contradictions

Cycle 1 listed OpenClaw as an unadmitted lifecycle lead. This record admits only identity, pin, and selection suitability.

## Leads and open questions

The case must identify a narrow core path and distinguish gateway/channel lifecycle from plugins, clients, and peripheral integrations.
