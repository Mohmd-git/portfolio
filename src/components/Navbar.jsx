import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[#041625]/80 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 group">
            <div className="w-8 h-[2px] bg-cyan-400 group-hover:w-12 transition-all duration-500" />
            <h1 className="text-xl font-black uppercase tracking-[0.2em] text-white">
              Ali <span className="text-cyan-400">.</span>
            </h1>
          </motion.div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Hire Me */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2 border border-cyan-400/30 text-cyan-400 text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-500 rounded-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl text-white"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 w-full h-screen bg-[#020c1b] flex flex-col items-center justify-center gap-8 md:hidden z-[101]"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl text-white hover:text-cyan-400 transition"
            >
              <HiX />
            </button>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-4xl font-black text-white hover:text-cyan-400 uppercase tracking-tighter"
              >
                {link.name}
              </motion.a>
            ))}

            <div className="absolute bottom-12 text-gray-500 text-[10px] tracking-[0.5em] uppercase font-bold">
              Mohammed Ali Shaikh
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
