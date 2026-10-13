---
title: "cedricziel/truenas-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "TrueNAS REST API", "Docker", "WebSocket", "JSON-RPC"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["TrueNAS", "MCP server", "storage management", "AI integration", "per-session auth"]
source: "https://github.com/cedricziel/truenas-mcp"
stars: 0
language: "Go"
last_updated: "2026-08-08T21:32:43Z"
discovered_at: "2026-08-08T21:33:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server for TrueNAS SCALE that enables secure, per-session API key authentication and read/write operations via a standardized interface. It bridges TrueNAS functionality with AI agents while prioritizing security and granular access control.

## Key Features
- Per-session TrueNAS API key authentication for granular access control
- Read-first design with explicit separation of read and write operations
- Deployable as a TrueNAS app or standalone container
- Comprehensive toolset covering storage, apps, sharing, and filesystem operations
- Built-in denylist for unrecoverable operations to prevent accidental data loss

## Why It Matters for RAG Builders
It enables AI agents to securely interact with TrueNAS SCALE for storage management, app lifecycle operations, and permission configuration without requiring shared credentials or elevated privileges.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TrueNAS REST API
Automated review identified **TrueNAS REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
