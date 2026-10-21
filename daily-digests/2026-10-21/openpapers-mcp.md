---
title: "Kaago/openpapers-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "FastMCP", "httpx", "Pydantic", "OpenAlex API", "CrossRef API", "Unpaywall API", "uv (package manager)", "ruff (linting)", "mypy (type checking)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP server", "scientific literature", "Open Access PDFs", "local-first", "privacy-focused"]
source: "https://github.com/Kaago/openpapers-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-19T13:16:47Z"
discovered_at: "2026-07-19T13:17:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local Model Context Protocol (MCP) server for scientific paper research that integrates OpenAlex, CrossRef, and Unpaywall APIs to provide search, metadata, abstracts, and legal Open Access PDF downloads entirely on your machine. Designed for privacy-conscious users and MCP clients like Claude Desktop or Cursor.

## Key Features
- Integrates three open scholarly APIs (OpenAlex, CrossRef, Unpaywall) into five LLM-callable tools for paper research
- Provides legal Open Access PDF downloads with SSRF-safe, magic-byte-verified, and atomic file handling
- Reconstructs abstracts from OpenAlex's inverted index for lossless retrieval
- Supports privacy mode via `POLITE_POOL=0` to withhold contact email from API requests
- Offers offline testing with 69 mocked tests and optional live API smoke tests

## Why It Matters for RAG Builders
This MCP server simplifies RAG pipelines by providing a local, privacy-conscious interface to fetch and process scientific papers with legal Open Access PDFs, reducing dependency on paywalled or unethical sources.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAlex API
Automated review identified **OpenAlex API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CrossRef API
Automated review identified **CrossRef API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unpaywall API
Automated review identified **Unpaywall API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff (linting)
Automated review identified **ruff (linting)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy (type checking)
Automated review identified **mypy (type checking)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
