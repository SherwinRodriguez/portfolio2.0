"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, TrendingUp } from "lucide-react";

interface Skill {
  name: string;
  rating: number;
  isTraining?: boolean;
}

const skills: Skill[] = [
  { name: "JAVA", rating: 90 },
  { name: "SPRING", rating: 88 },
  { name: "REACT", rating: 86 },
  { name: "SQL", rating: 85 },
  { name: "SYSTEM DESIGN", rating: 80 },
  { name: "WEB3", rating: 72, isTraining: true },
];

export const FIFASkillCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-full max-w-sm mx-auto">
      <motion.div
        className="relative w-full h-[500px] cursor-pointer preserve-3d"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 p-6 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="bg-black/30 px-3 py-1 rounded-lg">
                <span className="text-yellow-400 font-bold text-2xl">88</span>
                <span className="text-white/60 text-xs ml-1">OVR</span>
              </div>
              <div className="text-right">
                <div className="text-white/80 text-xs">FULL-STACK</div>
                <div className="text-white font-bold">DEVELOPER</div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-4 border-white/20 flex items-center justify-center backdrop-blur-sm">
                <User className="w-24 h-24 text-white/60" />
              </div>
            </div>

            {/* Name */}
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-1">SHERWIN</h3>
              <p className="text-white/60 text-xl">Rodriguez</p>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-yellow-400 font-bold text-xl">90</div>
                <div className="text-white/60 text-xs">JAVA</div>
              </div>
              <div>
                <div className="text-yellow-400 font-bold text-xl">88</div>
                <div className="text-white/60 text-xs">SPRING</div>
              </div>
              <div>
                <div className="text-yellow-400 font-bold text-xl">86</div>
                <div className="text-white/60 text-xs">REACT</div>
              </div>
            </div>

            {/* Hover Hint */}
            <div className="mt-4 text-center text-white/40 text-xs">
              Hover to view full stats
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 flex flex-col">
            {/* Header */}
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">TECH STATS</h3>
              <div className="h-1 w-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>

            {/* Skills List */}
            <div className="flex-1 min-h-0 space-y-3">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/80 text-sm font-medium flex items-center gap-2">
                      {skill.name}
                      {skill.isTraining && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Training
                        </span>
                      )}
                    </span>
                    <span className={`font-bold text-lg ${
                      skill.rating >= 85 ? 'text-yellow-400' : 
                      skill.rating >= 80 ? 'text-green-400' : 
                      'text-blue-400'
                    }`}>
                      {skill.rating}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        skill.rating >= 85 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' : 
                        skill.rating >= 80 ? 'bg-gradient-to-r from-green-500 to-green-400' : 
                        'bg-gradient-to-r from-blue-500 to-blue-400'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.rating}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-2 pt-3 border-t border-white/10 text-center shrink-0">
              <div className="text-white/40 text-xs mb-2">Overall Rating</div>
              <div className="text-4xl font-bold text-yellow-400">88</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Stacked View */}
      <div className="md:hidden mt-8 space-y-4">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6">
          <h4 className="text-xl font-bold text-white mb-4 text-center">Tech Skills</h4>
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill.name} className="flex justify-between items-center">
                <span className="text-white/80 text-sm">{skill.name}</span>
                <span className="text-yellow-400 font-bold">{skill.rating}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
