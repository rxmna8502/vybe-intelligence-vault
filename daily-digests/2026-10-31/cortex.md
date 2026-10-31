---
title: "dinglebear-ai/cortex"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "FTS5", "MCP (Model Context Protocol)", "REST API", "Docker", "OpenTelemetry (OTLP)", "CLI", "JavaScript/Node.js (npm package)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["log aggregation", "homelab monitoring", "SQLite FTS", "MCP integration", "AI transcript indexing"]
source: "https://github.com/dinglebear-ai/cortex"
stars: 2
language: "Rust"
last_updated: "2026-08-01T03:36:07Z"
discovered_at: "2026-08-01T03:44:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cortex is a self-hosted log aggregation and investigation tool designed for homelabs and small private fleets. It aggregates syslog, Docker, OTLP, and AI transcripts into SQLite with FTS5 search, exposing data via MCP, CLI, and REST interfaces for operational intelligence and incident correlation.

## Key Features
- Unified ingestion pipeline for syslog, Docker, OTLP, and AI transcripts with normalization and enrichment
- SQLite with FTS5 for full-text search and bounded metadata storage
- Multiple interfaces: CLI, REST API, MCP, and a bundled investigation workspace
- Fleet intelligence with topology graphs, inventory, and host state correlation
- AI session indexing for Claude, Codex, and Gemini transcripts with incident clustering

## Why It Matters for RAG Builders
Cortex provides a lightweight, self-hosted solution for aggregating and correlating diverse operational and AI-generated logs, enabling RAG builders to integrate structured evidence and incident context directly into their AI workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry (OTLP)
Automated review identified **OpenTelemetry (OTLP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript/Node.js (npm package)
Automated review identified **JavaScript/Node.js (npm package)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
