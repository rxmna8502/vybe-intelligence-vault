---
title: "opendata-kr/narajangteo-opening-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "npm", "GitHub Actions"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP Server", "Public Procurement Data", "Korean API", "Bid Results", "Data Wrapping"]
source: "https://github.com/opendata-kr/narajangteo-opening-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-07-14T07:56:18Z"
discovered_at: "2026-07-14T08:01:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local MCP server that wraps Korea's public procurement auction data (나라장터 낙찰정보서비스) Open API, enabling natural language queries for bid results, awards, and bidder rankings through MCP clients.

## Key Features
- Wraps Korea's public procurement auction data API into a local MCP server for natural language queries
- Supports parallel searches across multiple procurement categories (construction, services, goods, foreign procurement)
- Handles date range splitting and partial failures gracefully with error transparency
- Normalizes data.go.kr error codes into actionable Korean messages
- Integrates with major MCP clients (VS Code, Cursor, Claude, etc.) via standardized configuration

## Why It Matters for RAG Builders
It provides a standardized, natural language interface to Korea's public procurement data, simplifying integration for AI agents and RAG systems requiring real-time bid result insights.

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
