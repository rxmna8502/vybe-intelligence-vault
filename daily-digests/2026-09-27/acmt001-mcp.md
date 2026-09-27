---
title: "sebastienrousseau/acmt001-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Model Context Protocol (MCP)", "ISO 20022", "FastMCP", "Poetry", "mypy", "ruff", "black"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["ISO 20022", "MCP server", "financial messaging", "AI agents", "XML validation"]
source: "https://github.com/sebastienrousseau/acmt001-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-11T23:52:48Z"
discovered_at: "2026-07-11T23:53:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
acmt001-mcp is an MCP server that exposes the ISO 20022 Account Management library (acmt001) as tools for AI agents, enabling validation and generation of standardized financial XML messages like account openings, closings, and maintenance requests.

## Key Features
- Six MCP tools for ISO 20022 acmt message management (validation, schema inspection, XML generation)
- Delegates to shared acmt001.services layer for consistency across CLI, REST API, and MCP
- Validates financial identifiers (IBAN, BIC, LEI) and account records
- Generates ISO 20022-compliant XML messages for account lifecycle operations
- Integrates seamlessly with MCP clients like Claude Desktop or IDEs

## Why It Matters for RAG Builders
It enables AI agents to dynamically generate and validate standardized financial XML messages for account management, reducing manual errors and accelerating compliance with ISO 20022 standards.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ISO 20022
Automated review identified **ISO 20022** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Poetry
Automated review identified **Poetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy
Automated review identified **mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### black
Automated review identified **black** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
