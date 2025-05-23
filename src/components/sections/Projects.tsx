import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Button from '../ui/Button';
import { projects } from '../../data/projects';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-20 bg-background-secondary relative">
      <div className="section-container">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="text-center text-gray-light text-lg mb-12 max-w-2xl mx-auto fade-in">
          Explore my recent work and see how I've helped clients achieve their goals through
          innovative solutions and thoughtful design.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="fade-in rounded-xl overflow-hidden relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                
                {/* Overlay with details */}
                <div 
                  className={`absolute inset-0 bg-background/80 backdrop-blur-sm p-6 flex flex-col justify-center transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-light mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs py-1 px-2 rounded-full bg-gray-dark text-gray-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project title (visible by default) */}
              <div className={`p-4 bg-gray-dark transition-opacity duration-300 ${
                hoveredProject === index ? 'opacity-0' : 'opacity-100'
              }`}>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex mt-2 gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs py-1 px-2 rounded-full bg-background text-gray-light"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs py-1 px-2 rounded-full bg-background text-gray-light">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <Button href="https://github.com/Sithum9999" variant="outline" target="_blank">
            See More on GitHub <Github size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;