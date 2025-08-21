// src/Components/Events/Events.jsx
import React, { useState, useEffect, useRef } from "react";
import { PlayArrow, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import title1 from "./../../../public/event1title.png";
import title2 from "./../../../public/event2title.png";
import title3 from "./../../../public/clashfest.png";
import title4 from "./../../../public/connectandconquer.png";
import title5 from "./../../../public/title5.png";
import title6 from "./../../../public/paperpresentation.png";

const SLIDE_INTERVAL_MS = 8000;
const SLIDE_TRANSITION_MS = 800;

const SLIDES = [
  {
    img: "/event1.svg",
    titleImg: title1,
    titleAlt: "Code Clash",
    subtitle:
      "Timed trials. Hidden traps. Team up to outsmart the game. Solve the master puzzle, or watch the clock drain your fate.",
    routePath: "/events/code-clash",
  },
  {
    img: "/events2.jpg",
    titleImg: title2,
    titleAlt: "Pitch It!",
    subtitle:
      "Sell your vision. Dazzle the crowd. The ultimate pitching battle where only the boldest ideas survive.",
    routePath: "/events/pitch-it",
  },
  {
    img: "/stevent.jpg",
    titleImg: title3,
    titleAlt: "Debug It",
    subtitle:
      "A tangled web of code errors awaits. Spot them, fix them, and prove your debugging prowess under pressure.",
    routePath: "/events/debug-it",
  },
  {
    img: "/events4.jpg",
    titleImg: title4,
    titleAlt: "Brain Wars",
    subtitle:
      "Knowledge is your only weapon. Outsmart, outthink, and outscore in this ultimate battle of wits.",
    routePath: "/events/brain-wars",
  },
  {
    img: "/moneyheist.jpg",
    titleImg: title5,
    titleAlt: "Hack-n-Fun",
    subtitle:
      "Red masks. Bold moves. Breach the vaults of code and pull off the perfect digital heist—precision, speed, and nerve.",
    routePath: "/events/hack-n-fun",
  },
  {
    img: "/lucifer.jpg",
    titleImg: title6,
    titleAlt: "Paper Presentation",
    subtitle:
      "Charisma meets rigor. Command the room with a devilishly sharp narrative and evidence that leaves no doubt.",
    routePath: "/events/paper-presentation",
  },
];

export default function Events() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const navigate = useNavigate();

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

  const nextSlide = () => setIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Slider only */}
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
              {/* Background image - full screen, cover horizontally */}
              <img
                src={s.img}
                alt={s.titleAlt}
                className="w-full h-screen object-cover"
              />

              {/* Overlays */}
              <div className="absolute inset-0 z-10 bg-black/30" />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Bottom-aligned content */}
              <div className="absolute inset-0 z-20 flex items-end">
                <div className="p-6 md:p-12 max-w-2xl">
                  {s.titleImg ? (
                    <img
                      src={s.titleImg}
                      alt={s.titleAlt}
                      className="w-72 sm:w-96 md:w-[28rem] drop-shadow-[0_0_18px_rgba(0,0,0,0.7)]"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  ) : (
                    <h2 className="text-3xl md:text-5xl font-bold">{s.titleAlt}</h2>
                  )}

                  <p className="mt-3 text-white/90 text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.9)]">
                    {s.subtitle}
                  </p>

                  {/* Route to the event page */}
                  <button
                    onClick={() => navigate(s.routePath)}
                    className="mt-4 px-6 py-3 bg-red-600 text-black font-semibold rounded flex items-center gap-2 hover:bg-red-700 transition"
                  >
                    <PlayArrow /> Watch Trailer
                  </button>

                  {/* If you prefer a <Link>, use this instead:
                  <Link
                    to={s.routePath}
                    className="inline-flex mt-4 px-6 py-3 bg-red-600 text-black font-semibold rounded items-center gap-2 hover:bg-red-700 transition"
                  >
                    <PlayArrow /> Watch Trailer
                  </Link>
                  */}
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
