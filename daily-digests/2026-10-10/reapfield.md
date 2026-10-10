---
title: "PedroHenriqueNS/reapfield"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Playwright", "Anthropic API", "CSS Selectors", "LLM (Large Language Model)", "TOML (for configuration)", "Pytest (for testing)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["web scraping", "data extraction", "LLM caching", "structured output", "automated selectors"]
source: "https://github.com/PedroHenriqueNS/reapfield"
stars: 0
language: "Python"
last_updated: "2026-08-06T15:12:38Z"
discovered_at: "2026-08-06T15:20:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Reapfield is a web scraping tool that converts URLs and plain-language field specifications into structured JSON output, including pages rendered via JavaScript. It intelligently derives CSS selectors using an LLM once per field per domain, caches them for future use, and avoids unnecessary LLM calls by replaying cached selectors until they fail validation.

## Key Features
- Derives CSS selectors using an LLM once per field per domain, then caches them for deterministic replay
- Supports JavaScript-rendered pages via Playwright
- Configurable field types (e.g., float, bool, int) with inline annotations
- Respects robots.txt and implements rate limiting for ethical scraping
- Provides both CLI and MCP server interfaces for integration with AI agents

## Why It Matters for RAG Builders
Reapfield reduces the cost and complexity of web scraping for RAG pipelines by automating selector derivation and caching, ensuring reliable and repeatable data extraction without constant LLM calls.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSS Selectors
Automated review identified **CSS Selectors** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Large Language Model)
Automated review identified **LLM (Large Language Model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (for configuration)
Automated review identified **TOML (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest (for testing)
Automated review identified **Pytest (for testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
