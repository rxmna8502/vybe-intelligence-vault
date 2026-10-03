---
title: "tigrino/host-health-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "mTLS", "systemd", "Linux", "Debian packaging", "Journald", "JSON", "Model Context Protocol (MCP)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["health monitoring", "MCP server", "Linux fleet management", "read-only API", "operational tooling"]
source: "https://github.com/tigrino/host-health-mcp"
stars: 1
language: "Go"
last_updated: "2026-08-03T16:17:53Z"
discovered_at: "2026-08-03T16:26:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only health-check surface for Linux host fleets, exposed via MCP (Model Context Protocol) for operator workstations, ChatOps, and automation pipelines. It provides structured, typed JSON responses for operational metrics like system health, storage, network, and security without granting shell access or requiring heavyweight observability tools.

## Key Features
- Read-only health checks for Linux hosts with 19 pre-defined tools (system, storage, network, security, etc.)
- mTLS-secured communication with client certificate authentication and journald audit logging
- Privilege separation via unprivileged daemon and root helper with capability bounding sets
- Structured JSON responses with stable wire schema and per-tool caching
- Debian packaging for server and client components with zero runtime dependencies

## Why It Matters for RAG Builders
It provides a secure, standardized way to query Linux host health metrics for RAG systems without requiring direct shell access or heavy observability tooling.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mTLS
Automated review identified **mTLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux
Automated review identified **Linux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Debian packaging
Automated review identified **Debian packaging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Journald
Automated review identified **Journald** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
