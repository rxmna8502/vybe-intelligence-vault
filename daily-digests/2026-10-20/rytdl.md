---
title: "jmagar/rytdl"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "yt-dlp", "ffmpeg", "MCP (Model Context Protocol)", "AcoustID", "MusicBrainz", "Plex API", "rclone", "SSH", "rsync", "JSONL", "npm"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["media-downloader", "MCP-server", "metadata-tagging", "Plex-integration", "Rust"]
source: "https://github.com/jmagar/rytdl"
stars: 1
language: "Rust"
last_updated: "2026-07-19T23:47:40Z"
discovered_at: "2026-07-19T23:56:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A cross-platform MCP server written in Rust that enables media downloads from yt-dlp-supported sites (e.g., YouTube, Vimeo) with automated metadata tagging, transfer to local/SSH/rclone destinations, and optional Plex playlist integration. The binary is self-contained, auto-downloading yt-dlp and ffmpeg on first run.

## Key Features
- Self-contained binary with auto-downloaded yt-dlp and ffmpeg dependencies
- Cross-platform media downloads (audio/video) with metadata embedding and cover art
- Robust transfer to local, SSH, or rclone destinations with retry support
- Plex playlist synchronization for downloaded audio tracks
- Repeat-safe downloads with archive-based ID tracking and JSONL ledger

## Why It Matters for RAG Builders
It provides a secure, self-contained MCP server for media ingestion and organization, critical for AI stacks needing reliable, metadata-rich media processing and transfer capabilities.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yt-dlp
Automated review identified **yt-dlp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ffmpeg
Automated review identified **ffmpeg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AcoustID
Automated review identified **AcoustID** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MusicBrainz
Automated review identified **MusicBrainz** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Plex API
Automated review identified **Plex API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rclone
Automated review identified **rclone** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rsync
Automated review identified **rsync** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
