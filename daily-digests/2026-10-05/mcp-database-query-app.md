---
title: "Trojaner/mcp-database-query-app"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["C#", ".NET 10", "Dapper", "PostgreSQL", "SQL Server", "SQLite", "AES-256-GCM", "MCP Apps Protocol", "Chart.js", "Model Context Protocol"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP App", "Database Query", "Interactive UI", "PostgreSQL", "SQL Server"]
source: "https://github.com/Trojaner/mcp-database-query-app"
stars: 7
language: "C#"
last_updated: "2026-08-07T20:38:29Z"
discovered_at: "2026-08-07T20:43:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) application written in C#/.NET 10 that enables LLM clients to interactively query and manage PostgreSQL and SQL Server databases. It provides an embedded UI for rendering sortable grids, schema viewers, and Chart.js visualizations directly within MCP clients like Claude Desktop.

## Key Features
- MCP App with embedded UI for inline rendering of results, schema, and charts within client interfaces
- Secure encrypted credential storage for database passwords using AES-256-GCM
- Read-only mode by default with explicit opt-in for write operations and destructive actions
- Supports both stdio and HTTP/SSE transports for flexible deployment
- Pagination, row limits, and schema introspection for safe and efficient querying

## Why It Matters for RAG Builders
It bridges LLMs with live database interactions, enabling secure, interactive querying and visualization directly within MCP clients, which is critical for AI-driven data analysis and automation workflows.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 10
Automated review identified **.NET 10** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dapper
Automated review identified **Dapper** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL Server
Automated review identified **SQL Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Apps Protocol
Automated review identified **MCP Apps Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chart.js
Automated review identified **Chart.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol
Automated review identified **Model Context Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
