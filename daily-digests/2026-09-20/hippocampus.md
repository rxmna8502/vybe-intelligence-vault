---
title: "fastbean-au/hippocampus"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Go", "SQLite", "PostgreSQL", "MySQL", "gRPC", "HTTP", "OpenTelemetry", "JWT", "OIDC", "Docker", "OpenSearch", "Ollama", "Model Context Protocol (MCP)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["memory storage", "biological-inspired", "log retention", "context management", "audit trails"]
source: "https://github.com/fastbean-au/hippocampus"
stars: 0
language: "Go"
last_updated: "2026-08-02T19:20:02Z"
discovered_at: "2026-08-02T19:25:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hippocampus is a biological-inspired memory storage engine designed for log retention, audit trails, and context management. It dynamically evaluates data significance, access frequency, and relationships to retain high-value context while gracefully degrading low-value noise under finite storage capacity.

## Key Features
- Dynamic significance ranking and reinforcement through recall to protect high-demand data from decay
- Periodic consolidation cycles for space compaction and semantic summarization of episodic details
- Multi-backend storage support (SQLite, PostgreSQL, MySQL) with configurable retention floors for compliance
- Integrated MCP server for AI agents (Claude Desktop/Code) to provide long-term memory with human-like forgetting
- OpenTelemetry log ingestion and broker bridges (NATS, MQTT, RabbitMQ, Kafka) for event sourcing

## Why It Matters for RAG Builders
Hippocampus provides a biologically inspired, dynamic memory retention system that ensures critical context is preserved while efficiently managing finite storage, making it essential for RAG builders who need intelligent, scalable, and compliance-safe memory management.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL
Automated review identified **MySQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OIDC
Automated review identified **OIDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenSearch
Automated review identified **OpenSearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
