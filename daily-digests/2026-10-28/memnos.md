---
title: "thameema/memnos"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "PostgreSQL", "pgvector", "ONNX", "REST API", "MCP", "OpenAPI 3.1", "AES-256-GCM encryption", "uv (package manager)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["persistent memory", "bi-temporal facts", "team knowledge sharing", "self-hosted", "governance"]
source: "https://github.com/thameema/memnos"
stars: 7
language: "Python"
last_updated: "2026-08-07T14:03:32Z"
discovered_at: "2026-08-07T14:19:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
memnos is a self-hosted memory server for AI coding agents that captures, distills, and recalls team knowledge across agents like Claude Code, Cursor, and Windsurf. It runs on a single PostgreSQL + pgvector database with governance features like token auth, namespace ACLs, and audit logs.

## Key Features
- Bi-temporal fact management with supersession for truth tracking
- Single PostgreSQL + pgvector engine (no secondary vector store)
- Governance features: token auth, namespace ACLs, audit logs, and encrypted secret vault
- No LLM at query time; deterministic recall via embeddings and hybrid search
- Cross-agent memory sharing with server-stamped attribution

## Why It Matters for RAG Builders
It provides a governed, self-hosted memory layer for AI agents that ensures shared team knowledge is accurate, auditable, and retrievable without relying on external LLM calls during recall.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI 3.1
Automated review identified **OpenAPI 3.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM encryption
Automated review identified **AES-256-GCM encryption** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
