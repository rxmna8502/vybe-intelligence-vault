---
title: "txn2/mcp-data-platform"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "PostgreSQL", "Trino", "DataHub", "S3", "pgvector", "Model Context Protocol (MCP)", "Docker", "Cosign"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "High"
tags: ["MCP server", "semantic layer", "data governance", "AI assistant integration", "cross-enrichment"]
source: "https://github.com/txn2/mcp-data-platform"
stars: 9
language: "Go"
last_updated: "2026-09-04T02:04:10Z"
discovered_at: "2026-09-04T02:17:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-data-platform is an MCP server that bridges AI assistants to data infrastructure, enriching tool responses with business context from a semantic layer. It enables bidirectional cross-enrichment between Trino, DataHub, and S3, while providing persistent memory, governance workflows, and a web portal for AI-generated assets.

## Key Features
- Automatic enrichment of tool responses with business context (owners, deprecation, quality scores, PII flags)
- Bidirectional cross-enrichment between Trino, DataHub, and S3 for unified data access
- Persistent memory layer with hybrid semantic/lexical recall using pgvector
- Governance workflow for knowledge capture, review, and approval with rollback support
- Unified gateway for MCP servers, REST APIs, and AI-generated assets via a web portal

## Why It Matters for RAG Builders
It eliminates the need for AI assistants to make multiple round-trip calls to gather business context by enriching tool responses with semantic metadata, significantly improving accuracy and reducing token usage in RAG pipelines.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Trino
Automated review identified **Trino** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DataHub
Automated review identified **DataHub** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### S3
Automated review identified **S3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign
Automated review identified **Cosign** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
