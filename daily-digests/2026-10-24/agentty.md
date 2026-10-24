---
title: "1ay1/agentty"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["C++26", "BM25", "HNSW (Hierarchical Navigable Small World)", "RRF (Reciprocal Rank Fusion)", "GraphRAG", "Ollama", "Bash", "Sandboxing (bwrap/sandbox-exec)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["terminal agent", "local RAG", "LLM integration", "sandboxed execution", "multi-model support"]
source: "https://github.com/1ay1/agentty"
stars: 598
language: "C++"
last_updated: "2026-09-01T09:01:57Z"
discovered_at: "2026-09-01T09:08:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agentty is a high-performance, open-source terminal-based coding agent written in C++26, designed as a lightweight alternative to tools like Claude Code. It features sub-millisecond startup times, local RAG capabilities, and support for any LLM provider, all packaged as a single static binary with no runtime dependencies.

## Key Features
- Sub-millisecond cold start and keystroke-to-pixel latency with a single static binary (16.7 MB)
- Hybrid BM25 + dense embeddings RAG engine with GraphRAG expansion for precise, context-aware retrieval
- Multi-model support (Claude, OpenAI, Groq, Ollama, etc.) with live provider switching
- Built-in sandboxing for shell and build commands, and air-gapped mode for offline use
- Smart Mode with complexity-scaled effort delegation and workspace-specific learning

## Why It Matters for RAG Builders
agentty provides a blazing-fast, dependency-free terminal agent with advanced local RAG capabilities, making it ideal for AI stack builders seeking a performant and flexible alternative to cloud-dependent coding agents.

## Tech Stack Deep Dive
### C++26
Automated review identified **C++26** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (Hierarchical Navigable Small World)
Automated review identified **HNSW (Hierarchical Navigable Small World)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphRAG
Automated review identified **GraphRAG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sandboxing (bwrap/sandbox-exec)
Automated review identified **Sandboxing (bwrap/sandbox-exec)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
