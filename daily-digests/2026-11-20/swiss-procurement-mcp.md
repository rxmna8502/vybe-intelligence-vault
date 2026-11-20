---
title: "malkreide/swiss-procurement-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "FastAPI", "Docker", "structlog", "PyPI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Swiss procurement", "simap.ch API", "public data", "read-only access"]
source: "https://github.com/malkreide/swiss-procurement-mcp"
stars: 0
language: "Python"
last_updated: "2026-08-02T20:45:35Z"
discovered_at: "2026-08-02T20:54:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP server providing read-only access to the Swiss public procurement API (simap.ch), enabling AI agents to query tenders, awards, and construction codes across all cantons and the Confederation with detailed metadata and filtering capabilities.

## Key Features
- Read-only access to Swiss public procurement data via simap.ch API without authentication
- Comprehensive toolset for searching tenders, awards, and construction codes with detailed metadata
- Supports canton-specific, CPV, and BKP code filtering with explicit semantics for geographic matching
- Short-lived cache (30 min TTL) for intraday updates and live API fallback with degradation handling
- Multi-transport support (stdio, SSE, streamable-http) with containerized deployment and strict security policies

## Why It Matters for RAG Builders
This server enables AI agents to programmatically access and integrate Swiss public procurement data, which is critical for applications requiring real-time tender information, construction planning, and vendor research.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### structlog
Automated review identified **structlog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
