---
title: "rex/mcp-rancher"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python 3.12+", "FastMCP", "Pydantic v2", "httpx", "Pyright (strict typing)", "uv (dependency management)", "Model Context Protocol (MCP)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Kubernetes", "Rancher", "MCP server", "Infrastructure automation", "Audit logging"]
source: "https://github.com/rex/mcp-rancher"
stars: 0
language: "Python"
last_updated: "2026-07-21T10:22:43Z"
discovered_at: "2026-07-21T10:24:43Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP Rancher is a capability-aware Model Context Protocol (MCP) server designed to operate Rancher-managed Kubernetes clusters through standardized tooling. It bridges Rancher's dual API planes (Norman and Steve) with a safety-first, audit-logged, and rate-limited interface for discovery, resource management, and operator workflows.

## Key Features
- Capability-aware tooling that adapts to Rancher versions (2.6.5–2.9.3+) without version-specific builds
- 319 pre-defined tools covering discovery, generic CRUD, curated reads/writes, and operator rollups with safety annotations
- Multi-instance support with read-only mode, rate limiting, and confirmation guards for destructive operations
- Structured audit logging, secret masking, and error envelopes for robust security and observability
- Automated tool manifest generation and drift gates to ensure consistency between code and documentation

## Why It Matters for RAG Builders
It provides a standardized, safe, and auditable interface to manage Rancher-managed Kubernetes clusters, enabling AI agents to perform infrastructure operations without compromising security or compatibility.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic v2
Automated review identified **Pydantic v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pyright (strict typing)
Automated review identified **Pyright (strict typing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (dependency management)
Automated review identified **uv (dependency management)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
