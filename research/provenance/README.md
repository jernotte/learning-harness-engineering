# Provenance Capture and Bootstrap

The approved D-004 implementation is documented in `docs/provenance-architecture.md` and lives under `tools/provenance/`. Its fixtures, archive-enforced real acceptance, and claim closeout pass. The realistic preflight retains its overhead finding but blocks honestly on one truncated search-result window. The reconstructed Cycle 1 audit passes the fixed `provisional-promotion` profile under an explicit maintainer waiver; bounded Checkpoint 2 selection is authorized.

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

Native ingestion emits one `capture_boundary`, fingerprint-only `capture_observation` records, and adapter-derived interaction events. It does not persist raw tool inputs or outputs. Supported search, fetch, and repository interactions are linked automatically; unknown shapes remain unreconciled and block completeness. `annotate` adds one batch of semantic judgments and capture-overhead metrics.

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
