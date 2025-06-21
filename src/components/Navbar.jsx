import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === "cupcake" ? "forest" : "cupcake";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="max-w-6xl mx-auto mt-4 fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-base-100 rounded-xl shadow-lg px-6 py-4">
        <div className="flex-1">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-80}
            className="btn btn-ghost text-4xl font-extrabold cursor-pointer"
            style={{ fontFamily: "'Lobster', cursive" }}
          >
            SR
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ul className="menu menu-horizontal hidden md:flex gap-2">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="font-bold cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                offset={-80}
                className="font-bold cursor-pointer"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="font-bold cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="hobbies"
                smooth={true}
                duration={500}
                offset={-80}
                className="font-bold cursor-pointer"
              >
                Hobbies
              </Link>
            </li>
          </ul>
          <a href="/resume.pdf" download className="btn btn-outline"> Resume</a>
          <button onClick={toggleTheme} className="btn btn-ghost text-xl">
            {theme === "cupcake" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;