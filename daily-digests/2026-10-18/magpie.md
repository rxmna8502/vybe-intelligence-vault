---
title: "MBemera/magpie"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Cheerio", "Puppeteer", "MCP SDK", "JSON-LD parsing"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["web scraping", "security-first", "token budgeting", "MCP server", "RAG pipeline"]
source: "https://github.com/MBemera/magpie"
stars: 0
language: "TypeScript"
last_updated: "2026-07-12T05:54:03Z"
discovered_at: "2026-07-12T05:56:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Magpie is a local, security-first web scraper designed for AI agents, extracting clean, token-budgeted content while treating all web data as potentially hostile. It prioritizes safety, transparency, and efficiency by enforcing strict boundaries between trusted agent instructions and untrusted web content.

## Key Features
- Local, keyless operation with no external API calls or telemetry
- Explicit trust boundaries between agent instructions and untrusted web content
- Token budgeting with detailed usage reporting and truncation warnings
- Multiple lenses for tailored content extraction (article, meta, headings, links, analysis, full)
- Built-in safety controls: SSRF protection, robots.txt enforcement, and fail-closed politeness

## Why It Matters for RAG Builders
Magpie provides a critical security layer for RAG pipelines by safely extracting and token-budgeting web content while preventing prompt injection and SSRF attacks.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cheerio
Automated review identified **Cheerio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Puppeteer
Automated review identified **Puppeteer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP SDK
Automated review identified **MCP SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-LD parsing
Automated review identified **JSON-LD parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
