---
title: "laelhalawani/sana-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "SQLite", "MCP (Model Context Protocol)", "tRPC", "HTTPS", "CLI", "Daemon"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "meeting transcripts", "local database", "transcript correction", "AI agent integration"]
source: "https://github.com/laelhalawani/sana-mcp"
stars: 0
language: "Go"
last_updated: "2026-08-01T19:06:19Z"
discovered_at: "2026-08-01T19:19:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
sana-mcp is an MCP server that provides AI agents with local access to Sana.AI meeting transcripts by syncing them into a local SQLite database. It enables search, reading, summarization, and correction of transcripts while maintaining privacy and offline functionality.

## Key Features
- Local SQLite database for instant transcript access without network calls
- Background daemon for automatic syncing of new meetings
- Built-in search with BM25 ranking, phrase/date filters, and sorting
- Transcript correction system that preserves originals and survives re-syncs
- Cross-platform support (macOS, Linux, Windows) with one static binary

## Why It Matters for RAG Builders
It enables AI agents to securely and efficiently access, search, and correct meeting transcripts locally, enhancing RAG pipelines with private, offline-capable transcript data.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tRPC
Automated review identified **tRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPS
Automated review identified **HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Daemon
Automated review identified **Daemon** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
