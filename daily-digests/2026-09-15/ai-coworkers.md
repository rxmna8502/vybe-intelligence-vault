---
title: "danieljohnmorris/ai-coworkers"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "SQLite", "MCP (Model Context Protocol)", "OpenAI-compatible APIs", "Prometheus", "GitHub Actions"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["long-running AI", "role-based automation", "boundary enforcement", "dry-run execution", "memory management"]
source: "https://github.com/danieljohnmorris/ai-coworkers"
stars: 1
language: "TypeScript"
last_updated: "2026-08-08T12:35:52Z"
discovered_at: "2026-08-08T12:47:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ai-coworkers is a long-running AI daemon that executes predefined roles with strict boundaries, acting as a persistent AI coworker rather than a chat interface. It performs jobs autonomously based on markdown-defined roles, escalating to humans only when necessary, and integrates with existing AI tools and MCP servers.

## Key Features
- Role definitions via markdown files (no YAML or code changes required)
- Six-tier memory system (working, episodic, semantic, entity, procedural, reflective) with local SQLite storage
- Strict boundaries enforced via BOUNDARIES.md, with dry-run mode for safety
- Adaptive tick loop that minimizes model calls by skipping quiet periods
- Integration with existing AI tools (MCP servers, Hermes, OpenClaw, Vercel Eve, ACP agents)

## Why It Matters for RAG Builders
It provides a robust, boundary-enforced framework for deploying persistent AI agents that perform jobs autonomously while minimizing unnecessary model calls and ensuring human oversight.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
