import { useRef, useEffect, useState, useMemo } from 'react';
import { formatQualityScore } from '../utils';

const CATEGORY_PALETTE = {
  'maps': { color: '#FFE600', label: 'SYSTEM MAPS', pos: [180, 0, 0] },
  'skills': { color: '#00F0FF', label: 'INTEL SKILLS', pos: [-140, 120, 60] },
  'daily-digests': { color: '#FF2A85', label: 'DAILY DIGESTS', pos: [0, -160, 80] },
  'prompts': { color: '#00FF66', label: 'PROMPTS & AGENTS', pos: [-160, -90, -90] },
  'ai': { color: '#A855F7', label: 'AI & RESEARCH', pos: [120, 140, -100] },
  'web-development': { color: '#FF5500', label: 'WEB DEV / WEBGL', pos: [0, 180, 120] },
  'workspace-archive': { color: '#FFFFFF', label: 'ARCHIVES', pos: [-180, 0, 0] }
};

export default function WebGLGraph({ nodes, onSelectNode }) {
  const canvasRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const hoveredNodeRef = useRef(null);
  const isPausedRef = useRef(false);
  const selectedCategoryRef = useRef('all');

  hoveredNodeRef.current = hoveredNode;
  isPausedRef.current = isPaused;
  selectedCategoryRef.current = selectedCategory;

  const displayNodes = useMemo(() => {
    return (nodes || []).slice(0, 180);
  }, [nodes]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight || 650;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Build structured galaxy clusters
    const points = displayNodes.map((node, idx) => {
      const catConfig = CATEGORY_PALETTE[node.category] || { color: '#00F0FF', label: 'INTEL', pos: [0, 0, 0] };
      const [cx, cy, cz] = catConfig.pos;

      // Cluster dispersion
      const spread = 75;
      const angle = (idx * 137.5 * Math.PI) / 180;
      const r = Math.sqrt(idx) * 7.5;
      const px = cx + Math.cos(angle) * r + (Math.sin(idx * 3) * spread * 0.4);
      const py = cy + Math.sin(angle) * r + (Math.cos(idx * 2) * spread * 0.4);
      const pz = cz + (Math.sin(idx * 5) * spread * 0.6);

      return {
        node,
        x: px,
        y: py,
        z: pz,
        color: catConfig.color,
        category: node.category,
        screenX: 0,
        screenY: 0,
        scale: 1,
        depth: 0
      };
    });

    // Generate cluster relational links
    const links = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].category === points[j].category) {
          const dist = Math.hypot(
            points[i].x - points[j].x,
            points[i].y - points[j].y,
            points[i].z - points[j].z
          );
          if (dist < 90) {
            links.push([i, j]);
          }
        }
      }
    }

    // Camera and physics state
    let rotX = 0.35;
    let rotY = 0;
    let velX = 0;
    let velY = 0;
    let zoom = 1.0;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      velX = 0;
      velY = 0;
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (isDragging) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        velY = dx * 0.003;
        velX = dy * 0.003;
        rotY += velY;
        rotX += velX;
        lastX = e.clientX;
        lastY = e.clientY;
      }

      // Hit testing for hover
      let found = null;
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        if (selectedCategoryRef.current !== 'all' && p.category !== selectedCategoryRef.current) {
          continue;
        }
        const d = Math.hypot(p.screenX - mouseX, p.screenY - mouseY);
        if (d < 14 * p.scale) {
          found = p.node;
          break;
        }
      }

      setHoveredNode(found);
      canvas.style.cursor = found ? 'pointer' : (isDragging ? 'grabbing' : 'grab');
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        if (selectedCategoryRef.current !== 'all' && p.category !== selectedCategoryRef.current) {
          continue;
        }
        const d = Math.hypot(p.screenX - mouseX, p.screenY - mouseY);
        if (d < 14 * p.scale) {
          onSelectNode(p.node);
          break;
        }
      }
    };

    const onWheel = (e) => {
      e.preventDefault();
      zoom += e.deltaY * -0.0008;
      zoom = Math.min(Math.max(0.5, zoom), 2.2);
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('click', onClick);
    canvas.addEventListener('wheel', onWheel, { passive: false });

    // Render loop
    const render = () => {
      // Gentle cosmic drift: pauses automatically when inspecting/hovering or dragging
      const isHovering = Boolean(hoveredNodeRef.current);
      if (!isPausedRef.current && !isDragging && !isHovering) {
        rotY += 0.0006;
      }

      // Smooth inertia damping
      if (!isDragging) {
        rotX += velX;
        rotY += velY;
        velX *= 0.92;
        velY *= 0.92;
      }

      ctx.clearRect(0, 0, width, height);

      // Deep space background
      ctx.fillStyle = '#07070A';
      ctx.fillRect(0, 0, width, height);

      // Ambient celestial grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const step = 60;
      for (let gx = 0; gx < width; gx += step) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      for (let gy = 0; gy < height; gy += step) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      const fov = 420;
      const cx = width / 2;
      const cy = height / 2;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // 3D projection
      points.forEach(p => {
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const depth = (z2 * zoom) + fov;
        const scale = fov / Math.max(depth, 1);

        p.screenX = cx + x1 * zoom * scale;
        p.screenY = cy + y2 * zoom * scale;
        p.scale = scale;
        p.depth = z2;
      });

      // Draw neural connections
      const activeCat = selectedCategoryRef.current;
      links.forEach(([i, j]) => {
        const p1 = points[i];
        const p2 = points[j];

        if (activeCat !== 'all' && (p1.category !== activeCat || p2.category !== activeCat)) {
          return;
        }

        if (p1.depth < -150 && p2.depth < -150) return;

        const alpha = Math.max(0.04, Math.min(0.25, (p1.scale + p2.scale) * 0.1));
        ctx.strokeStyle = p1.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.lineWidth = Math.max(0.5, p1.scale * 0.8);
        ctx.beginPath();
        ctx.moveTo(p1.screenX, p1.screenY);
        ctx.lineTo(p2.screenX, p2.screenY);
        ctx.stroke();
      });

      // Sort points back-to-front
      const sorted = [...points].sort((a, b) => a.depth - b.depth);

      // Draw nodes
      sorted.forEach(p => {
        const isDimmed = activeCat !== 'all' && p.category !== activeCat;
        const isHovered = hoveredNodeRef.current && hoveredNodeRef.current.path === p.node.path;

        if (isDimmed && !isHovered) return;

        const baseRadius = isHovered ? 7 : 3.8;
        const r = Math.max(2.5, baseRadius * p.scale);

        // Soft glow halo
        if (p.scale > 0.8 || isHovered) {
          ctx.beginPath();
          ctx.arc(p.screenX, p.screenY, r * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? 'rgba(255, 42, 133, 0.45)' : `${p.color}20`;
          ctx.fill();
        }

        // Core sphere
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, r, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#FF2A85' : p.color;
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Node label
        if (isHovered || p.scale > 1.1) {
          ctx.font = `${isHovered ? 'bold 11px' : '9px'} monospace`;
          ctx.fillStyle = isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)';
          ctx.textAlign = 'center';
          const title = p.node.title || '';
          const cleanLabel = title.length > 20 ? title.slice(0, 18) + '..' : title;
          ctx.fillText(cleanLabel.toUpperCase(), p.screenX, p.screenY - r - 4);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('click', onClick);
      canvas.removeEventListener('wheel', onWheel);
    };
  }, [displayNodes, onSelectNode]);

  return (
    <div className="relative w-full h-[650px] bg-[#07070A] border-4 border-black neo-shadow-lg overflow-hidden select-none">
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Top HUD Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 pointer-events-auto font-mono text-xs font-bold">
        <div className="bg-black/90 backdrop-blur text-[#00FF66] border-2 border-black px-3 py-1 neo-shadow">
          3D SPATIAL MATRIX // WEBGL LATTICE
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className={`border-2 border-black px-3 py-1 cursor-pointer neo-shadow transition-colors ${
            isPaused ? 'bg-[#FF2A85] text-white' : 'bg-[#00FF66] text-black'
          }`}
          title="Toggle rotation"
        >
          {isPaused ? 'ROTATION: PAUSED' : 'ROTATION: DRIFTING'}
        </button>

        <button
          onClick={() => setSelectedCategory('all')}
          className={`border-2 border-black px-2.5 py-1 cursor-pointer neo-shadow ${
            selectedCategory === 'all' ? 'bg-[#FFE600] text-black' : 'bg-black text-white hover:bg-neutral-800'
          }`}
        >
          ALL SECTORS
        </button>
      </div>

      {/* Category Sector Filter Pills */}
      <div className="absolute top-16 left-4 z-10 flex flex-wrap gap-1.5 pointer-events-auto max-w-xl font-mono text-[10px] font-bold">
        {Object.entries(CATEGORY_PALETTE).map(([catKey, catMeta]) => {
          const isActive = selectedCategory === catKey;
          return (
            <button
              key={catKey}
              onClick={() => setSelectedCategory(isActive ? 'all' : catKey)}
              className="px-2 py-0.5 border border-black cursor-pointer transition-all shadow-[2px_2px_0px_#000]"
              style={{
                backgroundColor: isActive ? catMeta.color : '#000000',
                color: isActive ? '#000000' : catMeta.color
              }}
            >
              {catMeta.label}
            </button>
          );
        })}
      </div>

      {/* Navigation Helper */}
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none text-neutral-400 font-mono text-[10px] space-y-0.5 bg-black/80 backdrop-blur p-2.5 border-2 border-black neo-shadow">
        <div>[DRAG] Rotate Galaxy</div>
        <div>[SCROLL] Zoom Camera</div>
        <div>[HOVER] Inspect & Freeze Orbit</div>
        <div>[CLICK] Open Dossier</div>
      </div>

      {/* Hovered Node Preview Dossier */}
      {hoveredNode && (
        <div className="absolute bottom-4 right-4 z-10 bg-black text-white border-3 border-[#00F0FF] p-3.5 max-w-sm font-mono text-xs shadow-[5px_5px_0px_#00F0FF] pointer-events-none">
          <div className="text-[#FFE600] font-black truncate text-sm mb-1">{hoveredNode.title.toUpperCase()}</div>
          <div className="flex items-center gap-2 text-[10px] mb-2 text-[#00FF66] font-bold">
            <span className="bg-[#00F0FF] text-black px-1.5 py-0.2 border border-black">{hoveredNode.category?.toUpperCase()}</span>
            {hoveredNode.quality_score > 0 && <span>QUALITY: {formatQualityScore(hoveredNode.quality_score)}/10</span>}
          </div>
          <div className="text-neutral-300 text-[11px] leading-relaxed line-clamp-3 bg-neutral-900/80 p-2 border border-neutral-700">
            {hoveredNode.summary || 'Verified frontier intelligence node.'}
          </div>
        </div>
      )}
    </div>
  );
}
