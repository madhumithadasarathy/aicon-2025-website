// src/App.jsx
import React, { useRef, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";

// main pages
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";

// event detail pages (you said you already created these)
import Event1 from "./Components/Events/Event1";
import Event2 from "./Components/Events/Event2";
import Event3 from "./Components/Events/Event3";
import Event4 from "./Components/Events/Event4";
import Event5 from "./Components/Events/Event5";
import Event6 from "./Components/Events/Event6";

export default function App() {
  const [showHome, setShowHome] = useState(false);
  const videoRef = useRef(null);
  const handleVideoEnd = () => setShowHome(true);

  if (!showHome) {
    return (
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/intro.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        />
        <button
          onClick={handleVideoEnd}
          className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full
                     bg-white/10 hover:bg-white/20 text-white text-sm border border-white/20"
        >
          Skip Intro
        </button>
      </section>
    );
  }

  return (
    <>
      <Header />
      <Routes>
        {/* main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />

        {/* event detail routes */}
        <Route path="/events/event1" element={<Event1 />} />
        <Route path="/events/pitch-it" element={<Event2 />} />
        <Route path="/events/debug-it" element={<Event3 />} />
        <Route path="/events/brain-wars" element={<Event4 />} />
        <Route path="/events/hack-n-fun" element={<Event5 />} />
        <Route path="/events/paper-presentation" element={<Event6 />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
