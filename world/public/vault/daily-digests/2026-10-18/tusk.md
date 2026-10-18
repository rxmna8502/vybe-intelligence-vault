---
title: "cstroie/tusk"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["PHP 7.4", "HTTP/JSON-RPC 2.0", "Composer", "cURL", "DOM", "SimpleXML", "mbstring", "Readability.php"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "PHP", "web scraping", "RAG tooling", "HTTP transport"]
source: "https://github.com/cstroie/tusk"
stars: 0
language: "PHP"
last_updated: "2026-08-08T08:43:08Z"
discovered_at: "2026-08-08T08:43:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Tusk is a minimal-dependency MCP (Model Context Protocol) server written in PHP 7.4, exposed over HTTP for remote connectivity. It provides six tools for web content fetching, search, and metadata extraction, designed to integrate seamlessly with MCP clients.

## Key Features
- Six built-in tools for web content fetching, search, and metadata extraction (web_fetch, web_search, feed_discover, feed_fetch, sitemap_fetch, url_metadata)
- HTTP-based MCP server with JSON-RPC 2.0 over POST and unauthenticated health checks
- SSRF protection via SafeFetcher for user-supplied URLs
- Minimal dependencies (only Readability.php via Composer, rest hand-written)
- Supports client authentication via Bearer tokens with optional client ID suffixes

## Why It Matters for RAG Builders
Tusk provides essential web scraping and content extraction tools for RAG pipelines, enabling seamless integration of live web data into AI workflows via the MCP protocol.

## Tech Stack Deep Dive
### PHP 7.4
Automated review identified **PHP 7.4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON-RPC 2.0
Automated review identified **HTTP/JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Composer
Automated review identified **Composer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### cURL
Automated review identified **cURL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DOM
Automated review identified **DOM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SimpleXML
Automated review identified **SimpleXML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mbstring
Automated review identified **mbstring** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Readability.php
Automated review identified **Readability.php** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
