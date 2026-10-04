---
title: "maxgfr/ultraprospect"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "OpenStreetMap (Overpass API)", "French Company Register API (Sirene/RNE)", "CLI", "MCP (Model Context Protocol)", "skills.sh"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["prospecting", "data fusion", "geospatial", "company registry", "validation"]
source: "https://github.com/maxgfr/ultraprospect"
stars: 0
language: "JavaScript"
last_updated: "2026-08-10T17:55:16Z"
discovered_at: "2026-08-10T18:01:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Ultraprospect transforms geographic locations into defensible prospect lists by fusing OpenStreetMap data with French company register records, ensuring traceability and avoiding assumptions. It provides a zero-dependency CLI, agent skill, and MCP server for comprehensive company discovery and validation.

## Key Features
- Fuses OpenStreetMap and French company register data with strict identity matching to avoid false merges
- Refuses to make ambiguous assumptions (e.g., ambiguous locations, uncertain merges, or unverified contacts)
- Provides a zero-dependency, vendorable engine (`engine.mjs`) and CLI for reproducible prospecting
- Includes a gate system to validate data integrity before output (e.g., checks if contacts appear on fetched pages)
- Supports MCP server integration for programmatic access and orchestration across subagents

## Why It Matters for RAG Builders
Ultraprospect ensures prospect lists are traceable and defensible by rigorously validating and fusing geospatial and company data, eliminating guesswork that plagues traditional prospecting tools.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenStreetMap (Overpass API)
Automated review identified **OpenStreetMap (Overpass API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### French Company Register API (Sirene/RNE)
Automated review identified **French Company Register API (Sirene/RNE)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### skills.sh
Automated review identified **skills.sh** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
