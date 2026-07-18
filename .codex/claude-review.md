# Claude adversarial review

## Project goal

Maintain a living, evidence-backed research and learning program about AI-agent
harness engineering. Its primary purpose is to gather trustworthy data, turn
that data into durable understanding, and help its maintainers become experts
who can teach the field. The repository must produce rigorous, current,
reusable knowledge about orchestration-layer mechanisms, tradeoffs, failure
modes, and design choices; it is not an effort to build one universal harness.

Case studies are important industry data points, not isolated end products.
They document how harnesses are designed and used in the present environment so
the project can compare implementations, identify transferable mechanisms and
frictions, and derive a broader model of the field.

Preserve two connected knowledge layers when they materially help different
consumers:

1. An agent-oriented layer with structured, precise, provenance-rich material
   that an AI agent can retrieve, compare, audit, and develop further.
2. A human-oriented layer that explains the same knowledge clearly enough for
   people to learn, retain, teach, and apply it.

These layers may use different organization and presentation, but they must not
silently disagree. Developing learning materials from the accumulated evidence
is a core project deliverable, not an incidental byproduct.

Judge each change against the task and authorization boundary stated in the
review request plus the repository's current `AGENTS.md`, `research/STATUS.md`,
and `research/DECISIONS.md`. Those governing artifacts, not this review
contract, are authoritative for the active implementation and checkpoint. If
they conflict, report the conflict rather than selecting whichever instruction
appears most convenient.

## Quality bar

- Every material factual claim is traceable to durable, inspectable evidence at
  the exact scope asserted; implementation claims are pinned to a version or
  commit.
- Facts, source reports, inferences, hypotheses, recommendations, and open
  questions are distinguished. Vendor statements are not treated as proof of
  behavior, and implementation presence is not treated as outcome evidence.
- Claim declarations, source records, exact claim/source/location mappings,
  primary verification events, artifact registrations, review scope, and prose
  attestations agree with the human-readable artifacts and generated audits.
- Negative findings, contradictions, missing evidence, provenance limitations,
  and alternative explanations remain visible. Maturity language never exceeds
  the applicable gate or review decision.
- Synthesis is technically precise, readable by a capable newcomer, and useful
  for later cross-case comparison without flattening meaningful differences.
- Structured agent-facing knowledge and human-facing explanations preserve the
  same evidentiary boundaries and meaning. Each layer is useful to its intended
  consumer rather than being a cosmetic copy of the other.
- Case studies contribute reusable observations, comparisons, concepts, and
  teaching value. They do not stop at cataloging one implementation in
  isolation.
- Learning materials distinguish settled knowledge from provisional findings,
  open questions, and accepted limitations, and support progressive mastery
  without sacrificing traceability.
- A change passes the repository's deterministic validation and does not create
  stale links, inconsistent status/decision records, or misleading completeness
  claims.

## Non-negotiable invariants

- Stay inside the authorization and checkpoint boundaries recorded in
  `AGENTS.md`, `research/STATUS.md`, and `research/DECISIONS.md`. Do not silently
  expand the active case set, revise the taxonomy, promote maturity, or change
  evidence policy.
- Preserve the research loop and formal human checkpoints. Claude's report is
  advisory evidence only; it cannot approve maturity, expand authorization, or
  substitute for a maintainer decision. Codex and Claude may nevertheless
  resolve and implement routine in-scope review feedback through the bounded
  agreement workflow without asking the maintainer to disposition every item.
- Preserve the audit funnel `returned -> opened -> read_only or referenced`,
  with `excluded` only after inspection. Search-result snippets are leads, not
  evidence.
- Canonical claim IDs remain globally unique. Ledger mappings, source records,
  verification events, review scope, archive boundaries, and generated audit
  claims must remain mutually consistent and tamper-evident.
- Do not conceal reconstructed provenance, incomplete capture, concentration,
  independence, lineage, or applicability limits. Do not strengthen historical
  evidence through an unverified metadata update.
