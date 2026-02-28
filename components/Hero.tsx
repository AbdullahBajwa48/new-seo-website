"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import Link from "next/link";

// ─── Tool brand logos (SVG inline) ───────────────────────────────────────────
const tools = [
  {
    name: "Screaming Frog",
    color: "#4CAF50",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="20" r="20" fill="#4CAF50" opacity="0.12" />
        {/* frog face */}
        <ellipse cx="20" cy="22" rx="10" ry="8" fill="#4CAF50" />
        <circle cx="14" cy="15" r="4" fill="#4CAF50" />
        <circle cx="26" cy="15" r="4" fill="#4CAF50" />
        <circle cx="14" cy="15" r="2.5" fill="white" />
        <circle cx="26" cy="15" r="2.5" fill="white" />
        <circle cx="14.8" cy="15" r="1.2" fill="#1a1a1a" />
        <circle cx="26.8" cy="15" r="1.2" fill="#1a1a1a" />
        <path d="M15 25 Q20 28 25 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <ellipse cx="20" cy="22" rx="5" ry="2.5" fill="#66BB6A" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "ahrefs",
    color: "#FF6B35",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="20" r="20" fill="#FF6B35" opacity="0.12" />
        <text x="7" y="27" fontSize="16" fontWeight="900" fill="#FF6B35" fontFamily="Arial, sans-serif">ah</text>
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#D97706",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="20" r="20" fill="#D97706" opacity="0.12" />
        {/* Anthropic / Claude sunburst */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
          <line
            key={i}
            x1="20" y1="20"
            x2={20 + 11 * Math.cos((deg * Math.PI) / 180)}
            y2={20 + 11 * Math.sin((deg * Math.PI) / 180)}
            stroke="#D97706"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={0.5 + (i % 3) * 0.2}
          />
        ))}
        <circle cx="20" cy="20" r="4" fill="#D97706" />
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    color: "#10A37F",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="20" r="20" fill="#10A37F" opacity="0.12" />
        {/* OpenAI-ish swirl */}
        <path
          d="M20 10 C26 10 30 14 30 20 C30 24 27 27 23 28 C27 29 30 26 30 22 C30 17 26 13 20 13 C15 13 11 17 11 22 C11 26 14 29 18 29 C14 28 11 25 11 21 C11 15 15 10 20 10Z"
          fill="#10A37F"
          opacity="0.9"
        />
        <circle cx="20" cy="20" r="3.5" fill="#10A37F" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    color: "#6366F1",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="20" r="20" fill="#6366F1" opacity="0.12" />
        {/* diamond / asterisk */}
        <line x1="20" y1="10" x2="20" y2="30" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="10" y1="20" x2="30" y2="20" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="13" y1="13" x2="27" y2="27" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="27" y1="13" x2="13" y2="27" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "SEMrush",
    color: "#FF642D",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="20" r="20" fill="#FF642D" opacity="0.12" />
        {/* bar chart icon */}
        <rect x="9" y="24" width="5" height="7" rx="1.5" fill="#FF642D" />
        <rect x="17" y="18" width="5" height="13" rx="1.5" fill="#FF642D" />
        <rect x="25" y="12" width="5" height="19" rx="1.5" fill="#FF642D" />
      </svg>
    ),
  },
  {
    name: "Google Search Console",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="20" r="20" fill="#4285F4" opacity="0.12" />
        <circle cx="19" cy="19" r="7" stroke="#4285F4" strokeWidth="2.5" fill="none" />
        <line x1="24" y1="24" x2="30" y2="30" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    color: "#E37400",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="20" r="20" fill="#E37400" opacity="0.12" />
        <rect x="10" y="26" width="5" height="5" rx="2.5" fill="#E37400" />
        <rect x="17" y="19" width="5" height="12" rx="2.5" fill="#E37400" />
        <rect x="24" y="13" width="5" height="18" rx="2.5" fill="#E37400" />
      </svg>
    ),
  },
];

// ─── Organic traffic chart data ──────────────────────────────────────────────
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const oldData = [800, 600, 900, 700, 1100, 900, 1400, 1200, 1600, 1400, 1800, 1500];
const newData = [500, 700, 600, 900, 800, 1100, 2500, 2200, 2800, 2600, 3000, 2900];

