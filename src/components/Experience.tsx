import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Quality Assurance',
      company: 'Boxful Technologies',
      location: 'San Salvador, El Salvador',
      period: 'Septiembre 2025 - Presente',
      description: 'Responsable de garantizar la calidad del software mediante pruebas manuales y colaboración con equipos de desarrollo para entregar productos confiables y eficientes.',
      achievements: [
        'Realización pruebas manuales detalladas de aplicaciones web en Boxful LATAM, ejecutando casos de prueba e identificando bugs críticos para garantizar alta calidad y una experiencia de usuario fluida.',
        'Ejecución escenarios de prueba completos para funcionalidades logísticas (gestión de envíos y seguimiento de entregas), mejorando la funcionalidad y reduciendo defectos en producción.',
        'Colaboración con equipos de desarrollo y producto para reportar, reproducir y verificar correcciones de bugs, contribuyendo a ciclos de lanzamiento más rápidos y mayor confiabilidad de la plataforma.'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Cypress']
    },
    {
      title: 'STAFF',
      company: 'Centro de Liderazgo y Desarrollo ESEN',
      location: 'Nuevo Cuscatlán, El Salvador',
      period: '2023 - Presente',
      description: 'Desarrollé aplicaciones web completas desde el frontend hasta el backend, trabajando con tecnologías modernas y metodologías ágiles.',
      achievements: [
        'Desarrollé 5 aplicaciones web desde cero',
        'Implementé APIs RESTful robustas y escalables',
        'Reduje el tiempo de carga de las páginas en un 35%'
      ],
      technologies: ['Liderazgo', 'Comunicación', 'Hablar en público', 'Organización', 'Proactividad']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-blue-900 bg-clip-text text-transparent">
                Experiencia Laboral
              </span>
            </h2>
            <div className="w-40 h-1 bg-blue-300 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Las experiencias que me permitieron crecer tanto personal como profesionalmente.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-900"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-10 top-6 w-4 h-4 bg-pink-700 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-slate-100 group">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1 " >{exp.title}</h3>
                      <a href="#" className="flex items-center text-blue-600 font-semibold mb-2 group-hover:text-pink-700   ">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </a>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Descripción:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-semibold text-gray-800 mb-2">Conocimientos en:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-200 text-blue-700 text-sm rounded-full font-medium group-hover:from-pink-100 group-hover:to-pink-200 group-hover:text-pink-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;