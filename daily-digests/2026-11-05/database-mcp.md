---
title: "arifulislamat/database-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "SQL", "Model Context Protocol (MCP)", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP", "SQL databases", "AI tooling", "read-only access", "structured queries"]
source: "https://github.com/arifulislamat/database-mcp"
stars: 3
language: "TypeScript"
last_updated: "2026-07-15T20:04:19Z"
discovered_at: "2026-07-15T20:08:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A collection of Model Context Protocol (MCP) servers providing structured, safe, and read-only access to SQL databases for AI clients. Each database engine (SQLite, libSQL, MySQL, MariaDB, Postgres) is packaged separately with consistent tooling and guardrails.

## Key Features
- Consistent two-tool interface (`execute_sql` and `search_objects`) across all supported databases
- Read-only mode enforced by default with row caps and statement timeouts for safety
- Configuration via flags, YAML, or environment variables (never via chat prompts)
- Secrets are redacted in logs and never exposed in tool outputs
- Language-agnostic conformance suite ensures identical behavior across implementations

## Why It Matters for RAG Builders
It provides standardized, secure, and AI-friendly access to SQL databases, reducing integration complexity and security risks for RAG systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
