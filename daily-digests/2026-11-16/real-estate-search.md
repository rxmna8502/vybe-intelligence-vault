---
title: "RobertoReale/real-estate-search"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "Telegram API", "Email (IMAP)", "Node.js", "OpenStreetMap", "Flask (assumed backend)", "Vite/React (assumed frontend)"]
quality_score: 8
rag_relevance: 4
deployment_complexity: "Medium"
tags: ["real estate", "data aggregation", "local analytics", "deduplication", "privacy-focused"]
source: "https://github.com/RobertoReale/real-estate-search"
stars: 0
language: "Python"
last_updated: "2026-07-11T14:46:35Z"
discovered_at: "2026-07-11T14:51:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local PC/Raspberry Pi platform that aggregates, deduplicates, and analyzes real estate listings from Immobiliare.it and Idealista, providing real-time notifications, deal scoring, and privacy-focused analytics via a local SQLite database and dashboard.

## Key Features
- Aggregates and deduplicates listings from multiple portals (Immobiliare.it, Idealista) with cross-portal matching
- Local SQLite database for historical tracking, deal scoring, and privacy (no cloud dependency)
- Real-time notifications via Telegram and/or Email with undervalued property alerts
- Deal Score engine compares listings against localized €/sqm medians and agency discounting behavior
- Ghost Price & Re-listing Memory tracks recycled properties with price drop history

## Why It Matters for RAG Builders
It provides a privacy-focused, local-first solution for aggregating and analyzing real estate data, enabling users to uncover undervalued opportunities and track market trends without relying on cloud services or paid APIs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Email (IMAP)
Automated review identified **Email (IMAP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenStreetMap
Automated review identified **OpenStreetMap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Flask (assumed backend)
Automated review identified **Flask (assumed backend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite/React (assumed frontend)
Automated review identified **Vite/React (assumed frontend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
