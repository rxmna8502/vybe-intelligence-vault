---
title: "roboticforce/remembrallmcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "PostgreSQL", "pgvector", "Tree-sitter", "Docker", "MCP (Model Context Protocol)", "GitHub CLI"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["code graph", "persistent memory", "AI agent tooling", "dependency analysis", "RAG optimization"]
source: "https://github.com/roboticforce/remembrallmcp"
stars: 27
language: "Rust"
last_updated: "2026-07-18T23:47:35Z"
discovered_at: "2026-07-18T23:52:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RemembrallMCP provides AI coding agents with whole-codebase knowledge through a field-aware dependency graph and persistent memory system. Built on Rust, Postgres with pgvector, and exposed via MCP, it enables agents to query code relationships and recall past decisions instantly, reducing exploration overhead.

## Key Features
- Field-aware code graph across 8 languages (Python, Java, JavaScript, Rust, Go, Ruby, TypeScript, Kotlin) with function, class, method, and field-level relationships
- Persistent memory system with hybrid semantic and full-text search for recalling past decisions and patterns
- Blast radius analysis (`remembrall_impact`) to determine code change impacts in milliseconds
- MCP server integration for seamless AI agent interaction with tools like `remembrall_recall`, `remembrall_store`, and `remembrall_index`
- GitHub PR and markdown ingestion pipelines for bootstrapping organizational knowledge

## Why It Matters for RAG Builders
RemembrallMCP eliminates the need for AI agents to rediscover codebase structure and past decisions, drastically reducing token usage and improving efficiency for RAG and AI stack builders.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub CLI
Automated review identified **GitHub CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
