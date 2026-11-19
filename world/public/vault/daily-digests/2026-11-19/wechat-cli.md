---
title: "r266-tech/wechat-cli"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "SQLite/WCDB", "macOS", "Windows", "CLI", "JSON/JSONL", "ASR (Automatic Speech Recognition)", "Bash/PowerShell (installation scripts)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["WeChat data extraction", "local chat history", "AI agent integration", "message retrieval", "media processing"]
source: "https://github.com/r266-tech/wechat-cli"
stars: 74
language: "Go"
last_updated: "2026-07-15T05:14:44Z"
discovered_at: "2026-07-15T05:29:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A CLI tool that extracts and organizes WeChat 4.x local chat history, contacts, media, and other data into structured JSON for AI agents and human users. It operates as a read-only local data tool without modifying WeChat or sending messages.

## Key Features
- Reads WeChat 4.x local databases on macOS/Windows without modifying data or sending messages
- Exports structured JSON with stable pagination, cursors, and context expansion for AI agents
- Supports full-text search, timeline queries, and incremental message observation (tail/watch)
- Handles media (images, videos, files), contacts, groups, favorites, transfers, red packets, and Moments
- Provides strict read-only mode and local ASR for voice messages

## Why It Matters for RAG Builders
It enables AI agents to securely and efficiently access WeChat chat history and media for RAG pipelines without exposing user data to external APIs.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite/WCDB
Automated review identified **SQLite/WCDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS
Automated review identified **macOS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows
Automated review identified **Windows** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/JSONL
Automated review identified **JSON/JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ASR (Automatic Speech Recognition)
Automated review identified **ASR (Automatic Speech Recognition)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash/PowerShell (installation scripts)
Automated review identified **Bash/PowerShell (installation scripts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
