---
title: "financial-reports/financial-reports-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "FastMCP", "Model Context Protocol (MCP)", "AWS Cognito", "OAuth 2.0", "PKCE", "Dynamic Client Registration", "Streamable HTTP"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "financial data", "regulatory filings", "LLM integration", "corporate information"]
source: "https://github.com/financial-reports/financial-reports-mcp-server"
stars: 2
language: "Python"
last_updated: "2026-07-19T19:11:39Z"
discovered_at: "2026-07-19T19:13:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
This repository provides an official Model Context Protocol (MCP) server for the FinancialReports API, enabling LLM-native access to regulatory filings, financial data, and corporate information from listed companies worldwide. It offers 15 curated tools by default (expandable to 42) for analyzing public-company filings directly within MCP-compatible clients like Claude.

## Key Features
- 15+ LLM-callable tools for financial and corporate data retrieval, including company profiles, filings, and financials
- OAuth 2.0 authentication with PKCE and dynamic client registration for secure access
- Streamable HTTP transport compliant with MCP 2025-11-25 specification
- Curated tool surface with option to expand to full 42-tool surface via environment variable
- Automated tool generation from OpenAPI schema for consistency and maintainability

## Why It Matters for RAG Builders
This MCP server enables AI agents to directly access and analyze real-time financial and regulatory data from public companies, enhancing RAG systems with accurate, structured financial insights for decision-making.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS Cognito
Automated review identified **AWS Cognito** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PKCE
Automated review identified **PKCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dynamic Client Registration
Automated review identified **Dynamic Client Registration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
