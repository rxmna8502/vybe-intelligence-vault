---
title: "darwijesinghe/mssql-mcp-server"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: [".NET 8", "C#", "MCP (Model Context Protocol)", "MSSQL Server", "JSON-RPC"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "SQL Server integration", "AI tooling", "read-only queries", "metadata exploration"]
source: "https://github.com/darwijesinghe/mssql-mcp-server"
stars: 0
language: "C#"
last_updated: "2026-08-08T15:30:56Z"
discovered_at: "2026-08-08T15:32:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A .NET 8 MCP server that exposes read-only MSSQL Server tools to AI hosts like Cursor and Claude Desktop via the Model Context Protocol (MCP). It enables AI agents to interact with SQL Server databases for metadata exploration and query execution.

## Key Features
- Exposes read-only MSSQL Server tools via MCP for AI hosts
- Supports metadata operations (tables, views, procedures, functions, triggers)
- Provides validated SELECT-only query execution
- Offers search and reference-finding capabilities for database objects
- Configurable via JSON settings with local overrides for security

## Why It Matters for RAG Builders
It enables AI agents to securely interact with SQL Server databases for metadata retrieval and read-only queries, enhancing RAG pipelines with dynamic data access.

## Tech Stack Deep Dive
### .NET 8
Automated review identified **.NET 8** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MSSQL Server
Automated review identified **MSSQL Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
