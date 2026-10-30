---
title: "sunerpy/zuno"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "SQLite", "WASI", "ACP (Agent Communication Protocol)", "HTTP", "Bubblewrap (Linux sandboxing)", "ripgrep (rg)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["coding agent", "Rust", "durable sessions", "sandboxing", "multi-provider"]
source: "https://github.com/sunerpy/zuno"
stars: 2
language: "Rust"
last_updated: "2026-09-02T01:59:43Z"
discovered_at: "2026-09-02T02:12:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Zuno is a local, durable Rust-based coding agent with a terminal interface, headless execution, and multi-surface support (TUI, ACP, HTTP). It enables persistent agent sessions, explicit command authority, and provider-agnostic LLM interactions while enforcing sandboxing and permissions.

## Key Features
- Durable session state with SQLite persistence for uninterrupted workflows
- Explicit command authority with OS confinement and risk checks
- Multi-surface support (TUI, headless, ACP, HTTP) with unified runtime
- Provider-agnostic LLM interactions (OpenAI, Anthropic, Google, Bedrock, etc.)
- Modular component-based runtime with WASI and native Rust extension support

## Why It Matters for RAG Builders
Zuno provides a robust, local-first framework for building secure, persistent, and provider-agnostic coding agents essential for scalable RAG and AI automation pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASI
Automated review identified **WASI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACP (Agent Communication Protocol)
Automated review identified **ACP (Agent Communication Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubblewrap (Linux sandboxing)
Automated review identified **Bubblewrap (Linux sandboxing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ripgrep (rg)
Automated review identified **ripgrep (rg)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
