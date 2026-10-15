---
title: "ArtJack/verdict"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Claude Code", "Bash", "JSON", "Git", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["QA automation", "delta testing", "flaky test detection", "release gating", "AI-assisted testing"]
source: "https://github.com/ArtJack/verdict"
stars: 1
language: "Python"
last_updated: "2026-09-01T18:58:25Z"
discovered_at: "2026-09-01T19:08:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Verdict is a skeptical QA agent with memory that tracks changes in codebases by comparing current runs against a stored baseline. It classifies failures, quarantines flaky tests, and provides a defensible verdict on code quality with delta-based reporting.

## Key Features
- Delta-based runs against a stored baseline with stable finding IDs and aging (NEW/STILL_OPEN/RESOLVED/REGRESSED)
- Five-class failure taxonomy (REAL_DEFECT, STALE_EXPECTATION, BRITTLE_TEST, ENVIRONMENT, FLAKY) with evidence requirements
- Defensible verdict system (pass | pass with risks | blocked | fail) with release-blocking logic
- Read-only operation with strict scope guards (no Edit tool, PreToolUse hooks, and Bash command deny-lists)
- Deterministic eval suite with scored fixtures and published results for self-validation

## Why It Matters for RAG Builders
Verdict provides a rigorous, memory-based QA framework that ensures AI-generated code is tested for regressions and flakiness, critical for maintaining reliability in AI engineering pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
