"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Finally, an SEO agency that explains what they're actually doing. No contracts, clear reports, and real results. Our leads have doubled in six months.",
    name: "Client Name",
    business: "Business Type",
    location: "Melbourne",
    initials: "CN",
  },
  {
    quote:
      "We'd been burned by two agencies before finding Khalis. The difference is night and day. They're responsive, honest, and our Google rankings have never been better.",
    name: "Client Name",
    business: "Business Type",
    location: "Melbourne",
    initials: "CN",
  },
  {
    quote:
      "Straight-up communication, no BS. They told us what was realistic, delivered on it, and we've stayed because it works — not because we're locked in.",
    name: "Client Name",
    business: "Business Type",
    location: "Melbourne",
    initials: "CN",
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 16 16" fill="#F5C518" className="w-4 h-4">
    <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.4l-3.71 2.15L5 8.42 2 5.5l4.15-.75L8 1z" />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
            Testimonials
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            What Melbourne
            <br />
            <span className="inline-flex items-center gap-3 flex-wrap justify-center mt-1">
              <span className="px-4 py-1 rounded-lg text-gray-900 italic" style={{ background: "#F5C518" }}>
                Business Owners
              </span>
              <span>Say</span>
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
              className="flex flex-col bg-[#f9f9f7] rounded-2xl p-8 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, s) => <StarIcon key={s} />)}
              </div>

              {/* Quote mark */}
              <p className="text-4xl font-serif text-gray-200 leading-none mb-2 select-none">"</p>

              {/* Quote */}
              <p className="text-gray-700 text-base leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 my-6" />

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.business}, {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}