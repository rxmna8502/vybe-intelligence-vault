---
title: "apet97/go-clockify"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "Model Context Protocol (MCP)", "Clockify API", "JSON-RPC", "CLI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "time tracking", "Clockify integration", "AI tooling", "workflow automation"]
source: "https://github.com/apet97/go-clockify"
stars: 0
language: "Go"
last_updated: "2026-07-11T23:43:30Z"
discovered_at: "2026-07-11T23:54:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local, single-user Model Context Protocol (MCP) server for Clockify that exposes time tracking, project management, invoicing, and reporting tools as callable functions for AI clients. It runs as a stdio subprocess with no account creation or service deployment required.

## Key Features
- Exposes 156+ Clockify tools (time entries, projects, invoices, reports) as MCP-compatible functions
- Local, single-user deployment with no service setup required (runs as stdio subprocess)
- Configurable toolset (default/core/business/admin/all) for tailored AI agent interactions
- Raw API fallback for unsupported endpoints with strict permission controls
- Built-in rate limiting, audit logging, and error recovery for robust AI agent integration

## Why It Matters for RAG Builders
It enables AI agents to directly interact with Clockify's time tracking and project management features, streamlining workflow automation for productivity and billing tasks.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Clockify API
Automated review identified **Clockify API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
