---
title: "coseto6125/openmeetnote"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Tauri", "Whisper.cpp", "Paraformer", "Silero VAD", "CT-Transformer", "Claude Code / Codex", "SQLite", "React", "ONNX Runtime"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["meeting recorder", "transcription", "verification", "local-first", "citation-based"]
source: "https://github.com/coseto6125/openmeetnote"
stars: 0
language: "Rust"
last_updated: "2026-08-05T14:04:59Z"
discovered_at: "2026-08-05T14:06:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OpenMeetNote is a local-first meeting recorder that captures dual-track audio, transcribes it using two engines (live and final), and generates verifiable summaries with citations. It enforces rigorous validation to prevent hallucinations and ensures every fact is backed by verbatim transcript evidence.

## Key Features
- Dual-track audio capture (system + microphone) with real-time and final transcription engines
- Rigorous citation verification: every fact must match a verbatim transcript segment with hash validation
- Energy-adaptive VAD thresholding to handle varying room noise levels
- Local-only processing with no telemetry or network calls
- Modular model loading with environment variable overrides for flexibility

## Why It Matters for RAG Builders
It provides a robust, locally verifiable pipeline for generating accurate meeting summaries with citations, reducing hallucinations in RAG systems by enforcing evidence-based outputs.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri
Automated review identified **Tauri** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper.cpp
Automated review identified **Whisper.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Paraformer
Automated review identified **Paraformer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Silero VAD
Automated review identified **Silero VAD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CT-Transformer
Automated review identified **CT-Transformer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code / Codex
Automated review identified **Claude Code / Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
