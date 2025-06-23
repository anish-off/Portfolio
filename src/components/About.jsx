import React from "react";
import { Element } from "react-scroll";

const skills = [
  "Python",
  "Java",
  "Node",
  "MongoDB",
  "React",
  "Gen AI",
  "MongoDB",
  "Langchain",
  "Langgraph",
  
];

const About = () => {
  return (
    <Element name="about" className="w-full">
    <section className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-bold text-center mb-4 font-montserrat text-base-content">
          About Me
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        <p className="max-w-3xl text-center text-2xl mb-12 font-montserrat text-base-content">
I'm currently pursuing a B.Tech in Artificial Intelligence and Machine Learning at Kongu Engineering College. I’m passionate about AI, especially Generative AI, Large Language Models (LLMs), intelligent agents, and full-stack web development using the MERN stack.

I'm continuously learning, building projects, and exploring the intersection of machine learning and real-world applications. My goal is to contribute to innovative AI solutions and develop intelligent systems that solve real-world problems.        </p>
        {/* Marquee/Carousel, theme-aware with DaisyUI */}
        <div className="w-full overflow-x-hidden py-4">
          <div className="relative w-full max-w-6xl mx-auto">
            <div
              className="flex gap-8 animate-marquee"
              style={{
                width: "max-content",
                animation: "marquee 18s linear infinite"
              }}
            >
              {skills.concat(skills).map((skill, i) => (
                <div
                  key={i}
                  className="px-12 py-6 rounded-xl text-xl mx-2 text-primary-content bg-primary shadow-md font-montserrat min-w-[150px] text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
    </Element>
  );
};

export default About;