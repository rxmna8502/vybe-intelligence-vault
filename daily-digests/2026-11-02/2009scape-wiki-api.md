---
title: "arsalan-anwari/2009scape-wiki-api"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "SQLite", "Full-Text Search (FTS5)", "MCP (Model Context Protocol)", "Poetry (uv)", "Docker", "JWT (for token-based auth)"]
quality_score: 7
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["game data", "knowledge base", "MCP server", "FastAPI", "SQLite"]
source: "https://github.com/arsalan-anwari/2009scape-wiki-api"
stars: 1
language: "Python"
last_updated: "2026-08-03T13:37:59Z"
discovered_at: "2026-08-03T13:42:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
This repository transforms raw game data from 2009scape into an immutable SQLite knowledge base, serving it via a FastAPI HTTP endpoint and an MCP server for AI agents like Claude. It enables structured querying of game entities, relationships, and attributes for wiki or agent-based applications.

## Key Features
- Converts raw game sources into a single immutable SQLite artifact for efficient querying
- Provides both HTTP (FastAPI) and MCP server interfaces for AI agents and wiki frontends
- Implements token-based authentication with rate limiting and banning for security
- Supports offline builds from source with versioned datasets hosted on Hugging Face
- Includes a modular architecture with clear separation of domain, pipeline, repository, and surface layers

## Why It Matters for RAG Builders
It provides a structured, queryable knowledge base for game data that can be leveraged by AI agents or wiki systems, enabling accurate and efficient retrieval of game entities and relationships.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Full-Text Search (FTS5)
Automated review identified **Full-Text Search (FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Poetry (uv)
Automated review identified **Poetry (uv)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT (for token-based auth)
Automated review identified **JWT (for token-based auth)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
