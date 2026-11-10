---
title: "tverney/mcp-agent-memory"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Filesystem-based memory storage", "Daemon (agent-memory-daemon)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["agent memory", "MCP server", "persistent memory", "memory consolidation", "RAG optimization"]
source: "https://github.com/tverney/mcp-agent-memory"
stars: 4
language: "TypeScript"
last_updated: "2026-08-08T20:25:17Z"
discovered_at: "2026-08-08T20:32:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that bridges agent memory management to MCP-compatible clients like Kiro, Claude Desktop, and Cursor. It enables agents to read, append, and search memory files while optionally leveraging a background daemon for consolidation and extraction of durable memories.

## Key Features
- Exposes agent memory operations (read, append, search) via MCP for seamless integration with clients like Kiro, Claude Desktop, and Cursor
- Optional background daemon for automatic consolidation and extraction of durable memories from session summaries
- Supports multiple LLM backends (Bedrock, OpenAI, Kiro) with token-efficient configurations
- Interactive setup and configuration wizards for quick deployment and client registration
- Lightweight filesystem-based contract between MCP server and daemon, ensuring reliability and simplicity

## Why It Matters for RAG Builders
It provides a standardized way for RAG systems to persistently store, retrieve, and consolidate agent memories, reducing redundant context and improving long-term reasoning capabilities.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Filesystem-based memory storage
Automated review identified **Filesystem-based memory storage** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Daemon (agent-memory-daemon)
Automated review identified **Daemon (agent-memory-daemon)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
