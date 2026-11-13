---
title: 'RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources
  | martinuke0''s Blog'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-12-rag-techniques-beginner-to-advanced-practical-patterns-code-and-resources/
published_at: '2026-11-13T17:54:33.796163+05:30'
collected_at: '2026-11-13T17:54:33.796176+05:30'
tags:
- agents
- anthropic
- benchmark
- frontend_ui
- hackernews
- meta-ai
- models
- openai
- paper
- rag
- reddit
- web-crawled
status: active
resource_id: blog:rag-techniques-beginner-to-advanced-practical-patt
first_seen: '2026-11-13T17:54:33.796176+05:30'
last_seen: '2026-11-13T17:54:33.796176+05:30'
last_checked: '2026-11-13T17:54:33.796176+05:30'
health_score: 100
---

# RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources | martinuke0's Blog

## Summary

*   A minimal RAG pipeline involves dense embedding documents (e.g., `SentenceTransformer` + `FAISS`) for vector search, followed by an LLM (`Flan-T5`) generating responses from retrieved context, often with chunking and prompt templating for citations.
*   Intermediate RAG enhancements include metadata filtering, cross-encoder reranking (e.g., `CrossEncoder/ms-marco-MiniLM-L-6-v2`), hybrid retrieval (combining dense and sparse methods like `BM25Okapi` via Reciprocal Rank Fusion), and query expansion techniques (e.g., HyDE, multi-query generation).
*   Advanced RAG strategies encompass multi-hop retrieval via query decomposition or ReAct patterns, GraphRAG utilizing knowledge graphs for structured context, multi-vector/learned retrievers (e.g., ColBERT, SPLADE, domain-adapted bi-encoders), context optimization (compression, selective citation), and

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-11-13T17:54:33.796163+05:30

## Related Tags

- agents
- anthropic
- benchmark
- frontend_ui
- hackernews
- meta-ai
- models
- openai
- paper
- rag
- reddit
- web-crawled

## Source

Original source: https://martinuke0.github.io/posts/2025-12-12-rag-techniques-beginner-to-advanced-practical-patterns-code-and-resources/
