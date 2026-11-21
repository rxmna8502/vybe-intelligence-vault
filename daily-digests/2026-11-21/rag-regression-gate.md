---
title: "Jiangxianze/rag-regression-gate"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Java", "Spring AI", "Maven", "YAML", "JSON", "SARIF"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["retrieval regression", "CI/CD gate", "deterministic testing", "Spring AI", "RAG pipeline"]
source: "https://github.com/Jiangxianze/rag-regression-gate"
stars: 0
language: "Java"
last_updated: "2026-08-08T05:38:33Z"
discovered_at: "2026-08-08T05:46:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A deterministic CI gate for detecting retrieval regressions in Spring AI and JVM-based RAG pipelines. It compares baseline and candidate retrieval runs to identify missing evidence in Top-K results without relying on LLM judges.

## Key Features
- Compares baseline and candidate retrieval runs to detect regressions in Top-K results
- Supports metrics like Recall@K, MRR, nDCG, Precision@K, Hit Rate, and p95 latency
- Integrates with CI/CD pipelines via SARIF or CLI exit codes
- Provides deterministic metric calculations for reproducible testing
- Includes adapters for Spring AI VectorStore and custom retrieval systems

## Why It Matters for RAG Builders
It ensures retrieval pipelines maintain required evidence in Top-K results, preventing silent regressions that could degrade RAG system performance without being detected by LLM-based evaluators.

## Tech Stack Deep Dive
### Java
Automated review identified **Java** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Spring AI
Automated review identified **Spring AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Maven
Automated review identified **Maven** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
