import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Lightbulb, Compass } from 'lucide-react';

const experiences = [
  {
    title: "MERN Stack Training",
    company: "Digilians - Egyptian Military Academy",
    date: "4-month program",
    description: "Intensive training focusing on building scalable, real-world Full Stack Web Applications. Gained hands-on experience in problem solving, team collaboration, clean code principles, and modern web development practices.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Auth", "Git/GitHub"]
  },
  {
    title: "Flutter Mobile Development Training",
    company: "Information Technology Institute (ITI)",
    date: "Training Program",
    description: "Developed modern cross-platform mobile applications with an emphasis on responsive UI, UI/UX principles, real-world application development, and complex problem solving.",
    tech: ["Flutter", "Dart", "State Management", "API Integration", "Firebase", "App Architecture"]
  },
  {
    title: "Full Stack .NET Training",
    company: "Information Technology Institute (ITI)",
    date: "Training Program",
    description: "Focused on building robust backend systems and scalable web applications applying software engineering principles, clean code practices, and agile teamwork methodologies.",
    tech: ["C#", "ASP.NET Core", "SQL Server", "REST APIs", "Entity Framework", "MVC"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Stickers and Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse pointer-events-none"></div>
      <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-20 right-20 opacity-20 pointer-events-none"><Lightbulb className="w-16 h-16 text-primary" /></motion.div>
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-20 left-20 opacity-20 pointer-events-none"><Compass className="w-20 h-20 text-secondary" /></motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">Experience & Training</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-primary shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                <Briefcase className="w-4 h-4" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-2xl hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-text">{exp.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-primary mt-1 sm:mt-0 whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.date}</span>
                  </div>
                </div>
                <h4 className="text-gray-600 font-medium mb-4">{exp.company}</h4>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
