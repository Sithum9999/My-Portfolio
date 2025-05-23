import { Code, Palette, Sparkles, Zap } from 'lucide-react';
import Card from '../ui/Card';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'SpringBoot', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Angular', level: 75 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in">
            <p className="text-lg mb-6 text-gray-light">
              I’m passionate about crafting beautiful and functional Web Pages ,Mobile And Web Applications ,With UI/UX design. With a diploma in software development, I enjoy transforming creative ideas into elegant digital experiences one pixel and one algorithm at a time.
            </p>
            <p className="text-lg mb-6 text-gray-light">
              I have hands-on experience in front-end and back-end technologies, and I’m always eager to learn and adapt to new tools and trends in the tech world.
            </p>
            <p className="text-lg text-gray-light">
              <b>My Skills Are:</b> HTML, CSS, JavaScript, Java, Angular, TypeScript, Python, SpringBoot, MYSQL, Git & GitHub & Figma
            </p>
          </div>

          <div className="fade-in">
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-gray-light text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-dark rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            icon={<Code className="text-primary" size={36} />}
            title="Development"
            description="Building robust and scalable applications with modern technologies and best practices."
            className="fade-in"
          />
          <Card
            icon={<Palette className="text-secondary" size={36} />}
            title="UI/UX Design"
            description="Creating intuitive, accessible, and aesthetically pleasing interfaces that users love."
            className="fade-in"
          />
          <Card
            icon={<Sparkles className="text-accent" size={36} />}
            title="Creative Solutions"
            description="Solving complex problems with innovative approaches and creative thinking."
            className="fade-in"
          />
          <Card
            icon={<Zap className="text-yellow-400" size={36} />}
            title="Fast Performance"
            description="Optimizing applications for speed, efficiency, and the best user experience."
            className="fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default About;