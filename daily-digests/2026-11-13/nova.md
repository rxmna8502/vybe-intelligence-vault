---
title: Roxy-06/Nova
content_type: repo
engine: v2
category: daily-digests/2026-11-13
tech_stack:
- Python 3.10+
- FastAPI
- SQLAlchemy
- SQLite
- APScheduler
- Gemini 1.5 Flash API
- Next.js 15.5.9
- React 19
- httpx
- feedparser
- Pydantic
quality_score: 9
rag_relevance: 7
deployment_complexity: Medium
tags:
- autonomous editorial
- LLM-powered evaluation
- content deduplication
- real-time telemetry
- AI-driven curation
source: https://github.com/Roxy-06/Nova
stars: 0
language: Python
last_updated: '2026-08-08T18:32:36Z'
discovered_at: '2026-08-08T18:39:17Z'
evaluated_by: mistral-small-latest
---

## Summary
NOVA is an autonomous editorial system that autonomously discovers, evaluates, and publishes technology reporting with minimal human intervention. It combines RSS/web scraping, LLM-backed semantic scoring, deduplication, and a minimal frontend to create a self-contained editorial pipeline for AI-driven content curation.

## Key Features
- Autonomous discovery of tech stories from RSS, scraping, and APIs with async workflows
- Semantic scoring pipeline using Gemini LLM for credibility, relevance, and novelty evaluation with fallback deterministic scorer
- Deduplication and memory system to prevent repetitive content and maintain narrative variety
- Minimal frontend for real-time inspection of posts, telemetry, and audit trails
- Self-contained deployment with SQLite, FastAPI backend, and Next.js frontend

## Why It Matters for RAG Builders
NOVA demonstrates how autonomous editorial systems can curate high-quality, source-backed content for RAG pipelines while maintaining transparency and auditability through structured decision logging.

## Tech Stack Deep Dive
### Python 3.10+
Automated review identified **Python 3.10+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### APScheduler
Automated review identified **APScheduler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini 1.5 Flash API
Automated review identified **Gemini 1.5 Flash API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js 15.5.9
Automated review identified **Next.js 15.5.9** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React 19
Automated review identified **React 19** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### feedparser
Automated review identified **feedparser** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
