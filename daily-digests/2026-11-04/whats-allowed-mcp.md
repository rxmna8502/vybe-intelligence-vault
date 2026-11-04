---
title: "stcmain/whats-allowed-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "npm", "JSON"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["permissions", "MCP server", "Claude Code", "rule analysis", "security"]
source: "https://github.com/stcmain/whats-allowed-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-08-01T20:47:43Z"
discovered_at: "2026-08-01T20:51:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
whats-allowed-mcp is an MCP server that analyzes and visualizes permission rules across multiple settings files for AI coding agents, identifying rules that appear to do something but are actually ignored due to misconfiguration or syntax issues.

## Key Features
- Analyzes merged permission rules across multiple settings files (machine-wide, project, local, user, and session files)
- Identifies rules that are accepted but never consulted (e.g., Write, NotebookEdit, Glob path rules)
- Detects unanchored globs, misconfigured tool constraints, and unreachable allow rules
- Provides tools to inspect rule sources, findings, and unattended surfaces (default modes, blanket allows)
- Outputs findings linked to documented Anthropic behavior with no speculative or heuristic-based judgments

## Why It Matters for RAG Builders
It helps AI engineering teams audit and debug permission rules to ensure their agents' security policies are actually enforced, not silently ignored.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
