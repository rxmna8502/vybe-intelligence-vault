---
title: "Jaeuk-Han/landmine"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Git", "CLI", "Markdown", "JSON"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["code analysis", "git history", "risk assessment", "change impact", "static analysis"]
source: "https://github.com/Jaeuk-Han/landmine"
stars: 0
language: "Python"
last_updated: "2026-08-04T07:36:59Z"
discovered_at: "2026-08-04T07:40:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Landmine analyzes local Git repositories to identify hidden code-change risks by examining historical intent, assumptions, and direct impact of changes. It provides evidence-led review aids for safe code modifications without executing source or making network requests.

## Key Features
- Recovers historical intent from Git blame and commit metadata for targeted code locations
- Detects bounded hidden assumptions in Python code (e.g., non-empty collections, required keys)
- Performs direct impact analysis for Python changes (depth-1 scope) to assess blast radius
- Generates deterministic, non-executing safe change plans with preconditions and verification steps
- Outputs results in human-readable Markdown or structured JSON (landmine.result.v1 schema)

## Why It Matters for RAG Builders
Landmine helps AI agents and developers safely modify unfamiliar code by uncovering hidden risks and assumptions before changes are made, reducing the likelihood of unintended consequences.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
