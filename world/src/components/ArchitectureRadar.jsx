import { useState, useRef, useEffect, useMemo } from 'react';
import { Terminal, Search, Play, CornerDownLeft, RotateCcw, Copy, Check, ShieldCheck, Cpu, Layers } from 'lucide-react';
import { normalizeQuality, formatQualityScore } from '../utils';

const QUADRANTS = [
  { id: 'ai', label: 'AI & FRONTIER RESEARCH', color: '#A855F7', angleMin: Math.PI, angleMax: 1.5 * Math.PI },
  { id: 'maps', label: 'SYSTEM MAPS & BLUEPRINTS', color: '#FFE600', angleMin: 1.5 * Math.PI, angleMax: 2 * Math.PI },
  { id: 'skills', label: 'INTEL SKILLS & MCP', color: '#00F0FF', angleMin: 0.5 * Math.PI, angleMax: Math.PI },
  { id: 'daily-digests', label: 'VERIFIED CRAWL DIGESTS', color: '#FF2A85', angleMin: 0, angleMax: 0.5 * Math.PI }
];

const RINGS = [
  { label: 'TIER 1 // SOTA (9.5 - 10)', minScore: 9.5, radiusRatio: 0.35, color: '#00FF66' },
  { label: 'TIER 2 // STABLE (8.5 - 9.4)', minScore: 8.5, radiusRatio: 0.65, color: '#00F0FF' },
  { label: 'TIER 3 // LABS (7.0 - 8.4)', minScore: 7.0, radiusRatio: 0.92, color: '#FFE600' }
];

function getNodeQuadrant(node) {
  const cat = (node.category || '').toLowerCase();
  if (cat === 'ai') return QUADRANTS[0];
  if (['maps', 'workspace-archive', 'learning-paths', 'build-ideas', 'examples', 'system-maps'].includes(cat)) return QUADRANTS[1];
  if (['skills', 'prompts', 'mcp-server', 'web-development', 'docs', 'protocol'].includes(cat)) return QUADRANTS[2];
  return QUADRANTS[3];
}

