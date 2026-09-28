---
title: "stcmain/whats-running-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Node.js", "TypeScript", "Model Context Protocol (MCP)", "Bash utilities (ps, lsof, launchctl, df)", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "system monitoring", "agent ground truth", "real-time state", "process management"]
source: "https://github.com/stcmain/whats-running-mcp"
stars: 0
language: "JavaScript"
last_updated: "2026-08-01T20:47:13Z"
discovered_at: "2026-08-01T20:51:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that provides real-time ground truth about system state to AI agents, including live processes, listening ports, daemons, and system statistics. It ensures agents operate on accurate, up-to-date information rather than stale or cached data.

## Key Features
- Provides live snapshots of running processes, ports, daemons, and system stats via MCP tools
- Read-only and secure by design, using fixed binary commands with no shell execution
- Cross-platform support (macOS and Linux) with best-effort compatibility
- Configurable agent pattern detection for identifying AI agent processes
- Best-effort, non-blocking operations with 10-second timeouts for reliability

## Why It Matters for RAG Builders
It eliminates the risk of AI agents relying on stale or incorrect system state by providing real-time, OS-level ground truth directly to agent fleets.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash utilities (ps, lsof, launchctl, df)
Automated review identified **Bash utilities (ps, lsof, launchctl, df)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
