---
title: "dkships/pm-copilot"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP SDK", "HelpScout API", "ProductLift API", "Chatbase API", "Mermaid (for architecture diagrams)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["product management", "customer feedback analysis", "MCP server", "signal triangulation", "AI agent integration"]
source: "https://github.com/dkships/pm-copilot"
stars: 27
language: "TypeScript"
last_updated: "2026-08-10T20:00:37Z"
discovered_at: "2026-08-10T20:02:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that aggregates and analyzes customer support tickets, feature requests, and AI agent conversations to help product managers prioritize features. It triangulates signals from multiple sources to identify high-impact themes and provides structured output for decision-making.

## Key Features
- Triangulates reactive (support tickets), proactive (feature requests), and deflected (AI agent chats) signals to identify convergent themes
- Applies a weighted scoring formula with a 2x boost for convergent signals to prioritize high-impact issues
- Integrates with external MCP servers (e.g., Metabase, Google Analytics) via `kpi_context` for enriched prioritization
- Includes built-in PII scrubbing to redact sensitive customer data before LLM analysis
- Provides opinionated PM methodology with structured outputs for generating product plans or summaries

## Why It Matters for RAG Builders
It provides a data-driven approach to prioritize product features by combining qualitative customer signals with quantitative business metrics, enabling more accurate and actionable roadmaps.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP SDK
Automated review identified **MCP SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HelpScout API
Automated review identified **HelpScout API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ProductLift API
Automated review identified **ProductLift API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chatbase API
Automated review identified **Chatbase API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid (for architecture diagrams)
Automated review identified **Mermaid (for architecture diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
