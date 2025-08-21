// src/components/about/About.jsx
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: -60 }, // start from left
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 }, // children also slide from left
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      className="relative overflow-hidden flex items-end justify-start w-full"
      style={{
        backgroundImage: "url('/about.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh", // full screen height
      }}
    >
      {/* BOTTOM-LEFT CONTENT (animates when in view) */}
      <motion.div
        className="relative z-10 flex flex-col items-start text-left px-10 md:px-20 pb-12 max-w-xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }} // triggers when ~35% visible
      >
        {/* Subtitle */}
        <motion.span
          className="text-sm md:text-base font-semibold tracking-widest mb-3 uppercase drop-shadow-md text-white"
          variants={item}
        >
          EPISODE 1
        </motion.span>

        {/* Title Image */}
        <motion.img
          src="/seasonone.png"
          alt="AICON Title"
          className="w-96 md:w-[34rem] mb-4 drop-shadow-lg"
          variants={item}
        />

        {/* Description */}
        <motion.p
          className="text-white/90 text-base md:text-lg leading-relaxed"
          variants={item}
        >
          Dive into a world where technology and creativity collide.{" "}
          <b>AICON 2025</b> brings together the thrill of AI-driven challenges,
          immersive experiences, and unforgettable competitions inspired by the
          energy of your favorite shows and the innovation of tomorrow.
        </motion.p>
      </motion.div>
    </section>
  );
}
