---
title: "DaizeDong/auto-support"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Claude Code", "Discord API", "DLP (Data Loss Prevention)", "Git", "DPAPI (for secrets management)", "WSL2/devcontainer (for sandboxing)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Discord bot", "leak prevention", "public docs retrieval", "fail-closed security", "founder escalation"]
source: "https://github.com/DaizeDong/auto-support"
stars: 0
language: "Python"
last_updated: "2026-07-17T08:01:32Z"
discovered_at: "2026-07-17T08:07:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Claude Code plugin that answers product-specific Discord user queries using only public documentation, enforced by fail-closed leak guards and founder escalation for uncertain responses. Designed to prevent accidental secret or PII leakage while providing grounded, citable answers.

## Key Features
- Fail-closed security model with four deterministic leak guards (permissions, PreToolUse hook, stdlib detection, egress DLP gate)
- Public documentation-only retrieval with strict allowlist/denylist enforcement
- Founder escalation for uncertain or out-of-bound queries
- Configurable per-product knowledge boundaries via isolated policy files
- Human-reviewed draft mode before auto-posting (MVP stage)

## Why It Matters for RAG Builders
It provides a secure, fail-closed framework for building AI-powered support bots that answer Discord queries without risking secret or PII leakage, critical for RAG systems handling sensitive product documentation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord API
Automated review identified **Discord API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DLP (Data Loss Prevention)
Automated review identified **DLP (Data Loss Prevention)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DPAPI (for secrets management)
Automated review identified **DPAPI (for secrets management)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WSL2/devcontainer (for sandboxing)
Automated review identified **WSL2/devcontainer (for sandboxing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
