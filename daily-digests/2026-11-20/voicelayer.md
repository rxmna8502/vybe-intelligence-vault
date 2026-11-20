---
title: "EtanHey/voicelayer"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Swift", "Model Context Protocol (MCP)", "whisper.cpp", "edge-tts", "Silero VAD", "SOCAT", "SwiftUI", "ONNX Runtime"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["voice I/O", "local STT/TTS", "MCP integration", "AI agent tools", "real-time transcription"]
source: "https://github.com/EtanHey/voicelayer"
stars: 1
language: "TypeScript"
last_updated: "2026-07-19T11:47:45Z"
discovered_at: "2026-07-19T11:57:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
VoiceLayer provides local-first voice input/output capabilities for AI coding assistants via the Model Context Protocol (MCP). It enables real-time speech-to-text and text-to-speech interactions with sub-1.5 second latency, eliminating cloud dependencies and API keys.

## Key Features
- Local-first voice processing with whisper.cpp for STT and edge-tts for TTS, ensuring no data leaves the user's machine
- Daemon architecture with Unix socket IPC for efficient resource usage and reduced process overhead
- 11 MCP-compatible tools (2 core + 9 aliases) with ToolAnnotations for seamless AI agent integration
- Silero VAD for speech detection and configurable recording controls (push-to-talk, timeout, VAD thresholds)
- Cross-platform support via VoiceBar (macOS SwiftUI app) and MCP client integration for AI coding assistants

## Why It Matters for RAG Builders
VoiceLayer enables AI agents to interact via voice with minimal latency and no cloud dependencies, making it essential for building responsive, privacy-focused RAG systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swift
Automated review identified **Swift** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### whisper.cpp
Automated review identified **whisper.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### edge-tts
Automated review identified **edge-tts** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Silero VAD
Automated review identified **Silero VAD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SOCAT
Automated review identified **SOCAT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SwiftUI
Automated review identified **SwiftUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
