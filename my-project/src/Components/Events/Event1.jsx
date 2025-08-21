// src/Components/Events/Event1.jsx
import React from "react";
import { motion } from "framer-motion";
import { PlayArrow } from "@mui/icons-material";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Event1() {
  return (
    <main className="bg-black text-white min-h-screen font-poppins">
      {/* ===== HERO ===== */}
      <section
        className="relative w-full h-[78vh] md:h-[86vh] overflow-hidden"
        aria-label="Code Clash Hero"
      >
        {/* BG */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/event1-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* red mist + dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-red-900/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

        {/* CONTENT LEFT */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 md:px-10 flex items-center">
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {/* “Stranger Things” style header area */}
            <motion.div
              variants={fadeUp}
              className="text-sm tracking-widest uppercase text-white/85"
            >
              AICON · Originals
            </motion.div>

            {/* Title image fallback to text */}
            <motion.div variants={fadeUp} className="mt-2">
              {true ? (
                <img
                  src="/event1-logo.png"
                  alt="Code Clash"
                  className="w-[320px] md:w-[420px] drop-shadow-[0_0_30px_rgba(255,0,0,0.25)]"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ) : (
                <h1 className="text-4xl md:text-6xl font-extrabold">Code Clash</h1>
              )}
            </motion.div>

            {/* Meta row */}
            <motion.div
              variants={fadeUp}
              className="mt-3 flex items-center gap-3 text-white/80 text-xs md:text-sm"
            >
              <span>2025</span>
              <span>•</span>
              <span>16+</span>
              <span>•</span>
              <span>1 Event</span>
            </motion.div>

            {/* Short synopsis */}
            <motion.p
              variants={fadeUp}
              className="mt-4 text-white/90 text-sm md:text-base leading-relaxed"
            >
              A strategic tech relay where every member races solo to earn clues, hints,
              or penalties. The faster you solve, the stronger your team becomes. When
              all return, the master puzzle awaits. Will you bring back the key… or the
              curse?
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
              <a
                href="#chapter-01"
                className="inline-flex items-center gap-2 rounded-md bg-[#FF0000] hover:bg-red-400 text-black font-semibold px-5 py-2 transition shadow-[0_0_18px_rgba(255,0,0,0.35)]"
              >
                <PlayArrow />
                Play
              </a>
              <a
                href="#synopsis"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 hover:border-white/50 text-white font-medium px-5 py-2 bg-white/0 hover:bg-white/10 transition"
              >
                More Info
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* subtle blend divider */}
      <div className="h-14 bg-gradient-to-b from-black via-red-900/20 to-transparent" />

      {/* ===== CHAPTER 01 ===== */}
      <section
        id="chapter-01"
        className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-12 mb-16"
      >
        {/* LEFT text column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="flex flex-col justify-center"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="uppercase tracking-wider text-white/80"
          >
            Chapter
          </motion.span>
          <motion.h3
            variants={fadeUp}
            custom={0.1}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_18px_rgba(255,0,0,0.25)]"
          >
            01
          </motion.h3>

          <motion.p
            id="synopsis"
            variants={fadeUp}
            custom={0.2}
            className="mt-4 text-white/85 leading-relaxed"
          >
            Each teammate faces a solo gauntlet. Complete challenges to win clues or
            suffer penalties that echo back to your squad. Your pace powers your team —
            slow feet feed the curse.
          </motion.p>

          {/* Tabs like the mock */}
          <motion.div variants={fadeUp} custom={0.3} className="mt-5 flex gap-3">
            <button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10">
              Beginning
            </button>
            <button className="px-4 py-1.5 rounded-full bg-[#ff0000] text-black font-semibold shadow-[0_0_16px_rgba(255,0,0,0.35)]">
              Synopsis
            </button>
            <button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10">
              Trailer
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT media card with neon border */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="relative rounded-xl overflow-hidden"
        >
          {/* neon frame */}
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-red-600 to-red-300 rounded-xl blur-md opacity-60" />
          <div className="relative rounded-xl overflow-hidden border border-red-500/30 bg-white/5">
            <div
              className="h-[260px] md:h-[340px] w-full"
              style={{
                backgroundImage: "url('/event1-card1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute top-3 left-4 text-white/90 text-sm font-medium">
              Code Clash
            </div>
            <div className="absolute bottom-4 right-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
              >
                ⟲ Return
              </a>
            </div>
          </div>
        </motion.article>
      </section>

      {/* red glow separator */}
      <div className="relative my-10">
        <div className="mx-auto h-[2px] max-w-6xl bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </div>

      {/* ===== CHAPTER 02 ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-12 pb-24">
        {/* LEFT media (swap order on desktop) */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="relative rounded-xl overflow-hidden order-2 md:order-1"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-red-600 to-red-300 rounded-xl blur-md opacity-60" />
          <div className="relative rounded-xl overflow-hidden border border-red-500/30 bg-white/5">
            <div
              className="h-[260px] md:h-[340px] w-full"
              style={{
                backgroundImage: "url('/event1-card2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute top-3 left-4 text-white/90 text-sm font-medium">
              Code Clash
            </div>
            <div className="absolute bottom-4 right-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
              >
                ⟲ Return
              </a>
            </div>
          </div>
        </motion.article>

        {/* RIGHT text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="flex flex-col justify-center order-1 md:order-2"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="uppercase tracking-wider text-white/80"
          >
            Chapter
          </motion.span>
          <motion.h3
            variants={fadeUp}
            custom={0.1}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_18px_rgba(255,0,0,0.25)]"
          >
            02
          </motion.h3>

          <motion.p variants={fadeUp} custom={0.2} className="mt-4 text-white/85">
            With all runners back, your squad attempts the **Master Puzzle**. Every
            clue counts, every penalty stings. One weak link can doom the team — but a
            perfect relay unlocks the endgame.
          </motion.p>

          {/* Tabs */}
          <motion.div variants={fadeUp} custom={0.3} className="mt-5 flex gap-3">
            <button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10">
              Beginning
            </button>
            <button className="px-4 py-1.5 rounded-full bg-[#ff0000] text-black font-semibold shadow-[0_0_16px_rgba(255,0,0,0.35)]">
              Synopsis
            </button>
            <button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10">
              Trailer
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== OPTIONAL: “More Like” row (placeholder) ===== */}
      {/* <section className="max-w-6xl mx-auto px-6 md:px-10 pb-16">
        <h4 className="text-lg md:text-xl font-semibold mb-4">More like Code Clash</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[1,2,3,4,5,6].map((i)=>(
            <div key={i} className="aspect-video rounded-md overflow-hidden bg-white/5 border border-white/10" />
          ))}
        </div>
      </section> */}

      {/* FOOTER STRIP */}
      <div className="py-8 text-center text-xs text-white/50">
        © AICON 2025 · Department of CSE (AIML), Sri Sairam Engineering College
      </div>
    </main>
  );
}
