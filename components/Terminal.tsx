"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "error";
  content: string;
}

const commands: Record<string, string> = {
  help: `Available commands:
  help     - Show this help message
  whoami   - Learn about me
  shoot    - Take a shot! ⚽
  contact  - Get in touch
  clear    - Clear terminal`,
  
  whoami: `Sherwin Rodriguez
Full-Stack Developer & Professional Footballer
Location: Chennai, India
Skills: Java, Spring Boot, React, Next.js
Currently building scalable systems with athletic discipline`,

  shoot: "🎯 GOAL! ⚽ You scored! Professional mindset on and off the field.",

  contact: `📧 Email: sherwin@example.com
🔗 GitHub: github.com/SherwinRodriguez
💼 LinkedIn: linkedin.com/in/sherwinrodriguez`,

  clear: "__CLEAR__",
};

export const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to Sherwin's Terminal v1.0.0" },
    { type: "output", content: "Type 'help' for available commands" },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    setHistory((prev) => [...prev, { type: "input", content: `$ ${cmd}` }]);

    if (!trimmedCmd) return;

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (commands[trimmedCmd]) {
      const response = commands[trimmedCmd];
      if (trimmedCmd === "shoot") {
        // Add football animation effect
        setHistory((prev) => [...prev, { type: "output", content: response }]);
        playFootballAnimation();
      } else {
        setHistory((prev) => [...prev, { type: "output", content: response }]);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "error", content: `Command not found: ${trimmedCmd}. Type 'help' for available commands.` },
      ]);
    }
  };

  const playFootballAnimation = () => {
    const football = document.createElement("div");
    football.innerHTML = "⚽";
    football.className = "fixed text-4xl z-[9999] pointer-events-none";
    football.style.left = "50%";
    football.style.top = "50%";
    document.body.appendChild(football);

    setTimeout(() => {
      football.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      football.style.transform = "translate(300px, -200px) rotate(720deg)";
      football.style.opacity = "0";
    }, 10);

    setTimeout(() => {
      document.body.removeChild(football);
    }, 900);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <>
      {/* Terminal Icon - Fixed Bottom Right */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all ${
          isOpen ? "hidden" : ""
        }`}
        aria-label="Open terminal"
      >
        <TerminalIcon className="w-6 h-6 text-white" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              width: isMaximized ? "90vw" : "500px",
              height: isMaximized ? "80vh" : "400px",
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden flex flex-col"
            style={{ maxWidth: "90vw" }}
          >
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <TerminalIcon className="w-4 h-4" />
                  <span className="font-mono">terminal</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-1 hover:bg-slate-700 rounded transition-colors"
                  aria-label="Toggle maximize"
                >
                  {isMaximized ? (
                    <Minimize2 className="w-4 h-4 text-white/70" />
                  ) : (
                    <Maximize2 className="w-4 h-4 text-white/70" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-slate-700 rounded transition-colors"
                  aria-label="Close terminal"
                >
                  <X className="w-4 h-4 text-white/70" />
                </button>
              </div>
            </div>

            {/* Terminal Content */}
            <div
              ref={historyRef}
              className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-1"
            >
              {history.map((line, idx) => (
                <div
                  key={idx}
                  className={`${
                    line.type === "input"
                      ? "text-green-400"
                      : line.type === "error"
                      ? "text-red-400"
                      : "text-white/80"
                  }`}
                >
                  <pre className="whitespace-pre-wrap break-words">{line.content}</pre>
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleSubmit} className="border-t border-slate-700 p-4 flex items-center gap-2">
              <span className="text-green-400 font-mono text-sm">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white font-mono text-sm outline-none"
                placeholder="Type a command..."
                autoComplete="off"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
