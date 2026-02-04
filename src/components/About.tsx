import React from 'react';
import { User, Heart, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                ¡Hola! Soy una desarrolladora apasionada por la tecnología
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Con más de 3 años de experiencia en desarrollo web, me especializo en crear 
                aplicaciones modernas y escalables utilizando las últimas tecnologías. Mi enfoque 
                se centra en la experiencia del usuario y la calidad del código.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Disfruto trabajando en equipo, aprendiendo constantemente y enfrentando nuevos 
                desafíos que me permitan crecer profesionalmente. Cada proyecto es una oportunidad 
                para innovar y crear soluciones que generen impacto real.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Orientada a Resultados</h4>
                <p className="text-sm text-gray-600">Enfoque en entregar soluciones efectivas</p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Innovadora</h4>
                <p className="text-sm text-gray-600">Siempre buscando nuevas formas de resolver problemas</p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-violet-50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-violet-500 flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Colaborativa</h4>
                <p className="text-sm text-gray-600">Me encanta trabajar en equipo</p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Empática</h4>
                <p className="text-sm text-gray-600">Entiendo las necesidades del usuario</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;