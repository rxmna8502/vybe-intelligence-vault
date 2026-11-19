---
title: "neuronto/agentic-resource-discovery"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "BM25 (Sparse Retrieval)", "Vector Embeddings (Dense Retrieval)", "Reciprocal Rank Fusion (RRF)", "MCP (Model Context Protocol)", "OpenAPI", "Docker", "PostgreSQL", "Redis"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "High"
tags: ["Agentic Resource Discovery", "Federated Search", "MCP Servers", "Hybrid Retrieval", "Tool Verification"]
source: "https://github.com/neuronto/agentic-resource-discovery"
stars: 0
language: "Python"
last_updated: "2026-09-01T15:20:10Z"
discovered_at: "2026-09-01T15:55:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Neuronto ARD Registry is an open-source implementation of the Agentic Resource Discovery (ARD) specification, providing a federated index of AI agent resources (MCP servers, tools, APIs) with verified tool introspection and hybrid retrieval. It enables dynamic discovery of capabilities for AI agents without hard-coded integrations.

## Key Features
- Federated search across all public ARD registries with concurrent fan-out and fused ranking
- Verified tool introspection by handshaking with MCP servers to extract real tool names and schemas (32,183 verified tools)
- Hybrid retrieval combining sparse BM25 and dense vector search with reciprocal rank fusion
- Private index support for internal services with domain ownership verification via DNS TXT
- Conformance to ARD specification with zero errors and type normalization for MCP server media types

## Why It Matters for RAG Builders
It eliminates the need for hard-coded integrations in AI agents by enabling dynamic discovery of tools and APIs at runtime, while providing verified tool schemas for accurate matching.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (Sparse Retrieval)
Automated review identified **BM25 (Sparse Retrieval)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings (Dense Retrieval)
Automated review identified **Vector Embeddings (Dense Retrieval)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
