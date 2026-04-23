"use client";

import { Trophy, Users, Star, Rocket, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// ✅ Components Imports
import Navbar from "@/components/navbar";
import HeroSlider from "@/components/heroslider";
import CoursesSection from "@/components/coursessection";
import FAQSection from "@/components/faqsection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      <Navbar />
      <HeroSlider />

      {/* Highlights Section */}
      <section className="py-24 bg-black px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Users, stat: "1000+", label: "Students Trained" },
              { icon: Trophy, stat: "100+", label: "Tournaments Conducted" },
              { icon: Star, stat: "Certified", label: "FIDE-rated Coaches" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto border border-primary/20">
                  <item.icon size={32} />
                </div>
                <div className="text-5xl font-black text-white italic">
                  {item.stat}
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoursesSection />

      {/* Partner Section */}
      <section className="py-32 bg-[#080808] px-6 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10 blur-[120px] opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-24 rounded-[4rem] border-primary/20 space-y-10"
          >
            <div className="inline-flex items-center justify-center gap-3 text-primary font-black uppercase tracking-[0.2em] bg-primary/10 px-6 py-2 rounded-full text-xs">
              <Rocket size={16} /> Partner Opportunity
            </div>

            <h2 className="text-2xl md:text-4xl font-black leading-[0.9] uppercase italic tracking-tighter max-w-4xl mx-auto">
              Start Your <br />
              <span className="text-primary italic">Chess Academy</span> <br />
              With Us 
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Build your own chess academy with access to FIDE-rated coaching network, 
              ready-to-use platforms, student lead support, and full marketing assistance.
            </p>

            <div className="pt-4">
              <Link
                href="/partners"
                className="inline-flex items-center gap-4 bg-primary text-black px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-primary/40 uppercase tracking-widest"
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Section */}
      <section className="py-32 bg-black px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-black leading-[0.9] italic uppercase tracking-tighter">
                Book Your <br />
                <span className="text-primary italic">Free Demo Class</span>
              </h2>
            </motion.div>

            <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
              Learn directly from a FIDE-rated coach and experience our world-class training standards firsthand.
            </p>

            <div className="flex items-center justify-center gap-6 text-gray-500 font-bold">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-black bg-gray-800"
                  />
                ))}
              </div>
              <span className="text-sm">Join 500+ students this month</span>
            </div>
          </div>

          <div className="max-w-xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3rem] border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Link 
                  href="https://wa.me/7620857664"
                  target="_blank"
                  className="w-full bg-primary text-black font-black py-6 px-8 rounded-2xl uppercase tracking-[0.1em] md:tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.05] transition-all shadow-2xl shadow-primary/20 text-lg md:text-xl"
                >
                  <Send size={24} />
                  Book Free Demo
                </Link>
                <p className="text-center mt-6 text-xs font-black uppercase tracking-[0.2em] text-gray-500">
                  Connect on WhatsApp to book instantly
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />

    </main>
  );
}