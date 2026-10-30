---
title: "abcubed3/okf"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "YAML", "Markdown", "PostgreSQL", "BigQuery", "Cloud Spanner", "OpenAPI", "Protobuf", "Model Context Protocol (MCP)", "GitHub Actions"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["knowledge-graph", "RAG", "MCP", "metadata-harvesting", "context-assembly"]
source: "https://github.com/abcubed3/okf"
stars: 0
language: "Go"
last_updated: "2026-07-15T05:27:31Z"
discovered_at: "2026-07-15T05:29:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OKF-go is a Go-based toolkit for managing organizational knowledge in a structured, machine-readable format using Markdown with YAML frontmatter. It provides utilities for validating knowledge bundles, harvesting metadata from databases and APIs, assembling context for LLMs, and exposing knowledge via the Model Context Protocol (MCP).

## Key Features
- Validates OKF bundles for YAML frontmatter correctness, required attributes, and broken links using a linter.
- Automatically extracts and converts schemas from databases (PostgreSQL, BigQuery, Cloud Spanner), OpenAPI, and Protobuf into structured OKF concepts.
- Assembles high-quality prompt context via graph-based BFS traversal with configurable depth and direction.
- Exposes knowledge bases as an MCP server for dynamic discovery and retrieval by LLM clients.
- Supports structured distribution of knowledge bundles via Git, tar, zip, and automated releases.

## Why It Matters for RAG Builders
OKF-go standardizes organizational knowledge into a machine-readable format, enabling seamless integration with RAG pipelines and MCP-compatible AI agents for dynamic context assembly and retrieval.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BigQuery
Automated review identified **BigQuery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloud Spanner
Automated review identified **Cloud Spanner** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protobuf
Automated review identified **Protobuf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
