---
title: "filiperochalopes/esus-pec-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "PostgreSQL", "FastMCP", "Model Context Protocol (MCP)", "uv", "SQLAlchemy"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["healthcare", "MCP server", "anonymized data", "PostgreSQL", "Brazilian e-SUS"]
source: "https://github.com/filiperochalopes/esus-pec-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-20T20:59:30Z"
discovered_at: "2026-07-20T21:11:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server and Python library that provides read-only access to the Brazilian e-SUS PEC (Prontuário Eletrônico do Cidadão) healthcare database via PostgreSQL. It enables LLMs to query anonymized patient data, health conditions, appointments, and health indicators for AI-driven healthcare applications.

## Key Features
- Read-only access to e-SUS PEC database via PostgreSQL with strict permissions
- Anonymized patient data retrieval (initials, age, sex) for privacy compliance
- Tools for querying health conditions (CID-10/CIAP), appointments (SOAP), and health indicators
- Standalone and SaaS-integrated deployment modes with environment variable or injected connection support
- Built-in security measures: readonly transactions, autocommit, and query limits to prevent data exfiltration

## Why It Matters for RAG Builders
It enables AI systems to securely and anonymously query Brazilian public healthcare data for RAG applications, supporting clinical decision-making and population health analysis without exposing sensitive patient information.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
