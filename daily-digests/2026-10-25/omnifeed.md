---
title: "kinorai/omnifeed"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Docker", "SearXNG", "crawl4ai", "TOON format", "Algolia HN API", "GitHub REST API", "MCP (Model Context Protocol)", "Open WebUI"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["web crawling", "LLM-friendly", "Reddit engine", "TOON format", "self-hosted"]
source: "https://github.com/kinorai/omnifeed"
stars: 6
language: "Go"
last_updated: "2026-08-08T17:29:45Z"
discovered_at: "2026-08-08T17:33:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Omnifeed is a self-hosted web search and LLM-friendly crawling system that integrates SearXNG for search and crawl4ai for content extraction, with dedicated engines for Reddit, Hacker News, GitHub, and Discourse. It provides a full research loop for AI agents, returning structured, token-efficient content like TOON (a compact format for Reddit comment trees).

## Key Features
- Integrates SearXNG for multi-engine web search (Google, Bing, DuckDuckGo, Reddit) with ranked URL results
- Dedicated Reddit engine returns full comment trees as TOON (~40% smaller than JSON, lossless) without requiring Reddit API keys
- Supports Hacker News, GitHub issues/PRs, and Discourse forums via direct API integration
- Provides MCP server and REST API for seamless integration with AI agents and clients like Open WebUI
- Token-efficient content extraction via crawl4ai with configurable size controls and fallback mechanisms

## Why It Matters for RAG Builders
Omnifeed streamlines the research loop for AI agents by combining search and content extraction into a single self-hosted service, enabling efficient, token-optimized data retrieval from diverse sources like Reddit and Hacker News without API key constraints.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### crawl4ai
Automated review identified **crawl4ai** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOON format
Automated review identified **TOON format** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Algolia HN API
Automated review identified **Algolia HN API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub REST API
Automated review identified **GitHub REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open WebUI
Automated review identified **Open WebUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
