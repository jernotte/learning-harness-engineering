# Provenance Capture and Bootstrap

The approved D-004 implementation is documented in `docs/provenance-architecture.md` and lives under `tools/provenance/`. Its fixtures, archive-enforced real acceptance, and claim closeout pass. The realistic preflight retains its overhead finding but blocks honestly on one truncated search-result window. The reconstructed Cycle 1 audit passes the fixed `provisional-promotion` profile under an explicit maintainer waiver. The bounded Checkpoint 2 selection audit also passes. The maintainer-reviewed Pi, OpenHands SDK, OpenClaw, and Hermes cases each have `complete` audits under the fixed promotion profile.

The Pi package is rooted at `pi-pilot-events.jsonl`; `pi-pilot-audit.md` and JSON are generated source and claim-evidence views. The exact-prefix archive is retained outside this repository. Its one manual generic-web result batch was separately checked against that archive: all 21 canonical result URLs and all four component queries were present.

The OpenHands package is rooted at `openhands-sdk-case-events.jsonl`; `openhands-sdk-case-audit.md` and JSON are its combined generated source and claim-evidence views. D-008 was the first invoked D-005 freeze exception: a real post-restart case showed that unified `exec` wrappers hid nested repository and web calls and could misattribute repository paths. The approved correction recognizes only the observed nested shell/web forms, reconciles internal web markers, and preserves fail-closed handling for unknown shapes. Re-ingestion of the retained window resolved all 55 observations automatically and mechanically captured all nine returned result identities. No manual `result_returned` event or archive-grep substitute was needed. The exact-prefix archive remains outside this repository with mode `0600`; infrastructure is frozen again.

The OpenClaw package is rooted at `openclaw-case-events.jsonl`; `openclaw-case-audit.md` and JSON are its combined generated source and claim-evidence views. Three overlapping windows preserve the primary trace and two bounded subtraces. Of 272 observations, 262 resolved automatically and ten ordinary exceptions—five clone-progress polls and five scoped instruction/test calls—were resolved in one append-only batch. The package declares 20 claims and verifies all 31 source/location mappings. Maintainer review clarified C003 against the pinned `after_agent_dispatch` tracker path and regenerated the same pre-review semantic package; native observations, exception resolutions, and the three archive records remained unchanged. No live search or manually authored `result_returned` event was used. Three exact-prefix archives remain outside this repository with mode `0600` and are cryptographically checked during regeneration. A few compound shell reads retain non-consequential repository-path display noise; exact source records and claim locations remain authoritative, so the frozen infrastructure was not reopened.

The D-011 Hermes selection package is rooted at `hermes-selection-events.jsonl`; `hermes-selection-audit.md` and JSON are its generated source and claim-evidence views. Its bounded research and correction windows contain one complete targeted search with 20 mechanically captured result identities, four opened and referenced records, ten declared claims, 18 verified mappings, 51 native observations, 47 automatic resolutions, and four operational exceptions resolved in one append-only batch. The second window preserves the correction from pruning-sensitive Git activity-window counts to reproducible full-history UTC filters. Both exact-prefix archives are retained outside this repository with mode `0600` and are cryptographically checked during regeneration. This package establishes selection identity, pinning, relationship limits, and the sampling amendment only; it is not Hermes mechanism evidence and did not begin the case study.

The Hermes implementation package is rooted at `hermes-agent-case-events.jsonl`; `hermes-agent-case-audit.md` and JSON are its combined generated source and claim-evidence views. Six bounded windows contain 352 native observations, 349 automatic classifications, and three ordinary repository-inspection exceptions linked in one append-only resolution batch. The corrected quality window begins after the fork-inherited prefix, so inherited activity is not misreported as Hermes work. The package opens and references ten records, declares 24 claims, and verifies all 34 source/location mappings. It contains no search or manually authored search-result event. Six exact-prefix archives remain outside this repository with mode `0600` and are cryptographically checked during regeneration. The package is complete analyzed evidence that the maintainer promoted to a reviewed finding under D-012; the audit itself did not self-promote it.

The Checkpoint 3 package is rooted at checkpoint-3-events.jsonl; checkpoint-3-audit.md and JSON are its combined generated source and claim-evidence views. It reuses a fixed set of four reviewed implementation records and two admitted selection-depth gap records, declares 16 claims, and verifies all 65 source/location mappings. Its one declared native window contains 97 observations, 94 automatic classifications, and three transcript/capture-governance interactions linked in one batch; none remains unresolved. The audit passes with three resolved warnings: GitHub concentration is inherent to the fixed implementation set, while LangGraph and Browser Use remain intentionally selection-depth and support no implementation mechanism claim. One exact-prefix archive remains outside this repository with mode 0600. The package itself was a Gate B proposal; the maintainer subsequently approved D-013 and the resulting method changes are recorded in the governing artifacts.

