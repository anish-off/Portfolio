import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/selfipic.jpg";
import { Element } from "react-scroll";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Element name="hero" className="w-full">
      <section className="bg-base-100 min-h-screen flex items-center justify-center reveal">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
          {/* Profile Image */}
          <div className="avatar mb-6">
            <div className="w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={profilePic}
                alt="Srianish Rameshwaran — AI Developer & Full Stack Web Developer"
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Hi, I&apos;m Srianish Rameshwaran
            </h1>
            <p className="text-lg sm:text-xl text-base-content/80 mb-6">
              AI Developer | Full Stack Web Developer
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/anish-off"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="btn btn-circle btn-outline"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://in.linkedin.com/in/srianish-rameshwaran"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="btn btn-circle btn-outline"
              >
                <FaLinkedin className="text-2xl text-sky-600" />
              </a>
              <a
                href="mailto:srianish15@gmail.com"
                rel="noopener noreferrer"
                aria-label="Send Email to Srianish"
                className="btn btn-circle btn-outline"
              >
                <FaEnvelope className="text-2xl text-red-500" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default HeroSection;
