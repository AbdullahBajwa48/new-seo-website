"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Most Melbourne businesses start seeing measurable improvements in organic traffic and rankings within 3–6 months, depending on competition and your website's current state. We set realistic expectations upfront — no false promises.",
  },
  {
    q: "Do you lock clients into long-term contracts?",
    a: "No. Khalis Marketing operates on a month-to-month basis. You stay because you're seeing results, not because you're stuck in a contract. We believe in earning your business every month.",
  },
  {
    q: "What's included in the free SEO audit?",
    a: "Our free audit covers technical SEO issues, on-page optimisation gaps, local SEO opportunities, competitor analysis, and a prioritised action plan. It's a genuine assessment — not a sales pitch disguised as an audit.",
  },
  {
    q: "Do I own my accounts and data?",
    a: "Absolutely. Your Google Analytics, Search Console, Google Business Profile, and any content we create — it's all yours. If you ever leave, everything stays with you.",
  },
  {
    q: "How is Khalis Marketing different from other SEO agencies?",
    a: "We're transparent about what we do and why. No jargon-filled reports. No mysterious \"proprietary methods.\" You get clear communication, honest timelines, and strategies that focus on leads and revenue — not just rankings.",
  },
  {
    q: "Which industries do you work with?",
    a: "We work with Melbourne businesses across trades, retail, hospitality, medical, finance, and professional services. Our strategies are tailored to your industry, audience, and goals.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: "easeOut" }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors leading-snug">
          {faq.q}
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300"
          style={open ? { background: "#F5C518", borderColor: "#F5C518" } : {}}
        >
          <motion.svg
            viewBox="0 0 16 16"
            fill="none"
            className="w-3.5 h-3.5"
            stroke={open ? "#1a1a1a" : "#9ca3af"}
            strokeWidth={2.5}
            strokeLinecap="round"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M8 2v12M2 8h12" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="w-full bg-[#f5f5f0] py-24 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
            FAQ
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="bg-white rounded-2xl px-6 sm:px-10 divide-y-0 border border-gray-100 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}