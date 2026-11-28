---
title: "ljchang/mecha"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "CLI", "TOML", "HTTP", "OAuth", "Docker", "Bubblewrap (bwrap)", "JSON/JSONL"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["agent harness", "multi-provider", "MCP tools", "sandboxing", "RAG pipeline"]
source: "https://github.com/ljchang/mecha"
stars: 0
language: "Rust"
last_updated: "2026-08-07T18:50:53Z"
discovered_at: "2026-08-07T18:57:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mecha is a standalone agent harness written in Rust, designed to provide a reusable loop for AI agents with support for multiple providers, MCP tools, and built-in safety features. It offers CLI, library, and batch runner interfaces for executing tasks with configurable permissions and sandboxing.

## Key Features
- Provider-agnostic agent loop supporting Anthropic, OpenAI-compatible, and local models (llama-server, vLLM, Ollama)
- Built-in tools (filesystem, shell, HTTP, todo) with strict path jail and sandboxing (none, bwrap, Docker)
- MCP integration for extensibility (e.g., Gmail, Google Calendar, Outlook via mecha-mail)
- Advanced permission modes (ask, allow, read-only) and policy hooks for lifecycle control
- Batch processing, scheduled triggers, eval rig, and learning/reflection tools for iterative improvement

## Why It Matters for RAG Builders
mecha provides a robust, reusable foundation for building RAG pipelines with multi-model support, MCP tool integration, and strict safety controls, reducing development overhead for AI engineers.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubblewrap (bwrap)
Automated review identified **Bubblewrap (bwrap)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/JSONL
Automated review identified **JSON/JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
