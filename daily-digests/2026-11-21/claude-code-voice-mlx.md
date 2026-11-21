---
title: "baryhuang/claude-code-voice-mlx"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Apple MLX", "Kokoro TTS", "Swift/SwiftUI", "Unix sockets", "Claude Code hooks"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["text-to-speech", "multi-agent orchestration", "offline TTS", "Claude Code integration", "Apple Silicon"]
source: "https://github.com/baryhuang/claude-code-voice-mlx"
stars: 0
language: "Python"
last_updated: "2026-08-08T01:24:53Z"
discovered_at: "2026-08-08T01:26:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local neural text-to-speech system for parallel Claude Code sessions that serializes audio output from multiple agents into a single, ordered queue with project identification. Uses Apple MLX for offline, low-latency TTS (0.3s to first sound) and integrates with macOS for hands-free coding feedback.

## Key Features
- Global audio queue for concurrent sessions with ordered playback and project identification
- Resident MLX-based TTS daemon (Kokoro) for sub-0.3s latency and zero API costs
- Dynamic status display in macOS notch showing active speaker and queue depth
- Sentence pipelining for seamless transitions between utterances
- Chinese and English voice support with per-session barge-in control

## Why It Matters for RAG Builders
It enables hands-free, eyes-free monitoring of parallel AI agents by converting their outputs into a single, intelligible audio stream with minimal latency and no external dependencies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apple MLX
Automated review identified **Apple MLX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kokoro TTS
Automated review identified **Kokoro TTS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swift/SwiftUI
Automated review identified **Swift/SwiftUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix sockets
Automated review identified **Unix sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code hooks
Automated review identified **Claude Code hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
