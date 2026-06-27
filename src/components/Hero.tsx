import React from 'react';
import { Github, Linkedin, Download } from 'lucide-react';
import giovannaImg from '../assets/images/Giovanna.jpg';
import cvFile from '../assets/documents/CVGiovannaValle.pdf';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'CVGiovannaValle.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-52 h-52 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-800 to-violet-600 p-1 transition-all duration-300 transform hover:scale-105 hover:from-violet-600 hover:to-blue-800">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden ">
                <img
                  src={giovannaImg}
                  alt="Giovanna Valle"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 transition-all duration-300 transform hover:scale-105">
              <span className="bg-gradient-to-r from-blue-800 to-violet-600 bg-clip-text text-transparent transition-all duration-300">
              Giovanna Valle
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Cuarto año de Ingeniería en Software y Negocios Digitales
            </h2>
    
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-800 to-violet-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-violet-600 hover:to-blue-800 flex items-center gap-2">
              <a href="#projects">Ver Mis Proyectos</a>
            </button>
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-3 border-2 border-blue-800 text-blue-800 rounded-full font-semibold hover:shadow-lg hover:bg-violet-100 hover:border-violet-600 hover:text-violet-700 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Descargar CV
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/GiovB02" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-violet-100">
              <Github size={24} className="text-gray-700 hover:text-violet-600" />
            </a>
            <a href="https://www.linkedin.com/in/melanie-giovanna-valle/?locale=es" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-violet-100">
              <Linkedin size={24} className="text-gray-700 hover:text-violet-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;