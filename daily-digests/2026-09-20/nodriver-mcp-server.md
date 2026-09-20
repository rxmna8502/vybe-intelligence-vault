---
title: "andresolbach/nodriver-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "nodriver", "Model Context Protocol (MCP)", "Google Chrome", "CDP (Chrome DevTools Protocol)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["browser automation", "anti-bot bypass", "MCP server", "stealth scraping", "Chrome DevTools"]
source: "https://github.com/andresolbach/nodriver-mcp-server"
stars: 3
language: "Python"
last_updated: "2026-08-07T21:40:09Z"
discovered_at: "2026-08-07T21:41:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An undetected, anti-bot-resistant browser automation MCP server that enables AI agents to control Chrome without triggering WebDriver fingerprinting or bot detection systems like Cloudflare or hCaptcha. It provides 59 tools for navigation, scraping, and automation via the Model Context Protocol (MCP).

## Key Features
- Undetected browser automation with `navigator.webdriver` set to `false` to avoid bot detection
- Built-in Cloudflare challenge solver (`cf_verify`) for handling CAPTCHAs and bot checks
- 59 tools covering navigation, input, snapshots, screenshots, network inspection, and session management
- Supports ephemeral and persistent profiles for concurrent AI agent sessions without collisions
- Compact accessibility-tree snapshots for efficient page analysis and reduced data transfer

## Why It Matters for RAG Builders
It enables AI agents to reliably automate browser tasks without triggering anti-bot systems, making it essential for RAG pipelines that require real-world web interaction and data extraction.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nodriver
Automated review identified **nodriver** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Chrome
Automated review identified **Google Chrome** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CDP (Chrome DevTools Protocol)
Automated review identified **CDP (Chrome DevTools Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
