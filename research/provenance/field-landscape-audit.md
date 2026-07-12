# Provenance Audit: field-landscape

**Generated:** 2026-07-12T18:06:52.997Z
**Completeness:** `reconstructed`
**Audit profile:** `provisional-promotion`
**Promotion gate:** PASS

## Funnel

For reconstructed provenance, `returned` and `returned_source_identities_recovered` count only result identities recoverable with a defensible query/rank mapping; zero does not mean the historical searches returned nothing. Unknown result windows are shown in the search table. `manual_capture_actions` and `semantic_batch_actions` describe reconstruction-log authoring, not the overhead of the original research session.

| Stage | Count |
| --- | ---: |
| searches | 27 |
| search_updates | 0 |
| applied_search_updates | 0 |
| rejected_search_updates | 0 |
| searches_with_incomplete_result_capture | 27 |
| returned | 0 |
| returned_source_identities_recovered | 0 |
| opened | 40 |
| read_only | 24 |
| referenced | 16 |
| excluded | 0 |
| declared_claims | 24 |
| claims | 50 |
| claim_evidence_mappings | 50 |
| verifications | 50 |
| unverified_claim_evidence_mappings | 0 |
| native_boundaries | 0 |
| native_observations | 0 |
| automatically_resolved_observations | 0 |
| human_resolved_observations | 0 |
| unresolved_observations | 0 |
| linked_observations | 0 |
| not_research_observations | 0 |
| observation_resolution_batches | 0 |
| manual_capture_actions | 67 |
| semantic_batch_actions | 1 |

## Channel coverage

- Planned: general web search, academic search, GitHub repository search, official documentation navigation
- Actual: general web search, official documentation navigation, academic search, GitHub repository search, GitHub code search

## Searches

