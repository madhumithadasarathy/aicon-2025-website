import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/* ---------- BACKGROUND SLIDES ---------- */
const SLIDES = ["/st.jpg", "/wednesday.jpg", "/sg.jpg", "/vd.jpg"]; // place in /public

const INTERVAL_MS = 6000; // time each slide shows
const FADE_MS = 1000;     // cross-fade duration

/* ---------- MOTION VARIANTS ---------- */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

// Slide in from left → right
const slideLeftToRight = {
  hidden: { x: -24, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Preload images
  useEffect(() => {
    SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  // Transition style for background fade
  const transitionStyle = useMemo(
    () => ({ transition: `opacity ${FADE_MS}ms ease-in-out` }),
    []
  );

  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center">
      {/* Full-screen hero */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* === BACKGROUND SLIDER (cross-fade) === */}
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0"
            style={{
              ...transitionStyle,
              opacity: i === index ? 1 : 0,
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              willChange: "opacity",
            }}
            aria-hidden={i !== index}
          />
        ))}

        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-black/30" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent"
          aria-hidden
        />

        {/* Bottom blend → fades Hero into next section (no blank gap) */}
        <div
          className="pointer-events-none absolute bottom-0 inset-x-0 h-24
                     bg-gradient-to-b from-transparent via-black/70 to-black"
          aria-hidden
        />

        {/* LEFT SIDE CONTENT */}
        <div className="relative z-10 h-full w-full">
          <div className="flex h-full">
            <div className="flex-1 flex items-center">
              <motion.div
                className="px-6 md:px-12 max-w-xl"
                initial="hidden"
                animate="visible"
                variants={container}
              >
                <motion.div
                  className="text-xs tracking-widest uppercase text-white/80"
                  variants={slideLeftToRight}
                >
                  DEPARTMENT OF CSE - (AIML) · Sri Sairam Engineering College
                </motion.div>

                <motion.h1
                  className="mt-2 text-5xl md:text-7xl font-semibold leading-tight"
                  variants={slideLeftToRight}
                >
                  AICON <span className="text-[#FF0000]">2025</span>
                </motion.h1>

                <motion.div
                  className="mt-3 flex items-center gap-3 text-white/80 text-sm md:text-base"
                  variants={slideLeftToRight}
                >
                  <span>Sept 10</span>
                  <span>•</span>
                  <span>2025</span>
                  <span>•</span>
                  <span>16+</span>
                  <span>•</span>
                  <span>Season 1</span>
                </motion.div>

                <motion.p
                  className="mt-4 text-sm md:text-base text-white/85"
                  variants={slideLeftToRight}
                >
                  As the gates open, realms converge and shadows whisper.{" "}
                  <b>Wednesday</b>’s enigmas, <b>Stranger Things</b>’ hidden worlds,{" "}
                  <b>Squid Game</b>’s perilous trials, and <b>Vampire Diaries</b>’ timeless
                  drama intertwine, reborn through the magic of <b>AI</b>. Journey
                  through <b>Code Clash</b>, <b>Pitch It or Prompt It</b>,{" "}
                  <b>AI Debate Battle</b>, and <b>Objectify – Connect & Conquer</b>,
                  where every challenge is a tale, and every victory, a legend.
                </motion.p>

                <motion.div
                  className="mt-6 flex flex-wrap gap-3"
                  variants={slideLeftToRight}
                >
                  <a
                    href="#register"
                    className="inline-flex items-center gap-2 rounded-md bg-[#FF0000] hover:bg-red-400 text-black font-medium px-5 py-2 transition"
                    aria-label="Register for AICON'25"
                  >
                    <span>▶</span>
                    <span>Register</span>
                  </a>

                  <a
                    href="#explore"
                    className="inline-flex items-center gap-2 rounded-md border border-white/40 hover:border-white/70 text-white font-medium px-5 py-2 bg-white/0 hover:bg-white/10 transition"
                    aria-label="Explore AICON'25"
                  >
                    <span>ℹ</span>
                    <span>More Info</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* optional right spacer to keep left alignment like Netflix */}
            <div className="hidden lg:block flex-none w-1/3" />
          </div>
        </div>
      </section>
    </main>
  );
}
