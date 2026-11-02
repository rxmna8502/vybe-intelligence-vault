---
title: "shanevcantwell/llauncher"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "llama.cpp", "MCP (Model Context Protocol)", "Streamlit", "Typer", "FastAPI", "psutil", "Rich"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP", "llama.cpp", "model management", "multi-surface", "orchestration"]
source: "https://github.com/shanevcantwell/llauncher"
stars: 2
language: "Python"
last_updated: "2026-07-16T17:55:42Z"
discovered_at: "2026-07-16T18:05:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
llauncher is an MCP-first launcher and management tool for llama.cpp `llama-server` instances, providing a unified service layer with MCP, HTTP, CLI, and Streamlit UI interfaces for programmatic and human control of model endpoints.

## Key Features
- Unified service layer (`llauncher/operations/`) with stateless verbs (start, stop, swap, etc.) exposed across MCP, HTTP, CLI, and UI
- MCP server for LLM agent integration with stdio transport and full lifecycle control
- HTTP Agent for multi-node setups with token-based authentication and REST endpoints
- Streamlit UI for human operators with Dashboard, Models, Nodes, and Audit tabs
- CLI (`llauncher`) for scripting and automation with `--json` output support

## Why It Matters for RAG Builders
llauncher simplifies the orchestration and management of llama.cpp model endpoints, enabling seamless integration with AI agents and automation pipelines while providing human-friendly interfaces for operators.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp
Automated review identified **llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamlit
Automated review identified **Streamlit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Typer
Automated review identified **Typer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### psutil
Automated review identified **psutil** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rich
Automated review identified **Rich** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
