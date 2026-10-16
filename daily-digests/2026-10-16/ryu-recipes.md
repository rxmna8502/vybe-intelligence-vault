---
title: "amajorai/ryu-recipes"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "HTTP API", "MCP (Model Context Protocol)", "Ghost Core", "Desktop Automation"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["workflow automation", "replayable actions", "frontier model", "desktop scripting", "Ryu ecosystem"]
source: "https://github.com/amajorai/ryu-recipes"
stars: 0
language: "Rust"
last_updated: "2026-08-05T08:31:37Z"
discovered_at: "2026-08-05T08:35:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ryu-recipes provides parameterized, replayable native-desktop automations for the Ryu ecosystem, enabling frontier models to record workflows once and small models to replay them indefinitely. It serves as a thin HTTP surface over Ghost's core workflow engine.

## Key Features
- Parameterized recipe recording and replay for native-desktop workflows
- HTTP API surface for CRUD operations and automation execution
- Out-of-process sidecar architecture for scalability and isolation
- Shared recipe store (`~/.ghost/recipes`) for consistency across components
- Integration with Ghost's core workflow engine via MCP registry

## Why It Matters for RAG Builders
It enables efficient, repeatable automation of desktop workflows by decoupling recording (frontier model) from replay (small model), reducing computational overhead for repetitive tasks.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ghost Core
Automated review identified **Ghost Core** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Desktop Automation
Automated review identified **Desktop Automation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
