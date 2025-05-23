import { Github, Linkedin, Facebook } from 'lucide-react';

interface SocialIconsProps {
  size?: number;
  className?: string;
}

const SocialIcons = ({ size = 20, className = '' }: SocialIconsProps) => {
  const icons = [
    { 
      icon: <Github size={size} />, 
      href: 'https://github.com/Sithum9999',
      label: 'GitHub',
      hoverColor: 'hover:text-white'
    },
    { 
      icon: <Linkedin size={size} />, 
      href: 'https://www.linkedin.com/in/sithum2007/',
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400'
    },
    { 
      icon: <Facebook size={size} />, 
      href: 'https://web.facebook.com/sithum.sankalpa.9674',
      label: 'Facebook',
      hoverColor: 'hover:text-sky-400'
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {icons.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`text-gray-light ${item.hoverColor} transition-colors duration-300 hover:scale-110`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;