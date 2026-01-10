import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";

//  IMPORT IMAGE FROM ASSETS
import profileImg from "../assets/Ali.png";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="relative min-h-screen w-full bg-[#041625] text-white flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 md:px-16 pt-32 md:pt-24 overflow-hidden">

        {/* GLOWS */}
        <div className="absolute top-10 left-[-10%] w-48 h-48 md:w-64 md:h-64 bg-cyan-500/10 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-10 right-[-10%] w-60 h-60 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-[100px] md:blur-[120px]" />

        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl z-10 text-center md:text-left order-2 md:order-1"
        >
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-cyan-400 font-medium tracking-widest uppercase mb-2"
          >
            Hello, It's Me
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-black mt-1 leading-tight tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              MOHAMMED ALI
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-3xl mt-3 text-gray-200 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2"
          >
            And I am a{" "}
            <span className="text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "Backend Developer", "MERN STACK Developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-xl text-justify"
          >
            I am a full stack developer dedicated to crafting visually appealing,
            responsive websites. I transform ideas into reality with clean designs
            that work flawlessly across devices.
          </motion.p>

          {/* SOCIAL ICONS */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start gap-4 mt-8"
          >
            {[
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/mohammed-ali-shaikh-851887341",
                color: "hover:bg-blue-600",
              },
              {
                icon: <FaWhatsapp />,
                link: "https://wa.me/919867370040",
                color: "hover:bg-green-600",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/mohammed_ali4182",
                color: "hover:bg-pink-600",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 text-lg md:text-xl transition-all duration-300 ${social.color} hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8"
          >
            <motion.a
              href="/latest resume Ali.pdf"
              download="Mohammed_Ali_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto relative group px-8 py-3 rounded-full bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 overflow-hidden flex items-center justify-center"
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="https://github.com/Mohmd-git"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-cyan-400/50 text-cyan-400 font-bold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
          className="relative group order-1 md:order-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-cyan-400/40 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-[6px] border-transparent border-t-cyan-400 border-l-cyan-400 animate-[spin_5s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border-[6px] border-transparent border-b-purple-500 border-r-purple-500 animate-[spin_7s_linear_infinite_reverse]" />

           <div className="relative w-88 h-88 rounded-full p-2 bg-[#041625] ring-4 ring-gray-900 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
  <img
    src={profileImg}
    alt="Mohammed Ali"
    className="w-full h-full rounded-full object-cover"
  />
</div>

          </motion.div>
        </motion.div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
