---
title: "metavolve-labs/lbrain"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "ONNX Runtime", "SQLite FTS5", "FastEmbed", "Hugging Face Transformers", "MCP (Model Context Protocol)", "Docker"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["retrieval-augmented generation", "source citation", "local-first", "deterministic admissibility", "hybrid search"]
source: "https://github.com/metavolve-labs/lbrain"
stars: 0
language: "Python"
last_updated: "2026-08-03T02:46:18Z"
discovered_at: "2026-08-03T02:54:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
LBrain is a local-first memory system for AI agents that provides source-cited responses with deterministic admissibility checks. It indexes documents on-device, supports hybrid retrieval (vector + keyword), and ensures retrieved records include provenance, dates, and binding flags to prevent misattribution.

## Key Features
- Hybrid retrieval combining vector embeddings (local or hosted) with BM25 keyword search
- Deterministic admissibility gate classifying records as admissible, near-miss, or irrelevant without additional model calls
- Source-cited responses with provenance, dates, and binding flags to prevent misattribution
- Supports local-only embedding (BAAI/bge-small-en-v1.5) or hosted providers (Gemini, OpenAI) with user-controlled keys
- MCP tools for integration with AI agents and streamable HTTP server for broader compatibility

## Why It Matters for RAG Builders
LBrain addresses critical RAG failure modes like deceptive grounding and stale-fact errors by ensuring retrieved records are admissible and properly cited, reducing hallucinations and misattributions in agent responses.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite FTS5
Automated review identified **SQLite FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face Transformers
Automated review identified **Hugging Face Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
