---
title: "phj1081/EJClaw"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Python", "systemd", "Docker", "Discord API", "Anthropic API", "CLI tools", "MCP (Model Context Protocol)", "OAuth", "1Password (secrets management)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["agent-orchestration", "carry-layer", "MCP-integration", "Discord-bot", "secrets-management"]
source: "https://github.com/phj1081/EJClaw"
stars: 45
language: "TypeScript"
last_updated: "2026-07-15T19:58:26Z"
discovered_at: "2026-07-15T20:08:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
EJClaw v2 is a thin wrapper and carry repository for the upstream NanoClaw agent framework, part of the EYEJOKER stack. It provides minimal customizations like a host-executor MCP, Discord adapter, and gpt-proxy provider to extend NanoClaw's functionality while adhering to strict upstream-first principles.

## Key Features
- Minimal customization over upstream NanoClaw with carry-based patches for extensibility
- Host-executor MCP for secure host-level operations with audit logging and token injection
- gpt-proxy provider for Anthropic-compatible API endpoints via Codex OAuth
- Discord adapter for real-time agent interactions and scheduling
- Strict upstream-first development model with rebase-friendly carry commits

## Why It Matters for RAG Builders
EJClaw provides a lightweight but powerful way to extend and orchestrate NanoClaw agents while maintaining upstream compatibility, making it essential for teams needing custom agent behaviors without forking the core framework.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord API
Automated review identified **Discord API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools
Automated review identified **CLI tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### 1Password (secrets management)
Automated review identified **1Password (secrets management)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
