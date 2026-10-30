---
title: "dfch/biz.dfch.SpecMgr"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Pydantic", "Model Context Protocol (MCP)", "CLI", "Markdown", "JSON", "GitHub Actions", "uv"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["specification management", "ADR tooling", "MCP server", "documentation", "Python library"]
source: "https://github.com/dfch/biz.dfch.SpecMgr"
stars: 0
language: "Python"
last_updated: "2026-08-04T03:58:42Z"
discovered_at: "2026-08-04T04:15:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Python library, CLI, and MCP server for managing system specifications, particularly Architecture Decision Records (ADRs) based on the MADR 4.0.0 schema. It provides structured tools for creating, reading, updating, and validating ADRs as markdown files.

## Key Features
- MCP server exposing ADR tools and resources (create, read, update, validate ADRs)
- CLI for version and MCP server management
- Supports MADR 4.0.0-derived ADR schema with structured frontmatter and body
- File-based ADR storage with disk as the source of truth
- Dual transport support for MCP server (stdio and SSE)

## Why It Matters for RAG Builders
It streamlines the management of Architecture Decision Records (ADRs) in AI engineering workflows, ensuring structured, version-controlled documentation that integrates seamlessly with MCP-based AI systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
