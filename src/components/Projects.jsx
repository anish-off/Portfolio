import React from "react";
import { FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";
import BelugaChatImg from "../assets/belugachat-ss.png";
import PortfolioImg from "../assets/portfolio.png";
import OlfactiveEchoImg from "../assets/olfactiveecho.png";  

const projects = [
  {
    name: "Smart Invoice AI",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    description: "AI-powered tool for extracting and validating invoice data. Integrates with ERP.",
    tech: ["React", "FastAPI", "PostgreSQL", "AWS", "OpenAI"],
    link: "#",
  },
  {
    name: "Olfactive Echo",
    image: OlfactiveEchoImg,
    description: "Ecommerce fragrance store with AI-powered guidance to help users discover perfumes based on scent notes.",
    tech: ["Reac", "Node", "MongoDB", "Express","Shadcn" , "Langchain"],
    link: "#",
  },
  {
    name: "Personal Portfolio",
    image: PortfolioImg,
    description: "Responsive React portfolio site with theme switching and dynamic projects.",
    tech: ["React", "DaisyUI", "TailwindCSS"],
    link: "#",
  },
  {
    name: "Chat Application",
    image: BelugaChatImg,
    description: "A real-time chat app with private messaging, built using the MERN stack. Features include authentication, and responsive UI",
    tech: ["React", "DaisyUI", "TailwindCSS", "MongoDB", "Express"],
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