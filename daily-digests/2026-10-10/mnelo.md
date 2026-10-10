---
title: "chinesewebman/mnelo"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "SQLite", "sqlite-vec", "MCP (Model Context Protocol)", "FastEmbed", "BGE-small-zh-v1.5 (embedding model)", "WAL-mode SQLite (concurrent reads)", "i18n (English + \u4e2d\u6587)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["knowledge graph", "RRF fusion", "local-first", "MCP server", "bilingual"]
source: "https://github.com/chinesewebman/mnelo"
stars: 1
language: "Python"
last_updated: "2026-07-18T14:49:54Z"
discovered_at: "2026-07-18T14:50:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mnelo is a local-first, single-file knowledge-graph memory layer for AI agents that combines vector search, graph traversal, metadata matching, and entity resolution into a unified SQLite-based system. It enables agents to retain and recall context with high precision and low latency using a 4-way hybrid recall pipeline with Reciprocal Rank Fusion (RRF).

## Key Features
- 4-way hybrid recall (vector + graph + meta + entity) with RRF fusion for high precision and recall
- Single-file SQLite storage (~24 MB at scale) with soft-delete via `valid_until` for version history
- Bilingual support (English + 中文) with locale auto-detection and minimal setup for new languages
- Ultra-low latency recall (p50=12.5ms, p95=36ms) with concurrent 4-way parallel processing
- MCP-compatible server with 7 tools for seamless integration with Hermes Agent, Claude Desktop, Cursor, or any MCP client

## Why It Matters for RAG Builders
mnelo provides a critical memory layer for RAG systems by enabling agents to retain and recall context with high precision and low latency, eliminating cloud dependencies while supporting hybrid recall strategies essential for production-grade AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-small-zh-v1.5 (embedding model)
Automated review identified **BGE-small-zh-v1.5 (embedding model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WAL-mode SQLite (concurrent reads)
Automated review identified **WAL-mode SQLite (concurrent reads)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### i18n (English + 中文)
Automated review identified **i18n (English + 中文)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
