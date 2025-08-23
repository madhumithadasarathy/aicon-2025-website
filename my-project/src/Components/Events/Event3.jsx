// src/Components/Events/Event3.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayArrow, Close } from "@mui/icons-material";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Event3() {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen font-poppins">
      {/* ===== HERO ===== */}
      <section
        className="relative w-full min-h-screen overflow-hidden"
        aria-label="AI Clash Fest Hero"
      >
        {/* BG */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/event3-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        {/* red glow + dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-red-900/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

        {/* CONTENT → bottom-left */}
        <motion.div
          className="absolute bottom-16 left-6 md:left-10 max-w-xl z-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {/* Event title logo */}
          <motion.div variants={fadeUp} className="mb-4 text-left">
            <img
              src="/clashfest.png"
              alt="AI Clash Fest"
              className="w-[220px] md:w-[300px]"
            />
          </motion.div>

          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="text-sm tracking-widest uppercase text-white/85"
          >
            AICON · Originals
          </motion.div>

          {/* Title */}


          {/* Meta row */}
          <motion.div
            variants={fadeUp}
            className="mt-3 flex items-center gap-3 text-white/80 text-xs md:text-sm"
          >
            <span>2025</span>
            <span>•</span>
            <span>12+</span>
            <span>•</span>
            <span>1 Event</span>
          </motion.div>

          {/* Short synopsis */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-white/90 text-sm md:text-base leading-relaxed"
          >
            Get ready for the ultimate battle of brains and creativity. AI Clash
            Fest challenges teams of two to think fast, debate sharp, and outwit
            the competition — Squid Game style. Will your team survive the game?
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
            <a
              href="https://forms.gle/o6L5U8pKzYV5o6b26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-red-700 hover:bg-red-500 text-black font-semibold px-5 py-2 transition shadow-[0_0_18px_rgba(255,0,0,0.35)]"
            >
              <PlayArrow />
              Register
            </a>

            <button
              onClick={() => setPdfOpen(true)}
              className="inline-flex items-center gap-2 rounded-md border border-white/25 hover:border-white/50 text-white font-medium px-5 py-2 bg-white/0 hover:bg-white/10 transition"
            >
              More Info
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== PDF Modal ===== */}
      {pdfOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-5xl h-full md:h-[90vh] bg-black rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setPdfOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-red-600 hover:bg-red-500 rounded-full"
            >
              <Close className="text-white" />
            </button>
            <iframe
              src="/clashfest.pdf"
              title="Event Poster"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}

      {/* ===== CHAPTERS ===== */}
      <Chapter
        number="01"
        title="AI Image Hunt"
        text="Teams will face a series of cryptic images and must deduce the word or concept hidden within. Precision, quick wit, and teamwork are the keys to survival."
        image="/event3-card1.jpg"
        reverse={false}
      />

      <Divider />

      <Chapter
        number="02"
        title="The Great Debate of AI"
        text="With debate topics drawn at random, teams prepare arguments in minutes before clashing in front of judges. Confidence, clarity, and bold rebuttals earn survival points."
        image="/event3-card2.jpg"
        reverse={true}
      />

      {/* ===== MASTER ROUND ===== */}
<section className="relative w-full min-h-screen flex items-start justify-center text-center overflow-hidden">
  {/* Red radial overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(circle at center, rgba(255,0,0,0.6) 0%, rgba(0,0,0,0.95) 100%)`,
    }}
  />

  {/* Background image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/event3-card3.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    }}
  />

  {/* Black overlay on top of bg image */}
  <div className="absolute inset-0 bg-black opacity-60" />

  {/* Content */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.35 }}
    variants={fadeUp}
    className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center"
  >
    <h2 className="text-4xl md:text-6xl font-regular uppercase tracking-widest text-white drop-shadow-lg">
      Survival Round
    </h2>
    <p className="mt-4 text-white/85 text-sm md:text-md leading-relaxed max-w-xl">
      Only the sharpest teams make it here. With all eyes on you, every
      argument and idea counts. Will you rise victorious or fall to the
      game?
    </p>
  </motion.div>
</section>


      {/* ===== RULES ===== */}
      <section className="min-h-screen py-16 bg-black flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-regular uppercase tracking-widest mb-2 drop-shadow-lg text-red-600">
            <span className="text-white">Survive by the</span> Rules
          </h2>
          <p className="text-white/75 text-md md:text-md mb-12">
            Fail to follow them, and your team risks elimination from the game.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <Rule
              img="/event3-rule1.jpg"
              title="Team of Two"
              desc="Work in perfect sync — your survival depends on teamwork and shared wits."
            />
            <Rule
              img="/event3-rule2.jpg"
              title="Time Limit"
              desc="Rounds are strictly timed. Cross the limit and you’re out."
            />
            <Rule
              img="/event3-rule3.jpg"
              title="Stay Sharp"
              desc="Quick thinking, precision, and confidence will keep you alive in the game."
            />
          </div>
        </div>
      </section>

      {/* ===== REGISTER ===== */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        aria-label="AI Clash Fest Register Section"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/registrationbg3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6">
          <div className="text-sm tracking-widest uppercase text-white/70 mb-4">
            AICON · Originals
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Dare to Play the Game
          </h2>
          <p className="text-white/75 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Enter the arena of AI Clash Fest. Outsmart, outwit, and outlast 
            or face elimination.
          </p>
          <a
            href="https://forms.gle/o6L5U8pKzYV5o6b26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-red-700 hover:bg-red-500 text-black font-semibold text-lg"
          >
            <PlayArrow />
            Register Now
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <div className="py-8 text-center text-xs text-white/50">
        © AICON 2025 · Department of CSE (AIML), Sri Sairam Engineering College
      </div>
    </main>
  );
}

/* Chapter Component */
function Chapter({ number, title, text, image, reverse }) {
  const episodeNames = {
    "01": "Image Hunt Begins",
    "02": "Clash of Minds",
  };

  return (
    <section className="mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-12 mb-16 max-w-7xl">
      {/* Left side text content */}
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
          className="uppercase tracking-wider text-white/80 mb-2"
        >
          Chapter
        </motion.span>

        <motion.div
          variants={fadeUp}
          custom={0.05}
          className="mb-3 text-red-600 text-5xl md:text-6xl font-extrabold "
        >
          {number}
        </motion.div>

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
      </motion.div>

      {/* Right side card */}
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className={`relative rounded-xl overflow-hidden ${
          reverse ? "order-1 md:order-1" : "order-1 md:order-2"
        }`}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-red-600 to-red-400 rounded-xl blur-md opacity-60" />
        <div className="relative rounded-xl overflow-hidden border border-red-500/30 bg-white/5">
          <div
            className="h-[260px] md:h-[340px] w-full"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute top-3 left-4 text-white/90 text-sm md:text-base font-medium">
            {episodeNames[number]}
          </div>
        </div>
      </motion.article>
    </section>
  );
}

/* Divider */
function Divider() {
  return (
    <div className="relative my-10">
      <div className="mx-auto h-[2px] max-w-6xl bg-gradient-to-r from-transparent via-red-500 to-transparent" />
    </div>
  );
}

/* Rule Card */
function Rule({ img, title, desc }) {
  return (
    <div className="bg-zinc-900/50 p-6 rounded-xl border border-red-600/40 hover:scale-105 transition-transform shadow-lg">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold text-red-400 mb-2">{title}</h3>
      <p className="text-white/85 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
