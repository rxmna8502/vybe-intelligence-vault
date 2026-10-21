---
title: "beepboop2025/data-breach-detector"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "FastAPI", "HaveIBeenPwned API", "RansomLook API", "SEC EDGAR API", "ransomwatch archive"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["breach intelligence", "MCP server", "public data aggregation", "security monitoring", "ethical AI"]
source: "https://github.com/beepboop2025/data-breach-detector"
stars: 0
language: "Python"
last_updated: "2026-08-01T20:44:19Z"
discovered_at: "2026-08-01T20:51:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only breach-intelligence MCP server that aggregates public breach data from verified sources (HIBP, RansomLook, ransomwatch, SEC EDGAR) to report whether an organization has been breached, recent breach news, historical breach timelines, and threat text assessments—without exposing leaked records or sensitive data.

## Key Features
- Aggregates breach data from four primary public sources (HIBP, RansomLook, ransomwatch, SEC EDGAR) into a single queryable interface.
- Provides breach history, timelines, and statistics for organizations dating back to 2007, including repeat-victim assessments.
- Redacts sensitive data (emails, hashes, IPs, crypto addresses) from all responses, ensuring ethical and safe use in AI agents.
- Includes tools for assessing threat text, checking domain exposure, and monitoring feed freshness with staleness flags.
- Self-hostable, MIT-licensed, and deployable via pip with stdio or HTTP modes for MCP clients.

## Why It Matters for RAG Builders
It provides a critical, ethical, and aggregated source of breach intelligence that AI agents can safely query to assess organizational exposure without handling leaked data.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HaveIBeenPwned API
Automated review identified **HaveIBeenPwned API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RansomLook API
Automated review identified **RansomLook API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SEC EDGAR API
Automated review identified **SEC EDGAR API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ransomwatch archive
Automated review identified **ransomwatch archive** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
