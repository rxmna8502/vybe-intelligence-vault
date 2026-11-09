---
title: "cyborginc/cyborgdb-go"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Go", "gRPC", "Docker", "AWS KMS", "AWS Secrets Manager", "DiskIVF Index", "Context API"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["encrypted vector search", "client-side encryption", "BYOK/HYOK", "disk-backed index", "Go SDK"]
source: "https://github.com/cyborginc/cyborgdb-go"
stars: 9
language: "Go"
last_updated: "2026-08-07T19:13:11Z"
discovered_at: "2026-08-07T19:59:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
The CyborgDB Go SDK is a Go client for CyborgDB, an encrypted vector database that enables similarity search directly on encrypted data. The SDK communicates with a self-hosted service, allowing secure vector operations with client-side key management and cryptographic RBAC.

## Key Features
- Search on encrypted data with client-side keys; only query results are decrypted
- Disk-backed encrypted DiskIVF index with near-plaintext recall performance
- Supports complex metadata filtering (equality, range, logical operators) on encrypted data
- Bring Your Own Key (BYOK) or Hold Your Own Key (HYOK) with AWS KMS or Secrets Manager integration
- Per-tenant key isolation with cryptographic RBAC for secure multi-tenancy

## Why It Matters for RAG Builders
It enables secure, privacy-preserving vector search for RAG systems by allowing encrypted data operations without exposing raw vectors or indexes to the database server.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS KMS
Automated review identified **AWS KMS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS Secrets Manager
Automated review identified **AWS Secrets Manager** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DiskIVF Index
Automated review identified **DiskIVF Index** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Context API
Automated review identified **Context API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
