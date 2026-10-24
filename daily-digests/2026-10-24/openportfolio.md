---
title: "seonglae/openportfolio"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Convex", "React", "Node.js", "Clerk", "CoinGecko API", "pnpm"]
quality_score: 8
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["portfolio tracking", "self-hosted", "financial aggregation", "Brier scoring", "multi-tenancy"]
source: "https://github.com/seonglae/openportfolio"
stars: 0
language: "TypeScript"
last_updated: "2026-08-09T11:30:49Z"
discovered_at: "2026-08-09T11:32:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OpenPortfolio is a self-hosted, open-source portfolio tracker that aggregates financial accounts into a single net worth view, tracks investor flows, and scores forecast accuracy using Brier scoring. It avoids reliance on provider API keys by using agent CLI tools for model calls and supports multi-tenancy for multiple books in one deployment.

## Key Features
- Aggregates balances, positions, and transactions from multiple brokerages, banks, and wallets into a single net worth view
- Tracks investor flows (net buying, turnover) and stores them as first-class data for analysis
- Supports forecast registration with probability, horizon, and auto-resolution, scored via Brier scoring
- Multi-tenancy support with tenant-scoped data isolation and service keys for secure access
- Agent CLI integration for model calls (e.g., Codex, Antigravity) without provider API keys

## Why It Matters for RAG Builders
It provides a self-hosted, API-key-free solution for aggregating financial data and scoring forecast accuracy, reducing dependency on third-party services while enabling autonomous portfolio monitoring.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Convex
Automated review identified **Convex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Clerk
Automated review identified **Clerk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CoinGecko API
Automated review identified **CoinGecko API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
