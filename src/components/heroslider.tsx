"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/slider1.png",
    title: "Master Chess with FIDE-Rated Coaches ",
    subtitle: "Learn from certified FIDE-rated coaches, compete globally, and build winning strategies with structured online chess training.",
  },
];

export default function HeroSlider() {
  const current = 0;

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src={slides[current].image}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl pt-40"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 tracking-tighter leading-tight uppercase italic">
            {slides[0].title.split(" ").map((word, i) => (
              <span key={i} className={word === "FIDE-Rated" ? "text-primary" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
            {slides[0].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/students"
              className="bg-primary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-2xl shadow-primary/20 flex items-center gap-3 uppercase tracking-widest"
            >
               Join as Student
            </Link>
            <Link 
              href="/partners"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all transform hover:scale-105 uppercase tracking-widest"
            >
              Become a Partner
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
