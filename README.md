<div align="center">

# VYBE INTELLIGENCE VAULT
### *The Autonomous Knowledge Graph, Anti-Slop Truth Engine & Live Agent Memory*

<p align="center">
  <b>A living, self-synthesizing intelligence engine indexing the frontier of AI Agents, RAG Architectures, MCP Tooling, and LLM Engineering.</b>
</p>

<p align="center">
  <a href="https://rxmna8502.github.io/vybe-intelligence-vault/"><img src="https://img.shields.io/badge/3D%20GRAPH-LIVE%20WEBGL%20DEMO-00f0ff?style=for-the-badge&logo=three.js&logoColor=black" alt="3D WebGL Demo" /></a>
  <a href="#the-anti-slop-truth-engine--reproducibility-standard"><img src="https://img.shields.io/badge/TRUTH%20ENGINE-ANTI--SLOP%20VERIFIED-10b981?style=for-the-badge" alt="Truth Engine" /></a>
  <a href="#zero-install-mcp-agent-integration"><img src="https://img.shields.io/badge/MCP%20SERVER-ZERO%20INSTALL-ec4899?style=for-the-badge" alt="MCP Server" /></a>
  <a href="#"><img src="https://img.shields.io/badge/INDEXED%20NODES-160%2C000%2B-8b5cf6?style=for-the-badge" alt="Indexed Nodes" /></a>
  <a href="https://github.com/rxmna8502/vybe-intelligence-vault/actions"><img src="https://img.shields.io/github/actions/workflow/status/rxmna8502/vybe-intelligence-vault/harvester.yml?style=for-the-badge&label=INTELLIGENCE%20PIPELINE&color=10b981&logo=githubactions&logoColor=white" alt="Pipeline Status" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/LICENSE-MIT-22c55e?style=for-the-badge" alt="License" /></a>
</p>

<p align="center">
  <a href="#instant-ide-superpower-npx-vybe-sync"><b>1-Second Superpower</b></a> |
  <a href="#the-anti-slop-truth-engine--reproducibility-standard"><b>Truth Engine</b></a> |
  <a href="#3d-spatial-graph-explorer-live-webgl"><b>3D WebGL Map</b></a> |
  <a href="#zero-install-mcp-agent-integration"><b>Zero-Install MCP</b></a> |
  <a href="#unified-cli-tooling"><b>CLI Tools</b></a> |
  <a href="#production-blueprints--sprints"><b>Blueprints</b></a> |
  <a href="#the-manifesto"><b>Manifesto</b></a>
</p>

---

### Instant IDE Superpower: `npx vybe sync`
**Give Cursor, Claude Desktop, and Windsurf instant, zero-hallucination memory of verified 2025/2026 AI architectures:**

```bash
# Run this inside ANY repository:
npx vybe sync
```
*Automatically detects your stack (Next.js 15, LangGraph, vLLM, FastMCP, etc.), matches it against 160,000+ verified vault nodes, and injects clean, production-tested constraints directly into `.cursorrules`, `AGENT.md`, and `.windsurfrules`.*

---

</div>

## The Manifesto

> **Static "Awesome Lists" are dead.** They rot the day after they are curated, filled with abandoned forks, broken dependencies, and yesterday's hype.

**Vybe Intelligence Vault is an autonomous, self-evolving intelligence engine.**

Powered by a distributed harvesting mesh and multi-model LLM evaluators, the vault continuously monitors global AI research, repository ecosystems, technical disclosures, and foundation model releases. It extracts core architecture patterns, filters out boilerplate noise, calculates multidimensional quality scores, constructs semantic vector graphs, and publishes production-grade intelligence nodes directly into this repository.

No manual curation. No stale archives. Just clean, queryable, high-signal intelligence for modern AI builders.

---

## The Anti-Slop Truth Engine & Reproducibility Standard

