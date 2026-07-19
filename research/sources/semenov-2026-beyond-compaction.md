# Source Record: Beyond Compaction: Structured Context Eviction for Long-Horizon Agents

**Source ID:** PI-S002  
**Maturity:** Analyzed evidence  
**Source type:** Research preprint  
**Author or organization:** Andrew Semenov and Svyatoslav Dorofeev  
**Publication date:** 2026-04-21; arXiv version inspected 2026-07-12  
**URL:** https://arxiv.org/abs/2606.11213  
**Inspected version:** arXiv HTML current on 2026-07-12  
**Related cycle or question:** Pi pilot; alternatives and failure modes for LLM summarization compaction  
**Source family / parent:** Context Window Lifecycle paper  
**Inspection extent:** Partial substantive  
**Surfaces inspected:** abstract, introduction, related work, scope statement, evaluation summary, conclusion  
**Provenance events:** Pi pilot search/open/inspection events  
**Primary verification events:** Pi pilot mapping for `field-landscape-case-pi-v0-80-6-C013`; Hermes case mapping for `field-landscape-case-hermes-agent-v0-18-2-C019`

## Why this source matters

Pi uses synchronous LLM summarization to compact old trajectory state. This paper directly articulates failure hypotheses for that design and proposes a structurally different, deterministic eviction alternative.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| PI-S002-E01 | Authors characterize summarization compaction as unpredictably lossy, structurally destructive, blocking, and capable of introducing hallucinations | Introduction, lines 13–27 in inspected arXiv HTML | `field-landscape-case-pi-v0-80-6-C013`, `field-landscape-case-hermes-agent-v0-18-2-C019` | contextualizes/opposes universal adequacy | Authors' framing of the baseline; not a direct Pi or Hermes experiment |
| PI-S002-E02 | CWL uses agent-authored typed episodes and dependencies with deterministic eviction instead of a summarizer call | Abstract and contributions, lines 3–6 and 35–46 | `field-landscape-case-pi-v0-80-6-C013`, `field-landscape-case-hermes-agent-v0-18-2-C019` | contextualizes | Alternative adds annotation burden and different structure |
| PI-S002-E03 | Authors report one 89-task, 80-million-token session with parity to isolated sessions while explicitly deferring broader suites and ablations | Contributions and scope, lines 35–49 | `field-landscape-case-pi-v0-80-6-C013`, `field-landscape-case-hermes-agent-v0-18-2-C019` | contextualizes | First release, limited runs, preprint, no direct Pi or Hermes comparison |

## Evidence assessment

The paper is recent and directly applicable to context lifecycle design, but it is an unreviewed first release with a narrow initial evaluation. Its strongest use is as credible counter-design and failure hypotheses, not proof that Pi's compaction fails or that CWL is generally superior.

## Relationships and contradictions

It contests the sufficiency of opaque LLM summarization while sharing Pi's goal of bounded active context and preserved long-horizon work. Pi preserves raw append-only history outside the active prompt, which partially mitigates audit loss but does not make omitted information available to the model.

## Leads and open questions

Compare Pi's recent-tail structured summary with deterministic eviction under matched coding tasks, models, token budgets, and repeated runs.

## First-batch synthesis claim references

PI-S002-E01–E03 materially contextualize `field-landscape-synthesis-first-batch-harness-architecture-C003` and support the contested-practice inference in `C012`. The source does not directly test any reviewed pin, and its reported long-run result remains an initial limited evaluation.
