---
title: "LeonAkasaka/UnionAir"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["C#", "Unity Editor API", "HTTP Server", "REST API", "UPM Package"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Unity integration", "REST bridge", "AI tooling", "Editor automation", "CI/CD"]
source: "https://github.com/LeonAkasaka/UnionAir"
stars: 0
language: "C#"
last_updated: "2026-08-07T06:08:54Z"
discovered_at: "2026-08-07T06:12:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
UnionAir is an experimental Unity Editor plugin that exposes Unity's internal state and operations as a local REST API, enabling AI assistants, development bots, and CI tooling to interact with Unity projects programmatically without direct file system manipulation.

## Key Features
- Exposes Unity Editor state (e.g., scene hierarchy, compilation results, profiler data) via a local REST API
- Supports write operations like asset manipulation, scene editing, and play mode control with Unity's validation rules
- Project-local configuration via `settings.json` for secure and reviewable API exposure controls
- Automatic port allocation with persistent endpoint publishing for reliable client integration
- Modular API categories (e.g., Scene Write, Asset Write, Play Mode) with granular enable/disable controls

## Why It Matters for RAG Builders
UnionAir bridges Unity's internal state and operations to external AI agents or tooling, enabling seamless integration for automated workflows, testing, and development without manual file edits.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unity Editor API
Automated review identified **Unity Editor API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server
Automated review identified **HTTP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UPM Package
Automated review identified **UPM Package** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
