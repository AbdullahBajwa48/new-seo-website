"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor">
      <path d="M16 0C16 0 17 11 22 16C17 21 16 32 16 32C16 32 15 21 10 16C15 11 16 0 16 0Z" />
      <path d="M0 16C0 16 11 17 16 22C21 17 32 16 32 16C32 16 21 15 16 10C11 15 0 16 0 16Z" />
    </svg>
  );
}

export default function CTASection() {
  return (
    <section className="w-full bg-black py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Yellow card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-[#F5C518] px-6 sm:px-16 py-16 sm:py-20 text-center overflow-hidden"
        >
          {/* Glow blob */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full bg-yellow-200 opacity-40 blur-3xl" />
          </div>

          {/* Sparkles */}
          <Sparkle className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-60" />
          <Sparkle className="absolute right-10 top-1/3 w-10 h-10 text-white opacity-50" />
          <Sparkle className="absolute right-6 bottom-10 w-5 h-5 text-white opacity-40" />
          <Sparkle className="absolute left-16 top-8 w-4 h-4 text-white opacity-30" />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-xs font-bold tracking-widest uppercase text-white/70 mb-5"
            >
              Get Started Today
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: "'Georgia', serif", textShadow: "0 2px 24px rgba(0,0,0,0.12)" }}
            >
              Ready to Grow Your Business with SEO That Works?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white/75 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10"
            >
              Get a free, no-obligation SEO audit and see exactly where your website stands. No sales pressure. No lock-in contracts. Just honest insights from a Melbourne SEO agency that does things differently.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="/seo-audit"
                className="w-full sm:w-auto px-8 py-3.5 bg-black hover:bg-gray-900 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
              >
                Get Your Free SEO Audit
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/20 hover:bg-white/30 text-white font-semibold text-sm rounded-full border border-white/50 hover:border-white active:scale-95 transition-all duration-200"
              >
                Book a Call
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-200"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M16.99 3h-2.29l-4.7 5.5L5.56 3H1l7.11 9.5L1.5 20h2.29l5.2-6.08L14.44 20H19l-7.4-9.88L16.99 3zM3.5 4.5h1.56l9.94 13H13.4L3.5 4.5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-200"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M3.5 2A1.5 1.5 0 1 0 3.5 5 1.5 1.5 0 0 0 3.5 2zM2 6.5h3V18H2V6.5zm5 0h2.9v1.6h.04C10.4 7.1 11.6 6.3 13.2 6.3c3.2 0 3.8 2.1 3.8 4.9V18h-3v-6c0-1.4 0-3.3-2-3.3-2 0-2.3 1.6-2.3 3.2V18H7V6.5z" />
              </svg>
            </a>
          </div>
          <p className="text-white/30 text-xs text-center sm:text-right">
            © 2025 Khalis Marketing. All rights reserved.
          </p>
        </div>

        {/* KHALIS wordmark */}
        <div className="mt-6 overflow-hidden select-none pointer-events-none -mx-4">
          <p
            className="text-center font-black leading-none tracking-tighter text-white opacity-[0.06]"
            style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontSize: "clamp(72px, 20vw, 240px)",
              marginBottom: "-0.1em",
            }}
          >
            KHALIS
          </p>
        </div>

      </div>
    </section>
  );
}