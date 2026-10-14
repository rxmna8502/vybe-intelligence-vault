---
title: "crossi-dev/latam-tools"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["MCP (Model Context Protocol)", "Streamable HTTP", "JavaScript/TypeScript (implied by MCP server implementation)", "AFIP/ARCA fiscal standards"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Low"
tags: ["MCP server", "Argentine tax validation", "AFIP QR generation", "no-auth tools", "AI agent integration"]
source: "https://github.com/crossi-dev/latam-tools"
stars: 0
language: "None"
last_updated: "2026-08-05T13:54:43Z"
discovered_at: "2026-08-05T14:08:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A remote MCP server providing 9 stateless, no-auth tools for Argentine business operations, including tax ID validation, fiscal QR generation, and amount parsing. Designed for AI agents to handle Argentine compliance data without external dependencies.

## Key Features
- Validates Argentine CUIT/CUIL tax IDs with mod-11 check-digit verification
- Generates AFIP/ARCA fiscal QR URLs for electronic invoices (RG 4291/2018)
- Parses and formats Argentine currency amounts (e.g., "$1.250,50" to float)
- Splits gross amounts into net + IVA breakdowns for 6 ARCA alícuotas
- Validates Argentine CBU/CVU bank account codes via BCRA Com. A 2622

## Why It Matters for RAG Builders
Provides essential, no-auth tools for AI agents to handle Argentine business compliance, enabling seamless integration with local fiscal systems without requiring external API keys or accounts.

## Tech Stack Deep Dive
### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript/TypeScript (implied by MCP server implementation)
Automated review identified **JavaScript/TypeScript (implied by MCP server implementation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AFIP/ARCA fiscal standards
Automated review identified **AFIP/ARCA fiscal standards** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
