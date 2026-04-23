"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "WHERE DO I FIND DETAILS ABOUT THE COURSES YOU OFFER?",
    answer: "Classes are conducted through online live classroom.Weekly classes are lasting 45 min to 1 hour (2 classes).Followed by assignments/ practice/ tournaments sessions.Your child will receive a certificate upon completion from Glorious Chess Academy, India.",
  },
  {
    question: "HOW LONG WILL MY CHILD HAVE ACCESS TO THEIR ACCOUNT AND CONTACT THE COACH FOR SUPPORT?",
    answer: "As long as your subscription is up to date, you will always have access to the classes and the Coach. The Coach will share the class schedule and relevant information on how to reach him/her for questions with you.",
  },
  {
    question: "I´D HOPE THAT WITH TIME MY CHILD TRANSITIONS TO PROFESSIONAL CHESS?",
    answer: "Yes! Our courses are designed to help your child progressively improve their skill and performance as a Chess player. The Grandmaster course is designed to nurture pro players.",
  },
  {
    question: "WHAT IF MY CHILD HAS NO PRIOR EXPOSURE TO CHESS?",
    answer: "The trial class is designed to help the Coach determine your child’s skill level, learning style, and level of interest. If the Coach determines that your child is a beginner, then he/she will be placed in an appropriate class.",
  },
  {
    question: "I WANT TO ENROLL MY KID INTO GLORIOUS CHESS ACADEMY; WHERE DO I START?",
    answer: "Follow these quick steps:Complete the enrollment form. Our team will contact you to schedule a trial class. What you can expect in trial class.Once you complete the trial class, based on Coach’s evaluation – we will contact you to understand your interest in enrolling your child for a chess class.Your child’s instructor will be the Coach that handled your child’s trial class.Once you are good to go with the timing and other considerations, we will send you the enrollment confirmation email and invoice. We will ask you to make the payment to a bank account in India.",
  },
  {
    question: "WILL MY CHILD RECEIVE A CERTIFICATE UPON COMPLETION OF A LEVEL?",
    answer: "Yes! The Coach will administer an assessment test to gauge understanding concepts before promoting your child to the next level. Upon qualification, your child will earn a Glorious Chess Academy.",
  },
  {
    question: "WHY AM I SEEING CHILDREN OF DIFFERENT AGE GROUPS IN MY CHILD’S CLASS?",
    answer: "At Glorious Chess Academy, we organize classes not based on age but based on the level of understanding. We assign classes and group kids according to the Coach’s evaluation during the trial classes. We have three main levels: Beginner, Intermediate, and Pro.",
  },
  {
    question: "HOW IS THE CURRICULUM STRUCTURED AND HOW LONG DOES IT TAKE FOR MY KIDS TO GET TO THE NEXT LEVEL?",
    answer: "It depends on the kids. We don’t push kids to move levels but rather look at their passion and support them so they can excel in Chess. However, we have put in a tentative duration of the course and you can find it here.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6">
            Everything You Need To Know
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-6">
            FREQUENTLY ASKED <span className="text-primary italic">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl overflow-hidden transition-all duration-300 border border-white/5 hover:border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors pr-6">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-primary flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-400 text-lg leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 glass p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-primary/10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white">
              <MessageCircle size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-bold italic">Still have questions?</h4>
              <p className="text-gray-400">Our coaches are here to help your child succeed.</p>
            </div>
          </div>
          <a
            href="https://wa.me/7620857664"
            target="_blank"
            className="bg-primary hover:bg-opacity-90 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/20"
          >
            Chat with a Coach
          </a>
        </div>
      </div>
    </section>
  );
}
