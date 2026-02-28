"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about", dropdown: null, twoCol: false },
  {
    label: "Locations",
    href: "/locations",
    dropdown: ["Werribee", "Hoppers Crossing", "Tarneit", "Melton"],
    twoCol: false,
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      "SEO",
      "Local SEO",
      "Technical SEO",
      "On-Page SEO",
      "Link Building",
      "SEO Audit",
      "LLM SEO",
      "Ecommerce SEO",
      "Shopify SEO",
      "WordPress SEO",
      "SaaS SEO",
      "Website Design",
    ],
    twoCol: true,
  },
  { label: "Contact", href: "/contact", dropdown: null, twoCol: false },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-[#F5C518] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#1a1a1a" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">
              Khalis <span className="text-[#F5C518]">Marketing</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
                  {link.label}
                  {link.dropdown && (
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                <AnimatePresence>
                  {link.dropdown && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className={`absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden ${
                        link.twoCol ? "w-172" : "w-48"
                      }`}
                    >
                      {link.twoCol ? (
                        /* Two-column grid for Services */
                        <div className="grid grid-cols-2 px-2 gap-0.5">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item}
                              href={`${link.href}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                              className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors group"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#F5C518] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                              {item}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        /* Single column */
                        link.dropdown.map((item) => (
                          <Link
                            key={item}
                            href={`${link.href}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                          >
                            {item}
                          </Link>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/seo-audit"
              className="inline-flex items-center px-5 py-2.5 bg-[#F5C518] hover:bg-[#e6b800] text-gray-900 font-semibold text-sm rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            >
              Get Your Free SEO Audit
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block h-0.5 bg-gray-700 rounded-full" />
              <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 bg-gray-700 rounded-full" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block h-0.5 bg-gray-700 rounded-full" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className={`ml-4 mt-1 ${link.twoCol ? "grid grid-cols-2 gap-0.5" : "space-y-0.5"}`}>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item}
                          href={`${link.href}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-3 py-2 text-xs text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <Link
                  href="/seo-audit"
                  className="block w-full text-center px-5 py-3 bg-[#F5C518] hover:bg-[#e6b800] text-gray-900 font-semibold text-sm rounded-full transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Your Free SEO Audit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}