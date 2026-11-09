---
title: "malkreide/sbb-opendata-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "Model Context Protocol (MCP)", "OpenDataSoft REST API", "Docker", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Swiss Railways", "open data", "real-time disruptions", "transport infrastructure"]
source: "https://github.com/malkreide/sbb-opendata-mcp"
stars: 1
language: "Python"
last_updated: "2026-08-02T21:41:57Z"
discovered_at: "2026-08-02T21:55:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server providing AI assistants with real-time access to Swiss Federal Railways (SBB) public open data, including passenger frequency, live disruptions, infrastructure projects, and platform details without requiring an API key.

## Key Features
- Provides 10 structured tools for querying SBB open datasets (passenger frequency, live disruptions, platform data, etc.)
- Supports both stdio and Streamable HTTP transport modes for MCP clients
- Includes dual output formats: human-readable Markdown and machine-readable JSON with structuredContent
- No API key required; all data is publicly accessible from data.sbb.ch
- Hardened against injection with regex validation and ODSQL escaping

## Why It Matters for RAG Builders
This repository enables AI models to directly query real-time and historical Swiss rail data, enhancing RAG systems with accurate, structured transport information without manual API integration.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenDataSoft REST API
Automated review identified **OpenDataSoft REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
