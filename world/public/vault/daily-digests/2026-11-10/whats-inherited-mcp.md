---
title: "stcmain/whats-inherited-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "AI agent instructions", "code review", "security analysis", "repository inspection"]
source: "https://github.com/stcmain/whats-inherited-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-08-01T20:47:15Z"
discovered_at: "2026-08-01T20:51:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that enumerates and analyzes instruction files, hook commands, declared MCP servers, and agent extensions within a code repository checkout, specifically targeting content addressed to AI agents rather than human reviewers.

## Key Features
- Enumerates instruction files (e.g., CLAUDE.md, AGENTS.md) and their token costs, including nested imports
- Identifies hook commands wired to agent events (e.g., session start, tool use)
- Detects declared MCP servers and flags those fetching code at runtime
- Analyzes agent extensions (skills, commands, subagents) shipped in the repository
- Provides conservative, metadata-only reporting to avoid becoming an injection vector

## Why It Matters for RAG Builders
It exposes hidden instruction surfaces in repositories that AI agents may execute, enabling safer and more transparent code review for AI-driven development workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
