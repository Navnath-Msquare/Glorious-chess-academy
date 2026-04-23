"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Target, 
  Compass, 
  Trophy, 
  Users, 
  Award, 
  BookOpen, 
  PlayCircle, 
  Zap,
  TrendingUp,
  ShieldCheck,
  Star
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("who-we-are");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle sticky sub-nav scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "who-we-are", label: "Who We Are", icon: Users },
    { id: "what-we-do", label: "What We Do", icon: PlayCircle },
    { id: "vision-mission", label: "Vision & Mission", icon: Target },
    { id: "founder", label: "Founder's Message", icon: Award },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveTab(id);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-primary/10 via-transparent to-transparent -z-10 blur-[120px] opacity-50" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-black uppercase tracking-[0.2em]">
              <Star size={16} className="fill-current" /> Learn. Master. Checkmate!
            </div> */}
            
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto">
              About <br />
              <span className="text-primary italic">Glorious Chess</span> <br />
              Academy
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Shaping the next generation of grandmasters through structured excellence, 
              professional mentorship, and a pioneering approach to chess education.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <button 
                onClick={() => scrollToSection("who-we-are")}
                className="group relative px-10 py-5 bg-primary text-black font-black uppercase tracking-widest text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(184,134,11,0.4)]"
              >
                Our Story
              </button>
              <button 
                onClick={() => scrollToSection("vision-mission")}
                className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-lg rounded-full hover:bg-white/10 transition-all"
              >
                Vision & Mission
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sub Navigation ── */}
      <div className={`sticky top-[72px] z-40 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-primary/20 py-2" : "bg-transparent py-4 opacity-0 pointer-events-none"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-8 overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap
                  ${activeTab === item.id 
                    ? "bg-primary text-black shadow-[0_0_20px_rgba(184,134,11,0.4)]" 
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Who We Are ── */}
      <section id="who-we-are" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-lg group mx-auto">
              {/* Back glow effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[3.5rem] blur-3xl group-hover:bg-primary/40 group-hover:scale-105 transition-all duration-700" />
              
              {/* Image Container */}
              <div className="relative w-full rounded-[3rem] overflow-hidden border border-primary/30 shadow-[0_0_40px_rgba(184,134,11,0.15)] glass p-2 md:p-3">
                <Image
                  src="/aboutus.png"
                  alt="Glorious Chess Academy"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain rounded-[2.5rem] transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
              <ShieldCheck size={14} /> Who We Are
            </div>
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter leading-tight">
              Pioneering <span className="text-primary underline decoration-primary/30 underline-offset-8">Chess Education</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed font-medium">
              <p>
                Glorious Chess Academy is a professional chess training platform dedicated to developing players through structured learning and expert mentorship. 
              </p>
              <p>
                We are pioneering in the field of chess education, combining modern learning methods with professional coaching standards to create a strong foundation for every learner.
              </p>
              <p>
                With a rapidly expanding presence across India and a strong foothold as one of the leading chess academies in the <span className="text-white font-bold">Marathwada region</span>, we are committed to making quality chess education accessible to aspiring players everywhere.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What We Do & Philosophy ── */}
      <section id="what-we-do" className="py-24 px-6 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* What We Do */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.2em]">
                <PlayCircle size={14} /> What We Do
              </div>
              <h3 className="text-3xl md:text-4xl font-black italic uppercase">Comprehensive <span className="text-accent">Ecosystem</span></h3>
              <p className="text-gray-400 text-lg">
                We provide a comprehensive learning environment where students can learn, practice, and compete under the guidance of experienced coaches.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Structured Curriculum", desc: "Beginner to Advanced levels", icon: BookOpen },
                  { title: "Live Interactive Classes", desc: "Real-time query resolution", icon: Zap },
                  { title: "Game Analysis", desc: "Deep dive into every move", icon: Compass },
                  { title: "Tournament Exposure", desc: "Face real competitive pressure", icon: Trophy },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group">
                    <item.icon className="text-accent mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="space-y-8 lg:border-l lg:border-white/10 lg:pl-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
                <Compass size={14} /> Coaching Philosophy
              </div>
              <h3 className="text-3xl md:text-4xl font-black italic uppercase">Beyond The <span className="text-primary">Board</span></h3>
              <p className="text-gray-400 text-lg">
                We believe that chess is not just a game it is a powerful tool to develop strategic thinking, concentration, and decision-making skills.
              </p>
              <ul className="space-y-4">
                {[
                  "Concept-based learning over memorization",
                  "Practical application through real games",
                  "Continuous performance tracking",
                  "Personalized improvement plans",
                ].map((point, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-center gap-3 text-gray-300 font-medium"
                    whileHover={{ x: 10 }}
                  >
                    <CheckCircle className="text-primary shrink-0" size={20} />
                    {point}
                  </motion.li>
                ))}
              </ul>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 italic text-primary/90">
                Our approach focuses on creating not just players, but confident thinkers and future champions.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section id="vision-mission" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Vision */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 p-12 rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden group"
            >
              <Target className="absolute -top-10 -right-10 w-48 h-48 text-primary/5 group-hover:text-primary/10 transition-colors" />
              <div className="relative z-10">
                <h2 className="text-primary text-4xl md:text-6xl font-black italic mb-6">VISION</h2>
                <p className="text-2xl text-white font-medium leading-tight">
                  To become a leading chess learning platform across India, building a strong ecosystem where students, coaches, and partners grow together.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="flex-1 p-12 rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden group"
            >
              <Trophy className="absolute -top-10 -right-10 w-48 h-48 text-accent/5 group-hover:text-accent/10 transition-colors" />
              <div className="relative z-10">
                <h2 className="text-accent text-4xl md:text-6xl font-black italic mb-6">MISSION</h2>
                <p className="text-2xl text-white font-medium leading-tight">
                  To nurture future champions by delivering high-quality chess education, expert mentorship, and competitive exposure at every level.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why We Stand Out ── */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] mb-4">
              Our Edge
            </div>
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">Why We <span className="text-primary">Stand Out</span></h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Pioneering Approach", desc: "Fusing modern tech with timeless strategy.", icon: Zap },
            { title: "Pan-India Presence", desc: "Rapidly growing network across the nation.", icon: TrendingUp },
            { title: "Regional Leadership", desc: "No. 1 choice in the Marathwada region.", icon: Star },
            { title: "Structured Programs", desc: "From basic moves to grandmaster ideas.", icon: ShieldCheck },
            { title: "Competition Focus", desc: "Preparing students for global stages.", icon: Trophy },
            { title: "Expert Mentorship", desc: "Personalized guidance from master coaches.", icon: Users },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              className="p-8 rounded-3xl border border-white/5 hover:border-primary/40 bg-white/2 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-primary" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Founder's Message / Leadership ── */}
      <section id="founder" className="py-24 px-6 relative bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            {/* Left: Identity */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-1/3"
              >
                <div className="relative aspect-square sm:aspect-video lg:aspect-[4/5] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 group">
                  <Image
                    src="/logo.png"
                    alt="Mr. Satish Thakur"
                    fill
                    className="object-contain p-8 lg:p-12 bg-[#0d0d0d]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                    <h3 className="text-2xl lg:text-3xl font-black italic uppercase tracking-tighter">Mr. Satish Thakur</h3>
                    <p className="text-primary font-bold tracking-widest uppercase text-xs lg:text-sm mt-1">Founder Glorious Chess Academy</p>
                  </div>
                </div>
              

            </motion.div>

            {/* Right: Story */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="w-full lg:w-2/3 space-y-8 lg:space-y-12"
              >
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
                  LEADERSHIP
                </div>
                <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter leading-tight">
                  The <span className="text-primary">Visionary</span> Behind The Pieces
                </h2>
              </div>

              {/* Journey */}
              <div className="space-y-6">
                <h4 className="text-2xl font-black italic uppercase flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" /> Founder’s Journey
                </h4>
                <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                  <p>
                    Mr. Satish Thakur’s journey with chess began at a very young age, where curiosity soon turned into passion. From learning the fundamentals during his childhood to understanding the deeper strategies, chess became an integral part of his life.
                  </p>
                  <p>
                    Over the years, his dedication evolved beyond just playing — it transformed into a vision to build a platform where aspiring players could learn, grow, and excel.
                  </p>
                </div>
              </div>

              {/* Beliefs */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="text-primary font-bold mb-4 uppercase tracking-widest text-sm">Our Presence</h4>
                  <p className="text-gray-300 font-medium">Under his leadership, we've become the most preferred academy in Marathwada and are now expanding Pan-India.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="text-primary font-bold mb-4 uppercase tracking-widest text-sm">Professional Credentials</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Associated with Maharashtra Chess Association</li>
                    <li>• Holding key leadership responsibilities</li>
                    <li>• Promoting chess at a national level</li>
                  </ul>
                </div>
              </div>

              {/* Vision Point */}
              <div className="space-y-6">
                <h4 className="text-2xl font-black italic uppercase flex items-center gap-3">
                   <span className="w-8 h-px bg-primary" /> The Philosophy
                </h4>
                <p className="text-gray-400 text-lg italic">
                Chess is more than just a game it is a tool to build strategic thinking, discipline, and decision-making ability.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Strategic Thinking", "Discipline", "Decision-making", "Champions Mentality"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Closing */}
              <div className="p-8 rounded-3xl bg-primary text-black">
                <p className="text-xl font-black italic uppercase">
                  At Glorious Chess Academy, we don’t just teach content — we help you Learn. Master. Checkmate!
                </p>
                <div className="mt-6">
                  <p className="font-black text-lg uppercase tracking-tight">Mr. Satish Thakur</p>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Founder, Glorious Chess Academy</p>
                  <p className="text-xs font-bold opacity-60 uppercase mt-1">Maharashtra Chess Association Associate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
