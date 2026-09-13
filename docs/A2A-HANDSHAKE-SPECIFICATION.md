# A2A Handshake Discovery & Capabilities Offer [CCiA Protocol]

## 1. Overview

The **Agent-to-Agent (A2A) Handshake Discovery & Capabilities Offer** protocol enables autonomous AI agents to negotiate, publish, and contract capabilities with remote agents over **JSON-RPC 2.0**.

This specification resolves GitHub Issue #134, defining the exact structure for:
- Request identification (`id`)
- Handshake & offer invocation method (`method`)
- Originating provider credentials & endpoint (`sender`)
- Target coordinator / consumer agent (`receiver`)
- Granular capability definitions (`capabilities`), including input/output schemas and SLA thresholds
- Per-capability pricing models, billing units, and cryptographic settlement terms (`pricing`, `agreement_terms`)

---

## 2. JSON-RPC 2.0 Request Payload

An offering agent transmits this payload to a remote agent's RPC endpoint:

```json
{
  "jsonrpc": "2.0",
  "id": "req-a2a-offer-20260913-001",
  "method": "handshake.offerCapabilities",
  "params": {
    "protocol": {
      "name": "CCiA-A2A",
      "version": "2.0.0",
      "handshake_phase": "capabilities_offer",
      "timestamp": "2026-09-13T13:45:00Z",
      "valid_until": "2026-09-20T13:45:00Z"
    },
    "sender": {
      "agent_id": "urn:agent:vybe:harvester-agent-01",
      "name": "Vybe Intelligence Harvester & Analysis Agent",
      "endpoint": "https://vault.vybe.internal/api/v1/a2a",
      "public_key": "ed25519:3b1a8d5c4e9f7a2b0c6e8d1f3a5b7c9e0a2d4f6b8c1e3a5d7f9b0c2e4a6d8f1",
      "organization": "Vybe Intelligence Network",
      "role": "service_provider"
    },
    "receiver": {
      "agent_id": "urn:agent:remote:coordinator-agent-99",
      "name": "Remote Swarm Orchestrator Agent",
      "endpoint": "https://swarm.partner.ai/rpc/v1",
      "role": "service_consumer"
    },
    "capabilities": [
      {
        "capability_id": "cap-web-intelligence-harvest",
        "name": "Deep Web & Repository Intelligence Harvesting",
        "description": "Performs autonomous extraction, AST code analysis, semantic scoring, and markdown cataloging of web resources and repositories.",
        "version": "1.4.0",
        "interface": {
          "input_schema": {
            "type": "object",
            "required": ["source_url"],
            "properties": {
              "source_url": {
                "type": "string",
                "format": "uri",
                "description": "Target repository or article URL to harvest and analyze"
              },
              "extract_depth": {
                "type": "integer",
                "minimum": 1,
                "maximum": 3,
                "default": 1
              },
              "generate_graph_node": {
                "type": "boolean",
                "default": true
              }
            }
          },
          "output_schema": {
            "type": "object",
            "properties": {
              "status": { "type": "string" },
              "summary": { "type": "string" },
              "quality_score": { "type": "number" },
              "tags": { "type": "array", "items": { "type": "string" } },
              "graph_node_id": { "type": "string" }
            }
          }
        },
        "sla": {
          "max_latency_ms": 3500,
          "uptime_percent": 99.9,
          "rate_limit": "60_req_per_minute"
        },
        "pricing": {
          "unit_price": 0.005,
          "currency": "USDC",
          "billing_model": "per_request",
          "minimum_commitment": 0,
          "discount_tiers": [
            { "min_volume": 1000, "unit_price": 0.004 },
            { "min_volume": 10000, "unit_price": 0.0025 }
          ]
        }
      },
      {
        "capability_id": "cap-mcp-vault-query",
        "name": "MCP Vault Semantic Search & Knowledge Graph Query",
        "description": "Direct semantic search, cosine similarity vector lookup, and contextual extraction across the indexed intelligence vault.",
        "version": "2.1.0",
        "interface": {
          "input_schema": {
            "type": "object",
            "required": ["query"],
            "properties": {
              "query": { "type": "string", "description": "Search keyword or query" },
              "category": { "type": "string", "enum": ["ai", "rag", "mcp", "skills", "web-development"] },
              "limit": { "type": "integer", "default": 5 }
            }
          },
          "output_schema": {
            "type": "object",
            "properties": {
              "results": { "type": "array" },
              "total_found": { "type": "integer" }
            }
          }
        },
        "sla": {
          "max_latency_ms": 250,
          "uptime_percent": 99.95,
          "rate_limit": "300_req_per_minute"
        },
        "pricing": {
          "unit_price": 0.001,
          "currency": "USDC",
          "billing_model": "per_request",
          "monthly_subscription_option": {
            "price": 25.00,
            "currency": "USDC",
            "quota": 50000
          }
        }
      }
    ],
    "agreement_terms": {
      "payment_address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      "accepted_settlement_chains": ["Ethereum", "Polygon", "Base", "Solana"],
      "payment_terms": "prepaid_escrow_or_microchannel",
      "negotiation_allowed": true,
      "dispute_resolver": "urn:agent:arbiter:consensus-network",
      "notes": "Prices and capacities are dynamic subject to SLA tiers, peering agreements, and reciprocal A2A barter contracts between agents."
    }
  }
}
```

---

## 3. JSON-RPC 2.0 Success Response (Offer Acceptance)

When the receiving agent accepts the capability offer:

```json
{
  "jsonrpc": "2.0",
  "id": "req-a2a-offer-20260913-001",
  "result": {
    "status": "offer_accepted",
    "session_id": "sess-a2a-9f4a8b2c",
    "accepted_at": "2026-09-13T13:46:12Z",
    "accepted_capabilities": [
      "cap-web-intelligence-harvest",
      "cap-mcp-vault-query"
    ],
    "negotiated_pricing": {
      "currency": "USDC",
      "settlement_chain": "Polygon",
      "payment_channel_id": "chan-0x892a48be38fc41b"
    },
    "receiver": {
      "agent_id": "urn:agent:remote:coordinator-agent-99",
      "status": "ready"
    }
  }
}
```

---

## 4. JSON-RPC 2.0 Error Response (Rejection / Negotiation)

If the receiving agent rejects or counter-offers:

```json
{
  "jsonrpc": "2.0",
  "id": "req-a2a-offer-20260913-001",
  "error": {
    "code": -32001,
    "message": "Offer rejected: unsupported settlement token or expired terms",
    "data": {
      "reason": "Requested pricing model exceeds consumer budget threshold",
      "counter_offer_available": true,
      "proposed_unit_price": 0.003,
      "currency": "USDC"
    }
  }
}
```

---

## 5. Field Reference Guide

| Field | Type | Description |
| :--- | :--- | :--- |
| `jsonrpc` | `string` | Must be strictly `"2.0"`. |
| `id` | `string \| number` | Unique call correlation identifier. |
| `method` | `string` | RPC procedure: `handshake.offerCapabilities` or `a2a.offerCapabilities`. |
| `params.sender` | `object` | Identity, public key, and callback endpoint of the offering agent. |
| `params.receiver` | `object` | Identity and endpoint of the target receiving agent. |
| `params.capabilities` | `array` | List of capabilities offered, including interfaces and SLAs. |
| `params.capabilities[].pricing` | `object` | Pricing structure (`unit_price`, `currency`, `billing_model`, volume discounts). |
| `params.agreement_terms` | `object` | Dynamic negotiation parameters, payment addresses, and settlement chains. |
