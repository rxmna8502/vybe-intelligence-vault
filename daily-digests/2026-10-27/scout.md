---
title: indigokarasu/scout
content_type: repo
engine: v2
category: daily-digests/2026-10-27
tech_stack:
- Python
- OSINT tools (theHarvester, Maigret, Holehe, h8mail, PhoneInfoga, Sherlock)
- MCP (Model Context Protocol)
- OCAS (Open Context Architecture System)
quality_score: 8
rag_relevance: 7
deployment_complexity: Medium
tags:
- OSINT
- provenance tracking
- structured research
- entity verification
- source waterfall
source: https://github.com/indigokarasu/scout
stars: 1
language: Python
last_updated: '2026-07-21T04:04:43Z'
discovered_at: '2026-07-21T04:14:49Z'
evaluated_by: mistral-small-latest
---

## Summary
Scout is a structured OSINT research tool designed for lawful investigation of people, companies, and organizations, emphasizing full provenance tracking for every claim. It enforces tiered source collection with permission gates and integrates with Chronicle for entity management.

## Key Features
- Tiered source waterfall with explicit permission gates for escalation to paid databases
- Full provenance tracking: URL, retrieval timestamp, and direct quote for every claim
- Integration with curated OSINT tools and dynamic discovery of MCP-wrapped OSINT servers
- Identity verification gate requiring 2+ overlapping data points for profile confirmation
- Emits confirmed entities to Chronicle for downstream processing

## Why It Matters for RAG Builders
Scout ensures lawful and traceable OSINT research, critical for building reliable RAG pipelines that require verified and sourced data.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSINT tools (theHarvester, Maigret, Holehe, h8mail, PhoneInfoga, Sherlock)
Automated review identified **OSINT tools (theHarvester, Maigret, Holehe, h8mail, PhoneInfoga, Sherlock)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCAS (Open Context Architecture System)
Automated review identified **OCAS (Open Context Architecture System)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
