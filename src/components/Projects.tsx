import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Plataforma E-commerce Completa',
      description: 'Plataforma completa de comercio electrónico con carrito de compras con sistema de pagos.',
      image: 'https://images.pexels.com/photos/6207729/pexels-photo-6207729.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Taildwind'],
      githubUrl: 'https://github.com/GiovB02/prostore',
      liveUrl: 'https://prostore-three-hazel.vercel.app',
      featured: true
    },
    {
      title: 'GuitarLA - Tienda de Guitarras',
      description: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real, notificaciones push y sincronización multi-dispositivo.',
      image: 'https://images.pexels.com/photos/68710/pexels-photo-68710.jpeg',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://wondrous-bombolone-c5db65.netlify.app',
      featured: true
    },
    {
      title: 'Recetario de Cócteles',
      description: 'Dashboard meteorológico interactivo con mapas, gráficos y predicciones. Incluye geolocalización automática y favoritos personalizables.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'MongoDB', 'Tailwind CSS'],
      githubUrl: 'https://github.com/GiovB02/RecetarioCocteles',
      liveUrl: 'https://fastidious-meringue-19b67a.netlify.app',
      featured: false
    },
    {
      title: 'Planificador de Gastor',
      description: 'Herramienta de análisis para redes sociales con métricas en tiempo real, reportes automatizados y visualizaciones interactivas.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://resplendent-dragon-5249bb.netlify.app',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-blue-800 bg-clip-text text-transparent">
                Mis Proyectos
              </span>
            </h2>
            <div className="w-40 h-1 bg-blue-300 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Una selección de proyectos que demuestran mis habilidades técnicas y creatividad 
              en el desarrollo web.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Proyectos Destacados</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a href={project.githubUrl} className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                          <Github size={18} className="text-gray-700" />
                        </a>
                      )}
                      <a href={project.liveUrl} className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                        <ExternalLink size={18} className="text-gray-700" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-pink-100 to-blue-100 text-pink-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a 
                          href={project.githubUrl}
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-pink-700 hover:text-pink-700 transition-colors duration-200"
                        >
                          <Github size={16} />
                          <span className="text-sm font-medium">Código</span>
                        </a>
                      )}
                      <a 
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                      >
                        <Eye size={16} />
                        <span className="text-sm font-medium">Ver Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Otros Proyectos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold text-gray-800">{project.title}</h4>
                    <div className="flex gap-2">
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a href={project.githubUrl} className="text-gray-500 hover:text-pink-600 transition-colors duration-200">
                          <Github size={18} />
                        </a>
                      )}
                      <a href={project.liveUrl} className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;