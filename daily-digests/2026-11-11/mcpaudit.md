---
title: "saagpatel/MCPAudit"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "PyPI", "GitHub Actions", "SARIF", "JSON", "HTML"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP security", "prompt injection detection", "SSRF analysis", "risk assessment", "CI/CD enforcement"]
source: "https://github.com/saagpatel/MCPAudit"
stars: 4
language: "Python"
last_updated: "2026-07-19T17:46:54Z"
discovered_at: "2026-07-19T17:59:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCPAudit is a security-focused tool that audits locally configured MCP servers for permission risks, prompt injection threats, and schema drift. It provides read-only analysis of MCP server capabilities, detects SSRF-shaped tools, and offers policy-based enforcement for CI/CD pipelines.

## Key Features
- Capability inventory of MCP server tools, prompts, and resources with permission categorization (file_read, file_write, network, shell_execution, destructive, exfiltration)
- Config-only inference mode for zero-touch analysis without spawning servers or contacting endpoints
- Risk scoring (0-10 composite score) with detailed breakdowns and stable finding metadata
- Local policy gates for CI/CD enforcement and SARIF/HTML report generation
- Prompt injection, SSRF, and schema drift detection with remediation suggestions

## Why It Matters for RAG Builders
It provides essential security auditing for MCP-based AI agents, ensuring safe and controlled access to tools and resources in AI engineering stacks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML
Automated review identified **HTML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
