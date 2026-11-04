---
title: "TheK3nsai/ops-brain"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "PostgreSQL", "pgvector", "MCP (Model Context Protocol)", "Axum", "Tokio", "sqlx", "Ollama", "nomic-embed-text"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "AI agent coordination", "handoff management", "knowledge sharing", "multi-agent systems"]
source: "https://github.com/TheK3nsai/ops-brain"
stars: 1
language: "Rust"
last_updated: "2026-07-17T23:47:43Z"
discovered_at: "2026-07-17T23:52:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that provides a shared coordination surface for multiple AI agents (Claude, Codex, Gemini) to manage handoffs, knowledge, and briefings across sessions, machines, or vendors. Acts as a team bus for solo operators and small teams running distributed agent workflows.

## Key Features
- Cross-agent handoffs with threading and commit-linkage for tracking work progress
- Shared knowledge base with hybrid search (FTS + pgvector embeddings)
- Daily/weekly briefings generation for team synchronization
- Cross-client safety controls with granular access policies
- Multi-transport support (stdio and HTTP) for distributed agent deployments

## Why It Matters for RAG Builders
It enables seamless coordination and knowledge sharing between disparate AI agents, reducing duplication and improving workflow continuity in distributed AI systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlx
Automated review identified **sqlx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nomic-embed-text
Automated review identified **nomic-embed-text** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
