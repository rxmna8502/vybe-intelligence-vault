---
title: "Vincent-P-essy/momus"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Anthropic API (Claude models)", "GitHub API", "Ruff", "mypy", "TOML", "Git", "pytest"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["AI code review", "adversarial verification", "GitHub automation", "precision-recall optimization", "evidence-based feedback"]
source: "https://github.com/Vincent-P-essy/momus"
stars: 0
language: "Python"
last_updated: "2026-07-14T10:06:41Z"
discovered_at: "2026-07-14T10:07:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Momus is an AI-powered code-review agent for GitHub pull requests that investigates the entire repository before drafting findings, ensuring only well-supported comments reach the PR. It uses an adversarial verification pass to filter out noise, optimizing for recall while maintaining precision through structured, evidence-based reviews.

## Key Features
- Two-stage review process: coverage-first reviewer followed by adversarial verifier to filter findings
- Repository-wide investigation using read-only tools (read_file, search, list_dir) to contextualize diffs
- Structured output with citations, severity ratings, and confidence levels for every finding
- Planted-bug evaluation harness to measure precision, recall, and cost per review
- Idempotent re-runs with content-addressed markers to avoid duplicate comments

## Why It Matters for RAG Builders
Momus reduces noise in AI-driven code reviews by ensuring only high-confidence, evidence-backed findings are posted, making it essential for teams seeking reliable automated code quality checks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API (Claude models)
Automated review identified **Anthropic API (Claude models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy
Automated review identified **mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
