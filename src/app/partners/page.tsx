"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Presentation, 
  ShieldCheck, 
  Mail, 
  Send, 
  Rocket, 
  CheckCircle2, 
  Coins, 
  UserPlus, 
  GraduationCap, 
  Globe, 
  Target,
  Zap,
  MessageCircle,
  Phone
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

export default function PartnerPage() {
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
              <Rocket size={16} className="fill-current" /> Partner With Excellence
            </div> */}
            
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto">
              Build Your Own <br />
              <span className="text-primary italic">Chess Academy</span> <br />
              & Grow With Us
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Join Glorious Chess Academy and become a part of a rapidly growing chess ecosystem. 
              Leverage our platform, structured programs, and professional chess coaching excellence 
              to build and scale your coaching business.
            </p>

            <p className="text-lg text-primary/80 italic max-w-2xl mx-auto">
              A pioneering chess academy, leading in the Marathwada region and rapidly expanding across India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link 
                href="#apply"
                className="group relative px-10 py-5 bg-primary text-black font-black uppercase tracking-widest text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(184,134,11,0.4)]"
              >
                Apply as Partner
              </Link>
              <Link 
                href="https://wa.me/7620857664"
                target="_blank"
                className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-lg rounded-full hover:bg-white/10 transition-all"
              >
                <Phone size={24} className="text-primary" /> Schedule a Call
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
                src="/partner-hero.png" 
                alt="Partner Partnership" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Stats Card Overlay */}
              <div className="absolute bottom-10 left-10 glass p-8 rounded-3xl border-primary/20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <TrendingUp size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-black italic uppercase">Fastest Growing</div>
                    <div className="text-gray-500 font-bold uppercase text-xs tracking-widest">In Marathwada Region</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Become a Partner */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-8">
              Why <span className="text-primary italic">Become a Partner?</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Globe, title: "Ready Platform", text: "Ready-to-use chess learning platform for seamless training." },
              { icon: GraduationCap, title: "FIDE Ecosystem", text: "Access to professional & FIDE-level coaching excellence." },
              { icon: UserPlus, title: "Lead Generation", text: "Direct support for student lead generation and growth." },
              { icon: Rocket, title: "Onboarding", text: "Comprehensive training and onboarding assistance for partners." },
              { icon: ShieldCheck, title: "Branding", text: "Complete branding & marketing support to build your identity." },
              { icon: Zap, title: "Hybrid Model", text: "Flexible Online + offline business model for maximum reach." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="glass p-12 rounded-[3.5rem] border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon size={120} />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Earnings Opportunity */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <motion.div {...fadeInUp}>
                <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-8">
                  Earning <span className="text-primary italic">Opportunity</span>
                </h2>
                <p className="text-2xl text-gray-400 mb-12 font-medium italic">Turn your passion for chess into a scalable business.</p>
                <div className="space-y-6">
                  {[
                    "Earn by teaching students with our structured format",
                    "Build your own academy brand within our network",
                    "Expand with multiple batches & specialized programs",
                    "Grow with increasing demand for structured chess learning"
                  ].map((point, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Coins size={14} />
                      </div>
                      <span className="text-xl text-gray-300 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
             </motion.div>
             <motion.div 
               {...fadeInUp}
               className="relative rounded-[4rem] overflow-hidden border border-white/10 aspect-video lg:aspect-square"
             >
                <Image 
                  src="/partner-growth.png" 
                  alt="Earnings Opportunity" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                <div className="absolute bottom-12 left-12">
                   <div className="text-6xl font-black italic tracking-tighter text-white">SCALABLE</div>
                   <div className="text-primary font-black text-2xl uppercase italic">Business Model</div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Who Can Join & What You Get */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div {...fadeInUp} className="glass p-16 rounded-[4rem] border-white/5 h-full">
            <h3 className="text-4xl font-black mb-12 uppercase italic text-primary">Who Can Join?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { title: "Coaches & Trainers", icon: Users },
                 { title: "Existing Academies", icon: ShieldCheck },
                 { title: "Schools & Institutions", icon: Globe },
                 { title: "Chess Enthusiasts", icon: Target },
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:border-primary/30 transition-all">
                    <item.icon className="text-primary mb-4" size={32} />
                    <span className="font-black text-lg uppercase italic tracking-tight">{item.title}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-12 py-8">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">
              What <span className="text-primary italic">You Get</span>
            </h2>
            <div className="space-y-8">
               {[
                 { t: "Complete Platform", d: "A comprehensive digital ecosystem for classes and administration." },
                 { t: "Structured Curriculum", d: "Scientifically designed roadmap from Beginner to Advanced levels." },
                 { t: "Mentor Training", d: "Hands-on guidance and wisdom from our most experienced mentors." },
                 { t: "Student Support", d: "Active assistance in student onboarding and initial class setups." },
                 { t: "Engagement Ecosystem", d: "Access to tournaments, events, and a vibrant chess community." },
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase italic tracking-tight mb-2">{item.t}</h4>
                      <p className="text-gray-500 font-medium">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Opportunity is Growing */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
              Why This Opportunity <br /> is <span className="text-primary italic">Growing</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Rapid increase in chess awareness across India",
              "Strong demand for structured & professional learning",
              "Growing student base across urban & rural regions",
              "Expanding network across Pan India ecosystem"
            ].map((text, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[3rem] border-white/5 text-center flex flex-col items-center"
              >
                <div className="text-6xl font-black text-primary/20 mb-6 italic">{i+1}</div>
                <p className="text-xl font-bold text-gray-300 leading-snug">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.h2 {...fadeInUp} className="text-2xl md:text-4xl font-black text-center mb-24 italic uppercase tracking-tighter">
             How It <span className="text-primary italic">Works</span>
           </motion.h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Apply as Partner", text: "Submit your application and start the journey with us." },
                { step: "02", title: "Training", text: "Receive professional onboarding and platform training." },
                { step: "03", title: "Launch Academy", text: "Open your academy with our full branding support." },
                { step: "04", title: "Scale & Earn", text: "Start teaching, expanding batches, and earning." },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeInUp}
                  className="relative"
                >
                   <div className="glass p-10 rounded-[3rem] border-white/5 text-center h-full group hover:border-primary/30 transition-all">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-black text-2xl mx-auto mb-8 border-4 border-black">
                         {item.step}
                      </div>
                      <h4 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed font-medium">{item.text}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Our Strength & Support */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div {...fadeInUp}>
             <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12">Our <span className="text-primary italic">Strength</span></h2>
             <div className="space-y-4">
                {[
                  "Rapidly growing presence across India with high standards",
                  "Strong leadership in the Marathwada region and beyond",
                  "Structured and scalable business model for any scale",
                  "Focus on quality training & long-term professional growth"
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 items-center glass p-6 rounded-2xl border-white/5">
                     <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                     <span className="font-bold text-gray-400">{s}</span>
                  </div>
                ))}
             </div>
          </motion.div>

          <motion.div {...fadeInUp}>
             <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12">Support <span className="text-primary italic">You Receive</span></h2>
             <div className="space-y-4">
                {[
                  "Marketing & lead generation support from our central team",
                  "Complete technical platform support for online classes",
                  "Regular training & mentorship from expert chess masters",
                  "Continuous guidance for business expansion and growth"
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 items-center glass p-6 rounded-2xl border-white/5">
                     <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                     <span className="font-bold text-gray-400 w-full">{s}</span>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="apply" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
           <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] blur-[100px]" />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 glass p-16 md:p-24 rounded-[4rem] border-primary/20 text-center">
           <motion.div {...fadeInUp}>
              <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
                Start Your Journey as a <br /> <span className="text-primary italic">Chess Partner Today</span>
              </h2>
              <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
                Join our network and build a legacy in the world of chess. We provide the tools, you provide the passion.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                 <Link 
                   href="https://wa.me/7620857664"
                   target="_blank"
                   className="px-12 py-6 bg-primary text-white font-black rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/30"
                 >
                    <Mail size={20} />
                    Apply Now
                 </Link>
                 <Link 
                   href="https://wa.me/7620857664"
                   target="_blank"
                   className="px-12 py-6 bg-white/5 border border-white/20 text-white font-black rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                 >
                    <MessageCircle size={20} />
                    Talk to Our Team
                 </Link>
              </div>
           </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
