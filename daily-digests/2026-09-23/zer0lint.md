---
title: "hermes-labs-ai/zer0lint"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "LLM", "HTTP", "JSON", "mem0", "fidelis", "Ollama", "Chroma", "Redis"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Low"
tags: ["memory extraction", "diagnostic tool", "LLM reliability", "silent failure detection", "prompt validation"]
source: "https://github.com/hermes-labs-ai/zer0lint"
stars: 0
language: "Python"
last_updated: "2026-08-06T11:01:22Z"
discovered_at: "2026-08-07T00:02:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
zer0lint is a diagnostic tool designed to detect silent failures in memory extraction pipelines, particularly where ingestion reports success but facts are lost during LLM extraction. It validates memory system health by injecting synthetic facts and measuring their survival through the extraction and recall process.

## Key Features
- Injects synthetic facts to test memory extraction health and measures recall accuracy
- Supports both mem0 config mode and universal HTTP mode for any add/search memory API
- Generates and validates improved extraction prompts to fix degraded extraction performance
- Provides detailed per-fact pass/fail analysis and health status scoring
- Backs up configurations before applying changes and isolates test data to prevent contamination

## Why It Matters for RAG Builders
It ensures critical facts survive the LLM extraction step in memory pipelines, preventing silent failures that degrade agent performance and reliability.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM
Automated review identified **LLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mem0
Automated review identified **mem0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fidelis
Automated review identified **fidelis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chroma
Automated review identified **Chroma** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
