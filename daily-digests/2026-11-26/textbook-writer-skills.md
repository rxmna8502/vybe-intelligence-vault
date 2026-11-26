---
title: "cabbage2000-lab/textbook-writer-skills"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Markdown", "JSON", "Git", "Claude Code", "Codex", "WorkBuddy"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["textbook generation", "instructional design", "UbD framework", "Bloom's taxonomy", "verifiable content"]
source: "https://github.com/cabbage2000-lab/textbook-writer-skills"
stars: 18
language: "Python"
last_updated: "2026-08-10T07:32:49Z"
discovered_at: "2026-08-10T07:35:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A modular skill suite designed to integrate with AI coding agents (Claude Code, Codex, WorkBuddy) for structured textbook creation. It enforces backward instructional design (UbD) principles to ensure textbooks have clear learning objectives, Bloom's taxonomy-aligned exercises, and verifiable answers tailored to STEM, humanities, or economics disciplines.

## Key Features
- Enforces UbD (Understanding by Design) reverse instructional design with mandatory author gate checks for learning objectives and chapter structure.
- Supports pluggable subject profiles (STEM, humanities, economics) with discipline-specific validation rules (e.g., recalculating answers for STEM, source verification for humanities).
- Four-stage pipeline (init, outline, chapter writing, exercises, final review) with progress tracking via `.progress.json` for interruption-safe writing.
- Generates Bloom's taxonomy-aligned exercises with verifiable answers (e.g., recalculations for STEM, source citations for humanities) and flags unverifiable content for author review.
- Modular architecture with 5 interdependent skills (textbook, textbook-outline, textbook-chapter, textbook-exercises, textbook-init) for scalable textbook creation.

## Why It Matters for RAG Builders
It ensures AI-generated textbooks adhere to rigorous pedagogical standards, preventing the common pitfalls of unstructured knowledge dumps or unverifiable claims, which is critical for building reliable RAG systems with educational content.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex
Automated review identified **Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WorkBuddy
Automated review identified **WorkBuddy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
