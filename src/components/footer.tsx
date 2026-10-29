import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Camera, Share2, Play } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Glorious Chess Academy Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-black tracking-tight uppercase">
              GLORIOUS CHESS <span className="text-primary italic">ACADEMY</span>
            </span>
          </Link>
          <p className="text-gray-500 leading-relaxed">
            Nurturing excellence through precision, strategy, and discipline. Join
            the elite circle of chess players.
          </p>
          <div className="flex space-x-4">
            {[Camera, Share2, Play].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-8 uppercase tracking-widest italic text-primary">Explore</h4>
          <ul className="space-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "Student", href: "/students" },
              { name: "Partner", href: "/partners" },
              { name: "Courses", href: "/courses" },
              { name: "Tournaments", href: "/tournaments" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-all" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-8">Contact Us</h4>
          <ul className="space-y-6">
            <li>
              <a
                href="tel:+917620857664"
                className="flex gap-4 text-gray-500 hover:text-primary transition-colors group items-center"
              >
                <Phone className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span>+91 76208 57664</span>
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@gloriouschess.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 text-gray-500 hover:text-primary transition-colors group items-center"
                title="Send email via Gmail"
              >
                <Mail className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span>support@gloriouschess.com</span>
              </a>
            </li>
            <li className="flex gap-4 items-start">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
              <div className="space-y-3">
                <span className="text-gray-400 text-sm leading-relaxed block">
                  Ambad Rd, behind Sai Kirti hotel, Prayag Nagar, <br />
                  Kanchan Nagar, Old Jalna, Jalna, <br />
                  Maharashtra 431203
                </span>
                
                {/* 📍 Mast Designed 'View Maps' Button */}
                <a
                  href="https://maps.google.com/maps?q=Ambad+Rd,+behind+Sai+Kirti+hotel,+Prayag+Nagar,+Kanchan+Nagar,+Old+Jalna,+Jalna,+Maharashtra+431203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-amber-500/20 to-primary/10 hover:from-primary hover:to-amber-500 border border-primary/40 hover:border-primary text-amber-300 hover:text-black font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(184,134,11,0.2)] hover:shadow-[0_0_25px_rgba(184,134,11,0.6)] hover:scale-105 group"
                  title="Open location in Google Maps"
                >
                  <MapPin size={13} className="text-primary group-hover:text-black transition-colors" />
                  <span>View Maps</span>
                  <span className="text-xs group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-8">Stay Updated</h4>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
            />
            <button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-opacity-90 transition-all">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2024 Glorious Chess Academy. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
