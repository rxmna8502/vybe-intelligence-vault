import { useState, useEffect } from 'react';

const IS_PROD = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const VAULT_REPO_URL = 'https://raw.githubusercontent.com/rxmna8502/vybe-intelligence-vault/main';
const BASE_PATH = IS_PROD ? '/vybe-intelligence-vault/' : '/';

// 1. Hook to fetch vault-index.json (no localStorage caching — index is too large)
export function useVaultIndex() {
  const [indexData, setIndexData] = useState({ nodes: [], edges: [], system_health: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndex = () => {
      const indexUrl = `${BASE_PATH}vault-index.json`;

      fetch(indexUrl)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to load index');
          return res.json();
        })
        .then((data) => {
          setIndexData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching vault index:', err);
          setLoading(false);
        });
    };

    fetchIndex();
    // Intentionally removed setInterval polling to avoid freezing the browser and wasting bandwidth.
  }, []);

  return { indexData, loading };
}

// 2. Hook to fetch and stream events from log
export function useEventStream() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = () => {
      fetch('http://localhost:3456/events')
        .then((res) => {
          if (!res.ok) throw new Error('Local bridge offline');
          return res.json();
        })
        .then((data) => {
          setEvents(data);
        })
        .catch(() => {
          fetch(`${VAULT_REPO_URL}/vault-core/vault-events.log`)
            .then((res) => {
              if (!res.ok) throw new Error('Failed to fetch events from GitHub');
              return res.text();
            })
            .then((text) => {
              const lines = text.trim().split('\n').reverse();
              const parsed = lines.map((line) => {
                try {
                  return JSON.parse(line);
                } catch (err) {
                  console.debug('Failed to parse event line:', err);
                  return null;
                }
              }).filter(Boolean);
              setEvents(parsed.slice(0, 20));
            })
            .catch(() => {});
        });
    };

    fetchEvents();
    const interval = setInterval(fetchEvents, 10000);
    return () => clearInterval(interval);
  }, []);

  return events;
}

// 3. Hook to manage local MCP bridge
export function useMCPBridge() {
  const [bridgeStatus, setBridgeStatus] = useState('offline');
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    const checkBridge = () => {
      fetch('http://localhost:3456/health')
        .then((res) => res.json())
        .then((data) => {
          setBridgeStatus('online');
          setHealthData(data);
        })
        .catch(() => {
          setBridgeStatus('offline');
          setHealthData(null);
        });
    };

    checkBridge();
    const interval = setInterval(checkBridge, 15000);
    return () => clearInterval(interval);
  }, []);

  const orchestrateAction = async (action, parameters = {}) => {
    try {
      const res = await fetch('http://localhost:3456/orchestrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, parameters })
      });
      return await res.json();
    } catch (e) {
      throw new Error(`Orchestrator failed: ${e.message}`, { cause: e });
    }
  };

  return { bridgeStatus, healthData, orchestrateAction };
}
