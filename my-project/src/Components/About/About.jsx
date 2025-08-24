import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/about1.jpg",
  "/about6.png",
  "/about3.png",
  "/about4.png",
  "/about5.png",
  "/about7.jpg",
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-black">
      {/* Card Container */}
      <div className="relative w-[92%] md:w-[85%] h-[85vh] mt-10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`slide-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ))}
        </div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text Container (smaller + bottom-left) */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-6 left-6 max-w-md text-white space-y-2"
        >
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Department of CSE (AIML)
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            The Department of Computer Science and Engineering with a
            specialization in Artificial Intelligence and Machine Learning at
            Sri Sairam Institute of Technology is dedicated to nurturing
            innovative thinkers and problem solvers. With a robust curriculum
            blending theory and practical applications, the department prepares
            students to lead in the ever-evolving landscape of AI and ML.
          </p>
          <a
            href="https://aiml.sairam.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md text-sm font-medium"
            >
              Explore
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
