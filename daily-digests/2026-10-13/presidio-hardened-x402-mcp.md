---
title: "presidio-v/presidio-hardened-x402-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Presidio (PII detection)", "spaCy (NLP for PII detection)", "Redis (optional for replay detection)", "PyPI (package distribution)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["PII detection", "payment security", "MCP server", "agent safety", "x402"]
source: "https://github.com/presidio-v/presidio-hardened-x402-mcp"
stars: 2
language: "Python"
last_updated: "2026-08-02T11:58:32Z"
discovered_at: "2026-08-02T12:02:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that acts as a pre-payment safety gate for x402 agentic payments, detecting and redacting PII in payment metadata, enforcing spending policies, and preventing duplicate payments before transactions are signed or executed.

## Key Features
- Pre-payment PII screening in payment metadata (emails, names, etc.) to prevent unintended data leakage
- Spending policy enforcement with configurable per-call, daily, and per-endpoint limits
- Duplicate payment detection via HMAC-SHA256 fingerprinting with cross-process support
- Zero-config in-process mode or optional HTTP-proxy mode for centralized screening
- Designed for composability with other MCP servers (e.g., endpoint safety, payment execution)

## Why It Matters for RAG Builders
It ensures agentic payments are secure and compliant by catching PII leaks, budget overruns, and duplicate transactions before any data or funds leave the agent host.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Presidio (PII detection)
Automated review identified **Presidio (PII detection)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### spaCy (NLP for PII detection)
Automated review identified **spaCy (NLP for PII detection)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis (optional for replay detection)
Automated review identified **Redis (optional for replay detection)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI (package distribution)
Automated review identified **PyPI (package distribution)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
