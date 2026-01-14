export default function About() {
  return (
    <section
      id="about"
      className="bg-[#041625] text-white px-4 sm:px-6 md:px-20 py-20 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
        
        {/* LEFT CONTENT */}
        <div className="relative">
          {/* Decorative text — hide on mobile */}
          <h2 className="hidden md:block text-8xl font-black text-white/5 absolute -top-16 -left-10 select-none">
            EXPERT
          </h2>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Designing the <br />
            <span className="text-cyan-400">Future of Web</span>
          </h2>

          <p className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            As a MERN Stack Developer, I don't just build websites; I engineer solutions.
            From robust MongoDB schemas to interactive React interfaces, I ensure every
            pixel and every line of code serves a purpose.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-cyan-400">15+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Projects Done
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-400">24/7</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Availability
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-gradient-to-br from-cyan-400/20 to-purple-500/20 p-1 rounded-2xl md:rotate-3 md:hover:rotate-0 transition-all duration-500">
          <div className="bg-[#041625] p-6 md:p-8 rounded-2xl border border-white/10">
            <h4 className="text-lg md:text-xl font-bold mb-4">
              Core Philosophy
            </h4>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Clean code is not a preference; it's a requirement. I specialize in
              bridging the gap between efficient backends and beautiful frontends.
            </p>

            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-3 text-cyan-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                User-Centric Design
              </li>
              <li className="flex items-center gap-3 text-purple-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                Scalable Infrastructure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
