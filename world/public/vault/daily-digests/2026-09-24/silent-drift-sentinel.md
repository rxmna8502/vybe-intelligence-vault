---
title: "StephenSook/silent-drift-sentinel"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "LangGraph", "FastAPI", "NannyML", "DataHub", "Claude", "LiteLLM", "Next.js", "Expo", "PostgreSQL", "Langfuse", "LightGBM", "NannyML", "Great Expectations", "dbt"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["ML drift detection", "Data lineage traversal", "Root cause analysis", "Metadata write-back", "On-call AI agent"]
source: "https://github.com/StephenSook/silent-drift-sentinel"
stars: 0
language: "Python"
last_updated: "2026-07-19T20:36:59Z"
discovered_at: "2026-07-19T20:44:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An on-call AI agent that detects silent ML model degradation, traces the root cause through DataHub's lineage to the upstream data column, identifies the owner, and writes a durable `drift_causation` object back to the model catalog for future agents or engineers to inherit.

## Key Features
- Label-free drift detection using NannyML CBPE and statistical tests (KS/Chi-squared with FDR)
- Deterministic lineage traversal in DataHub to identify upstream data columns and owners
- Agentic tool-calling loop (opt-in) with Claude for dynamic root-cause reasoning
- Durable write-back of `drift_causation`, `proposed_fix`, and RCA to the model catalog
- Human-in-the-loop approval gate and recall mechanism to avoid duplicate work

## Why It Matters for RAG Builders
It transforms a catalog from a static lookup tool into a dynamic knowledge repository where AI agents leave actionable insights for future responders, closing the loop on silent ML degradation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NannyML
Automated review identified **NannyML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DataHub
Automated review identified **DataHub** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude
Automated review identified **Claude** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LiteLLM
Automated review identified **LiteLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Expo
Automated review identified **Expo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Langfuse
Automated review identified **Langfuse** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LightGBM
Automated review identified **LightGBM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NannyML
Automated review identified **NannyML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Great Expectations
Automated review identified **Great Expectations** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### dbt
Automated review identified **dbt** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
