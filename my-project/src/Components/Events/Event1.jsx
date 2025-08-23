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

        {/* CONTENT LEFT → bottom-left */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 md:px-10 flex items-end pb-16">
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

            {/* Title */}
            <motion.div variants={fadeUp} className="mt-2">
              <img
                src="/event1-logo.png"
                alt="Code Clash"
                className="w-[320px] md:w-[420px] drop-shadow-[0_0_30px_rgba(255,0,0,0.25)]"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
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
              Code Clash: Key to Victory is an electrifying strategic tech relay
              designed to test speed, logic, coding skills, and teamwork. Each
              team of 4 races against time—your squad’s fate depends on every
              member.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center gap-3"
            >
              <a
                href="https://forms.gle/A8d1PQQZxcicxMtT6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#FF0000] hover:bg-red-400 text-black font-semibold px-5 py-2 transition shadow-[0_0_18px_rgba(255,0,0,0.35)]"
              >
                <PlayArrow />
                Register
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


      {/* ===== CHAPTER 01 ===== */}
      <Chapter
        number="01"
        title="Debugging Sprint"
        text="Player 1 faces a bug-infested snippet of code. Speed and accuracy are
        key—every second counts, and one mistake could cost the entire team."
        image="/event1-card1.jpg"
        reverse={false}
      />

      <Divider />

      {/* ===== CHAPTER 02 ===== */}
      <Chapter
        number="02"
        title="Logic Gauntlet"
        text="Player 2 encounters a mind-bending logic puzzle. Pattern recognition
        and quick thinking will shape the path for the squad."
        image="/event1-card2.jpg"
        reverse={true} // 👉 this flips image left, text right
      />

      <Divider />

      {/* ===== CHAPTER 03 ===== */}
      <Chapter
        number="03"
        title="Algorithm Arena"
        text="Player 3 dives into an SQL query or algorithm task. Only efficiency
        and clear reasoning will bring back the final clues."
        image="/event1-card3.jpg"
        reverse={false}
      />

      {/* Master Puzzle Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/event1-master.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="relative z-10 max-w-3xl px-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Final Master Puzzle
          </h2>
          <p className="mt-4 text-white/85 text-lg md:text-xl leading-relaxed">
            The ultimate showdown awaits. A combined coding + logical riddle,
            solvable only with the hints earned by your teammates. Will your team
            unlock victory—or collapse under the curse?
          </p>
        </motion.div>
      </section>

      {/* Register Now Section */}
      <section className="py-16 text-center bg-gradient-to-b from-black via-red-900/20 to-black">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Prove Your Team?
        </h2>
        <a
          href="https://forms.gle/A8d1PQQZxcicxMtT6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#FF0000] text-black font-semibold text-lg hover:bg-red-400 transition shadow-[0_0_18px_rgba(255,0,0,0.35)]"
        >
          <PlayArrow />
          Register Now
        </a>
      </section>

      {/* FOOTER STRIP */}
      <div className="py-8 text-center text-xs text-white/50">
        © AICON 2025 · Department of CSE (AIML), Sri Sairam Engineering College
      </div>
    </main>
  );
}

/* Reusable Chapter Component */
function Chapter({ number, title, text, image, reverse }) {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
      {/* Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className={`flex flex-col justify-center ${
          reverse ? "order-2 md:order-2" : "order-2 md:order-1"
        }`}
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
          {number}
        </motion.h3>
        <motion.h4
          variants={fadeUp}
          custom={0.15}
          className="mt-2 text-2xl md:text-3xl font-semibold"
        >
          {title}
        </motion.h4>
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="mt-4 text-white/85 leading-relaxed"
        >
          {text}
        </motion.p>

        {/* Tabs */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          className="mt-5 flex gap-3"
        >
          <a
            href="https://forms.gle/A8d1PQQZxcicxMtT6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10"
          >
            Begin
          </a>
          <button className="px-4 py-1.5 rounded-full bg-[#ff0000] text-black font-semibold shadow-[0_0_16px_rgba(255,0,0,0.35)]">
            Synopsis
          </button>
          <button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10">
            Trailer
          </button>
        </motion.div>
      </motion.div>

      {/* Media */}
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className={`relative rounded-xl overflow-hidden ${
          reverse ? "order-1 md:order-1" : "order-1 md:order-2"
        }`}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-red-600 to-red-300 rounded-xl blur-md opacity-60" />
        <div className="relative rounded-xl overflow-hidden border border-red-500/30 bg-white/5">
          <div
            className="h-[260px] md:h-[340px] w-full"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute top-3 left-4 text-white/90 text-sm font-medium">
            Code Clash
          </div>
        </div>
      </motion.article>
    </section>
  );
}

/* Divider Component */
function Divider() {
  return (
    <div className="relative my-10">
      <div className="mx-auto h-[2px] max-w-6xl bg-gradient-to-r from-transparent via-red-500 to-transparent" />
    </div>
  );
}
