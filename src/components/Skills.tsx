import React from 'react';
import { Database, Smartphone, Zap, Code2, PaintBucketIcon, Github, CodeSquare, ShieldCheck, Rocket, Brain, Sparkle, Handshake } from 'lucide-react';

const Skills: React.FC = () => {
  const hardSkills = [
    { name: 'React', icon: <Code2 size={30} /> },
    { name: 'Tailwind', icon: <PaintBucketIcon size={30} /> },
    { name: 'Github', icon: <Github size={30} /> },
    { name: 'Cypress', icon: <ShieldCheck size={30} /> },
    { name: 'Next.js', icon: <CodeSquare size={30} /> },
    { name: 'MongoDB', icon: <Database size={30} /> }
  ];

  const softSkills = [
    { name: 'Resolución de Problemas', icon: <Sparkle size={30} /> },
    { name: 'Trabajo en Equipo', icon: <Handshake size={30} /> },
    { name: 'Comunicación', icon: <Smartphone size={30} /> },
    { name: 'Adaptabilidad', icon: <Zap size={30} /> },
    { name: 'Liderazgo', icon: <Rocket   size={30} /> },
    { name: 'Pensamiento Crítico', icon: <Brain size={30} /> }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-blue-900 bg-clip-text text-transparent">
                Habilidades
              </span>
            </h2>
            <div className="w-40 h-1 bg-blue-300 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Una combinación de habilidades técnicas y competencias interpersonales 
              que me permiten crear soluciones completas y trabajar efectivamente en equipo.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {hardSkills.map((skill, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 flex items-center justify-center group-hover:from-pink-500 group-hover:to-blue-500 transition-all duration-300">
                    <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                      {skill.icon}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-pink-700 transition-colors duration-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
              Habilidades Interpersonales
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-100 to-pink-100 flex items-center justify-center group-hover:from-blue-500 group-hover:to-pink-500 transition-all duration-300">
                    <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                      {skill.icon}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-pink-700 transition-colors duration-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;