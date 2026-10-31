---
title: "Ediebah/clinical-insight-agent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "dbt", "DuckDB", "Streamlit", "statsmodels", "scikit-learn", "Synthea", "OpenAI API", "Ollama", "CI/CD (GitHub Actions)", "Docker"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["AI data science", "healthcare analytics", "statistical modeling", "dbt warehouse", "self-healing agent"]
source: "https://github.com/Ediebah/clinical-insight-agent"
stars: 0
language: "Python"
last_updated: "2026-07-16T22:00:16Z"
discovered_at: "2026-07-16T22:02:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An AI agent that performs end-to-end data science over a dbt-modeled healthcare data warehouse, answering plain-English questions with rigorous statistical modeling, guardrails, and self-verification. It integrates synthetic EHR data, a governed dbt pipeline, and a Streamlit UI to deliver reproducible, PHI-free analyses with Word report exports.

## Key Features
- End-to-end statistical analysis from plain-English questions, including model selection, data preparation, assumption diagnostics, and guardrail checks
- Automated SQL generation with self-healing retries and read-only execution, plus lineage tracing and data-quality pre-flight checks
- Supports 15+ statistical models (regression, survival, causal inference, forecasting, A/B testing, power analysis, Bayesian methods) with deterministic guardrails for confidence intervals, FDR correction, and confounding detection
- Built-in vocabulary resolver for clinical terms (e.g., 'heart attack' → SNOMED codes) and cohort filtering to avoid empty-set analyses
- Word report export, monitoring dashboard, Docker support, and keyless local-model compatibility (Ollama/Llama3.1)

## Why It Matters for RAG Builders
It bridges the gap between LLM-driven SQL tools and rigorous statistical analysis, ensuring AI-generated insights are grounded in valid, reproducible, and clinically meaningful modeling with built-in guardrails.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### dbt
Automated review identified **dbt** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamlit
Automated review identified **Streamlit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### statsmodels
Automated review identified **statsmodels** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### scikit-learn
Automated review identified **scikit-learn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Synthea
Automated review identified **Synthea** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
