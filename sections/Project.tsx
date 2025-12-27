"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, Shield } from "lucide-react";
import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

const projects = [
  {
    title: "QuoteGuard",
    problem: "Freelancers need a way to create verifiable invoices and prevent payment disputes",
    description:
      "A secure invoice management system that I'm building to help freelancers generate tamper-proof invoices with QR code verification. Clients can verify invoice authenticity and check payment status.",
    tech: ["Spring Boot", "JWT", "MongoDB", "Next.js", "QR Generation"],
    architecture: [
      "REST API with Spring Boot for invoice CRUD operations",
      "JWT-based authentication for user sessions",
      "QR code generation with embedded invoice hash for verification",
      "MongoDB for storing invoice data with proper indexing"
    ],
    learned: "This project taught me how to implement JWT authentication from scratch, handle file uploads, and think through security considerations for a real product. Still working on optimizing the verification flow.",
    status: "In Progress",
    tags: ["Full-Stack", "Security", "REST API", "Authentication"],
    link: "https://github.com/SherwinRodriguez/QuoteGuard",
    image: "/QuoteGuard.png",
  },
  {
    title: "SER-AI",
    problem: "Wanted to learn how to integrate AI APIs into a full-stack application with persistent chat history",
    description:
      "An AI chat assistant built to explore how modern AI APIs work. Features real-time streaming responses from Groq API, user authentication via Clerk, and chat history stored in MongoDB.",
    tech: ["Next.js", "Node.js", "Groq API", "MongoDB", "Clerk Auth"],
    architecture: [
      "Next.js frontend with TypeScript for type safety",
      "Backend API routes for managing chat sessions",
      "Clerk for handling user authentication and sessions",
      "Real-time streaming implementation for AI responses"
    ],
    learned: "Learned how to work with streaming APIs, manage real-time state in React, and integrate third-party auth providers. Understanding how to structure a full-stack Next.js app was a key takeaway.",
    status: "Completed",
    tags: ["Full-Stack", "AI Integration", "Authentication", "Real-time"],
    link: "https://github.com/SherwinRodriguez/SER-AI",
    image: "/SER-AI.png",
  },
  {
    title: "Half-Inch",
    problem: "Exploring Web3 development by building a decentralized exchange on Rootstock",
    description:
      "A DEX platform built as a learning project to understand smart contracts and Web3 integration. Features liquidity pools, token swapping, and wallet connectivity.",
    tech: ["Solidity", "Ethers.js", "React", "Rootstock", "Web3"],
    architecture: [
      "Smart contracts for managing liquidity pools",
      "Automated market maker (AMM) logic for token pricing",
      "Web3 integration with MetaMask for wallet connection",
      "React frontend for interacting with blockchain"
    ],
    learned: "This was my first deep dive into Web3. Learned about gas optimization, smart contract security basics, and how DeFi protocols work under the hood. Still have a lot to learn in this space.",
    status: "Completed (Learning Project)",
    tags: ["Web3", "Smart Contracts", "DeFi", "Blockchain"],
    link: "https://github.com/SherwinRodriguez/Half-Inch",
    image: "/HalfInch.png",
  },
  {
    title: "Next Project",
    problem: "Planning a microservices-based application to learn distributed systems concepts",
    description: "Working on a project that will use Docker, message queues, and multiple services communicating via APIs. Goal is to understand how to build and deploy distributed applications.",
    tech: ["Java", "Spring Boot", "Docker", "RabbitMQ", "PostgreSQL"],
    architecture: [
      "Microservices architecture with multiple Spring Boot services",
      "API Gateway for routing requests",
      "Message queue for async communication between services",
      "Docker Compose for local development setup"
    ],
    learned: "Still in planning phase. Want to learn about service discovery, load balancing, and how to handle failures in distributed systems.",
    status: "Planned",
    tags: ["Microservices", "System Design", "Docker", "Learning"],
    link: "#",
    image: "/Upcoming.png",
  },
];

