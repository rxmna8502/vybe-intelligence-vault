---
title: "RMANOV/sqlite-memory-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "SQLite FTS5", "sqlite-vec (optional)", "FastMCP", "PyQt6", "Git", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP memory", "SQLite knowledge graph", "hybrid retrieval", "provenance tracking", "cross-agent collaboration"]
source: "https://github.com/RMANOV/sqlite-memory-mcp"
stars: 12
language: "Python"
last_updated: "2026-07-19T20:40:41Z"
discovered_at: "2026-07-19T20:44:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first MCP memory server for coding agents that provides governed cross-agent memory with provenance tracking, approval-aware promotion workflows, and hybrid retrieval (BM25 + semantic search) via SQLite. It enables shared knowledge graphs across agents with cross-machine sync and task management.

## Key Features
- Hybrid retrieval with BM25/FTS5 and optional semantic search via sqlite-vec using Reciprocal Rank Fusion
- Provenance-aware memory mutations with approval-gated promotion workflows (human_confirmed, multi-evidence policies)
- Cross-agent and cross-machine memory sharing via bridge sync with private git repositories
- WAL mode for 10+ concurrent sessions with ACID transactions and zero file locking conflicts
- Task management, session tracking, and optional Kanban board visualization with HTML reports

## Why It Matters for RAG Builders
It provides a robust, local-first memory governance system for AI agents that ensures reliable, reviewable, and shareable context management without relying on cloud APIs or heavyweight databases.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite FTS5
Automated review identified **SQLite FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec (optional)
Automated review identified **sqlite-vec (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyQt6
Automated review identified **PyQt6** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
