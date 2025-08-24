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
    <div className="relative flex flex-col items-center justify-start min-h-screen w-full bg-black">
      {/* Slider Section */}
      <div className="relative w-[92%] md:w-[85%] h-[85vh] mt-10 rounded-2xl shadow-2xl overflow-hidden ">
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
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Text Container */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-8 left-6 text-white space-y-2"
        >
          <h1 className="text-xl md:text-2xl font-regular uppercase tracking-widest leading-snug">
            Department of CSE (AIML)
          </h1>
          <p className="text-sm md:text-sm leading-relaxed text-gray-200 max-w-2xl mb-2">
            The Department of Computer Science and Engineering with a
            specialization in Artificial Intelligence and Machine Learning at
            Sri Sairam Engineering College is dedicated to nurturing innovative
            thinkers and problem solvers. With a robust curriculum blending
            theory and practical applications, the department prepares students
            to lead in the ever-evolving landscape of AI and ML.
          </p>
          <a
            href="https://aiml.sairam.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 mt-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-md text-sm font-medium"
            >
              Explore
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* AICON'25 Card Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center min-h-screen w-full mt-16"
      >
        <div className="w-[92%] md:w-[85%] bg-black rounded-2xl shadow-[0_0_40px_rgba(220,38,38,0.8)] overflow-hidden flex flex-col md:flex-row min-h-[28rem]">
          {/* Image Left */}
          <div className="md:w-1/2 w-full h-64 md:h-auto">
            <img
              src="/aicon.jpg"
              alt="AICON'25"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center text-white">
            <h2 className="text-2xl md:text-3xl font-regular uppercase tracking-widest mb-4">
              AICON'25
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              AICON’25 marks the standalone symposium exclusively organized by
              the Department of CSE (AIML) at Sri Sairam Engineering College.
              This flagship event is set to bring together brilliant minds,
              industry experts, and enthusiastic learners to explore the
              frontiers of Artificial Intelligence and Machine Learning. With
              technical talks, innovative competitions, and engaging workshops,
              AICON’25 is designed to inspire and empower the next generation of
              AI innovators.
            </p>
          </div>
        </div>
      </motion.div>
      {/* Core Team Section */}
{/* Core Team Section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="w-full mt-16 flex flex-col items-center"
>
  {/* Title */}
  <h2 className="text-3xl md:text-4xl text-white font-regular uppercase tracking-widest mb-8">
    Core Team
  </h2>

  {/* Team Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-[92%] md:w-[85%]">
    {[
      { name: "Member 1", subtitle: "CSE - Third Year", img: "/member1.jpg" },
      { name: "Member 2", subtitle: "CSE - Third Year", img: "/member2.jpg" },
      { name: "Member 3", subtitle: "CSE - Third Year", img: "/member3.jpg" },
      { name: "Member 4", subtitle: "CSE - Third Year", img: "/member4.jpg" },
      { name: "Member 5", subtitle: "CSE - Third Year", img: "/member5.jpg" },
      { name: "Member 6", subtitle: "CSE - Third Year", img: "/member6.jpg" },
      { name: "Member 7", subtitle: "CSE - Third Year", img: "/member7.jpg" },
      { name: "Member 8", subtitle: "CSE - Third Year", img: "/member8.jpg" },
      { name: "Member 9", subtitle: "CSE - Third Year", img: "/member9.jpg" },
      { name: "Member 10", subtitle: "CSE - Third Year", img: "/member10.jpg" },
      { name: "Member 11", subtitle: "CSE - Third Year", img: "/member11.jpg" },
      { name: "Member 12", subtitle: "CSE - Third Year", img: "/member12.jpg" },
    ].map((member, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center text-center group"
      >
        <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.8)]">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="mt-4 text-white text-base md:text-lg font-medium">
          {member.name}
        </h3>
        <hr className="w-8 border-t-2 border-red-600 my-1" />
        <p className="text-gray-300 text-sm">{member.subtitle}</p>
      </motion.div>
    ))}
  </div>
</motion.div>


    </div>
  );
}
