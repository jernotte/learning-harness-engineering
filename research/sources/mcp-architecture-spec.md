# Source Record: Model Context Protocol Architecture and Server Primitives

**Source ID:** FL-S012
**Maturity:** Captured source
**Source type:** Official protocol specification/documentation
**Author or organization:** Model Context Protocol project
**Publication date:** Current architecture docs; inspected 2026-07-10
**URLs:** https://modelcontextprotocol.io/docs/learn/architecture and https://modelcontextprotocol.io/specification/2025-06-18/server/index
**Inspected version:** 2025-06-18 specification for server primitives
**Related cycle or question:** Cycle 1 field landscape
**Inspection extent:** Partial substantive, reconstructed from retained specification output and the legacy record
**Surfaces inspected:** documentation
**Provenance events:** `fl-open-s012`, `fl-inspect-s012`, `fl-disposition-s012`
**Related claim IDs:** C001, C005, C014, and C022 in `field-landscape-synthesis-field-landscape`
**Canonical mapping locations:** C001 and C014 — server overview control hierarchy; C005 and C022 — architecture overview, server primitives, and control hierarchy
**Primary verification events:** Listed per mapping in `research/provenance/field-landscape-events.jsonl`

## Why this source matters

MCP standardizes part of the boundary between a harness and external capabilities/context. It also explicitly assigns control of prompts, resources, and tools to different actors.

## Evidence items and claim references

The rows preserve source observations; canonical claim wording lives in the artifact claim ledger.

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
