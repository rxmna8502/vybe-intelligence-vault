---
title: "granolacowboy/intake-triage-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Pydantic", "JSONL", "Fuzzy Matching"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["legal intake", "conflict screening", "deterministic validation", "MCP server", "provenance tracking"]
source: "https://github.com/granolacowboy/intake-triage-mcp"
stars: 0
language: "Python"
last_updated: "2026-09-03T02:11:13Z"
discovered_at: "2026-09-03T02:21:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A deterministic MCP server for legal intake triage that handles practice-area lookup, conflict screening, matter validation, and follow-up drafting with a hard conflicts gate. It ensures defensible, structured record-keeping by separating language work (client-side) from deterministic validation and logging (server-side).

## Key Features
- Hard conflicts gate that refuses to log intakes with unchecked conflicts unless explicitly overridden
- Deterministic tools with no LLM or network calls, ensuring reproducible outputs
- Append-only triage logging with provenance, citations, and permanent overrides
- Pydantic-based schema validation for all inputs, rejecting malformed data before processing
- Predefined risk matrix and follow-up templates for structured matter handling

## Why It Matters for RAG Builders
It provides a critical safety layer for legal RAG systems by enforcing deterministic conflict checks and structured intake validation, preventing hallucinated or unsafe outputs in high-stakes legal workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fuzzy Matching
Automated review identified **Fuzzy Matching** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
