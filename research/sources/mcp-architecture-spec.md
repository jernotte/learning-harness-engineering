# Source Record: Model Context Protocol Architecture and Server Primitives

**Maturity:** Captured source
**Source type:** Official protocol specification/documentation
**Author or organization:** Model Context Protocol project
**Publication date:** Current architecture docs; inspected 2026-07-10
**URLs:** https://modelcontextprotocol.io/docs/learn/architecture and https://modelcontextprotocol.io/specification/2025-06-18/server/index
**Inspected version:** 2025-06-18 specification for server primitives
**Related cycle or question:** Cycle 1 field landscape

## Why this source matters

MCP standardizes part of the boundary between a harness and external capabilities/context. It also explicitly assigns control of prompts, resources, and tools to different actors.

## Claims and evidence

| Kind | Claim or observation | Exact support | Limits |
| --- | --- | --- | --- |
| verified implementation fact | The specification defines client/server architecture over JSON-RPC and server primitives for prompts, resources, and tools. | Architecture overview and server specification. | A protocol interface, not a complete harness architecture. |
| verified implementation fact | Its control model describes prompts as user-controlled, resources as application-controlled, and tools as model-controlled. | Server overview control hierarchy. | Hosts may add policy and mediation, so real control is not absolute. |

## Evidence assessment

Primary normative evidence for the protocol surface. Strong for interoperability and capability-discovery architecture; it supplies no evidence that MCP-shaped tools or context improve task outcomes.

## Relationships and contradictions

Suggests that actor/control ownership cuts across component categories. Tool exposure, context exposure, and user-invoked routines share a transport but differ in who initiates them.

## Leads and open questions

Study discovery/context cost, trust boundaries, sampling and elicitation, error semantics, and how harnesses mediate server-provided descriptions.
