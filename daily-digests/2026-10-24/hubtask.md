---
title: "Jersyfi/hubtask"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "PostgreSQL", "Hexagonal Architecture", "REST API", "MCP Server", "OpenAPI 3.1", "CEL (Common Expression Language)", "OpenTelemetry", "Prometheus", "Svelte 5", "TypeScript", "Docker/Podman", "Kubernetes", "NATS JetStream (optional)", "S3/MinIO (backup targets)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["task management", "multi-tenant", "GDPR compliance", "offline sync", "AI integration"]
source: "https://github.com/Jersyfi/hubtask"
stars: 0
language: "Go"
last_updated: "2026-09-03T08:27:10Z"
discovered_at: "2026-09-03T08:37:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hubtask is a self-hostable, multi-tenant task management system with a five-level hierarchy (Hub → Collection → Task → Work Package → Activity) designed for both individuals and service providers. It emphasizes backend-first, API-first, and AI-first principles with strong support for offline sync, GDPR compliance, and extensibility via MCP servers and automation rules.

## Key Features
- Five-level hierarchical task organization with configurable levels and fields
- Multi-tenant support with tenant isolation via PostgreSQL RLS and quotas
- Offline-first architecture with delta sync, conflict resolution, and hybrid logical clocks
- Comprehensive automation via rule engine, webhooks, n8n/Zapier, and MCP server
- Built-in GDPR readiness with audit trails, data subject rights, and encryption

## Why It Matters for RAG Builders
Hubtask provides a robust, self-hostable foundation for AI-driven task orchestration with built-in multi-tenancy, GDPR compliance, and offline capabilities, making it essential for RAG builders integrating structured workflow automation.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hexagonal Architecture
Automated review identified **Hexagonal Architecture** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI 3.1
Automated review identified **OpenAPI 3.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CEL (Common Expression Language)
Automated review identified **CEL (Common Expression Language)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Svelte 5
Automated review identified **Svelte 5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker/Podman
Automated review identified **Docker/Podman** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NATS JetStream (optional)
Automated review identified **NATS JetStream (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### S3/MinIO (backup targets)
Automated review identified **S3/MinIO (backup targets)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
