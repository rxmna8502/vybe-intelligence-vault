---
title: "dduartee/mcp-searxng-local"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Docker", "SearXNG", "MCP (Model Context Protocol)", "GitHub API", "LRU Cache", "Jest (for testing)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["web search", "MCP server", "SearXNG", "privacy-focused", "zero-cost"]
source: "https://github.com/dduartee/mcp-searxng-local"
stars: 0
language: "TypeScript"
last_updated: "2026-07-15T23:01:18Z"
discovered_at: "2026-07-15T23:02:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP server that enables local web search via self-hosted SearXNG instances with automatic fallback to public instances, providing zero-cost, privacy-preserving search capabilities for AI agents and MCP clients.

## Key Features
- Local and self-hosted SearXNG integration with automatic fallback to public instances for rate limit handling
- Optimized GitHub URL fetching using GitHub API for structured data (metadata, file tree, README) instead of raw HTML parsing
- Advanced search parameters including time ranges, language filters, domain inclusion/exclusion, and safesearch
- LRU caching (5-minute TTL) for search results and GitHub API responses (30-minute TTL) to reduce redundant requests
- Transparent unresponsive engine diagnostics and fallback transparency in responses

## Why It Matters for RAG Builders
It provides a privacy-preserving, zero-cost alternative to paid search APIs like Exa or Brave, enabling AI agents to perform unlimited web searches without API keys or rate limits while keeping data local.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LRU Cache
Automated review identified **LRU Cache** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest (for testing)
Automated review identified **Jest (for testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
