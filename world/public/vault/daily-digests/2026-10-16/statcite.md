---
title: "asokore/statcite"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Cloudflare Workers", "REST API", "MCP (Model Context Protocol)", "Apify", "Node.js", "Wrangler (Cloudflare CLI)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["economic statistics", "citation generation", "data verification", "MCP server", "REST API"]
source: "https://github.com/asokore/statcite"
stars: 0
language: "TypeScript"
last_updated: "2026-08-07T23:33:47Z"
discovered_at: "2026-08-07T23:36:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
StatCite provides a free remote MCP server and REST API that delivers official economic statistics with full citations, enabling AI agents to cite sources accurately. It includes a verification tool to validate claimed figures against official data with detailed diagnostics.

## Key Features
- Provides official economic statistics (World Bank, IMF, ECB) with full citations including source, dataset, series ID, and license
- Includes `verify_stat` tool to validate claimed figures against official series with verdicts (match/close/mismatch/cannot_verify)
- Offers both MCP server and REST API endpoints for seamless integration with AI agents and applications
- Transparent fallback mechanisms for data sources with clear disclosure of vintage and limitations
- Pre-registered AI-accuracy benchmark (COVENANT.md) for evaluating verification performance

## Why It Matters for RAG Builders
StatCite ensures AI agents can cite official economic data accurately and verify claims, reducing hallucinations and improving reliability in financial and economic applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apify
Automated review identified **Apify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wrangler (Cloudflare CLI)
Automated review identified **Wrangler (Cloudflare CLI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
