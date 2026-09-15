---
title: "Sriram-PR/doc-scraper"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "BadgerDB", "SQLite", "HTML-to-Markdown conversion", "CSS selectors", "Concurrency primitives", "HTTP client with retries", "Model Context Protocol (MCP)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["documentation scraping", "LLM data preparation", "Markdown conversion", "concurrent crawling", "RAG pipeline"]
source: "https://github.com/Sriram-PR/doc-scraper"
stars: 95
language: "Go"
last_updated: "2026-09-03T19:09:47Z"
discovered_at: "2026-09-03T19:13:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A high-performance, concurrent web crawler written in Go, designed to scrape technical documentation websites and convert extracted content into clean Markdown for LLM ingestion. It supports resumable crawls, rate limiting, and structured output for RAG systems.

## Key Features
- Configurable crawling with YAML-based settings for scope, depth, and selectors
- Concurrent and resumable crawls with state persistence using BadgerDB
- Automatic HTML-to-Markdown conversion with support for tables, task lists, and code blocks
- Built-in MCP server mode for integration with AI tools like Claude Code
- Offline full-text search (BM25) over crawled documents via SQLite FTS5

## Why It Matters for RAG Builders
It automates the critical step of converting web-based technical documentation into clean, structured Markdown optimized for LLM training and RAG pipelines, saving significant manual effort.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BadgerDB
Automated review identified **BadgerDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML-to-Markdown conversion
Automated review identified **HTML-to-Markdown conversion** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSS selectors
Automated review identified **CSS selectors** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Concurrency primitives
Automated review identified **Concurrency primitives** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP client with retries
Automated review identified **HTTP client with retries** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
