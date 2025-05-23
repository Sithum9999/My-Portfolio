import { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Card = ({ icon, title, description, className = '' }: CardProps) => {
  return (
    <div className={`glassmorphism p-6 hover:shadow-neon-blue transition-all duration-300 group ${className}`}>
      <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-light">
        {description}
      </p>
    </div>
  );
};

export default Card;