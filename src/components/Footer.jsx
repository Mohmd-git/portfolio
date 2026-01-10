import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020c1b] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Brand/Logo */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black tracking-tighter text-white">
            MOHAMMED <span className="text-cyan-400">ALI.</span>
          </h2>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mt-2">
            FULL Stack Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-8 mb-10">
          {[
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mohammed-ali-shaikh-851887341" },
            { icon: <FaWhatsapp />, link: "https://wa.me/919867370040" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/mohammed_ali4182" },
            { icon: <FaEnvelope />, link: "mailto:mohammadalisshaikh@gmail.com" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 text-xl"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright & Info */}
        <div className="text-center space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
            © 2026 Mohammed Ali — All Rights Reserved
          </p>
          <p className="text-[9px] text-gray-700 font-mono italic">
            Built with Passion & Precision
          </p>
        </div>
      </div>
    </footer>
  );
}