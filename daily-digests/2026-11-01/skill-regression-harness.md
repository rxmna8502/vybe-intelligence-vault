---
title: "neeshykha/skill-regression-harness"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "JSON", "CLI", "OAuth", "Static Analysis", "Regression Testing"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["skill-regression", "claude-ai", "prompt-matching", "dispatch-validation", "authentication-check"]
source: "https://github.com/neeshykha/skill-regression-harness"
stars: 0
language: "Python"
last_updated: "2026-08-29T14:47:52Z"
discovered_at: "2026-09-04T02:21:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A regression testing harness for Claude AI skills that validates static correctness and real-world dispatch behavior to detect silent failures in skill routing, authentication, and prompt matching. It combines static analysis with live CLI testing under controlled tool permissions.

## Key Features
- Static layer (Layer 0) for deterministic checks of skill metadata, frontmatter, and coverage gaps
- Live dispatch layer (Layer 1) testing real prompts against installed skills without executing side effects
- Preflight authentication checks to catch OAuth session expiry silently returning success
- Coverage validation to ensure new skills don't silently reduce test coverage
- Baseline recording and comparison to detect description drift without unnecessary re-runs

## Why It Matters for RAG Builders
It prevents silent failures in AI skill routing that can go undetected for months, ensuring reliable prompt dispatch in production environments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Analysis
Automated review identified **Static Analysis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regression Testing
Automated review identified **Regression Testing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