function normalizePath(data: number[], w: number, h: number, pad = 20): string {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    return [x, y] as [number, number];
  });

  // Smooth curve using cubic bezier
  let d = `M ${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const cp1x = (points[i - 1][0] + points[i][0]) / 2;
    const cp1y = points[i - 1][1];
    const cp2x = (points[i - 1][0] + points[i][0]) / 2;
    const cp2y = points[i][1];
    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${points[i][0]},${points[i][1]}`;
  }
  return d;
}

// ─── Traffic Chart Component ──────────────────────────────────────────────────
function TrafficChart() {
  const W = 340;
  const H = 160;
  const oldPath = normalizePath(oldData, W, H);
  const newPath = normalizePath(newData, W, H);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-xl p-5 w-full max-w-sm mx-auto"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-800">Organic Traffic</span>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" /> OLD
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" /> NEW
          </span>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full overflow-visible">
        {/* Grid lines */}
        {[0.2, 0.4, 0.6, 0.8].map((t, i) => (
          <line
            key={i}
            x1={20} x2={W - 20}
            y1={20 + t * (H - 40)} y2={20 + t * (H - 40)}
            stroke="#f0f0f0" strokeWidth="1"
          />
        ))}

        {/* Old line (orange) */}
        <motion.path
          d={oldPath}
          fill="none"
          stroke="#FB923C"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
        />

        {/* New line (blue) */}
        <motion.path
          d={newPath}
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.0, duration: 1.5, ease: "easeInOut" }}
        />

        {/* Highlight dot at peak of new line (JUL ≈ index 6) */}
        {(() => {
          const idx = 6;
          const min = Math.min(...newData);
          const max = Math.max(...newData);
          const x = 20 + (idx / (newData.length - 1)) * (W - 40);
          const y = H - 20 - ((newData[idx] - min) / (max - min)) * (H - 40);
          return (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
              <circle cx={x} cy={y} r={5} fill="#3B82F6" />
              <rect x={x - 20} y={y - 26} width={42} height={20} rx={6} fill="#3B82F6" />
              <text x={x + 1} y={y - 12} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">
                2.5K
              </text>
            </motion.g>
          );
        })()}
      </svg>

      {/* Month labels */}
      <div className="flex justify-between mt-1 px-5">
        {months.map((m) => (
          <span key={m} className="text-[8px] text-gray-300 font-medium">{m}</span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Floating particles
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd4a017,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Subtle floating torus
    const torusGeo = new THREE.TorusGeometry(2.5, 0.015, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0xf5c518, transparent: true, opacity: 0.15 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.8, 0.01, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0xaaaaaa, transparent: true, opacity: 0.07 })
    );
    torus2.rotation.x = -Math.PI / 4;
    torus2.rotation.y = Math.PI / 6;
    scene.add(torus2);

    // Animation loop
    let animId: number;
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      particles.rotation.y = t * 0.03;
      particles.rotation.x = t * 0.015;
      torus.rotation.z = t * 0.08;
      torus2.rotation.y = t * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[#f5f5f0] flex flex-col items-center justify-center overflow-hidden pt-16">

      {/* Three.js canvas layer */}
      <div ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-gray-100 mb-8 text-sm font-medium text-gray-700"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Best SEO Agency
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Melbourne's SEO Agency
          <br />
          <span className="text-gray-900">That Actually Delivers</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base sm:text-lg text-gray-500 max-w-xl mb-10 leading-relaxed"
        >
          SEO Without the Runaround. No long-term contracts. No empty promises. Just transparent strategies that get your business found on Google.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <Link
            href="/seo-audit"
            className="px-6 py-3 bg-[#F5C518] hover:bg-[#e6b800] text-gray-900 font-semibold rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 text-sm"
          >
            Get Your Free SEO Audit
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-full border border-gray-200 shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 text-sm"
          >
            Book a Call
          </Link>
        </motion.div>

        {/* Chart Card */}
        <TrafficChart />

        {/* Tools marquee strip */}
        

        {/* Keyframe injection */}
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}