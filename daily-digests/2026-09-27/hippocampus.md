---
title: "z10-labs/hippocampus"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Markdown", "Embedding models", "MCP (Model Context Protocol)", "Git"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["decision memory", "MCP server", "AI coding agents", "architectural decisions", "documentation"]
source: "https://github.com/z10-labs/hippocampus"
stars: 0
language: "Python"
last_updated: "2026-08-03T16:24:42Z"
discovered_at: "2026-08-03T16:25:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hippocampus is an MCP server that provides decision memory for AI coding agents by recording, querying, and reasoning about architectural decisions in a repository. It enables agents to recall past decisions, dependencies, and trade-offs before making new choices.

## Key Features
- Records decisions as plain markdown files in `.decisions/records/` for version control and readability
- Provides five MCP tools (`query`, `log`, `classify`, `list`, `chain`) for decision retrieval and logging
- Supports decision graph traversal (inbound/outbound relationships) to understand dependencies and blast radius
- Offline-first with local embeddings and no external dependencies
- Validated against autonomous agents in a real-world TypeScript job processor scenario

## Why It Matters for RAG Builders
It ensures AI agents make informed decisions by preserving institutional knowledge and reasoning about past architectural choices, reducing redundant debates and errors.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embedding models
Automated review identified **Embedding models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
