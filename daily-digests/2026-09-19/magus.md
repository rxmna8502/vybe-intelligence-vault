---
title: "egladman/magus"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "Buzz (embedded scripting language)", "SCIP (Symbol Graph)", "Content-addressed caching (SHA-256)", "HTTP/MCP protocols", "Mermaid for diagrams"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["monorepo", "task orchestrator", "knowledge graph", "content-addressed caching", "polyglot"]
source: "https://github.com/egladman/magus"
stars: 2
language: "Go"
last_updated: "2026-08-06T03:10:48Z"
discovered_at: "2026-08-06T03:19:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
magus is a fast, cross-platform task orchestrator designed for polyglot monorepos. It statically links a single binary, uses config-as-code, and intelligently caches results to minimize redundant work, while exposing a knowledge graph for querying repo dependencies and relationships.

## Key Features
- Affected set computation: runs only projects impacted by changes, in dependency order
- Content-addressed caching: replays cached outputs to avoid redundant work
- Knowledge graph: exposes repo structure for querying projects, targets, and dependencies
- Single binary deployment: no second toolchain required, statically linked
- Deterministic answers: every command returns reproducible results from declared sources

## Why It Matters for RAG Builders
magus provides a deterministic, cache-aware orchestrator for monorepos that exposes a knowledge graph, enabling AI agents and developers to query repo dependencies and relationships without grepping.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Buzz (embedded scripting language)
Automated review identified **Buzz (embedded scripting language)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SCIP (Symbol Graph)
Automated review identified **SCIP (Symbol Graph)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Content-addressed caching (SHA-256)
Automated review identified **Content-addressed caching (SHA-256)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/MCP protocols
Automated review identified **HTTP/MCP protocols** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid for diagrams
Automated review identified **Mermaid for diagrams** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
