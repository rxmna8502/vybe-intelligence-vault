---
title: "Wolfe-Jam/claude-faf-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "YAML", "Node.js", "Bun"]
quality_score: 10
rag_relevance: 9
deployment_complexity: "Low"
tags: ["context management", "MCP server", "project memory", "AI agent tooling", "persistent context"]
source: "https://github.com/Wolfe-Jam/claude-faf-mcp"
stars: 19
language: "TypeScript"
last_updated: "2026-07-21T04:11:27Z"
discovered_at: "2026-07-21T04:15:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
claude-faf-mcp is an MCP server for Claude that enables persistent project context and memory management through a standardized YAML-based context file (.faf). It automates context synchronization across multiple AI tools and surfaces, ensuring AI agents start each session with accurate, up-to-date project context.

## Key Features
- Automated project context synchronization via .faf YAML files
- Tri-sync capability (.faf ↔ CLAUDE.md ↔ MEMORY.md)
- Native integration with Claude Desktop and other AI tools
- Deterministic scoring system for project context optimization
- IANA-registered context formats (application/vnd.faf+yaml)

## Why It Matters for RAG Builders
It provides a standardized, automated way to maintain persistent and accurate project context for AI agents, reducing setup time and improving consistency across sessions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
