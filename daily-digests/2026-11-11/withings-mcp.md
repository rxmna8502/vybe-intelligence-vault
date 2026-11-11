---
title: "partymola/withings-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.13+", "Model Context Protocol (MCP)", "SQLite", "OAuth 2.0", "HTTP (stdlib)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "Withings API", "health data", "OAuth", "trend analysis"]
source: "https://github.com/partymola/withings-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-11T22:44:00Z"
discovered_at: "2026-07-11T22:44:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server for the Withings Health API that provides OAuth authentication, local SQLite caching, and trend analysis for health metrics like body composition, sleep, activity, and ECG data.

## Key Features
- Local SQLite cache for fast offline queries and historical trend analysis
- Incremental data sync to minimize API calls and reduce latency
- Comprehensive health metric coverage (17 body-composition metrics, sleep, activity, workouts, ECG/AFib)
- Automatic OAuth token refresh (3h access tokens, 1-year refresh tokens)
- Zero external dependencies beyond MCP and Python standard library

## Why It Matters for RAG Builders
It enables AI systems to securely access and analyze Withings health data with minimal latency and offline capabilities, enhancing RAG applications with real-time or historical health insights.

## Tech Stack Deep Dive
### Python 3.13+
Automated review identified **Python 3.13+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP (stdlib)
Automated review identified **HTTP (stdlib)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
