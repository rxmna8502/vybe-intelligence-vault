---
title: "cyanheads/crossref-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "Crossref REST API", "Zod", "OpenTelemetry", "Docker"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["DOI resolution", "scholarly search", "Crossref API", "MCP server", "reference fetching"]
source: "https://github.com/cyanheads/crossref-mcp-server"
stars: 1
language: "TypeScript"
last_updated: "2026-07-13T18:39:11Z"
discovered_at: "2026-07-13T18:43:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides seven tools for interacting with the Crossref REST API, enabling DOI resolution, scholarly work search (~155M records), reference fetching, and publisher/funder lookups via STDIO or HTTP transport.

## Key Features
- Seven specialized tools for Crossref data access (DOI resolution, work search, reference fetching, journal/funder/publisher lookups)
- Supports STDIO and Streamable HTTP transports with pluggable authentication and storage backends
- Polite-pool User-Agent header with optional email for priority access to Crossref API
- Cursor-based deep paging for large result sets and robust error handling with retries
- Built on @cyanheads/mcp-ts-core framework with declarative tool definitions and unified error handling

## Why It Matters for RAG Builders
This MCP server provides essential tools for resolving DOIs, fetching scholarly metadata, and traversing reference networks, enabling RAG builders to enrich AI responses with high-quality academic sources and citation graphs.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Crossref REST API
Automated review identified **Crossref REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
