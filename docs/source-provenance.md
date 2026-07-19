# Source Provenance and Coverage

## Purpose

The project must make research breadth and selection visible, not merely provide citations for conclusions. A maintainer should be able to see what was searched, what results were returned, what was opened, how deeply it was inspected, what was used, what was set aside, and where source concentration may have narrowed the work.

This is also a quality control on the research process. A synthesis with correct citations can still be shallow if most searches clustered around one host, one organization, academic papers without implementations, or repository READMEs without code inspection.

## The provenance funnel

The canonical funnel is:

```text
search executed
  -> results returned
  -> source opened
  -> source inspected
  -> read_only, referenced, or excluded
  -> referenced evidence mapped to a material claim
```

`Discovered` means a source appeared in observed results or a citation trail but was not opened. `Read only` means it was relevant and retained as background or a future lead but was not cited by the current artifact. `Referenced` means it supports, opposes, or materially contextualizes a declared claim. `Excluded` means it was unsuitable for the current question because it was irrelevant, duplicate, superseded, inaccessible, or evidentially inadequate. Disposition changes are append-only transitions rather than overwritten history.

Search snippets are never evidence. If their content affects analysis, the source must be opened and logged.

## Two levels of source artifact

Every opened source receives a lightweight catalog identity and source event. This preserves breadth without creating a long essay for every page screened.

A referenced source additionally requires a full narrative record under `research/sources/`. That record captures exact supporting locations, version, evidence assessment, dependencies, contradictions, and limits. A direct external URL in a synthesis may help a reader but does not substitute for this record.

Repositories, paper packages, and coherent documentation sets may use one version-pinned family record. Exact child pages, files, tests, history locations, and benchmark artifacts are source items/events beneath it. Claim mappings point to exact child locations while narrative assessment remains at a sensible family/version level. Reports count both source items and source families so fifty pages from one site do not masquerade as broad independent coverage.

## Required search events

Each search event records at least:

- cycle, pass, agent, timestamp, and stable query ID;
- exact query and query family;
- channel, tool/provider, filters, purpose, and requested result limit;
- coverage dimension targeted;
- observed results returned when the tool exposes them, including canonical URLs or source IDs;
- returned count, pagination/cursor state, truncation, and whether more pages were examined.

An audit reports observed returned results, never every result that might exist outside the queried window.

Channels include general web search, GitHub repository search, GitHub code search, academic search, citation chaining, official documentation navigation, release/history inspection, local repository search, and user-provided material.

## Required source events

Each opened source event records at least:

- stable source ID and canonical URL or local identity;
- parent family, host, author/organization, and source type;
- cycle, pass, agent, timestamp, and discovery/query provenance;
- pages, sections, files, tests, commits, or history inspected;
- inspection extent: screening, partial substantive, or full substantive;
- surfaces inspected, which may be multiple. The schema vocabulary is `documentation`, `README`, `code`, `tests`, `history`, `releases`, `issues`, `benchmark_artifacts`, `paper`, `abstract`, `transcript`, `command_output`, and `other`. More specific descriptions belong in `surface_details`; authority such as “official” belongs in source identity/organization metadata, not in the surface value;
- disposition and reason;
- artifact and claim IDs when referenced;
- version/freshness status and primary-verification state.

Host and evidence lineage are separate. Many unrelated papers can share arXiv; many apparently independent articles can repeat one vendor announcement.

## Claim-evidence ledger

Every material claim in an analysis or synthesis receives a stable claim ID. The ledger records:

- exact claim;
- epistemic kind;
- supporting and, when applicable, opposing source-record IDs;
- primary verification state;
- version and freshness limitations;
- confidence;
- artifact location.

Each analysis or synthesis has a globally unique artifact ID and one canonical claim ledger. Artifact IDs use `<cycle-id>-<artifact-type>-<artifact-slug>`; claim IDs append `-C###`. IDs are never reused and the ledger owns the authoritative claim text. Source records and prose annotations reference the ID rather than maintaining independent mutable copies. A non-substantive wording clarification may retain the ID with revision history; a material scope or meaning change creates a new claim ID and supersedes the old one.

Transitional prose does not need artificial claim IDs. Claims that establish a category, comparison, causal explanation, pattern, recommendation, or consequential factual premise do. Before review, the primary records a prose-to-ledger attestation. Automation can validate declared claims and mappings; it cannot reliably discover a material prose claim the author omitted from the ledger.

