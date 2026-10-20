---
title: "chuf-China/nexus-memory"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "SQLite", "FTS5 (Full-Text Search)", "HNSW (Hierarchical Navigable Small World)", "NumPy", "FastEmbed", "OpenAI (optional)", "Sentence Transformers (optional)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["persistent memory", "cross-session context", "vector search", "local-first", "agent memory"]
source: "https://github.com/chuf-China/nexus-memory"
stars: 1
language: "Python"
last_updated: "2026-08-05T16:43:52Z"
discovered_at: "2026-08-05T16:44:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Nexus Memory is a local-first, persistent memory system designed for AI agents to retain context, preferences, and knowledge across sessions without relying on LLMs for core operations. It enables agents to remember facts, correct errors, and improve performance over time with minimal token overhead.

## Key Features
- Zero LLM dependency for core memory operations (search/write)
- Hybrid search combining full-text, vector, and temporal retrieval
- 3-tier knowledge architecture (Observation → Belief → Fact) with auto-promotion/degradation
- Lifecycle hooks for pre-LLM call context injection and session consolidation
- Domain-aware scoring and security constraints for reliable knowledge retention

## Why It Matters for RAG Builders
Nexus Memory eliminates the need for agents to relearn context across sessions, drastically reducing token costs and enabling true long-term memory with minimal external dependencies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (Hierarchical Navigable Small World)
Automated review identified **HNSW (Hierarchical Navigable Small World)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI (optional)
Automated review identified **OpenAI (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence Transformers (optional)
Automated review identified **Sentence Transformers (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
