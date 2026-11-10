---
title: "KyaniteHQ/linctl"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Linear API", "OAuth 2.0", "CLI", "GraphQL", "TOML"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Linear integration", "guarded writes", "OAuth security", "CLI tool", "agent-friendly"]
source: "https://github.com/KyaniteHQ/linctl"
stars: 11
language: "Go"
last_updated: "2026-07-13T10:23:15Z"
discovered_at: "2026-07-13T10:24:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
linctl is a Go-based CLI tool designed to provide a secure, agent-friendly interface for Linear (project management) operations. It enforces target-pinned guarded writes, ensuring writes fail closed if the resolved OAuth credential does not match the pinned target, preventing accidental mutations in wrong teams or orgs.

## Key Features
- Target-pinned guarded writes: enforces strict org/team matching for mutations, failing closed on mismatch
- No standing context cost: reads only incur token costs when executed, unlike MCP servers
- Structured, pipeable output: supports JSON, compact, and field-filtered formats for scripting
- Deterministic and secure: no bypass flags, OAuth credential resolution at command time
- Agent-first design: minimal tool definitions (~400 tokens) and deterministic outputs for LLM agents

## Why It Matters for RAG Builders
It provides a secure, agent-friendly way to interact with Linear while preventing accidental writes to the wrong teams or organizations, critical for AI-driven automation.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linear API
Automated review identified **Linear API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
