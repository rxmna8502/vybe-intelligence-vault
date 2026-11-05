---
title: "sriinnu/takumi"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "Ratatui", "WebAssembly (WASM)", "NDJSON JSON-RPC", "Unix sockets", "Language Server Protocol (LSP)", "TypeScript (historical)", "macOS Accessibility APIs"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "High"
tags: ["terminal agent", "multi-agent orchestration", "workspace tools", "plugin system", "verification layer"]
source: "https://github.com/sriinnu/takumi"
stars: 0
language: "Rust"
last_updated: "2026-09-02T22:13:02Z"
discovered_at: "2026-09-02T22:15:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Takumi is a terminal-native Rust-based coding agent harness that operates as a client to the Chitragupta control plane daemon. It provides a full-screen TUI for interacting with an agent loop, workspace tools, and plugin systems while enforcing strict boundaries between control, execution, task graph, and learning planes.

## Key Features
- Full-screen Ratatui TUI with streaming transcript, slash commands, and modal approvals
- Daemon-backed agent loop with 18 workspace-scoped tools and MCP/plugin integration
- Witness verifier lane for isolated code-diff review before task completion
- Task graph with delegated nodes, provider/model binding per node, and dependency edges
- Quarantined learning plane for outcome comparison and operator-gated adaptation

## Why It Matters for RAG Builders
Takumi provides a structured, daemon-backed terminal agent framework with strict boundaries for control, execution, and verification, making it essential for building reliable, inspectable AI coding workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ratatui
Automated review identified **Ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAssembly (WASM)
Automated review identified **WebAssembly (WASM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NDJSON JSON-RPC
Automated review identified **NDJSON JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix sockets
Automated review identified **Unix sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Language Server Protocol (LSP)
Automated review identified **Language Server Protocol (LSP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (historical)
Automated review identified **TypeScript (historical)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS Accessibility APIs
Automated review identified **macOS Accessibility APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
