---
title: "thearchitect0x-glitch/ratchet"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Fastify", "PostgreSQL", "Docker", "MCP (Model Context Protocol)", "OpenAPI", "Stripe (optional)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["effect gate", "idempotency", "AI agent safety", "distributed systems", "real-world actions"]
source: "https://github.com/thearchitect0x-glitch/ratchet"
stars: 0
language: "TypeScript"
last_updated: "2026-09-03T08:24:08Z"
discovered_at: "2026-09-03T08:38:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Ratchet is an effect gate for AI agents that ensures real-world actions (e.g., charging a card, sending an email) are attempted at most once across crashes and retries. It provides durable decision records and handles indeterminate states explicitly, preventing duplicate actions without executing them itself.

## Key Features
- Durable decision records for real-world actions to prevent duplicates across crashes and retries
- Explicit handling of indeterminate states with configurable policies (block, retry, probe)
- At-most-once initiation guarantee via database constraints and unique idempotency keys
- Workspace-scoped security with HMAC-peppered API keys and payload fingerprinting
- MCP integration for agent-driven control and reporting

## Why It Matters for RAG Builders
Ratchet ensures AI agents do not perform irreversible or costly actions more than once, providing a critical safety layer for RAG and agent-based systems that interact with the real world.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fastify
Automated review identified **Fastify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Stripe (optional)
Automated review identified **Stripe (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
