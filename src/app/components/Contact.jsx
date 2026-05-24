"use client";

import { Mail, MessageSquare, Calendar, PhoneCall } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative bg-[#07041d] py-24 px-6 overflow-hidden">
      {/* Background Subtle Blur Circles */}
      <div className="absolute top-1/2 left-[-150px] -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header & Sub-header */}
        <div className="mb-12">
          <p className="text-pink-500 font-bold tracking-[3px] text-xs uppercase mb-3">
            Hire Me
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-pink-500 to-cyan-400 mt-4 rounded-full"></div>
        </div>

        {/* Description text */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-12 font-light">
          Ready to hire a freelance developer? Whether you need a Laravel
          developer, React developer, or AI specialist — let's talk about your
          project.
        </p>

        {/* Interactive Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mb-10">
          {/* Email Info Card */}
          <a
            href="mailto:Mubashir005@gmail.com"
            className="flex items-center gap-4 rounded-xl border border-gray-800/60 bg-[#0e0a2b]/30 backdrop-blur-md p-5 hover:border-pink-500/30 hover:bg-[#0e0a2b]/50 transition-all duration-300 group"
          >
            <div className="p-3 rounded-lg bg-pink-950/40 border border-pink-900/50 text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500">
                Email
              </p>
              <p className="text-sm font-semibold text-white mt-0.5 group-hover:text-pink-400 transition-colors">
                Mubashir005@gmail.com
              </p>
            </div>
          </a>

          {/* WhatsApp Quick Chat Info Card */}
          <a
            href="https://wa.me/#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-gray-800/60 bg-[#0e0a2b]/30 backdrop-blur-md p-5 hover:border-cyan-500/30 hover:bg-[#0e0a2b]/50 transition-all duration-300 group"
          >
            <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-900/50 text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500">
                WhatsApp
              </p>
              <p className="text-sm font-semibold text-white mt-0.5 group-hover:text-cyan-400 transition-colors">
                Chat with me
              </p>
            </div>
          </a>
        </div>

        {/* Lower Call-to-Action Interactive Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Primary WhatsApp Action Button with Glow Style */}
          <a
            href="https://wa.me/#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white font-semibold text-sm shadow-[0_0_25px_rgba(236,72,153,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:scale-[1.02] transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4" />
            WhatsApp Me
          </a>

          {/* Secondary Free Call Booking Action Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-purple-500/40 bg-[#0e0a2b]/40 text-white font-semibold text-sm hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 group"
          >
            <Calendar className="w-4 h-4 text-pink-400 group-hover:rotate-6 transition-transform" />
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
