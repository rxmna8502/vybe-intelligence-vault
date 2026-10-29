---
title: "FI-Mihej/codebase-agent-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "OpenAI-compatible APIs", "Qdrant (Vector DB)", "SQLite", "FastEmbed", "uv (Package Manager)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["code analysis", "token efficiency", "MCP server", "vector caching", "AI agent delegation"]
source: "https://github.com/FI-Mihej/codebase-agent-mcp"
stars: 1
language: "Python"
last_updated: "2026-08-02T13:45:38Z"
discovered_at: "2026-08-02T13:49:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
CodebaseAgent-MCP is an MCP server that delegates large codebase analysis to a dedicated OpenAI-compatible LLM, reducing context size, latency, and token costs for AI coding agents. It integrates with local or cloud LLMs and supports optional Qdrant-based caching for semantic retrieval of code entities.

## Key Features
- Token-efficient codebase analysis by delegating to a dedicated LLM
- Optional Qdrant-based RAG caching for semantic retrieval of code entities
- Sandboxed filesystem access scoped to configured libraries
- Pluggable external MCP tools and async background jobs with SQLite persistence
- Works with local (LM Studio, llama.cpp) and cloud OpenAI-compatible LLMs

## Why It Matters for RAG Builders
It drastically reduces token usage and context size for AI coding agents by offloading codebase analysis to a dedicated LLM, making RAG pipelines more cost-effective and efficient.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant (Vector DB)
Automated review identified **Qdrant (Vector DB)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Package Manager)
Automated review identified **uv (Package Manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
