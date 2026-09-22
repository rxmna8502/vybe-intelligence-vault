---
title: "sharpsir-group/qobrix-crm-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Zod", "RESO Data Dictionary 2.0", "Redis", "Jest"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "real estate CRM", "RESO DD 2.0", "read-only API", "AI agent integration"]
source: "https://github.com/sharpsir-group/qobrix-crm-mcp"
stars: 3
language: "TypeScript"
last_updated: "2026-07-10T16:20:18Z"
discovered_at: "2026-07-10T16:24:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only Model Context Protocol (MCP) server that connects AI clients like Claude or Cursor to the Qobrix real-estate CRM, enabling natural language queries for listings, leads, viewings, offers, contracts, and analytics via 46+ tools aligned with RESO Data Dictionary 2.0 workflows.

## Key Features
- 46+ read-only tools for CRM entities (properties, leads, contracts, etc.) with RESO Data Dictionary 2.0 alignment
- Analytics tools (qobrix_count, qobrix_top_values, qobrix_aggregate) for real-time metrics without custom scripts
- Redis-backed response caching to reduce API load on repeat queries
- Canonical real-estate workflows pre-mapped for LLM navigation (listings, leads, sales pipeline, etc.)
- 167 automated tests ensuring reliability and schema validation via Zod

## Why It Matters for RAG Builders
It provides a standardized, read-only MCP layer for Qobrix CRM data, enabling AI agents to interact with real estate workflows without requiring custom integrations or write access.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RESO Data Dictionary 2.0
Automated review identified **RESO Data Dictionary 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest
Automated review identified **Jest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
