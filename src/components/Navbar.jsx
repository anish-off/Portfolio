import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("cupcake");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "cupcake";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

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
        {/* <div className="flex-1">
        <div className="btn btn-ghost text-4xl font-extrabold flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16" style={{ fontFamily: "'Lobster', cursive" }}> SR</div>
</div> */}

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
