---
title: "cyberlife-coder/VelesDB"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "Python", "TypeScript", "Node.js", "Docker", "WASM", "REST", "HNSW", "AVX2/NEON SIMD", "SQL-like query language (VelesQL)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["local-first", "explainable memory", "deterministic compression", "agent memory", "unified query engine"]
source: "https://github.com/cyberlife-coder/VelesDB"
stars: 82
language: "Rust"
last_updated: "2026-08-07T09:33:02Z"
discovered_at: "2026-08-07T10:05:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
VelesDB is a local-first, embeddable database that unifies vector search, graph relationships, and columnar storage under a single query language (VelesQL). It provides an explainable agent memory system with deterministic context compression, enabling agents to recall and justify facts without relying on external APIs or cloud services.

## Key Features
- Single binary (~10 MB) combining vector, graph, and columnar storage with a unified query language (VelesQL)
- Agent memory with evidence-based recall (`why()`) that survives process restarts and shares no vocabulary with queries
- Deterministic context compiler that reduces token usage by 21.9% without LLM intervention, with auditable compression decisions
- Local-first architecture with no cloud dependencies, ensuring data sovereignty and offline operation
- Multi-language support (Python, Rust, TypeScript, Node.js) with MCP, REST, and WASM integrations

## Why It Matters for RAG Builders
VelesDB is essential for RAG/AI stack builders because it eliminates the need for multiple databases, provides explainable agent memory with evidence trails, and reduces token costs through deterministic compression while maintaining local-first sovereignty.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW
Automated review identified **HNSW** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AVX2/NEON SIMD
Automated review identified **AVX2/NEON SIMD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL-like query language (VelesQL)
Automated review identified **SQL-like query language (VelesQL)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
