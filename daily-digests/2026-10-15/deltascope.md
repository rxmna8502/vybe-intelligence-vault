---
title: "Fanduzi/DeltaScope"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "SQL Parsing", "CLI", "HTTP Server", "MCP (Model Context Protocol)", "YAML Configuration"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["SQL audit", "DDL/DML validation", "CI integration", "offline analysis", "database governance"]
source: "https://github.com/Fanduzi/DeltaScope"
stars: 2
language: "Go"
last_updated: "2026-07-12T10:20:27Z"
discovered_at: "2026-07-12T10:26:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DeltaScope is an offline-first SQL audit and migration risk checker for MySQL, TiDB, and PostgreSQL DDL/DML changes. It provides a unified engine for local development, CI pipelines, and AI agents to review SQL statements before execution, preventing costly database errors.

## Key Features
- Multi-dialect support (MySQL, TiDB, PostgreSQL) with offline and metadata-aware modes
- Comprehensive DDL/DML governance including table creation, alterations, and DML protections
- CI/CD integration with SARIF, GitHub Actions, GitLab Code Quality, and GitHub Summaries
- MCP server for AI agent integration (Claude, Codex, Cursor, etc.) with inline SQL review
- Impact estimation for DML operations with conservative risk assessment

## Why It Matters for RAG Builders
DeltaScope ensures SQL changes are validated before execution, reducing production incidents and enabling safer AI-driven database interactions through its MCP integration.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL Parsing
Automated review identified **SQL Parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server
Automated review identified **HTTP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML Configuration
Automated review identified **YAML Configuration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
