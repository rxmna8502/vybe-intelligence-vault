---
title: "cyanheads/epa-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "Node.js", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["EPA data", "environmental compliance", "MCP server", "air quality", "toxic releases"]
source: "https://github.com/cyanheads/epa-mcp-server"
stars: 1
language: "TypeScript"
last_updated: "2026-07-10T21:56:36Z"
discovered_at: "2026-07-10T22:00:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
This repository provides an MCP (Model Context Protocol) server that exposes EPA environmental data through 9 tools and 2 resources, enabling access to facility compliance, toxic releases, Superfund sites, drinking water systems, environmental justice screening, and real-time air quality via STDIO or Streamable HTTP.

## Key Features
- 9 specialized tools for EPA environmental data access (facilities, violations, air quality, TRI releases, Superfund sites, water systems, EJScreen)
- Built on @cyanheads/mcp-ts-core for declarative tool/resource definitions and unified error handling
- Supports STDIO and Streamable HTTP transports with pluggable auth and storage backends
- Parallel ECHO DFR aggregation for comprehensive facility compliance profiles
- AirNow response caching and structured partial failure handling for robustness

## Why It Matters for RAG Builders
This MCP server provides a unified, agent-friendly interface to critical EPA environmental data, enabling RAG builders to integrate real-time compliance, toxic release, and air quality insights directly into AI workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
