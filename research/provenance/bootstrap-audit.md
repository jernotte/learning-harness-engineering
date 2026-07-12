# Stage 0.5 Bootstrap Source Audit

**Scope:** Capture-feasibility investigation only
**Completeness:** `partial`
**Canonical log:** `research/provenance/bootstrap-events.jsonl`
**Subject-corpus use:** None

This is the human-readable view of the manual bootstrap log. It does not convert the bootstrap into complete provenance.

## Searches and result windows

| Query or inspection | Channel | Observed result | Use |
| --- | --- | --- | --- |
| Codex native session transcript, tool-event, hook, and local-storage surfaces | Local installed CLI and state | CLI 0.143.0 help, feature list, session index, current rollout schema, and generated app-server protocol schema | Used in D-004 |
| `Codex hooks tool events session transcripts JSONL` | Official OpenAI documentation route | Manual helper failed; Docs MCP was missing and then installed; official web fallback returned 12 irrelevant variants of the Codex use-cases page | Excluded |
| `Codex hooks configuration tool calls official documentation` | Official OpenAI web fallback | Twelve irrelevant variants of the Codex use-cases page | Excluded |

The official Developer Docs MCP entry is now installed globally, but it was not callable in this task because Codex requires a restart to load it.

## Opened and inspected sources

| Source | Inspection | Disposition | Used/referenced? | Limitation |
| --- | --- | --- | --- | --- |
| Installed OpenAI documentation skill | Complete instruction file | `referenced` | Yes | Its pre-open event was logged late because the platform required reading the skill before task actions |
| Official Codex manual | No content retrieved | `excluded` | No | Sandbox DNS failed first; escalated helper then rejected a response missing its integrity header |
| Installed Codex CLI help and feature output | Root, exec, app-server, debug, and feature surfaces | `referenced` | Yes | Establishes only the installed version's exposed interfaces |
| Current Codex session index, rollout shape, and generated app-server schema | Metadata, event types, payload keys, and tool names; no research content copied | `referenced` | Yes | Local implementation evidence may drift with Codex versions |
| Bounded `codex exec --json --ephemeral` smoke | JSONL startup and failure events | `referenced` | Yes, narrowly | The configured model required a newer CLI, so the run verified the event envelope but not successful model/tool execution |
| Maintainer-provided pre-implementation reviewer report | Complete 73-line review | `referenced` | Yes | External review judgment; used to assess D-004, not as evidence about the harness-engineering subject corpus |
| Official Codex Hooks guide | Complete guide during feasibility; exact `PostToolUse` section during the real acceptance window | `referenced` | Yes | Live documentation; establishes current documented limitations, not timeless behavior |

## Coverage conclusion

The feasibility decision rests on direct installed-runtime evidence, not the failed web searches. Native desktop rollout ingestion is available now. CLI JSONL is available but the installed CLI/model pairing needs an upgrade before it can be used as a successful worker path. Experimental app-server interception is technically possible but unnecessary for the minimum implementation.

Because the first skill read was not logged beforehand, the web documentation route failed, and this work predates the validated wrapper, the bootstrap remains `partial`. It cannot support claims about exhaustive Codex capabilities or documentation coverage.

The later bounded acceptance window is not part of this partial bootstrap ledger. It has its own transcript-backed events and passing audit under `research/provenance/validation/real-capture-*`.
