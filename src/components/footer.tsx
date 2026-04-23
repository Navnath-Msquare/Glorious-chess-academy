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
            <li className="flex gap-4">
              <Phone className="text-primary flex-shrink-0" size={20} />
              <span className="text-gray-500">+91 76208 57664</span>
            </li>
            <li className="flex gap-4">
              <Mail className="text-primary flex-shrink-0" size={20} />
              <span className="text-gray-500">support@gloriouschess.com</span>
            </li>
            <li className="flex gap-4">
              <MapPin className="text-primary flex-shrink-0" size={20} />
              <span className="text-gray-500 leading-relaxed">
                Ambad Rd, behind Sai Kirti hotel, Prayag Nagar, <br />
                Kanchan Nagar, Old Jalna, Jalna, <br />
                Maharashtra 431203
              </span>
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
