---
title: "jesset/pi-vetter"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "npm", "Sigstore", "OSV.dev", "VirusTotal API", "Socket.dev API", "Tar-stream", "@sigstore/bundle", "@sigstore/verify"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["security vetting", "supply chain security", "package evaluation", "evidence-driven", "Pi extension"]
source: "https://github.com/jesset/pi-vetter"
stars: 0
language: "TypeScript"
last_updated: "2026-09-01T15:49:56Z"
discovered_at: "2026-09-01T15:52:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
pi-vetter is a security vetting tool for Pi extension packages that evaluates candidate versions against multiple evidence sources to provide an ALLOW/ASK/DENY verdict before installation or updates. It ensures users can make informed decisions about package safety by analyzing metadata, vulnerabilities, provenance, and static code patterns.

## Key Features
- Multi-layered scanning (metadata, OSV, provenance, static analysis, diff, VirusTotal, Socket.dev)
- Interactive TUI for approval-based installation of vetted packages
- Fail-closed verdict system (no silent ALLOW on scanner failures)
- Provenance verification with Sigstore and npm attestations
- Caching and configurable rules for tailored security policies

## Why It Matters for RAG Builders
It provides critical pre-installation security checks for AI extension packages, reducing the risk of malicious or vulnerable code entering the supply chain.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sigstore
Automated review identified **Sigstore** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV.dev
Automated review identified **OSV.dev** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VirusTotal API
Automated review identified **VirusTotal API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Socket.dev API
Automated review identified **Socket.dev API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tar-stream
Automated review identified **Tar-stream** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @sigstore/bundle
Automated review identified **@sigstore/bundle** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @sigstore/verify
Automated review identified **@sigstore/verify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
