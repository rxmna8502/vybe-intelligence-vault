import { useState, useMemo, useEffect } from 'react';
import { Search, Database, Activity, Cpu, Layers, ListFilter, HelpCircle, Zap, Flame, ShieldAlert, Sparkles, Terminal } from 'lucide-react';
import DetailPanel from './components/DetailPanel';
import WebGLGraph from './components/WebGLGraph';
import { useVaultIndex, useEventStream, useMCPBridge } from './data/vaultHooks';
import { normalizeQuality, formatQualityScore } from './utils';

const CATEGORY_STYLES = {
  'maps': {
    label: 'SYSTEM MAPS',
    cardBg: 'bg-[#FFE600]',
    badgeBg: 'bg-[#FFE600] text-black border-black',
    accentColor: '#FFE600'
  },
  'skills': {
    label: 'INTEL SKILLS',
    cardBg: 'bg-[#00F0FF]',
    badgeBg: 'bg-[#00F0FF] text-black border-black',
    accentColor: '#00F0FF'
  },
  'daily-digests': {
    label: 'DAILY DIGESTS',
    cardBg: 'bg-[#FF2A85] text-white',
    badgeBg: 'bg-[#FF2A85] text-white border-black',
    accentColor: '#FF2A85'
  },
  'prompts': {
    label: 'PROMPTS & AGENTS',
    cardBg: 'bg-[#00FF66]',
    badgeBg: 'bg-[#00FF66] text-black border-black',
    accentColor: '#00FF66'
  },
  'ai': {
    label: 'AI & RESEARCH',
    cardBg: 'bg-[#A855F7] text-white',
    badgeBg: 'bg-[#A855F7] text-white border-black',
    accentColor: '#A855F7'
  },
  'web-development': {
    label: 'WEB DEV / WEBGL',
    cardBg: 'bg-[#FF5500] text-white',
    badgeBg: 'bg-[#FF5500] text-white border-black',
    accentColor: '#FF5500'
  },
  'workspace-archive': {
    label: 'ARCHIVE STACKS',
    cardBg: 'bg-white',
    badgeBg: 'bg-white text-black border-black',
    accentColor: '#000000'
  }
};

const FALLBACK_STYLES = [
  { label: 'CLASSIFIED', badgeBg: 'bg-[#D4FF00] text-black border-black', cardBg: 'bg-[#D4FF00]' },
  { label: 'INTELLIGENCE', badgeBg: 'bg-[#00F0FF] text-black border-black', cardBg: 'bg-[#00F0FF]' },
  { label: 'SYNAPSE', badgeBg: 'bg-[#FF5500] text-white border-black', cardBg: 'bg-[#FF5500]' },
  { label: 'PROTOCOL', badgeBg: 'bg-[#A855F7] text-white border-black', cardBg: 'bg-[#A855F7]' }
];

