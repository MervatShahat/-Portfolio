import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "C#", "ASP.NET Core", "REST APIs"]
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Dart"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL", "SQL Server"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Python", "Numpy", "MPI (Parallel Computing)"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "API Integration", "Postman"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Stickers and Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse pointer-events-none"></div>
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, -15, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-40 left-10 opacity-20 pointer-events-none"><Cpu className="w-20 h-20 text-secondary" /></motion.div>
      <motion.div animate={{ y: [0, 25, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="absolute bottom-40 right-10 opacity-20 pointer-events-none"><Layers className="w-16 h-16 text-accent" /></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-secondary/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b border-gray-100 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-sm border border-gray-200 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all cursor-default font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
