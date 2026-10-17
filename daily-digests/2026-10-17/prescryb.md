---
title: "konstruktoid/prescryb"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SSH", "OSV.dev", "NVD API", "Ansible", "GitHub API", "Jinja2"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["CVE remediation", "compliance mapping", "Ansible playbook generation", "MCP server", "security orchestration"]
source: "https://github.com/konstruktoid/prescryb"
stars: 1
language: "Python"
last_updated: "2026-07-11T11:01:20Z"
discovered_at: "2026-07-11T11:04:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
prescryb is a remediation orchestrator exposed as an MCP server that enables natural-language requests for security remediation, such as checking CVEs, mapping compliance controls, and generating Ansible playbooks. It operates in a read-only or data-generation mode, never applying changes to target hosts.

## Key Features
- SSH inventory for host discovery and package detection
- CVE matching against OSV.dev with ecosystem-aware version comparison
- Compliance control mapping to CIS/DISA STIG and MITRE ATT&CK
- NIST CCE lookup for configuration enumeration
- Read-only Ansible playbook generation for suggested fixes

## Why It Matters for RAG Builders
It streamlines the remediation process by automating CVE detection, compliance mapping, and playbook generation, reducing manual effort for security teams while ensuring accurate and actionable outputs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV.dev
Automated review identified **OSV.dev** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NVD API
Automated review identified **NVD API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ansible
Automated review identified **Ansible** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jinja2
Automated review identified **Jinja2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
