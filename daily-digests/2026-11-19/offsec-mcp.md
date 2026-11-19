---
title: "nadirzhon/offsec-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "FastAPI", "AsyncIO", "RDAP", "NVD API", "DNS-over-HTTPS", "TCP port scanning"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "offensive security", "AI agent tooling", "CVE intelligence", "reconnaissance"]
source: "https://github.com/nadirzhon/offsec-mcp"
stars: 0
language: "Python"
last_updated: "2026-08-08T10:31:50Z"
discovered_at: "2026-08-08T10:34:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
offsec-mcp is an MCP server that provides offensive-security tooling for AI agents, enabling authorized reconnaissance, CVE intelligence gathering, JavaScript analysis, and port scanning through the Model Context Protocol.

## Key Features
- Exposes security tools (subdomain enumeration, CVE search, JS analysis, port scanning) as MCP tools for AI agents
- Enforces authorization scopes to prevent unauthorized active scanning
- Passive OSINT tools (CT logs, DNS, RDAP, NVD) run freely without scope restrictions
- Redacts sensitive data (e.g., secrets) in outputs to prevent accidental exposure
- Supports both inline and file-based authorization scope configuration

## Why It Matters for RAG Builders
It enables AI agents to safely and efficiently perform authorized offensive-security tasks, bridging the gap between AI orchestration and traditional security tooling.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AsyncIO
Automated review identified **AsyncIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RDAP
Automated review identified **RDAP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NVD API
Automated review identified **NVD API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DNS-over-HTTPS
Automated review identified **DNS-over-HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TCP port scanning
Automated review identified **TCP port scanning** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
