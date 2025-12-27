"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";


const navItems = [
  { name: "Home", href: "#home" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95vw] md:w-[92vw] lg:w-[90vw] max-w-6xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 md:px-5 lg:px-6 py-4 shadow-xl"
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <motion.h1
            className="text-white font-bold text-sm md:text-base tracking-wide whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Sherwin Rodriguez
            </span>
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-3 lg:gap-6 xl:gap-8 items-center text-xs md:text-sm lg:text-base font-medium text-white">
            {navItems.map((item, idx) => (
              <li key={idx} className="group relative">
                <a
                  href={item.href}
                  className="transition-all px-2 lg:px-3 py-1 hover:text-indigo-400 whitespace-nowrap"
                >
                  {item.name}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons & Social Links */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-xs lg:text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              Resume
            </motion.a>
            
            <div className="flex items-center gap-1.5 lg:gap-2">
              <motion.a
                href="https://github.com/SherwinRodriguez"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 lg:p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4 lg:w-5 lg:h-5 text-white/70 hover:text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sherwin-emmanuel-rodriguez-67445b290/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 lg:p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 text-white/70 hover:text-white" />
              </motion.a>
            </div>
          </div>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-4 flex flex-col md:hidden bg-black/40 backdrop-blur-md rounded-xl p-4 space-y-3 text-sm text-white font-medium border border-white/10 shadow-xl"
            >
              {navItems.map((item, idx) => (
                <li key={idx} className="group relative text-center">
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
              
              <div className="pt-4 border-t border-white/10 space-y-2">
                <motion.a
                  href="/resume.pdf"
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
                
                <div className="flex items-center justify-center gap-3 pt-2">
                  <motion.a
                    href="https://github.com/SherwinRodriguez"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5 text-white/70" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/sherwin-emmanuel-rodriguez-67445b290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white/70" />
                  </motion.a>
                </div>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;