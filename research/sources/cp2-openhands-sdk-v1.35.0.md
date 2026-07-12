# Source Record: OpenHands Software Agent SDK v1.35.0

**Source ID:** CP2-S002
**Maturity:** Captured source — selection screening only
**Source type:** Repository
**Author or organization:** OpenHands
**Publication date:** Pin verified 2026-07-12
**URL:** https://github.com/OpenHands/software-agent-sdk/tree/v1.35.0
**Inspected version:** `v1.35.0`, commit `9028562e2d5eda76de662ec9b7584125760eb83f`
**Related cycle or question:** Field landscape, Checkpoint 2 selection
**Source family / parent:** OpenHands Software Agent SDK
**Inspection extent:** Screening
**Surfaces inspected:** README, releases, command output
**Provenance events:** `cp2-open-s002`, `cp2-inspect-s002-readme`, `cp2-inspect-s002-pin`, `cp2-detail-s002`
**Primary verification events:** Selection-ledger events generated from `checkpoint-2-selection-annotations.json`

## Why this source matters

The SDK is proposed as the event/workspace-oriented platform contrast to Pi. The top-level repository identifies SDK, agent-server, tools, workspace, examples, and tests as separate surfaces, making it feasible for a later bounded code trace.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| CP2-S002-E01 | Public Git tag resolves to the recorded commit | `refs/tags/v1.35.0` | `field-landscape-selection-checkpoint-2-deep-dive-set-C001` | supports | Identity/pin only |
| CP2-S002-E02 | Repository describes a modular SDK used to build code agents and exposes local or ephemeral workspaces through an Agent Server | `README.md` at `v1.35.0`, lines 306-321 | `field-landscape-selection-checkpoint-2-deep-dive-set-C002` | material premise | Self-description; mechanisms unverified |

## Evidence assessment

The tag is direct pin evidence. Top-level screening supports selection feasibility only. No code, tests, history, or external documentation was analyzed.

## Relationships and contradictions

This repository is not interchangeable with the inherited `OpenHands/OpenHands` lead or its older architecture. Any later lineage statement requires separate evidence.

## Leads and open questions

The case should establish how conversation/event state, workspace/runtime boundaries, model views, tools, and recovery actually connect at this release.
