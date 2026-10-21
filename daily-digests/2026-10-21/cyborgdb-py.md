---
title: "cyborginc/cyborgdb-py"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "Docker", "AWS KMS", "AWS Secrets Manager", "Vector Search", "Encryption", "ANN (Approximate Nearest Neighbor)", "RBAC (Role-Based Access Control)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["encrypted vector search", "client-side encryption", "BYOK", "ANN index", "multi-tenancy"]
source: "https://github.com/cyborginc/cyborgdb-py"
stars: 8
language: "Python"
last_updated: "2026-08-07T19:11:58Z"
discovered_at: "2026-08-07T20:00:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
The CyborgDB Python SDK is a client library for CyborgDB, an encrypted vector database that enables similarity search directly on ciphertext without decrypting the index. It integrates seamlessly with AI workflows and supports features like BYOK, encrypted ANN, and per-tenant key isolation.

## Key Features
- Search on encrypted data with client-side keys; only query results are decrypted
- Disk-backed encrypted DiskIVF index with high recall (within 2% of plaintext)
- Supports filters on encrypted metadata for combined vector and predicate queries
- Bring Your Own Key (BYOK) via AWS KMS or Secrets Manager, or use client-side keys
- Per-tenant key isolation with cryptographic RBAC for secure multi-user access

## Why It Matters for RAG Builders
CyborgDB enables secure, privacy-preserving vector search for RAG systems by allowing similarity search directly on encrypted data, eliminating the need to decrypt sensitive indexes while maintaining high performance.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS KMS
Automated review identified **AWS KMS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS Secrets Manager
Automated review identified **AWS Secrets Manager** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search
Automated review identified **Vector Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Encryption
Automated review identified **Encryption** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ANN (Approximate Nearest Neighbor)
Automated review identified **ANN (Approximate Nearest Neighbor)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RBAC (Role-Based Access Control)
Automated review identified **RBAC (Role-Based Access Control)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
