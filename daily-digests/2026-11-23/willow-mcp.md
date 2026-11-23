---
title: "willow-memory/willow-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "SQLite", "PostgreSQL", "Task Queue (Kart)", "FastAPI", "Pydantic", "SQLAlchemy"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP server", "persistent memory", "task orchestration", "multi-backend storage", "agent framework"]
source: "https://github.com/willow-memory/willow-mcp"
stars: 2
language: "Python"
last_updated: "2026-09-03T08:30:49Z"
discovered_at: "2026-09-03T08:38:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
willow-mcp is an agent-neutral MCP server providing persistent memory, task execution, and multi-backend storage for AI agents. It integrates SQLite, Postgres, and a task queue (Kart) with manifest-based ACL authorization, enabling seamless collaboration across agents like Claude Code and Cursor.

## Key Features
- Three storage backends (SOIL SQLite, Postgres knowledge base, Kart task queue) with full-text search and soft-delete support
- Manifest-based filesystem ACL for authorization without external auth services
- Sandboxed bootstrap for local and fleet deployments with automatic schema validation
- Comprehensive toolset for knowledge ingestion, gap management, and task routing
- Integration with external systems via Grove channels, FRANK ledger, and NEST/Nugget bridges

## Why It Matters for RAG Builders
willow-mcp provides the foundational memory, task execution, and orchestration layer critical for building scalable, multi-agent RAG systems with persistent state and secure collaboration.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Task Queue (Kart)
Automated review identified **Task Queue (Kart)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
