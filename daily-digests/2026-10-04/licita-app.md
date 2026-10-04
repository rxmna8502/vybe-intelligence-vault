---
title: "gastonrey/licita-app"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Fastify", "PostgreSQL", "Node.js", "MCP (Model Context Protocol)", "x402 (pay-per-call protocol)", "Docker", "REST API", "OpenAPI", "402 Payment Protocol"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["procurement intelligence", "TED data", "MCP server", "pay-per-call", "Spanish tenders"]
source: "https://github.com/gastonrey/licita-app"
stars: 0
language: "TypeScript"
last_updated: "2026-09-02T22:08:02Z"
discovered_at: "2026-09-02T22:21:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
licita-agent is an agent-native procurement intelligence API focused on the Spanish public sector, specifically IT/software/cybersecurity tenders. It provides structured, provenance-backed data from TED (Tenders Electronic Daily) and PLACSP feeds, enabling autonomous agents to discover, query, and pay for procurement data via REST or MCP interfaces.

## Key Features
- Agent-native discovery via `/llms.txt`, `/openapi.json`, and `/mcp` endpoints
- Provenance-backed data with source URLs and references for every record
- Pay-per-call model with x402 (USDC on Base) or dev faucet for testing
- Autonomous ingestion from TED and PLACSP feeds with idempotent updates
- Forecast signals for contract renewals and re-tendering likelihood

## Why It Matters for RAG Builders
It provides structured, provenance-backed procurement data essential for RAG systems to answer complex queries about public sector tenders and contracts in the Spanish market.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fastify
Automated review identified **Fastify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### x402 (pay-per-call protocol)
Automated review identified **x402 (pay-per-call protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### 402 Payment Protocol
Automated review identified **402 Payment Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
