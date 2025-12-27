"use client";

import React from "react";
import { Download, Github } from "lucide-react"
import { motion } from "framer-motion";
import ProfileCard from "@/components/ProfileCard";

// const roles = [
//   "Full Stack Engineer (Next.js & Spring Boot)",
//   "Java Backend Specialist | REST & Microservices",
//   "TypeScript + MongoDB Craftsman",
//   "Next.js + Tailwind UI Builder",
//   "Open Source Contributor & Explorer",
//   "Smart Web App Engineer (PDF, QR, Auth)",
//   "API-first Developer | Secure & Scalable Systems",
//   "Web3 Curious | ETHGlobal Builder"
// ];


const Home = () => {

  return (
    <section
      id="home"
      className="scroll-mt-28 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-32 md:pt-24 gap-5"
    >
      {/* Text Side */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white leading-tight mb-4 w-full break-words text-center md:text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
            Sherwin Emmanuel Rodriguez
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-white/90 mb-6 text-center md:text-left">
          Full-Stack Web Developer
        </h2>

        <p className="text-lg sm:text-xl text-white/70 mb-2 text-center md:text-left font-medium">
          Java • Spring Boot • React • Next.js
        </p>

        <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-6 text-center md:text-left max-w-xl">
          Building end-to-end features from UI to database. Hands-on experience from 2 software development internships, working on real codebases and learning system design through practical implementation.
        </p>
        
        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a
            href="/resume.pdf"
            className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white text-lg rounded-xl font-medium transition flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
          <a
            href="https://github.com/sherwinemmanuelrodriguezp"
            className="px-8 py-4 border border-white/20 text-white text-lg hover:bg-white/10 rounded-xl font-medium transition"
          >
            <Github className="w-5 h-5 mr-2 inline-block" />
            View Github
          </a>
        </motion.div>
      </motion.div>

      {/* Image Side */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProfileCard
          name="Sherwin Rodriguez"
          title="Full Stack Engineer"
          handle="sherwinrodriguez"
          status="Available for work"
          contactText="Contact Me"
          avatarUrl="/profile.jpg"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
