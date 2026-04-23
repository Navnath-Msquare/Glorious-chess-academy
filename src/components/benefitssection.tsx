"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Focus, Calculator, Heart, Puzzle } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Enhance Memory",
    description: "Chess requires remembering complex patterns and game sequences.",
  },
  {
    icon: Focus,
    title: "Boost Concentration",
    description: "A single game can train the mind to focus for extended periods.",
  },
  {
    icon: Calculator,
    title: "Mathematical Link",
    description: "Chess develops logic and spatial reasoning found in mathematics.",
  },
  {
    icon: Heart,
    title: "Anger Management",
    description: "Learn to handle defeat with grace and maintain emotional stability.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    description: "Every move is a puzzle. Develop critical thinking skills.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="services" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-6 tracking-tight">
            WHY PLAY <span className="text-primary italic">CHESS?</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Beyond the board, chess builds the foundation for a sharp and disciplined
            mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl group hover:border-primary/40 transition-all cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                <benefit.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </motion.div>
          ))}
          {/* Custom Card for CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-primary flex flex-col justify-center items-center text-center text-white"
          >
            <h3 className="text-3xl font-black mb-4 italic uppercase">Join Now</h3>
            <p className="mb-8 font-medium">Start your journey today.</p>
            <a
              href="https://wa.me/7620857664"
              target="_blank"
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all uppercase tracking-widest text-sm"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
