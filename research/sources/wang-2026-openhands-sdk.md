# Source Record: The OpenHands Software Agent SDK

**Source ID:** OH-S001

**Maturity:** Analyzed evidence

**Source type:** Peer-reviewed technical report with open artifacts

**Author or organization:** Xingyao Wang and collaborators / OpenHands

**Publication date:** arXiv v2 2026-04-22; MLSys 2026

**URL:** https://arxiv.org/abs/2511.03690

**Inspected version:** arXiv v2 HTML opened 2026-07-16

**Related cycle or question:** OpenHands SDK v1.35.0 case; declared architecture, production reliability, event-sourcing overhead, and external evaluation

**Source family / parent:** OpenHands SDK technical report

**Inspection extent:** Partial substantive

**Surfaces inspected:** Abstract, architecture, context, local/remote execution, reliability, systems overhead, evaluation, and limitations

**Provenance events:** OpenHands case event log

**Primary verification events:** OpenHands case claim mappings for C014 and contextual mappings for C001, C002, C008, C009, and C013

## Why this source matters

The pinned repository establishes what v1.35.0 implements. This paper separately states the designers' rationale and reports production, systems, and benchmark evidence that cannot be inferred from code. It is also unusually useful for testing where implementation evidence ends: the paper evaluates a broad V1 architecture and deployments, not every mechanism or this exact tag independently.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact section | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| OH-S001-E01 | The authors describe V1 as a four-package redesign with event-sourced state, immutable/serializable agent configuration, typed tools, local/remote workspaces, and a built-in server | Abstract; §§3–4, especially HTML lines 92–108 and 171–220 | C001, C002, C008 | contextualizes | Author description; code at the pin is primary implementation evidence |
| OH-S001-E02 | The report describes condensation as preserving the full event log while projecting a summarized model view | §4.6, HTML lines 344–348 | C009 | contextualizes | Broad design statement; exact default depends on constructor/preset, which the code distinguishes |
| OH-S001-E03 | During a 15-day parallel production rollout, the authors report system-attributable errors falling from 78.0 to 30.0 per 1,000 conversations (61%) between V0 and V1 | §5.1, HTML lines 450–463 | C014 | supports | Bundled architecture change, author-produced operational analysis, and no randomization or per-mechanism ablation |
| OH-S001-E04 | Replay of 39,870 events from 433 SWE-Bench Verified conversations reports median per-event persistence of 0.20 ms, median full replay of 4.1 ms, and bounded recovery/storage figures | §5.2, HTML lines 464–473 | C014 | supports | Systems overhead only; does not show better task outcomes or cover arbitrary long histories/storage backends |
| OH-S001-E05 | The report separates programmatic regression tests, LLM-based integration tests, and academic benchmark evaluation | §§5.3–5.4, HTML lines 474–563 | C013, C014 | contextualizes | Some rendered table values are incomplete in arXiv HTML; no current leaderboard claims are used here |

## Evidence assessment

This is primary, peer-reviewed, recent, and accompanied by public implementation and evaluation artifacts. The systems-overhead protocol is direct for the event-log cost question. The production comparison is operationally valuable but bundles co-location, state, server, configuration, and other changes; it cannot establish which one caused the reported difference. Claims of uniqueness and broad benchmark strength are vendor/author claims and receive no independent promotion in this case.

## Relationships and contradictions

The paper's architecture description is broadly consistent with the pinned code. One important nuance comes from code rather than contradiction: `AgentBase` itself defaults to no condenser, while the default preset installs the summarizing condenser. The paper's phrase “default condenser” should therefore not be projected onto every direct `Agent(...)` construction.

The paper reports that the V1 redesign preserves or improves benchmark capability, but those system-level results do not validate the optional critic, `/goal` judge, parallel tools, plugin policy, or condensation retention individually. Recent compaction work and self-correction/evaluation evidence qualify those mechanisms separately.

## Leads and open questions

- Recover the exact evaluated SDK commits and benchmark configurations before using the paper for version-specific capability conclusions.
- Separate the reliability effect of co-located execution from event sourcing, configuration immutability, and other simultaneous redesign changes.
- Reproduce event-store overhead on larger and branching histories and on non-local stores.
- Test condensation retention and the `/goal` judge against executable end-state graders rather than broad system benchmarks.
