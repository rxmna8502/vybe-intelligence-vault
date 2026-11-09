---
title: "hec-ovi/censurado-web-brain"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Docker Compose", "Go", "SQLite", "Nginx", "ComfyUI", "MCP (Model Context Protocol)", "ROCm (AMD GPU)", "Telegram Bot API"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["agentic workflow", "self-hosted newsroom", "LLM orchestration", "editorial pipeline", "MCP server"]
source: "https://github.com/hec-ovi/censurado-web-brain"
stars: 1
language: "Python"
last_updated: "2026-08-07T13:22:44Z"
discovered_at: "2026-08-07T14:19:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted agentic newsroom system that provides a CLI and MCP server for LLM agents to author, edit, and publish articles through a gated editorial workflow. It orchestrates a multi-service stack via Docker Compose, including a backend API, static-site generator, public portal, and optional ComfyUI for image generation.

## Key Features
- Agent-driven CLI and MCP server for article authoring and editing with a gated editorial workflow
- Docker Compose-based orchestration of backend API, static-site generator, public portal, and optional ComfyUI for image generation
- SQLite-backed content store with HTTP API for data persistence and retrieval
- Multi-agent support with persona-driven editorial prompts and step-gate workflows
- 24/7 serve loop with automated failover and health monitoring for continuous operation

## Why It Matters for RAG Builders
It provides a complete, self-hosted agentic control layer for building and deploying AI-driven editorial workflows, enabling RAG builders to integrate structured content generation and publishing pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nginx
Automated review identified **Nginx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ComfyUI
Automated review identified **ComfyUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ROCm (AMD GPU)
Automated review identified **ROCm (AMD GPU)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