| Query ID | Channel | Exact query | Family | Provider | Requested limit | Captured results | Capture status | Truncation |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
| FL-P01 | general web search | site:docs.anthropic.com Claude Code memory subagents hooks tools architecture \|\| site:openai.com Codex CLI architecture agents tools sandbox official \|\| site:docs.langchain.com langgraph durable execution memory subgraphs human in the loop architecture \|\| site:github.com All-Hands-AI OpenHands architecture agent runtime event stream | production harness architecture | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-P02 | official documentation navigation | site:docs.anthropic.com/en/docs/claude-code subagents memory hooks skills official \|\| site:code.claude.com/docs subagents memory hooks skills \|\| site:google.github.io/adk-docs agents multi-agent runtime sessions memory artifacts official \|\| site:microsoft.github.io/autogen stable agentchat core architecture official | official product documentation | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-P03 | official documentation navigation | site:code.claude.com/docs/en memory CLAUDE.md auto memory context compaction official \|\| site:code.claude.com/docs/en how Claude Code works agentic loop context window tools official \|\| site:google.github.io/adk-docs Runtime Session Memory agents \|\| site:openai.github.io/openai-agents-python agents handoffs guardrails sessions tracing official | context runtime and orchestration controls | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-P04 | general web search | Lilian Weng Harness Engineering for Self-Improvement 2026 \|\| site:arxiv.org LLM agent architecture survey 2025 harness context memory tools planning evaluation \|\| site:modelcontextprotocol.io specification architecture tools resources prompts official \|\| site:a2a-protocol.org latest specification agent2agent architecture official | harness framing and protocols | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-P05 | academic search | site:arxiv.org Agentless Demystifying LLM-based Software Engineering Agents 2024 \|\| site:arxiv.org multi-agent systems LLM failure coordination 2025 scaling negative results \|\| site:arxiv.org long context agent context engineering compaction lost in the middle agents 2025 \|\| site:arxiv.org tool interface agent computer interface SWE-agent 2024 | counterexamples and interface evidence | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-P06 | general web search | site:anthropic.com/research building effective agents workflows agents official \|\| site:openai.com practical guide building agents orchestration guardrails tools official \|\| site:developers.googleblog.com agent development kit architecture multi-agent 2026 \|\| site:martinfowler.com agentic ai architecture patterns harness engineering | production guidance | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A01 | academic search | site:arxiv.org LLM agents survey agent architecture planning memory tools evaluation 2025 \|\| site:arxiv.org benchmark LLM agents tool use tau-bench AgentBench GAIA primary paper \|\| site:arxiv.org multi-agent LLM negative results debate collaboration benchmark 2025 \|\| site:arxiv.org self-improving language model agents harness optimization agent system 2025 | academic landscape | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A02 | academic search | ReAct Synergizing Reasoning and Acting official paper ICLR 2023 \|\| SWE-agent Agent-Computer Interfaces Enable Automated Software Engineering paper official \|\| Lost in the Middle long context paper official TACL 2024 \|\| MemGPT Towards LLMs as Operating Systems paper official | foundational mechanisms | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A03 | academic search | site:openreview.net Tree of Thoughts deliberate problem solving LLM ICLR 2024 \|\| site:openreview.net Reflexion language agents verbal reinforcement learning NeurIPS 2023 \|\| site:arxiv.org Self-Refine iterative refinement LLM paper 2023 \|\| site:arxiv.org planning LLM agents plan-and-execute benchmark plan failure replanning 2025 | planning and reflection | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A04 | academic search | site:arxiv.org Large Language Models Cannot Self-Correct reasoning intrinsic self-correction \|\| site:aclanthology.org self-correction LLM negative results external feedback \|\| site:arxiv.org LLM judge bias verifier agent evaluation benchmark contamination 2025 \|\| site:arxiv.org test-time compute agents verifier gap sequential context ceiling 2026 | negative verification evidence | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A05 | academic search | site:arxiv.org multi-agent debate LLM benchmark heterogeneous collaboration negative 2024 2025 \|\| site:openreview.net LLM multi-agent collaboration debate failure ICLR 2025 \|\| site:arxiv.org More Agents Is All You Need LLM agents scaling paper \|\| site:arxiv.org multi-agent systems LLM performance communication topology benchmark | multi-agent evidence | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A06 | academic search | GAIA benchmark general AI assistants official paper 2023 huggingface \|\| SWE-bench official benchmark paper verified benchmark 2024 \|\| BrowserGym benchmark agent web tasks paper WorkArena++ 2025 \|\| Agent evaluation benchmark trajectory diagnostics AgentBoard paper | agent benchmarks | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A07 | academic search | Berkeley Function Calling Leaderboard official benchmark paper BFCL 2025 \|\| ToolBench towards mastering every API official ICLR 2024 paper \|\| API-Bank benchmark tool augmented LLM official paper EMNLP 2023 \|\| tau2-bench dual control benchmark tool agent user interaction 2025 official | tool-use benchmarks | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A08 | academic search | LongMemEval benchmark long-term memory agents official paper 2025 \|\| MemoryAgentBench benchmark agent memory official paper 2025 \|\| LOCOMO long-term conversational memory benchmark agent paper \|\| site:arxiv.org agent memory benchmark temporal update abstention 2025 | memory benchmarks | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A09 | academic search | MemoryAgentBench ICLR 2026 paper \|\| site:openreview.net MemoryAgentBench \|\| site:arxiv.org MemoryAgentBench | MemoryAgentBench verification | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A10 | academic search | DSPy compiling declarative language model calls paper ICLR 2024 official \|\| TextGrad automatic differentiation via text paper official 2024 \|\| ADAS automated design of agentic systems paper ICLR 2025 official \|\| SICA self-improving coding agent harness paper 2025 official | harness optimization | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-A11 | academic search | ReWOO decoupling reasoning from observations LLM agents paper arxiv \|\| LATS language agent tree search paper ICML 2024 official \|\| LLM+P classical planner large language model planning paper official \|\| PlanBench large language models planning benchmark paper findings | planning mechanisms | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-I01 | GitHub repository search | site:github.com All-Hands-AI OpenHands repository agent architecture runtime event stream \|\| site:github.com princeton-nlp SWE-agent repository AgentModel history processor tools \|\| site:github.com Aider-AI aider repository architecture repo map edit formats \|\| site:github.com openai codex repository Rust agent loop tool sandbox | coding agent implementations | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-I02 | GitHub repository search | site:github.com/google-gemini/gemini-cli architecture core agent loop tools policy \|\| site:github.com/block/goose agent architecture extension tools subagent recipe \|\| site:github.com/sst/opencode agent loop session compaction tools \|\| site:github.com/badlogic/pi-mono coding agent context compaction tools architecture | coding agent implementations | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-I03 | GitHub repository search | site:github.com/langchain-ai/langgraph repository durable execution checkpoints interrupts architecture agents \|\| site:github.com/microsoft/autogen core architecture event-driven agents termination conditions \|\| site:github.com/openai/openai-agents-python repository run loop handoffs guardrails sessions tracing \|\| site:github.com/pydantic/pydantic-ai agent graph tool retries durable execution | workflow runtimes | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-I04 | GitHub repository search | site:github.com/microsoft/agent-framework repository workflow executors checkpoints agents 2026 \|\| site:github.com/stanford-oval/storm repository knowledge curation architecture retrieval outline generation \|\| site:github.com/assafelovic/gpt-researcher repository deep research agent architecture planner scraper report \|\| site:github.com/bytedance/deer-flow repository deep research multi agent workflow | workflow and research implementations | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-I05 | GitHub repository search | site:github.com/assafelovic/gpt-researcher agent research architecture \|\| site:github.com/browser-use/browser-use agent loop browser state tools planner \|\| site:github.com/simular-ai/Agent-S computer use agent architecture memory planner \|\| site:github.com/microsoft/OmniParser computer use agent architecture | research and computer-use implementations | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-I06 | GitHub repository search | site:github.com/letta-ai/letta repository agent memory blocks archival memory tool rules \|\| site:github.com/NousResearch/hermes-agent repository agent loop skills memory subagents 2026 \|\| site:github.com/openclaw/openclaw agent architecture memory tools sessions 2026 \|\| site:github.com/huggingface/smolagents repository CodeAgent toolcallingagent managed agents memory | persistent and code-action agents | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-I07 | GitHub repository search | OpenClaw GitHub official open source personal AI assistant repository \|\| site:github.com/openclaw OpenClaw agent \|\| site:github.com/openclaw/openclaw README agent \|\| site:github.com/openclaw/openclaw memory | OpenClaw verification | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-I08 | GitHub code search | site:github.com/OpenHands/OpenHands EventStream agent controller runtime condensation \|\| site:github.com/OpenHands/OpenHands Condenser EventStream \|\| site:github.com/openai/codex codex-rs/core/src/codex.rs turn tool call loop \|\| site:github.com/google-gemini/gemini-cli coreToolScheduler loop | control-flow code locations | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-I09 | GitHub code search | site:github.com/OpenHands/OpenHands/blob/main/openhands AgentController \|\| site:github.com/OpenHands/OpenHands/blob/main/openhands EventStream \|\| site:github.com/OpenHands/OpenHands/blob/main/openhands Condenser \|\| site:docs.openhands.dev architecture event stream condenser runtime | OpenHands architecture | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |
| FL-I10 | GitHub repository search | site:github.com/Significant-Gravitas/AutoGPT classic platform architecture archived agent protocol \|\| site:github.com/yoheinakajima/babyagi archived repository functionz framework \|\| site:github.com/microsoft/autogen maintenance mode successor \|\| site:github.com/bytedance/deer-flow ground-up rewrite shares no code | implementation lineage | Codex web search | not limited | unknown | unknown_reconstructed | complete provider result window not recoverable |

