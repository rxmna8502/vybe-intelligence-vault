---
title: "Synvoya/codeinspectus"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Opengrep (SAST)", "Gitleaks (Secrets Detection)", "Trivy (SCA, IaC, Secrets, SBOM)", "SHA256 Verification", "Cosign (Binary Signing)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["security-scanner", "local-first", "MCP-server", "AI-code-safety", "compliance-checking"]
source: "https://github.com/Synvoya/codeinspectus"
stars: 10
language: "TypeScript"
last_updated: "2026-07-19T11:46:15Z"
discovered_at: "2026-07-19T11:57:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
CodeInspectus is a local-first, privacy-preserving security MCP server designed to scan AI-generated code for vulnerabilities and compliance gaps. It integrates multiple open-source security engines with AI-specific checks, enabling agents like Claude Code or Cursor to perform scan → fix → rescan workflows entirely offline.

## Key Features
- Integrates SAST (Opengrep), secrets detection (Gitleaks), and SCA/IaC (Trivy) with AI-specific checks for vulnerabilities unique to AI-generated code.
- Supports scan → explain → fix → rescan workflows via MCP, enabling AI agents to iteratively improve code security.
- Zero network egress at scan time with SHA-pinned engine binaries and offline vulnerability databases for privacy and reproducibility.
- Provides compliance reporting (e.g., Essential Eight) with code-level control coverage, not certification claims.
- Includes AI-focused checks for client-side secrets, Supabase RLS misconfigurations, prompt-injection sinks, and unsanitized HTML rendering.

## Why It Matters for RAG Builders
CodeInspectus enables AI engineering teams to proactively identify and remediate security flaws in AI-generated code before deployment, ensuring privacy and compliance without external dependencies.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Opengrep (SAST)
Automated review identified **Opengrep (SAST)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gitleaks (Secrets Detection)
Automated review identified **Gitleaks (Secrets Detection)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Trivy (SCA, IaC, Secrets, SBOM)
Automated review identified **Trivy (SCA, IaC, Secrets, SBOM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA256 Verification
Automated review identified **SHA256 Verification** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign (Binary Signing)
Automated review identified **Cosign (Binary Signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
