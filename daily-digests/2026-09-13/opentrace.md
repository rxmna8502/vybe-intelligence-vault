---
title: "adham90/opentrace"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "MCP (Model Context Protocol)", "SQLite", "PostgreSQL", "Zstandard (compression)", "Custom columnar storage engine", "Ruby SDK", "Node.js SDK"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["observability", "AI agent integration", "self-hosted", "log storage", "MCP-native"]
source: "https://github.com/adham90/opentrace"
stars: 15
language: "Go"
last_updated: "2026-08-08T09:28:30Z"
discovered_at: "2026-08-08T09:41:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OpenTrace is a self-hosted observability server that connects AI coding agents directly to production data via MCP, enabling agents to query logs, errors, and performance metrics without manual dashboard navigation. It replaces traditional monitoring tools with a lightweight, columnar log store optimized for AI agent interactions.

## Key Features
- Custom columnar log storage engine with 200-500K entries/sec write throughput and 5-50ms query latency
- MCP-native integration enabling AI agents to query production data directly via tools
- Automated error grouping, fingerprinting, and impact analysis with stack traces
- Read-only PostgreSQL introspection for query performance analysis and N+1 detection
- Lightweight deployment on a $4/month VM with instant pruning and no external dependencies

## Why It Matters for RAG Builders
OpenTrace eliminates the gap between AI coding agents and production data by providing a lightweight, MCP-native observability layer that agents can query directly, enabling autonomous debugging and monitoring without manual intervention.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zstandard (compression)
Automated review identified **Zstandard (compression)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Custom columnar storage engine
Automated review identified **Custom columnar storage engine** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruby SDK
Automated review identified **Ruby SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js SDK
Automated review identified **Node.js SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
