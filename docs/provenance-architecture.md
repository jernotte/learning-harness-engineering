# Retained V2 Provenance Capture Architecture

**Status:** Inherited technical baseline; V2 validation required
**Authority:** Capture infrastructure only; no pre-pivot subject authority

## Decision

Retain persisted Codex rollout JSONL or `codex exec --json` streams as a
technical completeness backstop. Keep append-only canonical research events for
semantics the runtime cannot infer reliably: query purpose, source identity and
lineage, inspection depth, disposition, claim use, exact evidence location,
version state, and primary verification.

Every complete research boundary must reconcile each research-capable native
interaction to reciprocal canonical events or an eligible, reasoned
`not_research` resolution. Unknown shapes fail closed.

## Why this is the minimum architecture

A transcript can reveal that an interaction occurred but cannot reliably know
why a source mattered, whether it was read deeply, why it was excluded, or
which exact claim it supports. Agent-authored events can express those semantics
but cannot prove that no interaction was omitted. Combining native observation
with explicit semantic events addresses both limitations without forcing all
research through a new gateway.

## Components

### Native ingestion

`tools/provenance/cli.mjs ingest-codex` reads a declared rollout boundary and
emits:

- one `capture_boundary`;
- fingerprint-only `capture_observation` records;
- automatically derived search, result, source-open, and repository-inspection
  events for recognized runtime shapes.

Raw prompts and outputs are not copied into the canonical event log.

### Semantic batching

`annotate` adds one append-only batch for source inspection judgments,
dispositions, query intent, artifact registration, claim declarations,
claim/source/location mappings, primary verification, review scope, and prose
attestation.

### Exception resolution

`resolve-observations` appends compare-and-append resolutions. Only eligible
generic-shell observations may become `not_research`; external or unknown
interactions must be linked or remain blocking.

### Durable retention

`archive-boundary` fingerprint-verifies and stores the complete transcript
prefix through the declared boundary with mode `0600`, then records its path,
hash, size, lines, runtime source, and date. This operation is privacy-sensitive
and requires explicit approval before it writes outside the repository.

The command cannot produce a selective design-history packet: its verified
archive always begins at line 1 and ends at the declared boundary. Do not
repurpose or relabel it for the consequential-selection policy in
`docs/design-history.md`. Selective packets are governance context rather than
research-provenance completeness and require a separate reviewed extractor
before first use.

### Audit generation

`audit` validates events and produces machine-readable JSON plus human-readable
Markdown. The named `provisional-promotion` profile requires review scope and,
for complete capture, durable archive retention. Diagnostic audits remain
available for non-promotion checks.

## Canonical and derived data

Canonical data consists of append-only research events and full source records
for referenced evidence. Adapter output, resolved streams, audit JSON, and audit
Markdown are derived and may be regenerated. Derived output is never edited to
change evidence history.

`search_update` is monotonic: it may preserve or weaken effective result-capture
status and add semantic fields, but cannot turn incomplete evidence into
complete evidence or rewrite a parsed complete result window.

## Completeness boundary

Completeness applies only to an explicitly declared runtime, transcript prefix,
time or line boundary, and adapter version. A passing historical fixture does
not prove that a later runtime shape is covered. The first V2 research boundary
must therefore exercise the retained adapter and report any unresolved shape
before claiming completeness.

## Retained validation evidence

The repository keeps taxonomy-neutral fixtures under `tools/provenance/fixtures/`
and infrastructure validation evidence under
`research/provenance/validation/`. Run:

```sh
node tools/provenance/test.mjs
node tools/provenance/check-local-links.mjs
```

The bounded failing fixture must remain blocked and expose expected omissions.
The corrected fixture must pass. Adapter tests cover parsed and truncated
searches, source opens, repository attribution, unified-exec wrappers, unknown
shapes, semantic batching, monotonic corrections, observation resolution,
archive permissions, tamper detection, review scope, and promotion profiles.

Historical real-capture and preflight files are retained only as infrastructure
evidence. Their old cycle names and outcomes do not authorize V2 subject work or
prove current runtime compatibility.

## Historical acceptance boundary

The documentation inspected on 2026-07-11 reported that the supported
`PostToolUse` hook covered supported Bash, `apply_patch`, and MCP tools, but did
not cover WebSearch and did not intercept every unified shell call. That is a
source-reported claim scoped to the documented runtime at that date. Because
those omissions included research-capable interactions required by the capture
boundary, the architecture treats hooks as optional enrichment rather than the
sole completeness mechanism. This is an engineering recommendation, not a
timeless product fact.

The retained preflight also preserves a historical truncated result window as
incomplete rather than rewriting it as a false zero. Its presence demonstrates
fail-honest correction behavior; it is not V2 research evidence.

## Current limitations

- Runtime parsing recognizes tested Codex rollout shapes, generic `web__run`,
  selected OpenAI-documentation calls, and selected repository shell patterns.
- Unknown tool envelopes remain unresolved by design.
- A maintainer-provided local file is research-capable but is not automatically
  converted into a complete source event; use an independently enumerable
  manual source set unless real work demonstrates a consequential gap.
- Manual result events require comparison against the retained native boundary.
- Repository validation cannot prove that an agent never used an uninstrumented
  interface.
- Claim-ID uniqueness is validated within an event stream; V2-specific ID
  prefixes prevent collision across packages.

Do not modify this architecture for speculative completeness. If authorized V2
work exposes a consequential failure, record the exact observation, effect on
the audit, bounded alternatives, and maintainer decision before changing it.
