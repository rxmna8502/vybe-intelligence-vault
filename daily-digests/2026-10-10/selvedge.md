---
title: "masondelan/selvedge"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "MCP (Model Context Protocol)", "Agent Trace (open standard)", "Git", "CLI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["AI agent memory", "code provenance", "long-term reasoning capture", "MCP server", "change tracking"]
source: "https://github.com/masondelan/selvedge"
stars: 13
language: "Python"
last_updated: "2026-07-11T17:49:44Z"
discovered_at: "2026-07-11T17:54:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Selvedge is an MCP server that captures live reasoning from AI coding agents (e.g., Claude Code, Cursor) as they make changes, providing long-term memory for AI-coded codebases. It stores structured change events with context in a local SQLite database, enabling queries like 'why was this change made?' even months later.

## Key Features
- Captures agent reasoning live during changes, not inferred post-hoc
- Entity-level granularity (e.g., DB columns, env vars) instead of line-level
- Local SQLite storage with zero external dependencies
- Supports Agent Trace format for interoperability with other tools
- Enforces prior_attempts checks to prevent repeated mistakes

## Why It Matters for RAG Builders
Selvedge preserves the critical 'why' behind AI-generated changes, enabling audits, debugging, and knowledge retention in AI-coded codebases where traditional commit messages and context are often lost.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent Trace (open standard)
Automated review identified **Agent Trace (open standard)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
