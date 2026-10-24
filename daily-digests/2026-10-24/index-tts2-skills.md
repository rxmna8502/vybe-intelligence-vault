---
title: "joysinleung/index-tts2-skills"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "gradio_client", "IndexTTS2", "uv (Python package manager)", "WebUI (Gradio-based)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["TTS", "voice generation", "local inference", "Gradio API", "Agent integration"]
source: "https://github.com/joysinleung/index-tts2-skills"
stars: 0
language: "Python"
last_updated: "2026-07-11T18:58:01Z"
discovered_at: "2026-07-11T18:59:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local skill for IndexTTS2 speech generation that leverages a running WebUI backend to produce voiceovers or dubbing without duplicating VRAM usage. It dynamically interfaces with the `/gen_single` API endpoint to generate audio from text using pre-configured voice presets.

## Key Features
- Reuses running IndexTTS2 WebUI process to avoid duplicate VRAM usage
- Automatically starts WebUI if not running (with timeout)
- Dynamic parameter handling for `/gen_single` API to ensure compatibility across versions
- Supports custom voice presets with minimal configuration
- Outputs absolute file paths for easy automation and script parsing

## Why It Matters for RAG Builders
It enables AI agents and automation pipelines to integrate high-quality local TTS generation without redundant model loading, optimizing resource usage for RAG and AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gradio_client
Automated review identified **gradio_client** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IndexTTS2
Automated review identified **IndexTTS2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Python package manager)
Automated review identified **uv (Python package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebUI (Gradio-based)
Automated review identified **WebUI (Gradio-based)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
