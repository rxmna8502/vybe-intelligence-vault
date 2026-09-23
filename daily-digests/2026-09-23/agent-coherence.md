---
title: "Cohexa-ai/agent-coherence"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "TLA+", "LangGraph", "CrewAI", "AutoGen", "OpenAI Agents SDK", "MCP (Model Context Protocol)", "SQLite", "PostgreSQL", "S3"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["agent coordination", "state consistency", "MESI protocol", "concurrency control", "RAG memory integrity"]
source: "https://github.com/Cohexa-ai/agent-coherence"
stars: 10
language: "Python"
last_updated: "2026-07-19T10:20:37Z"
discovered_at: "2026-07-19T10:26:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agent-coherence is a vendor-neutral coordination layer that prevents AI agents from silently overwriting each other's work on shared artifacts like plan.md, memory.json, or store keys. It enforces MESI-style ownership, optimistic commit-CAS, and read-generation fences to ensure consistency across LangGraph, CrewAI, AutoGen, and other agent frameworks.

## Key Features
- MESI-style ownership and invalidation for shared artifacts to prevent silent overwrites
- Optimistic commit-CAS for concurrent writers with typed conflict resolution
- Read-generation fence to block stale writes after crash recovery
- Drop-in replacements for LangGraph stores (e.g., CCSStore) with no framework changes
- Formal verification via TLA+/TLC with mutant testing for invariants

## Why It Matters for RAG Builders
It eliminates silent data corruption in multi-agent systems by enforcing strict consistency guarantees, ensuring RAG pipelines and shared agent memory remain reliable and deterministic.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLA+
Automated review identified **TLA+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CrewAI
Automated review identified **CrewAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AutoGen
Automated review identified **AutoGen** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Agents SDK
Automated review identified **OpenAI Agents SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### S3
Automated review identified **S3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
