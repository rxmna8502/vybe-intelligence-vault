---
title: "GeiserX/atlassian-browser-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Playwright", "MCP (Model Context Protocol)", "mcp-atlassian", "Chromium/Chrome", "SSO (Okta, SAML, Azure AD, etc.)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Atlassian integration", "SSO authentication", "MCP server", "Playwright automation", "RAG tooling"]
source: "https://github.com/GeiserX/atlassian-browser-mcp"
stars: 3
language: "Python"
last_updated: "2026-07-18T19:00:02Z"
discovered_at: "2026-07-18T19:02:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that wraps the upstream mcp-atlassian toolset with browser-cookie authentication via Playwright, enabling access to Atlassian Server/Data Center instances behind corporate SSO where API tokens are unavailable.

## Key Features
- Browser-cookie authentication for Atlassian instances behind corporate SSO
- Separate authentication and server processes to avoid blocking tool calls
- Supports seeding automation profiles from real browser sessions for seamless SSO login
- Monkey-patches upstream mcp-atlassian clients to inject browser-cookie sessions
- CLI and MCP server dual-mode for scripting and agent integration

## Why It Matters for RAG Builders
It enables RAG builders to securely access Atlassian data behind SSO without API tokens, bridging a critical gap in enterprise AI integrations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mcp-atlassian
Automated review identified **mcp-atlassian** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromium/Chrome
Automated review identified **Chromium/Chrome** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSO (Okta, SAML, Azure AD, etc.)
Automated review identified **SSO (Okta, SAML, Azure AD, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
