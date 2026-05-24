"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import logoImg from "../../../public/logo-for-website.png";

const navItems = [
  "About",
  "Services",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0b0724]/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-[1280px] mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logoImg}
              alt="logo"
              width={45}
              height={45}
              className="object-cover"
            />

            <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              MOZID
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`uppercase text-sm font-semibold tracking-wider transition-all duration-300 ${
                    item === "Services"
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}

                  {/* Hover Underline */}
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-5 pt-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className={`block uppercase text-sm font-semibold tracking-wider transition-all duration-300 ${
                    item === "Services"
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
