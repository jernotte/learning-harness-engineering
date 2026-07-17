# Learning Harness Engineering

This repository is a living research program about the orchestration layer around language models: the code and instructions that let a model plan, act, observe, remember, delegate, and improve its work. Its purpose is not to build one particular harness. Its purpose is to develop a rigorous, current, and reusable body of knowledge that helps experienced builders reason about many kinds of harnesses.

The research is intended to do three things at once. The process itself should deepen the maintainer's expertise; the reviewed findings should become a durable reference for designing and evaluating harnesses; and mature parts of the corpus should eventually support a course for technically capable newcomers. Research quality comes first. Teaching material is a derived view, not the canonical home of a finding.

## Where to begin

- [`AGENTS.md`](AGENTS.md) is the operating contract for agents working in this repository.
- [`docs/research-charter.md`](docs/research-charter.md) explains the mission, boundaries, and standards of evidence.
- [`docs/methodology.md`](docs/methodology.md) defines the iterative `recon -> analyze -> consolidate -> refine` method.
- [`docs/source-provenance.md`](docs/source-provenance.md) defines the required search, reading, and claim-evidence audit trail.
- [`docs/research-plan.md`](docs/research-plan.md) describes the initial program and its early human checkpoints.
- [`research/STATUS.md`](research/STATUS.md) is the current human-readable control panel.
- [`research/TAXONOMY-FRICTION.md`](research/TAXONOMY-FRICTION.md) accumulates case evidence about where the provisional responsibility lens works or breaks down.
- [`outline.md`](outline.md) is a useful seed, not an approved or fixed taxonomy.

## Repository shape

The structure remains intentionally small. The maintainer has reviewed the Pi pilot and authorized the pinned OpenHands SDK case as the next test of the deep-dive method and analytical lens. Source-native topics may later add navigation without forcing the responsibility lens into an exclusive directory tree.

```text
docs/
  research-charter.md       mission, scope, and evidence principles
  methodology.md            research and maturity workflow
  source-provenance.md      approved capture and audit contract
  provenance-architecture.md approved and frozen minimum implementation architecture
  research-plan.md          staged program and checkpoints
research/
  provenance/               bootstrap log and generated validation evidence
  sources/                  legacy/full narrative records
  case-studies/             deep dives into implementations or techniques
  syntheses/                cross-source and cross-harness findings
  cycles/                   plans, recon maps, and cycle reviews
  templates/                minimum schemas for research artifacts
  TAXONOMY-FRICTION.md      cumulative cross-case responsibility-lens evidence
  COVERAGE.md               evolving landscape and gaps
  DECISIONS.md              consequential methodology decisions
  STATUS.md                 concise progress and review view
outline.md                  initial curriculum hypothesis
tools/provenance/            capture, transcript-ingest, validation, and audit CLI
```

Large third-party repositories belong in `/Users/jernotte/dev/reference-materials/research`, not in this repository. Findings derived from them belong here and should identify the inspected commit or release.

The repository now contains the approved and frozen D-004 provenance implementation based on runtime adapters, native Codex transcript reconciliation, append-only exception resolution, durable transcript-prefix retention, and batched semantic judgments. Its fixtures, archive-enforced real acceptance, and claim-ledger dogfood pass. The realistic 38-observation preflight still validates exception-scaled overhead, while a preserved truncated search is reported as incomplete rather than as a false zero. Checkpoint 1 is provisionally promoted under a reconstructed-provenance waiver. Checkpoint 2 and D-007 are approved; Pi is reviewed, and only the pinned OpenHands SDK case is authorized next. An HTML dashboard and further speculative provenance work remain deferred.
