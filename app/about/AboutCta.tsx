"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function AboutCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-gray-100"
    >
      {/* Subtle yellow glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[400px] rounded-full blur-3xl"
          style={{ background: "rgba(245,197,24,0.1)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4"
        >
          Let's Talk
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Let's Talk About{" "}
          <br className="hidden sm:block" />
          <span className="inline-flex items-center gap-3 flex-wrap justify-center mt-1">
            <span className="px-4 py-1 rounded-lg text-gray-900 italic" style={{ background: "#F5C518" }}>
              Your SEO Goals
            </span>
          </span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-10"
        >
          No pressure. No confusing jargon. Just a straight conversation about
          where your business is, where you want it to be, and whether we can
          help you get there.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Link
            href="/seo-audit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#F5C518] hover:bg-[#e6b800] text-gray-900 font-semibold text-sm rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 group"
          >
            Get Your Free SEO Audit
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm rounded-full active:scale-95 transition-all duration-200"
          >
            📞 Book a Call with Bhavleen
          </Link>
          <Link
            href="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 font-semibold text-sm rounded-full active:scale-95 transition-all duration-200"
          >
            Get a Quote
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {[
            "✓ No lock-in contracts",
            "✓ Direct access to Bhavleen",
            "✓ Free, honest audit",
            "✓ You own your data",
          ].map((item) => (
            <span key={item} className="text-gray-400 text-xs font-medium">
              {item}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}