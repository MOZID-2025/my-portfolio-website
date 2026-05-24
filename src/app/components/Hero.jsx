"use client";

import Image from "next/image";
import profileImg from "../../../public/profile-img.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07041d] flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.15),transparent_35%),radial-gradient(circle_at_right,_rgba(34,211,238,0.15),transparent_35%)]"></div>

      {/* Blur Circles */}
      <div className="absolute top-20 left-10 w-52 h-52 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="absolute top-40 right-1/4 w-44 h-44 bg-cyan-400/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Profile Image */}
        <div className="relative w-fit mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border border-pink-500 animate-pulse"></div>

          <Image
            src={profileImg}
            alt="profile"
            width={140}
            height={140}
            className="rounded-full border-4 border-[#1a1635] object-cover"
          />

          {/* Online Dot */}
          <span className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-cyan-400 border-4 border-[#07041d] shadow-[0_0_20px_#22d3ee]"></span>
        </div>

        {/* Available Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          Available for Freelance & Hire
        </div>

        {/* Intro */}
        <p className="text-pink-400 text-lg mb-3 font-medium">Hey there, I'm</p>

        {/* Big Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
          <span className="bg-gradient-to-r from-pink-400 via-cyan-300 to-pink-300 bg-clip-text text-transparent">
            Abdul Mozid
          </span>

          <br />
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl mb-3">
          Frontend Developer & Next.js Specialist || Dhaka, Bangladesh
        </p>

        {/* Typing Style Text */}
        <p className="text-white text-xl md:text-2xl mb-10">
          SaaS & E-Commerce Solutions
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:scale-105 transition-all duration-300">
            Hire Me
          </button>

          <button className="px-8 py-4 rounded-full border border-purple-500 text-white font-semibold hover:bg-purple-500/10 transition-all duration-300">
            View Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex flex-col items-center">
          <div className="w-[2px] h-16 bg-gradient-to-b from-pink-500 to-transparent"></div>

          <p className="text-xs tracking-[6px] text-gray-500 mt-3">SCROLL</p>
        </div>
      </div>
    </section>
  );
}
