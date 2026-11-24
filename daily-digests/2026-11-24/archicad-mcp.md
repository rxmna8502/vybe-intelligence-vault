---
title: "Boti-Ormandi/archicad-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Tapir JSON API", "Asyncio", "ruff", "mypy", "pytest", "Pydantic", "rapidfuzz"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Archicad automation", "MCP server", "Python scripting", "Tapir API", "AI integration"]
source: "https://github.com/Boti-Ormandi/archicad-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-20T21:07:25Z"
discovered_at: "2026-07-20T21:10:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP server that bridges AI assistants with Archicad via the Tapir JSON API, enabling automation through Python scripting. It exposes 173 Archicad commands as a single `execute_script` tool, allowing AI to write complex, multi-step workflows with full async access and dynamic documentation.

## Key Features
- Single `execute_script` tool for all 173 Archicad commands, enabling complex multi-step workflows in a single round-trip
- Dynamic documentation generation from live Archicad schemas, ensuring accuracy and reducing stale docs
- Multi-instance discovery and support for parallel Archicad projects via port scanning
- Full-text search with typo tolerance for command discovery and property lookups
- Security modes (unrestricted/sandboxed) with configurable file access restrictions

## Why It Matters for RAG Builders
It enables AI assistants to directly automate and query Archicad projects through a unified scripting interface, reducing tool fragmentation and simplifying complex workflows for architecture and engineering teams.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tapir JSON API
Automated review identified **Tapir JSON API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Asyncio
Automated review identified **Asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy
Automated review identified **mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rapidfuzz
Automated review identified **rapidfuzz** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
