---
title: "othmaratzmueller-bit/mcp-context-toolkit"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Pydantic", "PyYAML", "Markdown", "Git", "Cytoscape.js"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP server", "context injection", "frecency ranking", "markdown stores", "deterministic retrieval"]
source: "https://github.com/othmaratzmueller-bit/mcp-context-toolkit"
stars: 0
language: "Python"
last_updated: "2026-07-19T07:23:02Z"
discovered_at: "2026-07-19T07:29:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A generic MCP server that dynamically injects context into AI agents or editors by serving file-scoped rules, frecency-ranked memory, and navigable link-graphs from plain markdown and YAML stores. It ensures only relevant context is loaded on demand, reducing noise in long-lived sessions.

## Key Features
- File-scoped rules and decisions injected dynamically based on file-path globs and priority
- Frecency-ranked memory recall with hot/cold tracking via sidecar `_usage.json`
- Tiered content storage (project, user, shared) with collision resolution for specificity
- Automatic reloading on file changes and zero-restart freshness
- Dual-compatible hook system for seamless integration with MCP clients like Claude Code and Google Antigravity

## Why It Matters for RAG Builders
It enables AI agents to dynamically pull only the relevant context they need at any given moment, reducing noise and improving accuracy in long-lived sessions by serving rules, decisions, and memory on demand from plain markdown stores.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyYAML
Automated review identified **PyYAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cytoscape.js
Automated review identified **Cytoscape.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
