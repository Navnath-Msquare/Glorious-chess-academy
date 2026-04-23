"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, MessageSquare, User, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "General Inquiry", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name: string) => {
    if (!name) return "Name is required.";
    if (!/^[A-Za-z\s]+$/.test(name.trim())) return "Only letters and spaces are allowed.";
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email) return "Email is required.";
    if (!email.includes("@")) return "Email must contain an '@' symbol.";
    if (!email.includes(".")) return "Email must contain a valid domain (e.g., .com).";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return "Please enter a valid email address.";
    return "";
  };

  const validateMessage = (message: string) => {
    if (!message) return "Message is required.";
    return "";
  };

  const handleOnChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof typeof errors]) {
      if (field === 'name') setErrors({ ...errors, name: validateName(value) });
      if (field === 'email') setErrors({ ...errors, email: validateEmail(value) });
      if (field === 'message') setErrors({ ...errors, message: validateMessage(value) });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const errorData = await response.json();
          alert(`Failed to send message: ${errorData.error || 'Unknown error'}`);
        } else {
          const text = await response.text();
          console.error("Non-JSON Server Error Response:", text);
          alert("Server error occurred. Please configure the .env.local file with EMAIL_USER and EMAIL_PASS if you haven't yet, and restart the server!");
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(184,134,11,0.2)]">
              <Star size={16} className="fill-current" /> Connect With Us
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto">
              Get In <br />
              <span className="text-primary italic">Touch</span>
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Have questions or want to start your journey with us? Fill the form and our team will connect with you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-12">
  <div>
    <h2 className="text-2xl md:text-4xl font-black mb-8 italic uppercase tracking-tighter">
      Reach <span className="text-primary italic">Out</span>
    </h2>
    <p className="text-gray-400 text-lg leading-relaxed font-medium capitalize">
      Whether you're a potential student, partner, or coach, we're here to help you make your next move.
    </p>
  </div>

  <div className="flex flex-col gap-4">
    {[
      { icon: Phone, label: "Call Us", text: "+91 76208 57664" },
      { icon: Mail, label: "Email Support", text: "support@gloriouschess.com" },
      {
        icon: MapPin,
        label: "Our Office",
        text: "Ambad Rd, behind Sai Kirti hotel, Prayag Nagar, Kanchan Nagar, Old Jalna, Jalna, Maharashtra 431203",
        link: "https://maps.google.com/maps?q=Ambad+Rd,+behind+Sai+Kirti+hotel,+Prayag+Nagar,+Kanchan+Nagar,+Old+Jalna,+Jalna,+Maharashtra+431203"
      }
    ].map((item, idx) => (
      <div key={idx} className="flex items-start gap-8">

        {/* ICON */}
        <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10">
          <item.icon size={22} />
        </div>

        {/* TEXT */}
        <div className="flex flex-col w-full text-left">

          <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">
            {item.label}
          </span>

          <span className="text-lg font-bold text-gray-200 leading-snug">
            {item.text}
          </span>

          {/* BUTTON RIGHT */}
          {item.link && (
            <div className="w-full flex justify-end mt-3">
              <a 
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-5 py-2 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full transition-all items-center gap-2"
              >
                <MapPin size={14} /> View on Map
              </a>
            </div>
          )}

        </div>
      </div>
    ))}
  </div>
</div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="glass p-10 md:p-12 rounded-[3.5rem] border-primary/20">
              <form className="space-y-8" onSubmit={handleContactSubmit} noValidate>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">
                      Full Name *
                    </label>
                    <div className="relative group">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity"
                        size={16}
                      />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleOnChange('name', e.target.value)}
                        onBlur={(e) => setErrors({ ...errors, name: validateName(e.target.value) })}
                        placeholder="Full Name"
                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-2xl p-5 pl-12 focus:border-primary outline-none transition-all`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs font-bold pl-2">{errors.name}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">
                      Email Address *
                    </label>
                    <div className="relative group">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity"
                        size={16}
                      />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleOnChange('email', e.target.value)}
                        onBlur={(e) => setErrors({ ...errors, email: validateEmail(e.target.value) })}
                        placeholder="email address"
                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-2xl p-5 pl-12 focus:border-primary outline-none transition-all`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs font-bold pl-2">{errors.email}</p>}
                  </div>

                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">
                    Subject
                  </label>
                  <div className="relative group">
                    <MessageSquare
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity"
                      size={16}
                    />
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-12 focus:border-primary outline-none transition-all appearance-none"
                    >
                      <option className="text-black" value="General Inquiry">General Inquiry</option>
                      <option className="text-black" value="Enrollment Question">Enrollment Question</option>
                      <option className="text-black" value="Technical Support">Technical Support</option>
                      <option className="text-black" value="Partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleOnChange('message', e.target.value)}
                    onBlur={(e) => setErrors({ ...errors, message: validateMessage(e.target.value) })}
                    placeholder="Tell us more about your child's chess journey..."
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-2xl p-5 focus:border-primary outline-none transition-all resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs font-bold pl-2">{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-black py-6 rounded-2xl uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.01] transition-all shadow-2xl shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <MessageSquare size={20} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>
            
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}