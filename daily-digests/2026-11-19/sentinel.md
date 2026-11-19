---
title: "marcuspat/Sentinel"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "ratatui", "clap", "tokio", "serde", "sha2", "rcgen", "rustls", "LLM backends (Anthropic, OpenAI, Ollama)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["agentic systems", "audit logging", "policy engine", "system administration", "LLM safety"]
source: "https://github.com/marcuspat/Sentinel"
stars: 0
language: "Rust"
last_updated: "2026-08-08T22:22:36Z"
discovered_at: "2026-08-08T22:31:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Sentinel is a secure, auditable agentic system administration tool written in Rust that implements an Investigate → Plan → Approve → Act workflow. It uses a deny-by-default policy engine, operator approval gates, and hash-chained audit logs to safely execute LLM-driven system tasks.

## Key Features
- Deny-by-default policy engine with kill switch and resource guards
- Operator approval gate for all mutating actions
- Hash-chained SHA-256 audit log with tamper detection
- 14 built-in capabilities (filesystem, process, packages, network, metrics)
- Pluggable LLM backends (Anthropic, OpenAI, Ollama) and fleet mode with mTLS

## Why It Matters for RAG Builders
Sentinel provides a critical safety layer for AI-driven system administration by enforcing strict approval workflows and tamper-proof audit trails, reducing operational risks in agentic environments.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ratatui
Automated review identified **ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### clap
Automated review identified **clap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tokio
Automated review identified **tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### serde
Automated review identified **serde** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sha2
Automated review identified **sha2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rcgen
Automated review identified **rcgen** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rustls
Automated review identified **rustls** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM backends (Anthropic, OpenAI, Ollama)
Automated review identified **LLM backends (Anthropic, OpenAI, Ollama)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
