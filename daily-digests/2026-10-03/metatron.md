---
title: "kerbelp/metatron"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "Git", "Anthropic API", "Docker", "Model Context Protocol (MCP)", "Open Knowledge Format (OKF)", "FastAPI", "React"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["codebase conventions", "agent context", "MCP server", "self-hosted", "decision curation"]
source: "https://github.com/kerbelp/metatron"
stars: 20
language: "Python"
last_updated: "2026-07-14T07:57:09Z"
discovered_at: "2026-07-14T08:00:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Metatron is a self-hosted system that captures a codebase's implementation decisions, conventions, and edge cases as structured records, serving them to coding agents over MCP to enable behavior akin to a senior engineer familiar with the codebase.

## Key Features
- Structured decision records with human-gated curation (candidates vs. canonical decisions)
- Serves conventions and edge cases to agents over MCP for context-aware coding
- Git-native audit trail for decisions (OKF export to markdown files)
- Feedback loop for agent-reported gaps to refine and expand conventions
- Supports both MCP and files-first modes for flexibility in deployment

## Why It Matters for RAG Builders
Metatron provides critical, curated context about a codebase's conventions and edge cases to AI agents, enabling them to write code that aligns with team standards and avoids common pitfalls, significantly improving code quality and reducing debugging time.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open Knowledge Format (OKF)
Automated review identified **Open Knowledge Format (OKF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
