import { motion } from "framer-motion";

const Contact = () => {
  const cards = [
    {
      img: "/contact1.jpg",
      title: "Code Clash",
      subtitle: "Nikil M - 9043500213\nAbirami S -9025521821",
    },
    {
      img: "/contact2.jpg",
      title: "Pitch It or Prompt It",
      subtitle: "Reena Devi P -7548844090\nSanjai Kumar K S-9600615967",
    },
    {
      img: "/contact3.jpg",
      title: "Clash Fest",
      subtitle: "Muthu selvi N – 8438019657\nMuthukumaran S – 9360768293",
    },
    {
      img: "/contact4.jpg",
      title: "Connect & Conquer",
      subtitle:
        "Avighnaa Thirumaran - 7904427319\nVijay Srinivas R V - 9345724097",
    },
    {
      img: "/contact5.jpg",
      title: "Hack-N-Fun",
      subtitle:
        "Ranjith Kumar S - 9894126592\nPraveen V - 9999073820\nDafne Francina J - 9789011097",
    },
    {
      img: "/contact6.jpg",
      title: "Eureka",
      subtitle: "Sankari R V - 9444543237\nDevadharshan S - 8122501893",
    },
  ];

  // Shadow glow colors per card
  const shadowColors = [
    "shadow-red-900/70", // Dark Red
    "shadow-purple-600/70", // Purple
    "shadow-pink-500/70", // Neon Pink
    "shadow-red-800/70", // Maroon
    "shadow-red-500/70", // Bright Red
    "shadow-zinc-500/70", // Zinc
  ];

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-black min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Page Title Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:mt-5 font-bold text-white tracking-wide">
            Let&apos;s Stay <span className="text-red-600">Connected</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Got a question, an idea, or just want to say hi? <br />
            We&apos;re here to listen and help you every step of the way.
          </p>
        </motion.div>

        {/* Cards Section */}
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center gap-6 rounded-2xl overflow-hidden p-6 bg-zinc-900/60 shadow-lg ${shadowColors[index]} ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-3">
              <h3 className="text-4xl uppercase tracking-widest md:text-5xl font-regular text-white">
                {card.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {card.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
