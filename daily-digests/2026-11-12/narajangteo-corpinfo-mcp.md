---
title: "opendata-kr/narajangteo-corpinfo-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "npm", "GitHub Actions"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "public procurement", "business verification", "Korean API", "data.go.kr"]
source: "https://github.com/opendata-kr/narajangteo-corpinfo-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-07-13T06:04:34Z"
discovered_at: "2026-07-13T06:15:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local MCP server that wraps the South Korea's public procurement portal (data.go.kr) Open API to provide business entity profile and qualification checks via a single business registration number. It enables natural language queries about company qualifications, supply items, and sanctions directly in MCP clients like Claude Desktop.

## Key Features
- Parallel 4-facet business profile lookup (basic info, registered business types, supplied items, sanctions) in a single query
- Validity checks for business types and supply qualifications with expiration and status awareness
- Graceful handling of partial failures and API rate limits with explicit error signaling
- Normalization of Korean public API error codes into actionable messages
- Defense against double-encoding issues with validation and warnings

## Why It Matters for RAG Builders
It provides a standardized, localized interface to South Korea's public procurement data, enabling AI agents to verify business qualifications and supply chain relationships with minimal integration effort.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
