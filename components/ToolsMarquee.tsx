"use client";

/**
 * ToolsMarquee — Separate section component
 *
 * HOW TO USE LOGOS:
 * Replace each `src` path below with your actual logo files.
 * Recommended: place logo files in /public/logos/ in your Next.js project.
 * e.g. src="/logos/ahrefs.svg"
 *
 * Logo files needed (suggest SVG or PNG with transparent background):
 *   ahrefs.svg, claude.svg, chatgpt.svg, perplexity.svg,
 *   semrush.svg, screamingfrog.svg
 */

import Image from "next/image";

// ─── Tool definitions — swap src paths to your actual logo files ──────────────
const tools = [
  {
    name: "ahrefs",
    src: "/ahrefs-seo-tool-seeklogo-2.svg",       // ← replace with your logo path
    width: 90,
    height: 28,
  },
  {
    name: "Claude",
    src: "/claude-seeklogo.svg",        // ← replace with your logo path
    width: 96,
    height: 28,
  },
  {
    name: "ChatGPT",
    src: "/chatgpt-seeklogo.svg",       // ← replace with your logo path
    width: 100,
    height: 28,
  },
  {
    name: "Perplexity",
    src: "/perplexity-ai-seeklogo.svg",    // ← replace with your logo path
    width: 110,
    height: 28,
  },
  {
    name: "SEMRUSH",
    src: "/semrush-seeklogo.png",       // ← replace with your logo path
    width: 110,
    height: 28,
  },
  {
    name: "Screaming Frog",
    src: "/screaming-frog-seeklogo.svg", // ← replace with your logo path
    width: 130,
    height: 28,
  },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...tools, ...tools, ...tools];

export default function ToolsMarquee() {
  return (
    <section className="w-full bg-[#f5f5f0] py-12">
      {/* Label */}
      <p className="text-center text-xs text-gray-400 font-medium tracking-widest uppercase mb-8">
        Tools We Use to Deliver Results Every Day for Our Clients.
      </p>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{ background: "linear-gradient(to right, #f5f5f0, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{ background: "linear-gradient(to left, #f5f5f0, transparent)" }}
        />

        {/* Scrolling track */}
        <div
          className="flex items-center w-max"
          style={{ animation: "toolsMarquee 30s linear infinite" }}
        >
          {marqueeItems.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex items-center mx-12 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default"
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={tool.width}
                height={tool.height}
                className="object-contain"
                // Suppress error if logo file missing during dev
                onError={(e) => {
                  // Fallback: show text name if image fails
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector("span")) {
                    const span = document.createElement("span");
                    span.textContent = tool.name;
                    span.style.cssText =
                      "font-weight:700;font-size:15px;color:#555;white-space:nowrap;";
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes toolsMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}