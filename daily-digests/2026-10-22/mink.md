---
title: "fierceX/mink"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "Tokio", "DeepSeek API", "OpenAI-compatible APIs", "Python SDK", "TUI (Terminal UI)", "JSONL", "WASI (WebAssembly System Interface)", "nsjail", "bubblewrap", "macOS sandbox-exec"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI agent runtime", "Rust-native", "terminal-first", "embeddable", "tool orchestration"]
source: "https://github.com/fierceX/mink"
stars: 0
language: "Rust"
last_updated: "2026-08-03T16:22:45Z"
discovered_at: "2026-08-03T16:25:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mink is a Rust-native, terminal-first, embeddable AI agent runtime designed for both CLI and system integration. It provides a unified runtime kernel for REPL, TUI, Python SDK, and Rust library use cases, supporting long-context tasks, persistent sessions, and secure tool execution.

## Key Features
- Unified runtime kernel shared across CLI, REPL, TUI, Python SDK, and Rust embedding with identical semantics
- Persistent session management with non-destructive context compression and long-task support
- Secure tool execution with process-level sandboxing (Linux nsjail/bubblewrap, macOS sandbox-exec) and CPython WASI isolation
- Anchored Edit protocol for reliable file modifications with line-level hashing and conflict prevention
- Built-in tool catalog with semantic capability modeling, approval workflows, and resource routing (artifact://, skill://, etc.)

## Why It Matters for RAG Builders
Mink provides a robust, embeddable runtime for AI agents with strong focus on security, persistence, and unified semantics across interfaces, making it ideal for building production-grade RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek API
Automated review identified **DeepSeek API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python SDK
Automated review identified **Python SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Terminal UI)
Automated review identified **TUI (Terminal UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASI (WebAssembly System Interface)
Automated review identified **WASI (WebAssembly System Interface)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nsjail
Automated review identified **nsjail** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### bubblewrap
Automated review identified **bubblewrap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS sandbox-exec
Automated review identified **macOS sandbox-exec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
