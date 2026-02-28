"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Month-to-month",
    sub: "No lock-in contracts",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    label: "You own everything",
    sub: "Accounts, data & content",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    label: "Direct communication",
    sub: "Talk to who does the work",
  },
];

const paragraphs = [
  `Khalis means "pure" in Arabic — and that's exactly how we approach search engine optimisation. No hidden fees. No confusing jargon. No dodgy tactics that put your website at risk.`,
  `After a decade in digital marketing, working with businesses across retail, hospitality, medical, finance, and trades, we've seen how the SEO industry operates. Agencies that lock clients into 12-month contracts. Vague reports that say nothing. Promises of "#1 rankings" that never materialise.`,
  `We started Khalis Marketing to do things differently.`,
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f5f5f0] py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Top label ── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4 text-center"
        >
          About Us
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight text-center mb-16"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          An SEO Agency Melbourne{" "}
          <br className="hidden sm:block" />
          <span className="inline-flex items-center gap-3 flex-wrap justify-center mt-1">
            <span
              className="px-4 py-1 rounded-lg text-gray-900 italic"
              style={{ background: "#F5C518" }}
            >
              Businesses
            </span>
            <span>Can Trust</span>
          </span>
        </motion.h2>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — text */}
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`text-gray-600 leading-relaxed ${
                  i === 2
                    ? "text-xl font-bold text-gray-900"
                    : "text-base sm:text-lg"
                }`}
              >
                {p}
              </motion.p>
            ))}

            {/* Pull quote */}
            <motion.blockquote
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-6 mt-2"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                style={{ background: "#F5C518" }}
              />
              <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed">
                "That's SEO without the runaround."
              </p>
            </motion.blockquote>

            {/* CTA */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-2"
            >
              <Link
                href="/seo-audit"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F5C518] hover:bg-[#e6b800] text-gray-900 font-semibold text-sm rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                Get Your Free SEO Audit
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right — highlight cards */}
          <div className="space-y-5">

            {/* Decade badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              className="relative bg-gray-900 text-white rounded-3xl p-8 overflow-hidden"
            >
              {/* decorative circle */}
              <div
                className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-10"
                style={{ background: "#F5C518" }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full opacity-5"
                style={{ background: "#F5C518" }}
              />

              <p
                className="text-6xl font-black text-[#F5C518] leading-none mb-2"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
              >
                10+
              </p>
              <p className="text-white font-semibold text-lg mb-1">Years in Digital Marketing</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Working with businesses across retail, hospitality, medical, finance, and trades.
              </p>
            </motion.div>

            {/* Three promise cards */}
            <div className="space-y-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.55, ease: "easeOut" }}
                  className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 group hover:border-[#F5C518] transition-colors duration-200"
                >
                  {/* Icon bubble */}
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-gray-700 group-hover:text-gray-900 transition-colors"
                    style={{ background: "#FFF8DC" }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{h.label}</p>
                    <p className="text-xs text-gray-400">{h.sub}</p>
                  </div>
                  {/* Arrow */}
                  <div className="ml-auto text-gray-300 group-hover:text-[#F5C518] transition-colors">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}