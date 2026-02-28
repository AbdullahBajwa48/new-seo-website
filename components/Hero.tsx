"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
        {[0.2, 0.4, 0.6, 0.8].map((t, i) => (
          <line key={i} x1={20} x2={W - 20} y1={20 + t * (H - 40)} y2={20 + t * (H - 40)} stroke="#f0f0f0" strokeWidth="1" />
        ))}
        <motion.path d={oldPath} fill="none" stroke="#FB923C" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }} />
        <motion.path d={newPath} fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.0, duration: 1.5, ease: "easeInOut" }} />
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
              <text x={x + 1} y={y - 12} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">2.5K</text>
            </motion.g>
          );
        })()}
      </svg>

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
  return (
    <section className="relative min-h-screen bg-[#f5f5f0] flex flex-col items-center justify-center overflow-hidden pt-16">

      {/* Dim yellow radial glow — replaces Three.js background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(245,197,24,0.18) 0%, rgba(245,197,24,0.06) 50%, transparent 75%)",
          }}
        />
      </div>

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

      </div>
    </section>
  );
}