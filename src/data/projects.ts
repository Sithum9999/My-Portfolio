export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Web Site",
    description: "e-commerce website where users can add products to the cart and place orders. They can also add their favorite items to a wishlist and apply discount coupons during checkout to get special offers.",
    image: "/project-1.jpg",
    technologies: ["Angular", "TypeScript", "MYSQL", "SpringBoot"],
    liveUrl: "https://github.com/Sithum9999",
    githubUrl: "https://docs.google.com/document/d/1coAbkNSwFRUlZfxki0kzGhgWZ16AgP1FSDKMYVCupNU/edit?usp=sharing"
  },
  {
    id: 2,
    title: "Sonic Runner",
    description: "Sonic can run and jump. When you perform this move and hit enemies in a row, it creates a combo, which increases your score significantly. Additionally, collecting rings during the run also boosts your score.",
    image: "/project-2.png",
    technologies: ["Html", "Kaplay Library", "JavaScript"],
    liveUrl: "https://github.com/Sithum9999",
    githubUrl: "https://github.com/Sithum9999/sonic_runner"
  },
  {
    id: 3,
    title: "Library Management System",
    description: "The project using JavaFX and the application allows users to manage books, members, and borrowing records efficiently. I have integrated JasperReports to enable PDF reports.",
    image: "/project-3.png",
    technologies: ["JavaFx", "MYSQL", "Jasper Report"],
    liveUrl: "https://github.com/Sithum9999",
    githubUrl: "https://github.com/Sithum9999/library_system"
  },
  {
    id: 4,
    title: "Mos Burger",
    description: "Mos Burger Project has been developed using the Spring Boot framework. This system allows customers to browse through a variety of burgers and beverages, add their preferred items to the cart, and place orders easily.",
    image: "/project-4.png",
    technologies: ["Html", "Css", "JavaScript", "SpringBoot", "MYSQL"],
    liveUrl: "https://github.com/Sithum9999",
    githubUrl: "https://github.com/Sithum9999/Mos_Full_Project"
  },
];