- Provenance infrastructure is frozen unless a consequential failure observed
  during authorized real research justifies a separately approved exception.
- Preserve unrelated user changes. Do not recommend broad cleanup, reformatting,
  or architectural work outside the stated requirement.
- Do not collapse the agent-oriented and human-oriented layers if doing so
  harms either machine usability or human learning. Do not let presentation
  differences create unsupported claims or inconsistent conclusions.
- Treat the repository and explicitly declared evidence directories as directly
  inspectable but read-only. Do not request or imply file edits, and do not
  treat access to a source as admission of that source into the research corpus.

## Validation commands

- `node tools/provenance/test.mjs`
- `node tools/provenance/check-local-links.mjs`
- For a changed case or promotion package, regenerate its documented audit with
  `node tools/provenance/cli.mjs audit ...` using the exact event file, cycle,
  completeness, profile, archive, and review-scope options recorded for that
  package; compare both the exit status and generated content.

## Review emphasis

- Unsupported, overstated, circular, version-drifting, or wrongly scoped factual
  claims, especially claims inferred from names, comments, vendor prose, or mere
  implementation presence.
- Missing or inconsistent claim/source/location mappings, source records,
  primary verification, ledger digests, prose attestations, review scope,
  retained-archive binding, and generated-audit status.
- Contradictions among `research/STATUS.md`, `research/COVERAGE.md`,
  `research/DECISIONS.md`, case studies, claim ledgers, source records, taxonomy
  friction notes, and provenance outputs.
- Scope drift beyond the explicitly authorized implementation or checkpoint;
  premature maturity promotion; silent taxonomy or methodology changes; and
  provenance work not justified by an observed blocking failure.
- Lost counterexamples, disagreement between practice and research, negative
  findings, uncertainty, independence/lineage caveats, or outcome limitations.
- Case studies that remain disconnected observations instead of feeding the
  cross-case knowledge model, or that generalize beyond what the observed case
  can support.
- Drift between agent-facing structured knowledge and human-facing learning
  materials, including missing concepts, changed certainty, lost provenance,
  or pedagogical simplifications that change the technical meaning.
- Material that is traceable but fails to help an agent reason further or a
  human build durable understanding when the current task is intended to serve
  one of those purposes.
- For research prose, prioritize defects that change meaning, auditability,
  authorization, or decision quality. Do not report taste-only wording edits.

## Accepted tradeoffs and non-goals

- This repository optimizes for learning, synthesis, traceability, and design
  judgment, not application runtime performance or production product features.
- It does not aim to build a universal harness, generic provenance platform, or
  speculative automation layer. A static human learning layer may be separately
  authorized because it serves the mission, but review opt-in does not authorize
  its implementation.
- Human learning materials are a core deliverable. However, an individual case
  or research change does not by itself authorize building a full course,
  curriculum platform, or unrelated educational infrastructure; that work must
  follow an explicit project plan and checkpoint.
- Bounded sampling and explicit open questions are acceptable when their limits
  remain visible. Absence of exhaustive ecosystem coverage is not a defect by
  itself.
- Project-specific responsibility vocabulary may differ from a source's native
  vocabulary; the mapping must remain explicit rather than forcing terms to
  match.
- A passing audit establishes the declared mechanical gates, not that every
  prose claim is true or that the evidence is sufficient for every conclusion.
- Do not report already documented and deliberately accepted historical or
  reconstructed limitations unless the current change conceals, worsens, or
  contradicts them.

## Reviewer access and authoring boundary

The independent reviewer may use read-only file/search tools across this
repository and the evidence directories explicitly declared in the review request.
It may use the web to verify a cited external fact, but new material does not
become project evidence until the normal admission rules are satisfied.

Review, reconciliation, and verification must remain read-only. The planned
human-facing HTML layer will use a different Claude tool call with explicit
write permissions, output paths, and validation. Never infer that authority
from this contract.
