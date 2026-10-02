---
title: "nlink-jp/voice-scribe"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "whisper.cpp", "ggml", "Metal (Apple Silicon)", "CGO", "MCP (Model Context Protocol)", "ONNX Runtime", "sherpa-onnx"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["speech-to-text", "local processing", "MCP server", "speaker diarization", "Apple Silicon"]
source: "https://github.com/nlink-jp/voice-scribe"
stars: 0
language: "Go"
last_updated: "2026-08-08T13:45:40Z"
discovered_at: "2026-08-08T13:48:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
voice-scribe is a local speech-to-text tool for macOS that transcribes audio using whisper.cpp, with optional speaker diarization. It includes a CLI for direct transcription and an MCP server to enable audio processing for agents that cannot handle audio inputs.

## Key Features
- Local transcription with whisper.cpp for privacy and cost savings
- Speaker diarization with support for custom speaker hints and thresholds
- MCP server integration for agents that cannot process audio
- Model verification via SHA256 hashes to ensure integrity
- Multi-format output (JSON, SRT, VTT, etc.) with timestamped transcripts

## Why It Matters for RAG Builders
It enables local, private, and cost-effective speech-to-text processing for AI agents and applications, eliminating the need for cloud APIs while maintaining compatibility with existing RAG pipelines.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### whisper.cpp
Automated review identified **whisper.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ggml
Automated review identified **ggml** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Metal (Apple Silicon)
Automated review identified **Metal (Apple Silicon)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CGO
Automated review identified **CGO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sherpa-onnx
Automated review identified **sherpa-onnx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
