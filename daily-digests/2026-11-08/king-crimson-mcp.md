---
title: "ytkoka/king-crimson-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MusicBrainz API", "Discogs API", "setlist.fm API", "Cover Art Archive API", "MCP (Model Context Protocol)", "JSON caching", "uv (package manager)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["discography", "live performances", "music data integration", "MCP server", "King Crimson"]
source: "https://github.com/ytkoka/king-crimson-mcp"
stars: 0
language: "Python"
last_updated: "2026-08-10T06:17:46Z"
discovered_at: "2026-08-10T15:03:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A specialized MCP server that integrates MusicBrainz, Discogs, Cover Art Archive, and setlist.fm to provide King Crimson's discography and live-performance data, featuring a curated line-up era model and reverse lookup for live releases by song and incarnation.

## Key Features
- Cross-source integration layer for MusicBrainz, Discogs, Cover Art Archive, and setlist.fm using MBID for unified data retrieval.
- Curated line-up era model with eight distinct incarnations, enabling era-specific song performance history.
- Offline-first concert cache for instant, rate-limit-resistant queries after initial setup.
- Reverse lookup for songs to official live releases, grouped by incarnation, with transparent coverage reporting.
- Local caching of setlists and live releases to avoid repeated API calls and ensure data consistency.

## Why It Matters for RAG Builders
It provides a specialized, high-fidelity data integration layer for music discographies and live performances, enabling precise era-based analysis and reverse lookups that generic tools cannot achieve.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MusicBrainz API
Automated review identified **MusicBrainz API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discogs API
Automated review identified **Discogs API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### setlist.fm API
Automated review identified **setlist.fm API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cover Art Archive API
Automated review identified **Cover Art Archive API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON caching
Automated review identified **JSON caching** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
