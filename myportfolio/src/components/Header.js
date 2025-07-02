"use client";
import { useCallback, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // React Icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const downloadCV = useCallback(() => {
    window.open("/Resume.pdf", "_blank");
  }, []);

  const navLinks = ["about", "skills", "experience", "projects", "contact"];

  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50 px-6 py-4 shadow-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl text-green-500 font-semibold font-serif hidden md:block">
          Samjhana Gharti Magar
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6 text-white text-md">
            {navLinks.map((link) => (
              <li key={link} className="group">
                <a
                  href={`#${link}`}
                  className="hover:text-green-700 transition duration-500"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
                <div className="mx-auto bg-green-700 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resume Button */}
        <div className="hidden sm:block">
          <button
            onClick={downloadCV}
            className="border border-green-700 rounded-full py-2 px-4 text-lg hover:bg-green-700 transition"
          >
            Resume
          </button>
        </div>

        {/* Hamburger Menu Button - Visible on Mobile */}
        <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black px-6 py-4">
          <ul className="flex flex-col gap-4 text-white text-md">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-green-700 transition duration-500 block"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
            <li> 
              <button
                onClick={downloadCV}
                className="border border-green-700 rounded-full py-2 px-4 w-full text-left hover:bg-green-700 transition"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
