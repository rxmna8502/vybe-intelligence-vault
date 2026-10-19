---
title: "ahmed-hashim-pro/noisefloor"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "PyYAML", "Pydantic", "Subprocess", "JSON", "pytest"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["regression testing", "noise measurement", "RAG evaluation", "CI/CD integration", "deterministic evaluation"]
source: "https://github.com/ahmed-hashim-pro/noisefloor"
stars: 0
language: "Python"
last_updated: "2026-09-03T03:14:33Z"
discovered_at: "2026-09-03T22:12:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A regression harness designed to measure run-to-run noise in non-deterministic systems before identifying true regressions. It runs target systems multiple times, establishes a noise baseline, and flags changes only when deltas exceed observed variance, ensuring reliable regression detection without false positives.

## Key Features
- Noise-gated regression detection: only flags changes when deltas exceed observed variance
- Supports binary and continuous scorers with tailored significance rules
- Stores raw outputs for rescorability and offline analysis
- Zero API key or network dependencies; runs locally with subprocess targets
- Built-in safeguards against command injection and target command changes

## Why It Matters for RAG Builders
It provides a critical layer of reliability for RAG and AI systems by distinguishing true regressions from natural noise, reducing false positives in CI/CD pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyYAML
Automated review identified **PyYAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Subprocess
Automated review identified **Subprocess** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