Every promotion audit also requires a `review_scope` manifest enumerating the material artifacts in the package. Every scoped artifact must be registered and contain declared claims. This does not make prose-claim discovery automatic—the maintainer still reviews whether the manifest and ledger are complete—but it prevents an artifact from silently bypassing claim gates merely because neither its registration nor its claims were emitted.

Primary verification is an event, not a checkbox. Before provisional promotion, every referenced claim/source/location mapping requires an event recording claim ID, source ID and child location, inspected version, primary verifier, date, outcome, and notes on whether the source supports the claim's wording and scope. A subagent cannot verify its own evidence for promotion.

## Human audit view

Each cycle must generate a readable source audit from canonical events. It begins with a compact summary and includes the complete source table. It reports:

- searches and query families by channel;
- planned versus actual channel coverage;
- returned, opened, read-only, referenced, and excluded counts;
- distribution by host, organization, source type, year, primary/secondary status, and evidence lineage;
- GitHub repositories returned, screened, README-only, code-inspected, test-inspected, history-inspected, pinned, and referenced;
- reading depth and disposition reasons;
- sources and claims lacking required records or verification;
- concentration warnings and the response to each warning;
- provenance-completeness status.

The global source-coverage view aggregates cycles but never replaces their detailed audit trails. An HTML dashboard may later provide filtering and visualization, but it must be generated from the same canonical events.

## Breadth warnings, not quotas

The system should flag concentration in one host, organization, source type, or evidence lineage; implementation-oriented work with little code inspection; empirical claims with little empirical evidence; academic-heavy research with few current implementations; and planned source channels that received no meaningful search effort.

Warnings do not automatically invalidate a cycle. Different questions legitimately require different source mixes. A checkpoint must either perform more recon or explain why the concentration fits the question. This avoids both source monocultures and quota gaming.

## Checkpoint and maturity gates

No artifact may be promoted to a provisional finding, and no checkpoint package may be presented for maintainer approval, unless:

- every query made through the approved capture path is present;
- every opened source has an event and disposition;
- every referenced source has a full source record;
- every material claim maps to referenced source records;
- every referenced claim/source/location mapping has documented primary verification, and a subagent has not self-verified its own evidence;
- implementation claims are pinned or explicitly marked live/unpinned;
- the source and claim audits pass;
- concentration warnings are resolved or explained.

The audit reports claim coverage rather than source-record count.

## Native observation resolution

Runtime adapters preserve their derived observation files. They are never hand-edited to settle ambiguous calls. An append-only `observation_resolution` batch may classify an unresolved observation as `linked` to reciprocally linked canonical events or as `not_research` with a reason. `not_research` is permitted only for the generic-shell review class; known external interactions and unknown native tool shapes must be linked or remain blocking.

Each resolution names the immediately preceding effective-resolution event. The audit applies transitions in log order and accepts only a chain extending the current state; stale or competing transitions are contradictory and block promotion. This last-valid-transition rule preserves correction history without allowing a late classification to erase the native observation, its fingerprint, or a missing reciprocal evidence event.

Internal drafts may exist before these gates pass, but their metadata must say `non-reviewable draft` or `analyzed evidence — promotion blocked`. A conditional or draft label cannot be used to route an incomplete package through checkpoint approval.

## Completeness labels

Every cycle declares one of:

- `complete`: all research used technically enforced instrumented tools, or complete tool/transcript reconciliation proved that every interaction was captured; agent attestation alone is insufficient;
- `complete_with_declared_manual_sources`: instrumented activity is complete and manual inputs come only from an externally bounded, independently enumerable set—such as maintainer-provided files/URLs or a fixed approved local repository set—whose members are individually logged; uninstrumented manual search or browsing forces `partial`;
- `partial`: known activity was not captured;
- `reconstructed`: provenance was recreated from transcripts, reports, and artifacts;
- `unknown`: completeness cannot be assessed.

Cycle 1 is `reconstructed`. Its exact query bundles were recovered from retained rollouts, but complete provider result windows, result ranks, every screening decision, and exact report-only inspection depth are not recoverable, so no later artifact may describe its provenance as complete.

