# Source Record: Parallel Context Compaction for Long-Horizon LLM Agent Serving

**Source ID:** PI-S003  
**Maturity:** Analyzed evidence  
**Source type:** Research preprint  
**Author or organization:** Musa Cim, Burak Topcu, Chita Das, and Mahmut Taylan Kandemir  
**Publication date:** 2026-05-22; arXiv version inspected 2026-07-12  
**URL:** https://arxiv.org/abs/2605.23296  
**Inspected version:** arXiv HTML current on 2026-07-12  
**Related cycle or question:** Pi pilot; latency, variability, and retention limits of sequential compaction  
**Source family / parent:** Parallel compaction paper  
**Inspection extent:** Partial substantive  
**Surfaces inspected:** abstract, introduction, methodology summary, reported latency and stability results  
**Provenance events:** Pi pilot search/open/inspection events  
**Primary verification events:** Pi pilot mapping for `field-landscape-case-pi-v0-80-6-C013`

## Why this source matters

Pi's default compaction is a synchronous model call over accumulated history. This paper empirically characterizes that general baseline and therefore helps separate a working implementation from evidence about its cost and predictability.

## Evidence items and claim references

| Evidence item ID | Source observation or statement | Exact child page/file/section/commit | Related claim IDs | Relationship | Limits |
| --- | --- | --- | --- | --- | --- |
| PI-S003-E01 | Authors describe sequential summarization as lossy, blocking, and difficult to control in length and retained content | Abstract and introduction, lines 3–18 | `field-landscape-case-pi-v0-80-6-C013` | contextualizes | General baseline, not Pi's exact prompt or coding workload |
| PI-S003-E02 | Across four backbones on HotpotQA and LoCoMo, synchronous compaction consumed up to 62% of wall time in tested low-threshold settings | Reported motivating measurements, line 54 | `field-landscape-case-pi-v0-80-6-C013` | contextualizes | Non-coding benchmarks and self-hosted model set limit transfer |
| PI-S003-E03 | Ten-run measurements showed material summary-volume and semantic variability and little monotonic improvement from prompt-length instructions | Stability results, lines 161–172 | `field-landscape-case-pi-v0-80-6-C013` | contextualizes | Metrics and 4k stability slice do not directly measure downstream Pi task success |

## Evidence assessment

The multi-backbone, repeated-run characterization is more rigorous than an anecdotal warning and directly addresses operator control. It remains a recent preprint using different tasks and models, so it qualifies Pi's unmeasured design rather than determining its outcome.

## Relationships and contradictions

The paper agrees with Pi that active context must remain bounded but challenges the assumption that a single synchronous summary is predictably cheap or faithful. Its parallel alternative changes serving architecture and may be inappropriate for interactive hosted-model clients.

## Leads and open questions

Measure Pi compaction latency, retention, rediscovery cost, and run-to-run variance on coding trajectories using the models and prompt format Pi actually supports.
