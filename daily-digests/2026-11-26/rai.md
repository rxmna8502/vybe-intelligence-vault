---
title: "Classevelabs/rai"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "AVX2", "FMA", "F16C", "Cargo", "HTTP", "MCP (Model Context Protocol)", "REST API"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["CPU-only inference", "4-bit quantization", "AVX2 optimization", "speculative decoding", "local serving"]
source: "https://github.com/Classevelabs/rai"
stars: 3
language: "Rust"
last_updated: "2026-08-09T14:31:10Z"
discovered_at: "2026-08-09T14:37:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RAI is a CPU-only LLM inference workspace written in Rust, enabling 4-bit quantized model inference using hand-written AVX2 kernels. It provides a lightweight, auditable alternative to GPU-dependent stacks, supporting local serving via HTTP/MCP servers and speculative decoding for improved performance.

## Key Features
- Hand-written AVX2 kernels for CPU-only LLM inference without GPU or Python runtime dependencies
- 4-bit quantized model support with on-the-fly dequantization in registers
- Single `.raimodel` file format for compact model storage and efficient loading
- Speculative decoding (draft-model and self-speculative modes) for accelerated token generation
- Built-in HTTP chat server and REST/MCP server for local serving and agent integration

## Why It Matters for RAG Builders
RAI provides a lightweight, auditable, and CPU-only alternative for LLM inference, reducing dependency overhead and enabling local deployment for RAG systems without requiring GPUs or heavy ML frameworks.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AVX2
Automated review identified **AVX2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FMA
Automated review identified **FMA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### F16C
Automated review identified **F16C** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo
Automated review identified **Cargo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
