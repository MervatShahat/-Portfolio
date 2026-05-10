import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/5 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <a
            href="mailto:mervatshahat550011@gmail.com"
            className="flex items-center gap-4 px-8 py-5 bg-white/70 backdrop-blur-md border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl hover:shadow-md hover:-translate-y-1 hover:border-primary/30 hover:bg-white transition-all w-full md:w-auto flex-1 max-w-sm"
          >
            <div className="p-3.5 bg-primary/10 rounded-full text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 font-medium mb-0.5">Email Me</p>
              <p className="font-bold text-text text-sm sm:text-base break-all">mervatshahat550011<br className="hidden sm:block lg:hidden"/>@gmail.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-8 py-5 bg-white/70 backdrop-blur-md border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl hover:shadow-md hover:-translate-y-1 hover:border-[#0A66C2]/30 hover:bg-white transition-all w-full md:w-auto flex-1 max-w-sm"
          >
            <div className="p-3.5 bg-[#0A66C2]/10 rounded-full text-[#0A66C2]">
              <FaLinkedin className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 font-medium mb-0.5">Connect on</p>
              <p className="font-bold text-text text-sm sm:text-base">LinkedIn</p>
            </div>
          </a>

          <a
            href="https://github.com/MervatShahat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-8 py-5 bg-white/70 backdrop-blur-md border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl hover:shadow-md hover:-translate-y-1 hover:border-gray-800/30 hover:bg-white transition-all w-full md:w-auto flex-1 max-w-sm"
          >
            <div className="p-3.5 bg-gray-100 rounded-full text-gray-800">
              <FaGithub className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 font-medium mb-0.5">Follow on</p>
              <p className="font-bold text-text text-sm sm:text-base">GitHub</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
