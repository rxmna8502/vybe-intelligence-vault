---
title: "Zuga-Technologies/agentpool-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "FastEmbed", "SQLite-vec", "MCP (Model Context Protocol)", "Docker", "Railway", "ZugaShield (content safety)", "Claude Code"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["content safety", "agent collaboration", "prompt injection prevention", "semantic retrieval", "MCP server"]
source: "https://github.com/Zuga-Technologies/agentpool-mcp"
stars: 1
language: "Python"
last_updated: "2026-07-19T14:48:46Z"
discovered_at: "2026-07-19T14:54:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AgentPool is a hosted MCP server that provides a shared, secure knowledge base for coding agents, preventing prompt injection and data poisoning by screening all writes with a content shield. It enables agents to retrieve ranked prior fixes for errors and contribute verified solutions back to the pool.

## Key Features
- Write-time content shield for prompt injection, leaked secrets, and harmful content detection
- Semantic retrieval of prior fixes using FastEmbed and SQLite-vec with tier-weighted ranking
- Provenance tiers (free/paid/verified) for trust and ranking
- API-key identity system for controlled writes and contributions
- Pure ASCII output for terminal compatibility and minimal token overhead

## Why It Matters for RAG Builders
AgentPool eliminates redundant error-solving in isolated agent sessions while ensuring shared knowledge remains secure and poison-free, making it essential for scalable and trustworthy RAG and AI agent ecosystems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite-vec
Automated review identified **SQLite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Railway
Automated review identified **Railway** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ZugaShield (content safety)
Automated review identified **ZugaShield (content safety)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