The open-source AI landscape is currently drowned in **benchmark fraud, synthetic star farming, and abandoned wrappers**. Repositories claim "revolutionary autonomous reasoning" but fail to run or contain mocked API calls.

Vybe incorporates an automated watchdog pipeline - the **Vybe Reproducibility Standard (VRS v1.0)**:

| Pillar | Verification Vector | Status |
|---|---|:---:|
| **1. Execution Sandbox** | Automated clean-room container build testing (< 90s) | Verified |
| **2. Star Authenticity** | Fork-to-star ratio, commit entropy & anti-bot filtering | Verified |
| **3. Grounded AST Code** | Rejection of mocked stubs, empty wrappers, and vaporware | Verified |
| **4. Modern Dependency Locks** | Zero deprecated libraries, pinned environment lockfiles | Verified |
| **5. Protocol Conformance** | Native Model Context Protocol (MCP) & OpenAI/vLLM standards | Verified |

### Audit Any Repository
```bash
npx vybe audit <owner/repo>
```

### Embed Official Verification Badges
Verified repositories can embed official Vybe verification shields:
```markdown
[![Vybe Verified](https://img.shields.io/badge/VYBE%20AUDIT-REPRODUCIBLE-00f0ff?style=for-the-badge&logo=shield)](https://github.com/rxmna8502/vybe-intelligence-vault)
[![Vybe Tier: SOTA Gold](https://img.shields.io/badge/VYBE%20TIER-SOTA%20GOLD-ffd700?style=for-the-badge)](https://github.com/rxmna8502/vybe-intelligence-vault)
```
Read the full [Truth Engine Specification & Audit Matrix](truth-engine/README.md).

---

## 3D Spatial Graph Explorer (Live WebGL)

Experience knowledge exploration in retro 90s CRT Noir 3D. The vault compiles its master index into an interactive WebGL knowledge constellation built with **React 19**, **Three.js**, **React Three Fiber (R3F)**, **Drei**, and **GSAP**:

[Launch Fullscreen Live 3D World](https://rxmna8502.github.io/vybe-intelligence-vault/)

- **Real-Time Force Clustering**: Nodes group organically based on vector similarity and shared technologies.
- **Interactive Command Palette**: Press `Cmd + K` or `Ctrl + K` to jump between 160,000+ nodes instantly.
- **Level of Detail (LOD) Rendering**: Proximity-based dynamic LOD for high-performance navigation.
- **Hologram Matrix Mode**: Launch terminal visualizer via `npx vybe matrix`.

---

## Zero-Install MCP Agent Integration

Connect your AI assistants (Claude Desktop, Cursor, Windsurf) to 160,000+ intelligence nodes with **zero cloning and zero virtual environments**.

### 1. Claude Desktop (1-Line Config)
Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "vybe-vault": {
      "command": "npx",
      "args": ["-y", "vybe-vault", "mcp"]
    }
  }
}
```

### 2. Cursor IDE Integration
In `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "vybe-vault": {
      "command": "npx",
      "args": ["-y", "vybe-vault", "mcp"]
    }
  }
}
```

### 3. Native Python FastMCP Server (Alternative)
For developers preferring a local Python server:
```bash
cd mcp-server
pip install -r requirements.txt
python -m mcp_server.server
```
Detailed instructions in [mcp-server/README.md](mcp-server/README.md).

---

## Unified CLI Tooling

The vault ships with an out-of-the-box CLI accessible via `npx vybe`:

```bash
# Inject verified stack constraints into .cursorrules & AGENT.md
npx vybe sync

# Search across 160,000+ papers, repos, and architectural patterns
npx vybe search "graphrag"

# Audit a repository against the Anti-Slop Reproducibility Standard
npx vybe audit vllm-project/vllm

# Launch retro CRT matrix terminal animation & view node telemetry
npx vybe matrix

