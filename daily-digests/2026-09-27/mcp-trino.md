---
title: "txn2/mcp-trino"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "Model Context Protocol (MCP)", "Trino", "Docker", "SLSA (Supply-chain Levels for Software Artifacts)", "GitHub Actions"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP server", "Trino integration", "AI data access", "semantic layer", "multi-cluster connectivity"]
source: "https://github.com/txn2/mcp-trino"
stars: 2
language: "Go"
last_updated: "2026-07-20T06:13:28Z"
discovered_at: "2026-07-20T06:16:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-trino is a Model Context Protocol (MCP) server that enables AI assistants to query and explore Trino data warehouses with optional semantic context from metadata catalogs. It bridges the gap between AI assistants and data warehouses by providing structured access to SQL queries, schema discovery, and business metadata.

## Key Features
- Execute read-only and write SQL queries with configurable limits and timeouts
- Discover and browse catalogs, schemas, and tables across multiple Trino clusters
- Surface business metadata (descriptions, ownership, sensitivity) via semantic layer integration
- Support for dynamic connection management and multi-server configurations
- Composable architecture allowing integration as a Go library with middleware and interceptors

## Why It Matters for RAG Builders
It enables AI assistants to reliably query and understand enterprise data warehouses by providing structured access, semantic context, and multi-cluster connectivity, reducing hallucinations and improving data governance.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Trino
Automated review identified **Trino** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SLSA (Supply-chain Levels for Software Artifacts)
Automated review identified **SLSA (Supply-chain Levels for Software Artifacts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
