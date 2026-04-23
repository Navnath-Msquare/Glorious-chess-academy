"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  PlayCircle, 
  Target, 
  Trophy, 
  Users, 
  Zap, 
  BookOpen, 
  Puzzle, 
  Award, 
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  Star,
  Gamepad2,
  LineChart
} from "lucide-react";
import Link from "next/link";
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

export default function StudentPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-primary/10 via-transparent to-transparent -z-10 blur-[120px] opacity-50" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-black uppercase tracking-[0.2em]">
              <Star size={16} className="fill-current" /> Learn. Master. Checkmate!
            </div> */}
            
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto">
              Learn Chess from <span className="text-primary italic">Expert Coaches</span> & Build Winning Strategies
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Join a structured chess learning program guided by professional and FIDE-level coaching standards, designed to help you grow from beginner to competitive player.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link 
                href="/contact"
                className="group relative px-10 py-5 bg-primary text-black font-black uppercase tracking-widest text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(184,134,11,0.4)]"
              >
                Enroll Now
              </Link>
              <Link 
                href="https://wa.me/7620857664"
                target="_blank"
                className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-lg rounded-full hover:bg-white/10 transition-all"
              >
                <PlayCircle size={24} className="text-primary" /> Book Free Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Learn With Us ── */}
      <section className="py-24 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">Why Learn <span className="text-primary">With Us</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Coaches", desc: "Learn from professional & FIDE-level trained coaches with years of experience.", icon: ShieldCheck },
              { title: "Structured Curriculum", desc: "A clear roadmap from Beginner to Advanced levels based on global standards.", icon: BookOpen },
              { title: "Live Classes", desc: "Interactive online sessions with real-time feedback and query resolution.", icon: Zap },
              { title: "Global Practice", desc: "Practice games, puzzles, and deep analysis of your performance.", icon: Gamepad2 },
              { title: "Elite Competitions", desc: "Participate in regular tournaments and face competitive pressure.", icon: Trophy },
              { title: "Tracking & Growth", desc: "Continuous performance tracking and certification upon completion.", icon: LineChart },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-3 italic uppercase">{feature.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Learning Programs ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter leading-none">
              Our Learning <br /><span className="text-primary italic">Programs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                level: "Beginner",
                title: "The Foundation",
                points: ["Basics of chess (rules, board, pieces)", "Simple strategies and openings", "Foundation building"],
                color: "border-blue-500/20 bg-blue-500/5",
                iconColor: "text-blue-500"
              },
              {
                level: "Intermediate",
                title: "Strategy & Depth",
                points: ["Tactical thinking", "Opening principles", "Game analysis & improvement"],
                color: "border-primary/20 bg-primary/5",
                iconColor: "text-primary shadow-[0_0_15px_rgba(184,134,11,0.3)]"
              },
              {
                level: "Advanced",
                title: "Elite Mastery",
                points: ["Competitive strategies", "Tournament preparation", "Advanced gameplay techniques"],
                color: "border-accent/20 bg-accent/5",
                iconColor: "text-accent"
              }
            ].map((program, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className={`p-10 rounded-[3rem] border ${program.color} transition-all hover:scale-[1.02] group`}
              >
                <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 mb-6 inline-block`}>
                  {program.level} Level
                </span>
                <h3 className="text-3xl font-black italic uppercase mb-8">{program.title}</h3>
                <ul className="space-y-5">
                  {program.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <CheckCircle className={`shrink-0 mt-1 ${program.iconColor}`} size={18} />
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">What You <span className="text-primary">Get</span></h2>
            <div className="grid gap-6">
              {[
                { title: "Live classes with expert coaches", icon: Users },
                { title: "Recorded sessions for revision", icon: PlayCircle },
                { title: "Practice matches with peers", icon: Gamepad2 },
                { title: "Tournament participation", icon: Trophy },
                { title: "Continuous guidance & feedback", icon: Target },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <span className="text-lg font-bold uppercase italic tracking-tight">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-fit max-w-full mx-auto group">
              {/* Back glow effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/40 group-hover:scale-105 transition-all duration-700" />
              
              {/* Tight frame that naturally hugs the photo's exact aspect ratio */}
              <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-primary/30 shadow-[0_0_40px_rgba(184,134,11,0.15)] group-hover:border-primary/50 transition-all mx-auto">
                <img
                  src="/student.jpeg"
                  alt="Student Excellence"
                  className="w-auto h-auto max-w-[90vw] md:max-w-[550px] max-h-[400px] md:max-h-[500px] object-contain block transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tournaments & Skills ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tournaments */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10"
            >
              <Trophy className="text-primary mb-6" size={48} />
              <h3 className="text-3xl font-black italic uppercase mb-4">Tournaments & <span className="text-primary">Recognition</span></h3>
              <p className="text-gray-400 text-lg mb-8 font-medium">Participate in regular tournaments to test your skills and gain recognition.</p>
              <ul className="space-y-4">
                {["Leaderboards & rankings", "Certificates & achievements", "Competitive exposure"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-bold uppercase tracking-tight italic">
                    <Award className="text-primary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Skills */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="p-12 rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10"
            >
              <Zap className="text-accent mb-6" size={48} />
              <h3 className="text-3xl font-black italic uppercase mb-4">Skills You Will <span className="text-accent">Develop</span></h3>
              <p className="text-gray-400 text-lg mb-8 font-medium">Chess helps you build critical life skills far beyond the board.</p>
              <div className="grid grid-cols-2 gap-4">
                {["Strategic thinking", "Concentration", "Decision-making", "Problem-solving"].map((skill, i) => (
                  <div key={i} className="px-4 py-3 rounded-2xl bg-accent/10 border border-accent/20 text-accent text-sm font-black uppercase text-center italic">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Learning Journey ── */}
      <section className="py-24 px-6 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">Your Learning <span className="text-primary">Journey</span></h2>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Connector Line */}
            <div className="absolute top-[60px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-20 right-20 h-[2px] bg-white/10 hidden lg:block" />
            
            {[
              { step: "01", title: "Enroll / Book Demo", desc: "Start with a free assessment session." },
              { step: "02", title: "Level Assessment", desc: "We find the perfect starting point for you." },
              { step: "03", title: "Structured Training", desc: "Join curated classes for your level." },
              { step: "04", title: "Practice & Compete", desc: "Apply learnings in matches and events." },
              { step: "05", title: "Achieve Mastery", desc: "Reach your peak performance." },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="relative z-10 flex-1 text-center lg:text-left"
              >
                <div className="w-16 h-16 rounded-full bg-black border-4 border-primary/40 flex items-center justify-center text-primary font-black mb-6 mx-auto md:mx-0 shadow-[0_0_20px_rgba(184,134,11,0.2)]">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold uppercase italic mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative p-12 md:p-24 rounded-[4rem] overflow-hidden bg-primary text-black text-center"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2 border-[40px] border-black rounded-full" />
            </div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter leading-none">
                Start Your Chess <br /> Journey Today
              </h2>
              <p className="text-xl md:text-2xl font-bold italic uppercase tracking-tight max-w-2xl mx-auto opacity-70">
                Learn under professional coaching standards and take your game to the next level.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="/contact"
                    className="w-full sm:w-auto px-12 py-6 bg-black text-primary font-black uppercase tracking-widest text-lg rounded-full hover:scale-105 transition-all shadow-2xl shadow-black/20"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                    href="https://wa.me/7620857664"
                    target="_blank"
                    className="w-full sm:w-auto px-12 py-6 border-2 border-black text-black font-black uppercase tracking-widest text-lg rounded-full hover:bg-black hover:text-primary transition-all"
                  >
                    Book Your Free Demo
                  </Link>
                </div>
                {/* Conversion Booster Line */}
                <p className="text-sm font-black uppercase tracking-[0.2em] opacity-60">
                   Book Your Free Demo Class • Limited Slots Available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
