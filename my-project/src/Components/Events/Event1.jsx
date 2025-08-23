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

        {/* CONTENT → bottom-left */}
        <motion.div
          className="absolute bottom-16 left-6 md:left-10 max-w-xl z-10"
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

            {/* Open PDF Modal */}
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
              src="/codeclash.pdf"
              title="Event Poster"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}

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

      {/* ===== CHAPTER 02 (Reversed) ===== */}
      <Chapter
        number="02"
        title="Logic Gauntlet"
        text="Player 2 encounters a mind-bending logic puzzle. Pattern recognition
        and quick thinking will shape the path for the squad."
        image="/event1-card2.jpg"
        reverse={true} // flipped
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

{/* ===== MASTER PUZZLE ===== */}
<section className="relative w-full min-h-screen flex items-start justify-center text-center overflow-hidden">
  {/* Vignette gradient behind */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(circle at center, rgba(139,0,0,0.6) 0%, rgba(0,0,0,0.95) 100%)`,
    }}
  />

  {/* Background Image on top of gradient */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/event1-master.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* Dark overlay to enhance readability */}


  {/* Content */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.35 }}
    variants={fadeUp}
    className="relative z-10 px-6 pt-10 md:pt-10 max-w-3xl"
  >
    <h2 className="text-4xl md:text-6xl font-regular uppercase tracking-widest text-white drop-shadow-lg">
      Final Master Puzzle
    </h2>
    <p className="mt-2 text-white/85 text-sm md:text-md leading-relaxed">
      A combined coding + logical riddle, solvable only with the hints earned by your teammates. Will your team
      unlock victory or collapse under the curse?
    </p>
  </motion.div>
</section>


{/* ===== RULES SECTION ===== */}
<section className="min-h-screen py-16 bg-black flex items-center">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Main Title */}
<h2 className="text-4xl md:text-5xl font-regular uppercase tracking-widest mb-2 drop-shadow-lg text-red-600">
  <span className = "text-white ">Enter the</span> Upside Down
</h2>
{/* Small Subtitle */}
<p className="text-white/75 text-md md:text-md mb-12">
  Venture into the shadowy realms of Code Clash, follow these cryptic rules or risk being lost to the void.
</p>

    {/* Cards Row */}
    <div className="grid md:grid-cols-3 gap-12">
      {/* Rule 1 */}
      <div className="bg-zinc-900/50 p-6 rounded-xl border border-red-600/40 hover:scale-105 transition-transform shadow-lg">
        <img
          src="/rule1.jpg"
          alt="Team of 4"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-semibold text-red-400 mb-2">
          Team of 4
        </h3>
        <p className="text-white/85 text-sm leading-relaxed">
          Three players navigate the coding labyrinth to earn precious hint cards, while the fourth wields these clues to conquer the final master puzzle.
        </p>
      </div>

      {/* Rule 2 */}
      <div className="bg-zinc-900/50 p-6 rounded-xl border border-red-600/40 hover:scale-105 transition-transform shadow-lg">
        <img
          src="/rule2.jpg"
          alt="Bring Laptop"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-semibold text-red-400 mb-2">
          Bring Your Gear
        </h3>
        <p className="text-white/85 text-sm leading-relaxed">
          Every participant must bring their laptop and charger—only mortal tools can pierce the digital void.
        </p>
      </div>

      {/* Rule 3 */}
      <div className="bg-zinc-900/50 p-6 rounded-xl border border-red-600/40 hover:scale-105 transition-transform shadow-lg">
        <img
          src="/rule3.jpg"
          alt="Speed & Accuracy"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-semibold text-red-400 mb-2">
          Speed & Strategy
        </h3>
        <p className="text-white/85 text-sm leading-relaxed">
          Your pace, precision, and clever use of hints determine whether your squad survives or vanishes into the Upside Down.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* ===== REGISTER NOW ===== */}
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

      {/* ===== FOOTER ===== */}
      <div className="py-8 text-center text-xs text-white/50">
        © AICON 2025 · Department of CSE (AIML), Sri Sairam Engineering College
      </div>
    </main>
  );
}

/* Reusable Chapter Component */
function Chapter({ number, title, text, image, reverse }) {
  // Map the numbers to image paths
  const chapterImages = {
    "01": "/01.png",
    "02": "/02.png",
    "03": "/03.png",
  };

  return (
    <section className="mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-12 mb-16 max-w-7xl">
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
          className="uppercase tracking-wider text-white/80 mb-2"
        >
          Chapter
        </motion.span>

        {/* Replace number text with image */}
        <motion.div variants={fadeUp} custom={0.05} className="mb-3">
          <img
            src={chapterImages[number]}
            alt={`Chapter ${number}`}
            className="w-20 md:w-28"
          />
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
