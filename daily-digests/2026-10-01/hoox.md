---
title: "hoox-sh/hoox"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Bun", "Cloudflare Workers", "Durable Objects", "D1 (Cloudflare SQL)", "KV (Cloudflare Key-Value Store)", "R2 (Cloudflare Object Storage)", "Service Bindings", "Docker", "Git Submodules"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["trading framework", "edge computing", "serverless", "low-latency", "algorithmic trading"]
source: "https://github.com/hoox-sh/hoox"
stars: 2
language: "TypeScript"
last_updated: "2026-08-03T20:17:22Z"
discovered_at: "2026-08-03T20:28:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
HOOX is an ultra-low-latency edge trading framework designed for algorithmic trading, leveraging Cloudflare Workers to execute signals with a median latency of ~22ms across 330+ global edge locations. It provides a production-grade, serverless stack with no vendor lock-in.

## Key Features
- Ultra-low-latency execution (~22ms signal-to-ack) via Cloudflare Workers' global edge network
- Modular architecture with 10 specialized V8 isolates communicating via Service Bindings
- Multi-exchange support (Binance, Bybit, MEXC) with signed REST API calls
- Built-in AI risk management (trailing stops, kill switches) via agent-worker
- Comprehensive observability with analytics, monitoring, and CLI/TUI/dashboard interfaces

## Why It Matters for RAG Builders
HOOX enables AI-driven trading systems to execute signals with minimal latency at the edge, reducing round-trip times and improving real-time decision-making for RAG-based trading agents.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Durable Objects
Automated review identified **Durable Objects** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### D1 (Cloudflare SQL)
Automated review identified **D1 (Cloudflare SQL)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### KV (Cloudflare Key-Value Store)
Automated review identified **KV (Cloudflare Key-Value Store)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### R2 (Cloudflare Object Storage)
Automated review identified **R2 (Cloudflare Object Storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Service Bindings
Automated review identified **Service Bindings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Submodules
Automated review identified **Git Submodules** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
