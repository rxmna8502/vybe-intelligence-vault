---
title: "Yachiyo-5i/Attest"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Python", "FastAPI", "React", "SQLite", "Docker", "Bootstrapping", "Statistical Testing"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["LLM verification", "model consistency", "behavioral fingerprinting", "black-box testing", "API integrity"]
source: "https://github.com/Yachiyo-5i/Attest"
stars: 0
language: "TypeScript"
last_updated: "2026-09-01T14:50:33Z"
discovered_at: "2026-09-04T02:19:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Attest is a black-box consistency verifier for third-party LLM APIs that detects model substitution, downgrades, or dynamic routing by comparing behavioral fingerprints against a trusted reference baseline. It uses statistical testing (Jensen–Shannon divergence) to identify inconsistencies without relying on self-reported model identities or headers.

## Key Features
- Behavioral fingerprinting via empirical answer distributions (random numbers, colors, letters, etc.)
- Bootstrapped Jensen–Shannon divergence (JSD) for statistical comparison against reference baselines
- Per-model calibrated thresholds to avoid false positives/negatives
- Transport and parameter integrity checks (context truncation, tool call alterations, etc.)
- Reproducible evidence reports with confidence intervals and clear verdicts (consistent, incompatible, inconclusive, etc.)

## Why It Matters for RAG Builders
Attest provides critical statistical evidence to verify that third-party LLM APIs serve the claimed models, preventing fraud, downgrades, or dynamic routing that could degrade RAG system reliability.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bootstrapping
Automated review identified **Bootstrapping** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Statistical Testing
Automated review identified **Statistical Testing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
