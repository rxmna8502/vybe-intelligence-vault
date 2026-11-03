---
title: "She1kh144/medical-agent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "LLM Function Calling", "HTTP API", "DeepSeek API", "JSONL Tracing", "Uvicorn", "Rate Limiting", "Unit Testing"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["medical AI", "function calling", "deterministic guards", "Russian language", "trace evaluation"]
source: "https://github.com/She1kh144/medical-agent"
stars: 0
language: "Python"
last_updated: "2026-08-07T14:15:05Z"
discovered_at: "2026-08-07T14:18:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Russian-language LLM agent that coordinates medical document retrieval, drug interaction checks, mock pharmacy inventory lookups, and structured escalation for medical queries. It implements a hand-written function-calling loop with deterministic input guards and trace-aware evaluation for safety and reliability.

## Key Features
- Hand-written function-calling loop with no external agent framework for full control flow visibility
- Deterministic input guards for pediatric dosing, emergency symptoms, and self-harm intent before any model call
- Trace-aware LLM judge for groundedness verification and unsupported claim detection
- Integration with medical-rag for document retrieval and drug interaction checks via HTTP
- Structured escalation mechanism with machine-readable outcomes and rate limiting

## Why It Matters for RAG Builders
It demonstrates a production-grade, safety-first approach to building LLM agents for high-stakes domains like healthcare, emphasizing deterministic controls and traceable evaluation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Function Calling
Automated review identified **LLM Function Calling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek API
Automated review identified **DeepSeek API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL Tracing
Automated review identified **JSONL Tracing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Uvicorn
Automated review identified **Uvicorn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rate Limiting
Automated review identified **Rate Limiting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unit Testing
Automated review identified **Unit Testing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
