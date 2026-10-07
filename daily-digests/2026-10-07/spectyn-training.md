---
title: "markl-a/spectyn-training"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "MCP (Model Context Protocol)", "Unsloth", "Axolotl", "LoRA", "CI/CD (GitHub Actions)", "JSONL", "Alpaca dataset format"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["post-training", "agentic fine-tuning", "deterministic evaluation", "MCP server", "phantom-mesh"]
source: "https://github.com/markl-a/spectyn-training"
stars: 1
language: "Python"
last_updated: "2026-08-08T16:28:43Z"
discovered_at: "2026-08-08T16:35:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
phantom-training is a deterministic post-training orchestrator for agentic fine-tuning within the phantom-mesh ecosystem. It converts high-value agent execution trajectories into reproducible fine-tune datasets and evaluations, enabling models to improve over time without external dependencies.

## Key Features
- Converts agent execution trajectories into Alpaca-formatted fine-tune datasets with zero external dependencies (stdlib-only for Tier 1).
- Deterministic held-out evaluation floor with exact-match and token-F1 metrics for reproducibility.
- Hermetic judge system for sandboxed scoring of code and QA tasks.
- MCP server integration exposing `training_eval` tool for seamless integration with phantom-mesh agents.
- Reproducible artifact bundles (demo-loop, backend-lifecycle, eval-judge-scenario) for offline validation and release gates.

## Why It Matters for RAG Builders
It enables RAG/AI stack builders to transform transient agent execution data into actionable fine-tune datasets and evaluations, ensuring models improve over time with deterministic, reproducible pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unsloth
Automated review identified **Unsloth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axolotl
Automated review identified **Axolotl** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LoRA
Automated review identified **LoRA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alpaca dataset format
Automated review identified **Alpaca dataset format** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
