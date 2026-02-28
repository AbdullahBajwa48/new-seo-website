"use client";

import { motion} from "framer-motion";
import Link from "next/link";

const cards = [
  {
    label: "SEO",
    gradient: "linear-gradient(145deg, #ff7f5e 0%, #f45c3a 60%, #e03d20 100%)",
    shadow: "rgba(240,90,50,0.45)",
    rotate: -22,
    x: "-155px",
    y: "40px",
    floatDuration: 3.2,
    floatDelay: 0,
  },
  {
    label: "TRAFFIC",
    gradient: "linear-gradient(145deg, #b8a4ff 0%, #8b74f5 60%, #6b52e8 100%)",
    shadow: "rgba(130,110,240,0.45)",
    rotate: -8,
    x: "-52px",
    y: "10px",
    floatDuration: 3.8,
    floatDelay: 0.6,
  },
  {
    label: "RANK",
    gradient: "linear-gradient(145deg, #a8f0b8 0%, #5ed080 60%, #38b85e 100%)",
    shadow: "rgba(80,200,100,0.45)",
    rotate: 8,
    x: "52px",
    y: "10px",
    floatDuration: 3.5,
    floatDelay: 1.1,
  },
  {
    label: "LEADS",
    gradient: "linear-gradient(145deg, #a8d8ff 0%, #5aaaf5 60%, #3080e0 100%)",
    shadow: "rgba(70,150,230,0.45)",
    rotate: 22,
    x: "155px",
    y: "40px",
    floatDuration: 4.0,
    floatDelay: 1.6,
  },
];

// ── Shared card face ──────────────────────────────────────────────────────────
function CardFace({ card }: { card: typeof cards[0] }) {
  return (
    <>
      <span
        className="text-white font-black text-2xl sm:text-3xl tracking-widest relative z-10"
        style={{
          fontFamily: "'Arial Black', Arial, sans-serif",
          textShadow: "0 2px 18px rgba(0,0,0,0.22)",
          letterSpacing: "0.1em",
        }}
      >
        {card.label}
      </span>

      {/* Glossy sheen */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background:
            "linear-gradient(150deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.05) 45%, transparent 100%)",
        }}
      />
      {/* Bottom depth */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 rounded-b-3xl pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.12), transparent)" }}
      />
    </>
  );
}

// ── Mobile: simple 2×2 grid, no animation ────────────────────────────────────
function MobileCards() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xs mx-auto">
      {cards.map((card) => (
        <div
          key={card.label}
          className="relative flex items-center justify-center w-full rounded-3xl overflow-hidden select-none"
          style={{
            aspectRatio: "4/5",
            background: card.gradient,
            boxShadow: `0 16px 40px ${card.shadow}, 0 4px 12px rgba(0,0,0,0.1)`,
          }}
        >
          <CardFace card={card} />
        </div>
      ))}
    </div>
  );
}

// ── Desktop: absolute fan with floating animation on each card ────────────────
function DesktopCards() {
  return (
    <div className="relative w-full max-w-2xl mx-auto" style={{ height: "320px" }}>
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          // Entry
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1 + i * 0.12,
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          // Continuous float on the CARD itself
          animate={{ y: [0, -16, 0] }}
          // @ts-ignore framer supports mixed animate + whileInView via variants trick
          // We use a wrapper below to separate entry from float
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            x: `calc(-50% + ${card.x})`,
            y: `calc(-50% + ${card.y})`,
            rotate: card.rotate,
            zIndex: i + 1,
            background: card.gradient,
            boxShadow: `0 28px 64px ${card.shadow}, 0 8px 20px rgba(0,0,0,0.13)`,
          }}
          className="w-48 h-56 lg:w-52 lg:h-60 rounded-3xl relative flex items-center justify-center cursor-default select-none overflow-hidden"
          whileHover={{ scale: 1.08, zIndex: 50, transition: { duration: 0.2 } }}
        >
          <CardFace card={card} />
        </motion.div>
      ))}
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function TrustSection() {
  return (
    <section className="w-full bg-[#f0f0eb] py-24 px-4 flex flex-col items-center overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          An SEO Agency Melbourne
          <br />
          <span className="inline-flex items-center gap-3 flex-wrap justify-center mt-2">
            <span className="px-4 py-1 rounded-lg text-gray-900 italic" style={{ background: "#F5C518" }}>
              Businesses
            </span>
            <span>Can Trust</span>
          </span>
        </h2>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-16 md:mb-28"
      >
        <Link
          href="/seo-audit"
          className="px-8 py-3.5 bg-[#F5C518] hover:bg-[#e6b800] text-gray-900 font-semibold text-sm rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
        >
          Get Your Free SEO Audit
        </Link>
      </motion.div>

      {/* Mobile grid (shown below md) */}
      <div className="block md:hidden w-full px-4">
        <MobileCards />
      </div>

      {/* Desktop fan (shown at md and above) */}
      <div className="hidden md:block w-full">
        <DesktopFan />
      </div>

    </section>
  );
}

// ── Desktop fan with separated entry + float animations ──────────────────────
function DesktopFan() {
  return (
    <div className="relative w-full max-w-2xl mx-auto" style={{ height: "320px" }}>
      {cards.map((card, i) => (
        // Outer: handles entry animation
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1 + i * 0.12,
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            x: `calc(-50% + ${card.x})`,
            y: `calc(-50% + ${card.y})`,
            rotate: card.rotate,
            zIndex: i + 1,
          }}
          className="w-48 h-56 lg:w-52 lg:h-60"
        >
          {/* Inner: handles float + hover */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: card.floatDuration,
              delay: card.floatDelay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08, zIndex: 50, transition: { duration: 0.2 } }}
            style={{
              background: card.gradient,
              boxShadow: `0 28px 64px ${card.shadow}, 0 8px 20px rgba(0,0,0,0.13)`,
            }}
            className="w-full h-full rounded-3xl relative flex items-center justify-center cursor-default select-none overflow-hidden"
          >
            <CardFace card={card} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}