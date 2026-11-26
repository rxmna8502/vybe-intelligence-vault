---
title: "KyaniteLabs/kinocut"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FFmpeg", "Model Context Protocol (MCP)", "Whisper (for speech-to-text)", "PyTorch (for AI features)", "Hyperframes", "CLI", "JSON/YAML (for workflow specs)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["video editing", "AI agents", "FFmpeg abstraction", "workflow automation", "media provenance"]
source: "https://github.com/KyaniteLabs/kinocut"
stars: 72
language: "Python"
last_updated: "2026-07-10T18:14:09Z"
discovered_at: "2026-07-10T18:22:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Kinocut is a guardrailed Model Context Protocol (MCP) server and Python library that provides AI agents with structured, safe tools for video editing, media analysis, and repurposing workflows. It abstracts FFmpeg complexity behind typed operations, preflight validation, and provenance receipts to prevent silent failures and enable repeatable, reviewable media automation.

## Key Features
- 135+ structured MCP tools for video editing (trim, resize, merge, add_text, etc.) with guardrails to prevent risky operations
- Workflow engine for agent-driven multi-step video jobs with validate-plan-render-inspect cycles and deterministic receipts
- Preflight validation and quality checkpoints (e.g., `release_checkpoint`) to ensure media integrity before export
- Dedicated video rescue pipeline for source-backed diagnosis, repair planning, and verified output generation
- Layered compositing with blend modes, masks, and transforms for advanced overlays and effects

## Why It Matters for RAG Builders
Kinocut enables AI agents to safely and repeatably automate video editing workflows without exposing them to brittle FFmpeg commands or silent failures, making it essential for RAG/AI stack builders who need reliable media processing.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFmpeg
Automated review identified **FFmpeg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper (for speech-to-text)
Automated review identified **Whisper (for speech-to-text)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch (for AI features)
Automated review identified **PyTorch (for AI features)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hyperframes
Automated review identified **Hyperframes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/YAML (for workflow specs)
Automated review identified **JSON/YAML (for workflow specs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
