// src/components/events/Events.jsx
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: 60 }, // start from right
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Events() {
  return (
    <section
      className="relative overflow-hidden flex items-end justify-end w-full"
      style={{
        backgroundImage: "url('/events.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 
                   bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_70%,rgba(0,0,0,0.8)_100%)]"
        aria-hidden
      />

      {/* TOP blend */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-24
                   bg-gradient-to-b from-black via-black/70 to-transparent"
        aria-hidden
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-end text-right px-10 md:px-20 pb-12 max-w-xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.span
          className="text-white text-sm md:text-base font-semibold tracking-wider mb-3 uppercase drop-shadow-md"
          variants={item}
        >
          Featuring
        </motion.span>

        <motion.img
          src="/fourevents.png"
          alt="Events Title"
          className="w-96 md:w-[34rem] mb-4 drop-shadow-lg"
          variants={item}
        />

        <motion.p
          className="text-white/90 text-base md:text-lg leading-relaxed"
          variants={item}
        >
          Enter the shadows of <b>AICON 2025</b>, where every event unfolds like a
          chapter in a dark Wednesday tale. From the chilling trials of{" "}
          <b>Code Clash</b>, to the cryptic puzzles of <b>Reverse Prompting</b>,
          the sinister creativity of <b>Pitch It</b>, and the haunting thrill of{" "}
          <b>Hack-n-Fun</b> & <b>Objectify</b> — each challenge draws you deeper
          into our gothic saga.
        </motion.p>
      </motion.div>

      {/* BOTTOM blend */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-24
                   bg-gradient-to-t from-black via-black/70 to-transparent"
        aria-hidden
      />
    </section>
  );
}
