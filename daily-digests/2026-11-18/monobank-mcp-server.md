---
title: "akutishevsky/monobank-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "REST API", "npm"]
quality_score: 8
rag_relevance: 6
deployment_complexity: "Low"
tags: ["MCP server", "Monobank API", "financial data", "currency rates", "transaction statements"]
source: "https://github.com/akutishevsky/monobank-mcp-server"
stars: 6
language: "TypeScript"
last_updated: "2026-08-02T08:12:02Z"
discovered_at: "2026-08-02T08:23:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP (Model Context Protocol) server that provides a bridge to interact with the Monobank API, enabling applications to fetch currency rates, client information, and transaction statements programmatically.

## Key Features
- Provides three MCP tools: get_currency_rates, get_client_info, and get_statement
- Supports one-click installation via MCPB bundles for Claude Desktop/Code
- In-memory caching to respect Monobank API rate limits (5 min for rates, 60 sec for others)
- Handles API token securely and locally, with clear error messages for missing tokens
- Returns monetary values in currency units (not cents) for consistency with Monobank's API

## Why It Matters for RAG Builders
It enables AI applications to securely and efficiently integrate with Monobank's financial data, expanding use cases for personal finance assistants and automated reporting.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
