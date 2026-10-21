---
title: "shawn-durrani/spendglass"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "FastAPI", "Redbark API", "Anthropic API", "Model Context Protocol (MCP)", "scrypt", "Bash"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["local-first", "financial data", "MCP server", "open banking", "transaction analytics"]
source: "https://github.com/shawn-durrani/spendglass"
stars: 1
language: "Python"
last_updated: "2026-08-08T04:57:57Z"
discovered_at: "2026-08-08T04:59:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Spendglass is a local-only financial transaction manager that syncs bank data via the Redbark open-banking API into a SQLite database, provides a password-protected web UI for analytics, and exposes a read-only MCP server for local AI agents to query spending data securely.

## Key Features
- Local-only storage and processing of bank transactions with no cloud dependency
- Password-protected web UI for spending analytics and merchant identity management
- Read-only MCP server exposing 16 tools for AI agents to query financial data
- Automated merchant identity pipeline with optional AI-powered enrichment
- Scheduled syncs, backups, and deterministic trend analysis without AI models

## Why It Matters for RAG Builders
It provides a secure, local-first way for AI agents to interact with sensitive financial data without exposing it to external services, making it essential for privacy-focused RAG applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redbark API
Automated review identified **Redbark API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### scrypt
Automated review identified **scrypt** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
