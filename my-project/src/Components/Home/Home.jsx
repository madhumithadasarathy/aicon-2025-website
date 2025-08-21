// src/components/Home.jsx
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Events from "./Events";
import Countdown from "./Countdown";
import FinalImage from "./FinalImage";


export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* EVENTS SECTION */}
      <Events />
      <Countdown />
      <FinalImage />
    </main>
  );
}
