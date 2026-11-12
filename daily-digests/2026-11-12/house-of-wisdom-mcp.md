---
title: "EzzoHamdan/house-of-wisdom-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python 3.10+", "Model Context Protocol (MCP)", "OpenRouter", "Ollama", "OpenAI-compatible endpoints", "YAML (for configuration)", "uv/uvx (package manager)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["multi-model consultation", "parallel querying", "model diversity", "MCP server", "context protocol"]
source: "https://github.com/EzzoHamdan/house-of-wisdom-mcp"
stars: 1
language: "Python"
last_updated: "2026-07-19T19:08:24Z"
discovered_at: "2026-07-19T19:13:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that queries multiple AI model families in parallel for the same question, returning unmerged, independent perspectives without synthesis or ranking. Inspired by the medieval Bayt al-Hikma, it enables diverse model viewpoints for critical decision-making.

## Key Features
- Parallel querying of multiple AI model families (OpenAI, Anthropic, Google, DeepSeek, local Ollama, etc.) for the same question
- Three operational modes: scribe (no tools), translator (read-only with strict scope), and scholar (read-only with flexible exploration)
- Returns unmerged, independent perspectives from each model for orchestrator weighing
- Supports read-only filesystem access in translator/scholar modes to analyze codebases
- Configurable model roster with budget controls for tool iterations and concurrency

## Why It Matters for RAG Builders
It enables RAG builders to gather diverse, unfiltered model perspectives on critical queries, reducing bias and improving decision-making by leveraging multiple AI model families simultaneously.

## Tech Stack Deep Dive
### Python 3.10+
Automated review identified **Python 3.10+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible endpoints
Automated review identified **OpenAI-compatible endpoints** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML (for configuration)
Automated review identified **YAML (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv/uvx (package manager)
Automated review identified **uv/uvx (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
