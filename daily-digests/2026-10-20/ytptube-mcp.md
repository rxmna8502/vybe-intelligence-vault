---
title: "Snuffy2/ytptube-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "HTTP API", "yt-dlp", "REST", "Environment Variables"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "ytptube integration", "AI assistant interface", "media management", "self-hosted"]
source: "https://github.com/Snuffy2/ytptube-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-08-02T05:49:02Z"
discovered_at: "2026-08-02T05:57:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides a secure, read-only interface for AI assistants to inspect and optionally manage a self-hosted ytptube instance via HTTP API. It enables focused access to downloads, history, tasks, presets, and logs without exposing credentials or requiring direct API access.

## Key Features
- Safe-by-default read-only access with optional mutation control via environment variables
- Comprehensive inspection tools for downloads, history, tasks, presets, and logs
- Validated input handling to prevent unsafe yt-dlp CLI strings or raw URLs
- Credential-aware authentication with optional HTTP Basic or API key support
- Small deployment surface with stdio transport and minimal dependencies

## Why It Matters for RAG Builders
It provides a secure, AI-friendly interface to manage and inspect media downloads via ytptube, reducing credential exposure and enabling controlled automation for RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yt-dlp
Automated review identified **yt-dlp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Environment Variables
Automated review identified **Environment Variables** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
