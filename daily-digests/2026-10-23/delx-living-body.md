---
title: "davidmosiah/delx-living-body"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "StdioClientTransport", "SQLite (for caching)", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["wellness data", "MCP server", "data unification", "rule-based synthesis", "wearables integration"]
source: "https://github.com/davidmosiah/delx-living-body"
stars: 0
language: "TypeScript"
last_updated: "2026-08-04T17:45:50Z"
discovered_at: "2026-08-04T17:51:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Meta-MCP server that unifies 15 wellness data connectors into a single body data layer for AI agents, enabling natural-language queries like 'Should I train hard today?' with rule-based synthesis and no LLM calls.

## Key Features
- Auto-detects and composes 15+ wellness connectors (WHOOP, Oura, Garmin, etc.) without manual configuration
- Synthesizes unified answers using rule-based reasoning (no LLM calls) with structured reasoning traces
- Local-first and privacy-preserving—never reads child connector tokens or credentials
- Supports parallel child MCP server spawning with configurable timeouts and caching
- Provides 6 tools for status checks, daily briefs, context composition, and health diagnostics

## Why It Matters for RAG Builders
It simplifies RAG/AI agent workflows by unifying fragmented wellness data into a single, queryable layer with deterministic reasoning, reducing integration complexity and improving agent decision-making.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### StdioClientTransport
Automated review identified **StdioClientTransport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (for caching)
Automated review identified **SQLite (for caching)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
