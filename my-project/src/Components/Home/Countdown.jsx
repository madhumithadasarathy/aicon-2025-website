import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function useCountdown(targetDateIso) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const end = new Date(targetDateIso).getTime();
    const now = Date.now();
    return Math.max(0, end - now);
  });

  useEffect(() => {
    const id = setInterval(() => {
      const end = new Date(targetDateIso).getTime();
      const now = Date.now();
      setTimeLeft(Math.max(0, end - now));
    }, 1000);
    return () => clearInterval(id);
  }, [targetDateIso]);

  const total = timeLeft;
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds, done: total === 0 };
}

export default function Countdown() {
  const TARGET = "2025-09-10T09:00:00"; // local time
  const { days, hours, minutes, seconds, done } = useCountdown(TARGET);

  return (
    <section
      className="relative overflow-hidden flex items-end justify-start w-full"
      style={{
        backgroundImage: "url('/vampirediaries.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* TOP blend */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-24
                   bg-gradient-to-b from-black via-black/70 to-transparent"
        aria-hidden
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0
                   bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_70%,rgba(0,0,0,0.8)_100%)]"
        aria-hidden
      />

      {/* Vertical vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-t
                   from-black/70 via-black/40 to-transparent pointer-events-none"
        aria-hidden
      />

      {/* BOTTOM-LEFT CONTENT (mobile-balanced) */}
      <motion.div
        className="
          relative z-10 flex flex-col items-start text-left
          px-6 sm:px-8 md:px-20 pb-12 max-w-xl
          -ml-4 sm:ml-0
        "
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        {/* Badge */}
        <motion.span
          className="text-red-600 text-xs sm:text-sm md:text-base font-semibold tracking-widest mb-3 uppercase drop-shadow-md"
          variants={item}
        >
          Mystic Falls Countdown
        </motion.span>

        {/* Title image (smaller on phones) */}
        <motion.img
          src="/bloodmoonrises.png"
          alt="Blood Moon Rises"
          className="w-56 sm:w-72 md:w-96 mb-3 sm:mb-4 drop-shadow-[0_0_18px_rgba(124,58,237,0.35)]"
          variants={item}
        />

        {/* Subtitles (slightly smaller on phones) */}
        <motion.p
          className="mt-1 text-white/85 text-[0.9rem] sm:text-sm md:text-base leading-relaxed"
          variants={item}
        >
          When daylight fades and the blood moon climbs, old vows break and destinies wake. <br />
          At the stroke, the veil thins — choose your side.
        </motion.p>

        {/* Countdown (tighter on phones) */}
        <motion.div
          className="mt-5 sm:mt-6 flex gap-2 sm:gap-3 md:gap-4"
          variants={item}
          aria-label="Countdown to AICON 2025"
        >
          {done ? (
            <span className="text-base sm:text-lg md:text-2xl font-semibold text-white">
              It begins. Welcome to Mystic Falls.
            </span>
          ) : (
            ["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
              const val = [days, hours, minutes, seconds][i];
              return (
                <div
                  key={label}
                  className="backdrop-blur-sm bg-white/10 border border-white/15 rounded-lg
                             px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 text-center"
                >
                  <div className="text-xl sm:text-2xl md:text-4xl font-bold tracking-wider text-red-600">
                    {String(val).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-widest text-white/80">
                    {label}
                  </div>
                </div>
              );
            })
          )}
        </motion.div>
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
