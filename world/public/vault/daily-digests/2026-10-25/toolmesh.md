---
title: "DunkelCloud/ToolMesh"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "MCP (Model Context Protocol)", "OpenFGA", "Redis", "SQLite", "JavaScript (goja)", "Docker", "Prometheus", "YAML"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP gateway", "REST proxy", "authorization", "audit logging", "credential injection"]
source: "https://github.com/DunkelCloud/ToolMesh"
stars: 5
language: "Go"
last_updated: "2026-08-05T16:36:33Z"
discovered_at: "2026-08-05T16:46:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ToolMesh is a self-hosted MCP gateway that enables AI agents to safely interact with enterprise systems by providing a governed, auditable control layer. It replaces unwieldy MCP server wrappers with declarative YAML (DADL) files and enforces credential security, fine-grained authorization, input/output gating, and comprehensive audit logging.

## Key Features
- Declarative API description via DADL YAML files (30 lines replace full MCP servers)
- Fine-grained authorization with OpenFGA (user → plan → tool control)
- Runtime credential injection (secrets never exposed in prompts or configs)
- Input/output gating with JavaScript policies (PII redaction, confidential data blocking)
- Structured audit trail with SQLite and structured logging (slog)

## Why It Matters for RAG Builders
ToolMesh provides the critical governance and security layer that enables safe, auditable AI agent interactions with enterprise systems, bridging the gap between unconstrained tool calls and production-ready deployments.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenFGA
Automated review identified **OpenFGA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript (goja)
Automated review identified **JavaScript (goja)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
