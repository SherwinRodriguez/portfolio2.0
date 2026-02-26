"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Trophy, Monitor, Dumbbell } from "lucide-react";
import { useMode } from "@/contexts/ModeContext";
import { FIFASkillCard } from "@/components/FIFASkillCard";
import Image from "next/image";

const About = () => {
  const { mode } = useMode();

  // 3D Tilt effect for cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return; // Disable on mobile
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

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
        {/* Title with Subtitle */}
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            I build scalable systems with the discipline of an athlete and the precision of an engineer.
          </motion.p>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4" />
        </motion.div>

        {/* Mode Toggle */}
        <ModeToggle />

        {/* FIFA Card + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* FIFA Skill Card - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <FIFASkillCard />
          </motion.div>

          {/* Right Column - Conditional content based on mode */}
          <div className="lg:col-span-2 space-y-6">
            {mode === "athlete" ? (
              /* Show Beyond Code section in athlete mode */
              <BeyondCodeSection mode={mode} handleMouseMove={handleMouseMove} handleMouseLeave={handleMouseLeave} />
            ) : (
              /* Show Professional Journey and Technical Focus in developer mode */
              <>
                <ProfessionalIdentitySection handleMouseMove={handleMouseMove} handleMouseLeave={handleMouseLeave} />
                <TechnicalFocusSection handleMouseMove={handleMouseMove} handleMouseLeave={handleMouseLeave} />
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Mode Toggle Component
const ModeToggle = () => {
  const { mode, toggleMode } = useMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mb-8"
    >
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-full p-1 flex gap-1">
        <button
          onClick={toggleMode}
          className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
            mode === "developer"
              ? "bg-purple-500 text-white"
              : "text-white/60 hover:text-white"
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span className="font-medium">Developer</span>
        </button>
        <button
          onClick={toggleMode}
          className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
            mode === "athlete"
              ? "bg-green-500 text-white"
              : "text-white/60 hover:text-white"
          }`}
        >
          <Dumbbell className="w-4 h-4" />
          <span className="font-medium">Athlete</span>
        </button>
      </div>
    </motion.div>
  );
};

// Beyond Code Section with Image
const BeyondCodeSection = ({ 
  mode, 
  handleMouseMove, 
  handleMouseLeave 
}: { 
  mode: string; 
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: mode === "athlete" ? 0.2 : 0.5 }}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-300 group"
    style={{ transition: "transform 0.2s ease-out, border-color 0.3s" }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    <div className="absolute inset-0 bg-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
    
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-pink-500/20 rounded-lg">
          <Trophy className="w-6 h-6 text-pink-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Beyond Code</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Text */}
        <div className="space-y-4 text-white/80 text-base leading-relaxed">
          <p>
            Professional footballer with a passion for competitive sports. This journey has instilled strong values of{" "}
            <strong className="text-white">discipline</strong>,{" "}
            <strong className="text-white">teamwork</strong>, and{" "}
            <strong className="text-white">resilience</strong> — qualities I bring to engineering challenges every day.
          </p>
          <p>
            I approach software development like a team sport: planning the strategy, executing with precision, and adapting to challenges. Whether on the field or in code, I thrive in collaborative, high-pressure environments.
          </p>
        </div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          {/* Football Player Image */}
          <div className="relative w-full h-64 lg:h-80">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-pink-500/20 rounded-2xl blur-2xl"
            />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 backdrop-blur-sm">
              <Image
                src="/football2.png"
                alt="Football Player"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

// Professional Identity - Simplified
const ProfessionalIdentitySection = ({
  handleMouseMove,
  handleMouseLeave,
}: {
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 group"
    style={{ transition: "transform 0.2s ease-out, border-color 0.3s" }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    <div className="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
    
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-purple-500/20 rounded-lg">
          <Code2 className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Professional Journey</h3>
      </div>
      <p className="text-white/80 text-base leading-relaxed">
        Computer Science student at Loyola ICAM College with hands-on experience in full-stack development and data engineering. 
        Built production features with Java Spring Boot and React, and created Python automation scripts for data pipelines.
      </p>
    </div>
  </motion.div>
);

// Technical Focus Section
const TechnicalFocusSection = ({
  handleMouseMove,
  handleMouseLeave,
}: {
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group"
    style={{ transition: "transform 0.2s ease-out, border-color 0.3s" }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
    
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
);

export default About;
