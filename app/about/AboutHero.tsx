"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ── Full width photo background ── */}
      {/* Replace /about-photo.jpg with your actual image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/about-photo.png')" }}
      />

      {/* ── Gradient overlays ── */}
      {/* Left dark overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-black/10" />
      {/* Bottom fade into white (next section is light) */}
      <div className="absolute bottom-0 left-0 right-0 h-40
                      bg-gradient-to-t from-white to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen
                px-6 md:px-16 lg:px-24 pt-28 pb-20 max-w-3xl ml-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-4"
        >
          About Khalis Marketing
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold
                     leading-tight mb-6"
        >
          Meet the SEO Consultant{" "}
          <span className="text-orange-400">Behind</span>{" "}
          Khalis Marketing
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          className="text-gray-200 text-lg leading-relaxed max-w-xl mb-10"
        >
          No sales team. No account managers. Just Bhavleen — a Melbourne-based
          SEO specialist with 10 years of experience helping businesses get found
          on Google.
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "100%", label: "Direct Access" },
            { value: "0", label: "Lock-in Contracts" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20
                         rounded-xl px-5 py-3 text-center"
            >
              <p className="text-orange-400 font-extrabold text-xl">{stat.value}</p>
              <p className="text-gray-300 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}