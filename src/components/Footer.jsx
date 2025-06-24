import React from "react";
import { Element } from "react-scroll";

const Footer = () => (
  <Element name="footer" className="w-full">
    <footer className="flex flex-col items-center justify-center py-8 px-4">
      <div className="mt-2 text-xs text-base-content/60 text-center">
        &copy; {new Date().getFullYear()} Srianish Rameshwaran.
      </div>
    </footer>
  </Element>
);

export default Footer;