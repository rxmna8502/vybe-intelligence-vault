---
title: "DaizeDong/small-cap-deepdive"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Claude Code", "EDGAR Tools", "SEC Filings", "XBRL", "LLM (for classification)", "WebSearch (for disconfirmation)", "JSON/Config Management"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["SEC filings analysis", "small-cap investing", "mechanical due diligence", "landmine elimination", "forced disconfirmation"]
source: "https://github.com/DaizeDong/small-cap-deepdive"
stars: 0
language: "Python"
last_updated: "2026-07-17T08:02:08Z"
discovered_at: "2026-07-17T08:07:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Claude Code skill that mechanically de-risk the SEC small-cap universe for a given investment theme or ticker by eliminating landmines (e.g., going-concern candidates, death-spiral diluters) and performing disciplined due diligence with forced disconfirmation. Outputs a ranked list of survivors requiring human diligence, not automated buy recommendations.

## Key Features
- Automated enumeration of SEC-filing small-cap universe for a theme or ticker using EDGAR full-text search and SIC reverse-recall
- Two-stage precision gating: coarse SIC exclusion followed by LLM-based business description classification (pure_play/partial/misrecall)
- Mechanical de-risking with hard kill-flags (going-concern, death-spiral convertibles, ICFR weaknesses, concentration risks)
- Disciplined deep-dive due diligence with forced disconfirmation, tiered evidence validation (T1-T3), and base-rate priors
- Deterministic reporting with funnel metrics, kill-flag eliminations, and track-forward calibration against distressed outcomes

## Why It Matters for RAG Builders
It provides a systematic, reproducible framework to eliminate high-risk small-cap investments before human analysis, reducing downside exposure and improving risk-adjusted returns for RAG/AI stack builders focusing on fundamental data.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EDGAR Tools
Automated review identified **EDGAR Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SEC Filings
Automated review identified **SEC Filings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XBRL
Automated review identified **XBRL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (for classification)
Automated review identified **LLM (for classification)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSearch (for disconfirmation)
Automated review identified **WebSearch (for disconfirmation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/Config Management
Automated review identified **JSON/Config Management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
