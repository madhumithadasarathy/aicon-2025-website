// src/Components/Events/Event2.jsx
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

export default function Event2() {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen font-poppins">
      {/* ===== HERO ===== */}
      <section
        className="relative w-full min-h-screen overflow-hidden"
        aria-label="Pitch It or Prompt It Hero"
      >
        {/* BG */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/event2-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* purple mist + dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-purple-900/30 pointer-events-none" />
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
              src="/pitchhero.png"
              alt="Event Title"
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
              src="/event2-logo.png"
              alt="Pitch It or Prompt It"
              className="w-[320px] md:w-[420px] drop-shadow-[0_0_30px_rgba(128,0,128,0.25)]"
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
            Pitch It or Prompt It is a creative, futuristic showdown where participants
            become startup founders—with AI as their co-founder! Build a startup concept
            using AI tools and pitch in true Shark Tank style. Smart prompts = better ideas!
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
            <a
              href="https://forms.gle/A8d1PQQZxcicxMtT6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-purple-700 hover:bg-purple-500 text-black font-semibold px-5 py-2 transition shadow-[0_0_18px_rgba(128,0,128,0.35)]"
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
              className="absolute top-4 right-4 z-50 p-2 bg-purple-600 hover:bg-purple-500 rounded-full"
            >
              <Close className="text-white" />
            </button>
            <iframe
              src="/pitchit.pdf"
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
        title="Brainstorming Bonanza"
        text="Participants collaborate with AI to generate innovative startup ideas using fun prompts and creativity."
        image="/event2-card1.jpg"
        reverse={false}
      />

      <Divider />

      <Chapter
        number="02"
        title="Prompt Power Hour"
        text="Teams use AI tools like ChatGPT, DALL·E, and Canva to bring their ideas to life visually and textually."
        image="/event2-card2.jpg"
        reverse={true}
      />

      <Divider />

      <Chapter
        number="03"
        title="Pitch Perfect"
        text="Teams present their AI-enhanced startup to judges, impressing with originality, creativity, and delivery."
        image="/event2-card3.jpg"
        reverse={false}
      />

      {/* ===== MASTER PUZZLE ===== */}
      <section className="relative w-full min-h-screen flex items-start justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, rgba(75,0,130,0.6) 0%, rgba(0,0,0,0.95) 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/event2-master.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="relative z-10 px-6 pt-12 md:pt-20"
        >
          <h2 className="text-4xl md:text-6xl font-regular uppercase tracking-widest text-white drop-shadow-lg">
            Final Pitch Stage
          </h2>
          <p className="mt-2 text-white/85 text-sm md:text-md leading-relaxed max-w-3xl">
            Teams must pitch their AI-powered startup concepts with flair and creativity.
            Who will impress the judges and claim ultimate victory?
          </p>
        </motion.div>
      </section>

      {/* ===== RULES ===== */}
      <section className="min-h-screen py-16 bg-black flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-regular uppercase tracking-widest mb-2 drop-shadow-lg text-purple-600">
            <span className="text-white">Follow the</span> Wicked Rules
          </h2>
          <p className="text-white/75 text-md md:text-md mb-12">
            Complete the prompts, create your startup, and pitch within time limits to survive!
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <Rule
              img="/rule1.jpg"
              title="Use AI Wisely"
              desc="Smart AI prompts are key—your idea grows only as much as your prompting skills."
            />
            <Rule
              img="/rule2.jpg"
              title="Time Bound"
              desc="Complete your startup concept within the given time, or face elimination."
            />
            <Rule
              img="/rule3.jpg"
              title="Pitch Perfect"
              desc="Deliver your pitch with clarity, confidence, and creativity to impress judges."
            />
          </div>
        </div>
      </section>

      {/* ===== REGISTER ===== */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        aria-label="Pitch It or Prompt It Register Section"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/registrationbg2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6">
          <div className="text-sm tracking-widest uppercase text-white/70 mb-4">
            AICON · Originals
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Step Into the AI Lab
          </h2>
          <p className="text-white/75 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Build, prompt, and pitch with AI—your co-founder in this futuristic startup race!
          </p>
          <a
            href="https://forms.gle/A8d1PQQZxcicxMtT6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-purple-700 hover:bg-purple-500 text-black font-semibold text-lg"
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
  const chapterImages = {
    "01": "/02-01.png",
    "02": "/02-02.png",
    "03": "/02-03.png",
  };

  const episodeNames = {
    "01": "AI Awakens",
    "02": "The Creative Spark",
    "03": "Pitch or Perish",
  };

  return (
    <section className="mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-12 mb-16 max-w-7xl">
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

        <motion.div variants={fadeUp} custom={0.05} className="mb-3">
          <img
            src={chapterImages[number]}
            alt={`Chapter ${number}`}
            className="w-20 md:w-28"
          />
        </motion.div>

        <motion.h4 variants={fadeUp} custom={0.15} className="mt-2 text-2xl md:text-3xl font-semibold">
          {title}
        </motion.h4>
        <motion.p variants={fadeUp} custom={0.2} className="mt-4 text-white/85 leading-relaxed">
          {text}
        </motion.p>

        <motion.div variants={fadeUp} custom={0.3} className="mt-5 flex gap-3">
          <a
            href="https://forms.gle/A8d1PQQZxcicxMtT6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10"
          >
            Begin
          </a>
          <button className="px-4 py-1.5 rounded-full bg-purple-700 text-black font-semibold shadow-[0_0_16px_rgba(128,0,128,0.35)]">
            Synopsis
          </button>
          <button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10">
            Trailer
          </button>
        </motion.div>
      </motion.div>

      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className={`relative rounded-xl overflow-hidden ${
          reverse ? "order-1 md:order-1" : "order-1 md:order-2"
        }`}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-purple-600 to-purple-400 rounded-xl blur-md opacity-60" />
        <div className="relative rounded-xl overflow-hidden border border-purple-500/30 bg-white/5">
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
      <div className="mx-auto h-[2px] max-w-6xl bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </div>
  );
}

/* Rule Card */
function Rule({ img, title, desc }) {
  return (
    <div className="bg-zinc-900/50 p-6 rounded-xl border border-purple-600/40 hover:scale-105 transition-transform shadow-lg">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold text-purple-400 mb-2">{title}</h3>
      <p className="text-white/85 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
