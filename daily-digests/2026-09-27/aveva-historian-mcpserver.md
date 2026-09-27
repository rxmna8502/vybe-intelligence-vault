---
title: "chewcw/aveva-historian-mcpserver"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "NTLM Authentication", "REST API", "OData", "HTTP Server", "Structured Logging (log/slog)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["time-series", "industrial data", "MCP server", "AVEVA Historian", "AI integration"]
source: "https://github.com/chewcw/aveva-historian-mcpserver"
stars: 0
language: "Go"
last_updated: "2026-08-01T09:05:18Z"
discovered_at: "2026-08-01T09:06:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Go-based MCP server that bridges AI assistants to AVEVA Historian time-series data via NTLM-authenticated REST API access. It enables querying tags, process values, and analog summaries while offloading large datasets to an embedded HTTP data server to avoid context window overload.

## Key Features
- MCP stdio transport for seamless integration with AI assistants (Claude, Cursor, etc.)
- Dual-response pattern: inline preview (≤100 rows) + full dataset via embedded HTTP server with TTL-based cleanup
- NTLM-authenticated access to AVEVA Historian REST API for secure data retrieval
- Support for OData queries on tags, process values, and analog summaries with configurable retrieval modes
- Structured logging and CLI for easy configuration and debugging

## Why It Matters for RAG Builders
It enables AI assistants to securely and efficiently query large-scale industrial time-series data from AVEVA Historian without overwhelming context windows, bridging the gap between AI agents and operational data systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NTLM Authentication
Automated review identified **NTLM Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OData
Automated review identified **OData** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server
Automated review identified **HTTP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Structured Logging (log/slog)
Automated review identified **Structured Logging (log/slog)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
