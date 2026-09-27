---
title: "jarmstrong158/context-keeper"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "JSON", "Claude Code"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["project memory", "context management", "MCP server", "Claude integration", "structured data"]
source: "https://github.com/jarmstrong158/context-keeper"
stars: 1
language: "Python"
last_updated: "2026-08-01T14:41:43Z"
discovered_at: "2026-08-01T15:01:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Context Keeper is an MCP server that maintains structured project memory for Claude across conversations by recording decisions, pipelines, and constraints in human-editable JSON files. It enables agents to retain context, enforce rules, and retrieve relevant information efficiently.

## Key Features
- Records and retrieves structured project context (decisions, pipelines, constraints) with schema validation
- Supports relevance-ranked retrieval, exact structured filtering, and hybrid (lexical + optional semantic) search
- Enforces quality checks (e.g., minimum rationale length, missing tags) and detects contradictions or duplicates
- Exports project summaries, rules, and snapshots for sharing or offline use
- Integrates with Claude Code via hooks for session-start context injection and path-triggered rules

## Why It Matters for RAG Builders
It ensures AI agents like Claude retain critical project context across sessions, reducing errors and improving consistency in long-running or collaborative workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
