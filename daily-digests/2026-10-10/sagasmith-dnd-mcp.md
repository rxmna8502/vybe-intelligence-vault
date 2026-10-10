---
title: "SagaSmithAI/SagaSmith-dnd-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "SQLite", "ChromaDB", "FastAPI", "OCR (RapidOCR, PDFium)", "Mermaid.js", "JSON Schema", "Vector Embeddings"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["D&D 5e", "MCP Server", "Dynamic Tool Exposure", "Campaign Management", "AI Agent Orchestration"]
source: "https://github.com/SagaSmithAI/SagaSmith-dnd-mcp"
stars: 0
language: "Python"
last_updated: "2026-08-08T11:23:05Z"
discovered_at: "2026-08-08T11:30:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SagaSmith D&D MCP is a server-side boundary service that exposes D&D 5e agent capabilities via the MCP (Model Context Protocol) standard. It dynamically manages tool exposure based on campaign phases, ensuring minimal and secure tool access for AI agents while maintaining session isolation and state consistency.

## Key Features
- Session-level tool exposure based on campaign phases (lobby, play, combat) with automatic tool loading/unloading
- Stateful campaign management with branch DAG, snapshots, and revision control
- Rule and module import with strict versioning, checksum validation, and OCR support
- Portable actor cards and structured module packages for cross-campaign compatibility
- Vector embedding-backed retrieval for rules, skills, and campaign memory

## Why It Matters for RAG Builders
It provides a secure, phase-aware MCP server for D&D 5e agents, enabling dynamic tool exposure and stateful campaign management essential for building reliable RAG systems in tabletop gaming contexts.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (RapidOCR, PDFium)
Automated review identified **OCR (RapidOCR, PDFium)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js
Automated review identified **Mermaid.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings
Automated review identified **Vector Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
