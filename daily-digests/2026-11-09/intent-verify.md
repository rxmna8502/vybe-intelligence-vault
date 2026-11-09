---
title: "hermes-labs-ai/intent-verify"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Markdown", "CLI", "Natural Language Processing (NLP)", "Tokenization"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["spec verification", "lexical coverage", "drift detection", "CI guardrail", "code quality"]
source: "https://github.com/hermes-labs-ai/intent-verify"
stars: 0
language: "Python"
last_updated: "2026-08-04T09:59:53Z"
discovered_at: "2026-08-04T10:41:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
intent-verify is a deterministic, zero-LLM command-line tool that checks for lexical coverage of acceptance items in a markdown spec (e.g., INTENT.md) against a repository's source code. It helps detect spec drift by comparing tokens in the spec with tokens in the codebase, returning a verdict of verified, partial, or missing.

## Key Features
- Deterministic lexical coverage analysis without LLM dependency
- Supports INTENT.md, SPEC.md, or handoff docs for acceptance items
- Configurable thresholds for verified, partial, and missing coverage
- Machine-readable JSON output for CI/CD integration
- Fast, lightweight, and integrates with pre-commit hooks

## Why It Matters for RAG Builders
It provides a fast, automated way to catch spec drift in codebases, ensuring alignment between requirements and implementation without relying on semantic AI models.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Natural Language Processing (NLP)
Automated review identified **Natural Language Processing (NLP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokenization
Automated review identified **Tokenization** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
