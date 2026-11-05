---
title: "kau10082/slide-verify"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Claude Skills", "PubMed API", "Crossref", "MCP (Model Context Protocol)", "Python (for skill logic)", "Markdown"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["medical slide verification", "citation checking", "PubMed integration", "slide reordering", "plain language rewrite"]
source: "https://github.com/kau10082/slide-verify"
stars: 0
language: "None"
last_updated: "2026-07-10T10:46:21Z"
discovered_at: "2026-07-10T10:51:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Claude Skill designed for medical slide decks that verifies citations and numbers against PubMed and other databases, corrects errors, reorders slides for better flow, splits overloaded pages, and optionally rewrites dense text into plain language. It focuses on detecting 'real but distorted' errors common in medical presentations.

## Key Features
- Multi-step medical slide deck processing: verify, correct, reorder, split, and rewrite content.
- Focuses on detecting 'real but distorted' errors (e.g., misattributed citations, incorrect numbers, protocol vs. results).
- Integrates PubMed, Crossref, and publisher pages for fact-checking, avoiding AI-generated fabrications.
- Automatically tracks and upgrades citations from conference posters to peer-reviewed papers.
- Outputs a corrected, reordered, and split deck with plain-language options and a pending references list.

## Why It Matters for RAG Builders
It automates the critical but error-prone task of verifying medical slide content, ensuring accuracy and clarity for presentations while reducing the risk of misinformation in clinical or research contexts.

## Tech Stack Deep Dive
### Claude Skills
Automated review identified **Claude Skills** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PubMed API
Automated review identified **PubMed API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Crossref
Automated review identified **Crossref** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for skill logic)
Automated review identified **Python (for skill logic)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
