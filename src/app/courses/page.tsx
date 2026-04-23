"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  CheckCircle2, 
  ArrowRight, 
  PlayCircle, 
  Users, 
  User, 
  Star, 
  BookOpen, 
  Trophy, 
  BarChart3, 
  Target, 
  Zap, 
  Video, 
  Gamepad2, 
  Award,
  Brain,
  Focus,
  Lightbulb,
  Map,
  Sparkles,
  Phone,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
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
              <Sparkles className="text-primary" size={16} /> Learn. Master. Checkmate!
            </div> */}
            
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[1] max-w-5xl mx-auto">
              Structured Chess <br />
              <span className="text-primary italic">Programs</span> <br />
              for Every Level
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Learn through a progressive curriculum designed with professional chess coaching excellence, 
              helping you grow from beginner to competitive player.
            </p>
            
            <p className="text-lg text-primary/80 italic max-w-2xl mx-auto">
              A pioneering chess academy, leading in the Marathwada region and rapidly expanding across India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link 
                href="https://wa.me/7620857664"
                target="_blank"
                className="group relative px-10 py-5 bg-primary text-black font-black uppercase tracking-widest text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(184,134,11,0.4)]"
              >
                Enroll Now
              </Link>
              <Link 
                href="https://wa.me/7620857664"
                target="_blank"
                className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-lg rounded-full hover:bg-white/10 transition-all"
              >
                <Phone size={24} className="text-primary" /> Book Free Demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-20 relative px-6 md:px-20"
          >
            <div className="relative rounded-[4rem] overflow-hidden border border-white/10 aspect-video lg:aspect-[21/9] max-w-5xl mx-auto group">
              <Image 
                src="/courses-hero.png" 
                alt="Chess Training Excellence" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Quick Badge */}
              <div className="absolute -top-10 -right-10 glass p-8 rounded-3xl border-primary/20 hidden md:block rotate-6">
                <div className="text-center">
                   <div className="text-4xl font-black text-primary italic leading-none">FIDE</div>
                   <div className="text-gray-500 font-bold uppercase text-xs tracking-widest">Rated Standards</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Learning Approach */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeInUp}>
                 <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-8">
                   Our Learning <span className="text-primary italic">Approach</span>
                 </h2>
                 <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
                   At Glorious Chess Academy, we follow a step-by-step structured training model 
                   that ensures continuous improvement and long-term success.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { t: "Concept-based learning", i: Brain },
                      { t: "Practical game application", i: Gamepad2 },
                      { t: "Regular practice & analysis", i: BarChart3 },
                      { t: "Tournament exposure", i: Trophy },
                      { t: "Continuous tracking", i: Target },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 glass bg-white/5 p-6 rounded-2xl border-white/5">
                         <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <item.i size={20} />
                         </div>
                         <span className="font-bold text-gray-300 leading-tight">{item.t}</span>
                      </div>
                    ))}
                 </div>
              </motion.div>
              <motion.div {...fadeInUp} className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-video">
                 <Image 
                   src="/courses-journey.png" 
                   alt="Learning Environment" 
                   fill 
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black/60" />
                 <div className="absolute bottom-8 left-8">
                    <div className="text-3xl font-black italic text-white uppercase tracking-tight">Structured Growth</div>
                    <div className="text-primary font-bold">From Basics to Mastery</div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Our Courses */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-24">
             <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-8">
               Our <span className="text-primary italic">Courses</span>
             </h2>
             <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                level: "Beginner Level",
                perfect: "New learners & kids starting their chess journey",
                points: ["Chess basics (board, pieces, rules)", "Basic moves & strategies", "Introduction to openings", "Simple tactics & gameplay"],
                footer: "Build a strong foundation and confidence",
                icon: PlayCircle,
                highlight: "The Foundation"
              },
              {
                level: "Intermediate Level",
                perfect: "Players with basic knowledge",
                points: ["Opening principles", "Tactical combinations", "Positional understanding", "Game analysis techniques"],
                footer: "Improve your thinking and gameplay strategy",
                icon: Users,
                highlight: "The Strategy",
                active: true
              },
              {
                level: "Advanced Level",
                perfect: "Competitive players",
                points: ["Advanced strategies", "Tournament preparation", "Deep game analysis", "Competitive mindset development"],
                footer: "Prepare for tournaments and higher-level competition",
                icon: Trophy,
                highlight: "The Mastery"
              }
            ].map((course, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass p-12 rounded-[4rem] border-white/5 flex flex-col h-full group hover:border-primary/40 transition-all duration-500 relative ${course.active ? "bg-white/5 border-primary/20" : ""}`}
              >
                {course.active && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-black px-6 py-2 rounded-full uppercase text-xs tracking-widest shadow-xl">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <course.icon size={32} />
                  </div>
                  <h3 className="text-4xl font-black mb-4 italic uppercase tracking-tighter">{course.level}</h3>
                  <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/5 min-h-[100px] flex flex-col justify-center">
                     <div className="text-xs uppercase font-black text-gray-500 mb-2 tracking-widest">Perfect For</div>
                     <p className="text-gray-300 font-bold leading-tight">{course.perfect}</p>
                  </div>
                  <div className="space-y-4 mb-10 flex-grow">
                    <div className="text-xs uppercase font-black text-primary mb-4 tracking-widest">What You Will Learn</div>
                    {course.points.map((p, pi) => (
                       <div key={pi} className="flex gap-3">
                          <CheckCircle2 className="text-primary shrink-0" size={18} />
                          <span className="text-gray-400 font-medium leading-snug">{p}</span>
                       </div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-8 border-t border-white/10 text-center flex flex-col justify-end">
                   <p className="text-lg font-black italic uppercase text-gray-500 mb-8 min-h-[56px] flex items-center justify-center">{course.footer}</p>
                    <Link 
                      href="https://wa.me/7620857664"
                      target="_blank"
                      className="w-full block py-5 rounded-full font-black uppercase tracking-widest transition-all bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
                    >
                      Enroll Now
                    </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get & Tournaments */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div {...fadeInUp}>
             <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12">What <span className="text-primary italic">You Get</span></h2>
             <div className="space-y-6">
               {[
                 { t: "Live interactive classes", d: "Real-time guidance with expert mentors.", i: Video },
                 { t: "Recorded sessions", d: "Never miss a move with revision access.", i: PlayCircle },
                 { t: "Practice games", d: "Play and learn with your peers regularly.", i: Gamepad2 },
                 { t: "Assignments & puzzles", d: "Structured homework to sharpen your mind.", i: BookOpen },
                 { t: "Continuous feedback", d: "Personalized reviews to track your growth.", i: MessageCircle }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-center glass p-6 rounded-3xl border-white/5 group hover:border-primary/30 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                       <item.i size={24} />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold uppercase italic leading-none mb-1">{item.t}</h4>
                       <span className="text-gray-500 font-medium">{item.d}</span>
                    </div>
                 </div>
               ))}
             </div>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-primary/5 p-12 rounded-[4rem] border border-primary/20 flex flex-col">
             <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <Trophy size={16} />
                Competition Excellence
             </div>
             <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12">Tournaments & <br /> <span className="text-primary italic">Certification</span></h2>
             <div className="space-y-10 flex-1">
                {[
                  { t: "Regular Online Tournaments", d: "Compete with students across the platform." },
                  { t: "Leaderboards & Rankings", d: "Track your position in our growing community." },
                  { t: "Performance Certificates", d: "Get recognized for your level completion." },
                  { t: "Competitive Exposure", d: "Preparation for district & state tournaments." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                     <div>
                        <h4 className="text-2xl font-black uppercase italic tracking-tight mb-2 leading-none">{item.t}</h4>
                        <p className="text-gray-400 font-medium">{item.d}</p>
                     </div>
                  </div>
                ))}
             </div>
             <div className="mt-12 p-8 glass rounded-3xl border-primary/10 text-center">
                <div className="text-primary font-black text-3xl italic tracking-tighter mb-2">CERTIFIED MASTERY</div>
                <div className="text-gray-500 text-xs font-black uppercase tracking-widest">Upon Completion Of Advanced Modules</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Skills You Will Develop */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-24">
             <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-4">
               Skills You Will <span className="text-primary italic">Develop</span>
             </h2>
             <p className="text-xl text-gray-500 font-medium italic">Chess is more than a game—it's a tool for brain development.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Strategic Thinking", i: Target, c: "Plan your moves multiple steps ahead." },
              { t: "Focus & Concentration", i: Focus, c: "Build deep attention and mental stamina." },
              { t: "Decision Making", i: Lightbulb, c: "Learn to act with confidence under pressure." },
              { t: "Problem Solving", i: Zap, c: "Analyze complex situations and find solutions." }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-12 rounded-[3.5rem] border-white/5 text-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary mx-auto mb-8 border border-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                   <skill.i size={40} />
                </div>
                <h4 className="text-2xl font-black uppercase italic tracking-tight mb-4">{skill.t}</h4>
                <p className="text-gray-500 font-medium leading-snug">{skill.c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Learning Journey */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.div {...fadeInUp} className="text-center mb-24">
             <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">Your Learning <br /> <span className="text-primary italic">Journey</span></h2>
           </motion.div>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {[
                { s: "01", t: "Free Demo", d: "Book & experience our teaching." },
                { s: "02", sTitle: "Assessment", d: "We evaluate your current skills." },
                { s: "03", t: "Join Course", d: "Get placed in the right level." },
                { s: "04", t: "Practice", d: "Learn basics and start competing." },
                { s: "05", t: "Master", d: "Master game and win tournaments." },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  className="relative h-full"
                >
                   <div className="glass p-10 rounded-[3rem] border-white/5 text-center h-full hover:border-primary/30 transition-all flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-primary text-black font-black text-xl flex items-center justify-center mb-8 border-4 border-black">
                         {step.s}
                      </div>
                      <h4 className="text-xl font-black uppercase italic tracking-tight mb-4">{step.t || step.sTitle}</h4>
                      <p className="text-gray-500 font-medium leading-tight">{step.d}</p>
                   </div>
                   {i < 4 && (
                     <div className="hidden lg:block absolute top-[4.5rem] -right-4 w-8 h-px bg-white/10 z-0" />
                   )}
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Why Our Courses Stand Out */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeInUp}>
                 <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12">Why Our Courses <br /> <span className="text-primary italic">Stand Out</span></h2>
                 <div className="space-y-6">
                    {[
                      "Structured & progressive curriculum tailored for growth",
                      "Balanced focus on both conceptual learning & competition",
                      "Professional coaching approach by national/international standards",
                      "Part of a rapidly growing academy network across India"
                    ].map((reason, i) => (
                      <div key={i} className="flex gap-4 items-center glass p-8 rounded-3xl border-white/5">
                         <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                            <CheckCircle2 size={16} />
                         </div>
                         <span className="text-xl font-bold text-gray-300">{reason}</span>
                      </div>
                    ))}
                 </div>
              </motion.div>
              <motion.div {...fadeInUp} className="text-center">
                 <div className="inline-block glass p-16 rounded-[4.5rem] border-primary/10 relative">
                    <div className="absolute top-0 right-0 p-8 text-primary opacity-10"><Sparkles size={120} /></div>
                    <div className="text-8xl font-black text-primary italic leading-none mb-4">PAN</div>
                    <div className="text-4xl font-black italic uppercase tracking-tighter mb-8 text-white">INDIA NETWORK</div>
                    <p className="text-gray-400 font-medium max-w-sm mx-auto leading-relaxed">
                      Join a community that is expanding chess awareness and excellence 
                      region by region, across the entire country.
                    </p>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
           <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] blur-[100px]" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 glass p-16 md:p-24 rounded-[4rem] border-white/10 text-center">
           <motion.div {...fadeInUp}>
              <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
                Start Your Chess <br /> <span className="text-primary italic">Journey Today</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                 <Link 
                   href="https://wa.me/7620857664"
                   target="_blank"
                   className="px-12 py-6 bg-primary text-white font-black rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/30"
                 >
                    Enroll Now
                 </Link>
                 <Link 
                   href="https://wa.me/7620857664"
                   target="_blank"
                   className="px-12 py-6 bg-white/5 border border-white/20 text-white font-black rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                 >
                    Book Free Demo
                 </Link>
              </div>
           </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
