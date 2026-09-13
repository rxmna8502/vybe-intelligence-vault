---
title: "ajtgjmdjp/tdnet-disclosure-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "CLI", "PyPI", "GitHub Actions"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["financial data", "MCP server", "Tokyo Stock Exchange", "timely disclosures", "stock market"]
source: "https://github.com/ajtgjmdjp/tdnet-disclosure-mcp"
stars: 4
language: "Python"
last_updated: "2026-07-18T08:07:02Z"
discovered_at: "2026-07-18T08:09:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server providing real-time access to Tokyo Stock Exchange (JPX/TSE) timely disclosures (適時開示) such as earnings reports, dividends, buybacks, and forecast revisions without requiring an API key.

## Key Features
- Provides 4 MCP tools for accessing TDNET disclosures (latest, search, company-specific, and date-specific)
- No API key required; uses free public Yanoshin Web API
- Auto-categorizes disclosures into earnings, dividends, buybacks, forecast revisions, and governance
- Supports CLI for quick access and testing
- Integrates with Claude Desktop and other MCP-compatible clients

## Why It Matters for RAG Builders
It enables AI systems to fetch real-time financial disclosures from the Tokyo Stock Exchange, enhancing RAG pipelines with up-to-date market-moving data.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
