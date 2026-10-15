---
title: "rodrigopg/whatsapp-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Python", "SQLite", "WhatsApp Web API (whatsmeow)", "Model Context Protocol (MCP)", "FFmpeg (optional)", "Whisper.cpp (optional)", "OpenAI Whisper API (optional)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["WhatsApp integration", "MCP server", "local data storage", "contact resolution", "group management"]
source: "https://github.com/rodrigopg/whatsapp-mcp"
stars: 2
language: "Go"
last_updated: "2026-08-01T14:51:45Z"
discovered_at: "2026-08-01T15:01:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server for WhatsApp that enables reading, searching, and sending messages via the WhatsApp web multidevice API. This community fork fixes critical upstream issues, adds group management, security hardening, and contact name resolution while storing all data locally in SQLite databases.

## Key Features
- Direct WhatsApp account integration via web multidevice API using whatsmeow library
- Local SQLite storage for messages, contacts, and media with privacy-focused design
- Security hardening including REST API binding to localhost and mandatory authentication tokens
- Contact name resolution and LID migration fixes for accurate contact and message handling
- Group management tools (create_group, leave_group) and audio transcription (local/API) for searchable voice messages

## Why It Matters for RAG Builders
It provides a secure, local-first bridge to WhatsApp data for AI agents, enabling private, real-time access to messages and contacts while addressing critical upstream issues like contact resolution and security vulnerabilities.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WhatsApp Web API (whatsmeow)
Automated review identified **WhatsApp Web API (whatsmeow)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFmpeg (optional)
Automated review identified **FFmpeg (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper.cpp (optional)
Automated review identified **Whisper.cpp (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Whisper API (optional)
Automated review identified **OpenAI Whisper API (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
