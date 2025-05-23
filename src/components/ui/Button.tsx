import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

type ButtonAsButton = BaseButtonProps & 
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsAnchor = BaseButtonProps & 
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) => {
  
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-neon-blue focus:ring-primary',
    secondary: 'bg-gradient-to-r from-secondary to-accent text-white hover:shadow-neon-purple focus:ring-secondary',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10 focus:ring-primary',
    ghost: 'bg-transparent text-white hover:bg-white/10 focus:ring-white',
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  // Check if href exists to determine if it's a button or anchor
  if ('href' in props) {
    return (
      <a className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;