# View vault status, version, and active endpoints
npx vybe info
```

---

## Core Architecture

The vault operates as an end-to-end autonomous intelligence lifecycle:

```
                                  ┌───────────────────────────────┐
                                  │   GLOBAL INTELLIGENCE MESH    │
                                  │ ArXiv • HuggingFace • GitHub │
                                  │   Tech Blogs • PapersWithCode │
                                  └───────────────┬───────────────┘
                                                  │
                                                  ▼
                        ┌───────────────────────────────────────────────────┐
                        │        DISTRIBUTED HARVESTING PIPELINE            │
                        │ • Rate-adaptive scrapers & canonical deduplication│
                        │ • Jaccard semantic matching & PII sanitization    │
                        └─────────────────────────┬─────────────────────────┘
                                                  │
                                                  ▼
                        ┌───────────────────────────────────────────────────┐
                        │        ANTI-SLOP TRUTH & EVALUATION ENGINE        │
                        │ • Multi-model LLM verification & scoring (1-10)   │
                        │ • Clean Docker sandbox compilation audit          │
                        │ • RAG relevance, tech stack, and complexity audit │
                        └─────────────────────────┬─────────────────────────┘
                                                  │
                                                  ▼
                        ┌───────────────────────────────────────────────────┐
                        │          SEMANTIC GRAPH RECONSTRUCTION            │
                        │ • Vector embedding pass over all active nodes     │
                        │ • Bidirectional relationship synthesis:           │
                        │   [similar_to] • [depends_on] • [references]      │
                        │ • Generates optimized: vault-index.json           │
                        └─────────────────────────┬─────────────────────────┘
                                                  │
                                  ┌───────────────┴───────────────┐
                                  │                               │
                                  ▼                               ▼
                    ┌───────────────────────────┐   ┌───────────────────────────┐
                    │      3D SPATIAL GRAPH     │   │     NATIVE MCP GATEWAY    │
                    │ React 19 • R3F • WebGL    │   │ Claude • Cursor • Windsurf│
                    │ Real-time cluster viewer  │   │ Direct context injection  │
                    └───────────────────────────┘   └───────────────────────────┘
