---
title: "markndg/arsenic"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "OpenAI API", "Ollama", "Anthropic API", "Google API", "HTML/JSON reporting", "CLI"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["LLM evaluation", "behavioral drift detection", "model upgrade safety", "prompt engineering", "compatibility testing"]
source: "https://github.com/markndg/arsenic"
stars: 3
language: "Rust"
last_updated: "2026-07-29T09:24:02Z"
discovered_at: "2026-08-01T22:55:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Arsenic is a tool for detecting behavioral drift between LLM versions before deployment, distinguishing blocking regressions from presentation or telemetry drift. It generates compatibility fingerprints and validated prompt patches to ensure safe model upgrades.

## Key Features
- Compares two model endpoints to identify regressions, improvements, or neutral changes across seven dimensions (morphology, tone, factual accuracy, schema compliance, instruction following, refusal boundaries, and claim consistency).
- Generates a behavioral fingerprint (radar chart) to visualize baseline retention and material changes between model versions.
- Includes a mutation engine to automatically generate and validate prompt fixes for blocking regressions, providing actionable migration guidance.
- Supports OpenAI-compatible endpoints (OpenAI, Ollama, vLLM, LM Studio, Groq) and native adapters for Anthropic and Google models.
- Produces self-contained HTML/JSON reports with executive summaries, risk classifications, and detailed probe results for informed deployment decisions.

## Why It Matters for RAG Builders
Arsenic ensures safe LLM model upgrades by detecting critical behavioral regressions before deployment, reducing the risk of silent failures in production systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google API
Automated review identified **Google API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/JSON reporting
Automated review identified **HTML/JSON reporting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
