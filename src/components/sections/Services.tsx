import { Layers, Smartphone, Globe, Code2, PenTool, Database } from 'lucide-react';
import { services } from '../../data/services';

const Services = () => {
  const iconComponents = {
    layers: <Layers size={36} />,
    smartphone: <Smartphone size={36} />,
    globe: <Globe size={36} />,
    code: <Code2 size={36} />,
    pen: <PenTool size={36} />,
    database: <Database size={36} />,
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title text-center">My Services</h2>
        <p className="text-center text-gray-light text-lg mb-12 max-w-2xl mx-auto fade-in">
          I offer a range of services to help you build and grow your digital presence.
          Here's how I can help you achieve your goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="fade-in glassmorphism p-6 hover:shadow-neon-blue transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                {iconComponents[service.icon as keyof typeof iconComponents]}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-light">{service.description}</p>
              
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-light text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;