---
title: "malkreide/register-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Model Context Protocol (MCP)", "FastAPI", "httpx", "uv", "Docker", "OpenTelemetry (optional)", "JSON/REST APIs"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP Server", "Swiss Commercial Register", "Due Diligence", "Company Verification", "Public Data"]
source: "https://github.com/malkreide/register-mcp"
stars: 0
language: "Python"
last_updated: "2026-08-02T21:51:51Z"
discovered_at: "2026-08-02T21:55:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server providing AI-native access to Swiss commercial register data (Zefix/Handelsregister) and company-scoped official gazette publications (SHAB + cantonal Amtsblätter), joined via company UID for due diligence and verification use cases.

## Key Features
- AI-native access to Swiss federal commercial register (Zefix) and official gazettes (SHAB/cantonal Amtsblätter) via MCP tools
- Company-scoped UID join between Zefix and gazette data for comprehensive due diligence workflows
- No authentication required for Zefix; SSE deployments enforce bearer-token auth for cloud access
- Bilingual output (Markdown/JSON) with provenance tracking and structured logging
- Containerized deployment with egress allow-list, rate limiting, and optional OpenTelemetry tracing

## Why It Matters for RAG Builders
It enables AI agents to perform Swiss company due diligence and verification by seamlessly integrating commercial register data with official gazette publications via a standardized MCP interface.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry (optional)
Automated review identified **OpenTelemetry (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/REST APIs
Automated review identified **JSON/REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
