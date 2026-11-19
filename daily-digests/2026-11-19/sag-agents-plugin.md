---
title: "vuongdam2k01/sag-agents-plugin"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "REST API", "Git", "CLI", "JSON/YAML configuration"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["knowledge base", "agent integration", "write operations", "safety checks", "MCP server"]
source: "https://github.com/vuongdam2k01/sag-agents-plugin"
stars: 0
language: "Python"
last_updated: "2026-08-01T08:50:31Z"
discovered_at: "2026-08-01T09:06:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A plugin for AI coding agents (Claude Code, Hermes Agent, Codex) that extends the SAG knowledge base with write capabilities, enabling agents to publish durable knowledge without modifying SAG's source code. It adds a safety floor with deterministic checks and integrates seamlessly via MCP servers and CLI tools.

## Key Features
- Read-write interface to SAG via MCP servers (`sag` for read, `sagw` for write)
- Deterministic safety checks (secret scanning, path rules, cost caps) before every upload
- Agent self-assessment and judgment skills to evaluate document durability
- CLI (`sagctl`) and manifest-based configuration for flexible deployment
- No modification required to SAG's source code; operates via REST API

## Why It Matters for RAG Builders
It enables AI agents to safely contribute to a shared knowledge base without compromising SAG's integrity, bridging the gap between read-only retrieval and dynamic knowledge updates.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/YAML configuration
Automated review identified **JSON/YAML configuration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
