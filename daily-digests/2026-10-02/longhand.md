---
title: "Wynelson94/longhand"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "ChromaDB", "ONNX", "Claude Code", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["local memory", "Claude Code", "session recall", "lossless storage", "persistent history"]
source: "https://github.com/Wynelson94/longhand"
stars: 11
language: "Python"
last_updated: "2026-07-10T20:20:27Z"
discovered_at: "2026-07-10T20:22:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Longhand is a persistent local memory system for Claude Code that captures every tool call, file edit, and thinking block verbatim into a SQLite database with ChromaDB indexing. It enables lossless, searchable, and replayable recall of past sessions without API calls or AI-generated summaries.

## Key Features
- Verbatim storage of every event from Claude Code sessions (no summarization or lossy compression)
- Semantic and exact-text search across entire history with ~56ms response time
- Live ingestion of sessions during active use via MCP hooks
- Project-based organization and replay of file edits and tool calls
- Zero API calls or external dependencies; all data stored locally

## Why It Matters for RAG Builders
Longhand provides a reliable, lossless way to preserve and query past AI interactions locally, eliminating the need for expensive context windows or external memory services while ensuring complete data fidelity for RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
