---
title: "tools-for-agents/scout"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Node.js", "SQLite (FTS5 for search)", "Regex-based HTML extraction", "MCP (Model Context Protocol) server", "CLI tools"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Low"
tags: ["web scraping", "content extraction", "markdown conversion", "caching", "searchable history"]
source: "https://github.com/tools-for-agents/scout"
stars: 0
language: "HTML"
last_updated: "2026-07-12T10:10:17Z"
discovered_at: "2026-07-12T10:26:43Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Scout is a zero-dependency web reader that fetches URLs and converts raw HTML into clean, readable markdown, typically reducing content size by ~90%. It caches pages for instant re-reads, enables searchable reading history, and integrates with other tools like Cortex for knowledge management.

## Key Features
- Converts raw HTML to clean markdown with ~90% size reduction
- Caches pages for instant re-reads and searchable history
- CLI and MCP server for agent integration
- Built-in SQLite FTS5 search for reading history
- Reading room web interface for browsing cached content

## Why It Matters for RAG Builders
Scout drastically reduces token costs for RAG pipelines by converting web content into clean, searchable markdown while caching results for reuse, making it essential for efficient web-based knowledge ingestion.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (FTS5 for search)
Automated review identified **SQLite (FTS5 for search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regex-based HTML extraction
Automated review identified **Regex-based HTML extraction** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol) server
Automated review identified **MCP (Model Context Protocol) server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools
Automated review identified **CLI tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
