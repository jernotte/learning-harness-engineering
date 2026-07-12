# OpenAI Codex Hooks documentation

**Source ID:** `auto-source-99bc0cb8da0c7a35`
**URL:** https://learn.chatgpt.com/docs/hooks#posttooluse
**Organization:** OpenAI
**Type:** Official product documentation
**Observed:** 2026-07-11
**Version status:** Live documentation; not a pinned release artifact
**Use:** Stage 0.5 provenance-architecture validation only
**Claims:** `stage-0-5-real-capture-analysis-provenance-architecture-C001`, `stage-0-5-real-capture-analysis-provenance-architecture-C002`

The inspected `PostToolUse` section says the hook runs after supported Bash, `apply_patch`, and MCP tools and receives tool input and response. It also explicitly limits coverage: unified shell interception is incomplete, and WebSearch plus other non-shell/non-MCP tools are not intercepted.

This directly supports C001. It supplies a material premise for C002, but the recommendation to use hooks only as enrichment is the project’s inference, not a statement made by the documentation. It does not establish hook coverage for every Codex surface or future release. The official page also warns elsewhere that `transcript_path` is convenient but not a stable interface; the native adapter therefore remains versioned and fail-closed.
