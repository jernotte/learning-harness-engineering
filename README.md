# Learning Harness Engineering

This repository is a living research program about the orchestration layer around language models: the code and instructions that let a model plan, act, observe, remember, delegate, and improve its work. Its purpose is not to build one particular harness. Its purpose is to develop a rigorous, current, and reusable body of knowledge that helps experienced builders reason about many kinds of harnesses.

The research is intended to do three things at once. The process itself should deepen the maintainer's expertise; the reviewed findings should become a durable reference for designing and evaluating harnesses; and mature parts of the corpus should eventually support a course for technically capable newcomers. Research quality comes first. Teaching material is a derived view, not the canonical home of a finding.

## Where to begin

- [`AGENTS.md`](AGENTS.md) is the operating contract for agents working in this repository.
- [`docs/research-charter.md`](docs/research-charter.md) explains the mission, boundaries, and standards of evidence.
- [`docs/methodology.md`](docs/methodology.md) defines the iterative `recon -> analyze -> consolidate -> refine` method.
- [`docs/research-plan.md`](docs/research-plan.md) describes the initial program and its early human checkpoints.
- [`research/STATUS.md`](research/STATUS.md) is the current human-readable control panel.
- [`outline.md`](outline.md) is a useful seed, not an approved or fixed taxonomy.

## Repository shape

The structure is intentionally small until the first reconnaissance cycle reveals the right taxonomy.

```text
docs/                       durable project guidance
research/
  sources/                  one record for each source actually used
  case-studies/             deep dives into implementations or techniques
  syntheses/                cross-source and cross-harness findings
  cycles/                   plans, recon maps, and cycle reviews
  templates/                minimum schemas for research artifacts
  COVERAGE.md               evolving landscape and gaps
  DECISIONS.md              consequential methodology decisions
  STATUS.md                 concise progress and review view
outline.md                  initial curriculum hypothesis
```

Large third-party repositories belong in `/Users/jernotte/dev/reference-materials/research`, not in this repository. Findings derived from them belong here and should identify the inspected commit or release.

The repository does not yet contain an HTML dashboard. If the canonical artifacts prove cumbersome to review, a dashboard may be generated from them later. It must never become a second source of truth.
