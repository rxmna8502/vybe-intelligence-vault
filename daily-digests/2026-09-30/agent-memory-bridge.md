---
title: "zzhang82/Agent-Memory-Bridge"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "WAL (Write-Ahead Logging)", "FTS5 (Full Text Search)", "Model Context Protocol (MCP)", "CLI", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["memory_management", "multi_agent_coordination", "MCP_server", "SQLite_authority", "governed_context"]
source: "https://github.com/zzhang82/Agent-Memory-Bridge"
stars: 4
language: "Python"
last_updated: "2026-07-18T15:52:00Z"
discovered_at: "2026-07-18T15:55:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Memory Bridge (AMB) provides a shared, governed memory layer for coding agents via an MCP-compatible SQLite/WAL-based authority. It enables cross-agent coordination, decision tracking, and context assembly without relying on opaque vector stores or hosted platforms.

## Key Features
- Durable SQLite/WAL-based memory authority with FTS5 and optional embeddings for retrieval
- Cross-client activation receipts for lightweight coordination and provenance tracking
- Governed change model with explicit review, supersession, and deletion policies
- 10 MCP-compatible tools for storing, recalling, and managing project memory and signals
- Task Brief reports for assembling context without automatic durable writeback

## Why It Matters for RAG Builders
AMB provides a local, inspectable, and governed memory layer that enables coding agents to share project decisions, context, and coordination signals without relying on opaque vector stores or hosted platforms, ensuring consistency and traceability across sessions and tools.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WAL (Write-Ahead Logging)
Automated review identified **WAL (Write-Ahead Logging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full Text Search)
Automated review identified **FTS5 (Full Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
