---
title: "okforge/okforge-webui"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "SQLite", "JavaScript", "HTML/CSS", "llama.cpp", "vLLM", "VLM (Vision Language Model)", "Git", "Node.js (for Quartz publishing)", "Quartz (static site generator)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["document processing", "OCR", "knowledge base", "MCP server", "local-first"]
source: "https://github.com/okforge/okforge-webui"
stars: 0
language: "Python"
last_updated: "2026-07-19T16:54:17Z"
discovered_at: "2026-07-19T16:57:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
okforge-webui is a LAN-based web interface and job runner for managing okforge knowledge bases. It enables users to process scanned documents (PDFs, images) through OCR, translation, and ingestion into an LLM-synthesized wiki, all while providing a local-first, privacy-focused workflow for AI-driven document processing.

## Key Features
- Serial job queue with SQLite backend for managing OCR, translation, and ingestion tasks sequentially to avoid overloading single-slot LLM hosts.
- Markdown-first pipeline where OCR output is stored as markdown files before optional ingestion into a knowledge base, enabling manual edits or reuse without reprocessing.
- Integrated MCP server for programmatic access to projects, status, search, and querying capabilities via HTTP.
- Archive-first deletion system that moves files to trash or retired directories instead of permanent deletion, ensuring data recovery is always possible.
- Static site publishing via Quartz for generating searchable, graph-linked documentation from knowledge bases with one-click deployment.

## Why It Matters for RAG Builders
It provides a streamlined, local-first pipeline for converting scanned documents into structured knowledge bases with OCR, translation, and LLM integration, making it essential for RAG builders who prioritize privacy and control over cloud-based solutions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS
Automated review identified **HTML/CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp
Automated review identified **llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### vLLM
Automated review identified **vLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VLM (Vision Language Model)
Automated review identified **VLM (Vision Language Model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (for Quartz publishing)
Automated review identified **Node.js (for Quartz publishing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Quartz (static site generator)
Automated review identified **Quartz (static site generator)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
