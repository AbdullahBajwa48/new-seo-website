"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Local SEO",
    description:
      "Get found by customers in your area. We optimise your Google Business Profile, build local citations, and help you rank in the map pack for searches that matter.",
  },
  {
    number: "02",
    title: "Technical SEO",
    description:
      "Site speed, mobile performance, crawlability, indexing issues — we fix the backend problems holding your rankings back.",
  },
  {
    number: "03",
    title: "On-Page SEO",
    description:
      "Strategic keyword research, optimised content, meta tags, and internal linking that tell Google exactly what your pages are about.",
  },
  {
    number: "04",
    title: "Link Building",
    description:
      "Quality backlinks from relevant Australian websites. No spammy link farms. No PBNs. Just legitimate outreach that builds your domain authority.",
  },
  {
    number: "05",
    title: "SEO Audits",
    description:
      "A comprehensive analysis of your website's SEO health — technical issues, content gaps, competitor insights, and a clear action plan.",
  },
  {
    number: "06",
    title: "Website Design",
    description:
      "SEO-ready websites built for speed, user experience, and conversions. Your online presence, done right from the start.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4"
          >
            What We Do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            SEO Services That Drive
            <br />Real Results
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-500 text-base sm:text-lg leading-relaxed"
          >
            From local search domination to technical fixes and content that ranks, we offer complete
            search engine optimisation services tailored to Melbourne businesses.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
              className="group bg-white px-8 py-10 flex flex-col gap-4 hover:bg-[#FFFBEA] transition-colors duration-200 cursor-default"
            >
              {/* Number */}
              <span className="text-xs font-bold tracking-widest text-gray-300 group-hover:text-[#F5C518] transition-colors duration-200">
                {s.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900">
                {s.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-gray-200 group-hover:bg-[#F5C518] transition-colors duration-200 rounded-full" />

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {s.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-xs font-semibold text-gray-300 group-hover:text-gray-700 transition-colors duration-200 mt-1">
                Learn more
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F5C518] hover:bg-[#e6b800] text-gray-900 font-semibold text-sm rounded-full shadow-sm hover:shadow-md active:scale-95 transition-all duration-200"
          >
            View All Services
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}