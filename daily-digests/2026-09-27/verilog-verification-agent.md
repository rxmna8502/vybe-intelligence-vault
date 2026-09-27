---
title: "liz312948-crypto/verilog-verification-agent"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Icarus Verilog", "JSON", "PEP 440", "pytest", "ruff", "mypy", "OpenAI API (optional)"]
quality_score: 7
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["Verilog generation", "RTL repair", "deterministic verification", "Icarus Verilog", "audiable reports"]
source: "https://github.com/liz312948-crypto/verilog-verification-agent"
stars: 0
language: "Python"
last_updated: "2026-07-15T05:20:27Z"
discovered_at: "2026-07-15T05:29:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight Python harness for generating and repairing Verilog RTL code using deterministic testbenches and Icarus Verilog simulation. It enforces strict JSON circuit specifications, limits model repairs to three attempts, and produces auditable reports with diagnostics and artifacts.

## Key Features
- Strict JSON circuit specifications with SHA-256 validation
- Deterministic Python testbenches and oracles for seven fixed circuit types
- Bounded repair loop (max 3 attempts) with real Icarus compile/simulation feedback
- Immutable evidence collection (logs, diagnostics, and artifacts)
- Security controls (fixed argv, timeouts, log capping, and module validation)

## Why It Matters for RAG Builders
It provides a secure, auditable framework for generating and repairing Verilog RTL with deterministic verification, reducing hallucination risks in AI-driven hardware design workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Icarus Verilog
Automated review identified **Icarus Verilog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PEP 440
Automated review identified **PEP 440** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy
Automated review identified **mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API (optional)
Automated review identified **OpenAI API (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