## Search-update history

| Update event | Search event | From | To | Effective state | Reason |
| --- | --- | --- | --- | --- | --- |
| — | — | — | — | — | — |

## Host distribution

- anthropic.com: 2
- code.claude.com: 3
- arxiv.org: 4
- adk.dev: 1
- iclr.cc: 1
- aclanthology.org: 1
- docs.langchain.com: 1
- modelcontextprotocol.io: 1
- openai.github.io: 1
- lilianweng.github.io: 1
- github.com: 24

## Source distributions

- host: github.com=24, anthropic.com=2, code.claude.com=3, arxiv.org=4, adk.dev=1, iclr.cc=1, aclanthology.org=1, docs.langchain.com=1, modelcontextprotocol.io=1, openai.github.io=1, lilianweng.github.io=1
- organization: OpenAI=3, earendil-works=1, OpenHands=1, Google=2, anomalyco=1, aaif-goose=1, Aider-AI=1, Microsoft=2, Pydantic=1, Hugging Face=1, Browser Use=1, Simular=1, Stanford OVAL=1, GPT Researcher=1, ByteDance=1, OpenClaw=1, Letta=1, Nous Research=1, Significant Gravitas=1, Yohei Nakajima=1, LangChain=2, SWE-agent=1, Anthropic=5, Fu et al.=1, Hou et al.=1, Kamoi et al.=1, Li et al.=1, Model Context Protocol project=1, Lilian Weng=1, Xia et al.=1, Yang et al.=1
- source_type: repository=24, official engineering article=2, official documentation=2, official documentation family=3, research preprint=2, peer-reviewed benchmark paper=1, peer-reviewed critical survey=1, protocol specification=1, official SDK documentation family=1, technical synthesis=1, research paper and implementation=1, peer-reviewed paper and implementation=1
- publication_year: 2024=4, 2025=1, 2026=6, unspecified=29
- primary_secondary: primary implementation=24, primary practitioner=2, primary documentation=6, primary research=5, primary research synthesis=1, primary normative=1, secondary synthesis=1
- evidence_lineage: Codex repository=1, Pi repository=1, OpenHands repository=1, Gemini CLI repository=1, OpenCode repository=1, Goose repository=1, Aider repository=1, Microsoft Agent Framework repository=1, AutoGen repository=1, PydanticAI repository=1, smolagents repository=1, Browser Use repository=1, Agent S repository=1, STORM repository=1, GPT Researcher repository=1, DeerFlow repository=1, OpenClaw repository=1, Letta Code repository=1, Hermes Agent repository=1, AutoGPT repository=1, BabyAGI archive=1, LangGraph repository=1, OpenAI Agents SDK repository=1, SWE-agent repository=1, Anthropic production guidance=1, Anthropic evaluation guidance=1, Claude Agent SDK documentation=1, Claude Code documentation=2, BenchAgent paper=1, Google ADK documentation and announcement=1, MemoryAgentBench paper=1, TACL self-correction survey=1, LangGraph documentation=1, General AgentBench paper=1, MCP specification=1, OpenAI Agents SDK documentation=1, Weng harness synthesis=1, Agentless paper=1, SWE-agent paper=1

