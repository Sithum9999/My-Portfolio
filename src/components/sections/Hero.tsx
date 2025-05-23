import { useEffect, useRef } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { useTypeAnimation } from '../../hooks/useTypeAnimation'



const Hero = () => {
  const profileImageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { text: animatedText, isTyping } = useTypeAnimation([
    "A Software Developer",
    "A UI/UX Designer",
    "A Creative Problem Solver",
    "A Full Stack Developer"
  ], 100, 2000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !profileImageRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left - containerRect.width / 2;
      const y = e.clientY - containerRect.top - containerRect.height / 2;

      // Calculate rotation based on mouse position (limited range)
      const maxRotation = 5;
      const xRotation = (y / containerRect.height) * maxRotation;
      const yRotation = -(x / containerRect.width) * maxRotation;

      // Apply 3D rotation to the profile image
      profileImageRef.current.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    };

    const resetRotation = () => {
      if (profileImageRef.current) {
        profileImageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', resetRotation);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', resetRotation);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden flex items-center">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="mb-4">
              <p className="text-gray-light text-lg mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                Sithum <span className="heading-gradient">Sankalpa</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-light h-10">
                {animatedText}
                <span className={`inline-block w-1 h-6 bg-primary ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
              </h2>
            </div>

            <p className="text-gray-light text-lg mb-8 max-w-lg">
              As a Trainee Software Developer ,I’m not just learning to code – I’m learning to create experiences. Every line I write connects logic with feeling, function with form. With a mind trained in mathematics and a heart tuned to design, I aim to build software that people understand, not just use.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="#projects" variant="primary">
                View My Projects <ChevronRight size={16} className="ml-1" />
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>

          <div ref={containerRef} className="relative flex justify-center lg:justify-end fade-in">
            <div
              ref={profileImageRef}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-dark shadow-neon-blue transition-transform duration-200"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src="/sithum.png"
                alt="Sithum Sankalpa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-5 -right-5 w-16 h-16 border-t-2 border-r-2 border-primary rounded-tr-lg opacity-70"></div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 border-b-2 border-l-2 border-secondary rounded-bl-lg opacity-70"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-2 bg-gradient-to-r from-primary to-transparent"></div>
              <div className="absolute top-1/4 -right-8 w-16 h-2 bg-gradient-to-l from-accent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;