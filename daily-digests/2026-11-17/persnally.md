---
title: "persnally/persnally"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "SQLite", "Node.js", "MCP (Model Context Protocol)", "Docker (implied for local deployment)", "Ollama (for local model integration)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["personalization", "context engine", "local-first", "privacy", "AI integration"]
source: "https://github.com/persnally/persnally"
stars: 2
language: "TypeScript"
last_updated: "2026-07-16T20:00:03Z"
discovered_at: "2026-07-16T20:02:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Persnally is a local-first personal context engine that learns about users from their AI interactions, code, and other activities to provide personalized context to AI tools. It ensures user data remains private and under their control while enabling AI systems to understand and adapt to individual preferences and history.

## Key Features
- Event-sourced architecture with append-only SQLite storage for full provenance and auditability
- Local-first deployment ensuring user data never leaves the machine (except for optional LLM extraction with user-provided keys)
- MCP server integration for seamless AI tool connectivity (Claude, Cursor, etc.)
- Provenance-complete profile synthesis with evidence-linked claims and one-click deletion
- Decay-weighted interest graph and behavior modeling for dynamic personalization

## Why It Matters for RAG Builders
Persnally enables AI tools to provide truly personalized and context-aware interactions by maintaining a user's evolving profile locally, reducing redundant context gathering and improving relevance without compromising privacy.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (implied for local deployment)
Automated review identified **Docker (implied for local deployment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (for local model integration)
Automated review identified **Ollama (for local model integration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
