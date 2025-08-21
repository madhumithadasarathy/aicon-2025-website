// src/components/Events.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-start pt-32 text-center px-6">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-regular text-white mb-12 uppercase tracking-widest"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Choose Your Show
      </motion.h1>
    </section>
  );
}
