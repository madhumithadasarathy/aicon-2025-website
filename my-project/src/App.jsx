import React, { useRef, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";

// pages
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
