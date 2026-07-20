# V2 Provenance Workspace

The active V2 repository retains the taxonomy-neutral capture and audit engine
under `tools/provenance/` plus its validation evidence under `validation/`.
Pre-pivot subject event packages are available only from the archive described
in `research/LEGACY.md`.

The active `v2-outline-seed-map` packages record structural outline-development
interactions only; they do not admit V2 subject evidence. V2-D007 adds a
separate catalog pass whose outbound URL inventory remains lead metadata until
a source is explicitly opened after its gate.

## Commands

```sh
node tools/provenance/cli.mjs validate --events <events.jsonl>
node tools/provenance/cli.mjs ingest-codex --rollout <rollout.jsonl> --out <auto-events.jsonl> --cycle <cycle> --pass <pass> --after <timestamp> --before <timestamp> --derive
node tools/provenance/cli.mjs annotate --events <auto-events.jsonl> --annotations <semantic-batch.json> --out <events.jsonl>
node tools/provenance/cli.mjs resolve-observations --events <events.jsonl> --resolutions <resolution-batch.json> --out <resolved-events.jsonl>
node tools/provenance/cli.mjs archive-boundary --events <events.jsonl> --out <events-with-archive.jsonl> --boundary <boundary-id> --archive <external-prefix.jsonl>
node tools/provenance/cli.mjs audit --events <events.jsonl> --json <audit.json> --markdown <audit.md> --cycle <cycle> --completeness <label> --profile <diagnostic-or-provisional-promotion>
node tools/provenance/test.mjs
node tools/provenance/check-local-links.mjs
```

`append` validates the complete target log before adding one event. `annotate`
adds a semantic batch. Parallel agents use separate event logs; the primary
merges them deliberately.

## Capture behavior

Native ingestion emits a boundary, fingerprint-only observations, and derived
events for recognized search, open, and repository interactions. It does not
store raw prompt or tool output in the canonical log. Unknown runtime shapes
remain unreconciled and block complete provenance.

Parsed empty search output is zero. Explicit truncation or unparseable known
search output has unknown counts and incomplete capture. `search_update` may
preserve or weaken result status but cannot manufacture completeness.

Observation resolution is append-only and transition-linked. Only eligible
generic-shell observations may become `not_research`; known external and unknown
tool interactions must be linked or remain blocking.

## Manual sources

The maintainer-provided local PDF is an independently enumerable manual source.
When its inspection becomes authorized, declare it in a `manual_source_set` and
log its source lifecycle. Do not modify the adapter merely because a local file
needs semantic source events.

## Privacy boundary

`archive-boundary` writes the raw verified transcript prefix outside the
repository. Obtain explicit permission before using it. The archive must use an
exact boundary, owner-only permissions, and recorded integrity metadata.

Stage 4 requests no such full-prefix archive. Selective conversation retention
is governed by `docs/design-history.md` and is not a `capture_archive`, subject
evidence, or proof of provenance completeness. The current tools cannot produce
a canonical selective packet; do not copy conversation manually or change the
provenance schema to simulate one.

## Validation status

The retained deterministic suite is the inherited baseline. Files under
`validation/` are infrastructure evidence, not V2 subject evidence and not
proof that a future runtime is covered. The first authorized V2 research window
must demonstrate actual reconciliation or report the observed gap honestly.
