import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#041625] text-white flex items-center px-6 sm:px-10 md:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full max-w-7xl mx-auto">
        
        {/* Left Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background Text: Hidden or resized on small screens to prevent horizontal overflow */}
          <h2 className="hidden sm:block text-7xl md:text-8xl font-black text-white/5 absolute -top-12 md:-top-16 -left-6 md:-left-10 select-none">
            EXPERT
          </h2>
          
          <h2 className="text-4xl md:text-5xl font-black relative z-10 leading-tight">
            Designing the <br /> 
            <span className="text-cyan-400">Future of Web</span>
          </h2>
          
          <p className="mt-6 md:mt-8 text-gray-400 text-base md:text-lg leading-relaxed">
            As a MERN Stack Developer, I don't just build websites; I engineer solutions. 
            From robust MongoDB schemas to interactive React interfaces, I ensure every 
            pixel and every line of code serves a purpose.
          </p>
          
          <div className="flex gap-8 md:gap-10 mt-10">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-cyan-400">15+</p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">Projects Done</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-400">24/7</p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">Availability</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-cyan-400/20 to-purple-500/20 p-[1px] md:p-1 rounded-2xl md:rotate-3 hover:rotate-0 transition-all duration-500"
        >
           <div className="bg-[#041625] p-6 md:p-8 rounded-2xl border border-white/10">
              <h4 className="text-lg md:text-xl font-bold mb-4">Core Philosophy</h4>
              <p className="text-sm md:text-gray-400 leading-relaxed mb-6">
                Clean code is not a preference; it's a requirement. I specialize in bridging the gap between efficient backends and beautiful frontends.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-cyan-400 text-sm md:text-base font-medium">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" /> 
                  User-Centric Design
                </li>
                <li className="flex items-center gap-3 text-purple-400 text-sm md:text-base font-medium">
                  <div className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_#a855f7]" /> 
                  Scalable Infrastructure
                </li>
              </ul>
           </div>
        </motion.div>
      </div>
    </section>
  );
}