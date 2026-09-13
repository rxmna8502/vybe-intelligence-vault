---
title: "cbuntingde/kimi-memory"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "SQLite", "MCP (Model Context Protocol)", "Kimi Code", "Hugging Face Transformers (Xenova/all-MiniLM-L6-v2)", "SQL (FTS5 for full-text search)"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["memory management", "MCP plugin", "local SQLite", "vector search", "auto-extraction"]
source: "https://github.com/cbuntingde/kimi-memory"
stars: 1
language: "JavaScript"
last_updated: "2026-08-02T19:22:12Z"
discovered_at: "2026-08-02T19:25:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local Kimi Code plugin that implements a three-layer memory system (global user, per-project durable + working, and session archives) via MCP tools, lifecycle hooks, and slash commands. It enables persistent, structured memory management for AI agents with vector similarity search, auto-extraction, and decay-based importance scoring.

## Key Features
- Three-layer memory architecture (global, per-project durable + working, session archives)
- Vector similarity search with hybrid FTS5 + cosine ranking (optional embeddings)
- Auto-extraction of memories from conversation summaries via LLM calls
- Durable memory operations with scope-aware tools (save, recall, update, delete, bulk operations)
- Decay-based importance scoring and manual reinforcement of memory confidence

## Why It Matters for RAG Builders
It provides a robust, local memory system for AI agents that enables persistent context, structured recall, and auto-extraction of insights from conversations, critical for building advanced RAG systems.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kimi Code
Automated review identified **Kimi Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face Transformers (Xenova/all-MiniLM-L6-v2)
Automated review identified **Hugging Face Transformers (Xenova/all-MiniLM-L6-v2)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL (FTS5 for full-text search)
Automated review identified **SQL (FTS5 for full-text search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
