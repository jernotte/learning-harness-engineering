# Provenance Bootstrap

The instrumented capture system has not been built. Until it is validated, external feasibility and implementation research must append events immediately to `bootstrap-events.jsonl`. This log is a declared manual bootstrap, not proof of complete provenance, and must remain separate from subject-matter research events.

## Bootstrap event schema

Each line is one JSON object with:

- `event_id`, `timestamp`, `agent`, `cycle`, and `pass`;
- `event_type`: `search`, `result_returned`, `source_opened`, `source_inspected`, `disposition`, `claim_reference`, or `verification`;
- `query_id`, exact `query`, query family, channel, tool/provider, filters, requested limit, returned count, cursor/pagination, and truncation when applicable;
- `source_id`, canonical URL/local identity, parent family, host, organization, and source type when applicable;
- inspection extent and surfaces/locations inspected;
- disposition and reason;
- artifact/claim IDs;
- version/freshness state;
- notes and known capture limitations.

Use stable IDs and append corrections or transitions as new events. Never rewrite earlier events to hide an error. Log interaction events before using their content in notes or design decisions.

Local reads of this repository's governing files are ordinary project work and do not enter the research-source ledger. External Codex documentation, product manuals, web sources, external repositories, user-provided research artifacts, and any material that influences the provenance design do.
