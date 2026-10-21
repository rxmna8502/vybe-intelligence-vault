---
title: "VelvetSP/web-retrieval-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Exa API", "Tavily API", "Firecrawl API", "Camoufox (Playwright-based browser)", "Valkey (optional caching)", "PyPI packaging"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP server", "web retrieval", "AI agents", "source grounding", "tiered fallback"]
source: "https://github.com/VelvetSP/web-retrieval-mcp"
stars: 1
language: "Python"
last_updated: "2026-07-19T11:31:53Z"
discovered_at: "2026-09-01T15:55:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server providing high-fidelity web search and retrieval tools for AI agents, supporting Exa, Tavily, and Firecrawl providers with tiered fallback strategies, explicit provenance tracking, and SSRF guards for reliable source-grounded research.

## Key Features
- Six read-only tools for web search, page fetching, and research discovery with explicit provenance
- Tiered retrieval cascade (Exa → Camoufox → Tavily → Firecrawl) with SSRF guards
- Support for AI/ML paper discovery and developer-source search (GitHub issues, PRs, docs)
- Configurable freshness, domain filtering, and result shaping (full body, concise summary, or grounded answer)
- Local caching via Valkey and cross-platform credential storage options

## Why It Matters for RAG Builders
It provides a portable, inspectable, and provider-agnostic retrieval layer that enhances RAG pipelines with reliable source grounding, fallback strategies, and auditability for AI agents.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Exa API
Automated review identified **Exa API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tavily API
Automated review identified **Tavily API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firecrawl API
Automated review identified **Firecrawl API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Camoufox (Playwright-based browser)
Automated review identified **Camoufox (Playwright-based browser)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Valkey (optional caching)
Automated review identified **Valkey (optional caching)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI packaging
Automated review identified **PyPI packaging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
