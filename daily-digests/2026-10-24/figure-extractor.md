---
title: "Sunrich-HT/figure-extractor"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "PyMuPDF", "pypdf", "BeautifulSoup4 (optional)", "CLI", "YAML", "Markdown"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["figure extraction", "table extraction", "PDF processing", "arXiv parsing", "AI agent skill"]
source: "https://github.com/Sunrich-HT/figure-extractor"
stars: 3
language: "Python"
last_updated: "2026-08-04T07:36:10Z"
discovered_at: "2026-08-04T07:40:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A tool for extracting figures and tables from academic papers in PDF, arXiv, OpenReview, ACL, and HTML formats. It supports AI-agent integration (Claude Code, Codex, Kimi) and provides a standalone CLI for offline use, emphasizing precise cropping and quality control.

## Key Features
- Exhaustive caption detection for figures and tables, including CJK labels and journal-specific formats
- Column-aware bounding box inference to prevent incorrect cropping across columns
- High-DPI rendering and cropping with PyMuPDF for vector and raster content
- Standalone executable for environments without network or package access
- Quality scoring and contact sheets for visual verification of extraction results

## Why It Matters for RAG Builders
It ensures accurate extraction of figures and tables from academic papers, critical for building high-quality RAG datasets where visual content must be preserved and correctly cropped.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyMuPDF
Automated review identified **PyMuPDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pypdf
Automated review identified **pypdf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BeautifulSoup4 (optional)
Automated review identified **BeautifulSoup4 (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
