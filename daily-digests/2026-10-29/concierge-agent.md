---
title: "wasay-09/concierge-agent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Fastify", "SQLite", "BM25 (Okapi BM25F)", "Mermaid.js", "Node.js 22", "Shadow DOM", "Web Components"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["RAG", "multi-tenant", "grounded retrieval", "zero-API-key", "booking agent"]
source: "https://github.com/wasay-09/concierge-agent"
stars: 0
language: "TypeScript"
last_updated: "2026-08-09T11:26:37Z"
discovered_at: "2026-08-09T11:32:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An embeddable, multi-tenant AI support and booking agent that answers queries strictly from a business's own documents with citations, a refusal gate, and human escalation. Runs entirely in the browser for demos and supports zero-API-key retrieval via BM25 over SQLite.

## Key Features
- Zero-API-key retrieval with BM25 over SQLite inverted index, including term-frequency saturation and document-length normalization
- Confidence gating system that prevents hallucinations by refusing to answer when coverage or strength is below threshold
- Embeddable widget with shadow DOM isolation for seamless integration into third-party websites
- Multi-tenant architecture with tenant-specific configuration (branding, hours, escalation, services) stored in JSON files
- Built-in analytics dashboard for content gaps, escalations, bookings, and retrieval inspection

## Why It Matters for RAG Builders
It provides a production-ready, grounded RAG agent framework with built-in refusal gating and multi-tenancy, eliminating hallucinations while enabling 24/7 support and booking capture without external API dependencies.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fastify
Automated review identified **Fastify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (Okapi BM25F)
Automated review identified **BM25 (Okapi BM25F)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js
Automated review identified **Mermaid.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js 22
Automated review identified **Node.js 22** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shadow DOM
Automated review identified **Shadow DOM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Web Components
Automated review identified **Web Components** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
