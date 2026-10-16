---
title: "michalharakal/Daily-StandAPP"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Kotlin", "Gradle", "LLM Inference (SKAINET, REST_API)", "Git", "MCP (Model Context Protocol)", "JVM", "LM Studio", "Ollama"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["standup generation", "LLM pipeline", "Git analysis", "MCP server", "benchmarking"]
source: "https://github.com/michalharakal/Daily-StandAPP"
stars: 2
language: "Kotlin"
last_updated: "2026-07-18T07:43:36Z"
discovered_at: "2026-07-18T07:47:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Daily-StandAPP is a Kotlin-based CLI and MCP server for generating structured daily standup summaries from Git repositories using typed pipelines and LLM inference. It supports multiple backends (SKAINET, REST_API) and formats (markdown, JSON, text) with built-in benchmarking for evaluating LLM performance and quality.

## Key Features
- Typed Kotlin DSL pipeline for standup generation (preprocess → prompt → infer → postprocess)
- Supports multiple output formats (markdown, JSON, text) with structured validation
- MCP server for tool-calling mode to fetch commits dynamically via `get_recent_commits`
- Built-in benchmarking module to evaluate LLM backends on quality and performance metrics
- Cross-platform compatibility with local (SKAINET, Ollama) and cloud (OpenAI-compatible) backends

## Why It Matters for RAG Builders
It provides a robust, pipeline-driven approach to automate standup summaries from Git data, enabling RAG builders to integrate structured, high-quality daily reports into their workflows with minimal manual effort.

## Tech Stack Deep Dive
### Kotlin
Automated review identified **Kotlin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gradle
Automated review identified **Gradle** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Inference (SKAINET, REST_API)
Automated review identified **LLM Inference (SKAINET, REST_API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JVM
Automated review identified **JVM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LM Studio
Automated review identified **LM Studio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
