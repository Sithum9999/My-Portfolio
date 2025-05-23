import { Heart } from 'lucide-react';
import SocialIcons from '../ui/SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-dark/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="heading-gradient">Sithum</span>
              <span className="text-white"> dev.</span>
            </a>
            <p className="mt-2 text-gray-light text-sm max-w-md">
              Creating digital experiences that combine aesthetics with functionality. Let's build something amazing together.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <SocialIcons />
            </div>
            <p className="text-gray-light text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-accent" /> by Sithum Sankalpa © {currentYear}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-dark/30 text-center text-xs text-gray-light">
          <p>© All Rights Reserved By Sithum Sankalpa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;