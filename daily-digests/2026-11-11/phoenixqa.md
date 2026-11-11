---
title: "MarcinMikula/PhoenixQA"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Playwright", "Ollama", "Anthropic API", "SQLite", "LLM (Large Language Models)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["test automation", "self-healing", "LLM-driven", "frontend testing", "Playwright"]
source: "https://github.com/MarcinMikula/PhoenixQA"
stars: 0
language: "Python"
last_updated: "2026-09-03T15:30:28Z"
discovered_at: "2026-09-03T15:37:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
PhoenixQA is a self-healing test automation framework designed to autonomously recover from frontend test failures caused by selector drift or DOM changes. It uses LLMs (via Ollama or Anthropic) to diagnose failures, propose fixes, and optionally apply them automatically while logging decisions for future self-training.

## Key Features
- Automated failure classification into locator resolution, actionability, or reference issues
- LLM-powered healing with both Safe (human-reviewed) and Autonomous (auto-applied) modes
- Structured logging of all healing decisions for audit and future self-training
- Deterministic policy-based validation of LLM-proposed fixes to prevent incorrect actions
- Modular architecture supporting multiple LLM providers (Ollama, Anthropic) and failure types

## Why It Matters for RAG Builders
PhoenixQA reduces test maintenance overhead by autonomously recovering from common frontend test failures, making AI-driven testing pipelines more resilient and reducing manual intervention.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Large Language Models)
Automated review identified **LLM (Large Language Models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
