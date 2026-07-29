# Source Record: Context Management in Agent Harnesses

**Source ID:** CTX-S003  
**Maturity:** Analyzed secondary evidence; implementation claims remain source-reported  
**Source type:** Industry technical article from a vendor/practitioner organization  
**Author or organization:** Arize AI  
**Publication date:** 2026-04-28  
**URL:** https://arize.com/blog/context-management-in-agent-harnesses/  
**Inspected version:** Live article inspected 2026-07-19  
**Captured boundary:** Raw HTML archived at `/Users/jernotte/dev/reference-materials/research/captured-web/arize-context-management-2026-07-19/article.html`; 270,853 bytes; SHA-256 `c26c7fd9bf3b61eaec7b558fee1e475b36ba6abd48b79455f07122ca8eafaac5`; captured 2026-07-19 with file mode `0600` inside a `0700` directory  
**Related question:** Reported Claude Code context mechanisms and external comparison framing  
**Inspection extent:** Full substantive article  

## Why this source matters

The article supplies detailed reported mechanisms for closed-source Claude Code and a clear human-oriented comparison of file access, tool results, compaction, and subagent context. It is useful as a hypothesis generator and secondary report. It is not a pinned implementation record, and its open-source claims must yield to direct inspection when they disagree.

## Evidence items

| Evidence item ID | Source-reported observation | Exact article section | Related claim IDs | Limits |
| --- | --- | --- | --- | --- |
| CTX-S003-E01 | Claude Code reportedly applies a 256 KiB pre-read gate, a roughly 25,000-token post-read budget, 2,000-line default reads, long-line truncation, pagination guidance, and same-range read deduplication | “Claude Code” under “Large files,” article lines 177–184 in the retained inspection; matching section retained in the captured HTML boundary above | `field-landscape-synthesis-context-management-across-harnesses-C015` | No stable Claude Code version or primary implementation boundary; remotely tunable behavior |
| CTX-S003-E02 | Claude Code reportedly persists oversized tool results and substitutes small previews under per-tool and aggregate limits | “Claude Code” under “Session pruning,” lines 214–223; matching section retained in the captured HTML boundary above | `field-landscape-synthesis-context-management-across-harnesses-C015` | Secondary report; exact live defaults can change |
| CTX-S003-E03 | Claude Code reportedly uses a structured compaction prompt, continuation message, recent-file restoration, and deterministic oldest-group fallback when the compaction request overflows | “Claude Code” under “Session pruning,” lines 214–223; matching section retained in the captured HTML boundary above | `field-landscape-synthesis-context-management-across-harnesses-C015` | No direct code verification or outcome evaluation |
| CTX-S003-E04 | Claude Code reportedly has blank and forked subagent paths with different history and tool inheritance | “Subagent context management,” lines 232–241; matching section retained in the captured HTML boundary above | `field-landscape-synthesis-context-management-across-harnesses-C015` | Secondary report; experimental path and version unspecified |

## Evidence assessment

The detail level is unusually useful for a closed-source comparator, but authority is limited. The article comes from practitioners with their own agent product and marketing context. It does not provide a dated Claude Code release boundary or a complete independent reproduction. Claims remain “Arize reports,” not verified implementation facts.

## Direct-inspection corrections and contradictions

Three details demonstrate why the article cannot control open-source conclusions:

- It reports 12,000 bootstrap characters per OpenClaw file, while the pinned OpenClaw `v2026.6.6` implementation inspected here defaults to 20,000 per file and 60,000 total.
- It frames Letta self-compaction as the operative strategy, while pinned Letta server `0.16.8` defaults to sliding-window compaction with a separate provider-appropriate summarizer.
- It broadly states that the compared subagents do not copy full parent history, then later describes forked paths for OpenClaw and Claude Code; pinned Letta Code also has an explicit conversation fork.

These may reflect version drift, different product paths, or simplification. They lower confidence in projecting any unpinned detail as timeless architecture.

## Appropriate use

Use the record for a clearly labeled Claude Code reported-comparator box and as a model of readable explanation. Do not count it as independent implementation verification, direct outcome evidence, or proof of convergence.
