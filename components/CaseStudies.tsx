"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    company: "Prestige Plumbing Co.",
    tagline: "From Unknown to Area Leader",
    stat1: { value: "+312%", label: "increase in organic traffic." },
    stat2: { value: "45+", label: "keywords on page 1." },
    href: "/case-studies/plumbing-seo-melbourne",
  },
  {
    company: "Bright Spark Electrical",
    tagline: "From Invisible to Map Pack",
    stat1: { value: "+187%", label: "increase in website traffic." },
    stat2: { value: "28", label: "new leads per month." },
    href: "/case-studies/electrician-seo-melbourne",
  },
  {
    company: "The Terrace Restaurant",
    tagline: "From Quiet to Fully Booked",
    stat1: { value: "+147%", label: "increase in organic bookings." },
    stat2: { value: "4.8★", label: "average across 200+ reviews." },
    href: "/case-studies/restaurant-seo-melbourne",
  },
  {
    company: "Urban Dental Care",
    tagline: "From Invisible to Booked Out",
    stat1: { value: "+324%", label: "increase in local searches." },
    stat2: { value: "4X", label: "more appointments booked." },
    href: "/case-studies/dental-seo-melbourne",
  },
  {
    company: "Melbourne Home Store",
    tagline: "From Ad-Dependent to Organic",
    stat1: { value: "$127K", label: "in organic revenue (6 months)." },
    stat2: { value: "+215%", label: "increase in organic traffic." },
    href: "/case-studies/ecommerce-seo-melbourne",
  },
];

const marqueeItems = [...caseStudies, ...caseStudies];

function CaseStudyCard({ item }: { item: typeof caseStudies[0] }) {
  return (
    <Link
      href={item.href}
      className="group shrink-0 w-72 bg-white rounded-2xl p-7 flex flex-col gap-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-pointer"
    >
      {/* Company + tagline */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 leading-snug mb-1">
          {item.company}
        </h3>
        <p className="text-sm font-semibold text-gray-500 leading-snug">
          {item.tagline}
        </p>
      </div>

      {/* Stats row */}
      <div className="flex items-start gap-6 mt-auto">
        <div>
          <p className="text-3xl font-black text-gray-900 leading-none mb-1"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
            {item.stat1.value}
          </p>
          <p className="text-xs text-gray-400 leading-snug max-w-[100px]">
            {item.stat1.label}
          </p>
        </div>
        <div>
          <p className="text-3xl font-black text-gray-900 leading-none mb-1"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
            {item.stat2.value}
          </p>
          <p className="text-xs text-gray-400 leading-snug max-w-[100px]">
            {item.stat2.label}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="w-full bg-[#f0f0eb] py-24 overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center px-4 mb-14"
      >
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Some Results for
          <br />
          <span className="inline-flex items-center gap-3 flex-wrap justify-center mt-1">
            <span className="px-4 py-1 rounded-lg text-gray-900 italic" style={{ background: "#F5C518" }}>
              Melbourne
            </span>
            <span>Businesses</span>
          </span>
        </h2>
        <p className="text-sm text-gray-400 mt-4">
          See how our strategies turn traffic into revenue.
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, #f0f0eb, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, #f0f0eb, transparent)" }} />

        {/* Track */}
        <div className="case-marquee-track flex gap-5 w-max px-10 pb-2">
          {marqueeItems.map((item, i) => (
            <CaseStudyCard key={`${item.company}-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center mt-12"
      >
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm rounded-full transition-all duration-200 active:scale-95"
        >
          View All Case Studies
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </motion.div>

      <style>{`
        @keyframes caseMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .case-marquee-track {
          animation: caseMarquee 35s linear infinite;
        }
        /* Pause only on real mouse hover — never on touch */
        @media (hover: hover) and (pointer: fine) {
          .case-marquee-track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}