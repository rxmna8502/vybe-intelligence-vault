---
title: "dithiothreitol/jdg-ksiegowy"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python 3.12+", "OpenClaw (Agent Framework)", "Ollama (LLM)", "Pixtral 12B (OCR)", "Claude Haiku 4.5 (OCR fallback)", "SQLite", "LibreOffice (PDF generation)", "Pydantic (config)", "REST APIs (KSeF, MF Gateway)", "AES-256-CBC + RSA-OAEP (encryption)", "Docker (optional)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Polish accounting", "AI agent", "tax automation", "KSeF compliance", "self-hosted"]
source: "https://github.com/dithiothreitol/jdg-ksiegowy"
stars: 5
language: "Python"
last_updated: "2026-07-19T21:49:30Z"
discovered_at: "2026-07-19T21:51:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
JDG Ksiegowy is an open-source AI-powered accounting assistant designed for Polish sole proprietorships (JDG). It automates invoicing, tax declarations (KSeF, JPK_V7M, JPK_EWP, ZUS DRA, PIT-28), expense tracking, and regulatory submissions via natural language commands.

## Key Features
- Automated invoicing with KSeF 2.0 FA(3) XML submission and DOCX generation
- Expense tracking with OCR support (Pixtral + Claude Haiku) and VAT deduction calculation
- Regulatory submissions (JPK_V7M, JPK_EWP, ZUS DRA, PIT-28) via MF Gateway with AES+RSA encryption
- Natural language interface for issuing invoices, calculating taxes, and generating reports
- Preflight validation (`doctor`) and status dashboard for deadlines and unpaid invoices

## Why It Matters for RAG Builders
It provides a self-hosted, AI-driven alternative to proprietary Polish accounting SaaS, enabling sole proprietors to automate complex tax workflows while retaining data ownership and reducing costs.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw (Agent Framework)
Automated review identified **OpenClaw (Agent Framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (LLM)
Automated review identified **Ollama (LLM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pixtral 12B (OCR)
Automated review identified **Pixtral 12B (OCR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Haiku 4.5 (OCR fallback)
Automated review identified **Claude Haiku 4.5 (OCR fallback)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LibreOffice (PDF generation)
Automated review identified **LibreOffice (PDF generation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic (config)
Automated review identified **Pydantic (config)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs (KSeF, MF Gateway)
Automated review identified **REST APIs (KSeF, MF Gateway)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-CBC + RSA-OAEP (encryption)
Automated review identified **AES-256-CBC + RSA-OAEP (encryption)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (optional)
Automated review identified **Docker (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
