// src/components/Events.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

const SLIDES = [
  {
    img: "/events/slide-codeclash.jpg",
    titleImg: "/events/logos/codeclash.png",
    titleAlt: "Code Clash",
    subtitle:
      "Timed trials. Hidden traps. Team up to outsmart the game. Solve the master puzzle, or watch the clock drain your fate.",
    cta: "#codeclash-trailer",
  },
  {
    img: "/events/slide-pitch.jpg",
    titleImg: "/events/logos/pitchit.png",
    titleAlt: "Pitch It or Prompt It",
    subtitle:
      "Posters, logos, and one-minute madness. Turn prompts into pop-culture with AI—fast, bold, and binge-worthy.",
    cta: "#pitch-trailer",
  },
  {
    img: "/events/slide-debate.jpg",
    titleImg: "/events/logos/debate.png",
    titleAlt: "AI Debate Battle",
    subtitle:
      "Pick a side. Wield rhetoric. Or let the machine speak. The academy-core showdown where logic cuts the loudest.",
    cta: "#debate-trailer",
  },
  {
    img: "/events/slide-objectify.jpg",
    titleImg: "/events/logos/objectify.png",
    titleAlt: "Objectify — Connect & Conquer",
    subtitle:
      "Dramatic prompts. Quick minds. Stitch ideas into stories that bite. Every decision writes the next scene.",
    cta: "#objectify-trailer",
  },
];

const AUTOPLAY_MS = 4500;     // auto-advance delay
const SLIDE_TRANSITION_MS = 700; // css transition duration

export default function Events() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="w-full min-h-screen bg-black text-white">
      {/* Title row with MUI cinema icon (no image title) */}
      <div className="pt-28 pb-6 px-6 md:px-10 text-center">
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <LocalMoviesIcon sx={{ fontSize: 36 }} className="text-red-500" />
          <h1 className="text-3xl md:text-5xl font-bold">Choose Your Show</h1>
        </motion.div>
        <motion.p
          className="mt-2 text-white/80"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          One spotlight at a time—sit back and let the trailers roll.
        </motion.p>
      </div>

      {/* ONE-AT-A-TIME CAROUSEL */}
      <div className="relative w-full overflow-hidden">
        {/* Track */}
        <div
          className="flex"
          style={{
            width: `${SLIDES.length * 100}%`,
            transform: `translateX(-${index * (100 / SLIDES.length)}%)`,
            transition: `transform ${SLIDE_TRANSITION_MS}ms ease-out`,
          }}
        >
          {SLIDES.map((s, i) => (
            <article
              key={i}
              className="
                relative flex-none w-full
                h-[78vh] md:h-[80vh]
                rounded-none md:rounded-2xl overflow-hidden
                border-0 md:border md:border-white/10 bg-white/5
              "
            >
              {/* Background image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${s.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden
              />

              {/* Readability overlays */}
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Bottom-aligned content */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-6 md:p-10">
                  <div className="max-w-3xl">
                    {/* Title as image */}
                    <img
                      src={s.titleImg}
                      alt={s.titleAlt}
                      className="w-56 sm:w-64 md:w-80 drop-shadow-[0_0_18px_rgba(0,0,0,0.5)]"
                    />

                    {/* Subtitle */}
                    <p className="mt-3 text-white/85 text-sm md:text-base leading-relaxed">
                      {s.subtitle}
                    </p>

                    {/* CTA */}
                    <a
                      href={s.cta}
                      className="
                        mt-5 inline-flex items-center gap-2
                        rounded-md bg-[#FF0000] hover:bg-red-400
                        text-black font-medium px-5 py-2 transition
                        shadow-[0_0_16px_rgba(255,0,0,0.25)]
                      "
                      aria-label={`Watch trailer for ${s.titleAlt}`}
                    >
                      {/* Play icon */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="translate-y-[1px]"
                      >
                        <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
                      </svg>
                      <span>Watch Trailer</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Optional: tiny dots indicator */}
      <div className="mt-4 mb-10 flex items-center justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition
              ${i === index ? "bg-red-500" : "bg-white/30 hover:bg-white/60"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
