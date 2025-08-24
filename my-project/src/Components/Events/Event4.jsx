// src/Components/Events/Event1.jsx
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

export default function Event1() {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen font-poppins">
      {/* ===== HERO ===== */}
      <section
        className="relative w-full min-h-screen overflow-hidden"
        aria-label="Objectify · Connect & Conquer Hero"
      >
        {/* BG */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/event4-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-[#2c1a1a]/50 pointer-events-none" />
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
              src="/event4title.png"
              alt="Objectify · Connect & Conquer"
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
          <motion.div variants={fadeUp} className="mt-2">
            <img
              src="/event4-logo.png"
              alt="Objectify – Connect & Conquer"
              className="w-[320px] md:w-[420px] drop-shadow-[0_0_35px_rgba(139,0,0,0.5)]"
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
            <span>12+</span>
            <span>•</span>
            <span>1 Event</span>
          </motion.div>

          {/* Short synopsis */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-white/90 text-sm md:text-base leading-relaxed"
          >
            Objectify – Connect & Conquer is a thrilling idea-matching challenge where 
            you’re given solutions first. Your mission: uncover the problem it solves. 
            Like a vampire unmasking secrets, clarity, speed, and wit decide your fate.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
            <a
              href="https://forms.gle/F8LSG89y3MiBXgXPA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#5c1c1c] hover:bg-[#7a2929] text-white font-semibold px-5 py-2 ]"
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
              className="absolute top-4 right-4 z-50 p-2 bg-[#5c1c1c] hover:bg-[#7a2929] rounded-full"
            >
              <Close className="text-white" />
            </button>
            <iframe
              src="/cnc.pdf"
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
        title="The First Bite"
        text="Each round begins with a solution. Teams must hunt down the right problem it answers."
        image="/event4-card1.jpg"
        reverse={false}
      />

      <Divider />

      <Chapter
        number="02"
        title="Blood Ties"
        text="Together in teams, players reason, debate, and connect the dots with dark precision."
        image="/event4-card2.jpg"
        reverse={true}
      />

      <Divider />

      <Chapter
        number="03"
        title="The Eternal Choice"
        text="Quick wits win. Justify your match with a clear, sharp explanation and earn your points."
        image="/event4-card3.jpg"
        reverse={false}
      />

      {/* ===== FINAL STAGE ===== */}
<section className="relative w-full min-h-screen flex items-start justify-center text-center overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/event4-master.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "top",
    }}
  />

  {/* 🔹 Black overlay only */}
  <div className="absolute inset-0 bg-black/70" />

  {/* 🔹 If you want both (radial red + black), keep this too */}
  {/* 
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(circle at center, rgba(139,0,0,0.6) 0%, rgba(0,0,0,0.95) 100%)`,
    }}
  />
  */}

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.35 }}
    variants={fadeUp}
    className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center"
  >
    <h2 className="text-4xl md:text-6xl font-regular uppercase tracking-widest text-white drop-shadow-lg">
      The Final Conquest
    </h2>
    <p className="mt-4 text-white/85 text-sm md:text-md leading-relaxed max-w-xl">
      In the last stage, your answers echo like vampire vows. 
      Judges’ verdicts are final only the sharpest minds survive this eternal night.
    </p>
  </motion.div>
</section>


      {/* ===== RULES ===== */}
      <section className="min-h-screen py-16 bg-black flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-regular uppercase tracking-widest mb-2 drop-shadow-lg text-[#7a2929]">
            <span className="text-white">Obey the</span> Dark Rules
          </h2>
          <p className="text-white/75 text-md md:text-md mb-12">
            A challenge born of shadows. Outwit, connect, and conquer within the time given.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <Rule
              img="/event4-rule1.jpg"
              title="Solution First"
              desc="Every round begins with a solution. Find the problem it answers."
            />
            <Rule
              img="/event4-rule2.jpg"
              title="Explain Smart"
              desc="Keep your justification short and sharp. Clarity earns points."
            />
            <Rule
              img="/event4-rule3.jpg"
              title="No Shortcuts"
              desc="No internet. No notes. Just pure wit and reasoning power."
            />
          </div>
        </div>
      </section>

      {/* ===== REGISTER ===== */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        aria-label="Objectify Register Section"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/registrationbg4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 px-6">
          <div className="text-sm tracking-widest uppercase text-white/70 mb-4">
            AICON · Originals
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Connect & Conquer
          </h2>
          <p className="text-white/75 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Step into the vampire’s game of wit. Each solution hides a secret—
            only the boldest teams uncover the truth.
          </p>
          <a
            href="https://forms.gle/F8LSG89y3MiBXgXPA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#5c1c1c] hover:bg-[#7a2929] text-white font-semibold text-lg"
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
    "01": "The Awakening",
    "02": "Blood Pact",
    "03": "Dark Verdict",
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

        {/* Chapter number */}
        <motion.div
          variants={fadeUp}
          custom={0.05}
          className="mb-3 text-[#7a2929] text-5xl md:text-6xl font-extrabold "
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

        {/* Buttons */}
        <motion.div variants={fadeUp} custom={0.3} className="mt-5 flex gap-3">
          <a
            href="https://forms.gle/F8LSG89y3MiBXgXPA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10"
          >
            Begin
          </a>
          <button className="px-4 py-1.5 rounded-full bg-[#5c1c1c] text-white font-semibold shadow-[0_0_16px_rgba(139,0,0,0.35)]">
            Synopsis
          </button>
          <button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10">
            Trailer
          </button>
        </motion.div>
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
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#5c1c1c] to-[#7a2929] rounded-xl blur-md opacity-60" />
        <div className="relative rounded-xl overflow-hidden border border-[#7a2929]/40 bg-white/5">
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
      <div className="mx-auto h-[2px] max-w-6xl bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
    </div>
  );
}

/* Rule Card */
function Rule({ img, title, desc }) {
  return (
    <div className="bg-zinc-900/60 p-6 rounded-xl border border-[#7a2929]/50 hover:scale-105 transition-transform shadow-lg">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold text-[#7a2929] mb-2">{title}</h3>
      <p className="text-white/85 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
