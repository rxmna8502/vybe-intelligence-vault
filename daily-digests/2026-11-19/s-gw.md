---
title: "sgateway/s-gw"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Rust", "Swift", "MCP (Model Context Protocol)", "Keychain (macOS)", "Windows Credential Manager", "1Password", "Electron", "CLI", "Web UI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["credential management", "agent security", "local approval", "sanitized output", "MCP integration"]
source: "https://github.com/sgateway/s-gw"
stars: 8
language: "TypeScript"
last_updated: "2026-07-12T18:56:59Z"
discovered_at: "2026-07-12T19:02:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
s-gw is a local credential control system for coding agents that enables secure approval of bounded actions without exposing raw credentials. It acts as a gateway between agents and credential stores, injecting secrets only into approved child processes and returning sanitized output.

## Key Features
- Converts raw credentials into typed handles for safe agent reference
- Local approval workflow for scoped credential access
- Injects secrets only into approved child processes on the same machine
- Output sanitization to prevent raw secret exposure to agents
- Multi-platform support (macOS, Windows, Linux) with native UI and CLI

## Why It Matters for RAG Builders
s-gw is essential for RAG/AI stack builders because it mitigates the risk of credential leakage to AI agents while enabling secure, controlled access to sensitive resources.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swift
Automated review identified **Swift** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Keychain (macOS)
Automated review identified **Keychain (macOS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows Credential Manager
Automated review identified **Windows Credential Manager** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### 1Password
Automated review identified **1Password** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Web UI
Automated review identified **Web UI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
