---
title: "stcmain/whats-loaded-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "context optimization", "token cost analysis", "skill auditing", "memory management"]
source: "https://github.com/stcmain/whats-loaded-mcp"
stars: 0
language: "JavaScript"
last_updated: "2026-08-01T20:47:14Z"
discovered_at: "2026-08-01T20:51:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
whats-loaded-mcp is an MCP server that audits and reports what is consuming an AI agent's context window before any user input is provided, including skill descriptions, memory files, and configured MCP servers. It helps identify redundant or costly resources to optimize context usage.

## Key Features
- Reports pre-session context consumption by source (skills, memory files, MCP servers)
- Identifies duplicate skills and calculates recoverable token savings
- Ranks skills by token cost to prioritize cleanup efforts
- Analyzes memory file imports without exposing sensitive content
- Provides deployment flexibility via npm or direct source installation

## Why It Matters for RAG Builders
It helps AI engineers and developers reclaim wasted context window space by identifying and removing redundant or costly skills and memory files before they impact model performance.

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
