---
title: "InseeFrLab/McpDiffusion"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "Uvicorn", "SPARQL", "Elasticsearch", "Docker", "FastAPI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "INSEE data", "statistical analysis", "LLM integration", "SPARQL endpoint"]
source: "https://github.com/InseeFrLab/McpDiffusion"
stars: 1
language: "Python"
last_updated: "2026-08-06T09:38:16Z"
discovered_at: "2026-08-06T09:42:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
McpDiffusion is a Model Context Protocol (MCP) server that exposes INSEE's public data sources to Large Language Models, enabling seamless integration with LLM clients via a single HTTP endpoint. It aggregates three distinct INSEE data sources—RMES, MELODI, and insee.fr—into unified tools for statistical analysis and concept definitions.

## Key Features
- Single MCP endpoint exposing INSEE publications, datasets, and concept definitions via FastMCP
- Supports three data sources: RMES (SPARQL), MELODI (REST/Elasticsearch), and insee.fr (HTTP scraping)
- Auto-registered tools with structured logging and per-tool call tracing
- Dockerized deployment with automated image publishing on GitHub
- Comprehensive LLM usage guide (SKILL.md) for tool selection and workflow patterns

## Why It Matters for RAG Builders
It enables LLMs to directly access and query authoritative French statistical data, enhancing the accuracy and relevance of AI-driven insights for users in France and beyond.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Uvicorn
Automated review identified **Uvicorn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SPARQL
Automated review identified **SPARQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Elasticsearch
Automated review identified **Elasticsearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
