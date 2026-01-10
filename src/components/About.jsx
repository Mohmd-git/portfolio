export default function About() {
  return (
    // Added id="about" to enable navigation from the navbar
    <section id="about" className="min-h-screen bg-[#041625] text-white flex items-center px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
        <div className="relative">
          <h2 className="text-8xl font-black text-white/5 absolute -top-16 -left-10 select-none">EXPERT</h2>
          <h2 className="text-5xl font-black relative z-10 leading-tight">
            Designing the <br /> <span className="text-cyan-400">Future of Web</span>
          </h2>
          <p className="mt-8 text-gray-400 text-lg leading-relaxed">
            As a MERN Stack Developer, I don't just build websites; I engineer solutions. From robust MongoDB schemas to interactive React interfaces, I ensure every pixel and every line of code serves a purpose.
          </p>
          <div className="flex gap-10 mt-10">
            <div>
              <p className="text-4xl font-bold text-cyan-400">15+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Projects Done</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400">24/7</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Availability</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-400/20 to-purple-500/20 p-1 rounded-2xl rotate-3 hover:rotate-0 transition-all duration-500">
           <div className="bg-[#041625] p-8 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold mb-4">Core Philosophy</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                Clean code is not a preference; it's a requirement. I specialize in bridging the gap between efficient backends and beautiful frontends.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-cyan-400"><div className="w-2 h-2 bg-cyan-400 rounded-full" /> User-Centric Design</li>
                <li className="flex items-center gap-3 text-purple-400"><div className="w-2 h-2 bg-purple-400 rounded-full" /> Scalable Infrastructure</li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
}