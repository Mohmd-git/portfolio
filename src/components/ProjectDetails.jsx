import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaChevronLeft, FaTools, FaLightbulb, FaRocket } from "react-icons/fa";

export default function ProjectDetails() {
  const { id } = useParams();

  const projects = [
    {
      slug: "chatbot-for-mental-health", // Fixed: This must match the URL ID
      heading: "Mental Health AI Chatbot 🤖",
      fullDesc: `A full-stack AI-powered Mental Health Chatbot designed to provide real-time supportive and empathetic responses using Google Generative AI. The system integrates a Flask backend for secure API processing and React for an intuitive chat user experience.`,
      highlights: [
        "Real-time emotional response generation",
        "Google Gemini integration via REST API",
        "Secure backend with environment protection",
        "Dynamic chat rendering with state management",
      ],
      tools: ["Python", "Flask", "React", "Google Gemini", "Axios", "Tailwind CSS"],
      img: "/projects/chatbot mental health dp.png",
      github: "https://github.com/Mohmd-git/Chatbot_for_MentalHealth",
    },
    {
      slug: "face-recognition-attendance-system",
      heading: "Face Recognition Attendance 🎭",
      fullDesc: `A fully automated smart attendance system built using computer vision. The application scans faces in real-time using live camera feed, matches identified users with a database, and stores attendance details with time-stamped logs.`,
      highlights: [
        "OpenCV-based real-time face detection",
        "ML face encoding and identification system",
        "Automated attendance marking with timestamp",
        "MySQL attendance record storage & analytics",
      ],
      tools: ["Python", "OpenCV", "Face Recognition", "Tkinter", "MySQL", "Pandas"],
      img: "/projects/face detection dp.png",
      github: "https://github.com/Mohmd-git/Attendance_using_Face_Recognition",
    },
    {
      slug: "heart-disease-prediction-system",
      heading: "Heart Disease Prediction System ❤️",
      fullDesc: `A Machine Learning powered prediction system capable of detecting heart disease risks. The model analyzes medical parameters and predicts the chance of heart-related issues using multiple classification algorithms with high accuracy.`,
      highlights: [
        "97% accuracy using multiple ML classifiers",
        "Comparison between Logistic Regression & SVM",
        "Interactive Flask web deployment",
        "Pickle model serialization for fast inference",
      ],
      tools: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy", "Jinja2"],
      img: "/projects/heart disease prediction dp.png",
      github: "https://github.com/Mohmd-git/Heart_Diease_Predictions_System",
    },
  ];

  // THE FIX: Matching against slug instead of title
  const project = projects.find((p) => p.slug === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#041625] flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-cyan-400 underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#041625] text-white pt-28 pb-20 px-6 md:px-16 overflow-hidden">
      
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-all mb-10 group font-medium">
          <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        {/* HEADER SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                {project.heading}
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-cyan-400/30 pl-6">
              {project.fullDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={project.github} target="_blank" rel="noreferrer" 
                 className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition-all shadow-lg">
                <FaGithub size={20} /> View Source Code
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity" />
            <img src={project.img} alt={project.heading} className="relative rounded-[2.5rem] border border-white/10 shadow-2xl w-full object-cover" />
          </motion.div>
        </div>

        {/* BENTO INFO GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Key Highlights */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md hover:border-cyan-400/40 transition-all"
          >
            <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-3 mb-6">
              <FaLightbulb /> Key Features
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-gray-300 text-sm md:text-base bg-white/5 p-4 rounded-xl border border-white/5">
                  <FaRocket className="text-cyan-400 mt-1 shrink-0" size={14} /> {h}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-purple-400 flex items-center gap-3 mb-6">
              <FaTools /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span key={i} className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 text-[11px] uppercase font-bold tracking-wider">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}