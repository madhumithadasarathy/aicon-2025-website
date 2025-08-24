// src/Components/Events/Event6.jsx
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

export default function Event6() {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen font-poppins">
      {/* ===== HERO ===== */}
      <section
        className="relative w-full min-h-screen overflow-hidden"
        aria-label="Lucifer · Paper Presentation Hero"
      >
        {/* BG */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/lucifer-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-[#1a1a1a]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

        {/* CONTENT */}
        <motion.div
          className="absolute bottom-16 left-6 md:left-10 max-w-xl z-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {/* Title logo */}
          <motion.div variants={fadeUp} className="mb-4 text-left">
            <img
              src="/eureka.png"
              alt="Lucifer · Paper Presentation"
              className="w-[220px] md:w-[300px]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="text-sm tracking-widest uppercase text-white/85"
          >
            AICON · Originals
          </motion.div>

          <motion.div variants={fadeUp} className="mt-2">
            <img
              src="/event6-logo.png"
              alt="Lucifer – Paper Presentation"
              className="w-[320px] md:w-[420px] drop-shadow-[0_0_35px_rgba(192,192,192,0.7)]"
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
            <span>PG/UG</span>
            <span>•</span>
            <span>1 Event</span>
          </motion.div>

          {/* Short synopsis */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-white/90 text-sm md:text-base leading-relaxed"
          >
            “Research is to see what everybody else has seen, and to think what
            nobody else has thought.” Step into the spotlight where research
            meets creativity! Transform your ideas into powerful presentations
            and prove that your research can make an impact. Gear up, bring your
            ideas, and present with passion!
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
            <a
              href="https://forms.gle/tD1t2tDi8di9nbwS7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white hover:bg-zinc-300 text-black font-semibold px-5 py-2"
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
              className="absolute top-4 right-4 z-50 p-2 bg-zinc-700 hover:bg-zinc-500 rounded-full"
            >
              <Close className="text-white" />
            </button>
            <iframe
              src="/Eureka.pdf"
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
        title="Hellfire Insights"
        text="Signal, Image, and Video processing reborn in Lucifer’s flames — clarity forged through chaos."
        image="/event6-card1.jpg"
        reverse={false}
      />

      <Divider />

      <Chapter
        number="02"
        title="Sins of Data"
        text="Data Science & Cybersecurity — protect the secrets, expose the lies, defend the kingdom of knowledge."
        image="/event6-card2.jpg"
        reverse={true}
      />

      <Divider />

      <Chapter
        number="03"
        title="Angels of AI"
        text="AI across Industry, Education, Healthcare & Smart Cities — divine intelligence or devil’s bargain?"
        image="/event6-card3.jpg"
        reverse={false}
      />

      <Divider />

      <Chapter
        number="04"
        title="Infernal Networks"
        text="Embedded Systems, IoT & Advanced Communication — the underworld of connections never sleeps."
        image="/event6-card4.jpg"
        reverse={true}
      />

      {/* ===== FINAL STAGE ===== */}
      <section className="relative w-full min-h-screen flex items-start justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/event6-master.jpg')",
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
          className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-regular uppercase tracking-widest text-white drop-shadow-lg">
            Devil’s Verdict
          </h2>
          <p className="mt-4 text-white/85 text-sm md:text-md leading-relaxed max-w-xl">
            Only the boldest presenters survive. The Devil listens — will your
            research tempt him, or fall into silence?
          </p>
        </motion.div>
      </section>

      {/* ===== RULES ===== */}
      <section className="min-h-screen py-16 bg-black flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-regular uppercase tracking-widest mb-2 drop-shadow-lg text-silver-400">
            <span className="text-white">Commandments of</span> Lucifer
          </h2>
          <p className="text-white/75 text-md md:text-md mb-12">
            Presentations that echo through Hell’s gates. Precision, fire, and
            persuasion decide your fate.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <Rule
              img="/event6-rule1.jpg"
              title="Original Sin"
              desc="Your work must be original. Plagiarism condemns you to eternal rejection."
            />
            <Rule
              img="/event6-rule2.jpg"
              title="Hellfire Clarity"
              desc="Deliver with conviction and sharpness. Confusion is the Devil’s enemy."
            />
            <Rule
              img="/event6-rule3.png"
              title="Time’s Judgment"
              desc="Respect the clock — Lucifer waits for no one. Cross the limit, and pay the price."
            />
          </div>
        </div>
      </section>

      {/* ===== REGISTER ===== */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        aria-label="Lucifer Paper Presentation Register Section"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/registrationbg6.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 px-6">
          <div className="text-sm tracking-widest uppercase text-white/70 mb-4">
            AICON · Originals
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-silver-300 drop-shadow-lg mb-4">
            Lucifer’s Paper Presentation
          </h2>
          <p className="text-white/75 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Step into Lucifer’s realm. Transform your research into fire and
            prove your brilliance before the Devil himself.
          </p>
          <a
            href="https://forms.gle/tD1t2tDi8di9nbwS7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white hover:bg-zinc-300 text-black font-semibold text-lg"
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
  return (
    <section className="mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-12 mb-16 max-w-7xl">
      {/* Left side text */}
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
          className="uppercase tracking-wider text-white mb-2"
        >
          Theme
        </motion.span>

        <motion.div
          variants={fadeUp}
          custom={0.05}
          className="mb-3 text-zinc-400 text-5xl md:text-6xl font-extrabold"
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
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-zinc-600 to-silver-400 rounded-xl blur-md opacity-60" />
        <div className="relative rounded-xl overflow-hidden border border-silver-300/40 bg-white/5">
          <div
            className="h-[260px] md:h-[340px] w-full"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </motion.article>
    </section>
  );
}

/* Divider */
function Divider() {
  return (
    <div className="relative my-10">
      <div className="mx-auto h-[2px] max-w-6xl bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
    </div>
  );
}

/* Rule Card */
function Rule({ img, title, desc }) {
  return (
    <div className="bg-zinc-900/60 p-6 rounded-xl border border-silver-300/50 hover:scale-105 transition-transform shadow-lg">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-semibold text-silver-300 mb-2">{title}</h3>
      <p className="text-white/85 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
