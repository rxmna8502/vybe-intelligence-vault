---
title: "ccy777/enterprise-decision-agent"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "LangGraph", "Milvus", "BM25", "BAAI/bge-small-zh-v1.5", "BAAI/bge-reranker-base", "SQLAlchemy", "MySQL", "MCP (Model Context Protocol)", "Docker"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "High"
tags: ["controlled agent", "hybrid retrieval", "enterprise RAG", "security boundaries", "audit trail"]
source: "https://github.com/ccy777/enterprise-decision-agent"
stars: 0
language: "Python"
last_updated: "2026-08-09T09:42:26Z"
discovered_at: "2026-08-09T09:43:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A controlled enterprise decision agent that integrates LangGraph orchestration, hybrid RAG, and MCP/MySQL under explicit evidence, citation, security, and release boundaries. It handles enterprise knowledge questions, read-only operational analysis, and mixed decision scenarios with fail-closed security and audit mechanisms.

## Key Features
- Controlled orchestration with explicit workflow stages (Router, Planner, Skill, Evidence, Reviewer, Release)
- Hybrid RAG combining dense retrieval, BM25, RRF fusion, and cross-encoder reranking for improved retrieval accuracy
- Controlled data access via MCP tool boundary with SQL Guard and read-only MySQL integration
- Fail-closed security and audit mechanisms with repeated authorization checks and immutable audit hash chains
- Frozen engineering benchmarks and reproducible evaluation metrics for retrieval and system performance

## Why It Matters for RAG Builders
It provides a robust, security-hardened framework for building enterprise-grade RAG systems with strict control over retrieval, data access, and agent workflows, ensuring reliable and auditable decision-making.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Milvus
Automated review identified **Milvus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BAAI/bge-small-zh-v1.5
Automated review identified **BAAI/bge-small-zh-v1.5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BAAI/bge-reranker-base
Automated review identified **BAAI/bge-reranker-base** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL
Automated review identified **MySQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
