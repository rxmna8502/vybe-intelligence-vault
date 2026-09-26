---
title: "sanlee-ys/kb-agent"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "ChromaDB", "Anthropic API", "FastAPI", "Gradio", "Model Context Protocol (MCP)", "OpenTelemetry", "all-MiniLM-L6-v2 (embedding model)", "uv (dependency manager)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["RAG", "knowledge base", "agent framework", "MCP server", "tool-use"]
source: "https://github.com/sanlee-ys/kb-agent"
stars: 0
language: "Python"
last_updated: "2026-08-09T23:29:01Z"
discovered_at: "2026-08-09T23:35:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
kb-agent is a personal knowledge base system that auto-generates and indexes project documentation using RAG, enabling an AI agent to answer questions about projects and dependencies. It supports tool-use for interacting with external services and exposes a local vector store via an MCP server.

## Key Features
- Auto-generates Markdown stubs for projects and dependencies using Anthropic API
- Local vector store (ChromaDB) with incremental indexing and retrieval evaluation
- AI agent with tool-use capabilities (search_kb, list_projects, classify_snippet, search_notes)
- Built-in MCP server for integration with MCP-compatible clients
- Observability via OpenTelemetry tracing for distributed tool-use loops

## Why It Matters for RAG Builders
It provides a self-contained, measurable RAG pipeline with tool-use capabilities and MCP integration, enabling AI agents to interact with both static knowledge and live project services.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gradio
Automated review identified **Gradio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### all-MiniLM-L6-v2 (embedding model)
Automated review identified **all-MiniLM-L6-v2 (embedding model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (dependency manager)
Automated review identified **uv (dependency manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
