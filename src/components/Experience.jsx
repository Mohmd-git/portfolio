import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaHandsHelping, FaRocket } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer Intern",
      company: "Mytek Innovations Pvt. Ltd.",
      duration: "Current",
      icon: <FaRocket />,
      details: "Developing full-stack web applications using React, Node.js, and MongoDB. Collaborating on API integrations and UI enhancements.",
      color: "border-cyan-400"
    },
    {
      role: "Teaching Faculty",
      company: "HI-Tech Academy, Nerul",
      duration: "4 Years",
      icon: <FaGraduationCap />,
      details: "Mentoring students in STEM learning. Improved practical problem-solving skills and conceptual understanding for hundreds of students.",
      color: "border-purple-500"
    },
    {
      role: "Business Assistant",
      company: "Amity Venture",
      duration: "6 Months",
      icon: <FaBriefcase />,
      details: "Contributed to marketing strategy, brand positioning, and operational planning during the initial launch phase.",
      color: "border-blue-500"
    },
    {
      role: "Sales Assistant",
      company: "Pantaloons",
      duration: "6 Months",
      icon: <FaBriefcase />,
      details: "Handled retail operations, customer support, inventory coordination, and product display management.",
      color: "border-pink-500"
    },
    {
      role: "NSS Volunteer",
      company: "Social Service",
      duration: "2 Years",
      icon: <FaHandsHelping />,
      details: "Participated actively in community service, social awareness programs, and welfare initiatives.",
      color: "border-green-500"
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen bg-[#041625] text-white px-6 py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 inline-block">
            Professional Journey
          </h2>
          <div className="h-1.5 w-24 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* THE CENTRAL LINE */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent opacity-30" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Center Dot/Icon */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#041625] border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                <span className="text-cyan-400 text-sm">{exp.icon}</span>
              </div>

              {/* Card Content */}
              <div className="ml-12 md:ml-0 md:w-[45%]">
                <div className={`p-6 rounded-3xl bg-white/5 border-l-4 ${exp.color} backdrop-blur-md hover:bg-white/10 transition-all group shadow-xl`}>
                  <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">{exp.duration}</span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">{exp.company}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}