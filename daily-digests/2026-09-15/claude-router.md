---
title: "hermes-labs-ai/claude-router"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Ollama", "nomic-embed-text", "NumPy", "Requests", "JSON"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["prompt routing", "Claude API optimization", "cost reduction", "local embeddings", "model selection"]
source: "https://github.com/hermes-labs-ai/claude-router"
stars: 0
language: "Python"
last_updated: "2026-08-04T08:53:00Z"
discovered_at: "2026-08-04T10:41:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
claude-router is a local prompt routing tool that selects the optimal Claude model tier (Haiku, Sonnet, or Opus) and prepends task-specific scaffolds to prompts using local embeddings, reducing API costs while maintaining or improving output quality for evaluation, research, content, and review tasks.

## Key Features
- Local, deterministic routing without LLM calls for classification (~10ms response time)
- Pre-computed routing table and task-category centroids for fast model/scaffold selection
- Five validated scaffolds (e.g., calibrated-scoring, insight-first) to improve output structure and quality
- Anti-findings table to avoid known failure modes (e.g., scaffolds breaking operational tasks or coding)
- Cost savings validated through benchmarks (e.g., ~$620/month for 10k calls vs $6,800 for all Opus)

## Why It Matters for RAG Builders
claude-router helps RAG builders optimize Claude API costs by automatically selecting the cheapest sufficient model tier and applying task-specific scaffolds to improve output quality, reducing unnecessary spending on higher-tier models.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nomic-embed-text
Automated review identified **nomic-embed-text** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Requests
Automated review identified **Requests** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
