import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";

export default function Contact() {
  // --- BACKEND LOGIC ---
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.success) {
        alert("❌ Failed to send message. Please try again.");
        setLoading(false);
        return;
      }
      const savedContacts = JSON.parse(localStorage.getItem("contactRequests")) || [];
      savedContacts.push(form);
      localStorage.setItem("contactRequests", JSON.stringify(savedContacts));
      setSubmitted(true);
      setLoading(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Frontend Error:", err);
      alert("❌ Server not responding.");
      setLoading(false);
    }
  };

  // --- STYLING ---
  // Ensuring background stays transparent and text is white
  const inputBase = "w-full bg-transparent border-b border-white/20 py-4 text-white text-lg outline-none focus:border-cyan-400 transition-all placeholder-white/10 font-light";

  return (
    <section id="contact" className="min-h-screen bg-[#020c1b] flex flex-col md:flex-row relative overflow-hidden">
      
      {/* --- FIX FOR WHITE AUTOFILL LAYER --- */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #020c1b inset !important;
            -webkit-text-fill-color: white !important;
            caret-color: white !important;
        }
      `}</style>

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* LEFT: The "Hook" */}
      <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-between relative border-r border-white/5 z-10">
         
         {/* Status Badge */}
         <motion.div 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-2 rounded-full w-fit"
         >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-gray-400">Available for work</span>
         </motion.div>
         
         <div className="mt-12 md:mt-0">
            <h2 className="text-7xl md:text-9xl font-thin tracking-tighter leading-[0.9] mb-8 text-white">
               Let's <br/> <span className="font-black text-white">Talk.</span>
            </h2>
            <div className="h-1 w-24 bg-cyan-500 mb-8" />
            <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-md">
               Have an innovative idea for your next project? Let’s collaborate and build it into reality together.
            </p>
         </div>

         <div className="hidden md:block">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Direct Contact</p>
            <a href="mailto:mohammadalisshaikh@gmail.com" className="text-lg md:text-xl font-medium text-white hover:text-cyan-400 transition-colors flex items-center gap-3 group">
               mohammadalisshaikh@gmail.com
               <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform text-cyan-500" />
            </a>
         </div>
      </div>

      {/* RIGHT: The "Form" */}
      <div className="md:w-1/2 p-12 md:p-24 flex items-center bg-gradient-to-b from-[#020c1b] to-[#041625] z-10">
         <div className="w-full max-w-md mx-auto">
            {submitted ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }} 
                 animate={{ opacity: 1, scale: 1 }} 
                 className="text-center py-20 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-sm"
               >
                  <FaCheck className="text-5xl text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-light text-white mb-2">Message Sent</h3>
                  <p className="text-gray-400 font-light">I'll be in touch shortly.</p>
               </motion.div>
            ) : (
               <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="group">
                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-cyan-400 transition-colors">01. What's your name?</label>
                     <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputBase} placeholder="" />
                  </div>
                  
                  <div className="group">
                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-cyan-400 transition-colors">02. What's your email?</label>
                     <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputBase} placeholder="" />
                  </div>

                  <div className="group">
                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-cyan-400 transition-colors">03. Your phone number?</label>
                     <input type="tel" name="phone" value={form.phone} onChange={handleChange} required maxLength="10" className={inputBase} placeholder="+91" />
                  </div>

                  <div className="group">
                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-cyan-400 transition-colors">04. Your Message</label>
                     <textarea name="message" rows="3" value={form.message} onChange={handleChange} required className={`${inputBase} resize-none`} placeholder="" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="group flex items-center gap-6 text-xl md:text-2xl font-light text-white hover:text-cyan-400 transition-all disabled:opacity-50 mt-8"
                  >
                     {loading ? "Sending..." : "Send Message"}
                     <span className="w-16 h-[1px] bg-white/30 group-hover:bg-cyan-400 group-hover:w-24 transition-all" />
                     <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
               </form>
            )}
         </div>
      </div>
    </section>
  );
}