---
title: "JOSETRA44/wacon-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Baileys (WhatsApp Web library)", "SQLite", "FTS5 (Full-Text Search)", "RAG (Retrieval-Augmented Generation)", "Long-polling", "TUI (Terminal User Interface) with neo-blessed"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["WhatsApp integration", "AI agent orchestration", "RAG for messaging", "CLI tool", "MCP server"]
source: "https://github.com/JOSETRA44/wacon-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-08-02T16:08:40Z"
discovered_at: "2026-08-02T16:11:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Wacon is a WhatsApp integration tool that connects AI agents (like Claude Code) to WhatsApp via an MCP server, enabling agents to read, send, and respond to messages while mimicking the user's communication style. It includes a CLI for direct WhatsApp interaction and a daemon-based architecture for real-time message handling.

## Key Features
- Memory-aware messaging: Agents adapt to the user's communication style per contact using layered memory (stats, qualitative notes, and persona.md).
- Real-time WhatsApp interaction via daemon: Single socket for all clients (CLI, agents, HTTP) with rate-limiting and anti-ban measures.
- Hybrid RAG for context retrieval: Combines keyword search, semantic similarity, and recency with episodic memory segmentation for efficient recall.
- Proactive agent workflows: Supports scheduled events, agenda integration, and long-polling triggers for timely responses.
- Terminal-based WhatsApp clients: Lightweight CLI and full-screen TUI for direct interaction without a browser.

## Why It Matters for RAG Builders
Wacon bridges AI agents and WhatsApp, enabling secure, style-aware automation of messaging workflows while preserving user privacy and reducing token waste through intelligent polling and context retrieval.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Baileys (WhatsApp Web library)
Automated review identified **Baileys (WhatsApp Web library)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RAG (Retrieval-Augmented Generation)
Automated review identified **RAG (Retrieval-Augmented Generation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Long-polling
Automated review identified **Long-polling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Terminal User Interface) with neo-blessed
Automated review identified **TUI (Terminal User Interface) with neo-blessed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
