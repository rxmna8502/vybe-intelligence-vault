---
title: "gcrab/gcrab"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "Telegram Bot API", "OpenAI-compatible API", "JSONL event logging", "Systemd hardening"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["self-hosted", "security-focused", "minimalist", "replayable", "policy-gated"]
source: "https://github.com/gcrab/gcrab"
stars: 0
language: "Go"
last_updated: "2026-08-07T06:07:37Z"
discovered_at: "2026-08-07T06:12:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
gcrab is a lightweight, secure, and replayable self-hosted AI agent designed for minimal resource usage and strict security guarantees. It operates as a single static Go binary with zero dependencies, enforcing hard context budgets, policy-gated execution, and an append-only event log for transparency.

## Key Features
- Single static Go binary with zero dependencies, deployable on a 512MB VPS
- Hard context budget enforcement (default 8K tokens) with logged trims to prevent unbounded growth
- Append-only event log for full replayability and transparency, including policy decisions
- Strict policy engine for exec commands, covering all RCE vectors and enforcing deny-by-default rules
- Workspace jail with symlink protection and atomic memory constraints for security

## Why It Matters for RAG Builders
gcrab provides a secure, minimalist foundation for AI agents that prioritizes safety and transparency, making it ideal for RAG builders who need strict control over execution and context.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible API
Automated review identified **OpenAI-compatible API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL event logging
Automated review identified **JSONL event logging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Systemd hardening
Automated review identified **Systemd hardening** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
