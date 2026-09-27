---
title: "chanceryhq/chancery"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "MCP (Model Context Protocol)", "Cosign (for signing)", "Docker", "REST API", "CLI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["identity provider", "agent governance", "delegation", "audit trail", "MCP enforcement"]
source: "https://github.com/chanceryhq/chancery"
stars: 25
language: "Go"
last_updated: "2026-07-20T17:50:39Z"
discovered_at: "2026-07-20T18:01:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Chancery is a self-hosted identity provider for AI agents that enforces strict delegation, revocation, and tamper-evident auditing. It ensures agents operate with immutable identities, restricted authority, and secure credential management, preventing prompt injection and unauthorized actions.

## Key Features
- Immutable agent identities with revocable instances and owner attribution
- Writs-based authority delegation that cannot be widened, only restricted
- In-path enforcement for MCP servers with real-time policy checks
- Tamper-evident audit trails that agents cannot modify
- Sealed credentials injected into tool servers, not agent contexts

## Why It Matters for RAG Builders
Chancery provides critical identity, authority, and audit controls for AI agents, ensuring secure and accountable operations in RAG and agentic systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign (for signing)
Automated review identified **Cosign (for signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
