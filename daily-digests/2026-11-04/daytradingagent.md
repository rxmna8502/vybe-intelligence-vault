---
title: "xhqing/DayTradingAgent"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Claude Code", "Futu OpenD API", "Tiger Brokers SDK", "GLM-5.2 (LLM)", "AutoMemory", "Shell Scripting"]
quality_score: 8
rag_relevance: 6
deployment_complexity: "High"
tags: ["trading agent", "signal generation", "AI-driven analysis", "market monitoring", "disciplined execution"]
source: "https://github.com/xhqing/DayTradingAgent"
stars: 0
language: "Python"
last_updated: "2026-07-18T09:18:27Z"
discovered_at: "2026-07-18T09:23:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Victor is a disciplined AI day-trading execution agent for Hong Kong and US equities, designed to analyze market data, compute trading signals, and emit structured buy/sell/stop recommendations while leaving execution to a human trader. It operates in 'signal mode' with strict guardrails and fact-verification rules.

## Key Features
- Emits structured trading signals (open/close/trailing stop/take-profit) with computed stop prices and expected value (EV) validation
- Strict guardrails: one ticker at a time, EV ≥ 0, no derivatives, flat by end of day, and mandatory stop prices
- Multi-source market data integration (Futu OpenD for HK/US, Tiger Brokers for HK backup)
- Fact-verification pipeline before emitting any signal (entity identity, arithmetic, trading calendar, fees)
- Human-in-the-loop execution model with automated signal logging and review

## Why It Matters for RAG Builders
Victor provides a rigorous framework for AI-driven trading signal generation with strict discipline and fact-checking, reducing execution risks for RAG builders integrating trading capabilities.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Futu OpenD API
Automated review identified **Futu OpenD API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tiger Brokers SDK
Automated review identified **Tiger Brokers SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GLM-5.2 (LLM)
Automated review identified **GLM-5.2 (LLM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AutoMemory
Automated review identified **AutoMemory** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
