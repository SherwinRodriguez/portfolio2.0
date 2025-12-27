"use client";

import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const TechStack = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 25,
      },
    });
  }, [controls]);

  const coreStack = [
    { name: "Java", icon: "/skills/java.png", description: "Primary backend language" },
    { name: "Spring Boot", icon: "/skills/spring.png", description: "REST API framework" },
    { name: "React", icon: "/skills/react.png", description: "Frontend library" },
    { name: "Next.js", icon: "/skills/nextjs.png", description: "Full-stack framework" },
    { name: "MongoDB", icon: "/skills/mongodb.png", description: "NoSQL database" },
    { name: "PostgreSQL", icon: "/skills/postgresql.png", description: "SQL database" },
  ];

  const supportingStack = [
    { name: "TypeScript", icon: "/skills/typescript.png" },
    { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
    { name: "REST APIs", icon: "/skills/api.svg" },
    { name: "Git", icon: "/skills/git.png" },
    { name: "Postman", icon: "/skills/postman.png" },
    { name: "Linux", icon: "/skills/linux.png" },
    { name: "Web3", icon: "/skills/web3.png" },
    { name: "Solidity", icon: "/skills/solidity.svg" },
    { name: "Docker", icon: "/skills/docker.svg" },
  ];

  return (
    <section
      id="techstack"
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
          Tech Stack
        </h2>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
          Technologies I&apos;ve worked with through coursework, internships, and personal projects
        </p>
      </motion.div>

      <div className="max-w-7xl w-full space-y-16">
        {/* Core Stack - Emphasized */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Primary Experience
            </h3>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {coreStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-purple-500/30 hover:border-purple-400/60 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center">
                      <div className="w-full h-full rounded-xl bg-white/5 flex items-center justify-center p-3">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-white/60">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supporting Stack - Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-lg md:text-xl font-medium text-white/80 mb-2">
              Currently Exploring
            </h3>
            <div className="h-0.5 w-12 mx-auto bg-white/20 rounded-full" />
          </div>

          {/* Moving Container */}
          <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-1 overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 blur-xl opacity-40" />
            
            {/* Fade edges */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="relative flex gap-8 px-6 py-6 z-0"
              animate={controls}
              onHoverStart={() => controls.stop()}
              onHoverEnd={() =>
                controls.start({
                  x: "-50%",
                  transition: {
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25,
                  },
                })
              }
            >
              {[...supportingStack, ...supportingStack].map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center justify-center gap-2 min-w-[90px] group cursor-pointer"
                  whileHover={{ 
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.4 }}
                    />
                    <div className="relative backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-3 group-hover:bg-white/10 transition-all duration-300">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <motion.span
                    className="text-sm font-medium text-white/80 text-center whitespace-nowrap group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
