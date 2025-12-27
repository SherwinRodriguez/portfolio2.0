"use client";

import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";
import Navbar from "@/sections/Navbar";
import Home from "@/sections/Home";
//import Prism from "@/components/Prism";
import TechStack from "@/sections/TechStack";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Project from "@/sections/Project";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
//import Preloader from "@/components/PreLoader";

export default function HomePage() {
  return (
    <>
      {/* <Preloader /> */}

      {/* Full-page scroll container */}
      <div className="relative z-10 min-h-screen dark:text-white text-slate-900">
        {/* Navbar - Fixed positioning */}
        <Navbar />

        {/* Hero/Home Section */}
        <section className="min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
              {/* <Prism
                animationType="rotate"
                timeScale={0.5}
                height={3.5}
                baseWidth={5.5}
                scale={3.6}
                hueShift={0}
                colorFrequency={1}
                noise={0.5}
                glow={1}
              /> */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                <Home />
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-20">
          <FadeInSection delay={0.2}>
            <TechStack />
          </FadeInSection>
        </section>

        {/* Tech Stack Section */}
        <section className="py-12 md:py-20">
          <FadeInSection delay={0.25}>
            <About />
          </FadeInSection>
        </section>

        {/* Experience Section */}
        <section className="py-12 md:py-20">
          <FadeInSection delay={0.27}>
            <Experience />
          </FadeInSection>
        </section>

        {/* Projects Section */}
        <section className="py-12 md:py-20">
          <FadeInSection delay={0.3}>
            <Project />
          </FadeInSection>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20">
          <FadeInSection delay={0.4}>
            <Contact />
          </FadeInSection>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
