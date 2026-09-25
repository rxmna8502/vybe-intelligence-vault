---
title: "night4me/pfsense-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "pfSense API", "PyPI", "CI/CD (GitHub Actions)", "CodeQL", "PEP 740 (digital attestations)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["pfSense", "MCP server", "read-only", "security-first", "network monitoring"]
source: "https://github.com/night4me/pfsense-mcp-server"
stars: 0
language: "Python"
last_updated: "2026-08-09T16:29:27Z"
discovered_at: "2026-08-09T16:38:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A security-first MCP (Model Context Protocol) server for pfSense that provides read-only, strongly typed access to pfSense appliances via AI assistants. It enables AI tools to query system, network, firewall, and diagnostic data without exposing mutation capabilities or raw shell access.

## Key Features
- 42 read-only MCP tools for pfSense introspection (system, network, firewall, services, users, certificates, diagnostics)
- Strict security model with zero write capabilities in production, enforced by static checks and capability gating
- Fail-closed configuration and strict TLS by default to prevent credential exposure
- Structured, typed tool contracts with capability-based access control
- Comprehensive documentation, threat modeling, and safety architecture (Tier 1 framework) for future write capabilities

## Why It Matters for RAG Builders
It enables AI assistants to safely query pfSense appliances for network monitoring and diagnostics without risking unintended network disruptions, aligning with security-first principles for RAG stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pfSense API
Automated review identified **pfSense API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CodeQL
Automated review identified **CodeQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PEP 740 (digital attestations)
Automated review identified **PEP 740 (digital attestations)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
