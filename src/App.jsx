import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
// import your theme provider if using one

function App() {
  const getInitialTheme = () =>
    localStorage.getItem("theme") || "cupcake";
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    // <ThemeProvider theme={theme}> // if using a provider
      <>
        <Navbar theme={theme} setTheme={setTheme} />
        <HeroSection />
        <About />
        <Experience />
        <Projects />
        
      </>
    // </ThemeProvider>
  );
}

export default App;