import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Giovanna Valle
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Lover de la tecnología. Experiencia en QA y desarrollo web. Siempre aprendiendo y creciendo.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/GiovB02" 
              className="p-3 rounded-full bg-gray-800 hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/melanie-giovanna-valle" 
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="melanie.giovanna@gmail.com" 
              className="p-3 rounded-full bg-gray-800 hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 Giovanna Valle. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                Hecho con <Heart size={16} className="text-red-500" /> y café ☕
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;