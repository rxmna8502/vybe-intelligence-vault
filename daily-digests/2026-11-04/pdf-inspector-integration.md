---
title: "Jimthetaxguy/pdf-inspector-integration"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "JSON-RPC", "firecrawl/pdf-inspector", "Cargo"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["PDF processing", "MCP server", "tax form extraction", "offline OCR-free", "domain-specific tools"]
source: "https://github.com/Jimthetaxguy/pdf-inspector-integration"
stars: 1
language: "Rust"
last_updated: "2026-07-19T16:50:52Z"
discovered_at: "2026-07-19T16:57:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based MCP server that wraps the firecrawl/pdf-inspector library to provide offline, fast PDF classification and extraction. It exposes 13 MCP tools for domain-specific tasks like tax form identification, IRC section parsing, and SEC filing splitting, enabling MCP-aware agents to process PDFs without OCR.

## Key Features
- 13 MCP tools for PDF classification, extraction, and domain-specific analysis
- Offline, OCR-free processing with millisecond response times
- Domain-specific tools for tax forms (W-2, 1099, 1040), IRC sections, and SEC filings
- Modular architecture with a facade layer separating core extraction from domain logic
- Synthetic demo tools for testing review workflows without real PDFs

## Why It Matters for RAG Builders
It enables MCP-aware AI agents to process born-digital PDFs efficiently without OCR, preserving structural information and reducing latency for RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### firecrawl/pdf-inspector
Automated review identified **firecrawl/pdf-inspector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo
Automated review identified **Cargo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
