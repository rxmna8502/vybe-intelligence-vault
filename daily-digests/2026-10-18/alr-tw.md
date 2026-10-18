---
title: "LucasYeh702/alr-tw"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SQLite", "FastAPI", "TLR (Taiwan Legal RAG)", "Jinja2", "Pydantic", "Ruff", "MyPy", "Pytest"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["Legal RAG", "MCP Harness", "Taiwan Law", "Deterministic Validation", "Agentic Workflow"]
source: "https://github.com/LucasYeh702/alr-tw"
stars: 5
language: "Python"
last_updated: "2026-07-19T10:21:23Z"
discovered_at: "2026-07-19T10:26:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ALR-TW is a secure harness for agentic RAG and MCP-based legal research in Taiwan, designed to validate legal claims, evidence, and citations while enforcing server-side trust boundaries. It integrates with official legal sources and optional TLR for candidate recall, ensuring deterministic validation without exposing raw data or LLM logic.

## Key Features
- Server-owned research obligations with strict trust boundaries to prevent external manipulation of sources or citations
- Integration with official Taiwanese legal sources (laws, judgments, constitutional rulings) and optional TLR for candidate recall in hybrid mode
- Deterministic trust gates for claim support, evidence sufficiency, time context, and privacy screening
- MCP tools for legal research workflows (e.g., `research_legal_question`, `validate_legal_answer`, `purge_research_storage`)
- Fail-closed validation with three-tiered outcomes: `validated`, `qualified`, or `blocked`

## Why It Matters for RAG Builders
ALR-TW provides a critical safety layer for RAG builders working with legal data by enforcing server-side validation and citation integrity, ensuring compliance with Taiwan's legal framework.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLR (Taiwan Legal RAG)
Automated review identified **TLR (Taiwan Legal RAG)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jinja2
Automated review identified **Jinja2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MyPy
Automated review identified **MyPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