```

---

## Cognitive Taxonomy

<table>
  <tr>
    <th width="25%">Sector</th>
    <th width="50%">Focus Areas</th>
    <th width="25%">Primary Directory</th>
  </tr>
  <tr>
    <td><b>AI Agents</b></td>
    <td>Autonomous loops, tool calling, memory persistence, multi-agent swarms, ReAct architectures.</td>
    <td><code>ai/agents/</code></td>
  </tr>
  <tr>
    <td><b>RAG Systems</b></td>
    <td>GraphRAG, hybrid retrieval, vector indices, semantic caching, rerankers, contextual embeddings.</td>
    <td><code>ai/rag/</code></td>
  </tr>
  <tr>
    <td><b>MCP Protocols</b></td>
    <td>Model Context Protocol servers, stdio bridges, agent tools, local context adapters.</td>
    <td><code>mcp-server/</code></td>
  </tr>
  <tr>
    <td><b>Inference & Ops</b></td>
    <td>vLLM, TensorRT-LLM, Ollama, quantization (GGUF, EXL2), structured outputs, edge runtimes.</td>
    <td><code>ai/models/</code></td>
  </tr>
  <tr>
    <td><b>Breakthroughs</b></td>
    <td>High-impact preprints, frontier model papers, evaluation benchmarks, architectural disclosures.</td>
    <td><code>ai/research/</code></td>
  </tr>
</table>

---

## Production Blueprints & Sprints

Accelerate your engineering lifecycle with curated execution plans and system architectures:

### Featured: The $0 Local AI Engineering Stack
Build a frontier AI development rig with zero subscriptions, zero paid API keys, and 100% offline privacy using DeepSeek-R1, Qwen 2.5 Coder, Ollama, VS Code, and the Vybe MCP Server:
- Read the complete blueprint: [The Zero-Dollar ($0) Local AI Engineering Stack](learning-paths/zero-dollar-local-ai-stack.md)

### 8 Accelerated 7-Day Sprints
| Track | Focus | Blueprint |
|---|---|:---:|
| **Agent Engineering** | Multi-agent coordination, tool execution & self-correction | [7-Day Agent Builder](learning-paths/7-day-agent-builder.md) |
| **Foundation Engineering** | Fine-tuning, quantization, evaluations & synthetic data | [7-Day AI Engineering](learning-paths/7-day-ai-engineering.md) |
| **Generative Frontend** | Real-time streaming UI, visual agents & WebGL interfaces | [7-Day AI Frontend](learning-paths/7-day-ai-frontend.md) |
| **Enterprise SaaS** | Multi-tenant RAG, billing integration & tenant security | [7-Day AI SaaS Builder](learning-paths/7-day-ai-saas-builder.md) |
| **Pipeline Automation** | Fault-tolerant workers, scheduled triggers & resilience | [7-Day Automation Builder](learning-paths/7-day-automation-builder.md) |
| **Production LLMOps** | Tracing, telemetry, semantic caching & cost controls | [7-Day LLMOps](learning-paths/7-day-llmops.md) |
| **MCP Tool Authoring** | Protocol server development, stdio clients & tools | [7-Day MCP Builder](learning-paths/7-day-mcp-builder.md) |
| **Advanced RAG** | Hierarchical chunking, hybrid vector search & reranking | [7-Day RAG Builder](learning-paths/7-day-rag-builder.md) |

### 6 Production Stacks
- [Essential 3D WebDev Blueprint](workspace-archive/best-of/essential-3d-webdev.md)
- [Essential Agent Building Blueprint](workspace-archive/best-of/essential-agent-building.md)
- [Essential AI Engineering Blueprint](workspace-archive/best-of/essential-ai-engineering.md)
- [Essential Automation Blueprint](workspace-archive/best-of/essential-automation.md)
- [Essential Frontend AI UI Blueprint](workspace-archive/best-of/essential-frontend-ai-ui.md)
- [Essential RAG Stack Blueprint](workspace-archive/best-of/essential-rag-stack.md)

---

## Repository Map

```
vybe-intelligence-vault/
├── bin/                        # Zero-dependency Node.js CLI & MCP stdio server
│   ├── vybe.js                 # Unified CLI executable (sync, search, audit, matrix)
│   └── mcp-bridge.js           # Native MCP stdio server implementation
├── truth-engine/               # Anti-Slop verification standard & audit specifications
├── world/                      # React 19 + Three.js 3D WebGL knowledge explorer
├── mcp-server/                 # Python FastMCP server implementation
├── .github/workflows/          # GitHub Actions (harvester, world deployment)
├── ai/                         # Curated domain knowledge nodes
│   ├── agents/                 # Multi-agent architectures & frameworks
│   ├── rag/                    # Retrieval & vector systems
│   ├── models/                 # Open-weight models & quantization
│   └── research/               # Cutting-edge papers & preprints
├── learning-paths/             # 7-day engineering sprint blueprints
├── maps/                       # System architecture maps
├── skills/                     # Domain capability checklists
├── scripts/                    # Harvesting, state management & graph compilers
└── vault-index.json            # Master semantic knowledge graph
```

---

## Submitting Intelligence & Audits

Have you built or discovered a breakthrough AI library, paper, tool, or MCP server?

- **Submit a Candidate**: Open an issue using our [Resource Suggestion Template](https://github.com/rxmna8502/vybe-intelligence-vault/issues/new?template=resource-suggestion.yml).
- **Request a Truth Engine Audit**: Request official VRS evaluation to earn reproducible badges for your repository.

---

<div align="center">

**[Vybe Intelligence Vault](https://github.com/rxmna8502/vybe-intelligence-vault)** - Engineered by <a href="https://github.com/sairaman436">@sairaman436</a>

*Autonomous Intelligence Infrastructure for the Agentic Era.*

</div>
