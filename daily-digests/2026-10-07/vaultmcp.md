---
title: "Axiler-Lab/vaultmcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Docker", "PostgreSQL", "Redis", "GitHub OAuth", "AES-256-GCM (encryption)", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["secret management", "MCP gateway", "credential vault", "AI IDE integration", "encryption"]
source: "https://github.com/Axiler-Lab/vaultmcp"
stars: 0
language: "TypeScript"
last_updated: "2026-07-20T03:30:41Z"
discovered_at: "2026-07-20T03:37:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
VaultMCP is an encrypted secret vault and MCP gateway designed to centralize and secure API credentials for AI IDEs. It allows users to store provider credentials once and connect their IDEs to a single endpoint, ensuring secrets are decrypted only when calling upstream MCP servers.

## Key Features
- Centralized encrypted secret storage with AES-256-GCM encryption at rest
- Server-side secret injection for MCP upstream calls, keeping raw keys out of IDEs
- Support for OAuth and personal access tokens for authentication
- Namespaced tools (e.g., `aws__tool_name`) for seamless integration with MCP clients
- Optional CLI for injecting shared workspace secrets into local development environments

## Why It Matters for RAG Builders
VaultMCP eliminates the risk of exposing raw API keys in AI IDE configurations by centralizing and encrypting secrets, ensuring secure and auditable access for RAG and AI stack builders.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub OAuth
Automated review identified **GitHub OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM (encryption)
Automated review identified **AES-256-GCM (encryption)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
