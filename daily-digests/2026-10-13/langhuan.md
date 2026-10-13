---
title: "amoydavid/langhuan"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "PostgreSQL", "pgvector", "Redis", "Gin", "GORM", "zhparser", "asynq", "Docker", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["RAG", "knowledge processing", "MCP", "Chinese NLP", "document retrieval"]
source: "https://github.com/amoydavid/langhuan"
stars: 0
language: "Go"
last_updated: "2026-08-09T01:18:44Z"
discovered_at: "2026-08-09T01:34:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Langhuan is a single-binary, Chinese-friendly knowledge processing layer for RAG that converts documents into retrievable, vectorizable, and traceable structures. It provides REST and MCP over HTTP interfaces for document ingestion, retrieval, and deletion, without generating LLM answers or orchestrating chat.

## Key Features
- Native Chinese hybrid retrieval with pgvector, PostgreSQL FTS (zhparser), and deterministic RRF fusion for accurate keyword and semantic search
- First-class MCP over HTTP support exposing tools like knowledge_search and document_ingest directly to MCP clients (e.g., Claude)
- Single-binary deployment with embedded REST, MCP, worker, and Web Console, eliminating runtime dependencies
- Full traceability of chunks back to source documents, versions, and anchors (page/row/offset) with idempotent pipelines
- Multi-tenancy with workspace isolation, role-based access control, and scoped API keys

## Why It Matters for RAG Builders
Langhuan provides a production-grade, Chinese-optimized knowledge processing layer that seamlessly integrates with RAG stacks via MCP, enabling reliable and traceable document retrieval without the overhead of full-fledged platforms.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gin
Automated review identified **Gin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GORM
Automated review identified **GORM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### zhparser
Automated review identified **zhparser** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asynq
Automated review identified **asynq** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
