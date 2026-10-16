---
title: "systempromptio/systemprompt-template"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "PostgreSQL", "ChaCha20-Poly1305", "JWT", "YAML", "Docker", "MCP", "Claude Bridge", "Anthropic SDK", "OpenAI SDK", "Gemini SDK"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["AI governance", "self-hosted", "audit logging", "secret detection", "compliance"]
source: "https://github.com/systempromptio/systemprompt-template"
stars: 17
language: "Rust"
last_updated: "2026-07-15T10:45:50Z"
discovered_at: "2026-07-15T10:48:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted Rust-based governance and orchestration layer for AI agents that provides authentication, authorization, secret detection, rate limiting, and auditing for AI interactions. Designed for SOC 2, ISO 27001, and HIPAA compliance with a single binary and PostgreSQL dependency.

## Key Features
- Single Rust binary with PostgreSQL for all AI governance operations
- In-process governance pipeline with sub-5ms overhead (JWT validation, RBAC, secret detection, blocklists, rate limiting)
- Credential injection via environment variables only (parent process never touches secrets)
- 43 scripted demos validating security, performance, and compliance claims
- Built-in audit table with 18 columns for identity, scope, tool calls, costs, and deny reasons

## Why It Matters for RAG Builders
It provides a critical governance layer for RAG/AI stacks, ensuring secure, auditable, and compliant AI agent interactions without relying on external SaaS services.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChaCha20-Poly1305
Automated review identified **ChaCha20-Poly1305** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Bridge
Automated review identified **Claude Bridge** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic SDK
Automated review identified **Anthropic SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI SDK
Automated review identified **OpenAI SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini SDK
Automated review identified **Gemini SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
