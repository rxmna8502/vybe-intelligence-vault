---
title: "danielealbano/android-remote-control-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Kotlin", "Android SDK", "Ktor", "Netty", "Jetpack Compose", "Material Design 3", "OAuth 2.1", "Cloudflare Quick Tunnels", "ngrok", "ADB", "BouncyCastle", "Testcontainers", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP Server", "Android Automation", "AI Device Control", "Remote Access", "Token Efficiency"]
source: "https://github.com/danielealbano/android-remote-control-mcp"
stars: 118
language: "Kotlin"
last_updated: "2026-07-13T18:39:49Z"
discovered_at: "2026-07-13T18:43:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An Android application that functions as an MCP (Model Context Protocol) server, enabling AI models to remotely control an Android device via accessibility services, screenshots, and 56 MCP tools across 13 categories. Runs entirely on-device with optional HTTPS, OAuth, and remote access tunnels for internet connectivity.

## Key Features
- 56 MCP tools across 13 categories (screen introspection, gestures, file operations, app management, etc.)
- Runs entirely on-device with no ADB dependency, enabling remote control over the internet via tunnels
- Optimized for token efficiency with compact screen state representation, configurable screenshot quality, and per-tool enable/disable
- Supports OAuth 2.1 for secure AI client connections (Claude.ai/Code) and bearer token authentication
- Auto-start on boot, foreground service, and headless setup via ADB for seamless integration

## Why It Matters for RAG Builders
It enables AI models to directly interact with and control Android devices in real-time, reducing latency and dependency on external tools like ADB while optimizing token usage for agentic workflows.

## Tech Stack Deep Dive
### Kotlin
Automated review identified **Kotlin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Android SDK
Automated review identified **Android SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ktor
Automated review identified **Ktor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Netty
Automated review identified **Netty** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jetpack Compose
Automated review identified **Jetpack Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Material Design 3
Automated review identified **Material Design 3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Quick Tunnels
Automated review identified **Cloudflare Quick Tunnels** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ngrok
Automated review identified **ngrok** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ADB
Automated review identified **ADB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BouncyCastle
Automated review identified **BouncyCastle** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Testcontainers
Automated review identified **Testcontainers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
