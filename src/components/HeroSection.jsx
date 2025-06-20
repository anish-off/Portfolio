import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/selfipic.jpg"; 

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 px-6">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="avatar">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>

        {/* Text Info */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Hi, I'm Srianish Rameshwaran</h1>
          <p className="text-lg mt-2 text-base-content/80">AI Developer | JavaScript | React</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a href="https://github.com/anish-off" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-circle btn-outline">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://in.linkedin.com/in/srianish-rameshwaran" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-circle btn-outline">
              <FaLinkedin className="text-xl text-sky-600" />
            </a>
            <a href="mailto:srianish15@gmail.com" className="btn btn-sm btn-circle btn-outline">
              <FaEnvelope className="text-xl text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
