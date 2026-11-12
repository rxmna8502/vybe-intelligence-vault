---
title: Royc4515/gemini-sommelier-bot
content_type: repo
engine: v2
category: daily-digests/2026-11-12
tech_stack:
- Python 3.12
- Google Gemini API
- Telegram Bot API
- Vercel Serverless Functions
- Google Apps Script
- Google Sheets API
- google-genai SDK
- Flask (for local testing)
- unittest (for testing)
quality_score: 9
rag_relevance: 7
deployment_complexity: Medium
tags:
- Telegram bot
- wine inventory
- Gemini API
- serverless
- multimodal AI
source: https://github.com/Royc4515/gemini-sommelier-bot
stars: 0
language: Python
last_updated: '2026-11-11T12:28:34Z'
discovered_at: '2026-11-11T12:38:04Z'
evaluated_by: mistral-small-latest
---

## Summary
A serverless Telegram bot that acts as a context-aware sommelier, pairing meals with wines from a live Google Sheets inventory using the Google Gemini API. It supports natural language commands in Hebrew, voice messages, photo ingestion, and robust inventory management with fallback AI models.

## Key Features
- Natural language processing in Hebrew for wine inventory management (add, edit, delete, status updates)
- Multimodal input support (photos of wine labels, voice messages, text descriptions)
- Dynamic Google Sheets integration for real-time inventory sync and status tracking
- Resilient AI pipeline with exponential backoff and model fallback chain (Gemini 3.5 Flash Lite → 3.1 Flash Lite → Gemma 4-31B → 3.8 Flash)
- Serverless architecture deployed on Vercel with zero persistent compute

## Why It Matters for RAG Builders
It demonstrates a practical, production-ready agent framework integrating multimodal AI, natural language intent parsing, and real-time data synchronization for specialized domain applications like wine inventory management.

## Tech Stack Deep Dive
### Python 3.12
Automated review identified **Python 3.12** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Gemini API
Automated review identified **Google Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel Serverless Functions
Automated review identified **Vercel Serverless Functions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Apps Script
Automated review identified **Google Apps Script** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Sheets API
Automated review identified **Google Sheets API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### google-genai SDK
Automated review identified **google-genai SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Flask (for local testing)
Automated review identified **Flask (for local testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### unittest (for testing)
Automated review identified **unittest (for testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
