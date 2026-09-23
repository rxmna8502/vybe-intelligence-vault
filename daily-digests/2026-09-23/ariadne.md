---
title: "mclaut/ariadne"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Go", "Qdrant", "bge-m3", "Ollama", "BM25", "RRF (Reciprocal Rank Fusion)", "Sigstore", "CycloneDX", "PowerShell", "Bash", "Launchd", "systemd"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["local-first", "multilingual", "MCP server", "hybrid search", "memory management"]
source: "https://github.com/mclaut/ariadne"
stars: 1
language: "Go"
last_updated: "2026-07-10T13:09:19Z"
discovered_at: "2026-07-10T13:11:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Ariadne is a native, local-first memory server for AI coding assistants like Codex and Claude Code, providing a stable, multilingual, and hybrid-search-capable vector database backend using Qdrant and bge-m3 embeddings without requiring Docker or cloud services.

## Key Features
- Native, cross-platform installation (Windows/macOS/Linux) with no Docker dependency
- Hybrid search combining dense (bge-m3) and sparse (BM25) embeddings with RRF fusion for high-precision recall
- Multilingual support covering 100+ languages with cross-lingual recall (cosine similarity ~0.8–0.94)
- Session hooks for auto-recall and auto-capture in Claude Code, reducing context setup overhead
- Verifiable artifacts with SHA-256 checksums, CycloneDX SBOM, and Sigstore bundles for secure deployments

## Why It Matters for RAG Builders
Ariadne provides a robust, local-first alternative to embedded vector DBs for RAG systems, ensuring stability, multilingual support, and hybrid search capabilities critical for AI engineering workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### bge-m3
Automated review identified **bge-m3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sigstore
Automated review identified **Sigstore** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CycloneDX
Automated review identified **CycloneDX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Launchd
Automated review identified **Launchd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
