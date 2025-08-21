import React, { useRef, useState } from "react";

/**
 * Usage: <Intro onFinish={() => ...} />
 * - Shows a simple intro poster (bg + title + subtitle + Enter)
 * - After "Enter", plays a muted intro video
 * - Calls onFinish() when the video ends (or user clicks Skip)
 */
export default function Intro({ onFinish }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleEnter = async () => {
    setPlaying(true);
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;       // autoplay-friendly
    v.playsInline = true; // iOS inline
    try {
      await v.play();
    } catch {
      v.controls = true;  // fallback if autoplay is blocked
      try { await v.play(); } catch {}
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Poster state (before Enter) */}
      {!playing && (
        <>
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/background.png')" }} // put your image in /public
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Centered content */}
          <div className="relative z-10 h-full w-full flex items-center justify-center">
            <div className="text-center px-6 max-w-3xl">
              {/* Catchy title */}
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide leading-tight uppercase">
                Step Into the Multiverse
              </h1>

              {/* Two-line subtitle */}
              <p className="mt-6 text-lg md:text-2xl text-white/85 leading-relaxed">
All your favourite worlds — Stranger, Dark, Mystical, and Beyond.
One stage. One vision. One unforgettable journey.
              </p>

              {/* Enter Button */}
              <button
                onClick={handleEnter}
                className="mt-10 px-8 py-3 rounded-md bg-[#FF0000] text-black font-semibold text-lg hover:bg-red-400 transition"
              >
                Enter
              </button>
            </div>
          </div>
        </>
      )}

      {/* Video state (after Enter) */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          playing ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        src="/intro.mp4"        // put your video at /public/intro.mp4 (or adjust path)
        preload="auto"
        playsInline
        onEnded={onFinish}
      />

      {/* Skip while video plays */}
      {playing && (
        <button
          onClick={onFinish}
          className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm border border-white/20"
        >
          Skip Intro
        </button>
      )}
    </section>
  );
}
