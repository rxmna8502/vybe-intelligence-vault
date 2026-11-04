---
title: "shkyyy18/llm-video-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "ffmpeg", "faster-whisper", "Silero VAD", "yt-dlp", "pytest", "ruff"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "video analysis", "token budget", "transcription", "scene detection"]
source: "https://github.com/shkyyy18/llm-video-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-20T12:16:00Z"
discovered_at: "2026-07-20T12:22:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that enables coding agents to analyze videos within a token budget by extracting scene-aware frames, transcribing speech, and building a shot timeline. It reverse-derives extraction parameters from the budget and supports multiple video sources, including platforms like Bilibili and YouTube.

## Key Features
- Token budget controller that automatically derives frame count, resolution, and transcript truncation to fit within a specified token limit
- Scene-aware frame extraction with ffmpeg and shot timeline generation for dynamic video content
- Multi-platform video source support (Bilibili, YouTube, Douyin, etc.) with optional cookie handling for restricted platforms
- Honest transcription with embedded/sidecar subtitle fallback and VAD-gated whisper processing to avoid hallucinations
- Three structured MCP tools for incremental video analysis: `analyze_video`, `get_frames_at`, and `get_transcript`

## Why It Matters for RAG Builders
It enables AI agents to process and understand video content efficiently within token constraints, bridging the gap between raw video data and structured, queryable insights for RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ffmpeg
Automated review identified **ffmpeg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### faster-whisper
Automated review identified **faster-whisper** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Silero VAD
Automated review identified **Silero VAD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yt-dlp
Automated review identified **yt-dlp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
