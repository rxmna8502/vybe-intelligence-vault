---
title: "kalinbogatzevski/captain-memo"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "SQLite", "sqlite-vec", "Python", "FastAPI", "MCP (Model Context Protocol)", "Claude Code", "Claude Max", "Voyage AI API", "Ollama", "systemd", "Windows Scheduled Tasks"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["local memory", "cross-AI coordination", "hybrid search", "session observations", "MCP plugin"]
source: "https://github.com/kalinbogatzevski/captain-memo"
stars: 2
language: "TypeScript"
last_updated: "2026-07-12T11:54:57Z"
discovered_at: "2026-07-12T11:58:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Captain Memo is a local-first, cross-AI memory layer for coding agents that enables shared, persistent, and searchable logs across multiple AI tools (e.g., Claude Code, Codex, Gemini CLI) using a hybrid vector and keyword search system. It captures session observations, auto-injects context, and coordinates work to prevent overlapping edits.

## Key Features
- Shared local corpus across multiple AI coding agents (Claude, Codex, Gemini CLI, etc.) via MCP server
- Hybrid search combining Voyage embeddings and SQLite FTS5 keyword indexing with recency-aware re-ranking
- Auto-injected context for every prompt using `<memory-context>` envelopes
- Session observations captured and summarized into structured, searchable chunks for future sessions
- Work-coordination board to flag overlapping file edits across AI tools

## Why It Matters for RAG Builders
Captain Memo eliminates the need to re-explain context across AI sessions by maintaining a persistent, shared memory layer that improves continuity and efficiency for AI-driven coding workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Max
Automated review identified **Claude Max** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Voyage AI API
Automated review identified **Voyage AI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows Scheduled Tasks
Automated review identified **Windows Scheduled Tasks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
