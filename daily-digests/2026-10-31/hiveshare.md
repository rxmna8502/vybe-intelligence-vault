---
title: "KB-perByte/hiveshare"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Go", "PostgreSQL", "pgvector", "Redis", "Docker", "MCP (Model Context Protocol)", "OpenAI/Ollama (embeddings)", "SSE (Server-Sent Events)", "HNSW (Hierarchical Navigable Small World) indexing"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["collaborative memory", "AI context sharing", "vector database", "team productivity", "MCP integration"]
source: "https://github.com/KB-perByte/hiveshare"
stars: 5
language: "Go"
last_updated: "2026-08-03T10:33:26Z"
discovered_at: "2026-08-03T10:44:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
HiveShare is a collaborative AI memory system that enables engineering teams to share and reuse AI-processed context across tools like Claude Code and Cursor. It stores processed context in isolated 'hiveshares' per project, allowing agents to immediately access and build upon previous work without re-reading or re-summarizing.

## Key Features
- Isolated hiveshares per project or sprint with fine-grained access control
- Real-time live sync via SSE for immediate context sharing among teammates
- Hybrid semantic and full-text search with OpenAI/Ollama embeddings or PostgreSQL fallback
- MCP integration for seamless use with Claude Code, Cursor, and other AI tools
- Version history, snapshots, rollback, and metrics for collaboration tracking

## Why It Matters for RAG Builders
HiveShare eliminates redundant AI context processing by enabling teams to share and reuse processed memory, significantly improving efficiency and consistency in AI-driven engineering workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI/Ollama (embeddings)
Automated review identified **OpenAI/Ollama (embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (Hierarchical Navigable Small World) indexing
Automated review identified **HNSW (Hierarchical Navigable Small World) indexing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
