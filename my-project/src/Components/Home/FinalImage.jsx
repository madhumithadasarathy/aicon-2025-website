import React from "react";
import { motion } from "framer-motion";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FinalImage() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.img
        src="/ep.png"
        alt="Final Scene"
        className="w-full h-full object-contain brightness-110 drop-shadow-[0_0_35px_rgba(220,38,38,0.75)]"
        // 🔴 red glow (DC2626 is Tailwind red-600)
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      />

      {/* Optional vignette overlay for mood */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />
    </section>
  );
}
