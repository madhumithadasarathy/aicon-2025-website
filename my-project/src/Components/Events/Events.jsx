// src/components/Events.jsx
import React from "react";
import { motion } from "framer-motion";

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

export default function Events() {
  return (
    <section className="w-full min-h-screen bg-black text-white">
      {/* Page title as image */}
      <div className="pt-28 pb-8 px-6 md:px-10 text-center">
        <motion.img
          src="/events/choose-your-show.png"
          alt="Choose Your Show"
          className="mx-auto w-[70%] max-w-[720px] md:w-[55%] drop-shadow-[0_0_18px_rgba(255,255,255,0.15)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.p
          className="mt-3 text-white/80"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          Swipe across and dive into the trailer for each event.
        </motion.p>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

        <div
          className="
            flex gap-6 px-6 md:px-10 pb-16
            overflow-x-auto scroll-smooth snap-x snap-mandatory
          "
          style={{ scrollbarWidth: "none" }}
        >
          {SLIDES.map((s, i) => (
            <article
              key={i}
              className="
                relative flex-none snap-center
                w-[92vw] sm:w-[88vw] md:w-[86vw] lg:w-[82vw]
                h-[78vh] md:h-[80vh]
                rounded-2xl overflow-hidden
                border border-white/10 bg-white/5
                mx-auto
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
              {/* Strong bottom gradient to anchor text near bottom */}
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
    </section>
  );
}
