---
title: "javimosch/peage-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["MCP (Model Context Protocol)", "Shell", "Machin (MFL)", "Stripe Checkout", "HMAC", "JSON"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Low"
tags: ["MCP server", "pay-per-call", "fiat wallet", "agent payment", "microtransactions"]
source: "https://github.com/javimosch/peage-mcp"
stars: 0
language: "Shell"
last_updated: "2026-07-18T14:36:27Z"
discovered_at: "2026-07-18T14:50:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
peage-mcp is an MCP server that equips AI agents with a prepaid fiat wallet for pay-per-call API interactions via the peage rail. It enables agents to autonomously handle microtransactions without subscriptions or crypto, with spending caps controlled by the user.

## Key Features
- Provides a prepaid fiat wallet for MCP-capable agents to make API calls with per-call payments
- Supports spending caps and adjustable limits to control exposure
- Integrates Stripe Checkout for human-funded top-ups, minimizing manual intervention
- Includes tools for wallet setup, status checks, receipt verification, and ledger auditing
- Delivers a single static binary (120 KB) with no runtime dependencies (Node/Python)

## Why It Matters for RAG Builders
It enables AI agents to autonomously handle microtransactions for API calls, reducing friction in RAG pipelines by eliminating manual payment steps and subscriptions.

## Tech Stack Deep Dive
### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Machin (MFL)
Automated review identified **Machin (MFL)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Stripe Checkout
Automated review identified **Stripe Checkout** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC
Automated review identified **HMAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
