---
title: "Orange-hanter/cod-doc"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "CLI", "REST API", "MCP (Model Context Protocol)", "Markdown", "SQL"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["documentation management", "code-document synchronization", "LLM agent integration", "SQLite-based state", "task lifecycle"]
source: "https://github.com/Orange-hanter/cod-doc"
stars: 0
language: "Python"
last_updated: "2026-09-03T18:58:30Z"
discovered_at: "2026-09-03T19:12:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
COD-DOC is a context orchestrator for documentation that ensures docs never drift from code by using a SQLite-based state database where markdown is a hash-verified projection. It provides a unified interface for humans and LLM agents to manage, query, and audit project documentation, tasks, and revisions.

## Key Features
- Hash-verified markdown projections to detect drift between docs and code
- Append-only revision history with revert capabilities for all entities
- First-class linking between documents, tasks, ADRs, and git commits
- Dedicated MCP profile for LLM agents with 6 task-centric tools
- Zero infrastructure dependency with a single SQLite file for the project state

## Why It Matters for RAG Builders
COD-DOC ensures documentation remains accurate and synchronized with code, providing a reliable foundation for RAG systems that rely on up-to-date project context.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
