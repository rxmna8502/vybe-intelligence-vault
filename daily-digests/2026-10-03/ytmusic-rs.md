---
title: "richudell/ytmusic-rs"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "Google OAuth 2.0", "YouTube Data API v3", "Cargo (Rust package manager)"]
quality_score: 7
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["MCP server", "YouTube Music", "Rust", "OAuth authentication", "playlist management"]
source: "https://github.com/richudell/ytmusic-rs"
stars: 0
language: "Rust"
last_updated: "2026-08-09T06:54:47Z"
discovered_at: "2026-08-09T06:58:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based Model Context Protocol (MCP) stdio server that provides YouTube Music integration, including search, playlist management, and authentication via Google OAuth. It is a port of a TypeScript MCP server but optimized for Rust with reduced scope and improved security.

## Key Features
- Rust-based MCP stdio server for YouTube Music integration
- Supports search, playlist creation, and management tools
- Secure OAuth 2.0 authentication with required encryption key
- Reduced scope to avoid complexity (e.g., no adaptive recommendations or PostgreSQL persistence)
- Fixed security issues from the TypeScript original (e.g., no hardcoded encryption keys)

## Why It Matters for RAG Builders
It provides a secure, Rust-native MCP server for YouTube Music integration, enabling AI agents to interact with playlists and search functionality without relying on TypeScript or external databases.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google OAuth 2.0
Automated review identified **Google OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YouTube Data API v3
Automated review identified **YouTube Data API v3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo (Rust package manager)
Automated review identified **Cargo (Rust package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
