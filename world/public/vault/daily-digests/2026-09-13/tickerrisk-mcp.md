---
title: "Tickerrisk/tickerrisk-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "FastAPI (likely)", "JWT Authentication", "Public APIs (CourtListener, ClinicalTrials.gov, etc.)", "uvx (for package management)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Low"
tags: ["options trading", "event risk analysis", "MCP server", "catalyst scoring", "AI integration"]
source: "https://github.com/Tickerrisk/tickerrisk-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-19T11:41:01Z"
discovered_at: "2026-07-19T11:57:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that integrates real-time event data (earnings, FDA, legal, SEC, clinical) to assess option trade risk for stocks, enabling AI assistants to evaluate catalyst exposure within expiry windows.

## Key Features
- Horizon-dependent catalyst risk scoring (0-100) for stocks within expiry windows
- Integration with AI assistants (Claude, ChatGPT, Cursor) via MCP
- Multi-source event data (earnings, FDA, legal, SEC, clinical trials)
- Wheel trading strategy scanners (cash-secured puts, covered calls)
- Comparative analysis tool for up to 25 tickers

## Why It Matters for RAG Builders
It enables AI assistants to evaluate hidden event risks in option trades, reducing blind spots in premium selling strategies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (likely)
Automated review identified **FastAPI (likely)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT Authentication
Automated review identified **JWT Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Public APIs (CourtListener, ClinicalTrials.gov, etc.)
Automated review identified **Public APIs (CourtListener, ClinicalTrials.gov, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uvx (for package management)
Automated review identified **uvx (for package management)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
