import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200/50 bg-transparent py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            <a href="https://github.com/MervatShahat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary hover:-translate-y-1 transition-all">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary hover:-translate-y-1 transition-all">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:mervatshahat550011@gmail.com" className="text-gray-400 hover:text-primary hover:-translate-y-1 transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-current" /> by Mervat Shahat Hassan Almasoudy
          </p>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
