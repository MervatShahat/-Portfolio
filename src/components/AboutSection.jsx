import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit, Rocket, Coffee, Monitor } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Stickers and Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse pointer-events-none"></div>
      <motion.div animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-20 right-10 md:right-32 opacity-20 pointer-events-none"><Coffee className="w-16 h-16 text-primary" /></motion.div>
      <motion.div animate={{ y: [0, -15, 0], rotate: [0, -5, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-20 left-10 md:left-20 opacity-20 pointer-events-none"><Monitor className="w-20 h-20 text-secondary" /></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full mix-blend-multiply filter blur-[20px]"></div>
              <h3 className="text-2xl font-bold text-text mb-4">
                Fresh Graduate & Tech Enthusiast
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a fresh graduate from the Faculty of Computers and Artificial Intelligence in Egypt. I have a deep passion for Full Stack Development and Artificial Intelligence, always eager to explore how these two fields intersect to create intelligent, scalable applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a strong problem-solving mindset, I thrive on tackling complex technical challenges and building modern, efficient solutions. My goal is to leverage modern technologies to build impactful software.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <GraduationCap className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-text font-semibold mb-2">Education</h4>
              <p className="text-sm text-gray-500">FCAI, Egypt</p>
            </div>
            
            <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <BrainCircuit className="w-10 h-10 text-secondary mb-4" />
              <h4 className="text-text font-semibold mb-2">Mindset</h4>
              <p className="text-sm text-gray-500">Strong Problem Solving</p>
            </div>

            <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 sm:col-span-2">
              <Rocket className="w-10 h-10 text-accent mb-4" />
              <h4 className="text-text font-semibold mb-2">Interests</h4>
              <p className="text-sm text-gray-500">Scalable Apps & Modern Tech</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