## Repository depth

- FL-L001: no inspection surfaces; unpinned
- FL-L002: no inspection surfaces; unpinned
- FL-L003: no inspection surfaces; unpinned
- FL-L004: no inspection surfaces; unpinned
- FL-L005: no inspection surfaces; unpinned
- FL-L006: no inspection surfaces; unpinned
- FL-L007: no inspection surfaces; unpinned
- FL-L008: no inspection surfaces; unpinned
- FL-L009: no inspection surfaces; unpinned
- FL-L010: no inspection surfaces; unpinned
- FL-L011: no inspection surfaces; unpinned
- FL-L012: no inspection surfaces; unpinned
- FL-L013: no inspection surfaces; unpinned
- FL-L014: no inspection surfaces; unpinned
- FL-L015: no inspection surfaces; unpinned
- FL-L016: no inspection surfaces; unpinned
- FL-L017: no inspection surfaces; unpinned
- FL-L018: no inspection surfaces; unpinned
- FL-L019: no inspection surfaces; unpinned
- FL-L020: no inspection surfaces; unpinned
- FL-L021: no inspection surfaces; unpinned
- FL-L022: no inspection surfaces; unpinned
- FL-L023: no inspection surfaces; unpinned
- FL-L024: no inspection surfaces; unpinned


GitHub source-funnel totals: returned=0, opened=24, readme_only=0, code_inspected=0, test_inspected=0, history_inspected=0, pinned=0, referenced=0

Captured local-repository observation totals: observations=0, code_inspected=0, test_inspected=0, history_inspected=0, commit_captured=0

## Claim-evidence coverage

