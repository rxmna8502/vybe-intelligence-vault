---
title: "nacre-work/nacre"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["TypeScript", "PostgreSQL", "Qdrant", "Docker", "MCP (Model Context Protocol)", "REST API", "Ed25519 (JWT signing)", "OpenAI-compatible embeddings"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["access control", "fine-grained permissions", "self-hosted", "RAG context layer", "auditability"]
source: "https://github.com/nacre-work/nacre"
stars: 0
language: "TypeScript"
last_updated: "2026-08-07T09:44:29Z"
discovered_at: "2026-08-07T10:05:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Nacre is a self-hosted knowledge index with fine-grained access control for AI agents and applications. It ensures agents only access documents they are permitted to see while maintaining auditability and security.

## Key Features
- Fine-grained access control with inherited permissions (workspace → layers → documents)
- Pre-filtering access during HNSW traversal for accurate top_k results
- MCP and REST API support with streamable HTTP and STDIO transport
- Bring-your-own-embeddings with model switching and recall validation
- Self-hosted deployment with Docker Compose and no external dependencies

## Why It Matters for RAG Builders
Nacre provides a critical security layer for RAG systems by ensuring agents only access permitted documents while maintaining auditability and fine-grained control over knowledge access.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519 (JWT signing)
Automated review identified **Ed25519 (JWT signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible embeddings
Automated review identified **OpenAI-compatible embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
