# V2 Outline Seed Map — Coverage Plan

**Task ID:** `v2-outline-seed-map`
**Declared:** 2026-07-20T15:00:12Z
**Authority:** V2-D005 and V2-D006, approved 2026-07-20
**Current pass:** Seed-only
**Audit profile:** `diagnostic`
**Target completeness:** `complete_with_declared_manual_sources`

## Decision this pass informs

Map the range of plausible outline vocabulary, topics, prerequisites,
organizational principles, omissions, tensions, and counterframes exposed by
the three approved seeds. The pass prepares an unopened first-hop Wave 1
proposal; it does not choose a taxonomy or draft an outline.

## Mandatory seed coverage

| Seed ID | Identity | Channel | Complete outline-bearing surface |
| --- | --- | --- | --- |
| `v2-seed-asixiv-2606-00001` | `https://asixiv.org/pdf/curated/2606.00001` | Direct public seed URL | Metadata, abstract, introduction, headings, section summaries or necessary structural prose, conclusion or limitations, references |
| `v2-seed-awesome-harness-engineering` | `https://github.com/ai-boost/awesome-harness-engineering` | Public repository, structure-only | Repository identity, README and repository-local framing, complete category/list organization, contribution guidance when relevant; no implementation code or history beyond identity pinning |
| `v2-seed-local-2606-24937v1` | `/Users/jernotte/Downloads/2606.24937v1_copy.pdf` | Declared manual source | Path, SHA-256, bytes, modification time, independent recheck, metadata, abstract, introduction, headings, section summaries or necessary structural prose, conclusion or limitations, references |

### Post-declaration manual-source access note

The declared Downloads path remained the identity and predeclared manual-set
member, but macOS permitted metadata access while blocking content reads. The
maintainer then added a readable copy at
`/Users/jernotte/dev/learning-harness-engineering/2606.24937v1_copy.pdf`, in the
archived repository checkout. The inspection did not modify that checkout.

The readable copy measured 9,266,428 bytes, had modification time
`2026-06-30T01:27:42-0500`, and produced SHA-256
`7c5a2b81fe135dc9b08221d1da9282f99a7146f043e580eb4809364baff145fe`.
The hash matched independent `shasum` and OpenSSL checks; the size matched
independent `stat` and byte-count checks. The provenance stream retains the
failed access lifecycle, declared identity, inspected path, and rechecks rather
than pretending the original path was directly readable.

## Extraction dimensions

For each seed, record without adopting:

- source-native definitions and vocabulary;
- candidate topics and stated audience or outcomes;
- organizational structure and implied prerequisites;
- assumptions and reference shape;
- omissions, tensions, and counterframes;
- anchoring hazards; and
- materially different organizational possibilities.

## Interaction boundary

- Primary agent only for every external interaction.
- Native rollout:
  `/Users/jernotte/.codex/sessions/2026/07/20/rollout-2026-07-20T00-42-48-019f7e0c-5fbb-7121-873a-3d2df5c0aa79.jsonl`.
- The capture window begins immediately before the first seed interaction and
  remains open through the last authorized Stage 4 first-hop interaction.
- Re-ingest and reconcile immediately after the first external interaction and
  at every Stage 4 checkpoint.
- No transcript-prefix archive is requested and no selective conversation
  packet is authorized.

The first seed open occurred at `2026-07-20T15:01:44.615Z`. The retained native
rollout records an ingest-and-validate pass completing at `15:02:01Z` and a
corrected-window pass completing at `15:02:12Z`; both validated, and the latter
contained exactly the two linked source-interaction observations with no
unknown interaction. The final consolidated boundary was ingested after the
seed-only window closed. Event
`v2-outline-seed-map-first-interaction-reconciliation-verification` records the
targeted check against those native calls without claiming durable transcript
archive coverage.

## Search and traversal limits

- No topical or ecosystem search.
- No second-hop traversal, bibliography harvesting, implementation deep dive,
  or legacy-material access.
- During the seed-only pass, use an exact-title or identifier-resolution query
  only when seed metadata is insufficient to identify an unopened Wave 1
  candidate. Record intent first, run one query per tool call, count it against
  the Stage 4 maximum of three, and do not open the result before Wave 1
  approval.
- No first-hop source open before the seed-only maintainer gate.

## Stop and checkpoint

Stop after all three seeds have final dispositions, the diagnostic provenance
state is reconciled or its limitation is explicit, and an exact unopened Wave 1
proposal of at most six direct source families is ready. Present those artifacts
for maintainer approval before any first-hop open.
