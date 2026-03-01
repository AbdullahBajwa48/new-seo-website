"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const approaches = [
  {
    icon: "⚡",
    title: "Modern strategies, not recycled tactics",
    description:
      "I stay current with algorithm updates, AI integration, and evolving search trends. Your SEO strategy is built for 2024 and beyond — not 2015.",
  },
  {
    icon: "🔍",
    title: "Transparency over promises",
    description:
      "I'll tell you exactly what I'm doing and why. You'll understand your SEO — not just pay for it blindly.",
  },
  {
    icon: "📈",
    title: "Results over rankings",
    description:
      "Rankings mean nothing if they don't bring customers. I focus on traffic that converts: leads, enquiries, and revenue.",
  },
  {
    icon: "🤝",
    title: "Honesty over sales",
    description:
      "If SEO isn't right for your business, I'll tell you. I only take on clients I'm confident I can help.",
  },
];

export default function AboutWhyDifferent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
          >
            Our Approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-gray-900 text-3xl md:text-4xl font-extrabold leading-tight mb-4"
          >
            Why I Do Things{" "}
            <span className="text-orange-500">Differently</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="text-gray-500 text-base leading-relaxed"
          >
            The SEO landscape has changed — especially with the rise of AI and
            Google's increasingly sophisticated algorithms. What worked five years
            ago doesn't work today. Yet many agencies keep selling outdated
            playbooks because it's easier than adapting.
          </motion.p>
        </div>

        {/* ── Context banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="bg-orange-50 border border-orange-100 rounded-2xl p-6 md:p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl shrink-0">⚠️</span>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              <strong className="text-gray-900">The hard truth:</strong> I've worked for agencies
              that were still using SEO tactics from ten years ago. Link schemes that stopped
              working in 2016. Keyword stuffing that Google penalises. Content written for
              algorithms, not humans. At Khalis Marketing, we do things differently.
            </p>
          </div>
        </motion.div>

        {/* ── Approach cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-gray-50 border border-gray-100 rounded-2xl p-7
                         hover:border-orange-300 hover:bg-orange-50/50
                         transition-colors duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200
                              group-hover:border-orange-200 transition-colors duration-300
                              flex items-center justify-center text-2xl mb-5 shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-base mb-2
                             group-hover:text-orange-600 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-5 h-0.5 w-0 group-hover:w-12 bg-orange-500
                              rounded-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}