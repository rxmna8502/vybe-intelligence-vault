---
title: "dinglebear-ai/axon"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "SQLite", "Qdrant", "Hugging Face TEI", "Chrome/CDP", "Tokio", "systemd", "Incus", "Docker", "CLI", "REST API", "MCP"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["RAG engine", "self-hosted", "Rust", "vector database", "data ingestion"]
source: "https://github.com/dinglebear-ai/axon"
stars: 3
language: "Rust"
last_updated: "2026-08-01T03:39:52Z"
discovered_at: "2026-08-01T03:44:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Axon is a self-hosted RAG engine written in Rust that unifies the entire pipeline of crawling, scraping, ingesting, embedding, and querying data from diverse sources. It supports hybrid retrieval, cited LLM synthesis, and integrates with MCP, CLI, and REST interfaces for flexible access.

## Key Features
- Unified pipeline for all source types (web, local, Git, package registries, Reddit, YouTube, etc.) with a single durable job model in SQLite
- Hybrid retrieval and cited LLM synthesis over MCP, CLI, and REST interfaces
- Supports Incus system container (preferred) and bare-metal systemd deployments with GPU passthrough for TEI embeddings
- Vertical extractors for structured parsing of known sources (GitHub, PyPI, npm, Reddit, YouTube) and configurable chunking/embedding
- Built-in job management, watches, cleanup, and preflight checks for operational reliability

## Why It Matters for RAG Builders
Axon provides a unified, production-ready RAG orchestration engine that simplifies the integration of diverse data sources, embeddings, and retrieval workflows for AI stack builders.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face TEI
Automated review identified **Hugging Face TEI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome/CDP
Automated review identified **Chrome/CDP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Incus
Automated review identified **Incus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
