---
title: "geek-fun/data-studio-agent"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "TypeScript", "Node.js", "SQLKit", "DocKit", "Elasticsearch", "MongoDB", "PostgreSQL", "MySQL"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "database access", "AI agent integration", "local-first", "enterprise security"]
source: "https://github.com/geek-fun/data-studio-agent"
stars: 1
language: "Rust"
last_updated: "2026-08-09T07:58:06Z"
discovered_at: "2026-08-09T07:58:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Data Studio Agent is an open-source MCP server that enables AI coding agents to securely access and query databases (SQL and NoSQL) in plain language. It acts as a bridge between AI tools and local database clients like SqlKit and DocKit, ensuring credentials never leave the user's machine.

## Key Features
- Secure, local-first access to 70+ SQL databases (PostgreSQL, MySQL, etc.) and NoSQL databases (Elasticsearch, MongoDB, DynamoDB)
- Three-tier permission model (Read Only, Data Read-Write, Full Access) with user confirmation for destructive operations
- Seamless integration with AI coding agents like Claude Code, Cursor, and OpenCode via MCP
- Credentials never leave the user's machine; only opaque connection IDs are exposed to the AI
- Supports both SqlKit and DocKit bridges for SQL and NoSQL databases respectively

## Why It Matters for RAG Builders
It enables AI agents to securely and intuitively query databases in plain language while keeping credentials local, reducing security risks and simplifying RAG pipeline integrations.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLKit
Automated review identified **SQLKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DocKit
Automated review identified **DocKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Elasticsearch
Automated review identified **Elasticsearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MongoDB
Automated review identified **MongoDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL
Automated review identified **MySQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
