"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const personalItems = [
  { icon: "🎮", label: "Gaming", description: "Unwinding with games after a long week of analytics." },
  { icon: "👨‍👩‍👧", label: "Family Time", description: "Family keeps me grounded and motivated." },
  { icon: "✈️", label: "Travel", description: "Always planning the next getaway to explore the world." },
  { icon: "🏔️", label: "Bright, Victoria", description: "The most beautiful place I've discovered in Australia — put it on your list." },
];

export default function AboutPersonal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
            >
              Beyond SEO
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="text-gray-900 text-3xl md:text-4xl font-extrabold leading-tight mb-5"
            >
              The Person{" "}
              <span className="text-orange-500">Behind the Work</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="text-gray-500 text-base leading-relaxed mb-6"
            >
              When I'm not optimising websites or analysing search data, you'll
              find me gaming, spending time with family, or planning the next
              getaway.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
              className="text-gray-500 text-base leading-relaxed mb-8"
            >
              I chose Melbourne because it's a city that rewards hard work and
              genuine connection. That's exactly how I approach my clients:{" "}
              <strong className="text-gray-800">
                authentic relationships, real results, and no agency nonsense.
              </strong>
            </motion.p>

            {/* Melbourne callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="flex items-start gap-3 bg-white border border-gray-100
                         rounded-xl p-5 shadow-sm"
            >
              <span className="text-2xl shrink-0">📍</span>
              <div>
                <p className="text-gray-800 font-semibold text-sm">Based in Melbourne</p>
                <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                  Working directly with Melbourne businesses — locally focused,
                  globally experienced.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Personal cards ── */}
          <div className="grid grid-cols-2 gap-4">
            {personalItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white border border-gray-100 rounded-2xl p-6
                           hover:border-orange-200 hover:shadow-md
                           transition-all duration-300 cursor-default"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <p className="text-gray-900 font-bold text-sm mb-1
                              group-hover:text-orange-600 transition-colors duration-300">
                  {item.label}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}