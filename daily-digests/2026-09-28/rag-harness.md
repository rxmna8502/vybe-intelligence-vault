---
title: "saparsha/rag-harness"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "PyYAML", "HDRHistogram", "NumPy", "scikit-learn", "Sentence-Transformers", "FastAPI", "Pydantic", "Mermaid.js (for diagrams)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["RAG evaluation", "load testing", "hallucination detection", "synthetic query generation", "offline scoring"]
source: "https://github.com/saparsha/rag-harness"
stars: 0
language: "Python"
last_updated: "2026-08-07T11:03:11Z"
discovered_at: "2026-08-07T11:04:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A load-testing and evaluation harness for RAG systems that drives synthetic queries at controlled rates, records full request traces, and scores retrieval quality and generation faithfulness offline against ground truth. It measures hallucination rates under realistic load and separates retrieval, generation, and performance planes for actionable insights.

## Key Features
- Corpus-grounded synthetic query generation with gold chunk alignment for accurate evaluation
- Open-loop load generation with coordinated omission correction to measure true user-perceived latency
- Decoupled retrieval and generation scoring planes for independent analysis of recall, faithfulness, and performance
- Stratified query difficulty and contamination filtering to ensure benchmark realism
- HDR histogram aggregation for precise latency and throughput measurement

## Why It Matters for RAG Builders
It provides the only practical way to measure hallucination rates under real-world load conditions, enabling RAG builders to identify and fix failures invisible to traditional single-threaded evaluations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyYAML
Automated review identified **PyYAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HDRHistogram
Automated review identified **HDRHistogram** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### scikit-learn
Automated review identified **scikit-learn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence-Transformers
Automated review identified **Sentence-Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js (for diagrams)
Automated review identified **Mermaid.js (for diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
