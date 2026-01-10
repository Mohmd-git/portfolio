import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { FaRobot, FaMasksTheater } from "react-icons/fa6";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Mental Health AI",
      icon: <FaRobot size={22} />,
      slug: "chatbot-for-mental-health",
      short: "AI emotional support chatbot built using React & Flask.",
      tech: ["Gemini AI", "React", "Flask"],
      img: "/projects/chatbot mental health dp.png",
      github: "https://github.com/Mohmd-git/Chatbot_for_MentalHealth",
      accent: "from-purple-500 to-cyan-500",
    },
    {
      title: "Face Recognition",
      icon: <FaMasksTheater size={22} />,
      slug: "face-recognition-attendance-system",
      short: "Automated attendance marking using OpenCV & Python.",
      tech: ["OpenCV", "MySQL", "Python"],
      img: "/projects/face detection dp.png",
      github: "https://github.com/Mohmd-git/Attendance_using_Face_Recognition",
      accent: "from-blue-500 to-indigo-500",
    },
    {
      title: "Heart Prediction",
      icon: <FaHeart size={22} />,
      slug: "heart-disease-prediction-system",
      short: "ML tool predicting heart risk with 97% accuracy.",
      tech: ["Scikit-Learn", "ML", "Flask"],
      img: "/projects/heart disease prediction dp.png",
      github: "https://github.com/Mohmd-git/Heart_Diease_Predictions_System",
      accent: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#041625] text-white px-6 md:px-16 py-24 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md flex flex-col hover:border-cyan-400/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image with Gradient Overlay */}
              <div className="relative w-full h-52 overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} opacity-40 group-hover:opacity-20 transition-opacity`} />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-2xl text-white border border-white/10">
                  {p.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors tracking-tight">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {p.short}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/project/${p.slug}`)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-black rounded-xl font-bold hover:bg-cyan-400 transition-colors"
                  >
                    Details <FaExternalLinkAlt size={14} />
                  </motion.button>

                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={p.github}
                    target="_blank"
                    className="flex items-center justify-center w-14 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/10"
                  >
                    <FaGithub size={22} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}