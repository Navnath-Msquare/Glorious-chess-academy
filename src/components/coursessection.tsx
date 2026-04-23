"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, User, PlayCircle, Star } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    icon: PlayCircle,
    title: "Beginner Chess Program",
    highlight: "Fundamentals",
    description: "Chess basics, rules, piece movement, and foundational principles for absolute beginners.",
    tags: ["Basics", "Rules", "Movement"],
    color: "bg-blue-600",
  },
  {
    icon: Users,
    title: "Intermediate Training",
    highlight: "Strategic",
    description: "Openings, tactics, and positional play to build a solid strategic foundation for growing players.",
    tags: ["Tactics", "Positional", "Openings"],
    color: "bg-emerald-600",
  },
  {
    icon: User,
    title: "Advanced Coaching",
    highlight: "Competitive",
    description: "Tournament preparation and competitive strategies for players aiming for FIDE ratings.",
    tags: ["FIDE Path", "Tournament Prep"],
    color: "bg-primary",
  },
  {
    icon: Star,
    title: "Kids Special Program",
    highlight: "Junior",
    description: "Engaging, fun-filled coaching designed specifically to build curiosity and basics in young minds.",
    tags: ["Kids", "Fun", "Foundations"],
    color: "bg-amber-500",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-black mb-6 tracking-tight italic">
              OUR <span className="text-primary">PROGRAMS</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Step-by-step professional training designed to nurture excellence 
              through precision and strategic discipline.
            </p>
          </div>
          <div className="mt-8 md:mt-0 glass px-6 py-4 rounded-2xl flex items-center gap-4 border-primary/20">
            <Star className="text-primary" fill="currentColor" />
            <span className="text-sm font-bold uppercase tracking-widest text-gray-300">
              International FIDE Standards
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#121212] overflow-hidden rounded-[2.5rem] border border-white/5 p-1 transition-all hover:border-primary/40 shadow-2xl"
            >
              <div className="h-full p-8 md:p-10 rounded-[2.3rem] bg-gradient-to-b from-white/5 to-transparent flex flex-col justify-between">
                <div className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center text-white mb-8 shadow-2xl transform group-hover:scale-110 transition-transform`}>
                  <course.icon size={32} />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {course.highlight}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-6 italic">{course.title}</h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-10 min-h-[5rem]">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {course.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-gray-500 border border-white/10 px-4 py-2 rounded-xl group-hover:border-primary/20 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="https://wa.me/7620857664"
                  target="_blank"
                  className="block w-full text-center py-4 rounded-2xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all transform group-hover:-translate-y-1 shadow-lg shadow-primary/5 hover:shadow-primary/20"
                >
                  Book Free Trial
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-12 py-5 rounded-full font-black text-lg hover:bg-primary hover:text-white transition-all transform hover:scale-105 uppercase tracking-widest"
          >
           Explore All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
