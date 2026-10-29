---
title: "trust-delta/conversation-handoff-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "HTTP Server", "JSONL Logging"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP", "conversation context", "handoff", "AI orchestration", "prompt injection protection"]
source: "https://github.com/trust-delta/conversation-handoff-mcp"
stars: 6
language: "TypeScript"
last_updated: "2026-09-02T14:49:22Z"
discovered_at: "2026-09-02T15:52:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP server for transferring conversation context between AI chats or different projects within the same AI, enabling seamless handoffs with metadata, tags, and search capabilities while ensuring prompt injection protection and lightweight in-memory storage.

## Key Features
- Prompt injection protection with untrusted-content markers and boundary tokens
- Tag-based search and filtering for handoffs with structured labels
- Sender metadata support for orchestrator integration (project, dispatch ID, agent ID)
- Auto-connect and auto-reconnection for seamless server discovery and recovery
- Memory-based storage with FIFO cleanup and configurable TTL for temporary context sharing

## Why It Matters for RAG Builders
It enables reliable, secure, and context-preserving handoffs between AI agents or sessions, critical for building robust RAG systems that require seamless conversation continuity.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server
Automated review identified **HTTP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL Logging
Automated review identified **JSONL Logging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
