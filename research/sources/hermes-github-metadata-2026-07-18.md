# Source Record: Hermes Agent GitHub Metadata Snapshot

**Source ID:** HS-S001
**Maturity:** Captured source — selection metadata
**Source type:** Repository metadata
**Author or organization:** GitHub; repository owned by Nous Research
**Publication date:** Captured 2026-07-18
**URL:** https://api.github.com/repos/NousResearch/hermes-agent
**Inspected version:** Live API snapshot on 2026-07-18; latest-release endpoint captured in the same bounded pass
**Related cycle or question:** Field landscape, bounded Hermes adoption and release assessment
**Source family / parent:** Hermes Agent GitHub repository; same lineage as CP2-S009
**Inspection extent:** Screening of selected repository and latest-release fields
**Surfaces inspected:** Repository API metadata and latest-release metadata
**Provenance events:** Hermes selection event log
**Primary verification events:** Hermes selection C001 and C006 mapping verification, 2026-07-18

## Why this source matters

The maintainer's motivation included understanding systems with meaningful real-world attention. A dated GitHub snapshot provides a narrow, auditable set of repository-attention and organizational signals while making it possible to state explicitly what those signals cannot establish.

The latest-release endpoint also identifies the release title, publication timestamp, tag, and mutable release-object status. Exact version control still comes from the pinned Git repository.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| HS-S001-E01 | GitHub reported the repository identity, organization, language, license, and dated attention counters | Repository API fields `full_name`, `organization.login`, `language`, `license.spdx_id`, `stargazers_count`, `forks_count`, `subscribers_count`, `open_issues_count`; captured 2026-07-18 | `field-landscape-selection-hermes-pinning-C006` | supports | Live platform counters; no user, deployment, team-size, quality, or effectiveness meaning |
| HS-S001-E02 | GitHub reported latest tag `v2026.7.7.2`, release title “Hermes Agent v0.18.2 (2026.7.7.2),” publication timestamp 2026-07-08T03:11:22Z, and `immutable: false` | `/repos/NousResearch/hermes-agent/releases/latest`; captured 2026-07-18 | `field-landscape-selection-hermes-pinning-C001` | contextualizes | Release object may change; exact Git commit is controlling |

## Evidence assessment

GitHub is authoritative for the state of its own counters and release objects at the observation time. The fields are direct but volatile. They are weak evidence for attention and repository activity and poor evidence for active adoption. They cannot establish user count, production use, project quality, team size, or effectiveness.

## Relationships and contradictions

This record and CP2-S009 derive from the same repository ecosystem and must not be counted as independent corroboration. The Git release tag agrees with the pinned repository, while the API's `immutable: false` field strengthens the reason to retain the dereferenced commit.

## Leads and open questions

- Dependable user, deployment, or dependent-project evidence was not found in the bounded pass.
- If adoption becomes a future sampling criterion, define a protocol across independently supportable usage, dependents, deployments, release continuity, and contributor activity rather than relying on GitHub attention.
