---
title: "hybridindie/comfyui_mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "ComfyUI", "Pydantic", "FastAPI", "Docker", "WebSocket", "JSON Schema", "uv (package manager)", "Inspect AI"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP Server", "ComfyUI", "Security", "AI Workflow Automation", "Image Generation"]
source: "https://github.com/hybridindie/comfyui_mcp"
stars: 2
language: "Python"
last_updated: "2026-08-08T17:31:12Z"
discovered_at: "2026-08-08T17:33:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A secure MCP (Model Context Protocol) server for ComfyUI that enables AI assistants to generate images, run workflows, and manage jobs with built-in security controls. It adds layers like workflow inspection, path sanitization, rate limiting, audit logging, and selective API exposure to mitigate risks in existing ComfyUI MCP servers.

## Key Features
- Five-layer security system (workflow inspection, path sanitization, rate limiting, audit logging, selective API exposure)
- Real-time progress tracking via WebSocket with fallback to HTTP polling
- Structured output and rich schemas with Pydantic validation for inputs and outputs
- Agent configuration support (OpenCode) with prebuilt skills and grounding rules
- Unified return envelopes for workflow-submitting tools, eliminating parsing ambiguity

## Why It Matters for RAG Builders
It provides critical security guardrails for AI assistants interacting with ComfyUI, preventing malicious workflow execution and ensuring safe, auditable operations in production environments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ComfyUI
Automated review identified **ComfyUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Inspect AI
Automated review identified **Inspect AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
