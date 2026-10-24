---
title: "menghuanshiguang/bilibili-downloader-skill"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Shell (Bash)", "yt-dlp", "curl", "ffmpeg (optional)", "Python (for yt-dlp dependency)"]
quality_score: 8
rag_relevance: 4
deployment_complexity: "Low"
tags: ["Bilibili", "Video Downloader", "Audio Extraction", "Anti-Scraping", "Batch Download"]
source: "https://github.com/menghuanshiguang/bilibili-downloader-skill"
stars: 1
language: "Shell"
last_updated: "2026-08-02T10:40:13Z"
discovered_at: "2026-08-02T10:41:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A shell-based utility leveraging `yt-dlp` to download Bilibili videos and audio while bypassing HTTP 412 anti-scraping measures. It supports single downloads, batch downloads of a creator's content, and high-quality (720P/1080P) downloads via Bilibili account login.

## Key Features
- Bypasses Bilibili's HTTP 412 anti-scraping by automating cookie acquisition and header manipulation
- Supports single video/audio downloads, batch downloads of a creator's entire library, and login-based high-quality (720P/1080P) downloads
- Includes QR code login for Bilibili account integration to unlock premium content
- Portable and dependency-light (single bash script with optional ffmpeg for video processing)
- Smart input handling for URLs, BV IDs, UIDs, and short links

## Why It Matters for RAG Builders
Provides a reliable, scriptable way to extract Bilibili content for RAG pipelines while handling anti-scraping measures and quality constraints.

## Tech Stack Deep Dive
### Shell (Bash)
Automated review identified **Shell (Bash)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yt-dlp
Automated review identified **yt-dlp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### curl
Automated review identified **curl** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ffmpeg (optional)
Automated review identified **ffmpeg (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for yt-dlp dependency)
Automated review identified **Python (for yt-dlp dependency)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
