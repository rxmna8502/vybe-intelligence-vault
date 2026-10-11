---
title: "Mars535821089-ops/MiniMax-claude-proxy"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "SQLite", "Anthropic API", "Claude Code", "Docker", "Pytest", "MkDocs", "Material for MkDocs", "Mermaid.js"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Claude Code integration", "MiniMax-M3 proxy", "Anthropic protocol compatibility", "local caching", "multi-modal support"]
source: "https://github.com/Mars535821089-ops/MiniMax-claude-proxy"
stars: 0
language: "Python"
last_updated: "2026-08-09T06:57:30Z"
discovered_at: "2026-08-09T06:58:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MiniMax-Claude-Proxy is a local proxy that enables MiniMax-M3 to fully integrate with the Claude Code framework by backfilling six Anthropic-specific protocol features that are otherwise unsupported. It acts as a transparent intermediary, ensuring compatibility without modifying the client or upstream API.

## Key Features
- Implements 6 Anthropic-specific features (Prompt Caching, Extended Thinking, complex tool_use schema, multi-modal support, SSE stability, server-side tools) locally to ensure seamless Claude Code integration with MiniMax-M3
- SQLite-based prefix caching with usage placeholder injection, reducing token usage and latency by up to 217x on cache hits
- Transparent schema flattening and restoration for tool_use parameters, enabling complex nested structures to work correctly
- Multi-modal preprocessing for images and PDFs, converting them into compatible formats for Claude Code
- SSE stabilizer with heartbeat ping and buffered tool_use chunks to prevent long-task interruptions

## Why It Matters for RAG Builders
It enables AI engineers to seamlessly integrate MiniMax-M3 with Claude Code by resolving critical protocol incompatibilities, ensuring full functionality without modifying the client or upstream API.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MkDocs
Automated review identified **MkDocs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Material for MkDocs
Automated review identified **Material for MkDocs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js
Automated review identified **Mermaid.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
