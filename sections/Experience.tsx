"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Users, Lightbulb } from "lucide-react";

const Experience = () => {
  const internships = [
    {
      role: "Software Development Intern",
      company: "Sathi Systems Pvt Ltd", // Replace with actual company
      duration: "May 2025 - July 2025", // Replace with actual dates
      type: "web & API Development Traninee",
      stack: ["Java", "Spring Boot", "React", "REST APIs"],
      work: [
        "Developed my first full-stack feature from frontend to backend",
        "Built frontend components and integrated with backend services",
        "Worked on bug fixes and feature enhancements in existing codebase",
        "Participated in code reviews and team standups"
      ],
      learned: "Gained hands-on experience with production codebases, learned to work within established patterns, and understood the importance of code quality and testing."
    },
    
      {
  role: "Data Engineering Intern",
  company: "Nelson In Research",
  duration: "September 2025 – November 2025",
  type: "Data Engineering & Automation",
  stack: ["Python", "Selenium", "Data Cleaning", "CSV Processing"],

  work: [
    "Built Python-based automation scripts to collect structured data from web sources using Selenium",
    "Performed data cleaning, normalization, and validation to ensure consistency across datasets",
    "Processed and transformed CSV files for downstream analysis and reporting",
    "Handled edge cases, missing values, and data inconsistencies during extraction and transformation",
    "Collaborated with team members to refine data workflows and improve reliability of automated pipelines",
    
  ],

  learned:
    "Gained hands-on experience in data extraction and automation workflows, practical data cleaning techniques, and the importance of reliable data pipelines. Developed an understanding of real-world data quality issues and how automation can reduce manual processing effort."
}

  ];

  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 md:px-20 min-h-screen flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Work Experience
        </h2>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          Hands-on internship experience building real-world software with professional development teams
        </p>
      </motion.div>

      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {internships.map((internship, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative backdrop-blur-lg bg-white/5 border border-white/10 hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Briefcase className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{internship.role}</h3>
                  </div>
                  <p className="text-base text-white/70 ml-10">{internship.company}</p>
                  <p className="text-sm text-white/50 ml-10 mt-1">{internship.duration}</p>
                </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" /> Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {internship.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-white/5 text-white/80 rounded-lg border border-white/10 hover:border-white/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Done */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-blue-300 mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4" /> Contributions
                </p>
                <ul className="space-y-2">
                  {internship.work.map((item, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Learning */}
              <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg">
                <p className="text-sm font-semibold text-green-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> Key Takeaway
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  {internship.learned}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

      {/* Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center text-white/50 text-sm max-w-2xl"
      >
        These internships taught me how real software development works: collaborating with teams, 
        working in existing codebases, and delivering features under real-world constraints.
      </motion.p>
    </section>
  );
};

export default Experience;
