---
title: "ajtgjmdjp/edinet-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "XBRL", "Polars", "pandas", "MCP (Model Context Protocol)", "Docker", "PyPI", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["XBRL parsing", "Japanese financial data", "MCP server", "EDINET API", "financial statements"]
source: "https://github.com/ajtgjmdjp/edinet-mcp"
stars: 15
language: "Python"
last_updated: "2026-07-18T08:07:03Z"
discovered_at: "2026-07-18T08:09:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
edinet-mcp is a Python library and MCP server that provides programmatic access to Japan's EDINET financial disclosure system, parsing XBRL filings into normalized financial statements and qualitative narratives for Japanese companies. It exposes these capabilities as an MCP server for AI assistants and local data processing tools.

## Key Features
- Normalizes XBRL filings across accounting standards (J-GAAP, IFRS, US-GAAP) into canonical Japanese labels with bilingual support
- Exposes financial data via an MCP server for integration with AI assistants like Claude Desktop
- Supports multi-company screening, cross-period comparisons, and narrative section extraction (e.g., business risks, MD&A)
- Provides financial metrics (ROE, ROA, profit margins) and year-over-year comparisons with DataFrame export capabilities
- Fully local and free, requiring only a free EDINET API key with no usage caps beyond EDINET's rate limits

## Why It Matters for RAG Builders
It enables RAG/AI stack builders to programmatically access and normalize high-quality Japanese financial data for AI assistants and analytics without relying on paid APIs or external services.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XBRL
Automated review identified **XBRL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Polars
Automated review identified **Polars** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pandas
Automated review identified **pandas** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
