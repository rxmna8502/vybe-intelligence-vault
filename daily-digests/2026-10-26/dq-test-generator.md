---
title: "Mona-Alkhatib/dq-test-generator"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Claude Sonnet 4.6", "DuckDB", "dbt", "Pydantic", "PyYAML", "Typer", "pytest"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["dbt", "data quality", "test generation", "Claude", "DuckDB"]
source: "https://github.com/Mona-Alkhatib/dq-test-generator"
stars: 0
language: "Python"
last_updated: "2026-07-12T22:43:50Z"
discovered_at: "2026-07-12T22:44:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A CLI tool that profiles DuckDB warehouse tables, uses Claude to generate dbt test proposals, validates them, and outputs a ready-to-commit schema.yml with per-test rationales. It automates data quality test generation for dbt models.

## Key Features
- Automated profiling of warehouse tables to capture key metrics (row counts, null rates, distinct counts, etc.)
- Single-turn LLM (Claude) call to propose dbt tests with grounded rationales based on profile data
- Validation pipeline to ensure generated tests are syntactically correct and column references exist
- Outputs schema.yml and rationale.md files for immediate use in dbt projects
- Integrates with dbt-sentinel for end-to-end data quality workflows

## Why It Matters for RAG Builders
It automates the tedious and error-prone process of writing dbt tests, ensuring data quality with minimal manual effort and grounded rationales from warehouse profiling.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Sonnet 4.6
Automated review identified **Claude Sonnet 4.6** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### dbt
Automated review identified **dbt** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyYAML
Automated review identified **PyYAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Typer
Automated review identified **Typer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