| Claim ID | Kind | Supporting sources | Opposing sources | Mappings | Verified | Missing verification | Confidence |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| field-landscape-synthesis-field-landscape-C001 | inference | FL-S014, FL-S012, FL-S007 | — | 3 | 3 | 0 | moderate; reconstructed evidence and provisional taxonomy |
| field-landscape-synthesis-field-landscape-C002 | engineering recommendation | FL-S014, FL-S001 | — | 2 | 2 | 0 | moderate; provisionally promoted direction pending case-study validation |
| field-landscape-synthesis-field-landscape-C003 | inference | FL-S007, FL-S010 | — | 2 | 2 | 0 | moderate |
| field-landscape-synthesis-field-landscape-C004 | inference | FL-S005, FL-S007 | — | 2 | 2 | 0 | moderate |
| field-landscape-synthesis-field-landscape-C005 | inference | FL-S004, FL-S012 | — | 2 | 2 | 0 | moderate-high for the responsibility; effectiveness of individual policies remains untested |
| field-landscape-synthesis-field-landscape-C006 | inference | FL-S001, FL-S007, FL-S015 | — | 3 | 3 | 0 | moderate |
| field-landscape-synthesis-field-landscape-C007 | inference | FL-S016 | — | 1 | 1 | 0 | moderate; historical model and benchmark dependence |
| field-landscape-synthesis-field-landscape-C008 | inference | FL-S003, FL-S016 | — | 2 | 2 | 0 | moderate |
| field-landscape-synthesis-field-landscape-C009 | inference | FL-S010, FL-S007, FL-S008 | — | 3 | 3 | 0 | moderate-high for decomposition; outcomes remain under-evaluated |
| field-landscape-synthesis-field-landscape-C010 | engineering recommendation | FL-S001, FL-S005, FL-S013, FL-S006 | — | 4 | 4 | 0 | moderate |
| field-landscape-synthesis-field-landscape-C011 | engineering recommendation | FL-S009 | — | 1 | 1 | 0 | moderate-high for the distinction; model-era sensitivity remains |
| field-landscape-synthesis-field-landscape-C012 | inference | FL-S002, FL-S013 | — | 2 | 2 | 0 | moderate-high |
| field-landscape-synthesis-field-landscape-C013 | inference | FL-S014 | — | 1 | 1 | 0 | moderate as a framing; outcome support varies by technique |
| field-landscape-synthesis-field-landscape-C014 | engineering recommendation | FL-S007, FL-S012, FL-S013 | — | 3 | 3 | 0 | moderate |
| field-landscape-synthesis-field-landscape-C015 | inference | FL-S001, FL-S007, FL-S015 | — | 3 | 3 | 0 | moderate |
| field-landscape-synthesis-field-landscape-C016 | engineering recommendation | FL-S004, FL-S007, FL-S010, FL-S008 | — | 4 | 4 | 0 | moderate-high |
| field-landscape-synthesis-field-landscape-C017 | source-reported claim | FL-S006 | — | 1 | 1 | 0 | moderate; preprint v1 and protocol-specific |
| field-landscape-synthesis-field-landscape-C018 | source-reported claim | FL-S009 | — | 1 | 1 | 0 | moderate-high for the surveyed period; freshness-sensitive |
| field-landscape-synthesis-field-landscape-C019 | source-reported claim | FL-S011 | — | 1 | 1 | 0 | moderate; preprint v1 and benchmark-specific |
| field-landscape-synthesis-field-landscape-C020 | source-reported claim | FL-S002 | — | 1 | 1 | 0 | moderate-high as current production methodology |
| field-landscape-synthesis-field-landscape-C021 | engineering recommendation | FL-S014 | — | 1 | 1 | 0 | moderate |
| field-landscape-synthesis-field-landscape-C022 | engineering recommendation | FL-S012, FL-S016 | — | 2 | 2 | 0 | moderate-high |
| field-landscape-synthesis-field-landscape-C023 | engineering recommendation | FL-S005, FL-S013, FL-S006 | — | 3 | 3 | 0 | moderate-high |
| field-landscape-synthesis-field-landscape-C024 | engineering recommendation | FL-S007, FL-S005 | — | 2 | 2 | 0 | moderate |

## Transcript retention

- None recorded

## Provenance waivers

- fl-reconstructed-provenance-waiver: reviewer=maintainer; scope=Provisional Checkpoint 1 promotion of field-landscape only; this waiver does not establish search breadth, source balance, absence of evidence, marginal information, saturation, or final taxonomy validity.; persistent limitation=Every later summary relying on Cycle 1 must retain the reconstructed-provenance caveat until a complete cycle revalidates the landscape.

## Complete source table

