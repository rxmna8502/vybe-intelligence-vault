---
title: "herbertkokholm/cite-caddy"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Zotero Web API", "OAuth 2.1", "Docker", "FastAPI", "Cryptography (Fernet for encryption)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Zotero integration", "MCP server", "citation management", "AI tooling", "reference library"]
source: "https://github.com/herbertkokholm/cite-caddy"
stars: 0
language: "Python"
last_updated: "2026-08-01T08:52:35Z"
discovered_at: "2026-08-01T09:06:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cite Caddy is a standalone remote MCP server that provides full read/write access to Zotero libraries, enabling AI assistants to manage citations, collections, tags, and attachments programmatically. It bridges Zotero's Web API with MCP clients for dynamic library interactions.

## Key Features
- Full CRUD operations (create, read, update, delete) for Zotero libraries, including destructive actions like delete and move with explicit safety warnings
- 36 tools covering items, collections, tags, notes, attachments, and schema lookups, with version-aware operations to prevent concurrent edits
- OAuth 2.1 self-service authentication flow for multi-tenant access, enabling dynamic registration of Zotero libraries without admin approval
- Dockerized deployment with optional HTTP mode for remote multi-tenant use or stdio mode for local single-user setups
- Comprehensive testing framework using in-memory fakes to validate Zotero API interactions without live dependencies

## Why It Matters for RAG Builders
Cite Caddy enables AI assistants to programmatically manage and enrich Zotero libraries, bridging the gap between reference management and AI-driven workflows for RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zotero Web API
Automated review identified **Zotero Web API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cryptography (Fernet for encryption)
Automated review identified **Cryptography (Fernet for encryption)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
