import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";

const experiences = [
  {
    company: "Kongu Engineering College",
    title: "Student",
    duration: "2023 - Current",
    description:
      "Currently pursuing a Master's degree in AIML, focusing on AI and Machine Learning.",
  },
  {
    company: "Vidyaa Vikas International School",
    title: "Student",
    duration: "10th : 439/500",
    description:" 12th : 451/500",
  },
];

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prevIdx) => (prevIdx + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Element name="experience" className="w-full">
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl font-bold text-center mb-4 font-montserrat text-base-content">
            Experience
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          <p className="max-w-3xl text-center text-2xl mb-12 font-montserrat text-base-content">
            Currently pursuing a B.Tech in Artificial Intelligence and Machine Learning at Kongu Engineering College.
          </p>
          {/* Carousel Panel */}
          <div
            className="w-full max-w-2xl flex flex-col items-center justify-center mb-6 p-8 shadow-xl rounded-2xl bg-primary"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <div className="text-4xl font-bold text-primary-content text-center mb-2">
              {experiences[activeIdx].company}
            </div>
            <div className="text-2xl text-primary-content text-center mb-1">
              {experiences[activeIdx].title}
            </div>
            <div className="text-xl text-primary-content text-center mb-4">
              {experiences[activeIdx].duration}
            </div>
            <div className="text-xl text-primary-content text-center">
              {experiences[activeIdx].description}
            </div>
          </div>
          {/* Carousel Dots */}
          <div className="flex gap-2 items-center justify-center mt-2">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to experience ${idx + 1}`}
                className={`rounded-full transition-all duration-200
                  ${idx === activeIdx 
                    ? 'w-4 h-4 bg-primary border-2 border-primary shadow' 
                    : 'w-3 h-3 bg-base-300'
                  }`}
                onClick={() => setActiveIdx(idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;