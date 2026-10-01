---
title: "arhuman/mnemos"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "SQLite", "FTS5 (Full-Text Search)", "MCP (Model Context Protocol)", "BM25 (Search algorithm)", "CGO-free", "Markdown"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["local memory", "source citations", "MCP server", "project documentation", "agent memory"]
source: "https://github.com/arhuman/mnemos"
stars: 9
language: "Go"
last_updated: "2026-07-21T07:25:00Z"
discovered_at: "2026-07-21T07:32:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mnemos is a local-first memory server for AI agents that indexes project documentation, notes, and code into a searchable SQLite database. It enables cited retrieval via the Model Context Protocol (MCP), allowing agents like Claude Code to answer questions with precise file and line references from the user's own knowledge base.

## Key Features
- Indexes plain Markdown or any file structure into a local SQLite database with FTS5 full-text search
- Provides cited retrieval via MCP, returning exact file#section and line ranges for verifiable answers
- Supports both lexical (BM25) and optional semantic search (hybrid retrieval with embeddings)
- Enables read-write memory with durable fact capture, task management, and consolidation workflows
- Zero dependencies: single cgo-free Go binary with no external services or databases required

## Why It Matters for RAG Builders
mnemos eliminates hallucinations in AI agents by grounding responses in the user's own documented knowledge, ensuring verifiable and project-specific answers without relying on external or vector-based memory systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (Search algorithm)
Automated review identified **BM25 (Search algorithm)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CGO-free
Automated review identified **CGO-free** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