| Source ID | Host | Type | Returned | Opened | Inspection | Surfaces | Disposition | Version | Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FL-L001 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L002 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L003 | github.com | repository | no | yes | not_inspected | — | read_only | reported_release_1.11.0_unverified | — |
| FL-L004 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L005 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L006 | github.com | repository | no | yes | not_inspected | — | read_only | reported_release_v1.41.0_unverified | — |
| FL-L007 | github.com | repository | no | yes | not_inspected | — | read_only | reported_release_v0.86.0_unverified | — |
| FL-L008 | github.com | repository | no | yes | not_inspected | — | read_only | reported_release_1.11.0_unverified | — |
| FL-L009 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L010 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L011 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L012 | github.com | repository | no | yes | not_inspected | — | read_only | reported_release_0.13.2_unverified | — |
| FL-L013 | github.com | repository | no | yes | not_inspected | — | read_only | reported_release_v0.3.2_unverified | — |
| FL-L014 | github.com | repository | no | yes | not_inspected | — | read_only | reported_package_1.1.0_unverified | — |
| FL-L015 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L016 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L017 | github.com | repository | no | yes | not_inspected | — | read_only | reported_release_2026.6.6_unverified | — |
| FL-L018 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L019 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L020 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L021 | github.com | repository | no | yes | not_inspected | — | read_only | archived_unpinned | — |
| FL-L022 | github.com | repository | no | yes | not_inspected | — | read_only | reported_release_1.2.5_unverified | — |
| FL-L023 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-L024 | github.com | repository | no | yes | not_inspected | — | read_only | live_unpinned | — |
| FL-S001 | anthropic.com | official engineering article | no | yes | partial_substantive | documentation | referenced | dated_publication | research/sources/anthropic-2024-building-effective-agents.md |
| FL-S002 | anthropic.com | official engineering article | no | yes | partial_substantive | documentation | referenced | dated_publication | research/sources/anthropic-2026-agent-evals.md |
| FL-S003 | code.claude.com | official documentation | no | yes | partial_substantive | documentation | referenced | live_unpinned | research/sources/anthropic-claude-agent-loop-docs.md |
| FL-S004 | code.claude.com | official documentation family | no | yes | partial_substantive | documentation | referenced | live_unpinned | research/sources/anthropic-claude-context-memory-docs.md |
| FL-S005 | code.claude.com | official documentation | no | yes | partial_substantive | documentation | referenced | live_unpinned | research/sources/anthropic-claude-subagents-docs.md |
| FL-S006 | arxiv.org | research preprint | no | yes | partial_substantive | abstract, paper | referenced | preprint_v1 | research/sources/fu-2026-benchagent.md |
| FL-S007 | adk.dev | official documentation family | no | yes | partial_substantive | documentation | referenced | live_unpinned | research/sources/google-adk-docs.md |
| FL-S008 | iclr.cc | peer-reviewed benchmark paper | no | yes | partial_substantive | abstract, paper | referenced | conference_2026 | research/sources/hou-2026-memoryagentbench.md |
| FL-S009 | aclanthology.org | peer-reviewed critical survey | no | yes | partial_substantive | abstract, paper | referenced | published_2024 | research/sources/kamoi-2024-self-correction-survey.md |
| FL-S010 | docs.langchain.com | official documentation family | no | yes | partial_substantive | documentation | referenced | live_unpinned | research/sources/langgraph-runtime-docs.md |
| FL-S011 | arxiv.org | research preprint | no | yes | partial_substantive | abstract, paper | referenced | preprint_v1 | research/sources/li-2026-general-agentbench.md |
| FL-S012 | modelcontextprotocol.io | protocol specification | no | yes | partial_substantive | documentation | referenced | pinned_specification | research/sources/mcp-architecture-spec.md |
| FL-S013 | openai.github.io | official SDK documentation family | no | yes | partial_substantive | documentation | referenced | live_unpinned | research/sources/openai-agents-sdk-docs.md |
| FL-S014 | lilianweng.github.io | technical synthesis | no | yes | partial_substantive | documentation | referenced | dated_publication | research/sources/weng-2026-harness-engineering.md |
| FL-S015 | arxiv.org | research paper and implementation | no | yes | partial_substantive | abstract, paper | referenced | published_2024 | research/sources/xia-2024-agentless.md |
| FL-S016 | arxiv.org | peer-reviewed paper and implementation | no | yes | partial_substantive | abstract, paper | referenced | revised_2024-11-11 | research/sources/yang-2024-swe-agent.md |

## Blocking errors

- None

## Warnings requiring response

- `host_concentration` (resolved): 24/40 opened sources came from github.com — The implementation pass intentionally sampled repository families, but all 24 GitHub families remain read-only and unadmitted. The 16 referenced records span documentation, papers, specifications, and one technical synthesis; no GitHub repository observation supports a material claim in this checkpoint.
