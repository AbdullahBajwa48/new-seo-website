"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const paragraphs = [
  "I started Khalis Marketing because the SEO industry has a trust problem.",
  "After a decade working in digital marketing for agencies in the US and here in Melbourne, I've seen how this industry operates from the inside. Agencies are charging thousands while delivering recycled strategies from 2015.",
  "Clients are locked into 12-month contracts with nothing to show for it: big promises, zero accountability. I've sat in meetings where the work being sold wasn't the work being done. I've watched businesses get burned by \"experts\" who disappeared after the contract was signed.",
  "That's not how I want to work.",
];

export default function AboutStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: visual block ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Large quote */}
            <div className="absolute -top-8 -left-4 text-[120px] font-serif
                            text-orange-100 leading-none select-none pointer-events-none">
              "
            </div>

            {/* Main card */}
            <div className="relative bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10">
              {/* Orange top bar */}
              <div className="h-1 w-16 bg-orange-500 rounded-full mb-8" />

              <p className="text-gray-800 text-xl md:text-2xl font-semibold leading-relaxed mb-6">
                Khalis means{" "}
                <span className="text-orange-500">"pure"</span> in Arabic —
                genuine, honest, unadulterated.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                I chose this name because it reflects exactly what I want this
                agency to be: straightforward SEO that delivers real results,
                with no runaround.
              </p>

              {/* Founder signature area */}
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30
                                flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-bold">B</span>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold text-sm">Bhavleen Singh</p>
                  <p className="text-gray-400 text-xs">Founder, Khalis Marketing</p>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl
                            bg-orange-500/10 border border-orange-500/20 -z-10" />
          </motion.div>

          {/* ── Right: story text ── */}
          <div className="space-y-5">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-orange-500 text-sm font-bold tracking-widest uppercase"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="text-gray-900 text-3xl md:text-4xl font-extrabold leading-tight"
            >
              I'm Bhavleen Singh —{" "}
              <span className="text-orange-500">Founder</span> of Khalis Marketing
            </motion.h2>

            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.1 }}
                className={`leading-relaxed text-base
                  ${para === "That's not how I want to work."
                    ? "text-gray-900 font-bold text-lg border-l-2 border-orange-500 pl-4"
                    : "text-gray-500"
                  }`}
              >
                {para}
              </motion.p>
            ))}

            {/* When you work with us block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              className="bg-orange-50 border border-orange-100 rounded-xl p-5 mt-2"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                When you work with Khalis Marketing, you work directly with me.{" "}
                <strong className="text-gray-900">I do the strategy. I do the implementation. I answer your calls.</strong>{" "}
                There's no junior getting handed your account after the sale. No middlemen. No excuses.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}