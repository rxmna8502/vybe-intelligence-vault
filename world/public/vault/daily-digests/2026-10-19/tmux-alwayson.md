---
title: "nahidspace/tmux-alwayson"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "tmux", "systemd", "tmux-resurrect", "tmux-continuum", "tmux-assistant-resurrect"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["tmux", "AI agents", "session persistence", "systemd", "automation"]
source: "https://github.com/nahidspace/tmux-alwayson"
stars: 0
language: "Go"
last_updated: "2026-08-07T20:41:13Z"
discovered_at: "2026-08-07T20:42:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
tmux-alwayson is a Go-based tool that ensures AI coding agent sessions (e.g., Claude Code, OpenCode, Codex CLI) running in tmux persist across system reboots and tmux restarts. It automates the setup of systemd services, tmux plugins, and agent-specific hooks to reliably restore sessions.

## Key Features
- Automated setup of systemd services for tmux and periodic session saves
- Agent-agnostic interface for detecting and resuming AI coding sessions (Claude, OpenCode, Codex CLI)
- Idempotent install/uninstall process with systemd user units
- Guard against stale or corrupted session saves
- Headless and Raspberry Pi compatible with no active user session

## Why It Matters for RAG Builders
It ensures critical AI coding agent sessions survive reboots, enabling uninterrupted workflows in headless or unattended environments.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tmux
Automated review identified **tmux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tmux-resurrect
Automated review identified **tmux-resurrect** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tmux-continuum
Automated review identified **tmux-continuum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tmux-assistant-resurrect
Automated review identified **tmux-assistant-resurrect** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
