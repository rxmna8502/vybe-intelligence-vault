---
title: "EwanJasper/SessionRelay"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "SQLite", "FTS5 (Full-Text Search)", "jieba (Chinese text segmentation)", "MCP (Model Context Protocol)", "Mermaid.js (diagrams)", "JSONL", "SQLite FTS5"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["memory layer", "RAG context", "AI agent integration", "cross-tool synchronization", "team handoff"]
source: "https://github.com/EwanJasper/SessionRelay"
stars: 1
language: "TypeScript"
last_updated: "2026-09-03T02:09:54Z"
discovered_at: "2026-09-03T02:21:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SessionRelay is a local-first memory layer for AI coding assistants that unifies and preserves conversation history across multiple AI tools (e.g., Claude Code, ZCode) in a project-level database. It enables cross-time, cross-tool, and cross-person memory retention with structured retrieval, MCP integration, and HOP handoff protocol for seamless team transitions.

## Key Features
- Unified project-level memory storage across multiple AI tools (Claude Code, ZCode, Codex, Qoder, Trae) with zero vendor lock-in.
- Structured retrieval with Chinese full-text search (jieba + FTS5), forced provenance tracking, and context-safe querying to prevent hallucinations.
- MCP Server with 15 tools (8 read + 7 write) enabling AI agents to query, annotate, and manage session memory dynamically.
- HOP handoff protocol (hop/1.0) for secure, integrity-verified team transitions with automatic sanitization and quarantine mechanisms.
- Passive capture via daemon (30s sync) to prevent data loss from AI context compression, with support for manual sync and historical backfill.

## Why It Matters for RAG Builders
SessionRelay provides a critical infrastructure layer for RAG builders by ensuring complete, structured, and provenance-tracked memory retention across AI tools and teams, reducing hallucinations and enabling seamless project handoffs.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### jieba (Chinese text segmentation)
Automated review identified **jieba (Chinese text segmentation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js (diagrams)
Automated review identified **Mermaid.js (diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite FTS5
Automated review identified **SQLite FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
