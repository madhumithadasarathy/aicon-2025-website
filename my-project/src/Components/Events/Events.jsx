// src/Components/Events/Events.jsx
import React, { useState, useEffect, useRef } from "react";
import { PlayArrow, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import title1 from "./../../../public/event1title.png";
import title2 from "./../../../public/event2title.png";
import title3 from "./../../../public/event3title.png";
import title4 from "./../../../public/event4title.png";

const SLIDE_INTERVAL_MS = 8000; // 8s wait time
const SLIDE_TRANSITION_MS = 800;

const SLIDES = [
  {
    img: "/event1.svg",
    titleImg: title1,
    titleAlt: "Code Clash",
    subtitle:
      "Timed trials. Hidden traps. Team up to outsmart the game. Solve the master puzzle, or watch the clock drain your fate.",
  },
  {
    img: "/event2.svg",
    titleImg: title2,
    titleAlt: "Pitch It!",
    subtitle:
      "Sell your vision. Dazzle the crowd. The ultimate pitching battle where only the boldest ideas survive.",
  },
  {
    img: "/event3.jpg",
    titleImg: title3,
    titleAlt: "Debug It",
    subtitle:
      "A tangled web of code errors awaits. Spot them, fix them, and prove your debugging prowess under pressure.",
  },
  {
    img: "/events4.jpg",
    titleImg: title4,
    titleAlt: "Brain Wars",
    subtitle:
      "Knowledge is your only weapon. Outsmart, outthink, and outscore in this ultimate battle of wits.",
  },
];

export default function Events() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // Auto-play with reset
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [index]);

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_INTERVAL_MS);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Title Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-3">
          <span role="img" aria-label="film">
            🎬
          </span>
          Choose Your Show
        </h1>
        <p className="mt-3 text-gray-400">
          One spotlight at a time—sit back and let the trailers roll.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${SLIDES.length * 100}%`,
            transform: `translateX(-${index * (100 / SLIDES.length)}%)`,
            transition: `transform ${SLIDE_TRANSITION_MS}ms ease-out`,
          }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className="relative w-full flex-shrink-0"
              style={{ flexBasis: `${100 / SLIDES.length}%` }}
            >
              {/* Background image */}
              <img
                src={s.img}
                alt={s.titleAlt}
                className="w-full h-[75vh] object-cover"
              />

              {/* Overlays */}
              <div className="absolute inset-0 z-10 bg-black/30" />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Bottom-aligned content */}
              <div className="absolute inset-0 z-20 flex items-end">
                <div className="p-6 md:p-12 max-w-2xl">
                  {/* Title as image or fallback text */}
                  {s.titleImg ? (
                    <img
                      src={s.titleImg}
                      alt={s.titleAlt}
                      className="w-56 sm:w-64 md:w-80 drop-shadow-[0_0_18px_rgba(0,0,0,0.7)]"
                      onError={(e) =>
                        (e.currentTarget.style.display = "none")
                      }
                    />
                  ) : (
                    <h2 className="text-3xl md:text-5xl font-bold">
                      {s.titleAlt}
                    </h2>
                  )}

                  {/* Subtitle */}
                  <p className="mt-3 text-white/90 text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.9)]">
                    {s.subtitle}
                  </p>

                  {/* Button */}
                  <button className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded flex items-center gap-2 hover:bg-red-700 transition">
                    <PlayArrow /> Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full z-30 hover:bg-black/70"
        >
          <ArrowBackIos />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full z-30 hover:bg-black/70"
        >
          <ArrowForwardIos />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
          {SLIDES.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-red-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
