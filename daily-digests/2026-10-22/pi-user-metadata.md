---
title: "n-WN/pi-user-metadata"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "pi extension framework"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Low"
tags: ["metadata injection", "Anthropic API", "user identification", "pi extension", "API routing"]
source: "https://github.com/n-WN/pi-user-metadata"
stars: 0
language: "TypeScript"
last_updated: "2026-08-02T17:56:53Z"
discovered_at: "2026-08-02T18:02:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A pi extension that injects a Claude-Code-shaped `metadata.user_id` into Anthropic Messages API requests, enabling proper user identification for gateways and proxies that rely on this field for routing or rate-limiting.

## Key Features
- Injects `metadata.user_id` into Anthropic Messages API requests
- Generates stable `device_id` based on hostname and username
- Supports configurable `providers`, `deviceId`, and `accountUuid`
- Non-intrusive: only modifies payloads with `messages` array and does not overwrite existing `metadata.user_id`
- Handles errors gracefully without breaking requests

## Why It Matters for RAG Builders
It ensures proper user attribution in API requests for gateways and proxies that rely on `metadata.user_id`, preventing misrouting or rate-limiting issues in RAG and AI pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pi extension framework
Automated review identified **pi extension framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
