---
title: "ck3mp3r/nu-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Nushell", "Model Context Protocol (MCP)", "Nix", "Homebrew", "Async Rust", "PTY (Pseudo Terminal)", "Sandboxing"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Nushell integration", "persistent shell", "AI tooling", "modular tools"]
source: "https://github.com/ck3mp3r/nu-mcp"
stars: 8
language: "Nushell"
last_updated: "2026-07-12T02:17:06Z"
discovered_at: "2026-07-12T02:33:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
nu-mcp is an MCP server that exposes Nushell as a Model Context Protocol (MCP) server using Rust, enabling persistent shell execution with state preservation and extensible tooling for AI agents and automation workflows.

## Key Features
- Persistent Nushell shell with state preservation (environment variables, aliases, definitions)
- Extensible tool system via modular Nushell scripts (Kubernetes, ArgoCD, Tmux, Context7, etc.)
- Configurable timeouts and path validation for secure command execution
- Two-tool architecture: stateless `run` and stateful `shell` for concurrent and persistent execution
- Safety sandbox with intelligent path handling and destructive operation warnings

## Why It Matters for RAG Builders
It enables AI agents to execute and manage Nushell commands persistently with state, while providing a secure and extensible tooling system for integrating with infrastructure and development workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nushell
Automated review identified **Nushell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nix
Automated review identified **Nix** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Homebrew
Automated review identified **Homebrew** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Async Rust
Automated review identified **Async Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PTY (Pseudo Terminal)
Automated review identified **PTY (Pseudo Terminal)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sandboxing
Automated review identified **Sandboxing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
