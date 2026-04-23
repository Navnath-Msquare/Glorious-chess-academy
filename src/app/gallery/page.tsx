"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Camera, Star, ChevronDown } from "lucide-react";

// The total number of images in the public/gallery folder is 46.
const TOTAL_IMAGES = 46;
const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => `/gallery/${i + 1}.jpeg`);

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05 },
  }),
};

export default function GalleryPage() {
  const [visibleCount, setVisibleCount] = useState(8);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 via-transparent to-transparent -z-10 blur-[120px] opacity-50" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto">
              Our <br />
              <span className="text-primary italic">Gallery</span>
            </h1>

          </motion.div>
        </div>
      </section>

      {/* ── Grid Section ── */}
      <section className="pb-32 px-6">
        <div className="max-w-[90rem] mx-auto">
          {/* Uniform Grid Layout: 4 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {images.slice(0, visibleCount).map((src, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "100px" }}
                custom={idx % 4} 
                className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/10 group aspect-[4/3] bg-white/5"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                

              </motion.div>
            ))}
          </div>

          {visibleCount < TOTAL_IMAGES && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 flex justify-center"
            >
              <button
                onClick={() => setVisibleCount(TOTAL_IMAGES)}
                className="group flex items-center gap-3 px-10 py-4 border border-primary/40 text-primary font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-primary/10 shadow-[0_0_20px_rgba(184,134,11,0.1)]"
              >
                <ChevronDown className="group-hover:animate-bounce" size={20} />
                Show More Gallery
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
