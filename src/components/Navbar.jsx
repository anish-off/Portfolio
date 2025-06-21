import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

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
          <a className="btn btn-ghost text-4xl font-extrabold" style={{ fontFamily: "'Lobster', cursive" }}>SR</a>
        </div>
        <div className="flex items-center gap-4">
          <ul className="menu menu-horizontal hidden md:flex gap-2">
            <li><a className="font-bold">About</a></li>
            <li><a className="font-bold">Experience</a></li>
            <li><a className="font-bold">Projects</a></li>
            <li><a className="font-bold">Hobbies</a></li>
          </ul>
          <button className="btn btn-outline">Resume</button>
          <button onClick={toggleTheme} className="btn btn-ghost text-xl">
            {theme === "cupcake" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;