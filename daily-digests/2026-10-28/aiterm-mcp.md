---
title: "kitepon/aiterm-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["JavaScript", "Node.js", "Model Context Protocol (MCP)", "tmux", "psmux", "TypeScript (implied by modern JS practices)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["agent orchestration", "MCP terminal", "multi-agent systems", "persistent sessions", "AI tool harness"]
source: "https://github.com/kitepon/aiterm-mcp"
stars: 4
language: "JavaScript"
last_updated: "2026-09-01T08:37:56Z"
discovered_at: "2026-09-01T09:07:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Aiterm-MCP provides a persistent MCP-native terminal that enables AI agents to programmatically launch and orchestrate other coding agents (e.g., Claude Code, Codex CLI, Grok CLI) within a unified, multiplexed environment. It acts as a harness API for driving multiple AI tools through a single TUI, reducing context window overhead and enabling headless orchestration.

## Key Features
- Persistent MCP-native terminal for driving multiple AI agents (Claude, Codex, Grok, Cursor) in a single session
- Programmatic agent launching and steering via `agent_launch` and `agent_steer` tools
- Token-efficient PTY reads (~7.1x fewer tokens than raw logs) for reduced context window usage
- Cross-platform support (tmux on POSIX, psmux on native Windows) with session persistence
- In-place agent configuration (model/effort changes) without restarting sessions

## Why It Matters for RAG Builders
Aiterm-MCP enables AI orchestrators to programmatically spawn and steer multiple coding agents within a single persistent terminal, eliminating the need for manual terminal management and reducing context window overhead for RAG systems.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tmux
Automated review identified **tmux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### psmux
Automated review identified **psmux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (implied by modern JS practices)
Automated review identified **TypeScript (implied by modern JS practices)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
