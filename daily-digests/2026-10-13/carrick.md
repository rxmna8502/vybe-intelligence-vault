---
title: "carrick-tools/carrick"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "TypeScript", "SWC (JavaScript/TypeScript parser)", "DynamoDB", "S3", "GitHub Actions", "Model Context Protocol (MCP)", "LLM (for intent generation)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["TypeScript", "MCP", "cross-repo indexing", "intent-aware", "API contract validation"]
source: "https://github.com/carrick-tools/carrick"
stars: 0
language: "Rust"
last_updated: "2026-07-15T07:58:33Z"
discovered_at: "2026-07-15T08:06:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Carrick is a live, type-aware, intent-aware cross-repo index of TypeScript services in a GitHub organization, exposed to AI coding agents via the Model Context Protocol (MCP). It enables agents to answer semantic questions about codebases without manual grep-based searches.

## Key Features
- Live, type-aware indexing of TypeScript services across GitHub organizations
- Intent-aware descriptions of functions for semantic search (e.g., 'where do we deduplicate users by email')
- MCP endpoint for AI agents to query the index programmatically
- Automated PR drift detection for API mismatches, type conflicts, and dependency issues
- GitHub Action for seamless CI/CD integration with zero secrets required

## Why It Matters for RAG Builders
Carrick eliminates the need for AI agents to manually grep across repositories by providing a centralized, type-aware index of codebases, enabling accurate and efficient semantic queries for RAG and AI-driven development workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SWC (JavaScript/TypeScript parser)
Automated review identified **SWC (JavaScript/TypeScript parser)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DynamoDB
Automated review identified **DynamoDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### S3
Automated review identified **S3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (for intent generation)
Automated review identified **LLM (for intent generation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
