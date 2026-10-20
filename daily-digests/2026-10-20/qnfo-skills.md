---
title: "QNFO/qnfo-skills"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "YAML", "Git", "R2 (Cloudflare)", "DeepChat", "Markdown"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["skill management", "agent orchestration", "versioning", "sync protocol", "RAG"]
source: "https://github.com/QNFO/qnfo-skills"
stars: 0
language: "Python"
last_updated: "2026-08-07T19:58:00Z"
discovered_at: "2026-08-07T19:58:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A repository containing skill definitions and tooling for the DeepChat agent skill system, strictly scoped to skill files and governed by ADR policies for versioning, syncing, and deployment across local, GitHub, and R2 storage.

## Key Features
- Strict skill versioning and anti-duplication rules to prevent drift across sources
- Three-source-of-truth sync protocol (Local, GitHub, R2) with manual verification steps
- ADR-driven governance for skill lifecycle, including incident logging and remediation
- Tooling for skill sync and audit (e.g., `skill-sync.js`, sync verification scripts)
- Prohibits GitHub Releases and enforces skill-scoped tagging for ecosystem milestones

## Why It Matters for RAG Builders
It provides a structured, version-controlled system for managing agent skills essential for maintaining consistency and scalability in RAG deployments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### R2 (Cloudflare)
Automated review identified **R2 (Cloudflare)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepChat
Automated review identified **DeepChat** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
