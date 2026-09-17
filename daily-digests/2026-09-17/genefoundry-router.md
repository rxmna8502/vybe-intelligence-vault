---
title: "berntpopp/genefoundry-router"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python 3.12+", "FastMCP", "Streamable HTTP", "uv (dependency manager)", "YAML (configuration)", "GitHub Actions (CI/CD)", "MIT License"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP aggregator", "biomedical tools", "federated search", "namespaced tools", "RAG optimization"]
source: "https://github.com/berntpopp/genefoundry-router"
stars: 1
language: "Python"
last_updated: "2026-07-14T12:05:20Z"
discovered_at: "2026-07-14T12:10:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A FastMCP 3.x aggregator that federates 21 biomedical MCP backends behind a single Streamable-HTTP endpoint, providing collision-free namespaced tool discovery and search-based tool selection for AI models.

## Key Features
- Federates 21 biomedical MCP backends into a single endpoint with collision-free namespaced tools (e.g., `gnomad_search_genes`).
- Provides search-based tool discovery via `search_tools` to help models find relevant tools by intent rather than exhaustive listing.
- Implements drift detection to ensure tool definitions remain consistent with reviewed baselines, preventing upstream changes from breaking integrations.
- Supports pinned entry points for deterministic access to each backend's canonical tools, improving reliability for AI models.
- Offers offline testing with a fake fleet for local development and end-to-end validation without external dependencies.

## Why It Matters for RAG Builders
It simplifies the integration of multiple biomedical MCP tools into AI workflows by providing a single, searchable endpoint that avoids tool name collisions and overwhelming catalogs.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (dependency manager)
Automated review identified **uv (dependency manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML (configuration)
Automated review identified **YAML (configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MIT License
Automated review identified **MIT License** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
