import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const headerVariants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.08 * i },
  }),
};

// Mobile menu animations
const mobileMenu = {
  hidden: { opacity: 0, y: -10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.06 },
  },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.18, ease: "easeIn" } },
};

const mobileItem = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export default function Header({ profile }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none font-poppins"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      {/* Left: Logo (hidden on small screens) */}
      <motion.div
        className="pointer-events-auto absolute top-5 left-10 hidden md:block"
        variants={itemVariants}
        custom={0}
      >
        <Link to="/" aria-label="AICON-2025 Home">
          <img src="/aicon.png" alt="AICON'25 Logo" className="h-10 w-auto select-none" />
        </Link>
      </motion.div>

      {/* Right: Desktop Nav (hidden on mobile) */}
      <nav className="pointer-events-auto absolute top-5 right-20 font-poppins hidden md:block">
        <ul className="flex items-center gap-2 rounded-full pl-5 pr-2 py-2">
          {["About", "Events", "Contact"].map((label, i) => (
            <motion.li key={label} variants={itemVariants} custom={i + 1}>
              <Link
                to={`/${label.toLowerCase()}`}
                className="px-4 py-2 rounded-full text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
              >
                {label}
              </Link>
            </motion.li>
          ))}
          <motion.li variants={itemVariants} custom={4}>
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-medium bg-[#FF0000] text-black hover:bg-red-400"
            >
              Register
            </a>
          </motion.li>
        </ul>
      </nav>

      {/* Optional profile avatar (desktop only so it doesn't clash with hamburger) */}
      {profile?.img && (
        <motion.div
          className="pointer-events-auto absolute top-4 right-4 hidden md:block"
          variants={itemVariants}
          custom={5}
        >
          <img
            src={profile.img}
            alt={profile.name ?? "Profile"}
            className="h-10 w-10 rounded-md object-cover ring-1 ring-white/30"
          />
        </motion.div>
      )}

      {/* Mobile: Hamburger Button (only on small screens) */}
      <div className="pointer-events-auto absolute top-4 right-4 md:hidden">
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/15 text-white"
        >
          {/* Hamburger / Close icons */}
          {!open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile: Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="pointer-events-auto md:hidden absolute top-14 right-4 left-4 z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenu}
          >
            <motion.ul
              className="rounded-2xl border border-white/15 bg-black/70 backdrop-blur-md shadow-xl overflow-hidden"
            >
              {[
                { label: "About", to: "/about" },
                { label: "Events", to: "/events" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <motion.li key={item.to} variants={mobileItem}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}

              {/* Divider */}
              <div className="h-px bg-white/10" />

              <motion.li variants={mobileItem} className="p-3">
                <a
                  href="https://forms.gle/your-google-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-2 rounded-full text-sm font-medium bg-[#FF0000] text-black hover:bg-red-400"
                  onClick={() => setOpen(false)}
                >
                  Register
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
