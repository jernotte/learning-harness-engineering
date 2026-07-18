# Source Record: Hermes Agent v0.18.2

**Source ID:** CP2-S009
**Maturity:** Captured source — selection and pinning evidence
**Source type:** Repository
**Author or organization:** Nous Research
**Publication date:** Release identifier 2026-07-07; GitHub release published 2026-07-08
**URL:** https://github.com/NousResearch/hermes-agent/tree/9de9c25f620ff7f1ce0fd5457d596052d5159596
**Inspected version:** Annotated tag `v2026.7.7.2`, tag object `b7751df34688835a108e0d630f3495fc11f3df79`, dereferenced commit `9de9c25f620ff7f1ce0fd5457d596052d5159596`, package version `0.18.2`
**Related cycle or question:** Field landscape, D-011 Hermes selection and pinning
**Source family / parent:** Hermes Agent repository; same evidence lineage as HS-S001
**Inspection extent:** Partial substantive, strictly bounded to selection identity, top-level architecture, migration relationship, selected history, and repository activity
**Surfaces inspected:** README, pinned documentation, top-level repository structure, releases/tags, selected code, selected tests/counts, and targeted history
**Provenance events:** Hermes selection event log
**Primary verification events:** Hermes selection claim/source/location verification events, 2026-07-18

## Why this source matters

Hermes was chosen by the maintainer as the intended final implementation before Checkpoint 3, replacing Browser Use in the immediate order. The selection pass had to establish that it is a concrete harness, produce an immutable version boundary, and determine whether an OpenClaw comparison could be framed honestly.

The repository directly answers those selection questions. It contains a multi-entry agent runtime and repository-contained architecture documentation; its history exposes a separately rooted project, a later OpenClaw migration layer, and named instances of OpenClaw inspiration or porting. It does not yet support mechanism-level findings about the normal runtime, the effectiveness of its advertised self-improvement, or broad architectural ancestry.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| CP2-S009-E01 | The annotated tag dereferences to the selected commit and the package declares version 0.18.2 | `refs/tags/v2026.7.7.2`; tag object `b7751df...`; commit `9de9c25...`; `pyproject.toml` 8–22; `hermes_cli/__init__.py` 1–18 | `field-landscape-selection-hermes-pinning-C001` | supports | Release page is mutable; signature authenticity not verified |
| CP2-S009-E02 | The repository's pinned architecture maps several entry points into `AIAgent` and enumerates prompt, provider, tool, session, gateway, cron, plugin, skill, documentation, and test surfaces | `website/docs/developer-guide/architecture.md` 7–180; pinned top-level tree | `field-landscape-selection-hermes-pinning-C002` | supports | Repository documentation is authoritative for intended structure, not outcome behavior or default use |
| CP2-S009-E03 | Hermes has a distinct repository root and added OpenClaw migration after the root existed | root `21d80ca68346dfdb8d3556015a723a9217f8566f`; commit `d53035ad821f7ba80c9f74637d267064837cb8d3` | `field-landscape-selection-hermes-pinning-C003`, `field-landscape-selection-hermes-pinning-C005` | supports | Distinct roots do not prove no later copying or conceptual influence |
| CP2-S009-E04 | The migration translates selected persona, memory, instructions, skills, providers, behavior, session, MCP, messaging, approvals, browser, and secret state, while archiving unsupported concepts | `README.md` 186–212; `website/docs/guides/migrate-from-openclaw.md` 7–184; `hermes_cli/claw.py` 313–380, 421–555 | `field-landscape-selection-hermes-pinning-C003`, `field-landscape-selection-hermes-pinning-C005`, `field-landscape-selection-hermes-pinning-C009` | supports | Migration mappings do not prove equivalent runtime architecture |
| CP2-S009-E05 | History explicitly calls one permissions change OpenClaw-inspired | commit `0ce190be0dd7b0d6e0b9ccc59f6cfc372b1cd835` | `field-landscape-selection-hermes-pinning-C004`, `field-landscape-selection-hermes-pinning-C005` | supports | One named influence example only |
| CP2-S009-E06 | History explicitly calls one Telegram change a port of OpenClaw PR 72038 and describes adapted implementation choices | commit `b16f9d438ba18cb433a94a47dd99a05abc808d0a` | `field-landscape-selection-hermes-pinning-C004`, `field-landscape-selection-hermes-pinning-C005` | supports | One named port only; no broad lineage conclusion |
| CP2-S009-E07 | The selected history is large and active, with 14,857 commits, 2,014 shortlog identities, 3,953 commits at or after 2026-06-08T00:00:00Z, 11,391 at or after 2026-04-08T00:00:00Z, and 21 version tags in the listed release sequence | Full-history `git rev-list --since-as-filter` with explicit UTC boundaries, plus shortlog and tag counts at `9de9c25...`; recomputed 2026-07-18 | `field-landscape-selection-hermes-pinning-C007` | supports | Identities can be aliases/bots; activity is not adoption or effectiveness |
| CP2-S009-E08 | The concrete boundary and explicit relationship evidence make Hermes feasible as a standalone case plus bounded OpenClaw comparison | Combined E01–E06 | `field-landscape-selection-hermes-pinning-C008`, `field-landscape-selection-hermes-pinning-C009`, `field-landscape-selection-hermes-pinning-C010` | material premise | Selection judgment; future implementation depth remains unknown |

## Evidence assessment

The exact checkout and reachable history are primary implementation evidence with high directness for repository identity, selected files, commits, and Git counts. Pinned documentation is authoritative for how the maintainers describe the release's structure and migration behavior. The selection pass inspected enough code to confirm the migration command exists and executes the pinned migrator, but it deliberately did not trace the agent loop or compare architectures.

The source is current and versioned but not independent of the claims it makes about itself. Repository activity is direct operational metadata, while adoption and effectiveness remain unsupported. The release API reports that the GitHub release object is mutable, making the commit—not the page—the durable boundary.

## Relationships and contradictions

HS-S001 is a dated GitHub metadata view of the same repository and is not independent corroboration. CP2-S005 supplies the reviewed OpenClaw root and case boundary. Together they support a qualified relationship classification: separate repository roots followed by migration compatibility and selective documented influence. They do not support calling analogous behavior independent convergence.

Browser Use CP2-S004 remains the stronger perception/environment contrast. Selecting Hermes first is an explicit governance tradeoff, not evidence that Browser Use has less research value.

## Leads and open questions

- Which entry path best represents ordinary Hermes behavior without expanding into every gateway and provider?
- Which migrated fields affect runtime semantics and which are merely operator convenience?
- Beyond the two named history examples, where can influence or independent implementation be established from code and chronology?
- What does Hermes actually create or revise across runs, what feedback drives it, and does it optimize any measured outcome?
- Which OpenClaw concepts are deliberately archived or replaced, and what tradeoffs motivated those boundaries?
