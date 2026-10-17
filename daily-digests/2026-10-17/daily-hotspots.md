---
title: "DaizeDong/daily-hotspots"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Claude Code", "MCP (Multi-Component Protocol)", "Discord API", "pytest", "JSONL", "Windows Task Scheduler"]
quality_score: 8
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["business intelligence", "opportunity discovery", "deterministic scoring", "Discord automation", "multi-source aggregation"]
source: "https://github.com/DaizeDong/daily-hotspots"
stars: 0
language: "Python"
last_updated: "2026-07-14T05:26:51Z"
discovered_at: "2026-07-14T05:28:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A daily business opportunity discovery system that aggregates signals from multiple sources, scores them deterministically, and pushes high-quality opportunities to Discord while archiving them. It uses an LLM for proposal generation but relies on a deterministic gate for final selection to ensure reliability.

## Key Features
- Multi-source signal aggregation (HackerNews, Product Hunt, X/Twitter, GitHub, etc.) with ≥2 independent origins required for inclusion
- Deterministic scoring rubric using LLM proposals but fail-closed Python gates for final selection
- Cross-day deduplication and evolution tracking to avoid noise and ensure relevance
- Tiered Discord delivery (immediate push for high-scoring opportunities, daily digest for others) with private archive
- Idempotent state management and reproducible scoring for reliability

## Why It Matters for RAG Builders
It provides a reliable, automated pipeline for surfacing high-signal business opportunities daily, reducing manual research overhead for AI-driven decision-making.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Multi-Component Protocol)
Automated review identified **MCP (Multi-Component Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord API
Automated review identified **Discord API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows Task Scheduler
Automated review identified **Windows Task Scheduler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
