---
title: "PureBlueFrank/promo-mind"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "LangGraph", "SQLite", "Pydantic", "LangChain", "OpenAI API (optional)", "Ruff", "Mypy", "Pytest"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["coupon strategy", "ROI simulation", "workflow orchestration", "approval routing", "deterministic decision-making"]
source: "https://github.com/PureBlueFrank/promo-mind"
stars: 0
language: "Python"
last_updated: "2026-08-08T08:35:30Z"
discovered_at: "2026-08-08T08:42:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
promo-mind is a locally runnable coupon strategy decision system that generates structured coupon strategies based on user profiles, simulates incremental GMV and net ROI, and routes approvals based on budget thresholds. It uses LangGraph for workflow orchestration and SQLite for state persistence.

## Key Features
- Deterministic coupon strategy generation with optional LLM fallback for open-ended decisions
- ROI simulation with fixed-cost kernels and incremental GMV prediction
- Budget-based approval routing (auto-approve, manual review, multi-signature)
- LangGraph workflow orchestration with SQLite checkpointing for state persistence and recovery
- Comprehensive evaluation suite with 11 YAML test scenarios and CI regression gates

## Why It Matters for RAG Builders
It provides a reproducible framework for AI-driven coupon strategy decisions, enabling RAG builders to integrate deterministic ROI-aware workflows with optional LLM-based strategy generation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API (optional)
Automated review identified **OpenAI API (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mypy
Automated review identified **Mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
