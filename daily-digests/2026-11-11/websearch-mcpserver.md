---
title: "daidaiJ/websearch-mcpserver"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "SQLite", "HTTP/2", "TLS Fingerprinting", "MCP (Model Context Protocol)", "Docker", "systemd/launchd", "ModernC SQLite", "Go Modules"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP Server", "Web Search", "Academic Search", "RAG Pipeline", "API Key Pooling"]
source: "https://github.com/daidaiJ/websearch-mcpserver"
stars: 15
language: "Go"
last_updated: "2026-07-19T07:14:17Z"
discovered_at: "2026-07-19T07:29:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight MCP (Model Context Protocol) server written in Go that provides web and academic search capabilities with zero API key requirements for basic operation. It supports multiple search engines, intelligent fallback mechanisms, and optional LLM-powered summarization for RAG pipelines.

## Key Features
- Zero API key required for basic operation (engine mode) with built-in Baidu and Bing search engines
- Intelligent API key pooling with round-robin and priority strategies for high availability
- Multi-engine parallel orchestration with URL deduplication and score-based result filtering
- Built-in caching (SQLite) with 6-hour expiration and automatic cleanup
- Optional LLM-powered summarization and PDF parsing (MinerU integration) for enhanced content extraction

## Why It Matters for RAG Builders
It provides a unified, configurable interface for integrating multiple search engines into RAG pipelines with intelligent fallback and caching, reducing dependency on external APIs while maintaining high reliability.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/2
Automated review identified **HTTP/2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLS Fingerprinting
Automated review identified **TLS Fingerprinting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd/launchd
Automated review identified **systemd/launchd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ModernC SQLite
Automated review identified **ModernC SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go Modules
Automated review identified **Go Modules** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
