---
title: "0Smallcat0/report-workflow"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Pandoc", "python-docx", "CLI", "JSON", "CSV", "DOCX", "Mermaid"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["deterministic", "hallucination prevention", "evidence-based", "document generation", "audit trail"]
source: "https://github.com/0Smallcat0/report-workflow"
stars: 0
language: "Python"
last_updated: "2026-08-04T22:58:59Z"
discovered_at: "2026-08-04T23:04:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A deterministic pipeline for transforming raw data and sources into auditable DOCX reports without relying on LLMs or API keys. It enforces evidence-based claims, validates citations, and generates structured documents with embedded audit trails.

## Key Features
- Zero LLM dependency with deterministic validation gates for claims and citations
- Supports seven document types (lab reports, academic papers, business reports, etc.) in multiple languages
- Integrates with MCP-capable agents (Claude Code, Codex, Cursor) or runs standalone via CLI
- Provides audit trails and QA notes for every claim in the generated report
- Measured anti-hallucination gates with 80% recall and 100% precision on adversarial benchmarks

## Why It Matters for RAG Builders
It ensures RAG pipelines produce verifiable, source-grounded documents by enforcing strict evidence validation, eliminating hallucinations in generated reports.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pandoc
Automated review identified **Pandoc** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### python-docx
Automated review identified **python-docx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSV
Automated review identified **CSV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DOCX
Automated review identified **DOCX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid
Automated review identified **Mermaid** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
