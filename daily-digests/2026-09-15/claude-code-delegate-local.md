---
title: "fegone/claude-code-delegate-local"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "FastAPI", "LiteLLM", "uv", "Claude Code", "Asyncio", "HTTPX"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Claude Code", "subagent delegation", "local models", "multi-backend routing"]
source: "https://github.com/fegone/claude-code-delegate-local"
stars: 4
language: "Python"
last_updated: "2026-07-11T20:09:10Z"
discovered_at: "2026-07-11T20:09:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that delegates Claude Code subagents to alternative backends, including local models (LM Studio, llama.cpp, Ollama, vLLM), DeepSeek, MiniMax M3, GLM Coding Plan, AWS Bedrock, or any OpenAI/Anthropic-compatible endpoint. It enables users to offload specific tasks to cheaper, faster, or HIPAA-safe backends while keeping the main Claude Code orchestrator session intact.

## Key Features
- Seamless integration with Claude Code orchestrator without losing Max plan benefits
- 3-tier agent lookup for flexible agent definition scoping (project, skill, global)
- Dual-format backend routing (Anthropic/OpenAI format) with automatic model prefix detection
- Supports parallel task delegation via `delegate_batch` for improved efficiency
- Full tool calling support (read_file, write_file, run_bash) for delegated agents

## Why It Matters for RAG Builders
It enables RAG/AI stack builders to offload specific subagent tasks to cost-effective or compliant local backends while maintaining a unified orchestration session, reducing token costs and improving flexibility.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LiteLLM
Automated review identified **LiteLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Asyncio
Automated review identified **Asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPX
Automated review identified **HTTPX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
