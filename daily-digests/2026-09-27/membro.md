---
title: "shawn-durrani/membro"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "HTTP API", "MCP (Model Context Protocol)", "Claude.ai integration", "Embeddings (OpenAI)", "LLM (Anthropic)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["memory service", "fact extraction", "provenance tracking", "local-first", "MCP server"]
source: "https://github.com/shawn-durrani/membro"
stars: 1
language: "Python"
last_updated: "2026-08-08T07:50:43Z"
discovered_at: "2026-08-08T07:51:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Membro is a local-first memory service for AI assistants that ingests conversations, extracts durable facts with deterministic validation, and serves them via an HTTP API and MCP server. It maintains an immutable append-only ledger of facts with provenance tracking, all stored in a single SQLite file on the user's machine.

## Key Features
- Immutable append-only fact ledger with deterministic extraction walls
- Provenance-carrying summaries with per-fact source tracing
- HTTP API and MCP server for recall, search, and memory operations
- Quarantine and review system for untrusted or low-confidence facts
- Local-first architecture with SQLite storage and optional tailnet deployment

## Why It Matters for RAG Builders
Membro provides a critical foundation for RAG systems by ensuring durable, provenance-backed memory storage with deterministic fact extraction, reducing hallucinations and improving context reliability.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude.ai integration
Automated review identified **Claude.ai integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings (OpenAI)
Automated review identified **Embeddings (OpenAI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Anthropic)
Automated review identified **LLM (Anthropic)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
