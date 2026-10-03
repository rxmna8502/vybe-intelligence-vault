---
title: "jasp-nerd/marktplaats-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "HTTP Client", "uv (package manager)", "Pytest (testing)", "GitHub Actions (CI/CD)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["MCP server", "classifieds search", "Dutch/Belgian marketplaces", "AI agent integration", "structured data"]
source: "https://github.com/jasp-nerd/marktplaats-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-15T10:47:11Z"
discovered_at: "2026-07-15T10:48:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
marktplaats-mcp is an MCP server that enables AI agents like Claude, Cursor, and Codex to search and interact with Marktplaats and 2dehands, the Dutch and Belgian second-hand classifieds platforms. It provides structured, token-efficient access to listings, seller profiles, and monitoring tools without requiring an API key or account.

## Key Features
- Search listings with filters (price, condition, location, recency, etc.) across two marketplaces (Netherlands and Belgium)
- Retrieve full listing details including images, seller trust signals, and listing metadata
- Monitor new listings with stateless cursors for efficient polling
- Resilient HTTP client with retries, exponential backoff, and rate limit handling
- Zero dependency on official APIs or authentication; uses public endpoints

## Why It Matters for RAG Builders
It provides structured, real-time access to Dutch and Belgian classifieds data, enabling AI agents to perform localized searches and seller vetting for RAG applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Client
Automated review identified **HTTP Client** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest (testing)
Automated review identified **Pytest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
