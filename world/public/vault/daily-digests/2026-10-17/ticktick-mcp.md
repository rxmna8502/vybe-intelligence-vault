---
title: "partymola/ticktick-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.13+", "MCP (Model Context Protocol)", "TickTick v2 API", "uv (package manager)", "SQLite (for completion tracking)", "OAuth 2.0", "GPL-3.0 license"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["task management", "MCP server", "TickTick integration", "AI agent tools", "productivity"]
source: "https://github.com/partymola/ticktick-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-11T23:43:16Z"
discovered_at: "2026-07-11T23:54:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server for TickTick task management that enables AI agents to interact with TickTick's unofficial v2 API for task lifecycle operations, including creation, updates, completion tracking, and filtering.

## Key Features
- Full task lifecycle management (create, update, complete, delete, move, subtask)
- Field-preserving updates to avoid API field wiping on partial updates
- Day-of-week validation for date fields to prevent off-by-one errors
- Read-after-write verification with `_verification_warnings` for data consistency
- Idempotent completion tracking to ensure tasks are reviewed exactly once

## Why It Matters for RAG Builders
It provides AI agents with a robust, field-preserving interface to manage tasks in TickTick, enabling seamless integration with personal productivity workflows and ensuring data consistency through validation and verification mechanisms.

## Tech Stack Deep Dive
### Python 3.13+
Automated review identified **Python 3.13+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TickTick v2 API
Automated review identified **TickTick v2 API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (for completion tracking)
Automated review identified **SQLite (for completion tracking)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GPL-3.0 license
Automated review identified **GPL-3.0 license** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
