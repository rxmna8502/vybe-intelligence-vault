---
title: "justinstimatze/calque"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Python", "Rust", "TypeScript", "Svelte", "Static Analysis", "Embedded Language Runners", "LLM Integration (Anthropic API)"]
quality_score: 7
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["drift detection", "code duplication", "behavioral clones", "Type-4 clone detection", "prose drift"]
source: "https://github.com/justinstimatze/calque"
stars: 1
language: "Go"
last_updated: "2026-09-01T09:03:00Z"
discovered_at: "2026-09-01T09:12:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
calque is a drift detection tool that identifies multi-path behavioral clones in code and prose, where a single contract or concept is implemented in multiple places that have silently diverged. It surfaces these duplicates so they can be collapsed into a single source or kept in sync with differential tests.

## Key Features
- Multi-signal code analysis (emitted strings, state writes, returned keys, callees, name-stem, input field-sets, domain constants) for detecting Type-4 behavioral clones
- Prose drift detection via hyphenated-compound frequency and allow-list validation
- Shared registry for adjudicated memory to avoid re-litigating past decisions
- Standalone generators for whole-repo audits (e.g., propose-deep, propose-context, confess)
- LLM adjudication support for large-scale candidate evaluation (with caching to reduce costs)

## Why It Matters for RAG Builders
It helps RAG builders maintain consistency in their codebases by identifying and collapsing divergent implementations of the same contract, reducing technical debt and improving maintainability.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Svelte
Automated review identified **Svelte** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Analysis
Automated review identified **Static Analysis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embedded Language Runners
Automated review identified **Embedded Language Runners** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Integration (Anthropic API)
Automated review identified **LLM Integration (Anthropic API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
