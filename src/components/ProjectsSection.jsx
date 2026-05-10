import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity, Terminal, ShieldCheck, Smartphone, ShoppingBag, Sparkles, MonitorPlay } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Mommy Guide App",
    description: "A motherhood guidance application featuring educational videos, helpful tips, a chatbot functionality, and robust backend features. Includes detailed system analysis and activity diagrams.",
    tech: ["Flutter", "APIs", "Backend", "Database Design"],
    icon: <Activity className="w-6 h-6 text-primary" />,
    gradient: "from-primary to-accent"
  },
  {
    title: "CIFAR-10 Image Classification",
    description: "Machine learning project for multi-class image classification utilizing Logistic Regression and Numpy. Features comprehensive data preprocessing, feature extraction, model evaluation, and confusion matrix analysis.",
    tech: ["Python", "Numpy", "Machine Learning"],
    icon: <Terminal className="w-6 h-6 text-secondary" />,
    gradient: "from-secondary to-teal-500"
  },
  {
    title: "Parallel Search & Sorting",
    description: "Parallel computing project implementing Quick Search, Bitonic Sort, and Radix Sort using MPI-based parallel algorithms for high-performance data processing.",
    tech: ["MPI", "Parallel Computing", "C++"],
    icon: <Terminal className="w-6 h-6 text-accent" />,
    gradient: "from-accent to-emerald-400"
  },
  {
    title: "MERN Task Management",
    description: "Full stack task management web application with secure authentication, full CRUD operations, a responsive dashboard, and efficient REST APIs.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    gradient: "from-primary to-green-500"
  },
  {
    title: "Flutter News Application",
    description: "Modern mobile news app featuring real-time news APIs, categorized feeds, search functionality, article details, and robust error handling.",
    tech: ["Flutter", "Dart", "REST APIs"],
    icon: <Smartphone className="w-6 h-6 text-secondary" />,
    gradient: "from-secondary to-cyan-500"
  },
  {
    title: "E-Commerce Platform",
    description: "Comprehensive e-commerce platform with JWT authentication, product listings, search & filtering, shopping cart, order management, and secure backend APIs.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    icon: <ShoppingBag className="w-6 h-6 text-accent" />,
    gradient: "from-accent to-lime-500"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Stickers and Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse pointer-events-none"></div>
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-40 right-1/4 opacity-20 pointer-events-none"><Sparkles className="w-16 h-16 text-accent" /></motion.div>
      <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-40 left-10 opacity-20 pointer-events-none"><MonitorPlay className="w-20 h-20 text-primary" /></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              
              <div className="p-6 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10 shadow-sm border border-gray-100`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <button className="text-gray-400 hover:text-primary transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">
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

export default ProjectsSection;
