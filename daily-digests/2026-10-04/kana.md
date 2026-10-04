---
title: "longyijdos/kana"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Bun", "Terminal UI (raw terminal, ANSI escape codes)", "MCP (JSON-RPC, Streamable HTTP, stdio)", "OAuth 2.0/OIDC with PKCE", "SSE (Server-Sent Events)", "JSONL (for session persistence)", "TOML (for configuration)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["local-first", "terminal-native", "agent-runtime", "MCP-support", "OAuth-integration"]
source: "https://github.com/longyijdos/kana"
stars: 4
language: "TypeScript"
last_updated: "2026-08-08T10:32:59Z"
discovered_at: "2026-08-08T10:34:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Kana is a local-first, terminal-native personal agent runtime that implements a complete stack from model streaming to tool scheduling, terminal input to differential rendering, and MCP/OAuth transport to session recovery without relying on third-party SDKs or frameworks.

## Key Features
- Self-contained agent runtime with message protocols, model-tool loops, parallel execution, and context compression
- Terminal UI with raw terminal lifecycle, keyboard protocols, Markdown/table rendering, and differential redraw
- Complete MCP stack (JSON-RPC, Streamable HTTP, OAuth 2.0/PKCE) with client and transport implementations
- Provider-agnostic model integration (DeepSeek API, OpenAI Codex OAuth) with streaming, retries, and usage tracking
- Local state management with incremental JSONL session journals, memory, and session forking

## Why It Matters for RAG Builders
Kana provides a lean, in-house runtime for building reliable and debuggable agent systems without vendor lock-in or bloated SDK abstractions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Terminal UI (raw terminal, ANSI escape codes)
Automated review identified **Terminal UI (raw terminal, ANSI escape codes)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (JSON-RPC, Streamable HTTP, stdio)
Automated review identified **MCP (JSON-RPC, Streamable HTTP, stdio)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0/OIDC with PKCE
Automated review identified **OAuth 2.0/OIDC with PKCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL (for session persistence)
Automated review identified **JSONL (for session persistence)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (for configuration)
Automated review identified **TOML (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
