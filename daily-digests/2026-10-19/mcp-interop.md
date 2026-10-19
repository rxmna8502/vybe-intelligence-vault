---
title: "git-ksk/mcp-interop"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Model Context Protocol (MCP)", "OAuth 2.0", "CLI", "JSON", "PTY (Pseudo-Terminal)", "GitHub Actions"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP", "interoperability", "remote servers", "OAuth", "CLI testing"]
source: "https://github.com/git-ksk/mcp-interop"
stars: 0
language: "Go"
last_updated: "2026-08-09T08:33:26Z"
discovered_at: "2026-08-09T08:45:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-interop is a cross-client test runner for Remote Model Context Protocol (MCP) servers, enabling live interoperability testing with real MCP clients like Codex CLI, Cursor CLI, and Antigravity CLI to verify connectivity, authentication, initialization, and tool discovery.

## Key Features
- Live interoperability testing with real MCP clients (Codex, Cursor, Antigravity)
- Isolated temporary environments for OAuth and configuration to prevent state leakage
- Four-stage test validation (reach, auth, init, tools) with strict pass/fail criteria
- Explicit OAuth flow support with isolated credential storage
- Deterministic localhost MCP fixture for end-to-end testing

## Why It Matters for RAG Builders
It ensures Remote MCP servers work correctly with real clients before deployment, reducing integration failures in AI stacks.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PTY (Pseudo-Terminal)
Automated review identified **PTY (Pseudo-Terminal)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
