# Source Record: Browser Use 0.13.4

**Source ID:** CP2-S004
**Maturity:** Captured source — selection screening only
**Source type:** Repository
**Author or organization:** Browser Use
**Publication date:** Pin verified 2026-07-12
**URL:** https://github.com/browser-use/browser-use/tree/0.13.4
**Inspected version:** `0.13.4`, commit `68afe46456a23009a7d5eec2017ec7ab51b7c027`
**Related cycle or question:** Field landscape, Checkpoint 2 selection
**Source family / parent:** Browser Use repository
**Inspection extent:** Screening
**Surfaces inspected:** README, releases, command output
**Provenance events:** `cp2-open-s004`, `cp2-inspect-s004-readme`, `cp2-inspect-s004-pin`, `cp2-detail-s004`
**Primary verification events:** Selection-ledger events generated from `checkpoint-2-selection-annotations.json`

## Why this source matters

Browser Use supplies a non-coding, perception-and-environment case. Its repository identity and stated browser-automation purpose justify selection without establishing how observations, actions, or recovery work.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| CP2-S004-E01 | Public Git tag resolves to the recorded commit | `refs/tags/0.13.4` | `field-landscape-selection-checkpoint-2-deep-dive-set-C001` | supports | Identity/pin only |
| CP2-S004-E02 | Repository presents an agent-facing browser task surface | `README.md` at `0.13.4`, lines 316-344 | `field-landscape-selection-checkpoint-2-deep-dive-set-C002` | material premise | Cloud and open-source surfaces may differ |

## Evidence assessment

The pin is direct primary evidence. Rapid release cadence and a separate cloud product create freshness and boundary risk; neither is resolved at selection time.

## Relationships and contradictions

The inherited Browser Use mechanism descriptions remain unadmitted. This record does not promote them.

## Leads and open questions

The case should distinguish open-source runtime, browser service, DOM/visual observation, action grounding, and any cloud-only behavior.
