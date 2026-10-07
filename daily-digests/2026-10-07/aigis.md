---
title: "killertcell428/aigis"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "CLI", "Docker", "HMAC-SHA256", "Apache 2.0", "GitHub Actions", "OpenSSF Scorecard"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI agent security", "deterministic guardrails", "audit logging", "compliance automation", "MCP protection"]
source: "https://github.com/killertcell428/aigis"
stars: 51
language: "Python"
last_updated: "2026-07-12T17:01:43Z"
discovered_at: "2026-07-12T17:03:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Aigis is an open-source trust layer designed to add deterministic guardrails, tamper-evident audit logs, and compliance-ready evidence packs to autonomous AI agents like Claude Code. It enables security teams to approve agent deployments by providing runtime monitoring, policy enforcement, and standardized trust packs without requiring vendor lock-in or runtime dependencies.

## Key Features
- PreToolUse hooks for real-time tool call scanning and blocking of malicious actions (e.g., SQL injection, RCE) before execution
- Tamper-evident audit logs with HMAC-SHA256 signing and hash-chaining for integrity verification
- Automated generation of IT-approval packs with compliance matrices (ISO/IEC 27001, NIST AI RMF, OWASP LLM Top 10) and incident runbooks
- Support for 165+ security patterns derived from 2025–26 LLM security research, covering prompt injection, tool poisoning, memory attacks, and indirect RAG injection
- Zero runtime dependencies, independent OSS under Apache 2.0 license, and compatibility with Claude Code, MCP, LangGraph, and other agent frameworks

## Why It Matters for RAG Builders
Aigis bridges the critical gap between AI agent adoption and security team approval by providing deterministic guardrails and tamper-evident audit trails, enabling safe deployment of autonomous agents in enterprise environments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC-SHA256
Automated review identified **HMAC-SHA256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache 2.0
Automated review identified **Apache 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenSSF Scorecard
Automated review identified **OpenSSF Scorecard** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