export default function App() {
  const { indexData, loading: indexLoading } = useVaultIndex();
  const events = useEventStream();
  const { bridgeStatus } = useMCPBridge();

  const [selectedNode, setSelectedNode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [scoreFilter, setScoreFilter] = useState('all');
  const [techFilter, setTechFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(48);
  const [viewMode, setViewMode] = useState('grid');
  const [copiedMcp, setCopiedMcp] = useState(false);

  const avgQualityScore = useMemo(() => {
    if (!indexData?.nodes || indexData.nodes.length === 0) return '8.6';
    const sum = indexData.nodes.reduce((acc, n) => acc + normalizeQuality(n.quality_score), 0);
    return (sum / indexData.nodes.length).toFixed(1);
  }, [indexData]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(48);
  }, [searchQuery, categoryFilter, scoreFilter, techFilter]);

  const activeSelectedNode = useMemo(() => {
    if (!selectedNode || !indexData?.nodes) return null;
    return indexData.nodes.find(n => n.path === selectedNode.path) || selectedNode;
  }, [indexData, selectedNode]);

  const availableTechs = useMemo(() => {
    if (!indexData?.nodes) return [];
    const set = new Set();
    indexData.nodes.forEach(n => (n.tech_stack || []).forEach(t => set.add(t)));
    return Array.from(set).sort();
  }, [indexData]);

  const categoriesList = useMemo(() => {
    if (!indexData?.nodes) return [];
    const set = new Set();
    indexData.nodes.forEach(n => {
      if (n.category) set.add(n.category);
    });
    return Array.from(set).sort();
  }, [indexData]);

  const filteredNodes = useMemo(() => {
    if (!indexData?.nodes) return [];
    return indexData.nodes.filter(node => {
      const matchesSearch = searchQuery
        ? node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (node.tags && node.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))) ||
          (node.tech_stack && node.tech_stack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))) ||
          (node.summary && node.summary.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;

      const matchesCategory = categoryFilter === 'all' || node.category === categoryFilter;

      const matchesScore = scoreFilter === 'all' 
        ? true 
        : scoreFilter === '9' 
          ? (normalizeQuality(node.quality_score) >= 9) 
          : (normalizeQuality(node.quality_score) >= 7);

      const matchesTech = techFilter === 'all' || (node.tech_stack && node.tech_stack.includes(techFilter));

      return matchesSearch && matchesCategory && matchesScore && matchesTech;
    });
  }, [indexData, searchQuery, categoryFilter, scoreFilter, techFilter]);

  const visibleNodes = useMemo(() => {
    return filteredNodes.slice(0, visibleCount);
  }, [filteredNodes, visibleCount]);

  const handleSelectNode = (node) => {
    setSelectedNode(node);
  };

  const getCategoryMeta = (cat) => {
    if (!cat) {
      return {
        label: 'UNASSIGNED',
        cardBg: 'bg-white',
        badgeBg: 'bg-white text-black border-black'
      };
    }
    if (CATEGORY_STYLES[cat]) return CATEGORY_STYLES[cat];
    
    let hash = 0;
    for (let i = 0; i < cat.length; i++) {
      hash = cat.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % FALLBACK_STYLES.length;
    const label = cat.replace(/[-_]/g, ' ').toUpperCase();
    
    return {
      label,
      ...FALLBACK_STYLES[index]
    };
  };

  if (indexLoading) {
    return (
      <div className="min-h-screen bg-[#FFE600] flex flex-col items-center justify-center p-6 border-8 border-black font-mono">
        <div className="w-16 h-16 border-8 border-black border-t-[#FF2A85] animate-spin mb-6 shadow-[6px_6px_0px_#000]" />
        <div className="bg-black text-[#00FF66] px-6 py-3 border-4 border-black font-black text-xl tracking-wider uppercase neo-shadow-lg">
          INITIALIZING VYBE VAULT // 160K+ NODES
        </div>
        <p className="mt-4 font-bold text-black text-sm tracking-widest uppercase">
          Autonomous Synapse Mesh Ingestion In Progress...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F4EFE6] text-black selection:bg-[#FF2A85] selection:text-white">
      
      {/* High-Voltage Chaos Marquee Ticker */}
      <div className="bg-black text-[#FFE600] border-b-4 border-black overflow-hidden py-1.5 font-mono text-xs font-black tracking-widest uppercase">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          <span>⚡ LIVE HARVESTER ACTIVATED</span>
          <span>💥 160,000+ INDEXED NODES</span>
          <span>🔥 FAST-MCP AGENT GATEWAY ONLINE</span>
          <span>🛑 ZERO MANUAL CURATION</span>
          <span>☣️ AUTONOMOUS REASONING SWARMS</span>
          <span>⚡ LIVE HARVESTER ACTIVATED</span>
          <span>💥 160,000+ INDEXED NODES</span>
          <span>🔥 FAST-MCP AGENT GATEWAY ONLINE</span>
          <span>🛑 ZERO MANUAL CURATION</span>
          <span>☣️ AUTONOMOUS REASONING SWARMS</span>
        </div>
      </div>

      {/* Main Neo-Brutalist Navigation Header */}
      <header className="sticky top-0 z-30 bg-[#FFE600] border-b-4 border-black px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 neo-shadow">
        
        {/* Logo & Manifesto Title */}
        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-black text-[#00FF66] border-3 border-black neo-shadow rotate-[-2deg] hover:rotate-0 transition-transform">
            <Zap size={26} className="fill-[#00FF66]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black tracking-tighter text-black uppercase">
                VYBE VAULT
              </h1>
              <span className="bg-[#FF2A85] text-white px-2 py-0.5 text-[11px] font-mono font-black border-2 border-black neo-shadow rotate-[2deg]">
                v2.1 // PRODUCTION
              </span>
            </div>
            <p className="text-[11px] font-mono font-bold text-black uppercase tracking-wider mt-0.5">
              Autonomous Intelligence Matrix & Knowledge Graph
            </p>
          </div>
        </div>

        {/* Live Metrics Sticker Board */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono font-extrabold">
          
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-3 border-black neo-shadow">
            <Layers size={14} className="text-[#FF5500]" />
            <span>NODES:</span>
            <span className="bg-[#FFE600] px-1.5 py-0.2 border border-black">{indexData.nodes?.length || 0}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-3 border-black neo-shadow" title="Average Vybe Reproducibility Score (VRS) evaluated autonomously across all repositories">
            <Flame size={14} className="text-[#FF2A85]" />
            <span>AVG QUALITY:</span>
            <span className="bg-[#00FF66] px-1.5 py-0.2 border border-black">
              {avgQualityScore}/10
            </span>
          </div>

          <button 
            onClick={() => {
              navigator.clipboard?.writeText('npx -y vybe-vault mcp');
              setCopiedMcp(true);
              setTimeout(() => setCopiedMcp(false), 2000);
            }}
            title="Click to copy: npx -y vybe-vault mcp (for Claude Desktop, Cursor, and Continue.dev)"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#FFE600] border-3 border-black neo-shadow cursor-pointer transition-colors"
          >
            <Cpu size={14} className="text-[#00FF66]" />
            <span>MCP SERVER:</span>
            <span className="bg-[#00FF66] text-black px-1.5 py-0.2 border border-black font-mono font-bold">
              {copiedMcp ? 'COPIED!' : 'v2.1.0 READY'}
            </span>
          </button>

        </div>
      </header>

      {/* Main Workspace Layout */}
      <main className="flex-1 flex flex-col lg:flex-row min-w-0">
        
        {/* Left Filter & Telemetry Sidebar */}
        <aside className="w-full lg:w-80 bg-white lg:border-r-4 border-b-4 lg:border-b-0 border-black p-5 shrink-0 flex flex-col gap-6">
          
          {/* Neon Search Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-black text-black uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Search size={14} />
              SEARCH INTELLIGENCE MATRIX
            </label>
            <div className="relative">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Fuzzy search LLM, RAG, Agents, MCP..."
                className="w-full bg-[#FFE600] text-black placeholder-black/60 border-3 border-black p-2.5 text-xs font-mono font-bold focus:outline-none focus:bg-[#D4FF00] neo-shadow transition-all"
              />
            </div>
          </div>

          {/* Category Cartridges */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black text-black uppercase tracking-wider font-mono flex items-center gap-1.5">
                <ListFilter size={14} />
                CATEGORY SECTORS
              </label>
              {categoryFilter !== 'all' && (
                <button 
                  onClick={() => setCategoryFilter('all')}
                  className="text-[10px] font-mono font-bold text-[#FF2A85] hover:underline uppercase cursor-pointer"
                >
                  RESET
                </button>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setCategoryFilter('all')}
                className={`flex items-center justify-between p-2.5 text-xs font-mono font-black border-3 border-black text-left cursor-pointer neo-btn ${
                  categoryFilter === 'all' 
                    ? 'bg-black text-[#FFE600]' 
                    : 'bg-white text-black hover:bg-[#F4EFE6]'
                }`}
              >
                <span>🌐 ALL INTELLIGENCE</span>
                <span className="bg-[#FF2A85] text-white px-2 py-0.5 text-[10px] border border-black">
                  {indexData.nodes?.length || 0}
                </span>
              </button>

              {categoriesList.map(cat => {
                const meta = getCategoryMeta(cat);
                const count = indexData.nodes?.filter(n => n.category === cat).length || 0;
                if (count === 0) return null;
                const isSelected = categoryFilter === cat;
                return (
                  <button 
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`flex items-center justify-between p-2 text-xs font-mono font-black border-3 border-black text-left cursor-pointer neo-btn ${
                      isSelected 
                        ? 'bg-black text-[#D4FF00]' 
                        : `${meta.cardBg} hover:opacity-90`
                    }`}
                  >
                    <span className="truncate pr-2">📂 {meta.label}</span>
                    <span className="bg-white text-black px-1.5 py-0.5 text-[10px] border border-black shrink-0">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quality Score Booster Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-black text-black uppercase tracking-wider font-mono flex items-center gap-1.5">
              <ShieldAlert size={14} className="text-[#FF5500]" />
              QUALITY SIGNAL GATE
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'all', label: 'ALL RAW' },
                { id: '7', label: 'Q ≥ 7' },
                { id: '9', label: 'Q ≥ 9 (ELITE)' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setScoreFilter(item.id)}
                  className={`py-2 px-1 text-[11px] font-mono font-extrabold text-center border-2 border-black neo-btn ${
                    scoreFilter === item.id
                      ? 'bg-[#00FF66] text-black shadow-[3px_3px_0px_#000]'
                      : 'bg-white text-black hover:bg-[#FFE600]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack Matrix */}
          {availableTechs.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black text-black uppercase tracking-wider font-mono">
                TECH MATRIX
              </label>
              <select
                value={techFilter}
                onChange={(e) => setTechFilter(e.target.value)}
                className="w-full bg-white text-black border-3 border-black p-2 text-xs font-mono font-bold neo-shadow focus:outline-none focus:bg-[#00F0FF]"
              >
                <option value="all">⚡ ALL TECHNOLOGIES ({availableTechs.length})</option>
                {availableTechs.map(tech => (
                  <option key={tech} value={tech}>{tech.toUpperCase()}</option>
                ))}
              </select>
            </div>
          )}

          {/* Live Crawler Telemetry Console */}
          <div className="hidden lg:flex flex-col gap-2 flex-1 min-h-[160px]">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black text-black uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Terminal size={14} className="text-[#FF2A85]" />
                LIVE CRAWLER LOGS
              </label>
              <span className="w-2.5 h-2.5 bg-[#00FF66] border border-black rounded-full animate-ping" />
            </div>

            <div className="flex-1 bg-black text-[#00FF66] border-3 border-black p-3 font-mono text-[10px] overflow-y-auto space-y-2 max-h-[220px] neo-shadow">
              {events.slice(0, 8).map((ev, idx) => (
                <div key={idx} className="border-b border-neutral-800 pb-1.5 last:border-0">
                  <div className="flex justify-between text-[#FFE600]">
                    <span>[{ev.timestamp?.substring(11, 19) || 'LIVE'}]</span>
                    <span className="text-[#FF2A85] font-bold">{ev.type || 'SYNC'}</span>
                  </div>
                  <div className="text-white truncate mt-0.5">
                    &gt; {JSON.stringify(ev.payload || 'Discovered new node')}
                  </div>
                </div>
              ))}
              {events.length === 0 && (
                <div className="text-neutral-500 text-center py-4">
                  &gt; STANDBY: CRAWLER LISTENING ON 4H CADENCE...
                </div>
              )}
            </div>
          </div>

        </aside>

        {/* Center Content Section */}
        <section className="flex-1 p-6 flex flex-col min-w-0">
          
          {/* Active Detail View / Inspector Modal */}
          {activeSelectedNode ? (
            <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0 w-full">
              
              {/* Quick Jump Results Sidebar on the left */}
              <div className="w-full md:w-80 flex flex-col shrink-0 min-h-0 bg-white border-4 border-black neo-shadow-lg p-3">
                <div className="p-2 bg-black text-[#FFE600] font-mono font-black text-xs uppercase mb-2 flex justify-between items-center">
                  <span>DISCOVERED INTEL</span>
                  <span>({filteredNodes.length})</span>
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                  {visibleNodes.map(node => {
                    const isSelected = activeSelectedNode.path === node.path;
                    return (
                      <div
                        key={node.path}
                        onClick={() => handleSelectNode(node)}
                        className={`p-2.5 border-3 border-black text-left cursor-pointer transition-all neo-btn ${
                          isSelected
                            ? 'bg-[#FFE600] text-black shadow-[4px_4px_0px_#000]'
                            : 'bg-white text-black hover:bg-[#F4EFE6]'
                        }`}
                      >
                        <div className="font-black text-xs uppercase truncate">{node.title}</div>
                        <div className="flex items-center justify-between mt-1 text-[9px] font-mono font-bold">
                          <span className="bg-[#00F0FF] text-black px-1.5 py-0.5 border border-black uppercase">
                            {node.category}
                          </span>
                          {node.quality_score > 0 && (
                            <span className="bg-[#00FF66] text-black px-1.5 py-0.5 border border-black">
                              Q: {formatQualityScore(node.quality_score)}/10
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Neo-Brutalist Main Dossier Inspector */}
              <div className="flex-1 min-w-0 h-full">
                <DetailPanel 
                  node={activeSelectedNode}
                  indexData={indexData}
                  onSelectNode={handleSelectNode}
                  onClose={() => setSelectedNode(null)}
                />
              </div>

            </div>
          ) : (
            
            /* Main Neo-Brutalist Grid Display */
            <div className="flex-1 flex flex-col min-h-0">
              
              {/* Top Banner Control Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-4 bg-white border-4 border-black neo-shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-[#00FF66] text-black px-3 py-1 font-mono font-black text-xs border-2 border-black neo-shadow">
                    ACTIVE NODES: {filteredNodes.length}
                  </div>
                  <div className="flex items-center gap-1 border-2 border-black p-0.5 bg-black">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-1 font-mono font-black text-xs transition-colors ${
                        viewMode === 'grid' ? 'bg-[#FFE600] text-black' : 'bg-transparent text-white hover:text-[#FFE600]'
                      }`}
                    >
                      GRID VIEW
                    </button>
                    <button
                      onClick={() => setViewMode('3d')}
                      className={`px-3 py-1 font-mono font-black text-xs transition-colors ${
                        viewMode === '3d' ? 'bg-[#00F0FF] text-black' : 'bg-transparent text-white hover:text-[#00F0FF]'
                      }`}
                    >
                      3D GRAPH (WEBGL)
                    </button>
                  </div>
                </div>

                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="bg-[#FF2A85] text-white px-3 py-1 font-mono font-bold text-xs border-2 border-black neo-btn"
                  >
                    CLEAR SEARCH ✕
                  </button>
                )}
              </div>

              {viewMode === '3d' ? (
                <WebGLGraph nodes={filteredNodes} onSelectNode={handleSelectNode} />
              ) : (
                <div className="flex-1 overflow-y-auto pr-1">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pb-8">
                  {visibleNodes.map((node, idx) => {
                    const meta = getCategoryMeta(node.category);
                    const rotation = (idx % 3 === 0) ? 'rotate-[-0.5deg]' : (idx % 3 === 1) ? 'rotate-[0.5deg]' : 'rotate-0';
                    
                    return (
                      <div
                        key={node.path}
                        onClick={() => handleSelectNode(node)}
                        className={`bg-white border-4 border-black neo-shadow-lg p-5 flex flex-col justify-between cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 ${rotation} group`}
                      >
                        <div>
                          
                          {/* Card Top Pill Row */}
                          <div className="flex items-center justify-between mb-3 text-[10px] font-mono font-black">
                            <span className={`px-2.5 py-1 border-2 border-black uppercase neo-shadow ${meta.badgeBg}`}>
                              {node.category || 'INTEL'}
                            </span>

                            {node.quality_score > 0 && (
                              <div className="bg-[#00FF66] text-black px-2 py-0.5 border-2 border-black neo-shadow font-extrabold">
                                Q: {formatQualityScore(node.quality_score)}/10
                              </div>
                            )}
                          </div>

                          {/* Card Title */}
                          <h3 className="font-black text-black group-hover:text-[#FF2A85] text-sm uppercase tracking-tight mb-2.5 transition-colors line-clamp-2">
                            {node.title}
                          </h3>

                          {/* Card Summary */}
                          <p className="text-xs font-medium text-neutral-800 line-clamp-3 leading-relaxed mb-4 bg-[#F4EFE6] p-2.5 border-2 border-black">
                            {node.summary || 'Structured intelligence record harvested from global AI telemetry streams.'}
                          </p>

                        </div>

                        {/* Card Bottom Tags & Inspect Action */}
                        <div className="border-t-2 border-black pt-3 flex items-center justify-between gap-2">
                          <div className="flex flex-wrap gap-1">
                            {(node.tech_stack || []).slice(0, 2).map(tech => (
                              <span key={tech} className="bg-black text-[#D4FF00] px-1.5 py-0.5 text-[9px] font-mono font-extrabold uppercase border border-black">
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="bg-[#FFE600] group-hover:bg-[#FF2A85] group-hover:text-white text-black px-2.5 py-1 text-[10px] font-mono font-black border-2 border-black neo-shadow transition-colors shrink-0">
                            INSPECT ➔
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

                {filteredNodes.length > visibleCount && (
                  <div className="flex justify-center my-8">
                    <button
                      onClick={() => setVisibleCount(prev => prev + 48)}
                      className="px-8 py-3.5 bg-[#FFE600] hover:bg-[#00F0FF] text-black text-sm font-black uppercase font-mono border-4 border-black neo-btn neo-shadow-xl"
                    >
                      ⚡ LOAD MORE INTELLIGENCE NODES (+48)
                    </button>
                  </div>
                )}

                {filteredNodes.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-20 text-center border-4 border-black p-8 bg-white neo-shadow-xl my-8">
                    <HelpCircle size={48} className="text-[#FF5500] mb-4" />
                    <h4 className="font-black text-xl text-black uppercase">
                      NO MATCHING INTELLIGENCE FOUND
                    </h4>
                    <p className="font-mono text-xs text-neutral-700 max-w-md mt-2">
                      Adjust your search query or reset quality filters to inspect other vault sectors.
                    </p>
                    <button
                      onClick={() => { setSearchQuery(''); setCategoryFilter('all'); setScoreFilter('all'); }}
                      className="mt-5 px-6 py-2.5 bg-[#00FF66] text-black font-black uppercase font-mono border-3 border-black neo-btn"
                    >
                      RESET ALL FILTERS
                    </button>
                  </div>
                )}

              </div>
              )}

            </div>
          )}

        </section>
      </main>

      {/* Neo-Brutalist Hazard Footer */}
      <footer className="border-t-4 border-black bg-black text-white p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-black">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 bg-[#00FF66] text-black border border-white">
            ● SYNCHRONIZED
          </span>
          <span className="text-[#FFE600] uppercase">
            AUTONOMOUS HARVESTING CADENCE: 4H
          </span>
        </div>

        <div className="text-neutral-400 text-[11px]">
          ENGINEERED BY <a href="https://github.com/sairaman436" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:underline">@sairaman436</a> • VYBE INTELLIGENCE MATRIX
        </div>
      </footer>

    </div>
  );
}