The first-batch synthesis package is rooted at `first-batch-synthesis-events.jsonl`; its Markdown and JSON audits are the generated source and claim-evidence views. It opens 15 records, references 14, excludes one infrastructure record, declares 17 claims, and verifies all 65 source/location mappings. Its bounded window contains 95 native observations, 94 automatic classifications, and one local-repository inspection resolved in one batch. It uses one verified archive, no searches, and no manually authored result events. Two shallow selection-depth warnings are retained and resolved because Browser Use and LangGraph support only explicit gap claims. Site generation used these existing local canonical inputs and added no subject source. Generated HTML is presentation, not evidence; independent learning/site review is quality evidence rather than subject-matter provenance.

Search-result updates are monotonic and visible in generated audits. The named promotion profile enforces promotion-critical gates without optional caller flags. Provenance infrastructure is now frozen except for consequential failures observed during real research.

## Commands

```sh
node tools/provenance/cli.mjs validate --events <events.jsonl>
node tools/provenance/cli.mjs ingest-codex --rollout <rollout.jsonl> --out <auto-events.jsonl> --cycle <cycle> --pass <pass> --after <timestamp> --before <timestamp> --derive
node tools/provenance/cli.mjs annotate --events <auto-events.jsonl> --annotations <semantic-batch.json> --out <events.jsonl>
node tools/provenance/cli.mjs resolve-observations --events <events.jsonl> --resolutions <resolution-batch.json> --out <resolved-events.jsonl>
node tools/provenance/cli.mjs archive-boundary --events <events.jsonl> --out <events-with-archive.jsonl> --boundary <boundary-id> --archive <external-prefix.jsonl>
node tools/provenance/cli.mjs audit --events <events.jsonl> --json <audit.json> --markdown <audit.md> --cycle <cycle> --completeness <label> --profile provisional-promotion
node tools/provenance/test.mjs
```

`append` accepts one JSON event through `--event` and validates the whole target log before appending. Parallel agents should still use separate event logs and let the primary merge them deliberately.

Native ingestion emits one `capture_boundary`, fingerprint-only `capture_observation` records, and adapter-derived interaction events. It does not persist raw tool inputs or outputs. Supported search, fetch, repository, and observed unified-`exec` wrapper interactions are linked automatically; unknown shapes remain unreconciled and block completeness. `annotate` adds one batch of semantic judgments and capture-overhead metrics.

Known search calls record `result_capture_status`. A parsed empty hit array is a real zero; explicit runtime truncation or any other unparseable output produces unknown counts and incomplete capture. Purpose, query family, and coverage intent remain pending until a semantic batch supplies them.

`search_update` is a correction path, not an evidence-upgrade path. It may preserve or weaken capture status and may attach semantic fields, but it cannot turn incomplete or unknown capture into complete or rewrite complete result evidence. Rejected updates remain visible in the audit.

`resolve-observations` appends reasoned decisions for adapter exceptions while preserving the original observations. Resolution batches use compare-and-append transition links, so stale or competing classifications fail. Only generic shell observations may become `not_research`; known external and unknown native shapes must be linked to reciprocal evidence events.

`archive-boundary` is intentionally privacy-sensitive. It writes the complete verified transcript prefix through the boundary line—not only the selected time window—to `/Users/jernotte/dev/reference-materials/research` with owner-only permissions, then records its path, hash, bytes, lines, runtime source, and date. Obtain explicit approval before running it because raw prompts and tool content may be present.

## Bootstrap history

`bootstrap-events.jsonl` records the manual feasibility investigation that preceded the implementation. It is intentionally `partial`. It is not a subject corpus and does not inherit the bounded fixture's `complete` label.

The initial bootstrap schema required:

- `event_id`, `timestamp`, `agent`, `cycle`, `pass`, and `event_type`;
- exact search/query metadata and observed result-window limits;
- source identity, organization, type, and discovery provenance;
- inspection extent, surfaces, and exact locations;
- append-only dispositions and reasons;
- artifact/claim and verification mappings when applicable;
- version/freshness state and known capture limitations.

One bootstrap instruction source was opened before its event was appended because the platform required the applicable skill to be read first. The correction is preserved in the log rather than hidden. This is one reason the bootstrap log cannot support a completeness claim.

Local reads of this repository's governing files are ordinary project work. External documentation, web pages, repositories, transcripts outside this project, and user-provided research material require provenance treatment when research resumes.
