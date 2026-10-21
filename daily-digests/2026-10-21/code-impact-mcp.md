---
title: "vk0dev/code-impact-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "ts-morph", "MCP (Model Context Protocol)", "Husky", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["pre-commit", "dependency analysis", "blast radius", "AI code safety", "local-first"]
source: "https://github.com/vk0dev/code-impact-mcp"
stars: 1
language: "TypeScript"
last_updated: "2026-07-14T02:05:41Z"
discovered_at: "2026-07-14T02:13:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
CodeImpact MCP is a fast pre-commit dependency gate for AI-assisted code changes, providing PASS/WARN/BLOCK verdicts to assess the safety of commits by analyzing dependency graphs. It operates locally without databases or heavy infrastructure, focusing on blast-radius triage for multi-file edits.

## Key Features
- Fast PASS/WARN/BLOCK verdicts for commit safety checks
- Lightweight in-memory dependency graph with no database
- Supports TypeScript/JavaScript (full graph) and Python (limited)
- Pre-commit hook integration for automated gate checks
- Risk scoring (0-1) and affected file summaries

## Why It Matters for RAG Builders
It provides a critical safety gate for AI-generated code changes by quickly assessing dependency risks before commits, reducing the likelihood of breaking changes in production.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ts-morph
Automated review identified **ts-morph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Husky
Automated review identified **Husky** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
