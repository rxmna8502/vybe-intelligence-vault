---
title: "Sealjay/mcp-whatsapp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "Model Context Protocol (MCP)", "whatsmeow", "SQLite", "HTTP", "FFmpeg (optional)", "whatsmeow", "CGO (Windows)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["WhatsApp integration", "MCP server", "LLM tooling", "multi-device messaging", "media handling"]
source: "https://github.com/Sealjay/mcp-whatsapp"
stars: 4
language: "Go"
last_updated: "2026-07-18T23:44:33Z"
discovered_at: "2026-07-18T23:52:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A single-binary Go MCP server that integrates a personal WhatsApp account with LLMs via the Model Context Protocol (MCP). It exposes 42 tools for messaging, media handling, group management, and privacy controls, with local SQLite caching and HTTP-based client connectivity.

## Key Features
- 42 MCP tools for WhatsApp interactions (messaging, groups, polls, media, privacy)
- Local SQLite caching for message history and media with on-demand sync
- HTTP-based MCP server for seamless client integration (Claude, Cursor, etc.)
- Single-binary deployment with no process spawning or stdin/stdout juggling
- Advanced features like LID resolution, disappearing messages, and targeted history sync

## Why It Matters for RAG Builders
It enables LLMs to interact with WhatsApp accounts programmatically, expanding AI agent capabilities for real-time messaging, media handling, and group management.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### whatsmeow
Automated review identified **whatsmeow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFmpeg (optional)
Automated review identified **FFmpeg (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### whatsmeow
Automated review identified **whatsmeow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CGO (Windows)
Automated review identified **CGO (Windows)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
