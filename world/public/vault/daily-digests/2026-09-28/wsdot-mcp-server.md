---
title: "cyanheads/wsdot-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "MCP (Model Context Protocol)", "Node.js", "Docker", "Zod", "OpenTelemetry"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP Server", "WSDOT API", "Real-time Data", "Transportation", "Agent Integration"]
source: "https://github.com/cyanheads/wsdot-mcp-server"
stars: 1
language: "TypeScript"
last_updated: "2026-07-12T02:19:50Z"
discovered_at: "2026-07-12T02:33:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server providing real-time access to Washington State Department of Transportation (WSDOT) data, including highway conditions, ferry schedules, vessel locations, toll rates, border wait times, and alerts via STDIO or Streamable HTTP transport.

## Key Features
- 12 specialized tools for querying WSDOT traffic and ferry data (highway conditions, ferry schedules, vessel locations, toll rates, border waits, alerts)
- Supports both STDIO and Streamable HTTP transports for MCP clients
- Built on @cyanheads/mcp-ts-core framework with declarative tool definitions, unified error handling, and pluggable auth/storage backends
- Normalized response shapes across WSDOT Traffic API and WSF Ferry API with agent-friendly output (e.g., `DriveUpSpaceCount: 0` for actionable signals)
- Configurable via environment variables with validation via Zod schemas, Docker support, and public hosted server option

## Why It Matters for RAG Builders
This MCP server provides critical real-time transportation data for AI agents needing to plan routes, check ferry availability, or monitor traffic conditions in Washington State.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
