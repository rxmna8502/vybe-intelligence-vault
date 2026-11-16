---
title: "nifontovoleg/haystack-telegram-agent-v2"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Haystack", "Pinecone", "Docling", "OpenAI API", "Telegram Bot API", "PyTelegramBotAPI", "tiktoken", "FastAPI (implied for future webhook)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["Telegram bot", "RAG pipeline", "Long-term memory", "Document ingestion", "Tool-calling agent"]
source: "https://github.com/nifontovoleg/haystack-telegram-agent-v2"
stars: 0
language: "Python"
last_updated: "2026-08-09T14:38:29Z"
discovered_at: "2026-08-09T15:35:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A modular Telegram bot built on Haystack Agent and Pinecone vector DB that provides a personal assistant with long-term memory, document RAG via Docling, and tool-calling capabilities for weather, cat facts, and dog vision analysis.

## Key Features
- Modular Haystack Agent with tool-calling (weather, cat facts, dog vision)
- Pinecone-backed long-term memory for user conversations and document chunks
- Docling-powered document ingestion and chunking for PDF/DOCX/RAG support
- Per-user isolation via Pinecone namespaces and user_id filtering
- Hybrid short-term (RAM) and long-term (Pinecone) memory for context-aware responses

## Why It Matters for RAG Builders
It provides a production-ready template for building AI agents with RAG capabilities, long-term memory, and tool integration, specifically tailored for Telegram deployments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Haystack
Automated review identified **Haystack** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pinecone
Automated review identified **Pinecone** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docling
Automated review identified **Docling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTelegramBotAPI
Automated review identified **PyTelegramBotAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tiktoken
Automated review identified **tiktoken** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implied for future webhook)
Automated review identified **FastAPI (implied for future webhook)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
