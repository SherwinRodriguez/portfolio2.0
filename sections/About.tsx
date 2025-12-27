"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Trophy } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 px-4 sm:px-6 md:px-20 min-h-screen flex flex-col items-center justify-center"
    >

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl w-full"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              About Me
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </motion.div>

        {/* Content Grid - 3 Structured Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Block 1: Professional Identity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Code2 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Identity</h3>
              </div>
              <ul className="space-y-3 text-white/80 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Full-stack developer with 2 completed internships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Computer Science student at Loyola ICAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Hands-on experience building APIs and frontend features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Learning system design through real-world projects</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Block 2: Technical Focus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Technical Focus</h3>
              </div>
              <ul className="space-y-3 text-white/80 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong className="text-white">Backend:</strong> Java, Spring Boot, REST APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong className="text-white">Frontend:</strong> React, Next.js, TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong className="text-white">Databases:</strong> MongoDB, PostgreSQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong className="text-white">Exploring:</strong> Web3, Solidity, System Design Patterns</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Block 3: Personal Edge - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-300 group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-pink-500/20 rounded-lg">
                <Trophy className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Beyond Code</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80 text-lg">
              <div>
                <p className="leading-relaxed">
                  Professional footballer with a passion for competitive sports. This journey has instilled strong values of <strong className="text-white">discipline</strong>, <strong className="text-white">teamwork</strong>, and <strong className="text-white">resilience</strong> — qualities I bring to engineering challenges every day.
                </p>
              </div>
              <div>
                <p className="leading-relaxed">
                  I approach software development like a team sport: planning the strategy, executing with precision, and adapting to challenges. Whether on the field or in code, I thrive in collaborative, high-pressure environments.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
