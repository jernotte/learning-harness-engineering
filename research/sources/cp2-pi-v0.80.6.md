# Source Record: Pi v0.80.6

**Source ID:** CP2-S001
**Maturity:** Captured source — selection screening only
**Source type:** Repository
**Author or organization:** earendil-works
**Publication date:** Tag shown as 2026-07-09; pin verified 2026-07-12
**URL:** https://github.com/earendil-works/pi/tree/v0.80.6
**Inspected version:** `v0.80.6`, commit `2b3fda9921b5590f285165287bd442a25817f17b`
**Related cycle or question:** Field landscape, Checkpoint 2 selection
**Source family / parent:** Pi repository
**Inspection extent:** Screening
**Surfaces inspected:** README, releases, command output
**Provenance events:** `cp2-open-s001`, `cp2-inspect-s001-readme`, `cp2-inspect-s001-pin`
**Primary verification events:** Selection-ledger events generated from `checkpoint-2-selection-annotations.json`

## Why this source matters

Pi is the proposed pilot because its README explicitly presents an agent harness, agent runtime with tool calling and state management, multi-provider layer, and coding CLI in one repository. The screen establishes identity, scope suitability, and an immutable boundary; it does not establish internal behavior.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| CP2-S001-E01 | Public Git tag resolves to the recorded commit | `refs/tags/v0.80.6` | `field-landscape-selection-checkpoint-2-deep-dive-set-C001` | supports | Identity/pin only |
| CP2-S001-E02 | README names the harness, agent core, provider layer, and coding CLI | `README.md` at `v0.80.6`, “Pi Agent Harness” and “All Packages” | `field-landscape-selection-checkpoint-2-deep-dive-set-C002`, `field-landscape-selection-checkpoint-2-deep-dive-set-C003` | material premise | Repository self-description; no code verified |

## Evidence assessment

The repository and tag are direct primary evidence for identity and pinning. The README is sufficient for selection suitability but not for architectural claims. The `badlogic/pi-mono` URL used in the pin command redirects to this canonical repository; that alias does not represent a separate lineage.

## Relationships and contradictions

Cycle 1 already contained `earendil-works/pi` as an unadmitted lead. This record admits only the bounded 2026-07-12 screening and does not inherit the report's compaction or branch-semantics claims.

## Leads and open questions

The pilot should determine actual control flow, prompt/context assembly, state transitions, action mediation, and compaction behavior from code and tests.