Incomplete provenance may support individually verified claims. `partial`, `reconstructed`, and `unknown` cycles cannot establish search breadth, source balance, marginal information, absence of evidence, or saturation. For `complete_with_declared_manual_sources`, any breadth or saturation conclusion is limited to the instrumented coverage boundary and the independently enumerable manual set. A taxonomy derived from incomplete work remains explicitly provisional and requires a maintainer waiver to advance; the limitation persists in later summaries until a complete cycle revalidates it.

## Capture architecture and current limitation

The approved minimum implementation uses native Codex rollout or `codex exec --json` ingestion as a completeness backstop and explicit canonical events for source semantics. The architecture and alternatives are documented in `provenance-architecture.md`. Logged gateways and adapters may later enrich search, retrieval, GitHub, repository, and manual-source events. Manual logs remain a bootstrap and emergency path, not the normal architecture.

Near-zero interaction overhead is an acceptance gate. Runtime adapters must derive queries, observed results, source opens, native links, and inspectable repository facts from ordinary tool use. Agents may supply inherently semantic judgments in a single batch, but per-interaction JSON authoring fails Stage 0.5. The canonical event model remains runtime-neutral; using an unvalidated runtime adapter forces incomplete provenance.

A known search shape is not evidence of a successfully captured result window. Explicit runtime truncation or an unparseable known-search output records unknown counts and incomplete capture; it must never be converted into a zero-result search. Query purpose, family, and coverage intent remain pending until supplied semantically.

The `semantic_batch_actions <= 1` threshold belongs only to the bounded Stage 0.5 acceptance scenario. Normal multi-day cycles may require multiple semantic batches. Their general requirement is that capture work scale with semantic decisions and ambiguous exceptions rather than one manual action per interaction.

Every native boundary used to support a completed research cycle must have a durable `capture_archive` record. The archive contains exactly the fingerprint-verified transcript prefix, is stored outside this repository under `/Users/jernotte/dev/reference-materials/research`, and uses owner-only permissions. The record preserves runtime path, archive path, SHA-256, byte count, line boundary, capture date, and mode. Regeneration verifies both copies when both exist, may use a valid archive when the runtime transcript has disappeared, and fails closed if neither survives or either declared copy is inconsistent. Because the prefix contains raw transcript content, its external write requires explicit privacy approval.

Repository scripts can validate recorded events but cannot prove that an agent never used an uninstrumented tool. A claim of complete provenance therefore requires either tool-level capture or an environment that restricts research to instrumented tools.

The current generic-web path can reconcile that an interaction occurred without mechanically binding every manually authored `result_returned` URL to its native output. Until that path is replaced because real research demonstrates a consequential need, a checkpoint that relies on manual result events must compare every recorded canonical URL with the retained native archive and record the reviewer, date, scope, and outcome. This is an interim fidelity review, not proof supplied by the generated audit. If its cost or reliability becomes consequential during search-heavy research, work pauses for an explicit D-005 freeze-exception decision rather than silently weakening the check or speculatively expanding the infrastructure.

The maintainer granted the reconstructed-provenance waiver, provisionally promoted Checkpoint 1, approved the Checkpoint 2 batch, and reviewed the completed Pi, OpenHands SDK, OpenClaw, and Hermes cases. D-008 approved one narrow freeze exception after OpenHands exposed a consequential post-restart unified-`exec` incompatibility; the correction passed and the infrastructure is frozen again. D-013 approves the four-case Checkpoint 3 taxonomy and method decisions and authorizes the first canonical synthesis plus human-oriented learning Markdown. HTML remains downstream of validated Markdown and another implementation remains blocked until the final learning checkpoint. Browser Use remains deferred until after the first learning experience. The `provisional-promotion` profile enforces review scope and applicable archive retention without relying on caller-selected flags. `search_update` is monotonic: it may preserve or weaken result-capture status, but cannot strengthen it or rewrite evidence already classified complete. Generated audits expose every applied or rejected update.

Provenance infrastructure is frozen. Change it only when real research exposes a consequential failure; minor cataloging or presentation imperfections that cannot materially affect a conclusion do not justify more infrastructure. Bootstrap feasibility activity remains in `research/provenance/bootstrap-events.jsonl`; local governing files do not need source events. Bootstrap and test events are segregated from the subject corpus and carry their own `partial` or fixture-only status rather than inheriting completeness from the validation run.

The validation test must include returned-but-unopened, read-only, excluded, and referenced sources and demonstrate that the human audit exposes source concentration, planned-versus-actual channels, repository inspection depth, missing claim evidence, and unpinned implementation claims.
