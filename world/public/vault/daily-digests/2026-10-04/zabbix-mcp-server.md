---
title: "initMAX/zabbix-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Zabbix API", "FastAPI", "TOML", "Docker", "systemd", "JavaScript/TypeScript (for admin portal)", "WeasyPrint (for PDF reports)", "OAuth 2.1"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "Zabbix integration", "AI tooling", "monitoring automation", "infrastructure management"]
source: "https://github.com/initMAX/zabbix-mcp-server"
stars: 168
language: "Python"
last_updated: "2026-08-04T17:45:10Z"
discovered_at: "2026-08-04T17:50:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that exposes the full Zabbix API as MCP tools, enabling AI assistants like Claude, VS Code, and JetBrains to interact with Zabbix for monitoring, alerting, and infrastructure management.

## Key Features
- Complete Zabbix API coverage with 237 tools for hosts, problems, triggers, templates, and more
- Admin web portal with multi-token authentication, scopes, and IP restrictions for secure access
- Extension tools like `host_status_get`, `infrastructure_summary_get`, and `graph_render` for pre-correlated views and PDF reports
- Multi-server support with per-server tokens and read-only mode to prevent accidental changes
- Production-ready deployment with systemd, Docker, logrotate, and TLS/HTTPS support

## Why It Matters for RAG Builders
It bridges AI assistants with Zabbix, enabling natural language queries and automated actions for monitoring and alerting workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zabbix API
Automated review identified **Zabbix API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript/TypeScript (for admin portal)
Automated review identified **JavaScript/TypeScript (for admin portal)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WeasyPrint (for PDF reports)
Automated review identified **WeasyPrint (for PDF reports)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
