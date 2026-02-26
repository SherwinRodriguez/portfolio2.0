"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitCommit, GraduationCap, Briefcase, Rocket } from "lucide-react";

interface TimelineNode {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const timelineData: TimelineNode[] = [
  {
    id: "education",
    title: "Computer Science Student",
    subtitle: "Loyola ICAM College",
    date: "2023 - Present",
    description: "Building strong foundations in algorithms, data structures, and software engineering principles",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "internship1",
    title: "Frontend Intern",
    subtitle: "Sathi Systems Pvt Ltd",
    date: "May 2025 - July 2025",
    description: "Developed full-stack features with Java Spring Boot and React, participated in code reviews",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: "internship2",
    title: "Data Engineering Intern",
    subtitle: "Nelson In Research",
    date: "Sep 2025 - Nov 2025",
    description: "Built Python automation scripts for data extraction, cleaning, and pipeline management",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: "projects",
    title: "Building Real Projects",
    subtitle: "QuoteGuard, SER-AI, EmailPay",
    date: "Ongoing",
    description: "Creating production-grade applications to solve real problems and explore new tech stacks",
    icon: <Rocket className="w-5 h-5" />,
  },
];

export const GitTimeline = () => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-30" />

      {/* Timeline Nodes */}
      <div className="space-y-8">
        {timelineData.map((node, index) => (
          <TimelineNodeItem key={node.id} node={node} index={index} />
        ))}
      </div>
    </div>
  );
};

const TimelineNodeItem = ({ node, index }: { node: TimelineNode; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: isInView ? 1 : 0.3, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-16 group"
    >
      {/* Commit Dot */}
      <motion.div
        className="absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-purple-500 bg-slate-900 flex items-center justify-center z-10"
        animate={{
          scale: isInView ? [1, 1.2, 1] : 1,
          borderColor: isInView ? ["#a855f7", "#3b82f6", "#a855f7"] : "#a855f7",
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`w-2 h-2 rounded-full ${isInView ? 'bg-purple-500' : 'bg-white/30'}`} />
      </motion.div>

      {/* Branch Line */}
      <div className="absolute left-6 top-4 w-10 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent" />

      {/* Content Card */}
      <motion.div
        className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.02, x: 5 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
              {node.icon}
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">{node.title}</h4>
              <p className="text-sm text-white/60">{node.subtitle}</p>
            </div>
          </div>
          <span className="text-xs text-white/40 whitespace-nowrap ml-4">{node.date}</span>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed pl-11">
          {node.description}
        </p>

        {/* Commit Hash Simulation */}
        <div className="mt-3 pl-11 flex items-center gap-2">
          <GitCommit className="w-3 h-3 text-white/30" />
          <span className="text-xs font-mono text-white/30">
            {`${node.id.substring(0, 7)}`}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
