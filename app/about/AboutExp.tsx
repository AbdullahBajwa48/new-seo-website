"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "Early Career",
    title: "Freelance Content Writer",
    description:
      "Started in digital marketing as a freelance content writer, developing a deep understanding of how content and search work together.",
    icon: "✍️",
  },
  {
    year: "2020",
    title: "Pivoted to SEO",
    description:
      "Recognised the industry was shifting and moved into SEO — wanting to be ahead of the curve, not chasing it.",
    icon: "🔍",
  },
  {
    year: "2020–2022",
    title: "US Digital Marketing Agency",
    description:
      "Cut my teeth on competitive niches: retail, hospitality, medical, finance, and trade services. Took websites from zero visibility to page one rankings, increasing organic traffic by over 100%.",
    icon: "🌎",
  },
  {
    year: "2023",
    title: "Moved to Melbourne",
    description:
      "Relocated to Melbourne to pursue a Master of Marketing at Victoria University — combining hands-on experience with formal education in consumer behaviour, digital strategy, and marketing analytics.",
    icon: "🎓",
  },
  {
    year: "Certified",
    title: "Moz Technical SEO Certification",
    description:
      "Earned a Technical SEO Certification from Moz — one of the most respected names in the SEO industry.",
    icon: "🏆",
  },
  {
    year: "Today",
    title: "Khalis Marketing",
    description:
      "Helping Melbourne businesses grow their organic traffic, generate quality leads, and outrank competitors — all without locking them into contracts.",
    icon: "🚀",
  },
];

const industries = [
  "Retail", "Hospitality", "Medical", "Finance", "Trade Services", "Professional Services",
];

export default function AboutExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ── */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-gray-900 text-3xl md:text-4xl font-extrabold leading-tight mb-4"
          >
            10 Years of SEO Experience{" "}
            <span className="text-orange-500">Across Multiple Industries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="text-gray-500 text-base leading-relaxed"
          >
            Credentials only tell part of the story. What matters is results —
            and I've spent a decade learning what actually moves the needle for businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Left: Timeline ── */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              style={{ originY: 0 }}
              className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b
                         from-orange-400 via-orange-300 to-orange-100"
            />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full
                                  bg-white border-2 border-orange-400 shadow-sm
                                  flex items-center justify-center text-sm">
                    {m.icon}
                  </div>

                  {/* Year tag */}
                  <span className="inline-block text-xs font-bold text-orange-500
                                   bg-orange-50 border border-orange-100
                                   px-2.5 py-0.5 rounded-full mb-1">
                    {m.year}
                  </span>

                  <h3 className="text-gray-900 font-bold text-base mb-1">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Stats + Industries ── */}
          <div className="flex flex-col gap-8">

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Years in Digital Marketing" },
                { value: "100%+", label: "Organic Traffic Growth" },
                { value: "Master's", label: "Marketing — Victoria University" },
                { value: "Moz", label: "Technical SEO Certified" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                  className="bg-white border border-gray-100 rounded-xl p-5
                             hover:border-orange-200 hover:shadow-sm transition-all duration-300"
                >
                  <p className="text-orange-500 font-extrabold text-xl mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-xs leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              className="bg-white border border-gray-100 rounded-xl p-6"
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
                Industries Worked In
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-sm text-gray-700 bg-gray-50 border border-gray-200
                               px-3 py-1.5 rounded-full hover:border-orange-300
                               hover:text-orange-600 transition-colors duration-300"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
              className="border-l-2 border-orange-500 pl-4"
            >
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "But credentials only tell part of the story. What matters is results —
                and I've spent a decade learning what actually moves the needle for businesses."
              </p>
              <p className="text-orange-500 text-xs font-semibold mt-2">— Bhavleen Singh</p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}