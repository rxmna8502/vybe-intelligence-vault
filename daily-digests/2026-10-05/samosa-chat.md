---
title: "deepanwadhwa/samosa-chat"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["C", "Qwen3.6-35B-A3B", "Apple Silicon (ARM64)", "Docker", "macOS", "Hugging Face", "SIMD kernels", "Group-32 quantization"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["local LLM inference", "Apple Silicon optimization", "CPU-only execution", "model quantization", "offline AI"]
source: "https://github.com/deepanwadhwa/samosa-chat"
stars: 16
language: "C"
last_updated: "2026-07-15T20:05:26Z"
discovered_at: "2026-07-15T20:07:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Samosa Chat enables running the Qwen3.6-35B-A3B large language model locally on a 16GB Apple Silicon Mac without requiring a GPU or cloud services. It provides a terminal-based and web-based interface for interactive chat, leveraging a custom C-based inference engine and group-32 quantization to optimize memory usage.

## Key Features
- Runs 35B-parameter Qwen3.6 model on 16GB RAM Macs using group-32 quantization and expert caching
- Provides both terminal and web-based chat interfaces with streaming token output
- Atomic installer with SHA-256 verification, rollback support, and resumeable downloads
- No GPU or cloud dependency; runs entirely on CPU with Apple Silicon native support
- Supports conversation resuming via atomic snapshots and deterministic sampling

## Why It Matters for RAG Builders
Samosa Chat demonstrates how to efficiently run large language models on resource-constrained hardware, offering a blueprint for optimizing memory and storage usage in local AI deployments.

## Tech Stack Deep Dive
### C
Automated review identified **C** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3.6-35B-A3B
Automated review identified **Qwen3.6-35B-A3B** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apple Silicon (ARM64)
Automated review identified **Apple Silicon (ARM64)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS
Automated review identified **macOS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face
Automated review identified **Hugging Face** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SIMD kernels
Automated review identified **SIMD kernels** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Group-32 quantization
Automated review identified **Group-32 quantization** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
