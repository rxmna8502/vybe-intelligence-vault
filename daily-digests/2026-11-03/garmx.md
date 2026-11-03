---
title: "intelligexhq/garmx"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "OpenTelemetry", "MCP (Model Context Protocol)", "Grafana", "Prometheus"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP", "observability", "audit", "OpenTelemetry", "AI agents"]
source: "https://github.com/intelligexhq/garmx"
stars: 0
language: "Go"
last_updated: "2026-07-10T20:18:15Z"
discovered_at: "2026-07-10T20:22:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
GarmX is a local-first observability and audit plane for MCP (Model Context Protocol) connections, enabling AI agents and agentic apps to monitor, audit, and trust interactions across tools. It consolidates multiple MCP servers into a single catalog, routes transactions, and exports logs via OpenTelemetry for integration with monitoring platforms.

## Key Features
- Consolidates multiple MCP servers into a single catalog for unified tool access
- Provides cross-server, cross-agent transaction logging and auditing
- Exports audit logs via OpenTelemetry to Grafana, Prometheus, or other OTLP-compatible platforms
- Redacts sensitive data (e.g., secrets) from audit logs by default
- Supports per-agent tool curation to optimize tool selection and reduce token costs

## Why It Matters for RAG Builders
GarmX is essential for RAG builders as it provides centralized observability and audit capabilities for AI agent interactions with MCP services, ensuring transparency and security in multi-tool environments.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grafana
Automated review identified **Grafana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
