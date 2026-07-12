# Source Record: Evaluating Memory in LLM Agents via Incremental Multi-Turn Interactions

**Source ID:** FL-S008
**Maturity:** Captured source
**Source type:** Peer-reviewed benchmark paper and open implementation
**Author or organization:** Yutai Hou and collaborators
**Publication date:** ICLR 2026
**URL:** https://iclr.cc/virtual/2026/poster/10010781
**Code:** https://github.com/HUST-AI-HYZ/MemoryAgentBench
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained project/paper excerpts and the legacy record
**Surfaces inspected:** abstract, paper
**Provenance events:** `fl-open-s008`, `fl-inspect-s008`, `fl-disposition-s008`
**Related claim IDs:** C009 and C016 in `field-landscape-synthesis-field-landscape`
**Canonical mapping locations:** C009 and C016 — task taxonomy; the reported all-competencies limitation remains contextual evidence in this record
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl`

## Why this source matters

MemoryAgentBench evaluates memory as an incremental lifecycle rather than only as retrieval from a static store.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| source-reported claim | The benchmark covers accurate retrieval, test-time learning, long-range understanding, and conflict resolution/selective forgetting. | Project/paper task taxonomy. | Benchmark constructs may not cover procedural or production memory fully. |
| source-reported claim | No evaluated memory method masters all tested competencies. | Reported evaluation conclusion. | Results depend on included methods, models, and benchmark version. |

## Evidence assessment

Recent, peer-reviewed, and directly relevant to decomposing memory into write, retrieve, update, conflict, and forgetting responsibilities. Strong candidate for a later memory benchmark lineage study.

## Relationships and contradictions

Challenges architectures and evaluations that equate memory with vector retrieval or conversational fact recall. Aligns with production systems that separate active context, event history, and cross-session memory.

## Leads and open questions

Compare with LoCoMo, LongMemEval, LongMemEval-V2, and production memory write policies. Pin dataset and code versions because benchmark cleanup is common.
