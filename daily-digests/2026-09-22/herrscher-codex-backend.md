---
title: "Herrscherd/herrscher-codex-backend"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Codex CLI", "JSONL", "TOML", "MCP (Model Context Protocol)"]
quality_score: 7
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Codex integration", "local LLM backend", "Herrscher plugin", "prompt processing", "model gateway"]
source: "https://github.com/Herrscherd/herrscher-codex-backend"
stars: 0
language: "Go"
last_updated: "2026-08-04T13:03:40Z"
discovered_at: "2026-08-04T13:03:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A backend plugin for the Herrscher framework that integrates with the local Codex CLI to process prompts and generate responses. It operates in either stream or oneshot mode, driving the Codex binary without exposing API keys or external endpoints.

## Key Features
- Drives local Codex CLI for prompt processing without external API calls
- Supports two modes: stream (persistent server) and oneshot (per-message execution)
- Dynamically configures Codex for gateway or native routes via temporary CODEX_HOME directories
- Exposes model catalog through Manifest.Models for host integration
- Handles session resumption and thread persistence via ResumeToken

## Why It Matters for RAG Builders
It enables seamless integration of local Codex models into RAG pipelines while maintaining security and flexibility for AI stack builders.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex CLI
Automated review identified **Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
