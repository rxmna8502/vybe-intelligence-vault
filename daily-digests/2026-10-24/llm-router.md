---
title: "ypollak2/llm-router"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SQLite", "Ollama", "Gemini", "OpenRouter", "FastAPI", "Click"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["prompt routing", "cost optimization", "local-first", "subscription management", "MCP integration"]
source: "https://github.com/ypollak2/llm-router"
stars: 75
language: "Python"
last_updated: "2026-09-01T07:11:14Z"
discovered_at: "2026-09-01T09:11:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
llm-router is a local-first tool that intercepts and routes AI coding prompts to free or budget-friendly models before they reach premium-tier subscriptions, preserving quota for high-value tasks. It integrates seamlessly with tools like Claude Code, Codex, and Gemini CLI without requiring API keys.

## Key Features
- Zero API keys required for Claude Pro/Max subscriptions, routing via MCP tools
- Free-first fallback chain (Ollama, Gemini Flash, Codex) to reduce costs by 35-80%
- Secrets-aware routing: prompts containing sensitive data are routed to local models only
- Third-party benchmarked on RouterArena for accuracy vs. cost trade-offs
- Supports auto-routing hooks for Claude Code, Codex CLI, and Gemini CLI with manual MCP tools for others

## Why It Matters for RAG Builders
It preserves premium subscription quotas for critical tasks by automatically routing routine prompts to free or low-cost models, directly reducing operational costs for AI-driven development workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini
Automated review identified **Gemini** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Click
Automated review identified **Click** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
