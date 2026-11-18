---
title: "tanawitchsaentree/Human-tone"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Shell scripting", "GitHub Actions (CI/CD)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["AI writing optimization", "deterministic linter", "voice calibration", "multi-language support", "agent skill"]
source: "https://github.com/tanawitchsaentree/Human-tone"
stars: 0
language: "Python"
last_updated: "2026-08-07T09:12:28Z"
discovered_at: "2026-08-07T10:03:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A skill and toolkit that enforces human-like writing style in AI-generated text by banning unnatural sentence structures, AI-specific vocabulary, and formulaic constructions. It includes a deterministic linter for real-time feedback and a voice profiler to calibrate rules to individual writing styles.

## Key Features
- Deterministic linter (`lint.py`) that scans text for AI-specific patterns and enforces rules with PASS/FAIL exit codes
- Voice profiler (`voice_profile.py`) to learn and preserve individual writing styles
- Structural bans (e.g., em dashes, negation scaffolding, rule-of-three lists) that apply universally across languages
- Zero-dependency design with a 64 KB footprint for easy deployment
- Integration with AI agents (Claude, Cursor, etc.) via skills system or MCP server

## Why It Matters for RAG Builders
It ensures AI-generated text reads naturally and authentically by enforcing human-like writing patterns, reducing the telltale signs of AI while preserving technical accuracy.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell scripting
Automated review identified **Shell scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
