import React from "react";
import { FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";
import BelugaChatImg from "../assets/belugachat-ss.png";
import PortfolioImg from "../assets/portfolio.png";
import OlfactiveEchoImg from "../assets/olfactiveecho.png";  
import OneStopCarrerPlatfrom from "../assets/one-stop-career-platform.png";
import ConstructionImg from "../assets/construction.png";


const projects = [
  {
    name: "Construction Procurement Assistant (CPA)",
    image: ConstructionImg,
    description: "AI-powered procurement assistant that converts raw land/project inputs into parameters, estimates material quantities using XGBoost, and maps them to nearby vendors.",
    tech: ["React", "Python", "Flask", "XGBoost", "FAISS", "TailwindCSS"],
    link: "https://github.com/Subicharan1018/ctai",
  },
  {
    name: "One-Stop Personalized Career & Education Advisor",
    image: OneStopCarrerPlatfrom,
    description: "Find your perfect course, college, and career path with AI-powered personalized guidance - all in one place.",
    tech: ["React", "Langchain", "Langgraph", "Ollama","Node","Express","Shadcn", "MongoDB", "TailwindCSS"],
    link: "https://github.com/Subicharan1018/One-Stop-Personalized-Career-Education-Advisor",
  },
  {
    name: "Olfactive Echo",
    image: OlfactiveEchoImg,
    description: "Discover your signature scent with an AI-powered fragrance shopping experience.",
    tech: ["React", "Node", "MongoDB", "Express", "Shadcn", "Langchain", "Langgraph"],
    link: "https://github.com/anish-off/OlfactiveEcho",
  },
  {
    name: "Personal Portfolio",
    image: PortfolioImg,
    description: "A sleek, responsive portfolio that showcases projects with dynamic themes and smooth design.",
    tech: ["React", "DaisyUI", "TailwindCSS"],
    link: "#",
  },
  {
    name: "Chat Application",
    image: BelugaChatImg,
    description: "Real-time private messaging with a seamless, responsive chat experience built on MERN stack.",
    tech: ["React", "DaisyUI", "TailwindCSS", "MongoDB", "Express","Node"],
    link: "https://github.com/anish-off/BelugaChat",
  },
];


const Projects = () => (
<Element name="projects" className="w-full">
  <section className="flex flex-col items-center justify-center min-h-screen px-4">
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      <h2 className="text-5xl font-bold text-center mb-4 font-montserrat text-base-content">
        Projects
      </h2>
      <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      <p className="max-w-3xl text-center text-2xl mb-12 font-montserrat text-base-content">
        Here are some of the projects I have worked on recently.
      </p>
      {/* Projects Grid: 2 per row on md+ screens with gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative group rounded-xl overflow-hidden shadow-xl border-2 border-black  bg-base-100 w-full h-80"
          >
            {/* Project image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 z-0"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 z-10">
              <div className="text-2xl font-bold mb-2 text-white text-center">{project.name}</div>
              <div className="mb-2 text-white text-center">{project.description}</div>
              <div className="flex flex-wrap gap-2 justify-center mb-3 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-primary text-primary-content text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 justify-center mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline"
                  aria-label="View on GitHub"
                >
                  <FaGithub className="text-2xl text-neutral dark:text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</Element>
);

export default Projects;