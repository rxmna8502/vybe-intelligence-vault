---
title: "shigechika/keycloak-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Keycloak Admin REST API", "FastAPI", "uv", "pytest"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["authentication", "identity management", "security auditing", "MCP server", "Keycloak"]
source: "https://github.com/shigechika/keycloak-mcp"
stars: 0
language: "Python"
last_updated: "2026-08-08T11:26:16Z"
discovered_at: "2026-08-08T11:30:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides programmatic access to Keycloak's Admin REST API, enabling secure authentication, user management, session monitoring, and security auditing without human intervention or user sessions.

## Key Features
- Secure authentication via Keycloak service accounts (Client Credentials Grant) with no human password or TOTP involvement
- Comprehensive user management tools including bulk password resets, session tracking, and MFA status checks
- Advanced security auditing with brute-force detection, IP activity analysis, and login loop detection
- Real-time event monitoring and admin event tracking for compliance and troubleshooting
- Configurable deployment with optional IP-to-site labeling and performance safeguards (timeouts, pagination limits)

## Why It Matters for RAG Builders
It enables AI assistants and automated systems to securely interact with Keycloak for real-time identity and access management, reducing manual intervention in security-critical operations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Keycloak Admin REST API
Automated review identified **Keycloak Admin REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
