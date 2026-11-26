---
title: "jcastilloa/gaz-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "MCP (Model Context Protocol)", "MySQL", "PostgreSQL", "Jenkins", "pprof", "expvar", "SQLite", "Viper (YAML configuration)", "Hexagonal Architecture"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "database diagnostics", "Jenkins administration", "Go process monitoring", "AI agent tools"]
source: "https://github.com/jcastilloa/gaz-mcp"
stars: 0
language: "Go"
last_updated: "2026-08-07T18:49:18Z"
discovered_at: "2026-08-07T18:58:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
gaz-mcp is an MCP server that exposes read-only MySQL/PostgreSQL database access, Jenkins administration with configuration history, and live Go process diagnostics (pprof/expvar) as standardized tools for AI agents. It uses stdio transport for seamless integration with MCP clients and includes a reusable diagnostics Go module for service-side instrumentation.

## Key Features
- Read-only SQL access with dynamic database selection and enforcement
- 33 Jenkins tools including configuration history with SQLite-based snapshots
- Live Go process diagnostics via pprof/expvar with optional SQL pool metrics
- Structured JSON output designed for programmatic AI agent consumption
- Hexagonal architecture for modularity and maintainability

## Why It Matters for RAG Builders
It provides AI agents with standardized, read-only access to critical infrastructure like databases, CI/CD systems, and runtime diagnostics, enabling safer and more effective tool use in RAG pipelines.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL
Automated review identified **MySQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jenkins
Automated review identified **Jenkins** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pprof
Automated review identified **pprof** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### expvar
Automated review identified **expvar** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Viper (YAML configuration)
Automated review identified **Viper (YAML configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hexagonal Architecture
Automated review identified **Hexagonal Architecture** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
