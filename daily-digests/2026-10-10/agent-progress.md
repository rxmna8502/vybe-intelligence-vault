---
title: "csinva/agent-progress"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Claude Code", "Shell Scripting", "JSON Configuration"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["progress tracking", "Claude Code plugin", "automated monitoring", "ETA estimation", "job management"]
source: "https://github.com/csinva/agent-progress"
stars: 1
language: "Python"
last_updated: "2026-09-01T21:09:19Z"
discovered_at: "2026-09-01T22:17:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agent-progress provides tqdm-style progress bars in the Claude Code statusline for long-running jobs, automatically tracking and displaying progress without blocking the conversation. It uses a detached watcher to observe jobs and adjust ETAs dynamically, while minimizing token usage by only engaging when necessary.

## Key Features
- Automatic progress bar display in Claude Code statusline for long-running jobs
- Dynamic ETA correction based on real-time throughput measurements
- Minimal token usage by only engaging after a configurable threshold (default 20s)
- Supports multiple agents/sessions with job ownership isolation
- Crash reporting with detailed logs and automatic handover for missed reports

## Why It Matters for RAG Builders
It enhances AI engineering workflows by providing real-time visibility into long-running jobs without disrupting the development process, reducing context-switching and improving productivity.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Configuration
Automated review identified **JSON Configuration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
