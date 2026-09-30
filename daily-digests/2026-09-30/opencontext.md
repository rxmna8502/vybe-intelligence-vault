---
title: "slxca/opencontext"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "Node.js", "Markdown", "YAML", "Git"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "project memory", "AI agent context", "markdown storage", "architectural decision records"]
source: "https://github.com/slxca/opencontext"
stars: 8
language: "TypeScript"
last_updated: "2026-09-03T15:30:23Z"
discovered_at: "2026-09-03T15:43:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OpenContext provides persistent, project-local memory for AI coding agents via a lightweight Model Context Protocol (MCP) server. It enables agents to read and mutate durable markdown files inside `.opencontext/` without relying on vector databases or cloud subscriptions, ensuring context retention across sessions.

## Key Features
- Lightweight MCP server for persistent agent context storage in markdown files
- Supports YAML frontmatter for tracking lifecycle status (active, deprecated, superseded)
- Built-in write guards, symlink protections, and input validation for security
- Auto-generates index.md with topic summaries and badges for non-active records
- Configurable via `.opencontext.jsonc` for custom storage paths and security settings

## Why It Matters for RAG Builders
It eliminates context loss for AI agents by providing durable, project-local memory without external dependencies, ensuring consistency in architectural decisions and workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
