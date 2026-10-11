---
title: "PrinceGabriel-lgtm/freshcontext-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Cloudflare Workers", "D1 (Cloudflare SQL)", "KV (Cloudflare Key-Value Store)", "Playwright (for testing)", "npm"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["context freshness", "temporal relevance", "RAG optimization", "decay-adjusted scoring", "source profiling"]
source: "https://github.com/PrinceGabriel-lgtm/freshcontext-mcp"
stars: 11
language: "TypeScript"
last_updated: "2026-07-17T18:02:57Z"
discovered_at: "2026-07-17T18:05:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
FreshContext is a context judgment layer for AI agents that evaluates and ranks retrieved context based on freshness, source reliability, and temporal relevance before it reaches the LLM. It corrects semantic retrieval errors caused by outdated or temporally irrelevant documents using a decay-adjusted relevancy model.

## Key Features
- Decay-Adjusted Relevancy (DAR) engine to score context freshness using source-specific decay constants (e.g., HN half-life of 14h, blogs 29d, academic papers 1.6y)
- Structured FreshContext envelopes for provenance, timestamps, and confidence levels to ensure decision-ready context
- Reference adapters for 20+ source types (GitHub, HackerNews, arXiv, SEC filings, government contracts, etc.) to standardize context input
- Core engine reusable for custom integrations with subpath exports (e.g., `freshcontext-mcp/core`)
- Production-ready Cloudflare Worker deployment for continuous, decay-scored context feeds

## Why It Matters for RAG Builders
FreshContext solves the critical problem of stale or temporally irrelevant context in RAG pipelines by enforcing temporal integrity, ensuring LLMs reason with up-to-date and reliable information.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### D1 (Cloudflare SQL)
Automated review identified **D1 (Cloudflare SQL)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### KV (Cloudflare Key-Value Store)
Automated review identified **KV (Cloudflare Key-Value Store)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright (for testing)
Automated review identified **Playwright (for testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
