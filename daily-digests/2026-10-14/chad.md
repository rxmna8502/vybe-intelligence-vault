---
title: "nathansutton/chad"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "MLX", "Hugging Face Transformers", "MLX Quantization", "prompt_toolkit", "FastAPI", "PyPI", "GitHub Actions"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["local LLM", "offline coding agent", "Apple Silicon", "MLX inference", "speculative decoding"]
source: "https://github.com/nathansutton/chad"
stars: 9
language: "Python"
last_updated: "2026-09-03T22:02:02Z"
discovered_at: "2026-09-03T22:06:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
chad is a local, Apple Silicon-native coding agent that operates entirely offline using MLX for inference, targeting a single 27B model to perform code editing, testing, and debugging tasks directly on a user's laptop without external API dependencies.

## Key Features
- Runs entirely offline on Apple Silicon Macs with a single 27B model (~13 GB footprint)
- Implements DFlash2 block speculative decoding for 3-6x faster token generation compared to stock engines
- Persistent prefix KV cache reduces follow-up step prefill time from ~50s to ~0.75s
- Full-screen terminal UI with permission modes (normal, auto-accept, yolo, plan mode) and voice mode support
- Minimalist toolset (bash, edit, write, write_todos, done) focused on code execution and verification

## Why It Matters for RAG Builders
It provides a high-performance, offline-capable coding agent framework optimized for local LLM inference, reducing latency and dependency overhead for RAG builders integrating autonomous coding tools.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MLX
Automated review identified **MLX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face Transformers
Automated review identified **Hugging Face Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MLX Quantization
Automated review identified **MLX Quantization** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### prompt_toolkit
Automated review identified **prompt_toolkit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
