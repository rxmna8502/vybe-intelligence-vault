---
title: "SatGate-io/satgate"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "Python", "JavaScript/TypeScript", "MCP (Model Context Protocol)", "Macaroons (capability tokens)", "Lightning Network (L402/x402)", "Docker", "Kubernetes"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["economic governance", "agent security", "budget enforcement", "MCP proxy", "paid-rail governance"]
source: "https://github.com/SatGate-io/satgate"
stars: 11
language: "TypeScript"
last_updated: "2026-07-18T23:46:38Z"
discovered_at: "2026-07-18T23:52:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SatGate is an economic firewall for AI agents that enforces scoped authority, budgets, and paid-rail governance before allowing agent requests to execute. It acts as a policy enforcement layer for API and MCP tool calls, ensuring agents operate within predefined constraints.

## Key Features
- Capability tokens (Macaroons) for delegatable, scoped authority with built-in caveats like expiry and budget limits
- MCP-aware tool call parsing for granular cost attribution and governance
- Hard budget enforcement with default-deny policies to block requests at zero budget
- Paid-rail governance for L402, x402, API-key billing, and enterprise ledgers without centralizing control
- Lightweight Go proxy with <50ms overhead and drop-in compatibility with existing HTTP/MCP backends

## Why It Matters for RAG Builders
SatGate ensures AI agents operate within strict economic and policy constraints, preventing unauthorized spending or resource access while preserving granular audit trails for RAG and agent orchestration systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript/TypeScript
Automated review identified **JavaScript/TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Macaroons (capability tokens)
Automated review identified **Macaroons (capability tokens)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Lightning Network (L402/x402)
Automated review identified **Lightning Network (L402/x402)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