const DEFAULT_GLOW_COLOR = '168, 85, 247'; // Purple color

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<number[]>([]);
  const isHoveredRef = useRef(false);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    const particleCount = 8;

    for (let i = 0; i < particleCount; i++) {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const particle = createParticleElement(
          Math.random() * width,
          Math.random() * height
        );
        cardRef.current.appendChild(particle);
        particlesRef.current.push(particle);

        gsap.fromTo(particle, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(particle, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(particle, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, i * 100) as unknown as number;

      timeoutsRef.current.push(timeoutId);
    }
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      gsap.to(element, {
        rotateX: 2,
        rotateY: 2,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000
      });
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(element, {
        rotateX,
        rotateY,
        duration: 0.1,
        ease: 'power2.out',
        transformPerspective: 1000
      });

      const magnetX = (x - centerX) * 0.03;
      const magnetY = (y - centerY) * 0.03;

      gsap.to(element, {
        x: magnetX,
        y: magnetY,
        duration: 0.3,
        ease: 'power2.out'
      });

      // Update glow position
      element.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
      element.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${DEFAULT_GLOW_COLOR}, 0.4) 0%, rgba(${DEFAULT_GLOW_COLOR}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div
        ref={cardRef}
        className="project-card relative h-full bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300"
        style={{
          '--glow-x': '50%',
          '--glow-y': '50%',
        } as React.CSSProperties}
      >
        {/* Glow Effect */}
        <div className="project-card-glow" />

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="mb-6 rounded-xl w-full h-48 object-cover shadow-lg relative z-10"
        />

        {/* Title and Status */}
        <div className="mb-4 relative z-10">
          <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              {project.title}
            </h3>
            <span className={`px-3 py-1 text-xs font-medium rounded-full border whitespace-nowrap ${
              project.status === 'Completed' 
                ? 'bg-green-500/20 text-green-300 border-green-500/30'
                : project.status === 'In Progress'
                ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
            }`}>
              {project.status}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg relative z-10">
          <p className="text-xs font-semibold text-red-300 mb-1">Problem</p>
          <p className="text-white/80 text-sm line-clamp-2">{project.problem}</p>
        </div>

        {/* Description */}
        <p className="text-white/80 mb-3 leading-relaxed text-sm line-clamp-3 relative z-10">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-3 relative z-10">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-white/5 text-white/60 rounded border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* What I Built */}
        <div className="mb-3 relative z-10">
          <p className="text-xs font-semibold text-blue-300 mb-2 flex items-center gap-2">
            <Database className="w-3 h-3" /> What I Built
          </p>
          <ul className="space-y-1">
            {project.architecture.slice(0, 2).map((point, i) => (
              <li key={i} className="text-white/70 text-xs flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Learning */}
        <div className="mb-4 p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg relative z-10">
          <p className="text-xs font-semibold text-green-300 mb-1 flex items-center gap-2">
            <Shield className="w-3 h-3" /> Learning
          </p>
          <p className="text-white/80 text-xs leading-relaxed line-clamp-2">
            {project.learned}
          </p>
        </div>

        {/* CTA */}
        <a
          href={project.link}
          className="flex items-center gap-2 text-indigo-400 hover:text-purple-300 font-medium transition group relative z-10"
        >
          {project.link === "#" ? (
            <>
              <Shield className="w-4 h-4" />
              {project.status}
            </>
          ) : (
            <>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              View on GitHub
            </>
          )}
        </a>
      </div>
    </motion.div>
  );
};

export default function Project() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full px-6 md:px-12 lg:px-20 py-20 text-white"
    >
      <style>
        {`
          .project-card {
            --glow-x: 50%;
            --glow-y: 50%;
          }
          
          .project-card-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 2px;
            background: radial-gradient(400px circle at var(--glow-x) var(--glow-y),
                rgba(168, 85, 247, 0.6) 0%,
                rgba(168, 85, 247, 0.3) 30%,
                transparent 60%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .project-card:hover .project-card-glow::after {
            opacity: 1;
          }
          
          .project-card:hover {
            box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(168, 85, 247, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
        `}
      </style>

      {/* Intro Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Projects
        </h2>
        <p className="text-white/60 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Personal projects where I learn by building—exploring full-stack development, APIs, and new technologies
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
