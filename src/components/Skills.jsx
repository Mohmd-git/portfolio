import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "HTML/CSS", "JavaScript", "SQL"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Platforms & Tools",
      skills: ["VS Code", "GitHub", "NetBeans", "Jupyter", "SSMS", "ML", "ETL"],
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Technologies & Frameworks",
      skills: ["Express.js", "MongoDB", "Node.js", "Django", "React.js", "Tailwind CSS"],
      color: "from-cyan-400 to-purple-500",
    },
    {
      title: "Soft Skills",
      skills: ["Innovation", "Collaboration", "Team Management", "Cultural Competence"],
      color: "from-blue-400 to-cyan-500",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#041625] text-white px-4 sm:px-6 md:px-16 py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400 animate-pulse inline-block">
            Skills & Expertise
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group p-[2px] rounded-[2rem] overflow-hidden"
            >
              {/* Rotating border beam (unchanged) */}
              <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#22d3ee_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-[#051a2c] backdrop-blur-3xl p-5 sm:p-6 md:p-8 rounded-[1.9rem] border border-white/5">
                
                <h3
                  className={`text-lg sm:text-xl font-bold mb-4 sm:mb-5 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}
                >
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, idx) => (
                    <motion.span 
                      key={idx}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="
                        px-3 sm:px-4
                        py-1.5 sm:py-2
                        rounded-xl
                        bg-white/5
                        border border-white/10
                        text-[10px] sm:text-xs
                        font-bold
                        uppercase
                        tracking-wide sm:tracking-widest
                        text-gray-300
                        hover:bg-cyan-400
                        hover:text-black
                        hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]
                        transition-all duration-300
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
