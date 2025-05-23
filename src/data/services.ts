export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Building modern, responsive websites with a focus on performance and user experience.",
    icon: "code",
    features: [
      "Custom website development",
      "Progressive Web Apps (PWAs)",
      "E-commerce solutions",
      "CMS integration",
      "API development"
    ]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating intuitive, accessible, and visually appealing user interfaces.",
    icon: "pen",
    features: [
      "User research and testing",
      "Wireframing and prototyping",
      "Visual design",
      "Interaction design",
      "Design systems"
    ]
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Developing native and cross-platform mobile applications for iOS and Android.",
    icon: "smartphone",
    features: [
      "React Native development",
      "Flutter development",
      "Native iOS/Android apps",
      "App store optimization",
      "Mobile UX design"
    ]
  },
  {
    id: 4,
    title: "Front-end Development",
    description: "Building responsive, interactive, and performant user interfaces with modern frameworks.",
    icon: "layers",
    features: [
      "React/Angular development",
      "Modern CSS and animations",
      "Responsive design",
      "Performance optimization",
      "Accessibility implementation"
    ]
  },
  {
    id: 5,
    title: "Back-end Development",
    description: "Creating robust, scalable, and secure server-side applications and APIs.",
    icon: "database",
    features: [
      "Node.js/SpringBoot development",
      "Database design and optimization",
      "RESTful API development",
      "GraphQL implementation",
      "Authentication and authorization"
    ]
  },
  {
    id: 6,
    title: "Web Performance",
    description: "Optimizing websites and applications for speed, efficiency, and user experience.",
    icon: "globe",
    features: [
      "Performance auditing",
      "Core Web Vitals optimization",
      "Asset optimization",
      "Caching strategies",
      "SEO implementation"
    ]
  }
];