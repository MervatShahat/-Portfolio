import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Layout } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-transparent">
      {/* Soft glowing blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/15 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/15 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">

        {/* Profile image with spinning ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
          className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-8"
        >
          {/* Spinning gradient ring */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-spin-slow opacity-80 blur-[2px]"></div>
          
          {/* Name Container */}
          <div className="absolute inset-0 rounded-full border-4 border-white z-10 bg-white/40 backdrop-blur-md shadow-xl overflow-hidden flex items-center justify-center">
            <span className="text-primary font-bold text-3xl md:text-4xl tracking-widest select-none drop-shadow-sm">
              Mervat
            </span>
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-primary text-xs font-semibold mb-7 shadow-sm uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Fresh Graduate & Passionate Builder
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-3 leading-tight"
        >
          Mervat Shahat Hassan
          <br />
          <span className="text-gradient">Almasoudy</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-500 font-medium mb-6"
        >
          I build things as a{' '}
          <span className="font-bold text-text underline decoration-primary decoration-2 underline-offset-4">
            Full Stack MERN Developer & AI Engineer
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl mx-auto text-base text-gray-500 mb-10 leading-relaxed"
        >
          Passionate fresh graduate from Egypt, combining software engineering with artificial intelligence to build scalable, modern, and intelligent applications.
        </motion.p>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-5"
        >
          Scroll
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-secondary hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 text-sm"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-text font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 border border-gray-200 shadow-sm text-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Floating tech icons */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-8 lg:left-24 hidden lg:flex bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-gray-200 shadow-md"
      >
        <Code2 className="w-7 h-7 text-primary" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-8 lg:right-24 hidden lg:flex bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-gray-200 shadow-md"
      >
        <Database className="w-7 h-7 text-secondary" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-28 left-16 lg:left-40 hidden lg:flex bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-gray-200 shadow-md"
      >
        <Layout className="w-7 h-7 text-accent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
