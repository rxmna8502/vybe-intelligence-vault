---
title: "cyanheads/cdc-health-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "Socrata SODA API", "CDC WONDER API", "Zod", "Docker", "Cloudflare Workers", "OpenTelemetry"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["CDC data access", "MCP server", "public health", "Socrata API", "data querying"]
source: "https://github.com/cyanheads/cdc-health-mcp-server"
stars: 4
language: "TypeScript"
last_updated: "2026-08-09T13:52:08Z"
discovered_at: "2026-08-09T13:53:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides standardized access to CDC public health data, including mortality, vaccinations, surveillance, and behavioral risk datasets via the Socrata SODA API and CDC WONDER. Supports both local and remote deployment with tools for discovery, querying, and analysis.

## Key Features
- Four MCP tools for discovering and querying CDC datasets (Socrata SODA API) and mortality statistics (CDC WONDER)
- Supports full SoQL queries, filtering, aggregation, and full-text search across CDC datasets
- Includes a health trend analysis prompt for automated workflows
- Deployable via STDIO, Streamable HTTP, or Docker with configurable storage backends
- Handles rate limits, non-tabular assets, and CDC-specific status tokens (Suppressed/Unreliable/Not Applicable)

## Why It Matters for RAG Builders
It provides standardized, programmatic access to critical public health datasets, enabling AI systems to retrieve and analyze CDC data for applications like health trend analysis, surveillance, and research.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Socrata SODA API
Automated review identified **Socrata SODA API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CDC WONDER API
Automated review identified **CDC WONDER API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
