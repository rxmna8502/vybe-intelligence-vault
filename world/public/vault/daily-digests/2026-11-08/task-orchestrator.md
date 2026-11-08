---
title: "jpicklyk/task-orchestrator"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Kotlin", "MCP (Model Context Protocol)", "SQLite", "Docker", "REST API", "YAML", "JWKS (for actor authentication)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["workflow enforcement", "multi-agent orchestration", "MCP server", "dependency graph", "actor attribution"]
source: "https://github.com/jpicklyk/task-orchestrator"
stars: 196
language: "Kotlin"
last_updated: "2026-07-14T18:00:52Z"
discovered_at: "2026-07-14T18:01:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP Task Orchestrator is an MCP-compatible server that enforces workflow discipline for AI agents by blocking actions that violate server-defined quality gates, dependency rules, or actor attribution requirements. It provides a persistent work item graph with structured state management, enabling reliable multi-agent collaboration without prompt-dependent compliance.

## Key Features
- Server-enforced quality gates blocking non-compliant actions (e.g., advancing tasks without required notes)
- Persistent work item graph with hierarchical dependencies and atomic state transitions
- Actor attribution and auditing with optional JWKS-based authentication
- Composable traits and YAML-based workflow schemas for flexible rule definition
- Full-text search, session continuity via `get_context()`, and REST API for direct integration

## Why It Matters for RAG Builders
It provides critical infrastructure for RAG/AI stacks by enforcing structural workflow rules at the server level, ensuring reliable multi-agent collaboration without relying on prompt compliance or conversation history.

## Tech Stack Deep Dive
### Kotlin
Automated review identified **Kotlin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWKS (for actor authentication)
Automated review identified **JWKS (for actor authentication)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
