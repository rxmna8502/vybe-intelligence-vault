# RAG Stack Map

## Overview
Retrieval-Augmented Generation for grounding LLM outputs in verified databases.

## Core Concepts
Semantic search, vector embeddings, chunking strategies, reranking, hybrid search.

## Key Tools and Frameworks
Qdrant, Pinecone, Milvus, pgvector, llamaindex, LangChain.

## Recommended Resources from the Vault
*   [Deploy Embedding Models with Hugging Face Inference Endpoints](https://huggingface.co/blog/inference-endpoints-embeddings)
*   [Retrieval Augmented Generation with Huggingface Transformers and Ray](https://huggingface.co/blog/ray-rag)
*   [Train 400x faster Static Embedding Models with Sentence Transformers](https://huggingface.co/blog/static-embeddings)
*   [Making automatic speech recognition work on large files with Wav2Vec2 in 🤗 Transformers](https://huggingface.co/blog/asr-chunking)
*   [Train a Sentence Embedding Model with 1B Training Pairs](https://huggingface.co/blog/1b-sentence-embeddings)

## Project Ideas
*   PDF QA script that processes papers and saves vector embeddings to pgvector.

## Recommended Learning Path
Implement semantic lookup on plain text, then integrate chunking, and final LLM synthesis.

## Related Folders
*   [workspace-archive/rag-systems/](../workspace-archive/rag-systems/README.md)
