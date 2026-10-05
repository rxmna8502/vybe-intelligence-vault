---
title: "imlach/cora"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Docker", "GitHub Actions", "LLM (Local or Self-hosted)", "BM25", "Qdrant", "TEI (Text Embedding Inference)", "Git", "GitHub API"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["PR Review", "Self-hosted", "Convention-driven", "Agentic", "Merge gating"]
source: "https://github.com/imlach/cora"
stars: 0
language: "Python"
last_updated: "2026-08-04T17:48:46Z"
discovered_at: "2026-08-04T17:49:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cora is a self-hostable, convention-oriented agentic PR reviewer designed for teams running their own LLMs. It reviews pull requests based on repository-specific conventions, retrieves relevant context, and posts verdict-bearing reviews to gate merges, prioritizing safety and reliability over stateless comment generation.

## Key Features
- Convention-based PR review using DECISIONS.md, CLAUDE.md, and AGENTS.md rules
- Pluggable provider architecture for retrieval, Git, and reporting (supports BM25, Qdrant, GitHub, etc.)
- Default-deny trigger policy and reasoning-leak stripping for security
- Tiered wall/token budgets with fallback to larger endpoints for context overflow
- Dogfooding with self-review of PRs in the same repository

## Why It Matters for RAG Builders
cora enables secure, self-hosted PR review automation that enforces repository-specific conventions and merge gating, reducing reliance on hosted LLM APIs while ensuring reliable, inspectable verdicts for critical code changes.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Local or Self-hosted)
Automated review identified **LLM (Local or Self-hosted)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TEI (Text Embedding Inference)
Automated review identified **TEI (Text Embedding Inference)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
