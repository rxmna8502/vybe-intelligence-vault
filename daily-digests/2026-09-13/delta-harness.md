---
title: "Carrara-Labs/delta-harness"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Bun", "SQLite", "MCP (Model Context Protocol)", "OpenAI-compatible API", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["agent framework", "long-running agents", "MCP tools", "self-improvement", "durable state"]
source: "https://github.com/Carrara-Labs/delta-harness"
stars: 0
language: "TypeScript"
last_updated: "2026-08-01T14:59:58Z"
discovered_at: "2026-08-01T15:01:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Delta Harness is a lightweight TypeScript-on-Bun binary designed to build long-running AI agents with MCP tools, managed context, subagents, and self-improvement capabilities. It operates as a single-binary daemon with minimal dependencies and supports durable state management via SQLite.

## Key Features
- Single-binary deployment with zero runtime dependencies (~30MB RSS, <50ms cold start)
- Durable run queue with SQLite-based checkpointing and crash recovery
- Built-in MCP client with streamable HTTP/stdio support and tool discovery
- Self-learning agent memory via atomic writes to `DELTA.md` for continuous improvement
- OpenAI-Responses-compatible API with async task handling and observability endpoints

## Why It Matters for RAG Builders
Delta Harness provides a lean, self-contained framework for building production-grade long-running AI agents with MCP integration, making it essential for developers seeking scalable and durable agent architectures.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible API
Automated review identified **OpenAI-compatible API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
