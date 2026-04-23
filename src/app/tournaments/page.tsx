"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  Trophy, 
  Users, 
  BarChart, 
  ShieldCheck, 
  Play, 
  ArrowRight,
  CheckCircle,
  Target,
  Award,
  Swords,
  Timer,
  Calendar,
  Compass,
  Star,
  Brain,
  Lightbulb,
  Crosshair,
  TrendingUp,
  MapPin,
  Globe,
  Layers
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function TournamentPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      {/* ── Hero Section ── */}
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
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(184,134,11,0.2)]">
              <Trophy size={16} className="fill-current" /> Compete. Perform. Win.
            </div> */}
            
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto">
              Test Your Skills In <br />
              Competitive <span className="text-primary italic">Tournaments</span>
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Participate in professionally organized tournaments designed to challenge your skills, improve your gameplay, and give you real competitive exposure.
            </p>

            <p className="text-lg text-primary/80 italic max-w-2xl mx-auto">
              A pioneering chess academy, leading in the Marathwada region and rapidly expanding across India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link 
                href="https://wa.me/7620857664"
                target="_blank"
                className="group relative px-10 py-5 bg-primary text-black font-black uppercase tracking-widest text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(184,134,11,0.4)] flex items-center justify-center gap-3"
              >
                Join Tournament <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="https://wa.me/7620857664"
                target="_blank"
                className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-lg rounded-full hover:bg-white/10 transition-all"
              >
                Register Now
              </Link>
            </div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mt-6 max-w-xl mx-auto">
               Learn. Master. Checkmate!
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Participate & Features ── */}
      <section className="py-24 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Why Participate */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.2em]">
                Benefits
              </div>
              <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">
                Why Participate <br /> <span className="text-accent">In Our Tournaments</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Real competitive environment",
                  "Improve practical gameplay skills",
                  "Play with diverse opponents",
                  "Learn from every match experience",
                  "Gain recognition and confidence"
                ].map((point, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-center gap-4 text-gray-300 font-medium text-lg bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-accent/40 transition-all"
                    whileHover={{ x: 10 }}
                  >
                    <Target className="text-accent shrink-0" size={24} />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="space-y-8 lg:border-l lg:border-white/5 lg:pl-16"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
                Excellence
              </div>
              <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">
                Tournament <br /> <span className="text-primary">Features</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: "Online & Offline", icon: Globe, desc: "Play securely formats" },
                  { title: "Structured Formats", icon: Layers, desc: "Professionally organized" },
                  { title: "Fair Play", icon: ShieldCheck, desc: "Monitored environment" },
                  { title: "Time-Based", icon: Timer, desc: "Competitive clocks" },
                  { title: "Regular Schedules", icon: Calendar, desc: "Consistent events" }
                ].map((feat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl glass border border-white/10 hover:border-primary/30 transition-all group">
                     <feat.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
                     <h4 className="font-bold text-white text-lg uppercase italic">{feat.title}</h4>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Recognition & Rewards ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">
               Recognition & <span className="text-primary">Rewards</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium mt-4 max-w-2xl mx-auto">
               Your hard work and mastery deserve the spotlight.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: Award, title: "Certificates", text: "For participation & winners" },
               { icon: BarChart, title: "Leaderboards", text: "Global system rankings" },
               { icon: Trophy, title: "Recognition", text: "Performance-based rewards" },
               { icon: Star, title: "Showcase", text: "Opportunities to display talent" }
             ].map((reward, i) => (
               <motion.div
                 key={i}
                 variants={fadeUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 custom={i}
                 className="p-8 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 text-center group hover:border-primary/20 transition-colors"
               >
                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all">
                   <reward.icon size={28} />
                 </div>
                 <h3 className="text-xl font-black uppercase italic mb-2">{reward.title}</h3>
                 <p className="text-gray-500 font-medium text-sm">{reward.text}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ── Skill Dev & Coaching ── */}
      <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Skill Development */}
              <motion.div
                 variants={fadeUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
              >
                 <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
                    Skill Development <br /> <span className="text-accent">Through Competition</span>
                 </h2>
                 <p className="text-gray-400 font-medium text-lg xl:text-xl mb-10">Tournaments help you:</p>
                 <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { icon: Swords, text: "Apply strategies in real matches" },
                      { icon: Brain, text: "Improve decision-making under pressure" },
                      { icon: ShieldCheck, text: "Build confidence & competitive mindset" },
                      { icon: Compass, text: "Identify strengths & areas to improve" }
                    ].map((skill, i) => (
                      <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-accent/5 hover:border-accent/20 transition-colors">
                         <skill.icon className="text-accent mb-4" size={32} />
                         <p className="font-bold text-gray-300 leading-tight">{skill.text}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>

              {/* Coaching */}
              <motion.div
                 variants={fadeUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 custom={1}
                 className="flex flex-col justify-center"
              >
                 <div className="p-12 md:p-16 rounded-[3.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-black border border-primary/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                       <Trophy size={200} className="text-primary" />
                    </div>
                    <div className="relative z-10 space-y-6">
                       <div className="flex items-center gap-2 md:gap-4 overflow-x-auto no-scrollbar">
                         <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap">
                            <Star size={14} className="fill-current inline mr-1" /> Expert Guidance
                         </div>
                       </div>
                       <h3 className="text-3xl md:text-4xl font-black italic uppercase text-white leading-tight">
                          Guided by Professional <span className="text-primary">Coaching</span>
                       </h3>
                       <p className="text-xl text-gray-300 font-medium leading-relaxed italic border-l-4 border-primary/40 pl-6">
                          "All tournaments are aligned with professional chess coaching excellence, ensuring players gain meaningful learning from every match."
                       </p>
                    </div>
                 </div>
              </motion.div>

           </div>
        </div>
      </section>

      {/* ── How to Participate ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">How to <span className="text-primary">Participate</span></h2>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Connector Line */}
            <div className="absolute top-[32px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[10%] right-[10%] h-[2px] bg-white/10 hidden lg:block" />
            
            {[
              { step: "1", title: "Register", desc: "Sign up for the tournament" },
              { step: "2", title: "Schedule", desc: "Get your detailed match schedule" },
              { step: "3", title: "Compete", desc: "Play against diverse opponents" },
              { step: "4", title: "Track", desc: "Monitor your match performance" },
              { step: "5", title: "Improve", desc: "Learn and grow your skills" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="relative z-10 flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <div className="w-16 h-16 rounded-full bg-black border-4 border-primary flex items-center justify-center text-primary text-2xl font-black mb-6 shadow-[0_0_20px_rgba(184,134,11,0.3)]">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold uppercase italic mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Can Participate ── */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
         <div className="max-w-7xl mx-auto">
            <motion.div
               variants={fadeUp}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-4">
                  Who Can <span className="text-primary italic">Participate</span>
               </h2>
               <div className="inline-block bg-white/5 border border-white/10 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm text-gray-400">
                  Tournaments are designed for all skill levels
               </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Beginner", subtitle: "Players", icon: Play },
                 { title: "Intermediate", subtitle: "Learners", icon: Users },
                 { title: "Advanced", subtitle: "& Competitive", icon: Trophy }
               ].map((level, i) => (
                 <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="p-10 rounded-[3rem] glass border border-white/10 flex flex-col items-center text-center hover:border-primary/30 transition-all hover:-translate-y-2"
                 >
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-6 shadow-xl shadow-primary/5">
                       <level.icon size={36} />
                    </div>
                    <h3 className="text-3xl font-black italic uppercase mb-2">{level.title}</h3>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">{level.subtitle}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-24 px-6">
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
                Ready to Compete?
              </h2>
              
              <div className="space-y-6 pt-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="https://wa.me/7620857664"
                    target="_blank"
                    className="w-full sm:w-auto px-12 py-6 bg-black text-primary font-black uppercase tracking-widest text-lg rounded-full hover:scale-105 transition-all shadow-2xl shadow-black/20 flex items-center justify-center gap-3"
                  >
                    Join Tournament <ArrowRight size={20} />
                  </Link>
                  <Link 
                    href="https://wa.me/7620857664"
                    target="_blank"
                    className="w-full sm:w-auto px-12 py-6 border-2 border-black text-black font-black uppercase tracking-widest text-lg rounded-full hover:bg-black hover:text-primary transition-all"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
