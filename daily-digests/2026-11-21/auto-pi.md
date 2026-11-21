---
title: "romiluz13/auto-pi"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "npm", "Pi AI Agent Framework", "mise (version manager)", "jq (JSON processor)", "Git"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["workflow orchestration", "AI agent harness", "Pi framework", "bounded autonomy", "skill pinning"]
source: "https://github.com/romiluz13/auto-pi"
stars: 6
language: "TypeScript"
last_updated: "2026-07-12T11:56:07Z"
discovered_at: "2026-07-12T11:58:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
auto-pi is a workflow orchestration system designed to enhance the Pi AI agent by providing structured, pinned workflows and bounded autonomy for task execution. It acts as a 'dress on Pi’s minimal harness' by integrating skills, prompts, and guardrails to ensure reliable and steerable AI-driven workflows.

## Key Features
- Pinned workflows with mechanical skill injection via `skill:` frontmatter for critical phases (e.g., `/plan`, `/build`, `/review`).
- Bounded autonomy with `/loop` extension, enforcing tool allowlists, contract preflight, RED/plateau exits, and commit-hash-based shipping.
- Model-agnostic design, compatible with any Pi-supported model (Claude, ChatGPT, GLM, etc.).
- Predefined prompts and chains (e.g., `/feature` for plan→build→review→ship) with steerable follow-ons.
- Observable system with `/trace-skills` for tracking activated vs. orphaned skills and `/handoff` for deterministic session summaries.

## Why It Matters for RAG Builders
It provides a structured, reliable framework for AI agents to execute complex tasks with bounded autonomy, reducing hallucinations and ensuring procedural consistency in RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pi AI Agent Framework
Automated review identified **Pi AI Agent Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mise (version manager)
Automated review identified **mise (version manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### jq (JSON processor)
Automated review identified **jq (JSON processor)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
