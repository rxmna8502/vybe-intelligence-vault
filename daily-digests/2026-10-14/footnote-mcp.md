---
title: "KazKozDev/footnote-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Playwright", "Tavily API", "Brave API", "Google Custom Search JSON API", "DuckDuckGo", "Bing", "Pandas", "PyTesseract", "Ollama", "Docker"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["claim verification", "web research", "MCP server", "source grounding", "structured data extraction"]
source: "https://github.com/KazKozDev/footnote-mcp"
stars: 1
language: "Python"
last_updated: "2026-07-11T17:45:56Z"
discovered_at: "2026-07-11T17:54:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server designed for source-grounded web research, enabling discovery, extraction, and verification of claims against their sources. It prioritizes trustworthiness by validating claims with offline heuristics or LLMs, and supports structured data extraction from tables, APIs, and files.

## Key Features
- 42 tools over stdio MCP for discovery, reading, structured data extraction, and claim verification
- Automated claim validation against source text using offline heuristics or LLMs (Ollama)
- Graceful degradation with no API keys required (scraped search + headless browser fallback)
- Persistent source caching with provenance and research memory
- Sandboxed extraction recipes for controlled parsing of complex or JS-heavy pages

## Why It Matters for RAG Builders
It provides critical claim verification and source grounding capabilities essential for building reliable RAG systems that require factual accuracy and traceability.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tavily API
Automated review identified **Tavily API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Brave API
Automated review identified **Brave API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Custom Search JSON API
Automated review identified **Google Custom Search JSON API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDuckGo
Automated review identified **DuckDuckGo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bing
Automated review identified **Bing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pandas
Automated review identified **Pandas** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTesseract
Automated review identified **PyTesseract** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
