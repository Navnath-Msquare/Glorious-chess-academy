"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Target, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 p-4 relative">
            <div className="absolute inset-0 bg-primary/5 z-10" />
            <img
              src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000"
              alt="Chess Academy"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl flex flex-col items-center">
            <span className="text-4xl font-black text-primary">10+</span>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Years Experience
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6">
             Why Choose Us
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-10 leading-tight uppercase italic tracking-tighter">
            Elevate Your Game with <br />
            <span className="text-primary">FIDE Standards</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
            Glorious Chess Academy is committed to developing chess talent through 
            structured training, expert mentorship, and competitive exposure. 
            Our programs are led by FIDE-rated coaches, ensuring that every 
            student receives world-class chess education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Award,
                title: "FIDE Certified Coaches",
                description: "Learn from FIDE-rated & certified coaches with international expertise.",
              },
              {
                icon: Target,
                title: "Structured Curriculum",
                description: "Comprehensive roadmap designed for every skill level (Beginner → Advanced).",
              },
              {
                icon: Shield,
                title: "Live Classes & Tournaments",
                description: "Interactive online sessions paired with regular tournament exposure.",
              },
              {
                icon: Target,
                title: "Tracking & Certificates",
                description: "Detailed performance tracking and official recognition certificates.",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Personalized support for both individual students and academy partners.",
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon size={20} />
                </div>
                <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tight">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