export default function ArchitectureRadar({ nodes, onSelectNode }) {
  const canvasRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeSector, setActiveSector] = useState('all');
  const [selectedRing, setSelectedRing] = useState('all');

  // Interactive MCP Sandbox State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'system',
      text: 'VYBE VAULT MCP INTERACTIVE SANDBOX // v2.1.2\nType a command below or click quick test actions to execute live against 5,200+ nodes.'
    }
  ]);
  const [copiedMcp, setCopiedMcp] = useState(false);
  const historyEndRef = useRef(null);

  // Filter and evenly sample nodes across all 4 quadrants for uniform radar coverage
  const radarNodes = useMemo(() => {
    if (!nodes || nodes.length === 0) return [];

    const qBuckets = {
      'ai': [],
      'maps': [],
      'skills': [],
      'daily-digests': []
    };

    nodes.forEach(n => {
      const quad = getNodeQuadrant(n);
      qBuckets[quad.id].push({ node: n, quad });
    });

    // Sample up to 50 nodes per quadrant evenly across the entire dataset
    const sampled = [];
    QUADRANTS.forEach(quad => {
      const bucket = qBuckets[quad.id] || [];
      if (bucket.length === 0) return;
      const count = Math.min(bucket.length, 50);
      const step = Math.max(1, Math.floor(bucket.length / count));
      for (let i = 0; i < count; i++) {
        sampled.push(bucket[(i * step) % bucket.length]);
      }
    });

    return sampled.map((item, idx) => {
      const { node, quad } = item;
      const q = normalizeQuality(node.quality_score);

      // Deterministic hash based on title and index for consistent spatial scattering
      let hash = 0;
      const key = (node.title || '') + (node.path || '') + idx;
      for (let j = 0; j < key.length; j++) {
        hash = ((hash << 5) - hash) + key.charCodeAt(j);
        hash |= 0;
      }
      hash = Math.abs(hash);

      const hAngle = (hash % 1000) / 1000;
      const hRadius = ((hash >> 4) % 1000) / 1000;

      // Radial distribution by Quality Tier
      let minR = 0.68, maxR = 0.90;
      if (q >= 9.5) {
        minR = 0.16;
        maxR = 0.35;
      } else if (q >= 8.5) {
        minR = 0.38;
        maxR = 0.65;
      }
      const rRatio = minR + hRadius * (maxR - minR);

      // Angular distribution within quadrant with padding to avoid crosshair collision
      const anglePad = 0.14;
      const angleSpan = (quad.angleMax - quad.angleMin) - (anglePad * 2);
      const angle = quad.angleMin + anglePad + hAngle * angleSpan;

      return {
        node,
        quad,
        quality: q,
        rRatio: Math.min(Math.max(rRatio, 0.14), 0.92),
        angle,
        screenX: 0,
        screenY: 0
      };
    });
  }, [nodes]);

  // Canvas Radar Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.parentElement.clientWidth;
    let height = Math.min(width, 520);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const cx = width / 2;
    const cy = height / 2;
    const maxRadius = Math.min(cx, cy) - 24;

    // Clear background
    ctx.fillStyle = '#08080C';
    ctx.fillRect(0, 0, width, height);

    // Draw Crosshairs
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx, 10);
    ctx.lineTo(cx, height - 10);
    ctx.moveTo(10, cy);
    ctx.lineTo(width - 10, cy);
    ctx.stroke();

    // Draw Concentric Tier Rings
    RINGS.forEach((ring) => {
      const r = maxRadius * ring.radiusRatio;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = ring.color + '33';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Ring label
      ctx.font = '8px monospace';
      ctx.fillStyle = ring.color + 'aa';
      ctx.textAlign = 'left';
      ctx.fillText(ring.label, cx + 8, cy - r - 4);
    });

    // Draw Quadrant Labels
    ctx.font = 'bold 9px monospace';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.textAlign = 'left';
    ctx.fillText('NW // AI & RESEARCH', 16, 24);
    ctx.textAlign = 'right';
    ctx.fillText('NE // SYSTEM MAPS', width - 16, 24);
    ctx.textAlign = 'left';
    ctx.fillText('SW // INTEL & MCP', 16, height - 16);
    ctx.textAlign = 'right';
    ctx.fillText('SE // REPRODUCIBILITY DIGESTS', width - 16, height - 16);

    // Project and draw radar blips
    radarNodes.forEach((item) => {
      const isFilteredOut = activeSector !== 'all' && item.quad.id !== activeSector;
      if (isFilteredOut) return;

      const r = maxRadius * item.rRatio;
      const x = cx + r * Math.cos(item.angle);
      const y = cy + r * Math.sin(item.angle);
      item.screenX = x;
      item.screenY = y;

      const isHovered = hoveredNode && hoveredNode.path === item.node.path;
      const dotRadius = isHovered ? 6 : (item.quality >= 9.5 ? 4.5 : 3.5);

      // Outer radar pulse
      if (isHovered || item.quality >= 9.5) {
        ctx.beginPath();
        ctx.arc(x, y, dotRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? 'rgba(255, 42, 133, 0.4)' : `${item.quad.color}25`;
        ctx.fill();
      }

      // Center blip
      ctx.beginPath();
      ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? '#FF2A85' : item.quad.color;
      ctx.fill();
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Label on hover
      if (isHovered) {
        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText(item.node.title.slice(0, 22).toUpperCase(), x, y - dotRadius - 5);
      }
    });

    // Mouse listener for hover & click
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let found = null;
      for (let i = radarNodes.length - 1; i >= 0; i--) {
        const item = radarNodes[i];
        if (activeSector !== 'all' && item.quad.id !== activeSector) continue;
        const dist = Math.hypot(item.screenX - mx, item.screenY - my);
        if (dist < 12) {
          found = item.node;
          break;
        }
      }
      setHoveredNode(found);
      canvas.style.cursor = found ? 'pointer' : 'default';
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      for (let i = radarNodes.length - 1; i >= 0; i--) {
        const item = radarNodes[i];
        if (activeSector !== 'all' && item.quad.id !== activeSector) continue;
        const dist = Math.hypot(item.screenX - mx, item.screenY - my);
        if (dist < 14) {
          onSelectNode(item.node);
          break;
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [radarNodes, hoveredNode, activeSector, onSelectNode]);

  // Terminal command handler
  const executeCommand = (cmdText) => {
    const trimmed = (cmdText || '').trim();
    if (!trimmed) return;

    const newHistory = [...terminalHistory, { type: 'input', text: `> ${trimmed}` }];
    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const subCmd = (parts[1] || '').toLowerCase();
    const query = parts.slice(2).join(' ').replace(/["']/g, '') || parts.slice(1).join(' ').replace(/["']/g, '');

    const allNodes = nodes || [];

    if (mainCmd === 'clear' || mainCmd === 'cls') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    }

    if (mainCmd === 'help') {
      newHistory.push({
        type: 'output',
        text: 'AVAILABLE MCP COMMANDS:\n  vault_search <query>          Search 5,200+ verified nodes\n  get_blueprint <track>         Retrieve sprint blueprint (agent-builder, rag-builder, etc.)\n  get_verified_patterns <stack> Architecture patterns for vllm, langgraph, fastmcp\n  vybe sync                     Simulate IDE rules injection\n  clear                         Clear sandbox terminal'
      });
    } else if (mainCmd === 'vault_search' || mainCmd === 'search') {
      const q = (query || subCmd || 'deepseek').toLowerCase();
      const matches = allNodes.filter(n => 
        (n.title || '').toLowerCase().includes(q) || 
        (n.summary || '').toLowerCase().includes(q)
      ).slice(0, 3);

      const rpcResult = {
        jsonrpc: '2.0',
        id: Date.now(),
        result: {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                query: q,
                matched_count: matches.length,
                results: matches.map(m => ({
                  title: m.title,
                  category: m.category,
                  reproducibility_score: `${normalizeQuality(m.quality_score)}/10`,
                  url: `https://github.com/rxmna8502/vybe-intelligence-vault/blob/main/${m.path || ''}`
                }))
              }, null, 2)
            }
          ]
        }
      };

      newHistory.push({
        type: 'output',
        text: JSON.stringify(rpcResult, null, 2)
      });
    } else if (mainCmd === 'get_blueprint' || mainCmd === 'blueprint') {
      const track = (query || subCmd || 'agent-builder').toLowerCase();
      newHistory.push({
        type: 'output',
        text: JSON.stringify({
          jsonrpc: '2.0',
          result: {
            track,
            status: 'VERIFIED_BLUEPRINT_ACTIVE',
            days: [
              'Day 1: ReAct Loops & Tool Calling Boundaries',
              'Day 2: Long-Term Episodic Memory & Pruning',
              'Day 3: Multi-Agent Consensus & Sandboxing',
              'Day 4-7: Local LLM Serving via vLLM'
            ],
            reference: `https://github.com/rxmna8502/vybe-intelligence-vault/blob/main/learning-paths/7-day-${track}.md`
          }
        }, null, 2)
      });
    } else if (mainCmd === 'get_verified_patterns' || mainCmd === 'patterns') {
      const stack = (query || subCmd || 'vllm').toLowerCase();
      newHistory.push({
        type: 'output',
        text: JSON.stringify({
          jsonrpc: '2.0',
          result: {
            stack,
            verified_patterns: [
              'Chunk-based prefill with PagedAttention',
              'Speculative decoding with draft model',
              'Continuous batching without GIL locking'
            ],
            anti_patterns: [
              'Unbounded context window without sliding attention',
              'Cold-starting model weights on each worker request'
            ]
          }
        }, null, 2)
      });
    } else if (mainCmd === 'sync' || mainCmd === 'vybe') {
      newHistory.push({
        type: 'output',
        text: '[SCAN] Project architecture detected: Next.js / FastAPI\n[RESOLVED] Injected 5,254 verified node constraints into .cursorrules and AGENT.md\n[STATUS] Zero hallucination risk active.'
      });
    } else {
      newHistory.push({
        type: 'output',
        text: `Unknown command "${trimmed}". Type "help" to see available MCP operations.`
      });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput);
    }
  };

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full bg-[#08080C] border-4 border-black neo-shadow-lg p-5 select-none min-h-[660px]">
      
      {/* Left Column: 2D Interactive Architecture Radar */}
      <div className="flex-1 flex flex-col justify-between">
        
        {/* Radar Controls Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#FFE600] text-black px-2.5 py-1 font-mono text-xs font-black border-2 border-black neo-shadow">
              FRONTIER ARCHITECTURE RADAR
            </span>
            <span className="text-neutral-400 font-mono text-[11px]">
              Active: {radarNodes.length} Nodes (360 Scatter across 4 Quadrants)
            </span>
          </div>

          {/* Sector Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] font-bold">
            <button
              onClick={() => setActiveSector('all')}
              className={`px-2 py-0.5 border border-black cursor-pointer transition-colors ${
                activeSector === 'all' ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              ALL
            </button>
            {QUADRANTS.map(q => (
              <button
                key={q.id}
                onClick={() => setActiveSector(activeSector === q.id ? 'all' : q.id)}
                className="px-2 py-0.5 border border-black cursor-pointer transition-all"
                style={{
                  backgroundColor: activeSector === q.id ? q.color : '#000000',
                  color: activeSector === q.id ? '#000000' : q.color
                }}
              >
                {q.id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* 2D Canvas Container */}
        <div className="relative flex-1 flex items-center justify-center bg-black border-2 border-neutral-800 overflow-hidden min-h-[440px]">
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* Node Hover Dossier Card */}
          {hoveredNode && (
            <div className="absolute bottom-3 left-3 right-3 z-10 bg-black/95 text-white border-3 border-[#00F0FF] p-3 font-mono text-xs shadow-[4px_4px_0px_#00F0FF] pointer-events-none flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[#FFE600] font-black text-sm truncate">{hoveredNode.title.toUpperCase()}</span>
                <span className="bg-[#00FF66] text-black px-1.5 py-0.2 border border-black text-[10px] font-bold">
                  VRS: {formatQualityScore(hoveredNode.quality_score)}/10
                </span>
              </div>
              <div className="text-neutral-400 text-[10px]">
                {hoveredNode.summary || 'Verified frontier architecture node. Click to view complete evaluation dossier.'}
              </div>
            </div>
          )}
        </div>

        {/* Radar Footnote Guide */}
        <div className="flex items-center justify-between text-neutral-400 font-mono text-[10px] mt-2 pt-2 border-t border-neutral-800">
          <div>[CLICK BLIP] Open Dossier</div>
          <div>[HOVER] Inspect Score & Metrics</div>
          <div>Concentric Rings = Quality Tier (Center = 9.5+)</div>
        </div>
      </div>

      {/* Right Column: Live Interactive MCP Terminal Sandbox */}
      <div className="w-full lg:w-[480px] flex flex-col bg-black border-3 border-neutral-800 neo-shadow flex-shrink-0">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-3 py-2 bg-neutral-900 border-b-2 border-neutral-800 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#00FF66] font-bold">
            <Terminal size={14} />
            <span>MCP PROTOCOL SANDBOX</span>
          </div>
          <button
            onClick={() => {
              navigator.clipboard?.writeText('npx -y vybe-vault mcp');
              setCopiedMcp(true);
              setTimeout(() => setCopiedMcp(false), 2000);
            }}
            className="flex items-center gap-1 bg-[#00FF66] text-black px-2 py-0.5 border border-black font-mono font-bold text-[10px] cursor-pointer hover:bg-[#FFE600] transition-colors"
          >
            {copiedMcp ? <Check size={11} /> : <Copy size={11} />}
            <span>{copiedMcp ? 'COPIED!' : 'COPY STDIO CMD'}</span>
          </button>
        </div>

        {/* Quick Test Buttons */}
        <div className="p-2.5 bg-neutral-950 border-b border-neutral-800 flex flex-wrap gap-1.5 font-mono text-[10px]">
          <span className="text-neutral-500 self-center mr-1">RUN:</span>
          <button
            onClick={() => executeCommand('vault_search deepseek')}
            className="px-2 py-1 bg-neutral-900 hover:bg-[#FFE600] hover:text-black text-neutral-200 border border-neutral-700 cursor-pointer transition-colors"
          >
            vault_search "deepseek"
          </button>
          <button
            onClick={() => executeCommand('get_blueprint agent-builder')}
            className="px-2 py-1 bg-neutral-900 hover:bg-[#00F0FF] hover:text-black text-neutral-200 border border-neutral-700 cursor-pointer transition-colors"
          >
            get_blueprint "agent-builder"
          </button>
          <button
            onClick={() => executeCommand('get_verified_patterns vllm')}
            className="px-2 py-1 bg-neutral-900 hover:bg-[#FF2A85] hover:text-white text-neutral-200 border border-neutral-700 cursor-pointer transition-colors"
          >
            patterns "vllm"
          </button>
          <button
            onClick={() => executeCommand('vybe sync')}
            className="px-2 py-1 bg-neutral-900 hover:bg-[#00FF66] hover:text-black text-neutral-200 border border-neutral-700 cursor-pointer transition-colors"
          >
            vybe sync
          </button>
          <button
            onClick={() => setTerminalHistory([])}
            className="px-2 py-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 border border-neutral-800 cursor-pointer ml-auto"
            title="Clear terminal"
          >
            <RotateCcw size={10} />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-3 overflow-y-auto font-mono text-[11px] leading-relaxed space-y-2 text-neutral-300 max-h-[460px]">
          {terminalHistory.map((item, idx) => (
            <div key={idx} className={item.type === 'input' ? 'text-[#00FF66] font-bold' : item.type === 'system' ? 'text-[#FFE600]' : 'text-neutral-300 whitespace-pre-wrap font-mono'}>
              {item.text}
            </div>
          ))}
          <div ref={historyEndRef} />
        </div>

        {/* Terminal Input Bar */}
        <div className="p-2.5 bg-neutral-900 border-t-2 border-neutral-800 flex items-center gap-2">
          <span className="text-[#00FF66] font-mono font-bold text-sm">&gt;</span>
          <input
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'search rag', 'blueprint agent-builder', or 'help'..."
            className="flex-1 bg-transparent text-[#00FF66] placeholder-neutral-600 font-mono text-xs focus:outline-none"
          />
          <button
            onClick={() => executeCommand(terminalInput)}
            className="p-1.5 bg-[#00FF66] hover:bg-[#FFE600] text-black border border-black cursor-pointer transition-colors"
            title="Send command"
          >
            <CornerDownLeft size={13} />
          </button>
        </div>

      </div>

    </div>
  );
}
