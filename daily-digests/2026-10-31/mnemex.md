---
title: "notsointresting/mnemex"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "FTS5 (BM25)", "FastMCP", "MCP (Model Context Protocol)", "OpenAI Responses API (optional)", "sqlite-vec (optional)", "Ruff", "Pytest"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["anchored memory", "decision tracking", "code symbol indexing", "deterministic constraints", "MCP server"]
source: "https://github.com/notsointresting/mnemex"
stars: 1
language: "Python"
last_updated: "2026-07-19T05:45:01Z"
discovered_at: "2026-07-19T05:51:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mnemex is a local-first MCP server that anchors software decisions to code symbols via content hashes, ensuring AI coding agents can verify whether past decisions still govern the current code. It provides deterministic, offline-ready checks for decision violations and evolution without requiring ML models or network access after installation.

## Key Features
- Anchors decisions to code symbols and content hashes for traceability
- Deterministic offline checks for decision violations (no ML required)
- Hybrid BM25 and optional vector retrieval for efficient context lookup
- MCP-compatible server for integration with AI coding agents (Claude, Codex, Cursor, etc.)
- Supports explicit overrides, stale decision detection, and audited decision records

## Why It Matters for RAG Builders
Mnemex ensures AI coding agents retain accurate, up-to-date context about software decisions tied to specific code symbols, preventing silent violations of past constraints and reducing hallucinations in automated edits.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (BM25)
Automated review identified **FTS5 (BM25)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Responses API (optional)
Automated review identified **OpenAI Responses API (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec (optional)
Automated review identified **sqlite-vec (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
