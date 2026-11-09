---
title: "jmagar/runraid"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "GraphQL", "CLI", "Docker", "HTTP", "JSON", "SMART monitoring"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Unraid NAS", "MCP server", "NAS monitoring", "Rust tooling", "GraphQL API"]
source: "https://github.com/jmagar/runraid"
stars: 3
language: "Rust"
last_updated: "2026-07-19T23:47:40Z"
discovered_at: "2026-07-19T23:55:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based MCP server and CLI tool for querying Unraid NAS systems through their GraphQL API. It enables agents to inspect array health, Docker containers, VMs, shares, system metrics, and more via MCP or direct CLI commands.

## Key Features
- Read-only access to Unraid NAS state via GraphQL API
- Supports MCP stdio and HTTP interfaces for agent integration
- CLI tool (`runraid`) for scripting and debugging
- Comprehensive coverage of Unraid resources (disks, Docker, VMs, shares, metrics, etc.)
- Pagination and filtering for large datasets in MCP responses

## Why It Matters for RAG Builders
It provides essential read-only access to Unraid NAS systems for AI agents, enabling real-time monitoring of storage, containers, and system health without exposing mutation capabilities.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SMART monitoring
Automated review identified **SMART monitoring** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
