---
title: "tarakanof/Unraid-MCP"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "MCP SDK v2", "GraphQL", "Docker", "FastAPI", "Unraid API"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Unraid integration", "system monitoring", "agent orchestration", "read-only by default"]
source: "https://github.com/tarakanof/Unraid-MCP"
stars: 0
language: "Python"
last_updated: "2026-08-05T22:12:37Z"
discovered_at: "2026-08-05T22:15:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that integrates Unraid systems with MCP-aware agents via Unraid's GraphQL API, enabling read-only monitoring and opt-in management of Unraid resources like arrays, disks, Docker containers, VMs, and notifications.

## Key Features
- Read-only tools for system metrics, array health, Docker/VM stats, and notifications
- Opt-in mutation tools with confirmation requirements for safety (e.g., start/stop array, manage containers)
- Dangerous-tier operations (e.g., disk topology changes) with explicit enablement and confirmation
- MCP resources (`unraid://health`, `unraid://system-info`) and a `triage` prompt for automated diagnostics
- Multi-transport support (stdio, HTTP) with TLS and connectivity guides for secure deployments

## Why It Matters for RAG Builders
It enables AI agents to securely monitor and manage Unraid systems via standardized MCP interfaces, bridging infrastructure management with AI-driven automation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP SDK v2
Automated review identified **MCP SDK v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unraid API
Automated review identified **Unraid API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
