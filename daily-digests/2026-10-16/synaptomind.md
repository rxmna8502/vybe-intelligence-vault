---
title: "zumik3-del/synaptomind"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun runtime", "Hono (HTTP API)", "MCP (Model Context Protocol) server", "SQLite (with vec0 extension for vector search)", "@huggingface/transformers (for local embeddings)", "FTS5 (full-text search)", "IPC (Inter-Process Communication)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["persistent memory", "MCP server", "local embeddings", "thought graph", "AI agent memory"]
source: "https://github.com/zumik3-del/synaptomind"
stars: 6
language: "TypeScript"
last_updated: "2026-09-02T08:12:49Z"
discovered_at: "2026-09-02T08:23:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SynaptoMind is a self-hosted persistent memory system for AI assistants that captures, links, clusters, and retrieves thoughts via HTTP API or MCP server. It enables AI agents to remember project decisions, goals, and unfinished tasks across sessions while keeping all data locally.

## Key Features
- Self-hosted persistent memory for AI assistants with local data storage
- Hybrid search combining vector (vec0), BM25 (FTS5), and entity matching
- MCP server integration for seamless AI agent integration (Claude, Cursor, OpenCode)
- Local embedding generation via HuggingFace Transformers (no API keys required)
- Auto-clustering, smart notes, frontier ranking, and context management for AI workflows

## Why It Matters for RAG Builders
SynaptoMind provides a critical persistent memory layer for AI agents, enabling them to retain context, decisions, and tasks across sessions without relying on external services or manual note-taking.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun runtime
Automated review identified **Bun runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono (HTTP API)
Automated review identified **Hono (HTTP API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol) server
Automated review identified **MCP (Model Context Protocol) server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (with vec0 extension for vector search)
Automated review identified **SQLite (with vec0 extension for vector search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @huggingface/transformers (for local embeddings)
Automated review identified **@huggingface/transformers (for local embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (full-text search)
Automated review identified **FTS5 (full-text search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IPC (Inter-Process Communication)
Automated review identified **IPC (Inter-Process Communication)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
