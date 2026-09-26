---
title: "88plug/drift-detector"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Claude Code", "Model Context Protocol (MCP)", "SQLite", "ExtraTree Classifier (eval-only)", "Bash"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["drift detection", "LLM guardrails", "instruction compliance", "Claude Code plugin", "deterministic scoring"]
source: "https://github.com/88plug/drift-detector"
stars: 0
language: "Python"
last_updated: "2026-07-19T08:04:32Z"
discovered_at: "2026-07-19T08:13:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Claude Code plugin and MCP server that detects behavioral drift in LLM outputs against predefined contracts, scoring each assistant turn for compliance and providing corrective nudges when deviations occur. It ensures instruction-following consistency in long sessions without disrupting workflows.

## Key Features
- Per-turn deterministic drift scoring (0-100) with lexical and structural analysis
- Live status-line badge for real-time drift visibility and trend tracking
- One-shot correction nudges only when drift exceeds thresholds, avoiding over-correction
- Deferred Correction Detection (DCD) pipeline for delayed user feedback recovery
- Support for customizable profiles defining contract thresholds and scoring rules

## Why It Matters for RAG Builders
It provides a robust, dependency-free mechanism to enforce strict output contracts in LLM interactions, preventing instruction drift in long sessions critical for AI engineering workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ExtraTree Classifier (eval-only)
Automated review identified **ExtraTree Classifier (eval-only)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
