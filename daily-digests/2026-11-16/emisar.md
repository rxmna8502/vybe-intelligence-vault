---
title: "AndrewDryga/emisar"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Elixir", "Go", "Phoenix", "PostgreSQL", "Keycloak", "MCP (Model Context Protocol)", "TLS WebSocket", "Ed25519", "Terraform", "Docker"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "High"
tags: ["MCP", "infrastructure automation", "security orchestration", "policy enforcement", "AI agent control"]
source: "https://github.com/AndrewDryga/emisar"
stars: 470
language: "Elixir"
last_updated: "2026-08-01T22:44:17Z"
discovered_at: "2026-08-01T22:55:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
emisar provides a secure MCP (Model Context Protocol) framework for AI agents to interact with infrastructure through pre-declared, policy-bound actions instead of direct shell access. It enforces strict security boundaries via outbound-only runners, content-addressed packs, and host-side enforcement to prevent unauthorized or unsafe operations.

## Key Features
- Declared action packs with schema validation and risk limits to prevent arbitrary command execution
- Outbound-only runners with TLS websocket connections to the control plane, eliminating inbound attack surfaces
- Policy-driven approval workflows for AI agent requests, including conditional and client-attested dispatch
- Content-addressed packs with hash verification to ensure trusted, tamper-proof execution
- Comprehensive audit trails for both control plane and host-side execution attempts

## Why It Matters for RAG Builders
It enables secure, policy-bound interaction between AI agents and infrastructure without exposing shells or inbound ports, critical for RAG builders who need controlled, auditable access to production systems.

## Tech Stack Deep Dive
### Elixir
Automated review identified **Elixir** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Phoenix
Automated review identified **Phoenix** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Keycloak
Automated review identified **Keycloak** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLS WebSocket
Automated review identified **TLS WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519
Automated review identified **Ed25519** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Terraform
Automated review identified **Terraform** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
