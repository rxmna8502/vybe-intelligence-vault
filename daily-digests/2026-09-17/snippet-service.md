---
title: "wacht-platform/snippet-service"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "Terminal UI (TUI)", "HTTP/WebSocket", "Cloudflare Tunnel", "TOML (configuration)", "msgpack (session persistence)", "OAuth (ChatGPT subscription)", "Docker (optional)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI coding agent", "terminal-based", "remote control", "multi-model support", "durable sessions"]
source: "https://github.com/wacht-platform/snippet-service"
stars: 0
language: "Rust"
last_updated: "2026-07-12T10:20:40Z"
discovered_at: "2026-07-12T10:26:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An open-source AI coding agent that operates in the terminal with a durable TUI and a headless daemon for remote control. Users can drive the agent from their phone or another device, leveraging their own models or subscriptions while maintaining full ownership of their code and data.

## Key Features
- Terminal-native TUI with durable session persistence and checkpointing for resuming or rewinding conversations
- Headless daemon (`serve`) for remote control via authenticated tunnel, enabling mobile/desktop app integration
- Support for multiple AI models (Claude, GPT, Gemini, local models) with configurable profiles and per-conversation switching
- Real tool surface including file operations, shell commands, code mapping, and web search with Exa integration
- Parallel sub-agents (lanes) for scoped work, background process tracking, and self-updating capabilities

## Why It Matters for RAG Builders
It provides a self-hosted, durable, and remotely controllable AI coding agent framework that integrates seamlessly with existing workflows while ensuring full data ownership and model flexibility.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Terminal UI (TUI)
Automated review identified **Terminal UI (TUI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/WebSocket
Automated review identified **HTTP/WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Tunnel
Automated review identified **Cloudflare Tunnel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (configuration)
Automated review identified **TOML (configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### msgpack (session persistence)
Automated review identified **msgpack (session persistence)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth (ChatGPT subscription)
Automated review identified **OAuth (ChatGPT subscription)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (optional)
Automated review identified **Docker (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
