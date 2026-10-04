---
title: "jmrplens/libgen-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "Docker", "Static Binary", "REST API"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["Library Genesis", "MCP server", "document retrieval", "AI assistant integration", "static binary"]
source: "https://github.com/jmrplens/libgen-mcp"
stars: 0
language: "Go"
last_updated: "2026-07-19T13:12:55Z"
discovered_at: "2026-07-19T13:17:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server written in Go that enables AI assistants to search, fetch metadata, and download content from Library Genesis (LibGen) including books, research papers, magazines, comics, and standards. It provides three tools: search, get_details, and download, with automatic mirror discovery and failover.

## Key Features
- Search Library Genesis catalog with flexible query parameters (topics, fields, sorting, pagination)
- Fetch detailed metadata for books, papers, or comics via MD5 or ID
- Download files with automatic mirror discovery, failover, and MD5 verification for books
- Prebuilt static binaries for Windows, Linux, and macOS (amd64 & arm64) with no dependencies
- Seamless integration with AI assistants (Claude, Cursor, VS Code, LM Studio) via MCP

## Why It Matters for RAG Builders
It enables AI assistants to directly fetch and verify academic and literary content from Library Genesis, reducing manual research overhead for RAG pipelines.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Binary
Automated review identified **Static Binary** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
