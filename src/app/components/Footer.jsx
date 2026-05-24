"use client";

import { MessageSquare, Mail } from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#07041d] border-t border-gray-900/40 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center justify-between gap-6">
        {/* Top Decorative Colored Bar Element */}
        <div className="w-16 h-[3px] bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full mb-2"></div>

        {/* Copyright and Title Content */}
        <div className="space-y-1">
          <p className="text-gray-400 text-xs md:text-sm tracking-wide font-light">
            Designed & Built with{" "}
            <span className="text-pink-500 text-xs">♥</span> Abdul Mozid © 2026
          </p>
          <p className="text-gray-500 text-[11px] md:text-xs tracking-wider uppercase font-medium">
            Frontend Developer — Dhaka, Bangladesh
          </p>
        </div>

        {/* Circular Contact / Social Icons Row */}
        <div className="flex items-center gap-3 mt-2">
          {/* Custom Platform / Alternative Social Icon */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#0e0a2b]/60 border border-gray-800 flex items-center justify-center text-orange-500 hover:border-orange-500/40 hover:bg-[#0e0a2b]/90 transition-all duration-300 group"
          >
            <FaGithubSquare className="w-4 h-4 group-hover:scale-105 transition-transform" />
          </a>

          {/* Chat Icon Link */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#0e0a2b]/60 border border-gray-800 flex items-center justify-center text-gray-400 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-[#0e0a2b]/90 transition-all duration-300 group"
          >
            <MessageSquare className="w-4 h-4 group-hover:scale-105 transition-transform" />
          </a>

          {/* Mail Icon Link */}
          <a
            href="mailto:example@domain.com"
            className="w-9 h-9 rounded-full bg-[#0e0a2b]/60 border border-gray-800 flex items-center justify-center text-gray-400 hover:border-pink-500/40 hover:text-pink-400 hover:bg-[#0e0a2b]/90 transition-all duration-300 group"
          >
            <Mail className="w-4 h-4 group-hover:scale-105 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
