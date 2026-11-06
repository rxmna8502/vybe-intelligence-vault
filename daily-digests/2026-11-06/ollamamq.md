---
title: "Chleba/ollamaMQ"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Tokio", "Axum", "TUI (Terminal User Interface)", "Docker", "HTTP/REST", "Async I/O"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["load balancing", "Ollama proxy", "model routing", "async queue", "TUI dashboard"]
source: "https://github.com/Chleba/ollamaMQ"
stars: 117
language: "Rust"
last_updated: "2026-09-02T17:02:16Z"
discovered_at: "2026-09-03T22:13:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ollamaMQ is a high-performance, asynchronous message queue dispatcher and load balancer designed to proxy and optimize requests to Ollama or LM Studio API instances. It intelligently routes, queues, and balances requests across multiple backends using advanced scheduling and model-aware routing.

## Key Features
- Multi-backend load balancing with least-connections and round-robin scheduling
- Model-aware routing that prioritizes backends with the requested model already loaded in GPU memory
- Per-user FIFO queuing and fair-share scheduling to prevent monopolization
- Real-time TUI dashboard for monitoring backend health, queue depths, and throughput
- Admin API for dynamic model loading/unloading and backend health checks

## Why It Matters for RAG Builders
It optimizes and scales LLM inference workloads by intelligently routing requests to the most suitable backend, reducing latency and improving resource utilization for RAG and AI pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Terminal User Interface)
Automated review identified **TUI (Terminal User Interface)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST
Automated review identified **HTTP/REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Async I/O
Automated review identified **Async I/O** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
