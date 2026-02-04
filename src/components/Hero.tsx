import React from 'react';
import { Github, Linkedin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/documents/CVGiovannaValle.pdf';
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
            <div className="w-80 h-80 mx-auto mb-8 rounded-full bg-blue-900 p-1 transition-all duration-300 transform hover:scale-105 hover:bg-pink-700">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden ">
                <img
                  src="../src/assets/images/Giovanna.jpg"
                  alt="Giovanna Valle"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 transition-all duration-300 transform hover:scale-105">
              <span className="bg-blue-900 bg-clip-text text-transparent transition-all duration-300 hover:bg-pink-700">
              Giovanna Valle
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Cuarto año de Ingeniería en Software y Negocios Digitales
            </h2>
    
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-3 bg-blue-900 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-pink-700 flex items-center gap-2">
              <a href="#projects">Ver Mis Proyectos</a>
            </button>
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-3 border-2 border-blue-800 text-blue-800 rounded-full font-semibold hover:shadow-lg hover:bg-pink-200 hover:border-pink-700 hover:text-pink-700 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Descargar CV
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/GiovB02" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-pink-100">
              <Github size={24} className="text-gray-700 hover:text-pink-500" />
            </a>
            <a href="www.linkedin.com/in/melanie-giovanna-valle" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-pink-100">
              <Linkedin size={24} className="text-gray-700 hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;