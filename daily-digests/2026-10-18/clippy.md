---
title: "Ar9av/clippy"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Swift", "macOS Accessibility APIs", "Prismor Warden (for guardrails)", "Claude Code", "OpenAI API", "Anthropic API", "YAML (for policy configuration)", "GitHub Actions (CI/CD)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["desktop automation", "screen interaction", "accessibility", "AI assistant", "macOS agent"]
source: "https://github.com/Ar9av/clippy"
stars: 3
language: "Swift"
last_updated: "2026-08-08T17:29:32Z"
discovered_at: "2026-08-08T17:33:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Clippy is a macOS desktop agent that combines screen reading, accessibility tree analysis, and automation to execute user commands by clicking and typing on the user's behalf. It bridges the gap between AI chat and real-world desktop interaction, enabling hands-free task completion while maintaining strict safety guardrails.

## Key Features
- Real-time screen reading and accessibility tree analysis to identify UI elements and their states
- One-step-at-a-time automation with automatic retries and re-planning based on observed changes
- Strict guardrails preventing irreversible actions (e.g., sending, deleting, or entering passwords)
- Integration with existing AI providers (Claude Code, Codex, OpenAI, Anthropic) for natural language processing
- Configurable memory and policy-driven safety checks via Prismor Warden

## Why It Matters for RAG Builders
Clippy bridges the critical gap between AI chat and real-world desktop interaction, enabling AI assistants to perform tasks autonomously while maintaining strict safety controls, making it essential for building robust RAG systems that require real-world action execution.

## Tech Stack Deep Dive
### Swift
Automated review identified **Swift** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS Accessibility APIs
Automated review identified **macOS Accessibility APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prismor Warden (for guardrails)
Automated review identified **Prismor Warden (for guardrails)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML (for policy configuration)
Automated review identified **YAML (for policy configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
